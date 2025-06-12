
'use server';
/**
 * @fileOverview Flow to structure plain text into a hierarchical format.
 *
 * - structureText - A function that takes plain text and returns a hierarchical structure.
 * - StructureTextInput - The input type for the structureText function.
 * - StructureTextOutput - The return type for the structureText function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import type { HierarchicalContentNode } from '@/types/syllabus';

const HierarchicalNodeSchema: z.ZodType<HierarchicalContentNode> = z.lazy(() =>
  z.object({
    id: z.string().describe('A unique string identifier for the node (e.g., "topic-1", "subtopic-1.1").'),
    text: z.string().describe('The textual content of the topic or sub-topic.'),
    children: z.array(HierarchicalNodeSchema).optional().describe('An optional array of child nodes for sub-topics.'),
  })
);

const StructureTextInputSchema = z.object({
  textContent: z.string().describe('The plain text content to be structured.'),
});
export type StructureTextInput = z.infer<typeof StructureTextInputSchema>;

const StructureTextOutputSchema = z.object({
  structuredContent: z.array(HierarchicalNodeSchema).describe('The hierarchically structured content.'),
});
export type StructureTextOutput = z.infer<typeof StructureTextOutputSchema>;


export async function structureText(input: StructureTextInput): Promise<StructureTextOutput> {
  return structureTextFlow(input);
}

const structuringPrompt = ai.definePrompt({
  name: 'structureTextPrompt',
  input: { schema: StructureTextInputSchema },
  output: { schema: StructureTextOutputSchema },
  prompt: `You are an expert in structuring academic text for clear presentation.
Given the following syllabus unit content, transform it into a hierarchical JSON structure.
The goal is to represent the information like a mind-map or a directory tree, making it easy to read and understand the relationships between topics and sub-topics.

The JSON output should be an array of nodes, where each node has:
- "id": A unique string identifier (e.g., "topic-1", "subtopic-1-1"). Use dot notation for sub-topic IDs based on their parent.
- "text": The textual content of the topic or sub-topic.
- "children": An optional array of child nodes, following the same structure, for sub-topics.

Analyze the input text for main topics, sub-topics, and details.
Pay attention to punctuation, existing list-like structures (e.g. sentences starting with numbers or bullets if any, or phrases like "Introduction to X, Y, Z"), and logical groupings.
Break down longer sentences or concepts into smaller, digestible parts in the hierarchy.
Aim for a clear and concise representation. Do not invent new information. Ensure all significant information from the input text is captured in the hierarchy.

Input Text:
{{{textContent}}}

Output ONLY the JSON structure matching the defined output schema.
`,
});

const structureTextFlow = ai.defineFlow(
  {
    name: 'structureTextFlow',
    inputSchema: StructureTextInputSchema,
    outputSchema: StructureTextOutputSchema,
  },
  async (input) => {
    const { output } = await structuringPrompt(input);
    if (!output) {
      // Fallback or error handling if AI fails to structure
      // For now, return an empty structure or a single node with original text
      return { structuredContent: [{ id: 'fallback-1', text: input.textContent, children: [] }] };
    }
    return output;
  }
);

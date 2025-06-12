
import type { SyllabusCourse, HierarchicalContentNode } from '@/types/syllabus';

export const syllabusData: SyllabusCourse[] = [
  {
    type: 'paper',
    title: 'Paper I: Programming in Java',
    maxMarks: 100,
    minMarks: 40,
    note: 'The Question Paper setter is advised to prepare unit-wise question with the provision of internal choice.',
    courseOutcomes: [
      'Develop Applet Programming with various techniques.',
      'Develop applications using AWT.',
      'Working with Graphics, Color and Font',
      'Working with JDBC Classes (Database Operations - Create, Insert, Delete, Update, Select)',
      'Handling Result Set and Statements.',
      'Working with Servlet and JDBC',
      'Handling Client/Server Networking',
      'Working with Java Collections.',
    ],
    units: [
      {
        title: 'UNIT-I',
        structuredContent: [
          {
            text: 'Introduction',
            children: [
              { text: 'History and features of Java' },
              { text: 'Difference between C, C++ & JAVA' },
              { text: 'JAVA and Internet, WWW, Web Browsers' },
              { text: 'Java support system, Java Environment' },
              { text: 'JDK, JVM, Byte code' },
            ],
          },
          {
            text: 'Java Programming Basics',
            children: [
              { text: 'Structure of Java program' },
              { text: 'JAVA tokens and Statements' },
              { text: 'Constants & Variables' },
              { text: 'Data types' },
              { text: 'Operators' },
              { text: 'Command line arguments' },
            ],
          },
          {
            text: 'Java Statements & Arrays',
            children: [
              { text: 'if and switch statement', isCode: true },
              { text: 'while, do-while and for loops', isCode: true },
              { text: 'Introduction to arrays, types of arrays, new operator', isCode: true },
              { text: 'Strings, String class & its methods', isCode: true },
              { text: 'Vectors' },
            ],
          },
          {
            text: 'Classes & Objects',
            children: [
              { text: 'Specifying classes' },
              { text: 'Methods and fields' },
              { text: 'Creating objects' },
              { text: 'Passing objects to methods, returning objects' },
              { text: 'Static fields & methods' },
              { text: 'Constructors' },
              { text: 'Garbage collection' },
              { text: 'Overloading methods & constructors' },
              { text: 'this keyword', isCode: true },
            ],
          },
        ],
      },
      {
        title: 'UNIT-II',
        structuredContent: [
          {
            text: 'Inheritance',
            children: [
              { text: 'Specifying sub class' },
              { text: 'Types of inheritance' },
              { text: 'Visibility control: public, private, protected, package', isCode: true },
              { text: 'super keyword', isCode: true },
              { text: 'Overriding methods' },
              { text: 'Dynamic method dispatch' },
              { text: 'Abstract methods and classes' },
              { text: 'final methods & classes', isCode: true },
            ],
          },
          {
            text: 'Packages & Interfaces',
            children: [
              { text: 'Introduction to packages, naming conventions' },
              { text: 'package statement, creating packages', isCode: true },
              { text: 'import statement, accessing package', isCode: true },
              { text: 'Use of CLASSPATH, adding class to package, hiding classes' },
              { text: 'Interface, implementing interfaces, multiple interfaces' },
            ],
          },
          {
            text: 'Multithreading',
            children: [
              { text: 'Creation threads' },
              { text: 'Extending Thread class, implements Runnable interface', isCode: true },
              { text: 'Stopping and blocking thread' },
              { text: 'Thread life cycle' },
              { text: 'Thread priorities & Thread synchronization' },
              { text: 'Using Thread methods', isCode: true },
            ],
          },
        ],
      },
      {
        title: 'UNIT-III',
        structuredContent: [
          {
            text: 'Exception Handling',
            children: [
              { text: 'Managing errors, types of errors, exceptions' },
              { text: 'Syntax of exception handling code: try, catch, throw, throws and finally statements', isCode: true },
              { text: 'Multiple catch & nested try statements', isCode: true },
            ],
          },
          {
            text: 'Java Input Output',
            children: [
              { text: 'Java I/O package' },
              { text: 'Byte/Character Stream' },
              { text: 'Buffered reader / writer' },
              { text: 'File reader / writer' },
              { text: 'File Sequential / Random' },
              { text: 'Reading numeric, character & strings data from keyboard' },
            ],
          },
          {
            text: 'Applet Programming',
            children: [
              { text: 'Applet Vs. Application' },
              { text: 'Creating applets, life cycle' },
              { text: 'Local & remote applets' },
              { text: '<APPLET> tag & its attributes', isCode: true },
              { text: 'Adding applet to HTML file, Running applet' },
            ],
          },
        ],
      },
      {
        title: 'UNIT-IV',
        structuredContent: [
          {
            text: 'Abstract Windows Toolkit (AWT)',
            children: [
              { text: 'Components and Graphics' },
              { text: 'Containers, Frames and Panels' },
              { text: 'Layout Managers: Border layout, Flow layout, Grid layout, Card layout' },
              { text: 'AWT components' },
              { text: 'Event delegation Model: Event source and handler, Event categories, Listeners, Interfaces' },
              { text: 'Controls: text box, radio buttons, checkboxes, lists, choice, command buttons, text area etc.' },
            ],
          },
          {
            text: 'JDBC (Java Database Connectivity)',
            children: [
              { text: 'Types of JDBC drivers' },
              { text: 'Writing JDBC applications' },
              { text: 'Types of statement objects: Statement, PreparedStatement and CallableStatement', isCode: true },
              { text: 'Types of resultset' },
              { text: 'Inserting and updating records' },
              { text: 'JDBC and AWT' },
            ],
          },
        ],
      },
      {
        title: 'UNIT-V',
        structuredContent: [
          {
            text: 'Networking with Java',
            children: [
              { text: 'Networking basics, Sockets, port' },
              { text: 'Internet addressing' },
              { text: 'java.net – networking classes and interfaces', isCode: true },
              { text: 'Implementing TCP/IP based Server and Client' },
            ],
          },
          {
            text: 'Servlets',
            children: [
              { text: 'Introduction Servlet API Overview' },
              { text: 'Writing and running Simple Servlet, Servlet Life cycle' },
              { text: 'Generic Servlet, HTTPServlet', isCode: true },
              { text: 'ServletConfig, ServletContest', isCode: true },
              { text: 'Writing Servlet to handle Get and Post methods' },
            ],
          },
        ],
      },
    ],
    recommendedBooks: [
      'Horstman Cay, Cornell Gary, Core JavaTM2, Vol.1&2, 7edition, Pearson Education.',
      'Herbert Schildt, The Complete Reference, seventh edition, [TMH]',
      'Programming with JAVA – A Primer by E. Balguruswamy (TMH)',
      'Steven Holzner, JAVA 2 Programming Black Book, Wiley India.',
      'Ivor Horton, Beginning Java 2, JDK 5 Ed, Wiley India.',
      'Java 2 from scratch by Steven Haines the – PHI',
      'Java database Programming – Maithew Siple – THM',
    ],
    digitalPlatforms: [
      { text: 'Swayam - AIC20_SP13 (Preview 1)', url: 'https://onlinecourses.swayam2.ac.in/aic20_sp13/preview' },
      { text: 'Swayam - AIC20_SP13 (Preview 2)', url: 'https://onlinecourses.swayam2.ac.in/aic20_sp13/preview' },
      { text: 'Swayam - AIC20_SP56', url: 'https://onlinecourses.swayam2.ac.in/aic20_sp56/preview' },
    ],
  },
  {
    type: 'paper',
    title: 'Paper II: Computer Graphics',
    maxMarks: 100,
    minMarks: 40,
    note: 'The Question Paper setter is advised to prepare unit-wise question with the provision of internal choice.',
    courseOutcomes: [
        'Students will have an appreciation of the history and evolution of computer graphics, both hardware and software. Assessed by written homework assignment.',
        'Students will have an understanding of 2D graphics and algorithms including: line drawing, polygon filling, clipping, and transformations. They will be able to implement these. Assessed by tests and programming assignments.',
        'Students will understand the concepts of and techniques used in 3D computer graphics, including viewing transformations, hierarchical modeling, color, lighting and texture mapping. Students will be exposed to current computer graphics research areas. Assessed by tests, homework and programming assignments.',
        'Students will be able to use a current graphics API (OpenGL). Assessed by programming assignments.',
        'Students will be introduced to algorithms and techniques fundamental to 3D computer graphics and will understand the relationship between the 2D and 3D versions of such algorithms. Students will be able to reason about and apply these algorithms and techniques in new situations. Assessed by tests and programming assignments.',
    ],
    units: [
      {
        title: 'UNIT-I',
        structuredContent: [
          { text: 'Introduction of computer Graphics and its applications' },
          { text: 'Overview of Graphics systems' },
          {
            text: 'Video display devices',
            children: [
              { text: 'Raster scan display, Raster scan systems, video controller, Raster scan display processor' },
              { text: 'Random scan display, random scan systems' },
              { text: 'Color CRT monitor' },
              { text: 'Flat panel display' },
            ],
          },
          {
            text: 'Interactive input devices',
            children: [
              { text: 'Logical classification of input devices' },
              { text: 'Keyboard, mouse, Trackball and spaceball, Joysticks, Image scanner, Light pens' },
            ],
          },
          { text: 'Graphics software' },
          { text: 'Coordinates representations' },
          { text: 'Graphics functions' },
        ],
      },
      {
        title: 'UNIT-II',
        structuredContent: [
          { text: 'Line drawing algorithms: DDA, Bresenham’s' },
          { text: 'Circle generating: Mid-point circle algorithm' },
          { text: 'Ellipse generating: Polynomials' },
          { text: 'Scan-line polygon fill' },
          { text: 'Boundary fill' },
        ],
      },
      {
        title: 'UNIT-III',
        structuredContent: [
          { text: 'Basic transformations: Translation, Rotation, Scaling' },
          { text: 'Matrix representations & homogeneous co-ordinates' },
          { text: 'Composite transformations: Reflection' },
          { text: 'Two dimensional viewing' },
          { text: 'Two dimensional clipping: Line, Polygon, Curve, Text' },
          { text: '3D-transformation, Projection, Viewing, Clipping' },
        ],
      },
      {
        title: 'UNIT-IV',
        structuredContent: [
          {
            text: 'Spline representation',
            children: [
              { text: 'Cubic spline' },
              { text: 'Bezier curve, Bezier surfaces' },
              { text: 'Beta spline' },
              { text: 'B-spline surfaces, B-spline curve' },
            ],
          },
          { text: 'Hidden surfaces' },
          { text: 'Hidden lines' },
          { text: 'Z-buffer' },
        ],
      },
      {
        title: 'UNIT-V',
        structuredContent: [
          {
            text: 'Fractals geometry',
            children: [
              { text: 'Fractal generation procedure' },
              { text: 'Classification of Fractal' },
              { text: 'Fractal dimension' },
              { text: 'Fractal construction methods' },
            ],
          },
          { text: 'Color models: XYZ, RGB, YIQ, CMY & HSV' },
          {
            text: 'Shading algorithms',
            children: [
              { text: 'Shading model' },
              { text: 'Illumination model' },
              { text: 'Gouraud shading' },
              { text: 'Phong shading' },
            ],
          },
        ],
      },
    ],
    recommendedBooks: [
        'Computer Graphics by M. Pauline Baker, Donald Hearn PHI.',
        'Mathematical Element for Computer Graphics By. David F. Roger., J. Alan Adamsnd',
        'Principles of Interactive Computer Graphics By. William. M. Newmann.',
        'Procedural Element for Computer Graphics By. David F. Roger. Mc. Graw Hill.',
        'Computer Graphics By A.P. Godse, TPPublication,',
        'Computer Graphics By V.K. Pachghare, Laxmi Publication',
    ],
    digitalPlatforms: [
      { text: 'NPTEL - NOC22_CS111', url: 'https://onlinecourses.nptel.ac.in/noc22_cs111/preview' },
      { text: 'NPTEL - NOC22_ME105', url: 'https://onlinecourses.nptel.ac.in/noc22_me105/preview' },
    ],
  },
  {
    type: 'paper',
    title: 'Paper III: LINUX',
    maxMarks: 100,
    minMarks: 40,
    note: 'The Question Paper setter is advised to prepare unit-wise question with the provision of internal choice.',
    courseOutcomes: [
      'Find the latest version of a distribution of Linux',
      'Install, configure and use Linux to run as a server or a desktop',
      'Use CLI to perform many administrative functions on Linux either server or desktop',
      'Find, install, configure and update software on a Linux server or desktop',
      'Manage users\' accounts, permissions and authorization on a Linux server or a desktop',
      'Manage file systems on a Linux server or desktop',
      'Run desktop virtualization on a wide variety of operating systems including Windows and Linux Setup Linux to provide a service depending on what the needs are ie., DNS, DHCP, WWW, email, file and print'
    ],
    units: [
      {
        title: 'UNIT - I',
        structuredContent: [
          {
            text: 'Introduction',
            children: [
              { text: 'Introduction to Multi-user System' },
              { text: 'Emergency and history of Unix' },
              { text: 'Feature and benefits, Versions of Unix' },
            ],
          },
          {
            text: 'System Structure',
            children: [
              { text: 'Hardware requirements' },
              { text: 'Kernel and its function' },
              { text: 'Introduction to System calls and Shell' },
            ],
          },
          {
            text: 'File System',
            children: [
              { text: 'Feature of Unix File System' },
              { text: 'Concept of i-node table, links' },
              { text: 'Commonly used commands (e.g., who, pwd, cd, mkdir, rm, ls, mv, lp, chmod, cp, grep, sed, awk, pr, lex, yacc, make)', isCode: true },
              { text: 'Getting started (login / logout)' },
              { text: 'File system management, file operation, system calls, buffer cache' },
            ],
          },
          {
            text: 'Vi Editor',
            children: [
              { text: 'Intro to text processing' },
              { text: 'Command and edit mode, invoking vi' },
              { text: 'Command structure, deleting and inserting line' },
              { text: 'Deleting and replacing character, searching strings, yanking' },
              { text: 'Running shell command, command macros' },
              { text: 'Set windows, set auto indent, set number, intro to exrc file' },
            ],
          },
        ],
      },
      {
        title: 'UNIT - II',
        structuredContent: [
          {
            text: 'Shell Programming',
            children: [
              { text: 'Introduction to shell feature, wild card characters' },
              { text: 'I/O redirections, standard error redirection' },
              { text: 'System and user created shell variables, profile files' },
              { text: 'Pipes/tee, background processing' },
              { text: 'Command line arguments, command substitution, read statement' },
              { text: 'Conditional execution of commands' },
              { text: 'Special shell variables ($ #, #?, $ * etc.)', isCode: true },
              { text: 'Shift commands' },
              { text: 'Loops and decision making: for, while and until', isCode: true },
              { text: 'Choice making using case...esac', isCode: true },
              { text: 'Decision making if...fi', isCode: true },
              { text: 'Using test, string comparison, numerical comparison, logical operation, using expr', isCode: true },
            ],
          },
        ],
      },
      {
        title: 'UNIT - III',
        structuredContent: [
          {
            text: 'Introduction to Shell (Advanced)',
            children: [
              { text: 'Features, changing the login shell' },
              { text: 'cshrc, login, logout files', isCode: true },
              { text: 'Setting environment variables' },
              { text: 'History and alias mechanism' },
              { text: 'Command line arguments' },
              { text: 'Redirection/appending safely, noclobber, noglob, ignore eof', isCode: true },
              { text: 'Directory stacks (pushd, popd)', isCode: true },
              { text: 'Feature of other shell (rsh, vsh)', isCode: true },
            ],
          },
          {
            text: 'Process Control',
            children: [
              { text: 'Process management, process states and transition' },
              { text: 'Regions and control of process' },
              { text: 'Sleep and waking' },
              { text: 'Process creation, process killing' },
              { text: 'Signals' },
              { text: 'System boot and init process', isCode: true },
              { text: 'Traps' },
              { text: 'Setting process priorities' },
            ],
          },
        ],
      },
      {
        title: 'UNIT - IV',
        structuredContent: [
          {
            text: 'Inter-process Communication',
            children: [
              { text: 'I/O Sub system, terminal drives, disk drives' },
              { text: 'Messages, shared memory, semaphores' },
              { text: 'Memory management, swapping, demand paging' },
            ],
          },
          {
            text: 'System Calls and Unix -C Interface',
            children: [
              { text: 'File handling calls: access(), open(), create(), read(), write(), close(), fseek()', isCode: true },
              { text: 'Process control system calls: kill(), exec(), fork(), wait(), signal(), exit()', isCode: true },
              { text: 'Comparing stdio library and calls', isCode: true },
            ],
          },
        ],
      },
      {
        title: 'UNIT - V',
        structuredContent: [
          {
            text: 'System Administration',
            children: [
              { text: 'Process and Scheduling' },
              { text: 'Security' },
              { text: 'Basic System Administration: Adding a User, User Passwords, Delete of a User, Adding a Group, Deleting a Group, Super User, Startup and Shutdown' },
              { text: 'Advanced System Administration: Managing Disk Space, Backup and Restore, Managing System Services' },
            ],
          },
          {
            text: 'Xwindows',
            children: [{ text: 'Introduction to Xwindows concept' }],
          },
        ],
      },
    ],
    recommendedBooks: [
      'Arnold Robbins, “Linux Programming by Examples The Fundamentals”, Pearson Education, 2Ed., 2008.',
      'Cox K, “Red Hat Linux Administrator’s Guide”, PHI, 2009.',
      'R. Stevens, “UNIX Network Programming”, PHI, 3Ed., 2008.',
      'Sumitabha Das, “Unix Concepts and Applications”, TMH, 4Ed., 2009.'
    ],
    digitalPlatforms: [
      { text: 'Swayam - AIC20_SP05', url: 'https://onlinecourses.swayam2.ac.in/aic20_sp05/preview' },
      { text: 'Swayam - AIC20_SP24', url: 'https://onlinecourses.swayam2.ac.in/aic20_sp24/preview' },
      { text: 'Swayam - AIC20_SP45', url: 'https://onlinecourses.swayam2.ac.in/aic20_sp45/preview' }
    ]
  },
   {
    type: 'paper',
    title: 'Paper IV: Image Processing',
    maxMarks: 100,
    minMarks: 40,
    note: 'The Question Paper setter is advised to prepare unit-wise question with the provision of internal choice.',
    courseOutcomes: [
      'To study the image fundamentals and mathematical transforms necessary for image processing.',
      'To study the image enhancement techniques',
      'To study image restoration procedures.',
      'Review the fundamental concepts of a digital image processing system.',
      'Analyze images in the frequency domain using various transforms.',
      'Evaluate the techniques for image enhancement and image restoration.',
      'Categorize various compression techniques.',
      'Interpret Image compression standards.',
      'Interpret image segmentation and representation techniques.'
    ],
    units: [
      {
        title: 'UNIT - I',
        structuredContent: [
          {
            text: 'Digital Image fundamentals',
            children: [
              { text: 'Introduction' },
              { text: 'An image model' },
              { text: 'Sampling & quantization' },
              { text: 'Basic relationships between Pixels' },
              { text: 'Imaging geometry' },
            ],
          },
        ],
      },
      {
        title: 'UNIT - II',
        structuredContent: [
          {
            text: 'Image Transforms',
            children: [
              { text: 'Properties of 2 – D Fourier transform' },
              { text: 'FFT algorithm and other separable image transforms' },
              { text: 'Walsh transforms' },
              { text: 'Hadamard, Cosine, Haar, Slant transforms, KL transforms and their properties' },
            ],
          },
        ],
      },
      {
        title: 'UNIT - III',
        structuredContent: [
          {
            text: 'Image Enhancement',
            children: [
              { text: 'Background' },
              { text: 'Enhancement by point processing, histogram processing' },
              { text: 'Spatial filtering and enhancement in frequency domain' },
              { text: 'Color image processing' },
            ],
          },
          {
            text: 'Image filtering and restoration',
            children: [
              { text: 'Degradation model' },
              { text: 'Diagnolisation of circulant and block circulate matrices' },
              { text: 'Algebraic approach to restoration' },
              { text: 'Inverse filtering, least mean squares and interactive restoration' },
              { text: 'Geometric transformations' },
            ],
          },
        ],
      },
      {
        title: 'UNIT - IV',
        structuredContent: [
          {
            text: 'Image compression',
            children: [
              { text: 'Fundamentals' },
              { text: 'Image compression modes' },
              { text: 'Error free compression, lossy compression' },
              { text: 'Image compression standards' },
            ],
          },
          {
            text: 'Image segmentation',
            children: [
              { text: 'Detection of discontinuities, edge linking and boundary detection' },
              { text: 'Thresholding' },
              { text: 'Region – oriented segmentation' },
              { text: 'Use of motion in segmentation' },
            ],
          },
        ],
      },
      {
        title: 'UNIT - V',
        structuredContent: [
          {
            text: 'Representation and description',
            children: [
              { text: 'Various schemes for representation' },
              { text: 'Boundary descriptors' },
              { text: 'Regional descriptors' },
            ],
          },
          { text: 'Image reconstruction from Projections' },
          { text: 'Radon Transforms' },
          { text: 'Convolution/Filter back – Project Algorithms' },
        ],
      },
    ],
    recommendedBooks: [
      'Fundamentals of Digital Image Processing - A. K. Jain, Prentice Hall',
      'Digital Image Processing - Rafael C. Gonzalez, Richard E. Woods'
    ],
    digitalPlatforms: [
      { text: 'NPTEL - NOC22_EE116', url: 'https://onlinecourses.nptel.ac.in/noc22_ee116/preview' }
    ]
  },
  {
    type: 'paper',
    title: 'Paper V: Object Oriented Analysis And Design',
    maxMarks: 100,
    minMarks: 40,
    note: 'The Question Paper setter is advised to prepare unit-wise question with the provision of internal choice.',
    courseOutcomes: [
      'be able to use an object-oriented method for analysis and design',
      'be able to analyze information systems in real-world settings and to conduct methods such as interviews and observations',
      'have a general understanding of a variety of approaches and perspectives of systems development, and to evaluate other IS development methods and techniques',
      'know techniques aimed to achieve the objective and expected results of a systems development process',
      'know different types of prototyping',
      'know how to use UML for notation.'
    ],
    units: [
      {
        title: 'UNIT-I',
        structuredContent: [
          {
            text: 'Introduction',
            children: [
              { text: 'Two views of software Developments: SSAD and OOAD' },
              {
                text: 'Why Object –Orientation?',
                children: [
                  { text: 'Object and classes' },
                  { text: 'Abstraction and encapsulation' },
                  { text: 'Methods and Message' },
                  { text: 'Interfaces' },
                  { text: 'Inheritance and Polymorphism' },
                  { text: 'Access Control' },
                ],
              },
              { text: 'The Business case for OO Developments' },
            ],
          },
          {
            text: 'Object Oriented Methodologies',
            children: [
              { text: 'Object Oriented Design – Booch' },
              { text: 'Object Modeling Techniques – Rumbaugh' },
              { text: 'Object – Oriented Analysis – Coad-Yourdan' },
              { text: 'Object – Oriented Software Engineering – Ivar Jacobson' },
            ],
          },
        ],
      },
      {
        title: 'UNIT-II',
        structuredContent: [
          {
            text: 'Unified Approach',
            children: [
              { text: 'Diagramming and Notational Techniques using the UML' },
              { text: 'UML Notation' },
              { text: 'Analysis Diagramming Techniques (Introduction to all ten diagrams)' },
              { text: 'Design Diagramming Techniques' },
              { text: 'Generalization/Specialization, Aggregation and composition, Association, Cardinality, Navigability, Icons, relationships and adornments' },
            ],
          },
          {
            text: 'Object-Oriented Systems Development Process',
            children: [
              { text: 'Rational Unified Process' },
              { text: 'Four Major phases: Inception, Elaboration, Construction, Transition' },
            ],
          },
          {
            text: 'Requirements Engineering',
            children: [
              { text: 'Problem analysis, Understanding Stockholders need' },
              { text: 'Type of requirements' },
              { text: 'Use-case Model: Writing Requirements' },
            ],
          },
        ],
      },
      {
        title: 'UNIT-III',
        structuredContent: [
          {
            text: 'Analysis',
            children: [
              { text: 'Behavioral Analysis' },
              { text: 'Domain Analysis or Business Object Analysis' },
              {
                text: 'Use-case Driven Object Oriented analysis: The UML approach',
                children: [
                  { text: 'Develop use-case Model' },
                  { text: 'Use-case Description' },
                  { text: 'Documentation, Activity Diagram' },
                  { text: 'Identify the classes' },
                ],
              },
              {
                text: 'Introduction to different approaches for identifying classes:',
                children: [
                  { text: '“Noun Phrase” approach OR' },
                  { text: '“Conman Class Pattern” approach OR' },
                  { text: '“CRC” approach OR' },
                  { text: 'Use case Driven Approach' },
                ],
              },
              { text: 'Containment and Composition, Aggregation, Inheritance' },
              { text: 'SubTypes and IS-A Hierarchies' },
              { text: 'Association and Link Relationships' },
              { text: 'Diagramming System Events' },
            ],
          },
        ],
      },
      {
        title: 'UNIT-IV',
        structuredContent: [
          {
            text: 'Design Phases',
            children: [
              { text: 'Translating Analysis Concept into Design' },
              { text: 'Optimizing classes and Objects: The Multi-tiered Architecture View' },
              { text: 'Mapping System functions to objects' },
              { text: 'Object to Object Visibility' },
              { text: 'Collaboration Diagram' },
              { text: 'Sequential Diagram' },
              { text: 'Specification Class Diagram' },
              { text: 'Specifying Object Interfaces' },
              { text: 'Designing the Data Access layer' },
              { text: 'Design User Interface layer' },
              { text: 'Designing System Interfaces, Controls and Security' },
            ],
          },
        ],
      },
      {
        title: 'UNIT-V',
        structuredContent: [
          {
            text: 'Design Refinement',
            children: [
              { text: 'Designing for Extensibility' },
              { text: 'Design for reusability' },
              { text: 'Portioning class space' },
              { text: 'Checking Completeness and correctness' },
            ],
          },
          {
            text: 'Persistent Object and Database Issues',
            children: [
              { text: 'The Cood Data Management Domain' },
              { text: 'Object Persistence' },
              { text: 'Object-oriented Database Management System' },
              { text: 'Object-Oriented verses Relational Database' },
              { text: 'Mapping object to Relational Data structure' },
            ],
          },
          {
            text: 'Testing',
            children: [
              { text: 'Introduction to Testing Strategies' },
              { text: 'Impact of Object Orientation on Testing' },
              { text: 'Testing Business Process' },
              { text: 'Design Matrix' },
              { text: 'Discovering reusable pattern' },
            ],
          },
        ],
      },
    ],
    recommendedBooks: [
      'Object Oriented Analysis and Design with Applications - Grady Booch, Benjamin/Cummings.',
      'Object Oriented Modeling and Design. – J Rumbaugh, M Blaha, W .Premerlani',
      'Principles of Object-Oriented Software Development - Anton Eliens, Addison Wesley.',
      'Object Oriented System Development - Ali Bahrami McGRAW-HILL.',
      'Object Oriented Software Engineering – Ivar Jacobson Pearson Education INC',
      'Design Object-Oriented Software - Rebecea Wrifs-Brock. Brian Wilkerson, Lauren Wiener,'
    ],
    digitalPlatforms: [
      { text: 'NPTEL - NOC22_CS99', url: 'https://onlinecourses.nptel.ac.in/noc22_cs99/preview' }
    ]
  },
  {
    type: 'practical',
    title: 'M.Sc.(CS) - III : Practical Based on Paper I (Java)',
    examinationSchemeIntro: 'Practical examination will be two programs and a project demonstration. It will be of 3 hours duration. All programme with flow chart & algorithms. The distribution of practical marks will be as follows',
    examinationSchemeMarks: [
      'Programme1 - 20',
      'Programme2 - 20',
      'Programme3 - 20',
      'Viva - 25',
      '[PracticalCopy+InternalRecord] - 15',
      'Total - 100',
    ],
    note: 'This is tentative list; the teachers concern can add more program as per requirement.',
    programs: [
        { id: 'java-prog-1', description: 'WAP to print Fibbonaci Series.' },
        { id: 'java-prog-2', description: 'WAP to Check that the given string is a Palindrome.' },
        { id: 'java-prog-3', description: 'WAP to add the elements of Vector as arguments of main method (Run time) and rearrange them, and copy it into an Array.' },
        { id: 'java-prog-4', description: 'WAP to to arrange the string in alphabetical order. WAP for StringBuffer class which perform the all methods of that class.' },
        { id: 'java-prog-5', description: 'WAP to calculate Simple Interest using the Wrapper Class.' },
        { id: 'java-prog-6', description: 'WAP to calculate Area of various geometrical figures using the abstract class.' },
        { id: 'java-prog-7', description: 'WAP to design a class using abstract Methods and Classes.' },
        { id: 'java-prog-8', description: 'WAP to create a Simple class to demonstrate Inheritance using super and this keywords.' },
        { id: 'java-prog-9', description: 'WAP to to demonstrate overriding methods in Inheritance.' },
        { id: 'java-prog-10', description: 'WAP to create a package using command & one package will import another package.' },
        { id: 'java-prog-11', description: 'WAP where Single class implements more than one interfaces and with the help of interface reference variable user call the methods.' },
        { id: 'java-prog-12', description: 'WAP for multithread using the Alive(),Join() & Synchronized() methods of thread class.' },
        { id: 'java-prog-13', description: 'WAP that use the multiple catch statements within the try-catch and finally mechanism.' },
        { id: 'java-prog-14', description: 'WAP where user will create a self-Exception using the "throw" keyword.' },
        { id: 'java-prog-15', description: 'WAP to create a file and to store data into the file (using FileWriterIOStream).' },
        { id: 'java-prog-16', description: 'WAP to illustrate the use of all methods of URL class.' },
        { id: 'java-prog-17', description: 'Write a Program for Matrix Multiplication and Transpose using Input/Output Stream.' },
        { id: 'java-prog-18', description: 'WAP to demonstrate the Border Layout using applet.' },
        { id: 'java-prog-19', description: 'WAP in java for applet that handle the KeyBoard Events.' },
        { id: 'java-prog-20', description: 'WAP to create an Applet using HTML file, where Parameter passes for font size & font type and Applet message will change to corresponding parameters.' },
        { id: 'java-prog-21', description: 'WAP for displaying the Checkboxes, Labels and TextFields on an AWT.' },
        { id: 'java-prog-22', description: 'WAP for AWT to create Menu and Popup Menu for Frame.' },
        { id: 'java-prog-23', description: 'WAP for Applet which generate the MouseMotionListener Event.' },
        { id: 'java-prog-24', description: 'WAP to create a table using JDBC.' },
        { id: 'java-prog-25', description: 'WAP for JDBC to insert the values into the existing table by using prepared Statement.' },
        { id: 'java-prog-26', description: 'WAP for JDBC to display the records from the existing table.' },
        { id: 'java-prog-27', description: 'WAP using JDBC to delete a record from an existing Table.' },
        { id: 'java-prog-28', description: 'WAP which support the TCP/IP protocol, where client gives the message and server will be, receives the message.' },
        { id: 'java-prog-29', description: 'WAP to illustrate the use of all methods of URL class.' },
        { id: 'java-prog-30', description: 'WAP for Writing and running a Simple Servlet to handle Get and Post Methods' }
    ],
  },
  {
    type: 'practical',
    title: 'M.Sc.(CS) - III : Practical Based on Paper III (Linux)',
    examinationSchemeIntro: 'Practical examination will be two programs and a project demonstration. It will be of 3 hours duration. All programme with flow chart & algorithms. The distribution of practical marks will be as follows',
    examinationSchemeMarks: [
      'Programme1 - 20',
      'Programme2 - 20',
      'Programme3 - 20',
      'Viva - 25',
      '[PracticalCopy+InternalRecord] - 15',
      'Total - 100',
    ],
    programs: [
      { id: 'linux-prog-1', description: 'Add a user and password, change the password. Add & remove a group.' },
      { id: 'linux-prog-2', description: 'Using vi editor do the following exercises: 1. In a file, replace the words ‘has’ with ‘has not ‘. 2. Locate nth character. 3. Sort lines 21 to 40.' },
      { id: 'linux-prog-3', description: 'In a file copy/cut and paste following text: i. At ith line, n lines to jth line. ii. Yank a few words. iii. Cut and paste n words to ith position in lth line.' },
      { id: 'linux-prog-4', description: 'Open two files ‘txtfile’ and ‘newfile’ and copy/cut 5 lines from txtfile and paste them in newfile using vi editor. Open ‘txtfile’ and copy/cut following and paste to the ‘newfile’ ith to the last line in it.' },
      { id: 'linux-prog-5', description: 'Create macro: 1. to paste your name at any position in the file. 2. to map the 1st function key to search for “loop” and copy into the buffer ‘a’ all text following it up to but not including the string “end”. 3. to remove all leading spaces in a file. 4. to save and quit vi editor in input mode.' },
      { id: 'linux-prog-6', description: 'Write commands: i. List all files that match a class. ii. List all files that do not match a class. iii. Change the file permissions.' },
      { id: 'linux-prog-7', description: 'Write commands: i. Display the lines in a file that contain a particular word. ii. Append the contents of two files in a file JABC. iii. Count the number of files in a directory.' },
      { id: 'linux-prog-8', description: 'Write shell programs: List all files in current directory and save the list in a file ABC. Also save the contents of the files in ABC and display the contents in ABC in sorted order.' },
      { id: 'linux-prog-9', description: 'Write shell programs: Sort the contents of a file ABC and save it in OABC.' },
      { id: 'linux-prog-10', description: 'Write shell programs: To save current date & time, number of files & directories in the current directory and contents of all the files to a single file NFL.' },
      { id: 'linux-prog-11', description: 'Write shell programs: To input a number and test whether it is +ve, -ve or zero.' },
      { id: 'linux-prog-12', description: 'Write shell programs: To test whether a filename is a regular file or a directory or of other type. To list only the directories in current path.' },
      { id: 'linux-prog-13', description: 'Write shell programs: To print the greatest of three numbers.' },
      { id: 'linux-prog-14', description: 'Write shell programs: To print 12 terms of Fibonacci series.' },
      { id: 'linux-prog-15', description: 'Write shell programs: To display particular messages depending on the weekday.' },
      { id: 'linux-prog-16', description: 'Write shell programs: To display common messages for following group of days-Monday & Wednesday, Tuesday & Thursday and Friday & Saturday and other day.' },
      { id: 'linux-prog-17', description: 'Write shell programs: To accept a string from the terminal and echo a suitable message if it doesn’t have at least 9 characters.' },
      { id: 'linux-prog-18', description: 'Write shell programs: Write a Shell Script to find the factorial of a number.' },
      { id: 'linux-prog-19', description: 'Write shell programs: Write a Shell Script to swap two numbers using third variable.' },
      { id: 'linux-prog-20', description: 'Write shell programs: Write a Shell Script to print prime numbers between 1 to 20.' },
      { id: 'linux-prog-21', description: 'Write shell programs: Write a Shell Script to greatest of three numbers.' },
      { id: 'linux-prog-22', description: 'Write shell programs: Write a Shell Script to display mathematical table of any number in the format E x :- 3*1=3.' },
      { id: 'linux-prog-23', description: 'Perform the disk partition and formatting for Linux file system.' },
      { id: 'linux-prog-24', description: 'Perform the BOSS Linux Installation.' },
      { id: 'linux-prog-25', description: 'Install the latest version of Mozilla Firefox web browser in LINUX.' },
      { id: 'linux-prog-26', description: 'Install the printer driver and print text page in Linux.' },
      { id: 'linux-prog-27', description: 'Compile and run a “C” Language program for find out compound interest in Linux.' },
      { id: 'linux-prog-28', description: 'Compile and run a “C++” Language program for factorial Number in Linux.' },
      { id: 'linux-prog-29', description: 'Compile and run a “JAVA” Language program for print prime number up to 50.' }
    ]
  }
];

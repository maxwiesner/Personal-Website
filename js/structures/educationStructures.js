
var educHeaderY = 2.2;
var educationHeaderArray = [{
        id: "computer",
        major: "Computer Science",
        focus: "[Computer]",
        subcollege: "College of Engineering and Applied Science",
        dates: "January 2020 - May 2021",
        setTrue: ["computer", "educHeader"],
        headerLinked: ['computer-header', 'math-header', 'econ-header'],
        buttonLinked: ['computer-button', 'math-button', 'econ-button'],
        add: ['computer-color', 'math-header-color', 'econ-header-color',
            'computer-header-color'
        ],
        position: [-1.3, educHeaderY]
    },
    {
        id: "math",
        major: "Mathematics",
        focus: "[Computational Mathematics Track]",
        subcollege: "College of Arts and Sciences",
        dates: "January 2020 - May 2021",
        setTrue: ["math", "educHeader"],
        headerLinked: ['math-header', 'computer-header', 'econ-header'],
        buttonLinked: ['math-button', 'econ-button', 'computer-button'],
        add: ['math-color', 'math-header-color', 'econ-header-color',
            'computer-header-color'
        ],
        position: [0, educHeaderY],
    },
    {
        id: "econ",
        major: "Economics",
        focus: "[International Economics Track]",
        subcollege: "College of Arts and Sciences",
        dates: "August 2015 - May 2019",
        setTrue: ["econ", "educHeader"],
        headerLinked: ['econ-header', 'math-header', 'computer-header'],
        buttonLinked: ['econ-button', 'math-button', 'computer-button'],
        add: ['econ-color', 'math-header-color', 'econ-header-color',
            'computer-header-color'
        ],
        position: [1.3, educHeaderY],
    }
];


var educSelectedX = -1.45;
var educSelectedY = 2.1;
var educSelectedStepY = 2;
var EducationHeaderSelectedArray = [{
        position: [educSelectedX, educSelectedY]
    },
    {
        position: [educSelectedX, educSelectedY - (1 * educSelectedStepY)]
    },
    {
        position: [educSelectedX, educSelectedY - (2 * educSelectedStepY)]
    }
];

var educSummaryLeftX = -.652;
var educSummaryRightX = educSummaryLeftX + 1.95;

var educSummaryY = -.2;

var educSummaryYStart = 0.12;
var educSummaryLeftY = 1.95;
var educSummaryRightY = 1.3;
var educationSummaryArray = [{
        id: "lax",
        claddNum: 1,
        clubName: "Mens Lacrosse",
        url: "https://mcla.us/player/41671/max_wiesner.html",
        dates: "August 2015 - May 2016",
        role: "Student Athelete",
        position: [educSummaryLeftX, educSummaryY],
        descriptionFront: "All - Conference player as a freshmen in the Rocky Mountain Lacorsse Conference. Earned the Player of the Week award \
            in the opening week of games acrosse the entire MCLA - D1 league. Opening week we took on two top teams defeating the University of \
            Arizona, and loosing by one against the former national champions, Grand Canyon University; I had hat-tricks in both games (3 goals a piece). \
            CU Mens Lacrosse was a full time team, practices were six days a week during season and on occasion seven days when traveling on the weekends. \
            During off season we had four days a week practices. Helped with learning time management. ",
        descriptionBack: '6AM morning weight training three times weekly. '
    },
    {
        id: "capa",
        classNum: 2,
        clubName: "CAPA Florence",
        dates: "January 2018 - May 2018",
        role: "Study Abroad",
        position: [educSummaryLeftX, educSummaryY - educSummaryLeftY],
        descriptionFront: "Participated in an overseas program in Florance, Italy for four months. During this interval, I experienced \
            many new cultures, and got to travel to 10 different countries. Also, while in Florence, I won the CAPA photo contest held\
             for the entire student community, the victory came from renting cherry red mopeds with some friends and taking a photo overlooking \
             the city. ",
        descriptionBack: "",
    },
    {
        id: "sigep",
        clubName: "Sigma Phi Epsilon, Colorado Alpha Chapter",
        dates: "August 2016 - July 2018",
        role: "Brother",
        position: [educSummaryRightX, educSummaryYStart],
        description: "Participated in philanthropies and helped fundraise for multiple causes like Jimmy V."
    },
    {
        id: "econclub",
        clubName: "Economics Club",
        dates: "August 2016 - May 2019",
        role: "Member",
        position: [educSummaryRightX, educSummaryYStart - (1 * educSummaryRightY)],
        description: "Would attend weekly seminars and lectures given by faculty and various guest speakers."
    },
    {
        id: "mathclub",
        clubName: "Math Club",
        dates: "August 2020 - May 2021",
        role: "Member",
        position: [educSummaryRightX, educSummaryYStart - (2 * educSummaryRightY)],
        description: "Would attend weekly seminars and lectures given by faculty and various guest speakers."
    },
    {
        id: "degree",
        role: "Degrees",
        position: [0, educSummaryY + 3.35]
    },
    {
        id: "extra",
        role: "Activities, clubs",
        position: [0, educSummaryY + 1.2]
    }
];

/////////////////////////////////////////////////////////////////////////////////
////////                          course list                            ////////
/////////////////////////////////////////////////////////////////////////////////

var left = -0.32;
var courseStep = 0.9;
var mid = left + (courseStep * 1);
var right = left + (courseStep * 2);
var midLeft = left + (courseStep * 0.5);
var midRight = left + (courseStep * 1.5);

var courseTall = 2;
var firstRow = 2.1;
var secondRow = firstRow - (courseTall * 1);
var thirdRow = firstRow - (courseTall * 2);

var courseArray = {
    math: [{
            type: "APPM",
            number: "4650",
            name: "Intermediate Numerical Analysis",
            description: "Focuses on numberical solution of nonlinear equations, interpolation, methods in numerical integration, \
            numerical solution of linear systems, and matrix eigenvalue problems; using computer application in Matlab. ",
            language: "Matlab",
            position: [left, firstRow]
        },
        {
            type: "APPM",
            number: "4120",
            name: "Introduction to Operations Research",
            language: "",
            description: "Studied linear and nonlinear programming. Focuses on the simplex method, duality, sensitivity, \
            transportation, network flow, and constrained and unconstrained optimization theory. ",
            position: [mid, firstRow]
        },
        {
            type: "MATH",
            number: "3430",
            name: "Ordinary Differential Equations",
            description: "Covered first/second order ODE's, systems, Dirac delta function, \
            Heavyside, discontinuities, solutions of real/complex/repeating roots. \
            Wrote my final project in solving systems of engineering circuits using Laplace Transforms.",
            language: "LaTeX",
            position: [right, firstRow]
        },
        {
            type: "APPM",
            number: "4440",
            name: "Mathematics of Coding and Cryptography",
            description: "Studied the algebra/number theory behind modern coding and cryptography; topics included \
            encryption, RSA algorithms, discrete log problems, digital signatures, elliptic \
            curves, latticies, error correctiong, and quantum computing.",
            language: "Python, Sage",
            position: [left, secondRow]
        },
        {
            type: "MATH",
            number: "3001",
            name: "Analysis 1",
            description: "A truely RIGOROUS treatment of results in topology, sequences of numbers, continuous functions, \
            differentiable functions, and Riemann integrals.",
            language: "LaTeX",
            position: [mid, secondRow]
        },
        {
            type: "APPM",
            number: "2350",
            name: "Calculus 3 for Engineers",
            description: "Multivariable calculus, including vectors, three-dimensional analytic geometry, partial differentiation \
            and multiple integrals, vector analysis, Stokes/Greens equations, and Lagrange multipliers. ",
            language: "",
            position: [right, secondRow]
        },
        {
            type: "MATH",
            number: "2135",
            name: "Linear Algebra for Math Majors",
            description: "Examined the properties of systems of linear equations, vector spaces, inner products, linear independance,\
            dimension, matricies, diagonalization, eigenvalues/vectors, matricies, and determinants.",
            language: "LaTeX",
            position: [left, thirdRow]
        },
        {
            type: "MATH",
            number: "2001",
            name: "Discrete Mathematics",
            description: "This class was an introduction to rigorous proofs. Focused on basics of set theory, existential and universal quantifiers,\
            discrete probability, and elementary counting.",
            language: "LaTeX",
            position: [mid, thirdRow]
        },
        {
            type: "CSCI",
            number: "2848",
            name: "Discrete Structures",
            description: "Computational discrete mathematics that covered the applications of regular discrete math in the python language. Went \
            deeper into relations, recurrence, combinatorics, booleam algebra, and graph algorithms. ",
            language: "Python",
            position: [right, thirdRow]
        }
    ],
    computer: [{
            type: "CSCI",
            number: "4593",
            name: "Computer Organization (Architecture)",
            description: "Implemented an entire RISC-V multicore processor in a simulated cloud enviornment. ",
            language: "RISC-V",
            position: [mid, firstRow]
        },
        {
            type: "CSCI",
            number: "4448",
            name: "Object Oriented Analysis and Design",
            description: "Applied object-oriented techniques including domain modeling, use cases, architectural design, \
            and modeling notations.",
            language: "Java",
            position: [left, firstRow]
        },
        {
            type: "CSCI",
            number: "3202",
            name: "Artificial Intelligence",
            description: "Surveyed modern AI techniques of search, knowlage representation and reasoning, probabilistic \
            inference, maching learning, natural language processing, and a brief introduction to neural networks. ",
            language: "Python",
            position: [right, firstRow]
        },
        {
            type: "CSCI",
            number: "3308",
            name: "Software Development Methods and Tools",
            description: "Covers an introduction to full-stack integration, web services, version control, cloud-based deployment \
            agile methodologies, and other industry standard practices.",
            language: "Js, HTML, CSS, SQL",
            position: [left, secondRow]
        },
        {
            type: "CSCI",
            number: "3753",
            name: "Design and Analysis of Operating Systems",
            description: "Analyzed the software that extends computer hardware, including the role of linkers, file systems, \
            resource sharing, security and networking. ",
            language: "C, Linux",
            position: [mid, secondRow]
        },
        {
            type: "CSCI",
            number: "3104",
            name: "Algorithms",
            description: "Time/ space complexity of algorithms; algorithms pertaining to sorting, recirrence,\
             divide and conquer, greedy, dynamic, graph, linear/ and non-linear programming. ",
            language: "C++, Python",
            position: [right, secondRow]
        },
        {
            type: "CSCI",
            number: "3155",
            name: "Principals of Programming Languages",
            description: "Studied the fundamentals governing the design and analysis of languages \
            and the excedution models underlying them. Specifically higher order functions, type systems, scoping, \
            and control structures.",
            language: "Scala",
            position: [left, thirdRow]
        },
        {
            type: "CSCI",
            number: "2400",
            name: "Computer Systems",
            description: "Covered in depth virtual memory, exeptional control flow, linking, momory \
            heiarchy, optimization and performance, processor architecture.",
            language: "C, C++",
            position: [mid, thirdRow]
        },
        {
            type: "CSCI",
            number: "2270",
            name: "Data Structures",
            description: "Implemented from scratch linked lists, binary trees, red-black trees, graphs and graph \
            algorithms, stacks, queues, hash tables, and dynamically allocating memory at run time.",
            language: "C, C++",
            position: [right, thirdRow]
        }
    ],
    econ: [{
            type: "ECON",
            number: "4848",
            name: "Applied Econometrics",
            description: "Focuses on applied regression analysis, and advanced statistical programming. We developed models \
            using U.S. census data sources, and presented multiple projects analyzing social and economic issues. ",
            language: "Stata, R",
            position: [left, firstRow]
        },
        {
            type: "ECON",
            number: "3818",
            name: "Statistics with Computer Applications",
            description: "Introduces the statistical methods for quantitative economic analysis; such as ANOVA, \
            probability theory, distributions, sampling theory, estimation, confidence intervals, hypothesis testing, and regression.",
            language: "R",
            position: [right, firstRow]
        },
        {
            type: "ECON",
            number: "4697",
            name: "Industrial Organization Economics",
            description: "Explored newclassical theory of the firm, the determinants of industrial structure, and the purposes \
            and institutions of public policy to control or maintain a competitive enviornment. ",
            language: "",
            position: [mid, firstRow]
        },
        {
            type: "ECON",
            number: "4423",
            name: "International Finance",
            description: "This class was taught by the former Lead Economist in Development Research Group at the World Bank, it was \
            a really humbling semester. We looked at balance of payments, foreign exchange markets, income, and capital flows.",
            language: "",
            position: [left, secondRow]
        },
        {
            type: "ECON",
            number: "3080",
            name: "Intermediate Macroeconomic Theory",
            description: "Focused on theories of aggregate economic activity including the determination of income, employment, and \
            prices; economic growth; and fluctuations. Explored these policies in both open and closed economy models. ",
            language: "",
            position: [right, secondRow]
        },
        {
            type: "ECON",
            number: "3070",
            name: "Intermediate Microeconomic Theory",
            description: "Explored theory and application of models of consumer choice, firm and market organization, and \
            general equilibrium. Included imtertemporal decisions, uncertainty, externalities, and strategic integration. ",
            language: "",
            position: [left, thirdRow]
        },
        {
            type: "BUSN",
            number: "3374",
            name: "International Economics",
            description: "Studied how global businesses are impacted by real world developments in economics, politics, and \
            finance; emphasis on globalization, trade and investment, the global marketplace and monetary system. ",
            language: "",
            position: [mid, secondRow]
        },
        {
            type: "ECON",
            number: "2020",
            name: "Principles of Macroeconomics",
            description: "Looked at an overview of the economy, examining the flows of resources and outputs, and the factors \
            determining the levels of income and prices. Focused on economic growth, unemployment, and infaltion. ",
            language: "",
            position: [right, thirdRow]
        },
        {
            type: "ECON",
            number: "2010",
            name: "Principles of Microeconomics",
            description: "Studied basic concepts of microeconomics and the behavior and interactions of individuals, \
            firms, and government. Looked at how consumers and businesses make descisions, how markets work, and how they fail. ",
            language: "",
            position: [mid, thirdRow]
        }
    ]
};
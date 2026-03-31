/* ============================================================
   STUDY TRACKER — script.js
   Full Vanilla JS Logic: Syllabus Data, Rendering, State, Events
   ============================================================ */

"use strict";

/* ============================================================
   1. SYLLABUS DATA
   Structure: { subjectName, color, chapters: [{ chapterName, topics: [{ name, priority }] }] }
   Priority: "high" | "medium" | "low"
   ============================================================ */
const SYLLABI = {
  /* ══════════════════════════════════════════════════════════
     GATE EC — Electronics & Communication Engineering
     Subjects: Engineering Math, General Aptitude + 7 Core
  ══════════════════════════════════════════════════════════ */
  GATE_EC: {
    label: "GATE EC",
    fullName: "GATE Electronics & Communication Engineering",
    subjects: [
      /* ── 1. Engineering Mathematics ── */
      {
        name: "Engineering Mathematics",
        color: "#6366f1",
        chapters: [
          {
            name: "Linear Algebra",
            topics: [
              {
                name: "Matrix Algebra (Addition, Multiplication, Inverse)",
                priority: "high",
              },
              { name: "System of Linear Equations", priority: "high" },
              { name: "Eigenvalues & Eigenvectors", priority: "high" },
              { name: "Rank of a Matrix", priority: "high" },
              { name: "LU Decomposition", priority: "medium" },
              { name: "Cayley-Hamilton Theorem", priority: "medium" },
            ],
          },
          {
            name: "Calculus",
            topics: [
              {
                name: "Limits, Continuity & Differentiability",
                priority: "high",
              },
              { name: "Mean Value Theorems (Rolle's, LMVT)", priority: "high" },
              {
                name: "Maxima, Minima & Partial Derivatives",
                priority: "high",
              },
              { name: "Gradient, Divergence & Curl", priority: "high" },
              { name: "Line, Surface & Volume Integrals", priority: "high" },
              { name: "Gauss, Stokes & Green's Theorem", priority: "medium" },
              { name: "Taylor & Maclaurin Series", priority: "medium" },
            ],
          },
          {
            name: "Differential Equations",
            topics: [
              {
                name: "First Order ODEs (Separable, Exact, Linear)",
                priority: "high",
              },
              {
                name: "Second Order Linear ODEs with Constant Coefficients",
                priority: "high",
              },
              {
                name: "Partial Differential Equations (PDEs) Basics",
                priority: "medium",
              },
              { name: "Laplace Transform Method for ODEs", priority: "high" },
            ],
          },
          {
            name: "Complex Analysis",
            topics: [
              { name: "Complex Numbers & Functions", priority: "high" },
              {
                name: "Analytic Functions & Cauchy-Riemann Equations",
                priority: "high",
              },
              {
                name: "Contour Integration & Cauchy's Theorem",
                priority: "medium",
              },
              { name: "Residue Theorem & Poles", priority: "medium" },
            ],
          },
          {
            name: "Probability & Statistics",
            topics: [
              {
                name: "Random Variables (Discrete & Continuous)",
                priority: "high",
              },
              { name: "PDF, CDF, Mean, Variance, Moments", priority: "high" },
              {
                name: "Binomial, Poisson & Normal Distributions",
                priority: "high",
              },
              {
                name: "Conditional Probability & Bayes' Theorem",
                priority: "high",
              },
              { name: "Joint Probability & Correlation", priority: "medium" },
              { name: "Central Limit Theorem", priority: "medium" },
            ],
          },
          {
            name: "Numerical Methods",
            topics: [
              {
                name: "Solution of Nonlinear Equations (Bisection, Newton-Raphson)",
                priority: "high",
              },
              {
                name: "Numerical Integration (Trapezoidal, Simpson's Rule)",
                priority: "high",
              },
              {
                name: "Numerical Solution of ODEs (Euler, Runge-Kutta)",
                priority: "medium",
              },
              {
                name: "Interpolation (Lagrange, Newton's Divided Difference)",
                priority: "medium",
              },
              {
                name: "Matrix Methods (Gauss Elimination, Gauss-Seidel)",
                priority: "medium",
              },
            ],
          },
          {
            name: "Transform Theory",
            topics: [
              {
                name: "Fourier Series & Fourier Transform (Recap)",
                priority: "high",
              },
              { name: "Z-Transform (Recap)", priority: "high" },
              {
                name: "Laplace Transform Properties (Recap)",
                priority: "high",
              },
            ],
          },
        ],
      },

      /* ── 2. General Aptitude ── */
      {
        name: "General Aptitude",
        color: "#f59e0b",
        chapters: [
          {
            name: "Verbal Aptitude",
            topics: [
              { name: "English Grammar & Tenses", priority: "high" },
              {
                name: "Vocabulary (Synonyms, Antonyms, Idioms)",
                priority: "high",
              },
              { name: "Reading Comprehension", priority: "high" },
              { name: "Sentence Completion & Correction", priority: "medium" },
              { name: "Critical Reasoning & Arguments", priority: "medium" },
            ],
          },
          {
            name: "Quantitative Aptitude",
            topics: [
              { name: "Number Systems & Divisibility", priority: "high" },
              { name: "Ratio, Proportion & Averages", priority: "high" },
              { name: "Percentage, Profit & Loss", priority: "high" },
              { name: "Time, Speed & Distance", priority: "high" },
              { name: "Time & Work", priority: "medium" },
              { name: "Geometry & Mensuration", priority: "medium" },
            ],
          },
          {
            name: "Logical Reasoning",
            topics: [
              { name: "Sequences & Series (Number/Letter)", priority: "high" },
              { name: "Logical Deduction & Syllogisms", priority: "high" },
              { name: "Coding-Decoding & Blood Relations", priority: "medium" },
              {
                name: "Direction Sense & Calendar Problems",
                priority: "medium",
              },
              { name: "Data Interpretation & Sufficiency", priority: "high" },
            ],
          },
          {
            name: "Analytical Reasoning",
            topics: [
              { name: "Puzzles & Grid-Based Problems", priority: "high" },
              { name: "Venn Diagrams & Set Theory", priority: "medium" },
              { name: "Clocks & Calendars", priority: "low" },
              {
                name: "Permutations, Combinations & Probability",
                priority: "medium",
              },
            ],
          },
        ],
      },

      /* ── 3. Network Theory ── */
      {
        name: "Network Theory",
        color: "#8b5cf6",
        chapters: [
          {
            name: "Basic Concepts",
            topics: [
              { name: "KVL & KCL Laws", priority: "high" },
              { name: "Node and Mesh Analysis", priority: "high" },
              { name: "Superposition Theorem", priority: "high" },
              { name: "Thevenin's & Norton's Theorem", priority: "high" },
              { name: "Maximum Power Transfer", priority: "medium" },
            ],
          },
          {
            name: "Network Functions & Responses",
            topics: [
              { name: "Transient Response (RL, RC, RLC)", priority: "high" },
              {
                name: "Laplace Transform in Circuit Analysis",
                priority: "high",
              },
              { name: "Transfer Functions", priority: "high" },
              {
                name: "Two-Port Network Parameters (Z, Y, h, ABCD)",
                priority: "medium",
              },
              { name: "Bode Plots", priority: "medium" },
            ],
          },
          {
            name: "Graph Theory & Resonance",
            topics: [
              { name: "Network Graph Theory", priority: "low" },
              { name: "Series & Parallel Resonance", priority: "medium" },
              { name: "Network Synthesis Basics", priority: "low" },
            ],
          },
        ],
      },

      /* ── 4. Signals & Systems ── */
      {
        name: "Signals & Systems",
        color: "#ec4899",
        chapters: [
          {
            name: "Continuous-Time Signals",
            topics: [
              { name: "Classification of Signals", priority: "high" },
              { name: "Fourier Series Representation", priority: "high" },
              { name: "Fourier Transform & Properties", priority: "high" },
              { name: "Laplace Transform & Properties", priority: "high" },
              { name: "Convolution Integral", priority: "high" },
            ],
          },
          {
            name: "Discrete-Time Signals",
            topics: [
              { name: "Sampling Theorem", priority: "high" },
              { name: "Z-Transform & Properties", priority: "high" },
              { name: "DTFT & DFT Basics", priority: "medium" },
              { name: "Discrete-Time Convolution", priority: "medium" },
            ],
          },
          {
            name: "System Analysis",
            topics: [
              { name: "LTI System Properties", priority: "high" },
              { name: "Causality & Stability", priority: "high" },
              {
                name: "Impulse Response & Transfer Function",
                priority: "high",
              },
              { name: "State Space Representation", priority: "medium" },
            ],
          },
        ],
      },

      /* ── 5. Electronic Devices ── */
      {
        name: "Electronic Devices",
        color: "#14b8a6",
        chapters: [
          {
            name: "Semiconductor Basics",
            topics: [
              { name: "Energy Band Theory", priority: "high" },
              {
                name: "Carrier Transport: Drift & Diffusion",
                priority: "high",
              },
              {
                name: "p-n Junction Diode (I-V Characteristics)",
                priority: "high",
              },
              { name: "Zener Diode & Applications", priority: "medium" },
            ],
          },
          {
            name: "Bipolar Junction Transistor (BJT)",
            topics: [
              { name: "BJT Operation Modes", priority: "high" },
              { name: "BJT Biasing & Stability", priority: "high" },
              { name: "Small Signal Models (h-parameter)", priority: "high" },
              { name: "Frequency Response of BJT", priority: "medium" },
            ],
          },
          {
            name: "Field Effect Transistors",
            topics: [
              { name: "JFET Characteristics & Biasing", priority: "medium" },
              { name: "MOSFET (Enhancement & Depletion)", priority: "high" },
              { name: "CMOS Basics", priority: "high" },
              { name: "Short Channel Effects", priority: "low" },
            ],
          },
          {
            name: "Special Devices",
            topics: [
              { name: "SCR & Thyristor", priority: "low" },
              { name: "LED, Photodiode, Solar Cell", priority: "medium" },
              { name: "Tunnel Diode", priority: "low" },
            ],
          },
        ],
      },

      /* ── 6. Analog Circuits ── */
      {
        name: "Analog Circuits",
        color: "#ef4444",
        chapters: [
          {
            name: "Amplifiers",
            topics: [
              { name: "Single-Stage BJT & FET Amplifiers", priority: "high" },
              { name: "Multi-Stage Amplifiers", priority: "high" },
              { name: "Differential Amplifier", priority: "high" },
              {
                name: "Power Amplifiers (Class A, B, AB, C)",
                priority: "medium",
              },
              {
                name: "Feedback Amplifiers (Types & Effects)",
                priority: "high",
              },
            ],
          },
          {
            name: "Operational Amplifiers",
            topics: [
              { name: "Ideal Op-Amp Characteristics", priority: "high" },
              { name: "Inverting & Non-Inverting Amplifier", priority: "high" },
              { name: "Integrator & Differentiator", priority: "high" },
              { name: "Instrumentation Amplifier", priority: "medium" },
              { name: "Slew Rate & Bandwidth", priority: "medium" },
            ],
          },
          {
            name: "Oscillators & Filters",
            topics: [
              { name: "RC & LC Oscillators", priority: "medium" },
              { name: "Crystal Oscillator", priority: "low" },
              {
                name: "Active Filters (Low, High, Band Pass)",
                priority: "high",
              },
              { name: "Voltage Regulators (78xx, LM317)", priority: "medium" },
            ],
          },
        ],
      },

      /* ── 7. Digital Circuits ── */
      {
        name: "Digital Circuits",
        color: "#10b981",
        chapters: [
          {
            name: "Boolean Algebra & Logic Gates",
            topics: [
              { name: "Boolean Algebra Theorems", priority: "high" },
              { name: "K-Map Simplification (SOP & POS)", priority: "high" },
              {
                name: "Logic Gates (AND, OR, NOT, NAND, NOR, XOR)",
                priority: "high",
              },
              { name: "Universal Gates & Realization", priority: "medium" },
            ],
          },
          {
            name: "Combinational Circuits",
            topics: [
              { name: "Multiplexer & Demultiplexer", priority: "high" },
              { name: "Encoder & Decoder", priority: "high" },
              { name: "Adders & Subtractors", priority: "high" },
              { name: "Comparators & Code Converters", priority: "medium" },
            ],
          },
          {
            name: "Sequential Circuits",
            topics: [
              { name: "Flip-Flops (SR, JK, D, T)", priority: "high" },
              { name: "Registers & Shift Registers", priority: "high" },
              {
                name: "Counters (Synchronous & Asynchronous)",
                priority: "high",
              },
              {
                name: "Finite State Machines (Mealy & Moore)",
                priority: "medium",
              },
            ],
          },
          {
            name: "ADC / DAC & Memory",
            topics: [
              { name: "A/D Conversion Techniques", priority: "medium" },
              { name: "D/A Conversion Techniques", priority: "medium" },
              { name: "ROM, RAM, SRAM, DRAM", priority: "medium" },
              { name: "PLDs: PLA, PAL, FPGA Basics", priority: "low" },
            ],
          },
        ],
      },

      /* ── 8. Control Systems ── */
      {
        name: "Control Systems",
        color: "#0ea5e9",
        chapters: [
          {
            name: "System Modeling",
            topics: [
              { name: "Transfer Function & Block Diagram", priority: "high" },
              { name: "Signal Flow Graph & Mason's Gain", priority: "high" },
              { name: "State Variable Representation", priority: "medium" },
            ],
          },
          {
            name: "Time & Frequency Response",
            topics: [
              { name: "Time-Domain Specifications", priority: "high" },
              {
                name: "Steady-State Error & Error Constants",
                priority: "high",
              },
              { name: "Bode Plot Analysis", priority: "high" },
              { name: "Polar Plot & Nyquist Criterion", priority: "high" },
            ],
          },
          {
            name: "Stability Analysis",
            topics: [
              { name: "Routh-Hurwitz Criterion", priority: "high" },
              { name: "Root Locus Technique", priority: "high" },
              { name: "Gain Margin & Phase Margin", priority: "high" },
              { name: "PID Controller Design", priority: "medium" },
              { name: "Lead-Lag Compensators", priority: "medium" },
            ],
          },
        ],
      },

      /* ── 9. Communications ── */
      {
        name: "Communications",
        color: "#f97316",
        chapters: [
          {
            name: "Analog Modulation",
            topics: [
              { name: "AM: DSB-SC, SSB, VSB", priority: "high" },
              { name: "FM & PM Modulation", priority: "high" },
              { name: "Superheterodyne Receiver", priority: "medium" },
              { name: "Noise in Analog Systems (SNR)", priority: "medium" },
            ],
          },
          {
            name: "Digital Modulation",
            topics: [
              { name: "PCM, DPCM, Delta Modulation", priority: "high" },
              { name: "ASK, FSK, PSK, QPSK", priority: "high" },
              { name: "BER & Probability of Error", priority: "high" },
              { name: "16-QAM & Higher Order Modulation", priority: "medium" },
            ],
          },
          {
            name: "Information Theory & Random Processes",
            topics: [
              { name: "Entropy & Mutual Information", priority: "medium" },
              {
                name: "Channel Capacity (Shannon's Theorem)",
                priority: "high",
              },
              { name: "Source & Channel Coding", priority: "medium" },
              { name: "Random Variables & Probability", priority: "high" },
              { name: "Power Spectral Density (PSD)", priority: "medium" },
            ],
          },
        ],
      },

      /* ── 10. Electromagnetics ── */
      {
        name: "Electromagnetics",
        color: "#a855f7",
        chapters: [
          {
            name: "Electrostatics & Magnetostatics",
            topics: [
              { name: "Coulomb's Law & Electric Field", priority: "high" },
              { name: "Gauss's Law & Applications", priority: "high" },
              { name: "Electric Potential & Energy", priority: "high" },
              {
                name: "Magnetic Field (Biot-Savart & Ampere's Law)",
                priority: "high",
              },
              { name: "Faraday's Law & Inductance", priority: "medium" },
            ],
          },
          {
            name: "Electromagnetic Waves",
            topics: [
              {
                name: "Maxwell's Equations (Integral & Differential)",
                priority: "high",
              },
              {
                name: "Wave Equation & Plane Waves in Free Space",
                priority: "high",
              },
              { name: "Polarization of EM Waves", priority: "medium" },
              {
                name: "Boundary Conditions & Reflection/Transmission",
                priority: "medium",
              },
            ],
          },
          {
            name: "Transmission Lines & Waveguides",
            topics: [
              {
                name: "Transmission Line Equations & Parameters",
                priority: "high",
              },
              { name: "Standing Waves & VSWR", priority: "high" },
              { name: "Smith Chart Applications", priority: "medium" },
              {
                name: "Rectangular Waveguide (TE & TM Modes)",
                priority: "high",
              },
              { name: "Microstrip Lines", priority: "medium" },
            ],
          },
          {
            name: "Antennas",
            topics: [
              {
                name: "Antenna Parameters (Gain, Directivity, Radiation Pattern)",
                priority: "high",
              },
              { name: "Dipole & Half-Wave Antenna", priority: "high" },
              { name: "Array Antennas & Beam Forming", priority: "medium" },
              { name: "Friis Transmission Equation", priority: "medium" },
            ],
          },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     SBI PO — PRELIMS
     Sections: Quantitative Aptitude, Reasoning, English
  ══════════════════════════════════════════════════════════ */
  SBI_PRELIMS: {
    label: "SBI PO — Prelims",
    fullName: "SBI PO Preliminary Examination",
    subjects: [
      {
        name: "Quantitative Aptitude",
        color: "#6366f1",
        chapters: [
          {
            name: "Number System & Simplification",
            topics: [
              { name: "BODMAS & Simplification", priority: "high" },
              { name: "HCF, LCM & Divisibility Rules", priority: "high" },
              { name: "Surds & Indices", priority: "medium" },
              {
                name: "Number Series (Missing & Wrong Term)",
                priority: "high",
              },
              { name: "Approximation Techniques", priority: "high" },
            ],
          },
          {
            name: "Arithmetic",
            topics: [
              { name: "Percentage (Basic to Advanced)", priority: "high" },
              { name: "Profit, Loss & Discount", priority: "high" },
              { name: "Simple Interest & Compound Interest", priority: "high" },
              { name: "Ratio & Proportion", priority: "high" },
              { name: "Averages & Weighted Average", priority: "high" },
              { name: "Mixtures & Alligations", priority: "high" },
              { name: "Time, Speed & Distance", priority: "high" },
              { name: "Time & Work, Pipe & Cistern", priority: "high" },
              { name: "Partnership & Shares", priority: "medium" },
              { name: "Problems on Ages", priority: "medium" },
            ],
          },
          {
            name: "Data Interpretation",
            topics: [
              { name: "Bar Graphs (Single & Double)", priority: "high" },
              { name: "Line Charts", priority: "high" },
              { name: "Pie Charts", priority: "high" },
              { name: "Tabular DI", priority: "high" },
              { name: "Mixed DI (2 types combined)", priority: "medium" },
            ],
          },
          {
            name: "Algebra & Higher Math",
            topics: [
              { name: "Quadratic Equations", priority: "high" },
              { name: "Inequalities (Number line method)", priority: "high" },
              { name: "Permutations & Combinations", priority: "medium" },
              { name: "Probability", priority: "medium" },
              { name: "Mensuration (2D & 3D)", priority: "medium" },
            ],
          },
        ],
      },
      {
        name: "Reasoning Ability",
        color: "#8b5cf6",
        chapters: [
          {
            name: "Puzzles & Seating Arrangement",
            topics: [
              {
                name: "Linear Seating Arrangement (Single Row)",
                priority: "high",
              },
              {
                name: "Linear Seating Arrangement (Double Row)",
                priority: "high",
              },
              { name: "Circular Seating Arrangement", priority: "high" },
              { name: "Floor & Flat Puzzles", priority: "high" },
              { name: "Box, Month & Day Puzzles", priority: "high" },
              { name: "Scheduling & Tabular Puzzles", priority: "medium" },
            ],
          },
          {
            name: "Verbal Reasoning",
            topics: [
              { name: "Syllogisms (All, Some, No)", priority: "high" },
              { name: "Blood Relations", priority: "high" },
              { name: "Directions & Distances", priority: "high" },
              { name: "Coding-Decoding (Letter & Number)", priority: "high" },
              { name: "Inequality (Direct & Coded)", priority: "high" },
              { name: "Alphanumeric Series", priority: "high" },
            ],
          },
          {
            name: "Miscellaneous Reasoning",
            topics: [
              { name: "Order & Ranking", priority: "medium" },
              { name: "Data Sufficiency", priority: "high" },
              { name: "Input-Output Shifting", priority: "medium" },
              { name: "Statement & Assumptions", priority: "medium" },
              { name: "Statement & Conclusions", priority: "medium" },
              { name: "Cause & Effect", priority: "low" },
            ],
          },
        ],
      },
      {
        name: "English Language",
        color: "#f59e0b",
        chapters: [
          {
            name: "Reading Comprehension",
            topics: [
              { name: "RC Passage — Main Idea Questions", priority: "high" },
              { name: "RC Passage — Inference Based", priority: "high" },
              { name: "RC Passage — Vocabulary in Context", priority: "high" },
              {
                name: "RC Passage — Tone & Author's Purpose",
                priority: "medium",
              },
            ],
          },
          {
            name: "Grammar & Usage",
            topics: [
              {
                name: "Error Spotting (Sentence Correction)",
                priority: "high",
              },
              {
                name: "Phrase Replacement / Sentence Improvement",
                priority: "high",
              },
              {
                name: "Para Jumbles (Sentence Rearrangement)",
                priority: "high",
              },
              { name: "Cloze Test (Fill in the Blanks)", priority: "high" },
              { name: "Double Fillers", priority: "medium" },
            ],
          },
          {
            name: "Vocabulary",
            topics: [
              { name: "Synonyms & Antonyms", priority: "high" },
              {
                name: "Word Usage (Correct Use in Sentence)",
                priority: "medium",
              },
              { name: "Idioms & Phrases", priority: "medium" },
              { name: "One Word Substitution", priority: "low" },
            ],
          },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     SBI PO — MAINS
     Sections: Reasoning & Computer, Data Analysis, English,
               General Awareness + Descriptive Paper
  ══════════════════════════════════════════════════════════ */
  SBI_MAINS: {
    label: "SBI PO — Mains",
    fullName: "SBI PO Main Examination",
    subjects: [
      {
        name: "Reasoning & Computer Aptitude",
        color: "#6366f1",
        chapters: [
          {
            name: "Advanced Puzzles",
            topics: [
              { name: "Complex Multi-Variable Puzzles", priority: "high" },
              { name: "Nested / Layered Puzzles", priority: "high" },
              { name: "Month-Day Combined Puzzles", priority: "high" },
              { name: "Blood Relation + Seating Combined", priority: "high" },
            ],
          },
          {
            name: "Critical Reasoning",
            topics: [
              { name: "Course of Action", priority: "high" },
              { name: "Statement & Arguments (Strong/Weak)", priority: "high" },
              { name: "Logical Connectives (If-Then)", priority: "medium" },
              { name: "Passage-Based Reasoning", priority: "high" },
              { name: "Decision Making", priority: "medium" },
            ],
          },
          {
            name: "Computer Knowledge",
            topics: [
              {
                name: "Computer Fundamentals (Hardware & Software)",
                priority: "high",
              },
              {
                name: "Operating Systems (Windows, Linux Basics)",
                priority: "high",
              },
              { name: "MS Office (Word, Excel, PowerPoint)", priority: "high" },
              { name: "Internet & Networking Basics", priority: "high" },
              {
                name: "Database Concepts (DBMS, SQL Basics)",
                priority: "medium",
              },
              { name: "Cybersecurity & Threats", priority: "medium" },
              {
                name: "Computer Languages & Programming Basics",
                priority: "low",
              },
              { name: "Data Storage: Cloud, Memory Types", priority: "medium" },
            ],
          },
          {
            name: "Advanced Verbal Reasoning",
            topics: [
              { name: "Direction Sense (Complex)", priority: "medium" },
              { name: "Input-Output Machine (Advanced)", priority: "high" },
              { name: "Data Sufficiency (Advanced)", priority: "high" },
              { name: "Coded Inequalities (Complex)", priority: "medium" },
            ],
          },
        ],
      },
      {
        name: "Data Analysis & Interpretation",
        color: "#10b981",
        chapters: [
          {
            name: "Advanced Data Interpretation",
            topics: [
              { name: "Radar / Spider Chart DI", priority: "high" },
              { name: "Caselet DI (Paragraph Based)", priority: "high" },
              { name: "Mixed DI (3+ types combined)", priority: "high" },
              { name: "Missing Data DI", priority: "high" },
              { name: "Data Comparison & Analysis", priority: "medium" },
            ],
          },
          {
            name: "Advanced Quantitative",
            topics: [
              { name: "Advanced Number Series", priority: "high" },
              { name: "Quantity Comparison (I vs II)", priority: "high" },
              { name: "Data Sufficiency (Quant)", priority: "high" },
              { name: "Advanced Arithmetic (Multi-step)", priority: "high" },
              {
                name: "Permutations, Combinations & Probability (Advanced)",
                priority: "medium",
              },
            ],
          },
          {
            name: "Statistics & Interpretation",
            topics: [
              { name: "Mean, Median & Mode", priority: "high" },
              { name: "Standard Deviation & Variance", priority: "medium" },
              {
                name: "Histogram & Frequency Distribution",
                priority: "medium",
              },
              { name: "Regression & Correlation (Basic)", priority: "low" },
            ],
          },
        ],
      },
      {
        name: "English Language (Advanced)",
        color: "#f59e0b",
        chapters: [
          {
            name: "Reading Comprehension (Advanced)",
            topics: [
              { name: "Editorial & Abstract RC Passages", priority: "high" },
              { name: "RC with Vocabulary-Heavy Passages", priority: "high" },
              { name: "Inference & Implication Based", priority: "high" },
              { name: "Title/Theme Identification", priority: "medium" },
            ],
          },
          {
            name: "Grammar & Sentence Structure",
            topics: [
              {
                name: "Error Identification in Long Sentences",
                priority: "high",
              },
              { name: "Phrase/Clause Replacement", priority: "high" },
              { name: "Para Completion (Last Sentence)", priority: "high" },
              { name: "Coherent Paragraph Formation", priority: "high" },
              { name: "Match the Column Type Questions", priority: "medium" },
            ],
          },
          {
            name: "Descriptive English Paper",
            topics: [
              {
                name: "Formal Letter Writing (Bank, Complaint, Request)",
                priority: "high",
              },
              { name: "Essay Writing (250-300 words)", priority: "high" },
              { name: "Precis Writing (Summarization)", priority: "high" },
              { name: "Email Writing (Official Format)", priority: "medium" },
              { name: "Report Writing Basics", priority: "medium" },
            ],
          },
        ],
      },
      {
        name: "General & Banking Awareness",
        color: "#ef4444",
        chapters: [
          {
            name: "Banking & Financial Awareness",
            topics: [
              {
                name: "Reserve Bank of India — Structure & Functions",
                priority: "high",
              },
              {
                name: "Monetary Policy & Tools (CRR, SLR, Repo Rate)",
                priority: "high",
              },
              {
                name: "Types of Banks (Commercial, Co-operative, RRBs)",
                priority: "high",
              },
              { name: "NABARD, SEBI, SIDBI, EXIM Bank", priority: "high" },
              { name: "NPA, SARFAESI Act, Insolvency Code", priority: "high" },
              { name: "Priority Sector Lending", priority: "high" },
              {
                name: "Financial Inclusion Schemes (PM Jan Dhan, etc.)",
                priority: "high",
              },
              {
                name: "Digital Banking (UPI, NEFT, RTGS, IMPS)",
                priority: "high",
              },
              { name: "Basel Norms & Capital Adequacy", priority: "medium" },
              {
                name: "Credit Rating Agencies (CRISIL, ICRA)",
                priority: "medium",
              },
            ],
          },
          {
            name: "Economy & Budget",
            topics: [
              { name: "Union Budget — Key Highlights", priority: "high" },
              { name: "GDP, GNP, GVA & Economic Indicators", priority: "high" },
              { name: "FDI & FPI — Limits & Sectors", priority: "high" },
              { name: "Taxation — GST, Income Tax Basics", priority: "high" },
              { name: "Five Year Plans & NITI Aayog", priority: "medium" },
              {
                name: "Trade Balance & Current Account Deficit",
                priority: "medium",
              },
            ],
          },
          {
            name: "Current Affairs",
            topics: [
              {
                name: "Monthly Current Affairs (Last 6 Months)",
                priority: "high",
              },
              {
                name: "National News (Politics, Awards, Appointments)",
                priority: "high",
              },
              {
                name: "International News & Organisations (IMF, WB, UN)",
                priority: "high",
              },
              {
                name: "Sports News (National & International)",
                priority: "medium",
              },
              { name: "Science & Technology Updates", priority: "medium" },
              { name: "Summits, MoUs & Agreements", priority: "medium" },
            ],
          },
          {
            name: "Static General Knowledge",
            topics: [
              { name: "Indian Constitution & Governance", priority: "medium" },
              {
                name: "Headquarters of Banks & Financial Bodies",
                priority: "high",
              },
              { name: "Currency & Capital of Countries", priority: "medium" },
              { name: "National Parks, Dams, Rivers (India)", priority: "low" },
              { name: "Important Days & Themes", priority: "medium" },
              { name: "Books, Authors & Awards", priority: "low" },
            ],
          },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     SBI PO — INTERVIEW / GROUP EXERCISE
     Focus: GD Topics, HR Questions, Banking Knowledge
  ══════════════════════════════════════════════════════════ */
  SBI_INTERVIEW: {
    label: "SBI PO — Interview",
    fullName: "SBI PO Interview & Group Exercise",
    subjects: [
      {
        name: "Personal Interview Preparation",
        color: "#6366f1",
        chapters: [
          {
            name: "Self Introduction & Background",
            topics: [
              {
                name: "Tell Me About Yourself (Structured STAR Format)",
                priority: "high",
              },
              { name: "Why Banking / Why SBI?", priority: "high" },
              { name: "Your Strengths & Weaknesses", priority: "high" },
              {
                name: "Where Do You See Yourself in 5 Years?",
                priority: "high",
              },
              {
                name: "Hobbies & Interests (How to Present)",
                priority: "medium",
              },
              {
                name: "About Your Home State & Background",
                priority: "medium",
              },
            ],
          },
          {
            name: "Academic & Professional Background",
            topics: [
              { name: "Your Graduation Subject Questions", priority: "high" },
              {
                name: "Work Experience (If Any) — Role & Contribution",
                priority: "high",
              },
              { name: "Gaps in Resume — How to Explain", priority: "high" },
              { name: "Why Left Previous Job?", priority: "medium" },
              {
                name: "Key Projects / Thesis / Certifications",
                priority: "medium",
              },
            ],
          },
          {
            name: "HR & Behavioral Questions",
            topics: [
              {
                name: "Situational Questions (Conflict, Teamwork, Leadership)",
                priority: "high",
              },
              { name: "Handling Pressure & Deadlines", priority: "high" },
              {
                name: "Adaptability & Learning from Failure",
                priority: "high",
              },
              { name: "Customer Handling Scenarios", priority: "high" },
              { name: "Ethics & Integrity in Banking", priority: "high" },
              { name: "Questions on Work-Life Balance", priority: "medium" },
            ],
          },
          {
            name: "Interview Etiquette & Soft Skills",
            topics: [
              { name: "Body Language & Presentation", priority: "high" },
              { name: "Dress Code & First Impressions", priority: "high" },
              {
                name: "Active Listening & Communication Skills",
                priority: "high",
              },
              { name: "Handling Stress Questions Calmly", priority: "high" },
              { name: "Mock Interview Practice (5+ rounds)", priority: "high" },
            ],
          },
        ],
      },
      {
        name: "Banking & Finance Knowledge",
        color: "#10b981",
        chapters: [
          {
            name: "Core Banking Concepts",
            topics: [
              { name: "History & Evolution of SBI", priority: "high" },
              {
                name: "SBI Products & Services (YONO, YONO Biz)",
                priority: "high",
              },
              {
                name: "Banking Regulations & RBI Guidelines",
                priority: "high",
              },
              {
                name: "Types of Accounts (CASA, FD, RD, NRI)",
                priority: "high",
              },
              {
                name: "KYC Norms & AML (Anti-Money Laundering)",
                priority: "high",
              },
              {
                name: "Lending Products (Home Loan, MSME, Personal)",
                priority: "high",
              },
            ],
          },
          {
            name: "Financial System & Economy",
            topics: [
              { name: "Capital Market vs Money Market", priority: "high" },
              {
                name: "Debt Instruments (Bonds, Debentures, G-Secs)",
                priority: "medium",
              },
              {
                name: "Derivatives (Futures, Options — Basics)",
                priority: "medium",
              },
              { name: "Inflation & Its Impact on Banking", priority: "high" },
              {
                name: "Credit Creation & Money Multiplier",
                priority: "medium",
              },
              {
                name: "Role of Banks in Economic Development",
                priority: "high",
              },
            ],
          },
          {
            name: "Recent Developments in Banking",
            topics: [
              { name: "Digital India & Fintech Revolution", priority: "high" },
              {
                name: "Cryptocurrency & RBI's Stance (CBDC)",
                priority: "high",
              },
              { name: "UPI, NACH, Rupay Card System", priority: "high" },
              { name: "MSME & Mudra Loan Scheme", priority: "high" },
              {
                name: "Bankruptcy Code (IBC) & Stressed Assets",
                priority: "medium",
              },
              { name: "Account Aggregator Framework", priority: "medium" },
            ],
          },
        ],
      },
      {
        name: "Group Discussion (GD) Topics",
        color: "#f59e0b",
        chapters: [
          {
            name: "Banking & Economy GD Topics",
            topics: [
              {
                name: "Privatization of Public Sector Banks — Pros & Cons",
                priority: "high",
              },
              {
                name: "Digital Payments vs Cash Transactions",
                priority: "high",
              },
              {
                name: "Role of Banks in Financial Inclusion",
                priority: "high",
              },
              {
                name: "NPA Crisis & Solutions for Indian Banking",
                priority: "high",
              },
              {
                name: "Cryptocurrency — Should India Legalize It?",
                priority: "medium",
              },
              { name: "Impact of GST on Indian Economy", priority: "medium" },
            ],
          },
          {
            name: "Social & Current Affairs GD Topics",
            topics: [
              { name: "Women Empowerment & Gender Equality", priority: "high" },
              {
                name: "Unemployment in India — Challenges & Solutions",
                priority: "high",
              },
              { name: "Education System Reform in India", priority: "medium" },
              {
                name: "Climate Change & India's Commitment (Net Zero 2070)",
                priority: "medium",
              },
              {
                name: "Start-Up India & Entrepreneurship Culture",
                priority: "medium",
              },
              { name: "Population Control — A Necessity?", priority: "low" },
            ],
          },
          {
            name: "Technology & Future GD Topics",
            topics: [
              {
                name: "AI & Machine Learning — Threat or Opportunity?",
                priority: "high",
              },
              {
                name: "Work From Home — Future of Employment?",
                priority: "medium",
              },
              {
                name: "Data Privacy & Cybersecurity Concerns",
                priority: "high",
              },
              {
                name: "Electric Vehicles — Ready for India?",
                priority: "medium",
              },
              { name: "Social Media — Boon or Bane?", priority: "medium" },
            ],
          },
          {
            name: "GD Skills & Strategy",
            topics: [
              { name: "How to Initiate a Group Discussion", priority: "high" },
              {
                name: "How to Counter & Rebut Points Politely",
                priority: "high",
              },
              { name: "Summarizing & Concluding a GD", priority: "high" },
              {
                name: "Listening & Building on Others' Points",
                priority: "high",
              },
              { name: "Non-verbal Communication in GD", priority: "medium" },
              {
                name: "Mock GD Practice Sessions (5+ rounds)",
                priority: "high",
              },
            ],
          },
        ],
      },
      {
        name: "Current Affairs for Interview",
        color: "#ef4444",
        chapters: [
          {
            name: "National Affairs",
            topics: [
              {
                name: "Union Budget — Key Allocations & Highlights",
                priority: "high",
              },
              {
                name: "Government Flagship Schemes (Latest Updates)",
                priority: "high",
              },
              { name: "Economic Survey Highlights", priority: "high" },
              {
                name: "New Laws & Amendments (Banking, Finance)",
                priority: "high",
              },
              {
                name: "Important Appointments (RBI Governor, Finance Min.)",
                priority: "high",
              },
            ],
          },
          {
            name: "International Affairs",
            topics: [
              {
                name: "Global Economy — Key Trends & IMF Reports",
                priority: "high",
              },
              {
                name: "India's Foreign Policy & Relations",
                priority: "medium",
              },
              {
                name: "India's G20 / BRICS / SCO Participation",
                priority: "high",
              },
              {
                name: "Recent International Summits & Agreements",
                priority: "medium",
              },
              { name: "World Bank & IMF Reports on India", priority: "medium" },
            ],
          },
          {
            name: "SBI-Specific Knowledge",
            topics: [
              {
                name: "SBI's Latest Annual Report Highlights",
                priority: "high",
              },
              {
                name: "SBI's Recent Mergers (e.g., Associate Banks)",
                priority: "high",
              },
              { name: "SBI Chairman & Board of Directors", priority: "high" },
              { name: "SBI's CSR Initiatives", priority: "medium" },
              {
                name: "SBI Ranks & Milestones (Forbes, Fortune 500)",
                priority: "medium",
              },
              {
                name: "SBI Digital Initiatives (YONO App, RINB)",
                priority: "high",
              },
            ],
          },
        ],
      },
    ],
  },
};

/* ============================================================
   2. APP STATE
   ============================================================ */
const State = {
  currentExam: "GATE_EC",
  progress: {
    GATE_EC: {},
    SBI_PRELIMS: {},
    SBI_MAINS: {},
    SBI_INTERVIEW: {},
  },
  theme: "light",
  searchQuery: "",
  activeFilter: "all",
  expandedSubjects: {},
  collapsedChapters: {},
  sbiStage: "SBI_PRELIMS", // track active SBI sub-stage
};

/* ── Generate a unique key for each topic ── */
function topicKey(examId, subjectIdx, chapterIdx, topicIdx) {
  return `${examId}__s${subjectIdx}__c${chapterIdx}__t${topicIdx}`;
}

/* ============================================================
   3. LOCALSTORAGE PERSISTENCE
   ============================================================ */
function saveToStorage() {
  localStorage.setItem("studyTracker_progress", JSON.stringify(State.progress));
  localStorage.setItem("studyTracker_theme", State.theme);
  localStorage.setItem("studyTracker_exam", State.currentExam);
  localStorage.setItem("studyTracker_sbiStage", State.sbiStage);
  localStorage.setItem(
    "studyTracker_expandedSubjects",
    JSON.stringify(State.expandedSubjects),
  );
  localStorage.setItem(
    "studyTracker_collapsedChapters",
    JSON.stringify(State.collapsedChapters),
  );
}

function loadFromStorage() {
  const savedProgress = localStorage.getItem("studyTracker_progress");
  if (savedProgress) State.progress = JSON.parse(savedProgress);

  const savedTheme = localStorage.getItem("studyTracker_theme");
  if (savedTheme) State.theme = savedTheme;

  const savedExam = localStorage.getItem("studyTracker_exam");
  if (savedExam) State.currentExam = savedExam;

  const savedStage = localStorage.getItem("studyTracker_sbiStage");
  if (savedStage) State.sbiStage = savedStage;

  const savedExpanded = localStorage.getItem("studyTracker_expandedSubjects");
  if (savedExpanded) State.expandedSubjects = JSON.parse(savedExpanded);

  const savedCollapsed = localStorage.getItem("studyTracker_collapsedChapters");
  if (savedCollapsed) State.collapsedChapters = JSON.parse(savedCollapsed);
}

/* ============================================================
   4. PROGRESS CALCULATIONS
   ============================================================ */

function getExamTotalTopics(examId) {
  let total = 0;
  SYLLABI[examId].subjects.forEach((sub) => {
    sub.chapters.forEach((ch) => {
      total += ch.topics.length;
    });
  });
  return total;
}

function getExamCompletedTopics(examId) {
  return Object.values(State.progress[examId] || {}).filter(Boolean).length;
}

function getExamPercent(examId) {
  const total = getExamTotalTopics(examId);
  if (total === 0) return 0;
  return Math.round((getExamCompletedTopics(examId) / total) * 100);
}

/* Combined SBI PO progress across all 3 stages */
function getSBICombinedPercent() {
  const stages = ["SBI_PRELIMS", "SBI_MAINS", "SBI_INTERVIEW"];
  let total = 0,
    completed = 0;
  stages.forEach((id) => {
    total += getExamTotalTopics(id);
    completed += getExamCompletedTopics(id);
  });
  return total > 0 ? Math.round((completed / total) * 100) : 0;
}

function getSubjectStats(examId, subjectIdx) {
  const subject = SYLLABI[examId].subjects[subjectIdx];
  let total = 0,
    completed = 0;
  subject.chapters.forEach((ch, ci) => {
    ch.topics.forEach((t, ti) => {
      total++;
      const key = topicKey(examId, subjectIdx, ci, ti);
      if (State.progress[examId] && State.progress[examId][key]) completed++;
    });
  });
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
  return { total, completed, percent };
}

/* ============================================================
   5. RENDER FUNCTIONS
   ============================================================ */

/* ── Subject-wise mini progress cards ── */
function renderSubjectProgressGrid() {
  const grid = document.getElementById("subjectProgressGrid");
  const exam = SYLLABI[State.currentExam];
  grid.innerHTML = "";

  exam.subjects.forEach((sub, si) => {
    const stats = getSubjectStats(State.currentExam, si);

    const card = document.createElement("div");
    card.className = "subject-mini-card";
    card.title = `Click to jump to ${sub.name}`;
    card.innerHTML = `
      <div class="subject-mini-name" style="color:${sub.color}">${sub.name}</div>
      <div class="subject-mini-bar-track">
        <div class="subject-mini-bar-fill" style="width:${stats.percent}%; background:${sub.color}"></div>
      </div>
      <div class="subject-mini-stats">
        <span>${stats.completed}/${stats.total} topics</span>
        <span class="subject-mini-percent" style="color:${sub.color}">${stats.percent}%</span>
      </div>
    `;

    card.addEventListener("click", () => {
      const subjectCard = document.querySelector(
        `.subject-card[data-subject-idx="${si}"]`,
      );
      if (subjectCard) {
        subjectCard.scrollIntoView({ behavior: "smooth", block: "start" });
        if (!subjectCard.classList.contains("open")) toggleSubject(si);
        subjectCard.style.boxShadow = `0 0 0 3px ${sub.color}44`;
        setTimeout(() => {
          subjectCard.style.boxShadow = "";
        }, 1500);
      }
    });

    grid.appendChild(card);
  });
}

/* ── Overall stats ── */
function updateOverallStats() {
  const examId = State.currentExam;
  const total = getExamTotalTopics(examId);
  const completed = getExamCompletedTopics(examId);
  const remaining = total - completed;
  const percent = getExamPercent(examId);

  document.getElementById("totalTopics").textContent = total;
  document.getElementById("completedTopics").textContent = completed;
  document.getElementById("remainingTopics").textContent = remaining;
  document.getElementById("overallPercent").textContent = percent + "%";
  document.getElementById("overallProgressBar").style.width = percent + "%";
  document.getElementById("progressLabel").textContent =
    `${percent}% Completed`;

  /* Update exam badges */
  const gateBadge = document.getElementById("gate-badge");
  if (gateBadge) gateBadge.textContent = getExamPercent("GATE_EC") + "%";

  /* SBI combined badge */
  const sbiBadge = document.getElementById("sbi-badge");
  if (sbiBadge) sbiBadge.textContent = getSBICombinedPercent() + "%";

  /* SBI stage badges */
  ["SBI_PRELIMS", "SBI_MAINS", "SBI_INTERVIEW"].forEach((id) => {
    const el = document.getElementById(`${id}-badge`);
    if (el) el.textContent = getExamPercent(id) + "%";
  });

  renderSubjectProgressGrid();

  SYLLABI[examId].subjects.forEach((sub, si) => {
    const pill = document.querySelector(
      `.subject-card[data-subject-idx="${si}"] .subject-progress-pill`,
    );
    if (pill) {
      const stats = getSubjectStats(examId, si);
      pill.textContent = stats.percent + "%";
    }
    const badge = document.querySelector(
      `.subject-card[data-subject-idx="${si}"] .subject-count-badge`,
    );
    if (badge) {
      const stats = getSubjectStats(examId, si);
      badge.textContent = `${stats.completed}/${stats.total}`;
    }
  });
}

/* ── Render a single topic row ── */
function renderTopicRow(examId, si, ci, ti, topic) {
  const key = topicKey(examId, si, ci, ti);
  const isChecked =
    (State.progress[examId] && State.progress[examId][key]) || false;

  const row = document.createElement("div");
  row.className = `topic-row${isChecked ? " completed-row" : ""}`;
  row.dataset.topicKey = key;
  row.dataset.topicName = topic.name.toLowerCase();
  row.dataset.priority = topic.priority;
  row.dataset.completed = isChecked ? "true" : "false";

  const priorityLabels = {
    high: "🔴 High",
    medium: "🟡 Medium",
    low: "🟢 Low",
  };

  row.innerHTML = `
    <label class="topic-checkbox">
      <input type="checkbox" ${isChecked ? "checked" : ""} data-key="${key}" aria-label="${topic.name}" />
      <span class="checkmark"></span>
    </label>
    <span class="topic-name">${topic.name}</span>
    <span class="priority-badge ${topic.priority}">${priorityLabels[topic.priority]}</span>
  `;

  row.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT") return;
    const cb = row.querySelector('input[type="checkbox"]');
    cb.checked = !cb.checked;
    cb.dispatchEvent(new Event("change"));
  });

  const cb = row.querySelector('input[type="checkbox"]');
  cb.addEventListener("change", (e) => {
    e.stopPropagation();
    if (!State.progress[examId]) State.progress[examId] = {};
    State.progress[examId][key] = cb.checked;
    row.dataset.completed = cb.checked ? "true" : "false";
    if (cb.checked) row.classList.add("completed-row");
    else row.classList.remove("completed-row");
    saveToStorage();
    updateOverallStats();
    applyFilters();
    showToast(
      cb.checked
        ? `✅ "${topic.name}" marked complete!`
        : `↩️ "${topic.name}" marked pending.`,
    );
  });

  return row;
}

/* ── Toggle subject open/close ── */
function toggleSubject(si) {
  const card = document.querySelector(
    `.subject-card[data-subject-idx="${si}"]`,
  );
  if (!card) return;
  const isOpen = card.classList.toggle("open");
  State.expandedSubjects[`${State.currentExam}_${si}`] = isOpen;
  saveToStorage();
}

/* ── Toggle chapter collapse ── */
function toggleChapter(si, ci) {
  const key = `${State.currentExam}_${si}-${ci}`;
  const domKey = `${si}-${ci}`;
  const chHeader = document.querySelector(`[data-chapter-header="${domKey}"]`);
  const chTopics = document.querySelector(`[data-chapter-topics="${domKey}"]`);
  if (!chHeader || !chTopics) return;
  const isCollapsed = chTopics.classList.toggle("collapsed");
  chHeader.classList.toggle("collapsed", isCollapsed);
  State.collapsedChapters[key] = isCollapsed;
  saveToStorage();
}

/* ── Render full syllabus tree ── */
function renderSyllabus() {
  const section = document.getElementById("syllabusSection");
  section.innerHTML = "";

  const examData = SYLLABI[State.currentExam];
  const examId = State.currentExam;

  examData.subjects.forEach((subject, si) => {
    const stats = getSubjectStats(examId, si);
    const expandKey = `${examId}_${si}`;
    // Default to CLOSED — user must click to expand
    const isOpen = State.expandedSubjects[expandKey] === true;
    if (State.expandedSubjects[expandKey] === undefined)
      State.expandedSubjects[expandKey] = false;

    const card = document.createElement("div");
    card.className = `subject-card${isOpen ? " open" : ""}`;
    card.dataset.subjectIdx = si;
    card.style.borderLeftColor = subject.color;

    const header = document.createElement("div");
    header.className = "subject-header";
    header.innerHTML = `
      <span class="subject-color-dot" style="background:${subject.color}"></span>
      <span class="subject-name">${subject.name}</span>
      <div class="subject-meta">
        <span class="subject-count-badge">${stats.completed}/${stats.total}</span>
        <span class="subject-progress-pill" style="color:${subject.color};background:${subject.color}18">${stats.percent}%</span>
        <i class="fas fa-chevron-down subject-chevron"></i>
      </div>
    `;
    header.addEventListener("click", () => toggleSubject(si));
    card.appendChild(header);

    const body = document.createElement("div");
    body.className = "subject-body";

    subject.chapters.forEach((chapter, ci) => {
      const chStateKey = `${examId}_${si}-${ci}`;
      const domKey = `${si}-${ci}`;
      const isChCollapsed = State.collapsedChapters[chStateKey] || false;

      const block = document.createElement("div");
      block.className = "chapter-block";

      const chHeader = document.createElement("div");
      chHeader.className = `chapter-header${isChCollapsed ? " collapsed" : ""}`;
      chHeader.dataset.chapterHeader = domKey;
      chHeader.innerHTML = `
        <i class="fas fa-chevron-down chapter-toggle-icon"></i>
        <span class="chapter-name"><i class="fas fa-folder-open" style="color:${subject.color};opacity:0.7;margin-right:6px;font-size:0.85em"></i>${chapter.name}</span>
        <button class="chapter-select-all" data-si="${si}" data-ci="${ci}">Select All</button>
      `;

      chHeader.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON" || e.target.closest("button")) return;
        toggleChapter(si, ci);
      });

      chHeader
        .querySelector(".chapter-select-all")
        .addEventListener("click", (e) => {
          e.stopPropagation();
          const topicsEl = document.querySelector(
            `[data-chapter-topics="${domKey}"]`,
          );
          const checkboxes = topicsEl.querySelectorAll(
            'input[type="checkbox"]',
          );
          const allChecked = [...checkboxes].every((c) => c.checked);

          if (!State.progress[examId]) State.progress[examId] = {};
          checkboxes.forEach((cb) => {
            cb.checked = !allChecked;
            State.progress[examId][cb.dataset.key] = !allChecked;
            const row = cb.closest(".topic-row");
            if (row) {
              row.classList.toggle("completed-row", !allChecked);
              row.dataset.completed = (!allChecked).toString();
            }
          });

          e.target.textContent = allChecked ? "Select All" : "Deselect All";
          saveToStorage();
          updateOverallStats();
          applyFilters();
          showToast(
            allChecked
              ? "Chapter topics deselected."
              : "Chapter topics marked complete!",
          );
        });

      const topicsContainer = document.createElement("div");
      topicsContainer.className = `chapter-topics${isChCollapsed ? " collapsed" : ""}`;
      topicsContainer.dataset.chapterTopics = domKey;

      chapter.topics.forEach((topic, ti) => {
        const row = renderTopicRow(examId, si, ci, ti, topic);
        topicsContainer.appendChild(row);
      });

      block.appendChild(chHeader);
      block.appendChild(topicsContainer);
      body.appendChild(block);
    });

    card.appendChild(body);
    section.appendChild(card);
  });
}

/* ============================================================
   6. SBI STAGE TABS — Render & Switch
   ============================================================ */
function renderSBIStageTabs() {
  const container = document.getElementById("sbiStageTabsContainer");
  if (!container) return;

  const stages = [
    { id: "SBI_PRELIMS", label: "Prelims", icon: "fa-layer-group" },
    { id: "SBI_MAINS", label: "Mains", icon: "fa-book-open" },
    { id: "SBI_INTERVIEW", label: "Interview", icon: "fa-comments" },
  ];

  container.innerHTML = "";
  stages.forEach((stage) => {
    const pct = getExamPercent(stage.id);
    const btn = document.createElement("button");
    btn.className = `stage-tab${State.currentExam === stage.id ? " active" : ""}`;
    btn.dataset.stage = stage.id;
    btn.innerHTML = `
      <i class="fas ${stage.icon}"></i>
      <span>${stage.label}</span>
      <span class="stage-tab-badge" id="${stage.id}-badge">${pct}%</span>
    `;
    btn.addEventListener("click", () => switchExam(stage.id));
    container.appendChild(btn);
  });
}

/* ============================================================
   7. FILTER & SEARCH
   ============================================================ */
function applyFilters() {
  const query = State.searchQuery.toLowerCase().trim();
  const filter = State.activeFilter;
  const allRows = document.querySelectorAll(".topic-row");
  let anyVisible = false;

  allRows.forEach((row) => {
    const topicName = row.dataset.topicName || "";
    const priority = row.dataset.priority || "";
    const completed = row.dataset.completed === "true";

    const matchesSearch = !query || topicName.includes(query);
    let matchesFilter = true;
    if (filter === "completed") matchesFilter = completed;
    else if (filter === "pending") matchesFilter = !completed;
    else if (filter === "high") matchesFilter = priority === "high";

    const show = matchesSearch && matchesFilter;
    row.classList.toggle("hidden", !show);
    if (show) anyVisible = true;

    const nameEl = row.querySelector(".topic-name");
    if (nameEl && query && matchesSearch) {
      const original = nameEl.textContent;
      const regex = new RegExp(`(${escapeRegex(query)})`, "gi");
      nameEl.innerHTML = original.replace(
        regex,
        '<mark class="search-highlight">$1</mark>',
      );
    } else if (nameEl) {
      nameEl.textContent = nameEl.textContent;
    }
  });

  document.querySelectorAll(".chapter-block").forEach((block) => {
    const visible =
      block.querySelectorAll(".topic-row:not(.hidden)").length > 0;
    block.style.display = visible ? "" : "none";
  });

  document.querySelectorAll(".subject-card").forEach((card) => {
    const visible = [...card.querySelectorAll(".chapter-block")].some(
      (b) => b.style.display !== "none",
    );
    card.style.display = visible ? "" : "none";
  });

  let noResultsEl = document.getElementById("noResultsMsg");
  if (!anyVisible) {
    if (!noResultsEl) {
      noResultsEl = document.createElement("div");
      noResultsEl.id = "noResultsMsg";
      noResultsEl.className = "no-results";
      noResultsEl.innerHTML = `<i class="fas fa-search-minus"></i><p>No topics found matching your search or filter.</p>`;
      document.getElementById("syllabusSection").appendChild(noResultsEl);
    }
  } else {
    if (noResultsEl) noResultsEl.remove();
  }
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/* ============================================================
   8. THEME TOGGLE
   ============================================================ */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const icon = document.getElementById("themeIcon");
  icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
  State.theme = theme;
}

/* ============================================================
   9. TOAST NOTIFICATION
   ============================================================ */
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById("toast");
  document.getElementById("toastMsg").textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

/* ============================================================
   10. EXAM / STAGE SWITCHING
   ============================================================ */
function switchExam(examId) {
  State.currentExam = examId;
  State.searchQuery = "";
  State.activeFilter = "all";
  document.getElementById("searchInput").value = "";
  document.getElementById("searchClear").classList.remove("visible");

  /* Update main exam cards */
  const isSBI = examId.startsWith("SBI_");
  document.querySelectorAll(".exam-card").forEach((card) => {
    card.classList.toggle(
      "active",
      isSBI ? card.dataset.exam === "SBI_PO" : card.dataset.exam === examId,
    );
  });

  /* Show/hide SBI stage tabs */
  const sbiTabsWrap = document.getElementById("sbiStageTabsWrapper");
  if (sbiTabsWrap) sbiTabsWrap.style.display = isSBI ? "block" : "none";

  /* Re-render stage tabs to update active */
  if (isSBI) {
    State.sbiStage = examId;
    renderSBIStageTabs();
  }

  /* Dashboard title */
  document.getElementById("dashboardTitle").textContent =
    `${SYLLABI[examId].label} — Dashboard`;

  /* Reset filter chips */
  document.querySelectorAll(".chip").forEach((c) => {
    c.classList.toggle("active", c.dataset.filter === "all");
  });

  saveToStorage();
  renderSyllabus();
  updateOverallStats();
}

/* ============================================================
   11. EXPAND / COLLAPSE ALL
   ============================================================ */
function expandAll() {
  const examId = State.currentExam;
  document.querySelectorAll(".subject-card").forEach((card, i) => {
    card.classList.add("open");
    State.expandedSubjects[`${examId}_${i}`] = true;
  });
  saveToStorage();
}

function collapseAll() {
  const examId = State.currentExam;
  document.querySelectorAll(".subject-card").forEach((card, i) => {
    card.classList.remove("open");
    State.expandedSubjects[`${examId}_${i}`] = false;
  });
  saveToStorage();
}

let allExpanded = true;
function toggleExpandAll() {
  if (allExpanded) {
    collapseAll();
    document.getElementById("expandAllBtn").innerHTML =
      '<i class="fas fa-compress-alt"></i> Expand All';
  } else {
    expandAll();
    document.getElementById("expandAllBtn").innerHTML =
      '<i class="fas fa-expand-alt"></i> Collapse All';
  }
  allExpanded = !allExpanded;
}

/* ============================================================
   12. SELECT / DESELECT ALL
   ============================================================ */
function selectAll() {
  const examId = State.currentExam;
  if (!State.progress[examId]) State.progress[examId] = {};
  document.querySelectorAll(".topic-row").forEach((row) => {
    const cb = row.querySelector('input[type="checkbox"]');
    if (cb && !cb.checked) {
      cb.checked = true;
      State.progress[examId][cb.dataset.key] = true;
      row.classList.add("completed-row");
      row.dataset.completed = "true";
    }
  });
  saveToStorage();
  updateOverallStats();
  applyFilters();
  showToast("All topics marked as completed!");
}

function deselectAll() {
  const examId = State.currentExam;
  if (!State.progress[examId]) State.progress[examId] = {};
  document.querySelectorAll(".topic-row").forEach((row) => {
    const cb = row.querySelector('input[type="checkbox"]');
    if (cb && cb.checked) {
      cb.checked = false;
      State.progress[examId][cb.dataset.key] = false;
      row.classList.remove("completed-row");
      row.dataset.completed = "false";
    }
  });
  saveToStorage();
  updateOverallStats();
  applyFilters();
  showToast("All topics deselected.");
}

/* ============================================================
   13. RESET
   ============================================================ */
function resetCurrentExam() {
  const examId = State.currentExam;
  State.progress[examId] = {};
  saveToStorage();
  renderSyllabus();
  updateOverallStats();
  showToast(`Progress reset for ${SYLLABI[examId].label}.`);
}

/* ============================================================
   14. INITIALIZE
   ============================================================ */
function init() {
  loadFromStorage();

  /* Ensure all progress objects exist */
  ["GATE_EC", "SBI_PRELIMS", "SBI_MAINS", "SBI_INTERVIEW"].forEach((id) => {
    if (!State.progress[id]) State.progress[id] = {};
  });

  applyTheme(State.theme);

  /* If saved exam was old SBI_PO key, migrate to SBI_PRELIMS */
  if (State.currentExam === "SBI_PO") State.currentExam = "SBI_PRELIMS";

  /* Show/hide SBI stage tabs based on current exam */
  const isSBI = State.currentExam.startsWith("SBI_");
  const sbiTabsWrap = document.getElementById("sbiStageTabsWrapper");
  if (sbiTabsWrap) sbiTabsWrap.style.display = isSBI ? "block" : "none";
  if (isSBI) renderSBIStageTabs();

  renderSyllabus();
  updateOverallStats();

  /* Restore exam card active state */
  document.querySelectorAll(".exam-card").forEach((card) => {
    const isActive = isSBI
      ? card.dataset.exam === "SBI_PO"
      : card.dataset.exam === State.currentExam;
    card.classList.toggle("active", isActive);
  });

  document.getElementById("dashboardTitle").textContent =
    `${SYLLABI[State.currentExam].label} — Dashboard`;

  /* ── EVENT LISTENERS ── */

  /* Theme toggle */
  document.getElementById("themeToggle").addEventListener("click", () => {
    const newTheme = State.theme === "light" ? "dark" : "light";
    applyTheme(newTheme);
    saveToStorage();
  });

  /* Main exam card click */
  document.querySelectorAll(".exam-card").forEach((card) => {
    card.addEventListener("click", () => {
      const target = card.dataset.exam;
      if (target === "SBI_PO") {
        /* Switch to last used SBI stage or default to Prelims */
        switchExam(State.sbiStage || "SBI_PRELIMS");
      } else {
        switchExam(target);
      }
    });
  });

  /* Expand all */
  document
    .getElementById("expandAllBtn")
    .addEventListener("click", toggleExpandAll);

  /* Select / Deselect all */
  document.getElementById("selectAllBtn").addEventListener("click", selectAll);
  document
    .getElementById("deselectAllBtn")
    .addEventListener("click", deselectAll);

  /* Search */
  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClear");

  searchInput.addEventListener("input", () => {
    State.searchQuery = searchInput.value;
    searchClear.classList.toggle("visible", searchInput.value.length > 0);
    applyFilters();
  });

  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    State.searchQuery = "";
    searchClear.classList.remove("visible");
    applyFilters();
    searchInput.focus();
  });

  /* Filter chips */
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document
        .querySelectorAll(".chip")
        .forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      State.activeFilter = chip.dataset.filter;
      applyFilters();
    });
  });

  /* Reset button */
  document.getElementById("resetBtn").addEventListener("click", () => {
    document.getElementById("resetModal").classList.add("open");
  });
  document.getElementById("cancelReset").addEventListener("click", () => {
    document.getElementById("resetModal").classList.remove("open");
  });
  document.getElementById("confirmReset").addEventListener("click", () => {
    document.getElementById("resetModal").classList.remove("open");
    resetCurrentExam();
  });
  document.getElementById("resetModal").addEventListener("click", (e) => {
    if (e.target === e.currentTarget)
      document.getElementById("resetModal").classList.remove("open");
  });

  /* Keyboard shortcuts */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape")
      document.getElementById("resetModal").classList.remove("open");
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      searchInput.focus();
    }
  });
}

/* ── Kick off ── */
document.addEventListener("DOMContentLoaded", init);

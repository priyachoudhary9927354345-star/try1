import type {
  Chapter,
  Grade,
  QuizQuestion,
  Subtopic,
  Topic,
  TopicContent,
} from "../types";

/*
 * Class 11 — CBSE / NCERT rationalised textbooks (2023-24 onward).
 * Outline topics follow the NCERT section structure; a few chapters carry
 * full reading content and a practice quiz.
 */

const slug = (s: string): string =>
  s
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const tp = (
  title: string,
  subtopics: string[],
  content?: TopicContent,
): Topic => ({
  id: slug(title),
  title,
  subtopics: subtopics.map((t): Subtopic => ({ id: slug(t), title: t })),
  ...(content ? { content } : {}),
});

const ch = (
  number: number,
  id: string,
  title: string,
  summary: string,
  topics: Topic[],
  quiz?: QuizQuestion[],
): Chapter => ({ id, number, title, summary, topics, ...(quiz ? { quiz } : {}) });

const q = (
  id: string,
  question: string,
  options: [string, string, string, string],
  answer: 0 | 1 | 2 | 3,
  explanation: string,
): QuizQuestion => ({ id, question, options, answer, explanation });

/* ------------------------------------------------------------------ */
/* PHYSICS                                                             */
/* ------------------------------------------------------------------ */

const unitsAndMeasurement = ch(
  1,
  "units-and-measurement",
  "Units and Measurement",
  "How physical quantities are measured using SI units, reported with the right number of significant figures, and checked using dimensional analysis.",
  [
    tp(
      "The International System of Units",
      ["Base Units", "Derived Units", "Plane Angle and Solid Angle"],
      {
        intro:
          "To measure anything, we compare it with a fixed, agreed-upon standard called a unit. Scientists across the world use one common system, the SI (Système Internationale d'Unités), so that a measurement made in Delhi means exactly the same thing in Tokyo.",
        sections: [
          {
            heading: "Why We Need Standard Units",
            body: "Every measurement has two parts: a number and a unit, like 5 m or 2 kg. If everyone used their own hand-span or footstep as a unit, results would never match. The SI system, adopted internationally in 1971, gives every quantity a precise, reproducible standard. Today these standards are defined using fundamental constants of nature, so they never change.",
          },
          {
            heading: "Base and Derived Units",
            body: "The SI has **seven base quantities** with their base units: length (metre, m), mass (kilogram, kg), time (second, s), electric current (ampere, A), thermodynamic temperature (kelvin, K), amount of substance (mole, mol) and luminous intensity (candela, cd). All other units are built from these and are called derived units. For example, speed is measured in m/s and force in newton, where 1 N = 1 kg·m·s⁻². Unit symbols are written in lowercase unless named after a person (N for Newton, K for Kelvin).",
          },
          {
            heading: "Plane Angle and Solid Angle",
            body: "Angles are measured using two dimensionless units. A plane angle dθ is the ratio of an arc length ds to the radius r, and its unit is the radian (rad). A solid angle dΩ is the ratio of an area dA on a sphere to the square of its radius, and its unit is the steradian (sr). Since both are ratios of like quantities, they have no dimensions.",
          },
        ],
        definitions: [
          { term: "Unit", meaning: "A fixed, internationally accepted reference standard with which a physical quantity is compared." },
          { term: "Base unit", meaning: "A unit of one of the seven base quantities of the SI, such as the metre or the kilogram." },
          { term: "Derived unit", meaning: "A unit expressed as a combination of base units, such as m/s for speed or N for force." },
          { term: "Radian", meaning: "The plane angle subtended at the centre of a circle by an arc equal in length to the radius." },
          { term: "Steradian", meaning: "The solid angle subtended at the centre of a sphere by a surface area equal to the square of its radius." },
        ],
        formulas: [
          { label: "Plane angle", expression: "dθ = ds / r", note: "Unit: radian (rad)" },
          { label: "Solid angle", expression: "dΩ = dA / r²", note: "Unit: steradian (sr)" },
          { label: "Newton in base units", expression: "1 N = 1 kg·m·s⁻²" },
        ],
        keyPoints: [
          "A measurement = numerical value × unit.",
          "SI has seven base units: m, kg, s, A, K, mol, cd.",
          "Derived units are combinations of base units (e.g. J = kg·m²·s⁻²).",
          "Radian and steradian are dimensionless units of plane and solid angle.",
          "Unit symbols have no plural form and no full stop: write 10 kg, not 10 kgs.",
        ],
        explainers: {
          eli10:
            "Imagine you and your friend both measure a table using your own hands. Your friend's hand is bigger, so you get different answers and start arguing! To stop such fights, the whole world agreed on the same 'hands' — the metre for length, the kilogram for mass and the second for time. These shared measuring sticks are called SI units, and there are seven main ones that everything else is built from.",
          realWorld:
            "When you buy 1 kg of tomatoes at a sabzi mandi, the shopkeeper's weights are checked by the Legal Metrology department so that 1 kg in Pune equals 1 kg in Patna. Petrol pumps sell in litres, and your electricity bill counts kilowatt-hours — both derived from SI base units. Even the IST clock on your phone is synchronised to atomic clocks that define the second. Without SI, trade and science would be chaos.",
          mnemonic:
            "Remember the seven base units in order with 'My Kid Sister Always Keeps Mangoes Cold' — Metre, Kilogram, Second, Ampere, Kelvin, Mole, Candela. For the angle units, think 'radian = rim over radius' and 'steradian = sphere area over radius squared'.",
        },
      },
    ),
    tp(
      "Significant Figures",
      ["Rules for Counting Significant Figures", "Rounding Off", "Arithmetic Operations with Significant Figures"],
      {
        intro:
          "No measurement is perfectly exact. Significant figures tell us which digits in a reported result are reliable, plus the first digit that is uncertain. Reporting the right number of digits is a way of being honest about how precise your instrument really is.",
        sections: [
          {
            heading: "Counting Significant Figures",
            body: "All non-zero digits are significant, and zeros between two non-zero digits are also significant (2.308 has four). Leading zeros in a number less than 1 are not significant — 0.00234 has only three. Trailing zeros are significant only when there is a decimal point: 4.700 has four, but in 4700 the zeros are not counted. Writing numbers in scientific notation, like 4.700 × 10³, removes this confusion.",
          },
          {
            heading: "Rounding Off",
            body: "When dropping extra digits, look at the first digit being removed. If it is more than 5, increase the previous digit by 1; if it is less than 5, leave it unchanged. If it is exactly 5, NCERT's convention is to leave the previous digit unchanged if it is even and raise it by 1 if it is odd. So 2.745 rounds to 2.74 and 2.735 also rounds to 2.74.",
          },
          {
            heading: "Calculations with Significant Figures",
            body: "In **multiplication or division**, the answer keeps as many significant figures as the quantity with the fewest significant figures. In **addition or subtraction**, the answer keeps as many decimal places as the quantity with the fewest decimal places. For example, 436.32 g + 227.2 g + 0.301 g = 663.821 g, which is reported as 663.8 g. Exact numbers, like the 2 in 2πr, have infinite significant figures and do not limit the answer.",
          },
        ],
        definitions: [
          { term: "Significant figures", meaning: "The reliable digits in a measured value plus the first uncertain digit." },
          { term: "Scientific notation", meaning: "Writing a number as a × 10ᵇ, where 1 ≤ a < 10 and b is an integer." },
          { term: "Order of magnitude", meaning: "The power of 10 (b) when a number is written in scientific notation." },
          { term: "Precision", meaning: "How finely a quantity is measured, shown by the number of significant figures reported." },
        ],
        formulas: [
          { label: "Scientific notation", expression: "N = a × 10ᵇ, 1 ≤ a < 10", note: "All digits of a are significant." },
        ],
        keyPoints: [
          "Non-zero digits and zeros between them are always significant.",
          "Leading zeros are never significant; they only place the decimal point.",
          "Changing units does not change the number of significant figures (2.308 cm = 0.02308 m).",
          "× and ÷: keep the least number of significant figures among the inputs.",
          "+ and −: keep the least number of decimal places among the inputs.",
          "Round off only the final result, not intermediate steps.",
        ],
        explainers: {
          eli10:
            "Suppose your ruler only has centimetre marks and you measure a pencil as 12.3 cm. You are sure about the 12, and you guessed the 3 by eye. So you have three significant figures. Writing 12.3456 cm would be like pretending your ruler is super-powerful — that's fibbing with numbers!",
          realWorld:
            "A jeweller in Zaveri Bazaar weighs gold on a scale that reads to 0.001 g, while a grocer's scale reads to only 5 g. If the jeweller says a chain weighs 10.250 g, all five digits mean something. A grocer claiming 1.2503 kg of onions would be reporting precision his scale simply does not have. Significant figures keep everyone honest about how good their measurements are.",
          mnemonic:
            "'Sandwiched zeros count, leading zeros are just seat-fillers, trailing zeros count only when a decimal point is watching.' For calculations: 'Multiply by figures, add by places' — × and ÷ follow significant figures, + and − follow decimal places.",
        },
      },
    ),
    tp(
      "Dimensions and Dimensional Analysis",
      ["Dimensional Formulae", "Checking Dimensional Consistency", "Deducing Relations among Physical Quantities"],
      {
        intro:
          "Every physical quantity can be expressed in terms of a few base quantities like mass [M], length [L] and time [T]. The powers to which these base quantities are raised are called the dimensions of that quantity. Dimensions let us check equations and even guess new ones.",
        sections: [
          {
            heading: "Dimensional Formulae",
            body: "The dimensional formula shows how a quantity depends on base quantities. Velocity is length divided by time, so its dimensional formula is [M⁰ L T⁻¹]. Force = mass × acceleration, giving [M L T⁻²]. Work, energy and torque all share [M L² T⁻²]. Pure numbers and ratios like strain or angle are dimensionless, written [M⁰ L⁰ T⁰].",
          },
          {
            heading: "Principle of Homogeneity",
            body: "You can only add, subtract or equate quantities that have the same dimensions — you cannot add a length to a time. So in a correct equation, every term must have the same dimensions. For example, in s = ut + ½at², each term has dimensions of [L]. If a single term fails this test, the equation is definitely wrong.",
          },
          {
            heading: "Deducing Relations and Limitations",
            body: "If we know which quantities a result depends on, dimensions can help us find the form of the formula. For a simple pendulum, assuming T depends on length l, mass m and g, dimensional analysis gives T = k√(l/g); experiments show k = 2π. However, the method cannot find dimensionless constants like 2π, cannot handle sums of terms or functions like sin and log, and a dimensionally correct equation is not guaranteed to be physically correct.",
          },
        ],
        definitions: [
          { term: "Dimensions", meaning: "The powers (exponents) to which the base quantities are raised to represent a physical quantity." },
          { term: "Dimensional formula", meaning: "An expression showing which base quantities, and with what powers, make up a physical quantity, e.g. [M L T⁻²] for force." },
          { term: "Dimensional equation", meaning: "An equation equating a physical quantity to its dimensional formula, e.g. [F] = [M L T⁻²]." },
          { term: "Principle of homogeneity", meaning: "Every term on both sides of a valid physical equation must have the same dimensions." },
        ],
        formulas: [
          { label: "Force", expression: "[F] = [M L T⁻²]" },
          { label: "Work / Energy", expression: "[W] = [M L² T⁻²]" },
          { label: "Pressure", expression: "[P] = [M L⁻¹ T⁻²]" },
          { label: "Simple pendulum (by dimensions)", expression: "T = k·√(l / g)", note: "k = 2π is found experimentally, not from dimensions." },
        ],
        keyPoints: [
          "Mechanics uses three base dimensions: [M], [L] and [T].",
          "Quantities with the same dimensions can be added or compared; others cannot.",
          "A dimensionally wrong equation is always wrong; a dimensionally right one may still be wrong.",
          "Dimensional analysis cannot give dimensionless constants such as 2π or ½.",
          "Work, energy and torque share the dimensional formula [M L² T⁻²].",
        ],
        explainers: {
          eli10:
            "Think of dimensions as the 'ingredients' of a quantity. Speed is made of one length and divided by one time, just like a recipe. You can add 2 apples to 3 apples, but adding 2 apples to 3 minutes makes no sense. Physics equations follow the same rule — both sides must have the same ingredients.",
          realWorld:
            "Imagine an auto-rickshaw app claims the fare formula is: fare = ₹30 + ₹15 × distance + ₹2 × time. Each term must end up in rupees, so '15' must be rupees per km and '2' must be rupees per minute. Engineers at ISRO use exactly this kind of unit-and-dimension check to catch mistakes in their calculations before a launch. A mismatched unit once caused NASA to lose the Mars Climate Orbiter in 1999!",
          mnemonic:
            "'Fat Men Like Tea twice-Negative' — Force is [M L T⁻²]. Then build up: Work = Force × distance adds one L → [M L² T⁻²], and Pressure = Force ÷ area removes two L → [M L⁻¹ T⁻²].",
        },
      },
    ),
  ],
  [
    q("q1", "How many base units are there in the SI system?", ["Five", "Six", "Seven", "Nine"], 2, "The SI has seven base units: metre, kilogram, second, ampere, kelvin, mole and candela."),
    q("q2", "How many significant figures are there in 0.007060?", ["Seven", "Four", "Six", "Three"], 1, "Leading zeros are not significant; 7, 0, 6 and the trailing 0 after the decimal are, giving four."),
    q("q3", "The dimensional formula of force is:", ["[M L T⁻²]", "[M L² T⁻²]", "[M L⁻¹ T⁻²]", "[M L T⁻¹]"], 0, "Force = mass × acceleration = [M][L T⁻²] = [M L T⁻²]."),
    q("q4", "The value 2.745 rounded off to three significant figures is:", ["2.75", "2.70", "2.80", "2.74"], 3, "When the dropped digit is exactly 5 and the preceding digit (4) is even, it is left unchanged."),
    q("q5", "Which of the following pairs has the same dimensions?", ["Force and power", "Work and torque", "Pressure and energy", "Velocity and acceleration"], 1, "Both work and torque have the dimensional formula [M L² T⁻²]."),
    q("q6", "Which of these CANNOT be obtained from dimensional analysis?", ["Checking an equation's consistency", "Converting units between systems", "The value of a dimensionless constant like 2π", "Finding the form of a relation among quantities"], 2, "Dimensionless constants have no dimensions, so dimensional analysis cannot determine them."),
  ],
);

const physics: Grade["subjects"][number] = {
  id: "physics",
  name: "Physics",
  icon: "atom",
  color: "sky",
  textbooks: [
    {
      id: "physics-part-1",
      title: "Physics — Textbook for Class XI, Part I",
      chapters: [
        unitsAndMeasurement,
        ch(2, "motion-in-a-straight-line", "Motion in a Straight Line", "Describes one-dimensional motion using position, velocity and acceleration, and derives the kinematic equations for uniformly accelerated motion.", [
          tp("Position, Velocity and Speed", ["Path Length and Displacement", "Average Velocity and Average Speed", "Instantaneous Velocity and Speed"]),
          tp("Acceleration", ["Average and Instantaneous Acceleration", "Position-Time and Velocity-Time Graphs"]),
          tp("Kinematic Equations for Uniformly Accelerated Motion", ["Equations of Motion", "Free Fall", "Stopping Distance and Reaction Time"]),
        ]),
        ch(3, "motion-in-a-plane", "Motion in a Plane", "Extends kinematics to two dimensions using vectors, covering projectile motion and uniform circular motion.", [
          tp("Scalars and Vectors", ["Position and Displacement Vectors", "Equality of Vectors", "Multiplication of Vectors by Real Numbers"]),
          tp("Addition, Subtraction and Resolution of Vectors", ["Graphical Method", "Resolution of Vectors", "Analytical Method of Vector Addition"]),
          tp("Motion in a Plane with Constant Acceleration", ["Velocity and Acceleration in a Plane", "Equations of Motion in Vector Form"]),
          tp("Projectile Motion and Uniform Circular Motion", ["Equation of Path of a Projectile", "Time of Flight, Maximum Height and Range", "Centripetal Acceleration"]),
        ]),
        ch(4, "laws-of-motion", "Laws of Motion", "Newton's three laws of motion, momentum and its conservation, friction, and the dynamics of circular motion.", [
          tp("Newton's First Law", ["Aristotle's Fallacy", "The Law of Inertia", "Newton's First Law of Motion"]),
          tp("Newton's Second and Third Laws", ["Momentum and the Second Law", "Impulse", "Newton's Third Law of Motion"]),
          tp("Conservation of Momentum and Equilibrium", ["Conservation of Momentum", "Equilibrium of a Particle", "Solving Problems in Mechanics"]),
          tp("Common Forces and Circular Motion", ["Static and Kinetic Friction", "Rolling Friction", "Motion of a Car on Level and Banked Roads"]),
        ]),
        ch(5, "work-energy-and-power", "Work, Energy and Power", "Defines work, kinetic and potential energy, the work-energy theorem, conservation of mechanical energy, power, and collisions.", [
          tp("Work and Kinetic Energy", ["Scalar Product", "Work Done by a Constant Force", "Work Done by a Variable Force", "Work-Energy Theorem"]),
          tp("Potential Energy and Conservation", ["Concept of Potential Energy", "Conservation of Mechanical Energy", "Potential Energy of a Spring"]),
          tp("Power and Collisions", ["Power", "Elastic and Inelastic Collisions", "Collisions in One Dimension"]),
        ]),
        ch(6, "system-of-particles-and-rotational-motion", "System of Particles and Rotational Motion", "Studies the centre of mass, torque, angular momentum, equilibrium of rigid bodies and rotation about a fixed axis.", [
          tp("Centre of Mass", ["Centre of Mass of a System", "Motion of Centre of Mass", "Linear Momentum of a System of Particles"]),
          tp("Torque and Angular Momentum", ["Vector Product", "Angular Velocity", "Moment of Force (Torque)", "Conservation of Angular Momentum"]),
          tp("Equilibrium of a Rigid Body", ["Principle of Moments", "Centre of Gravity"]),
          tp("Rotational Motion about a Fixed Axis", ["Moment of Inertia", "Kinematics of Rotational Motion", "Dynamics of Rotational Motion"]),
        ]),
        ch(7, "gravitation", "Gravitation", "Covers Kepler's laws, Newton's universal law of gravitation, variation of g, gravitational potential energy, escape speed and satellites.", [
          tp("Kepler's Laws and the Universal Law", ["Kepler's Laws", "Universal Law of Gravitation", "The Gravitational Constant"]),
          tp("Acceleration due to Gravity", ["Acceleration due to Gravity of the Earth", "Variation of g with Height", "Variation of g with Depth"]),
          tp("Gravitational Potential Energy and Escape Speed", ["Gravitational Potential Energy", "Escape Speed"]),
          tp("Earth Satellites", ["Orbital Speed and Period", "Energy of an Orbiting Satellite"]),
        ]),
      ],
    },
    {
      id: "physics-part-2",
      title: "Physics — Textbook for Class XI, Part II",
      chapters: [
        ch(8, "mechanical-properties-of-solids", "Mechanical Properties of Solids", "Explains elasticity through stress, strain, Hooke's law and the elastic moduli of solids.", [
          tp("Stress and Strain", ["Elastic Behaviour of Solids", "Types of Stress", "Types of Strain"]),
          tp("Hooke's Law and the Stress-Strain Curve", ["Hooke's Law", "Elastic Limit and Yield Point", "Ductile and Brittle Materials"]),
          tp("Elastic Moduli", ["Young's Modulus", "Shear Modulus", "Bulk Modulus", "Applications of Elastic Behaviour"]),
        ]),
        ch(9, "mechanical-properties-of-fluids", "Mechanical Properties of Fluids", "Explores pressure in fluids, Pascal's law, Bernoulli's principle, viscosity and surface tension.", [
          tp("Pressure", ["Pascal's Law", "Variation of Pressure with Depth", "Atmospheric and Gauge Pressure", "Hydraulic Machines"]),
          tp("Streamline Flow and Bernoulli's Principle", ["Equation of Continuity", "Bernoulli's Principle", "Speed of Efflux and Dynamic Lift"]),
          tp("Viscosity", ["Coefficient of Viscosity", "Stokes' Law and Terminal Velocity"]),
          tp("Surface Tension", ["Surface Energy", "Angle of Contact", "Drops, Bubbles and Capillary Rise"]),
        ]),
        ch(10, "thermal-properties-of-matter", "Thermal Properties of Matter", "Covers temperature scales, thermal expansion, specific heat, calorimetry, change of state and modes of heat transfer.", [
          tp("Temperature and Thermal Expansion", ["Measurement of Temperature", "Ideal-Gas Equation and Absolute Temperature", "Linear, Area and Volume Expansion"]),
          tp("Specific Heat Capacity and Calorimetry", ["Specific Heat Capacity", "Calorimetry"]),
          tp("Change of State", ["Melting and Boiling", "Latent Heat"]),
          tp("Heat Transfer", ["Conduction", "Convection", "Radiation", "Newton's Law of Cooling"]),
        ]),
        ch(11, "thermodynamics", "Thermodynamics", "Introduces thermal equilibrium, the zeroth, first and second laws of thermodynamics, thermodynamic processes and the Carnot engine.", [
          tp("Thermal Equilibrium and the Zeroth Law", ["Thermal Equilibrium", "Zeroth Law of Thermodynamics", "Heat, Internal Energy and Work"]),
          tp("First Law of Thermodynamics", ["Statement of the First Law", "Specific Heat Capacity of Gases", "Thermodynamic State Variables"]),
          tp("Thermodynamic Processes", ["Isothermal Process", "Adiabatic Process", "Isochoric and Isobaric Processes"]),
          tp("Second Law and Carnot Engine", ["Second Law of Thermodynamics", "Reversible and Irreversible Processes", "Carnot Engine"]),
        ]),
        ch(12, "kinetic-theory", "Kinetic Theory", "Explains the behaviour of gases in terms of moving molecules, leading to pressure, temperature, equipartition of energy and mean free path.", [
          tp("Molecular Nature of Matter and Behaviour of Gases", ["Molecular Nature of Matter", "Gas Laws and the Ideal Gas Equation"]),
          tp("Kinetic Theory of an Ideal Gas", ["Pressure of an Ideal Gas", "Kinetic Interpretation of Temperature"]),
          tp("Equipartition of Energy and Specific Heat", ["Law of Equipartition of Energy", "Specific Heat Capacity of Gases and Solids"]),
          tp("Mean Free Path", ["Meaning of Mean Free Path", "Dependence on Density and Molecular Size"]),
        ]),
        ch(13, "oscillations", "Oscillations", "Studies periodic motion and simple harmonic motion, its energy, and the simple pendulum.", [
          tp("Periodic and Oscillatory Motion", ["Period and Frequency", "Displacement"]),
          tp("Simple Harmonic Motion", ["SHM and Uniform Circular Motion", "Velocity and Acceleration in SHM", "Force Law for SHM"]),
          tp("Energy in SHM and the Simple Pendulum", ["Energy in Simple Harmonic Motion", "The Simple Pendulum"]),
        ]),
        ch(14, "waves", "Waves", "Describes transverse and longitudinal waves, wave speed, superposition, reflection, standing waves and beats.", [
          tp("Transverse and Longitudinal Waves", ["Transverse Waves", "Longitudinal Waves", "Displacement Relation in a Progressive Wave"]),
          tp("Speed of a Travelling Wave", ["Speed of a Transverse Wave on a String", "Speed of a Longitudinal Wave (Sound)"]),
          tp("Superposition and Reflection of Waves", ["Principle of Superposition", "Reflection of Waves", "Standing Waves and Normal Modes"]),
          tp("Beats", ["Formation of Beats", "Beat Frequency"]),
        ]),
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* CHEMISTRY                                                           */
/* ------------------------------------------------------------------ */

const chemistry: Grade["subjects"][number] = {
  id: "chemistry",
  name: "Chemistry",
  icon: "beaker",
  color: "violet",
  textbooks: [
    {
      id: "chemistry-part-1",
      title: "Chemistry — Textbook for Class XI, Part I",
      chapters: [
        ch(1, "some-basic-concepts-of-chemistry", "Some Basic Concepts of Chemistry", "Lays the foundation of chemistry: matter, measurement, laws of chemical combination, the mole concept and stoichiometry.", [
          tp("Nature of Matter and Measurement", ["Importance of Chemistry", "Nature of Matter", "Properties of Matter and their Measurement", "Uncertainty in Measurement"]),
          tp("Laws of Chemical Combinations", ["Law of Conservation of Mass", "Law of Definite Proportions", "Law of Multiple Proportions", "Gay Lussac's Law and Avogadro's Law"]),
          tp("Atomic Theory and the Mole Concept", ["Dalton's Atomic Theory", "Atomic and Molecular Masses", "Mole Concept and Molar Masses", "Percentage Composition"]),
          tp("Stoichiometry and Stoichiometric Calculations", ["Limiting Reagent", "Reactions in Solutions"]),
        ]),
        ch(2, "structure-of-atom", "Structure of Atom", "Traces the discovery of subatomic particles and atomic models, leading to the quantum mechanical model and electronic configuration.", [
          tp("Discovery of Subatomic Particles", ["Discovery of Electron", "Charge to Mass Ratio of Electron", "Discovery of Protons and Neutrons"]),
          tp("Atomic Models", ["Thomson Model of Atom", "Rutherford's Nuclear Model", "Atomic Number and Mass Number"]),
          tp("Bohr's Model for Hydrogen Atom", ["Wave Nature of Electromagnetic Radiation", "Planck's Quantum Theory", "Atomic Spectra", "Bohr's Model"]),
          tp("Quantum Mechanical Model of Atom", ["Dual Behaviour of Matter", "Heisenberg's Uncertainty Principle", "Orbitals and Quantum Numbers", "Filling of Orbitals"]),
        ]),
        ch(3, "classification-of-elements-and-periodicity-in-properties", "Classification of Elements and Periodicity in Properties", "Explains how the periodic table developed and how properties of elements vary periodically across periods and groups.", [
          tp("Genesis of Periodic Classification", ["Why Classify Elements", "Mendeleev's Periodic Law", "Modern Periodic Law", "Nomenclature of Elements with Z > 100"]),
          tp("Electronic Configuration and Types of Elements", ["Electronic Configurations in Periods and Groups", "s-, p-, d- and f-Block Elements"]),
          tp("Periodic Trends in Properties", ["Atomic and Ionic Radius", "Ionization Enthalpy", "Electron Gain Enthalpy", "Electronegativity"]),
        ]),
        ch(4, "chemical-bonding-and-molecular-structure", "Chemical Bonding and Molecular Structure", "Explains why atoms combine, and the theories of ionic and covalent bonding, molecular shapes and hydrogen bonding.", [
          tp("Kossel-Lewis Approach and Ionic Bond", ["Octet Rule", "Covalent Bond and Lewis Structures", "Formal Charge", "Ionic or Electrovalent Bond"]),
          tp("Bond Parameters and VSEPR Theory", ["Bond Length, Angle and Enthalpy", "Resonance Structures", "Polarity of Bonds", "VSEPR Theory"]),
          tp("Valence Bond Theory and Hybridisation", ["Orbital Overlap Concept", "Sigma and Pi Bonds", "Types of Hybridisation"]),
          tp("Molecular Orbital Theory and Hydrogen Bonding", ["Formation of Molecular Orbitals", "Bond Order and Magnetic Nature", "Hydrogen Bonding"]),
        ]),
        ch(5, "thermodynamics", "Thermodynamics", "Applies the laws of thermodynamics to chemical reactions, covering internal energy, enthalpy, Hess's law, entropy and Gibbs energy.", [
          tp("Thermodynamic Terms", ["System and Surroundings", "State of the System", "Internal Energy as a State Function"]),
          tp("Applications: Work, Enthalpy and Calorimetry", ["Work and the First Law", "Enthalpy", "Measurement of ΔU and ΔH: Calorimetry"]),
          tp("Enthalpy Change of Reactions", ["Standard Enthalpy of Reactions", "Hess's Law of Constant Heat Summation", "Enthalpies for Different Types of Reactions"]),
          tp("Spontaneity and Gibbs Energy", ["Entropy and Spontaneity", "Gibbs Energy Change", "Gibbs Energy and Equilibrium"]),
        ]),
        ch(6, "equilibrium", "Equilibrium", "Studies physical and chemical equilibrium, equilibrium constants, Le Chatelier's principle, and ionic equilibria of acids, bases, buffers and salts.", [
          tp("Equilibrium in Physical and Chemical Processes", ["Equilibrium in Physical Processes", "Dynamic Nature of Chemical Equilibrium", "Law of Chemical Equilibrium"]),
          tp("Equilibrium Constants", ["Homogeneous Equilibria", "Heterogeneous Equilibria", "Relationship between K, Q and G"]),
          tp("Factors Affecting Equilibria", ["Le Chatelier's Principle", "Effect of Concentration, Pressure and Temperature", "Effect of a Catalyst"]),
          tp("Ionic Equilibrium in Solution", ["Acids, Bases and Salts", "Ionization of Acids and Bases and pH", "Buffer Solutions", "Solubility Equilibria of Sparingly Soluble Salts"]),
        ]),
      ],
    },
    {
      id: "chemistry-part-2",
      title: "Chemistry — Textbook for Class XI, Part II",
      chapters: [
        ch(7, "redox-reactions", "Redox Reactions", "Explains oxidation and reduction in terms of electron transfer and oxidation numbers, and how redox reactions are balanced.", [
          tp("Classical Idea of Redox Reactions", ["Oxidation and Reduction", "Redox Reactions in Terms of Electron Transfer"]),
          tp("Oxidation Number", ["Rules for Assigning Oxidation Numbers", "Types of Redox Reactions", "Balancing of Redox Reactions"]),
          tp("Redox Reactions and Electrode Processes", ["Electrochemical Cells", "Standard Electrode Potential"]),
        ]),
        ch(8, "organic-chemistry-some-basic-principles-and-techniques", "Organic Chemistry – Some Basic Principles and Techniques", "Introduces organic compounds, their representation, nomenclature, isomerism, reaction mechanisms, and methods of purification and analysis.", [
          tp("Structure and Classification of Organic Compounds", ["Tetravalence of Carbon", "Structural Representations", "Classification of Organic Compounds"]),
          tp("Nomenclature and Isomerism", ["IUPAC System of Nomenclature", "Structural Isomerism", "Stereoisomerism"]),
          tp("Fundamental Concepts in Reaction Mechanism", ["Fission of a Covalent Bond", "Nucleophiles and Electrophiles", "Inductive, Resonance and Electromeric Effects", "Hyperconjugation"]),
          tp("Purification and Analysis of Organic Compounds", ["Methods of Purification", "Qualitative Analysis", "Quantitative Analysis"]),
        ]),
        ch(9, "hydrocarbons", "Hydrocarbons", "Covers the preparation, properties and reactions of alkanes, alkenes, alkynes and aromatic hydrocarbons.", [
          tp("Alkanes", ["Nomenclature and Isomerism", "Preparation", "Properties", "Conformations"]),
          tp("Alkenes", ["Structure of Double Bond", "Geometrical Isomerism", "Preparation and Properties", "Markovnikov's Rule"]),
          tp("Alkynes", ["Structure of Triple Bond", "Preparation", "Properties"]),
          tp("Aromatic Hydrocarbons", ["Structure of Benzene and Aromaticity", "Electrophilic Substitution", "Directive Influence of Functional Groups", "Carcinogenicity and Toxicity"]),
        ]),
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* BIOLOGY                                                             */
/* ------------------------------------------------------------------ */

const cellUnitOfLife = ch(
  8,
  "cell-the-unit-of-life",
  "Cell: The Unit of Life",
  "Explores the cell theory and the structure of prokaryotic and eukaryotic cells along with their organelles.",
  [
    tp(
      "What is a Cell? Cell Theory",
      ["Discovery of the Cell", "Cell Theory", "An Overview of Cell"],
      {
        intro:
          "All living organisms — from a bacterium to a banyan tree — are made of cells. A cell is the smallest unit that can carry out all the functions of life on its own. Anything less than a complete cell cannot live independently.",
        sections: [
          {
            heading: "Discovery of the Cell",
            body: "Robert Hooke first used the word 'cell' in 1665 after seeing tiny compartments in a thin slice of cork. Anton von Leeuwenhoek was the first to see and describe a live cell. Later, Robert Brown discovered the nucleus. Better microscopes, and eventually the electron microscope, revealed the fine details of cell structure.",
          },
          {
            heading: "The Cell Theory",
            body: "In 1838, the German botanist Matthias Schleiden observed that all plants are made of cells. In 1839, the zoologist Theodor Schwann found the same for animals and proposed that the bodies of animals and plants are made of cells and their products. But they could not explain how new cells form. In 1855, Rudolf Virchow showed that cells divide and new cells arise from pre-existing cells (**Omnis cellula-e cellula**), completing the cell theory.",
          },
          {
            heading: "An Overview of Cells",
            body: "Every cell has a plasma membrane enclosing a semi-fluid matrix called cytoplasm. Eukaryotic cells have a membrane-bound nucleus, while prokaryotic cells do not. Cells vary hugely in size and shape: Mycoplasma, the smallest cells, are only about 0.3 µm long, bacteria are 3–5 µm, a human red blood cell is about 7 µm across, and the largest single cell is the egg of an ostrich. Nerve cells are among the longest cells.",
          },
        ],
        definitions: [
          { term: "Cell", meaning: "The fundamental structural and functional unit of all living organisms." },
          { term: "Cell theory", meaning: "All living organisms are composed of cells and products of cells, and all cells arise from pre-existing cells." },
          { term: "Cytoplasm", meaning: "The semi-fluid matrix inside the plasma membrane where most cellular activities take place." },
          { term: "Omnis cellula-e cellula", meaning: "Virchow's statement that every cell arises from a pre-existing cell." },
        ],
        dates: [
          { date: "1665", event: "Robert Hooke observes cork cells and coins the term 'cell'." },
          { date: "1838", event: "Matthias Schleiden concludes that all plants are made of cells." },
          { date: "1839", event: "Theodor Schwann extends the idea to animals and proposes the cell hypothesis." },
          { date: "1855", event: "Rudolf Virchow states that all cells arise from pre-existing cells." },
        ],
        keyPoints: [
          "The cell is the basic unit of structure and function in all living beings.",
          "Schleiden and Schwann together formulated the cell theory; Virchow modified it.",
          "Modern cell theory: organisms are made of cells, and cells come only from pre-existing cells.",
          "Eukaryotic cells have a membrane-bound nucleus; prokaryotic cells lack one.",
          "Mycoplasma are the smallest known cells; the ostrich egg is the largest single cell.",
        ],
        explainers: {
          eli10:
            "Just like a big building is made of lots of small bricks, your body is made of tiny living bricks called cells. But these bricks are alive — they eat, grow, make energy and even make copies of themselves! Scientists found out long ago that every plant and animal is built from cells, and that new cells only come from old cells splitting in two.",
          realWorld:
            "When you get a small cut while chopping vegetables, it heals within days — that's your skin cells dividing to make new ones, exactly as Virchow said. Dahi forms because billions of single-celled Lactobacillus bacteria multiply in warm milk. And the egg you eat for breakfast? Before it is fertilised, the yolk portion is essentially one giant cell. Cells are working all around you, all the time.",
          mnemonic:
            "Think 'S-S-V: Plants, Animals, Parents' — Schleiden (1838) said Plants have cells, Schwann (1839) said Animals do too, and Virchow (1855) said every cell has a Parent cell. The order also follows the alphabet within the S's: Schleiden before Schwann.",
        },
      },
    ),
    tp(
      "Prokaryotic Cells",
      ["Cell Envelope and its Modifications", "Ribosomes and Inclusion Bodies", "Flagella, Pili and Fimbriae"],
      {
        intro:
          "Prokaryotic cells are the simplest cells, found in bacteria, blue-green algae, mycoplasma and PPLO (pleuro-pneumonia like organisms). They are generally smaller than eukaryotic cells and multiply much faster. Their most important feature is that they have no well-defined nucleus and no membrane-bound organelles.",
        sections: [
          {
            heading: "Genetic Material and Cell Envelope",
            body: "In prokaryotes, the genetic material is naked DNA not enveloped by a nuclear membrane, lying in a region called the nucleoid. Many bacteria also have small circular DNA called plasmids, which can give special traits like antibiotic resistance. Most prokaryotes have a three-layered cell envelope: an outer glycocalyx, a middle cell wall and an inner plasma membrane. The glycocalyx may be a loose slime layer or a thick, tough capsule.",
          },
          {
            heading: "Gram Staining and Mesosomes",
            body: "Based on how their cell envelopes react to the Gram stain, bacteria are classified as **Gram positive** (take up the stain) or **Gram negative** (do not). The plasma membrane can fold inward to form mesosomes, which help in cell wall formation, DNA replication and its distribution to daughter cells, respiration and secretion. In cyanobacteria, membranous extensions called chromatophores contain pigments.",
          },
          {
            heading: "Ribosomes, Inclusions and Surface Structures",
            body: "Prokaryotic ribosomes are of the 70S type, made of a 50S and a 30S subunit, and are attached to the plasma membrane. Several ribosomes can attach to one mRNA to form a polysome, which translates it into proteins. Reserve material is stored as inclusion bodies such as phosphate granules, cyanophycean granules and glycogen granules; gas vacuoles occur in some aquatic forms. Motile bacteria have flagella, while pili and fimbriae help in attachment to surfaces and host tissues.",
          },
        ],
        definitions: [
          { term: "Nucleoid", meaning: "The region in a prokaryotic cell containing the naked genetic material, not bounded by a membrane." },
          { term: "Plasmid", meaning: "Small, circular, extra-chromosomal DNA found in many bacteria." },
          { term: "Mesosome", meaning: "An infolding of the plasma membrane in prokaryotes, involved in wall formation, DNA replication, respiration and secretion." },
          { term: "Glycocalyx", meaning: "The outermost layer of the bacterial cell envelope, present as a slime layer or a capsule." },
          { term: "Polysome", meaning: "A chain of several ribosomes attached to a single mRNA." },
        ],
        keyPoints: [
          "Prokaryotes: bacteria, blue-green algae, mycoplasma and PPLO.",
          "No nuclear membrane and no membrane-bound organelles.",
          "Cell envelope = glycocalyx + cell wall + plasma membrane.",
          "Ribosomes are 70S (50S + 30S).",
          "Plasmids can confer traits like antibiotic resistance and are used in genetic engineering.",
          "Mycoplasma lack a cell wall altogether.",
        ],
        explainers: {
          eli10:
            "A prokaryotic cell is like a one-room studio flat. Everything — the kitchen, the bed, the study table — is in one open space with no separate rooms. Its instruction book (DNA) just lies in a corner instead of being locked inside a special room. Eukaryotic cells, on the other hand, are like big houses with many rooms.",
          realWorld:
            "The Lactobacillus that turns milk into curd and the E. coli that can cause stomach upsets after eating street food are both prokaryotes. Doctors take a Gram stain of samples in pathology labs to decide which antibiotic to prescribe, because Gram positive and Gram negative bacteria respond differently. Plasmids carrying antibiotic resistance are one reason why taking incomplete antibiotic courses is dangerous.",
          mnemonic:
            "'Pro = No' — PROkaryotes have NO true nucleus. For the envelope, go from outside in with 'Good Cells Protect' — Glycocalyx, Cell wall, Plasma membrane. And prokaryotic ribosomes are '70S = 50 + 30' (S-values are not simply additive).",
        },
      },
    ),
    tp(
      "Eukaryotic Cells",
      ["Cell Membrane and Cell Wall", "Endomembrane System", "Mitochondria, Plastids and Ribosomes", "Nucleus"],
      {
        intro:
          "Eukaryotic cells are found in protists, plants, animals and fungi. They are compartmentalised by membrane-bound organelles, each doing a specialised job, and have an organised nucleus with a nuclear envelope. Plant cells also have a cell wall, plastids and a large central vacuole, which animal cells lack; animal cells have centrioles.",
        sections: [
          {
            heading: "Cell Membrane and Cell Wall",
            body: "The cell membrane is made mainly of a lipid bilayer with proteins. The widely accepted **fluid mosaic model** (Singer and Nicolson, 1972) says the quasi-fluid lipids allow proteins to move sideways within the membrane. The membrane is selectively permeable and transports molecules passively (along a gradient) or actively (using ATP, like the Na⁺/K⁺ pump). Plant cell walls are made of cellulose, hemicellulose, pectins and proteins, while the middle lamella, mainly calcium pectate, glues neighbouring cells together.",
          },
          {
            heading: "The Endomembrane System",
            body: "The endoplasmic reticulum (ER), Golgi complex, lysosomes and vacuoles work together and form the endomembrane system. Rough ER has ribosomes and makes proteins, while smooth ER makes lipids and, in animals, steroidal hormones. The Golgi apparatus, described by Camillo Golgi in 1898, packages materials, receiving them at its cis face and releasing them from its trans face; it is also where glycoproteins and glycolipids form. Lysosomes are full of hydrolytic enzymes that work best at acidic pH, and vacuoles store water, sap and wastes.",
          },
          {
            heading: "Mitochondria, Plastids and Ribosomes",
            body: "Mitochondria are double-membraned organelles whose inner membrane folds into cristae; they are the sites of aerobic respiration and are called the 'powerhouses' of the cell. Plastids occur in plants: chloroplasts (with chlorophyll) carry out photosynthesis, chromoplasts hold coloured pigments, and leucoplasts store food as starch (amyloplasts), oils (elaioplasts) or proteins (aleuroplasts). Mitochondria and chloroplasts have their own circular DNA and 70S ribosomes. Ribosomes, first seen by George Palade in 1953, are 80S in the eukaryotic cytoplasm.",
          },
          {
            heading: "The Nucleus",
            body: "The nucleus, first described by Robert Brown in 1831, is enclosed by a double-layered nuclear envelope pierced by nuclear pores that allow RNA and proteins to move in and out. Inside is the nucleoplasm containing the nucleolus, a site of active ribosomal RNA synthesis, and chromatin. During cell division, chromatin condenses into chromosomes, each with a primary constriction called the centromere bearing disc-shaped kinetochores. Mature mammalian RBCs and plant sieve tube cells lack a nucleus.",
          },
        ],
        definitions: [
          { term: "Fluid mosaic model", meaning: "The model of membrane structure in which proteins float within a quasi-fluid lipid bilayer." },
          { term: "Endomembrane system", meaning: "The ER, Golgi complex, lysosomes and vacuoles, which function in a coordinated way." },
          { term: "Cristae", meaning: "Infoldings of the inner mitochondrial membrane that increase its surface area." },
          { term: "Lysosome", meaning: "A membrane-bound vesicle rich in hydrolytic enzymes that are active at acidic pH." },
          { term: "Centromere", meaning: "The primary constriction of a chromosome that holds its two chromatids together." },
        ],
        keyPoints: [
          "Mitochondria, chloroplasts and peroxisomes are NOT part of the endomembrane system.",
          "RER synthesises proteins; SER synthesises lipids and steroidal hormones.",
          "Golgi: cis face receives, trans face releases; glycoproteins and glycolipids form here.",
          "Mitochondria and chloroplasts are semi-autonomous: they have their own DNA and 70S ribosomes.",
          "Eukaryotic cytoplasmic ribosomes are 80S (60S + 40S).",
          "Plant cells have a cell wall, plastids and a large vacuole; animal cells have centrioles.",
        ],
        explainers: {
          eli10:
            "A eukaryotic cell is like a busy factory town. The nucleus is the head office with all the instructions. Ribosomes are workers building proteins, the ER is a network of roads, and the Golgi is the packing-and-dispatch centre. Mitochondria are the power stations, lysosomes are the garbage and recycling crew, and in plants, chloroplasts are solar panels making food from sunlight.",
          realWorld:
            "Think of a big Indian wedding. The family elder (nucleus) decides the plan, the cooks in the kitchen (ribosomes on the RER) prepare dishes, the serving team (Golgi) packs and sends plates to the right tables, and the generator (mitochondria) keeps the lights on. The cleaning staff (lysosomes) clear the waste. Each group has its own space and job, but they must all work together for the event to succeed.",
          mnemonic:
            "For the endomembrane system remember 'Every Good Lunch Vanishes' — ER, Golgi, Lysosomes, Vacuoles. For plastids: 'Chloro = Green, Chromo = Colour, Leuco = Larder' (leucoplasts store food). And 'Cis Comes In, Trans Takes Out' for the two faces of the Golgi.",
        },
      },
    ),
  ],
  [
    q("q1", "Who stated 'Omnis cellula-e cellula'?", ["Robert Hooke", "Theodor Schwann", "Matthias Schleiden", "Rudolf Virchow"], 3, "Rudolf Virchow (1855) explained that all cells arise from pre-existing cells."),
    q("q2", "Which of the following is NOT a part of the endomembrane system?", ["Golgi complex", "Mitochondrion", "Lysosome", "Endoplasmic reticulum"], 1, "Mitochondria (like chloroplasts and peroxisomes) function independently and are not part of the endomembrane system."),
    q("q3", "Prokaryotic ribosomes are of which type?", ["70S", "80S", "60S", "40S"], 0, "Prokaryotic ribosomes are 70S, made of 50S and 30S subunits."),
    q("q4", "The fluid mosaic model of the cell membrane was proposed by:", ["Watson and Crick", "Schleiden and Schwann", "Singer and Nicolson", "Robertson and Palade"], 2, "Singer and Nicolson proposed the fluid mosaic model in 1972."),
    q("q5", "Leucoplasts that store oils and fats are called:", ["Amyloplasts", "Aleuroplasts", "Chromoplasts", "Elaioplasts"], 3, "Elaioplasts store oils and fats; amyloplasts store starch and aleuroplasts store proteins."),
    q("q6", "Mesosomes in bacteria are formed by:", ["Infoldings of the plasma membrane", "Extensions of the cell wall", "Condensed DNA", "Clusters of ribosomes"], 0, "Mesosomes are infoldings of the plasma membrane that help in wall formation, DNA replication, respiration and secretion."),
  ],
);

const biology: Grade["subjects"][number] = {
  id: "biology",
  name: "Biology",
  icon: "leaf",
  color: "emerald",
  textbooks: [
    {
      id: "biology",
      title: "Biology — Textbook for Class XI",
      chapters: [
        ch(1, "the-living-world", "The Living World", "Explores what it means to be alive, the diversity of living organisms, and the taxonomic categories and tools used to classify them.", [
          tp("Diversity in the Living World", ["Characteristics of Living Organisms", "Nomenclature and Binomial System", "Classification"]),
          tp("Taxonomic Categories", ["Species", "Genus and Family", "Order, Class, Phylum and Kingdom"]),
        ]),
        ch(2, "biological-classification", "Biological Classification", "Describes the five kingdom classification of Whittaker along with viruses, viroids and lichens.", [
          tp("Kingdom Monera", ["Archaebacteria", "Eubacteria", "Mycoplasma"]),
          tp("Kingdom Protista and Kingdom Fungi", ["Chrysophytes, Dinoflagellates and Euglenoids", "Slime Moulds and Protozoans", "Classes of Fungi"]),
          tp("Kingdom Plantae and Kingdom Animalia", ["Features of Plantae", "Features of Animalia"]),
          tp("Viruses, Viroids, Prions and Lichens", ["Viruses", "Viroids and Prions", "Lichens"]),
        ]),
        ch(3, "plant-kingdom", "Plant Kingdom", "Classifies plants into algae, bryophytes, pteridophytes, gymnosperms and angiosperms, highlighting their key features.", [
          tp("Algae", ["Chlorophyceae", "Phaeophyceae", "Rhodophyceae"]),
          tp("Bryophytes and Pteridophytes", ["Liverworts and Mosses", "Features of Pteridophytes"]),
          tp("Gymnosperms and Angiosperms", ["Gymnosperms", "Angiosperms"]),
        ]),
        ch(4, "animal-kingdom", "Animal Kingdom", "Explains the basis of animal classification and the salient features of major non-chordate and chordate phyla.", [
          tp("Basis of Classification", ["Levels of Organisation and Symmetry", "Diploblastic and Triploblastic Organisation", "Coelom and Segmentation", "Notochord"]),
          tp("Classification of Animals: Non-chordates", ["Porifera to Platyhelminthes", "Aschelminthes to Arthropoda", "Mollusca, Echinodermata and Hemichordata"]),
          tp("Phylum Chordata", ["Cyclostomata and Pisces", "Amphibia and Reptilia", "Aves and Mammalia"]),
        ]),
        ch(5, "morphology-of-flowering-plants", "Morphology of Flowering Plants", "Describes the external structure of roots, stems, leaves, flowers, fruits and seeds, and how flowering plant families are described.", [
          tp("The Root, Stem and Leaf", ["The Root and its Modifications", "The Stem and its Modifications", "The Leaf: Venation and Phyllotaxy"]),
          tp("The Inflorescence and the Flower", ["Racemose and Cymose Inflorescence", "Parts of a Flower", "Aestivation and Placentation"]),
          tp("The Fruit and the Seed", ["The Fruit", "Structure of Dicot and Monocot Seeds"]),
          tp("Description of Some Important Families", ["Semi-technical Description of a Flowering Plant", "Fabaceae", "Solanaceae", "Liliaceae"]),
        ]),
        ch(6, "anatomy-of-flowering-plants", "Anatomy of Flowering Plants", "Studies the internal structure of plants, covering tissues, tissue systems and the anatomy of dicot and monocot organs.", [
          tp("The Tissues", ["Meristematic Tissues", "Simple Permanent Tissues", "Complex Permanent Tissues"]),
          tp("The Tissue System", ["Epidermal Tissue System", "Ground Tissue System", "Vascular Tissue System"]),
          tp("Anatomy of Dicotyledonous and Monocotyledonous Plants", ["Dicot and Monocot Root", "Dicot and Monocot Stem", "Dorsiventral and Isobilateral Leaf"]),
        ]),
        ch(7, "structural-organisation-in-animals", "Structural Organisation in Animals", "Introduces animal tissues and uses the frog to illustrate the morphology and anatomy of an organism.", [
          tp("Animal Tissues", ["Epithelial Tissue", "Connective Tissue", "Muscle Tissue", "Neural Tissue"]),
          tp("Frog", ["Morphology", "Anatomy"]),
        ]),
        cellUnitOfLife,
        ch(9, "biomolecules", "Biomolecules", "Examines the chemical composition of living tissues, including carbohydrates, proteins, lipids, nucleic acids and enzymes.", [
          tp("How to Analyse Chemical Composition", ["Primary and Secondary Metabolites", "Biomacromolecules"]),
          tp("Proteins and Polysaccharides", ["Structure of Proteins", "Polysaccharides", "Nucleic Acids"]),
          tp("Enzymes", ["Chemical Reactions and Enzyme Action", "Factors Affecting Enzyme Activity", "Classification and Co-factors"]),
        ]),
        ch(10, "cell-cycle-and-cell-division", "Cell Cycle and Cell Division", "Describes the phases of the cell cycle and the processes and significance of mitosis and meiosis.", [
          tp("Cell Cycle", ["Phases of Cell Cycle", "Interphase: G1, S and G2"]),
          tp("M Phase: Mitosis", ["Prophase and Metaphase", "Anaphase and Telophase", "Cytokinesis and Significance of Mitosis"]),
          tp("Meiosis", ["Meiosis I", "Meiosis II", "Significance of Meiosis"]),
        ]),
        ch(11, "photosynthesis-in-higher-plants", "Photosynthesis in Higher Plants", "Explains how plants convert light energy into chemical energy through light reactions, the Calvin cycle, and C4 pathways.", [
          tp("Early Experiments and Site of Photosynthesis", ["Early Experiments", "Where Does Photosynthesis Take Place?", "Pigments Involved in Photosynthesis"]),
          tp("Light Reaction", ["Electron Transport", "Splitting of Water", "Photophosphorylation and Chemiosmotic Hypothesis"]),
          tp("Biosynthetic Phase", ["The Calvin Cycle", "The C4 Pathway", "Photorespiration"]),
          tp("Factors Affecting Photosynthesis", ["Light", "Carbon Dioxide Concentration", "Temperature and Water"]),
        ]),
        ch(12, "respiration-in-plants", "Respiration in Plants", "Describes how plants break down food to release energy through glycolysis, fermentation and aerobic respiration.", [
          tp("Glycolysis and Fermentation", ["Do Plants Breathe?", "Glycolysis", "Fermentation"]),
          tp("Aerobic Respiration", ["Tricarboxylic Acid Cycle", "Electron Transport System and Oxidative Phosphorylation"]),
          tp("Respiratory Balance Sheet and Respiratory Quotient", ["The Respiratory Balance Sheet", "Amphibolic Pathway", "Respiratory Quotient"]),
        ]),
        ch(13, "plant-growth-and-development", "Plant Growth and Development", "Covers the phases and measurement of plant growth, differentiation, and the role of plant growth regulators.", [
          tp("Growth", ["Plant Growth is Generally Indeterminate", "Phases and Rates of Growth", "Conditions for Growth"]),
          tp("Differentiation, Dedifferentiation and Redifferentiation", ["Differentiation and Redifferentiation", "Development and Plasticity"]),
          tp("Plant Growth Regulators", ["Auxins and Gibberellins", "Cytokinins", "Ethylene and Abscisic Acid"]),
        ]),
        ch(14, "breathing-and-exchange-of-gases", "Breathing and Exchange of Gases", "Explains the human respiratory system, the mechanism of breathing, gas exchange and transport, and respiratory disorders.", [
          tp("Respiratory Organs", ["Human Respiratory System", "Mechanism of Breathing", "Respiratory Volumes and Capacities"]),
          tp("Exchange and Transport of Gases", ["Exchange of Gases", "Transport of Oxygen", "Transport of Carbon Dioxide"]),
          tp("Regulation of Respiration and Disorders", ["Regulation of Respiration", "Disorders of Respiratory System"]),
        ]),
        ch(15, "body-fluids-and-circulation", "Body Fluids and Circulation", "Describes blood, lymph, the human heart, the cardiac cycle, double circulation and disorders of the circulatory system.", [
          tp("Blood and Lymph", ["Plasma and Formed Elements", "Blood Groups", "Coagulation of Blood", "Lymph"]),
          tp("Human Circulatory System", ["Structure of the Heart", "Cardiac Cycle", "Electrocardiograph (ECG)"]),
          tp("Double Circulation and its Regulation", ["Double Circulation", "Regulation of Cardiac Activity", "Disorders of Circulatory System"]),
        ]),
        ch(16, "excretory-products-and-their-elimination", "Excretory Products and their Elimination", "Explains how the human excretory system forms urine and regulates body fluids, and the role of other excretory organs.", [
          tp("Human Excretory System", ["Modes of Excretion", "Structure of Kidney and Nephron"]),
          tp("Urine Formation", ["Glomerular Filtration", "Reabsorption and Secretion", "Mechanism of Concentration of Filtrate"]),
          tp("Regulation of Kidney Function and Disorders", ["Regulation of Kidney Function", "Micturition", "Role of Other Organs in Excretion", "Disorders of the Excretory System"]),
        ]),
        ch(17, "locomotion-and-movement", "Locomotion and Movement", "Covers types of movement, the structure and contraction of muscles, the human skeletal system, joints and their disorders.", [
          tp("Types of Movement and Muscle", ["Types of Movement", "Muscle", "Structure of Contractile Proteins", "Mechanism of Muscle Contraction"]),
          tp("Skeletal System and Joints", ["Axial Skeleton", "Appendicular Skeleton", "Joints"]),
          tp("Disorders of Muscular and Skeletal System", ["Myasthenia Gravis and Muscular Dystrophy", "Arthritis, Osteoporosis and Gout"]),
        ]),
        ch(18, "neural-control-and-coordination", "Neural Control and Coordination", "Explains the human neural system, generation and conduction of nerve impulses, synaptic transmission and the central nervous system.", [
          tp("Neural System", ["Human Neural System", "Neuron as Structural and Functional Unit"]),
          tp("Nerve Impulse", ["Generation and Conduction of Nerve Impulse", "Transmission of Impulses across Synapses"]),
          tp("Central Neural System", ["Forebrain", "Midbrain", "Hindbrain"]),
        ]),
        ch(19, "chemical-coordination-and-integration", "Chemical Coordination and Integration", "Describes the human endocrine glands, the hormones they secrete, and how hormones act on target cells.", [
          tp("Endocrine Glands and Hormones", ["Hypothalamus and Pituitary Gland", "Pineal, Thyroid and Parathyroid Glands", "Thymus and Adrenal Gland", "Pancreas and Gonads"]),
          tp("Hormones of Heart, Kidney and Gastrointestinal Tract", ["Atrial Natriuretic Factor and Erythropoietin", "Gastrointestinal Hormones"]),
          tp("Mechanism of Hormone Action", ["Hormone Receptors", "Membrane-bound and Intracellular Receptors"]),
        ]),
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* MATHEMATICS                                                         */
/* ------------------------------------------------------------------ */

const mathematics: Grade["subjects"][number] = {
  id: "mathematics",
  name: "Mathematics",
  icon: "calculator",
  color: "indigo",
  textbooks: [
    {
      id: "mathematics",
      title: "Mathematics — Textbook for Class XI",
      chapters: [
        ch(1, "sets", "Sets", "Introduces sets, their representations, types, subsets, Venn diagrams and operations on sets.", [
          tp("Sets and their Representations", ["Roster Form", "Set-builder Form", "Empty, Finite and Infinite Sets", "Equal Sets"]),
          tp("Subsets and Universal Set", ["Subsets", "Intervals as Subsets of R", "Universal Set", "Venn Diagrams"]),
          tp("Operations on Sets", ["Union and Intersection", "Difference of Sets", "Complement of a Set"]),
        ]),
        ch(2, "relations-and-functions", "Relations and Functions", "Builds the ideas of Cartesian products, relations and functions, along with common real functions and their algebra.", [
          tp("Cartesian Products of Sets", ["Ordered Pairs", "Cartesian Product"]),
          tp("Relations", ["Domain, Codomain and Range", "Representation of Relations"]),
          tp("Functions", ["Real Valued Functions", "Some Functions and their Graphs", "Algebra of Real Functions"]),
        ]),
        ch(3, "trigonometric-functions", "Trigonometric Functions", "Extends trigonometric ratios to trigonometric functions of any angle, measured in degrees and radians, and their identities.", [
          tp("Angles", ["Degree Measure", "Radian Measure", "Relation between Radian and Degree"]),
          tp("Trigonometric Functions of Real Numbers", ["Sign of Trigonometric Functions", "Domain and Range", "Graphs of Trigonometric Functions"]),
          tp("Trigonometric Functions of Sum and Difference of Two Angles", ["Sum and Difference Formulae", "Multiple and Sub-multiple Angle Formulae", "Product-to-Sum Formulae"]),
        ]),
        ch(4, "complex-numbers-and-quadratic-equations", "Complex Numbers and Quadratic Equations", "Introduces complex numbers, their algebra, modulus and conjugate, the Argand plane and quadratic equations with complex roots.", [
          tp("Complex Numbers", ["Imaginary Unit i", "Algebra of Complex Numbers", "Modulus and Conjugate"]),
          tp("Argand Plane and Polar Representation", ["Argand Plane", "Polar Form of a Complex Number"]),
          tp("Quadratic Equations", ["Roots with Negative Discriminant", "Solving Quadratics in Complex Numbers"]),
        ]),
        ch(5, "linear-inequalities", "Linear Inequalities", "Solves linear inequalities in one variable algebraically and represents their solutions on the number line.", [
          tp("Inequalities", ["Meaning of Inequalities", "Strict and Slack Inequalities"]),
          tp("Algebraic Solutions of Linear Inequalities in One Variable", ["Rules for Solving Inequalities", "Graphical Representation on the Number Line"]),
        ]),
        ch(6, "permutations-and-combinations", "Permutations and Combinations", "Develops counting techniques using the fundamental principle of counting, permutations and combinations.", [
          tp("Fundamental Principle of Counting", ["Multiplication Principle", "Addition Principle"]),
          tp("Permutations", ["Factorial Notation", "Derivation of the Formula for nPr", "Permutations when Objects are Not Distinct"]),
          tp("Combinations", ["Formula for nCr", "Relation between nPr and nCr", "Properties of Combinations"]),
        ]),
        ch(7, "binomial-theorem", "Binomial Theorem", "Develops the binomial theorem for positive integral indices using Pascal's triangle.", [
          tp("Binomial Theorem for Positive Integral Indices", ["Pascal's Triangle", "Statement of the Binomial Theorem", "Special Cases"]),
          tp("General and Middle Terms", ["General Term", "Middle Term"]),
        ]),
        ch(8, "sequences-and-series", "Sequences and Series", "Studies sequences and series, with a focus on arithmetic and geometric progressions and the relationship between AM and GM.", [
          tp("Sequences and Series", ["Sequences", "Series"]),
          tp("Geometric Progression", ["General Term of a GP", "Sum to n Terms of a GP", "Geometric Mean"]),
          tp("Relationship between AM and GM", ["Arithmetic Mean", "AM ≥ GM Inequality"]),
        ]),
        ch(9, "straight-lines", "Straight Lines", "Uses coordinate geometry to study the slope of a line, various forms of the equation of a line, and distance of a point from a line.", [
          tp("Slope of a Line", ["Slope and Inclination", "Conditions for Parallel and Perpendicular Lines", "Angle between Two Lines", "Collinearity of Three Points"]),
          tp("Various Forms of the Equation of a Line", ["Horizontal and Vertical Lines", "Point-slope Form", "Two-point and Slope-intercept Forms", "Intercept Form"]),
          tp("Distance of a Point from a Line", ["Perpendicular Distance", "Distance between Parallel Lines"]),
        ]),
        ch(10, "conic-sections", "Conic Sections", "Studies circles, parabolas, ellipses and hyperbolas as sections of a cone, along with their standard equations.", [
          tp("Sections of a Cone", ["Circle, Ellipse, Parabola and Hyperbola", "Degenerated Conic Sections"]),
          tp("Circle and Parabola", ["Standard Equation of a Circle", "Standard Equations of Parabola", "Latus Rectum"]),
          tp("Ellipse and Hyperbola", ["Standard Equations of Ellipse", "Eccentricity", "Standard Equations of Hyperbola"]),
        ]),
        ch(11, "introduction-to-three-dimensional-geometry", "Introduction to Three Dimensional Geometry", "Introduces coordinate axes and planes in space, coordinates of a point, and the distance formula in three dimensions.", [
          tp("Coordinate Axes and Coordinate Planes in Three Dimensional Space", ["Coordinate Axes", "Coordinate Planes and Octants"]),
          tp("Coordinates of a Point in Space", ["Representing a Point", "Signs in Octants"]),
          tp("Distance between Two Points", ["Distance Formula", "Applications"]),
        ]),
        ch(12, "limits-and-derivatives", "Limits and Derivatives", "Introduces the intuitive idea of limits, algebra of limits and derivatives, the foundation of calculus.", [
          tp("Limits", ["Intuitive Idea of Limits", "Algebra of Limits", "Limits of Polynomials and Rational Functions", "Limits of Trigonometric Functions"]),
          tp("Derivatives", ["Derivative at a Point", "Derivative from First Principles", "Algebra of Derivatives", "Derivatives of Polynomials and Trigonometric Functions"]),
        ]),
        ch(13, "statistics", "Statistics", "Measures the dispersion of data using range, mean deviation, variance and standard deviation.", [
          tp("Measures of Dispersion", ["Range", "Mean Deviation for Ungrouped Data", "Mean Deviation for Grouped Data"]),
          tp("Variance and Standard Deviation", ["Variance", "Standard Deviation", "Shortcut Method"]),
        ]),
        ch(14, "probability", "Probability", "Develops the axiomatic approach to probability using sample spaces and events.", [
          tp("Events", ["Occurrence of an Event", "Types of Events", "Algebra of Events", "Mutually Exclusive and Exhaustive Events"]),
          tp("Axiomatic Approach to Probability", ["Probability of an Event", "Equally Likely Outcomes", "Probability of 'A or B' and 'not A'"]),
        ]),
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* ECONOMICS                                                           */
/* ------------------------------------------------------------------ */

const economics: Grade["subjects"][number] = {
  id: "economics",
  name: "Economics",
  icon: "trending",
  color: "orange",
  textbooks: [
    {
      id: "statistics-for-economics",
      title: "Statistics for Economics — Textbook for Class XI",
      chapters: [
        ch(1, "introduction", "Introduction", "Explains why economics needs statistics and introduces basic economic activities of consumption, production and distribution.", [
          tp("Why Economics?", ["Consumer, Producer and Service-holder", "Scarcity and Choice"]),
          tp("Consumption, Production and Distribution", ["Consumption", "Production", "Distribution"]),
          tp("Statistics in Economics", ["Meaning of Statistics", "What Statistics Does"]),
        ]),
        ch(2, "collection-of-data", "Collection of Data", "Covers sources of data, methods of collecting primary data, census and sample surveys, and major Indian data agencies.", [
          tp("Sources of Data", ["Primary Data", "Secondary Data"]),
          tp("Collection of Data", ["Preparation of Instrument", "Mode of Data Collection", "Pilot Survey"]),
          tp("Census and Sample Surveys", ["Census or Complete Enumeration", "Sampling Methods", "Sampling and Non-sampling Errors"]),
          tp("Census of India and NSSO", ["Census of India", "National Sample Survey"]),
        ]),
        ch(3, "organisation-of-data", "Organisation of Data", "Explains how raw data is classified and organised into frequency distributions.", [
          tp("Raw Data and Classification", ["Raw Data", "Chronological, Spatial, Qualitative and Quantitative Classification"]),
          tp("Variables", ["Continuous and Discrete Variables"]),
          tp("Frequency Distribution", ["Class Limits and Class Intervals", "Frequency Array", "Bivariate Frequency Distribution"]),
        ]),
        ch(4, "presentation-of-data", "Presentation of Data", "Describes textual, tabular and diagrammatic ways of presenting data, including bar diagrams, pie charts and histograms.", [
          tp("Textual and Tabular Presentation", ["Textual Presentation", "Tabular Presentation", "Parts of a Table"]),
          tp("Diagrammatic Presentation", ["Bar Diagrams", "Pie Diagrams", "Frequency Diagrams: Histogram, Polygon and Ogive", "Arithmetic Line Graphs"]),
        ]),
        ch(5, "measures-of-central-tendency", "Measures of Central Tendency", "Explains how to summarise data with a single representative value using the arithmetic mean, median and mode.", [
          tp("Arithmetic Mean", ["Simple Arithmetic Mean", "Weighted Arithmetic Mean"]),
          tp("Median", ["Computation of Median", "Quartiles and Percentiles"]),
          tp("Mode", ["Computation of Mode", "Relative Position of Mean, Median and Mode"]),
        ]),
        ch(6, "correlation", "Correlation", "Studies the relationship between two variables using scatter diagrams, Karl Pearson's coefficient and Spearman's rank correlation.", [
          tp("Types of Relationship", ["Positive and Negative Correlation", "Correlation and Causation"]),
          tp("Techniques for Measuring Correlation", ["Scatter Diagram", "Karl Pearson's Coefficient of Correlation", "Spearman's Rank Correlation"]),
        ]),
        ch(7, "index-numbers", "Index Numbers", "Explains how index numbers measure changes in prices and quantities, including CPI, WPI and the index of industrial production.", [
          tp("Construction of an Index Number", ["Simple Aggregative Method", "Method of Weighted Aggregates", "Laspeyres and Paasche Price Indices"]),
          tp("Some Important Index Numbers", ["Consumer Price Index", "Wholesale Price Index", "Index of Industrial Production", "Sensex"]),
          tp("Issues and Uses of Index Numbers", ["Issues in Construction", "Index Numbers in Economics"]),
        ]),
        ch(8, "use-of-statistical-tools", "Use of Statistical Tools", "Guides students through planning and carrying out a statistical project, from identifying a problem to presenting conclusions.", [
          tp("Developing a Project", ["Identifying a Problem", "Choice of Target Group", "Collection of Data"]),
          tp("Analysis and Presentation", ["Organisation and Presentation of Data", "Analysis and Interpretation", "Conclusion and Bibliography"]),
        ]),
      ],
    },
    {
      id: "indian-economic-development",
      title: "Indian Economic Development — Textbook for Class XI",
      chapters: [
        ch(1, "indian-economy-on-the-eve-of-independence", "Indian Economy on the Eve of Independence", "Describes the state of India's agriculture, industry, trade and demography at the end of nearly two centuries of British rule.", [
          tp("Low Level of Economic Development", ["Colonial Economic Policies", "Agricultural Sector"]),
          tp("Industrial Sector and Foreign Trade", ["Decline of Handicrafts", "Pattern of Foreign Trade"]),
          tp("Demographic Condition and Infrastructure", ["Demographic Condition", "Occupational Structure", "Infrastructure"]),
        ]),
        ch(2, "indian-economy-1950-1990", "Indian Economy 1950–1990", "Examines India's planning era, its goals, and the policies adopted for agriculture, industry and trade between 1950 and 1990.", [
          tp("Goals of Five Year Plans", ["Growth", "Modernisation", "Self-reliance", "Equity"]),
          tp("Agriculture", ["Land Reforms", "Green Revolution", "The Subsidy Debate"]),
          tp("Industry and Trade", ["Public and Private Sectors", "Industrial Policy Resolution 1956", "Small-scale Industry", "Import Substitution"]),
        ]),
        ch(3, "liberalisation-privatisation-and-globalisation-an-appraisal", "Liberalisation, Privatisation and Globalisation: An Appraisal", "Explains the 1991 economic crisis and the reforms of liberalisation, privatisation and globalisation that followed, with an appraisal of their effects.", [
          tp("Background of the 1991 Reforms", ["The Balance of Payments Crisis", "Stabilisation and Structural Reform"]),
          tp("Liberalisation, Privatisation and Globalisation", ["Deregulation of Industry and Financial Sector", "Tax, Foreign Exchange and Trade Reforms", "Privatisation and Disinvestment", "Outsourcing and the WTO"]),
          tp("Indian Economy during Reforms: An Assessment", ["Growth and Employment", "Reforms in Agriculture and Industry", "Disinvestment and Fiscal Policies"]),
        ]),
        ch(4, "human-capital-formation-in-india", "Human Capital Formation in India", "Explains human capital, its sources such as education and health, its role in growth, and the state of education in India.", [
          tp("What is Human Capital?", ["Sources of Human Capital", "Human Capital and Economic Growth"]),
          tp("Human Capital and Human Development", ["Human Capital vs Human Development", "State of Human Capital Formation in India"]),
          tp("Education Sector in India", ["Growth in Government Expenditure on Education", "Educational Achievements", "Future Prospects"]),
        ]),
        ch(5, "rural-development", "Rural Development", "Discusses the key issues of rural India — credit, marketing, diversification and organic farming — and approaches to rural development.", [
          tp("Rural Credit and Marketing", ["Credit and Marketing in Rural Areas", "Agricultural Market System"]),
          tp("Diversification into Productive Activities", ["Animal Husbandry", "Fisheries", "Horticulture"]),
          tp("Sustainable Development and Organic Farming", ["Benefits of Organic Farming", "Challenges of Organic Farming"]),
        ]),
        ch(6, "employment-growth-informalisation-and-other-issues", "Employment: Growth, Informalisation and Other Issues", "Examines workers and employment in India, participation rates, the formal and informal sectors, and unemployment.", [
          tp("Workers and Employment", ["Participation of People in Employment", "Self-employed and Hired Workers"]),
          tp("Employment in Firms, Factories and Offices", ["Growth and Changing Structure of Employment", "Informalisation of Indian Workforce"]),
          tp("Unemployment", ["Types of Unemployment", "Government and Employment Generation"]),
        ]),
        ch(7, "environment-and-sustainable-development", "Environment and Sustainable Development", "Explores the functions of the environment, India's environmental challenges, and strategies for sustainable development.", [
          tp("Environment: Definition and Functions", ["Functions of the Environment", "Global Warming and Ozone Depletion"]),
          tp("State of India's Environment", ["Land Degradation", "Air Pollution"]),
          tp("Sustainable Development", ["Meaning of Sustainable Development", "Strategies for Sustainable Development"]),
        ]),
        ch(8, "comparative-development-experiences-of-india-and-its-neighbours", "Comparative Development Experiences of India and its Neighbours", "Compares the development paths and indicators of India, China and Pakistan.", [
          tp("Developmental Path: A Snapshot View", ["India", "China", "Pakistan"]),
          tp("Comparative Study of India, China and Pakistan", ["Demographic Indicators", "Gross Domestic Product and Sectors", "Indicators of Human Development"]),
          tp("Development Strategies: An Appraisal", ["Reforms in China", "Reforms in Pakistan"]),
        ]),
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* POLITICAL SCIENCE                                                   */
/* ------------------------------------------------------------------ */

const constitutionWhyAndHow = ch(
  1,
  "constitution-why-and-how",
  "Constitution: Why and How?",
  "Explains why a society needs a constitution, what gives a constitution its authority, and how India's Constitution was made by the Constituent Assembly.",
  [
    tp(
      "Why Do We Need a Constitution?",
      ["Coordination and Assurance", "Specification of Decision-making Powers", "Limitations on the Powers of Government", "Aspirations and Goals of a Society"],
      {
        intro:
          "A constitution is a set of fundamental rules that allows people to live together in a society while respecting their differences. It tells us who has power, how that power is limited, and what kind of society we hope to build. In a sense, it is the rulebook that every other law must follow.",
        sections: [
          {
            heading: "Coordination and Assurance",
            body: "The first function of a constitution is to provide a set of basic rules that allow for minimal coordination among members of a society. People who live together have many differences — of religion, language, class and opinion. Without rules everyone trusts, no one would feel secure. The constitution gives this basic assurance that everyone is bound by the same enforceable rules.",
          },
          {
            heading: "Who Decides, and Limits on Power",
            body: "A constitution specifies who has the power to make decisions in a society and how the government will be constituted. In India, laws are made by Parliament, and Parliament itself is organised according to the Constitution. Equally important, a constitution sets **limits** on what a government can impose on its citizens. Fundamental Rights, such as freedom of speech and protection from arbitrary arrest, are limits that no government can simply cross.",
          },
          {
            heading: "Aspirations and Fundamental Identity",
            body: "A constitution also enables the government to fulfil the aspirations of a society and create conditions for a just society. The Indian Constitution, through the Directive Principles of State Policy, commits the state to reducing inequality and securing social welfare. Finally, a constitution expresses the fundamental identity of a people — through it, 'We, the People of India' come together as a collective political entity.",
          },
        ],
        definitions: [
          { term: "Constitution", meaning: "A body of fundamental principles and rules according to which a state is constituted and governed." },
          { term: "Fundamental Rights", meaning: "Basic rights guaranteed by the Constitution that limit the power of the government and protect citizens." },
          { term: "Directive Principles of State Policy", meaning: "Guidelines in the Constitution that the state should follow to promote social and economic welfare; they are not enforceable in courts." },
          { term: "Sovereignty", meaning: "The supreme authority of a state to govern itself without outside control." },
        ],
        dates: [
          { date: "26 November 1949", event: "The Constituent Assembly adopts the Constitution of India." },
          { date: "26 January 1950", event: "The Constitution comes into force; India becomes a republic." },
        ],
        keyPoints: [
          "A constitution provides basic rules for coordination and mutual assurance.",
          "It specifies who has the power to make decisions.",
          "It places limits on government power, chiefly through fundamental rights.",
          "It enables the government to fulfil a society's aspirations for justice.",
          "It gives a people their fundamental political identity.",
        ],
        explainers: {
          eli10:
            "Imagine your class wants to play cricket in the park. Before starting, everyone agrees on the rules — who bats first, what counts as out, and that nobody can change the rules just because they are losing. A constitution is exactly that agreement, but for a whole country. It says who is the captain (the government), what the captain can and cannot do, and what kind of game everyone wants to play together.",
          realWorld:
            "Think of the rules of a housing society in Bengaluru. They say who the secretary is, how the committee is elected, and what it can decide — like maintenance charges — but it cannot, for example, stop a family from practising its religion at home. India's Constitution works the same way on a national scale. When the Supreme Court strikes down a law for violating fundamental rights, it is enforcing the Constitution's limits on government power.",
          mnemonic:
            "Remember the five functions with 'CLAIM': Coordination and assurance, Limits on power, Aspirations of society, Identity of a people, and who Makes decisions. Every constitution you study will do these five things.",
        },
      },
    ),
    tp(
      "The Authority of a Constitution",
      ["Mode of Promulgation", "Substantive Provisions", "Balanced Institutional Design"],
      {
        intro:
          "Having a written document is not enough — a constitution must actually be respected. Some constitutions become mere paper, while others shape real political life for decades. What makes the difference is how the constitution was made, what it says, and how well it balances power.",
        sections: [
          {
            heading: "Mode of Promulgation",
            body: "Promulgation refers to how a constitution comes into being — who made it and how much authority they had. Constitutions imposed by military rulers or unpopular leaders often lack legitimacy. India's Constitution was drafted by the Constituent Assembly, whose members commanded great public respect, and it drew on the legitimacy of the national movement. Because people broadly accepted its makers, the Constitution too gained authority.",
          },
          {
            heading: "Substantive Provisions",
            body: "A successful constitution gives everyone in society some reason to go along with it. It protects the freedom and equality of all citizens so that no group feels permanently excluded. It also allows people to pursue their goals and gives even minorities a fair chance. The more a constitution preserves everyone's freedom and dignity, the more likely it is to succeed.",
          },
          {
            heading: "Balanced Institutional Design",
            body: "A well-designed constitution does not let any single institution or group monopolise power. It fragments power among the legislature, executive and judiciary, and independent bodies like the Election Commission. It must also strike a balance between sacred values that should not change easily and flexibility to adapt to new circumstances. The Indian Constitution is described as a **living document** because it is both stable and open to amendment.",
          },
        ],
        definitions: [
          { term: "Promulgation", meaning: "The formal process by which a constitution is made and brought into force." },
          { term: "Legitimacy", meaning: "The acceptance by people that an authority or law is rightful and deserves to be obeyed." },
          { term: "Separation of powers", meaning: "Distribution of state power among the legislature, executive and judiciary so that no organ becomes all-powerful." },
          { term: "Amendment", meaning: "A formal change made to the text of a constitution through a prescribed procedure." },
        ],
        keyPoints: [
          "A constitution's authority depends on its mode of promulgation.",
          "Its substantive provisions must give every group a reason to accept it.",
          "Power must be fragmented among different institutions.",
          "A good constitution balances fixed core values with flexibility to change.",
          "India's Constitution derives authority from the Constituent Assembly and the freedom struggle.",
        ],
        explainers: {
          eli10:
            "Would you follow class rules if the class bully wrote them just to benefit himself? Probably not! But if the whole class and a respected teacher made the rules together, and the rules were fair to everyone, you'd happily follow them. That's why the way a constitution is made, and whether it's fair, decides whether people actually respect it.",
          realWorld:
            "In India, no Prime Minister can simply ignore the Supreme Court, and the Election Commission can conduct polls even against the wishes of the ruling party. This spreading out of power is balanced institutional design at work. Compare this with countries where a single ruler rewrote the constitution to extend their term — such constitutions often lose public trust quickly.",
          mnemonic:
            "Think 'MSB' like a strong 'Mobile Signal Bar': Mode of promulgation, Substantive provisions, Balanced institutional design. All three bars must be full for a constitution to have real authority.",
        },
      },
    ),
    tp(
      "How was the Indian Constitution Made?",
      ["Composition of the Constituent Assembly", "Procedures and Principle of Deliberation", "Inheritance of the Nationalist Movement", "Provisions Adapted from Other Constitutions"],
      {
        intro:
          "India's Constitution was drafted by the Constituent Assembly, which met for the first time in December 1946. Over nearly three years, its members debated every provision in detail. The result drew on India's freedom struggle and on the best features of constitutions from around the world.",
        sections: [
          {
            heading: "The Constituent Assembly",
            body: "Members of the Constituent Assembly were elected indirectly by the members of the provincial legislative assemblies, following the Cabinet Mission Plan of 1946. Seats were allotted roughly in proportion to population, and princely states nominated their representatives. After Partition, the Assembly had 299 members as of 31 December 1947. It included people from diverse regions, religions and social groups, and Dr Rajendra Prasad was its President.",
          },
          {
            heading: "Deliberation and Procedures",
            body: "The Assembly worked through eight major committees, usually chaired by leaders such as Jawaharlal Nehru, Sardar Patel, Maulana Azad and Dr B.R. Ambedkar. Dr Ambedkar chaired the Drafting Committee and is called the chief architect of the Constitution. The Assembly sat for 166 days spread over 2 years, 11 months and 18 days. Decisions were made through open debate and reasoned argument, aiming for consensus rather than simply majority votes.",
          },
          {
            heading: "Nationalist Legacy and Borrowed Provisions",
            body: "The Assembly gave concrete shape to the vision of the national movement, summed up in Nehru's **Objectives Resolution** of 13 December 1946 — a commitment to liberty, equality, democracy, sovereignty and justice. The makers also borrowed thoughtfully from other democracies: from Britain, the first-past-the-post system, parliamentary government and the rule of law; from the USA, a charter of fundamental rights, judicial review and independence of the judiciary; from Ireland, the Directive Principles; from France, liberty, equality and fraternity; and from Canada, a quasi-federal government with a strong centre and residual powers with the centre.",
          },
        ],
        definitions: [
          { term: "Constituent Assembly", meaning: "The body of elected representatives that drafted the Constitution of India." },
          { term: "Objectives Resolution", meaning: "The resolution moved by Nehru in 1946 that set out the aims and ideals of the Constitution; it was the basis of the Preamble." },
          { term: "Drafting Committee", meaning: "The committee, chaired by Dr B.R. Ambedkar, that prepared the draft text of the Constitution." },
          { term: "Cabinet Mission Plan", meaning: "The 1946 British plan that set out how the Constituent Assembly would be composed." },
        ],
        dates: [
          { date: "1946", event: "Constituent Assembly formed under the Cabinet Mission Plan through indirect elections." },
          { date: "9 December 1946", event: "First meeting of the Constituent Assembly." },
          { date: "11 December 1946", event: "Dr Rajendra Prasad elected President of the Constituent Assembly." },
          { date: "13 December 1946", event: "Jawaharlal Nehru moves the Objectives Resolution." },
          { date: "22 January 1947", event: "The Objectives Resolution is adopted." },
          { date: "29 August 1947", event: "Drafting Committee set up with Dr B.R. Ambedkar as Chairman." },
          { date: "26 November 1949", event: "The Constitution is adopted by the Constituent Assembly." },
          { date: "26 January 1950", event: "The Constitution comes into force." },
        ],
        keyPoints: [
          "Members were indirectly elected by provincial assemblies under the Cabinet Mission Plan (1946).",
          "After Partition, the Assembly had 299 members; Dr Rajendra Prasad was its President.",
          "Dr B.R. Ambedkar chaired the Drafting Committee.",
          "The Assembly met for 166 days over 2 years, 11 months and 18 days.",
          "Nehru's Objectives Resolution became the basis of the Preamble.",
          "Provisions were adapted from British, US, Irish, French and Canadian constitutions.",
        ],
        explainers: {
          eli10:
            "Imagine about 300 of the wisest grown-ups from all over India sitting in one big hall for almost three years, arguing politely about every single rule for the country. They listened to farmers, workers, women and people of all religions through their representatives. They also looked at rulebooks from other countries and picked the best ideas. Finally, they wrote the longest written constitution in the world — our Constitution!",
          realWorld:
            "Every year on 26 January, we celebrate Republic Day with the parade on Kartavya Path, marking the day our Constitution came into force in 1950. Since 2015, 26 November is also observed as Constitution Day (Samvidhan Divas), when schools read out the Preamble. The way you vote in elections — whoever gets the most votes wins — comes from the British first-past-the-post system the Assembly borrowed.",
          mnemonic:
            "Borrowed features — 'BUFIC': Britain (parliamentary system, FPTP, rule of law), USA (fundamental rights, judicial review), France (liberty, equality, fraternity), Ireland (Directive Principles), Canada (strong centre, residual powers). For dates, remember '9-11-13' — the Assembly met on 9 December, elected Rajendra Prasad on the 11th, and heard the Objectives Resolution on the 13th of December 1946.",
        },
      },
    ),
  ],
  [
    q("q1", "Who was the chairman of the Drafting Committee of the Indian Constitution?", ["Dr Rajendra Prasad", "Jawaharlal Nehru", "Dr B.R. Ambedkar", "Sardar Vallabhbhai Patel"], 2, "Dr B.R. Ambedkar chaired the Drafting Committee and is called the chief architect of the Constitution."),
    q("q2", "The Constituent Assembly was formed according to which plan?", ["Cabinet Mission Plan", "Mountbatten Plan", "Cripps Mission", "Wavell Plan"], 0, "The Cabinet Mission Plan of 1946 laid down the composition of the Constituent Assembly."),
    q("q3", "The idea of Directive Principles of State Policy was adapted from the constitution of:", ["USA", "France", "Canada", "Ireland"], 3, "The Directive Principles were adapted from the Irish Constitution."),
    q("q4", "Which is NOT a function of a constitution?", ["Specifying who has decision-making power", "Guaranteeing that one party stays in power", "Limiting the powers of government", "Expressing the aspirations of a society"], 1, "A constitution distributes and limits power; it does not guarantee power to any party."),
    q("q5", "When did the Constitution of India come into force?", ["15 August 1947", "26 November 1949", "26 January 1950", "9 December 1946"], 2, "It was adopted on 26 November 1949 and came into force on 26 January 1950."),
    q("q6", "Members of the Constituent Assembly were:", ["Elected indirectly by provincial legislative assemblies", "Elected directly by adult franchise", "All nominated by the British Crown", "Chosen by the Indian National Congress alone"], 0, "They were elected indirectly by members of provincial assemblies; princely states nominated their representatives."),
  ],
);

const politicalScience: Grade["subjects"][number] = {
  id: "political-science",
  name: "Political Science",
  icon: "landmark",
  color: "rose",
  textbooks: [
    {
      id: "indian-constitution-at-work",
      title: "Indian Constitution at Work — Textbook for Class XI",
      chapters: [
        constitutionWhyAndHow,
        ch(2, "rights-in-the-indian-constitution", "Rights in the Indian Constitution", "Examines the Fundamental Rights, their protection through constitutional remedies, the Directive Principles and Fundamental Duties.", [
          tp("The Importance of Rights", ["Bill of Rights", "Rights in the Indian Constitution"]),
          tp("Fundamental Rights", ["Right to Equality", "Right to Freedom", "Right against Exploitation", "Right to Freedom of Religion and Cultural and Educational Rights"]),
          tp("Right to Constitutional Remedies", ["Writs", "Role of Courts and Human Rights Commissions"]),
          tp("Directive Principles of State Policy", ["Goals and Policies", "Fundamental Duties", "Relationship between Rights and Directive Principles"]),
        ]),
        ch(3, "election-and-representation", "Election and Representation", "Explains elections in a democracy, India's first-past-the-post system, reserved constituencies, universal franchise and the Election Commission.", [
          tp("Elections and Democracy", ["Direct and Indirect Democracy", "Election System in India"]),
          tp("First Past the Post and Proportional Representation", ["First Past the Post System", "Proportional Representation", "Why India Adopted FPTP"]),
          tp("Reservation of Constituencies and Free and Fair Elections", ["Reserved Constituencies", "Universal Franchise and Right to Contest", "Independent Election Commission", "Electoral Reforms"]),
        ]),
        ch(4, "executive", "Executive", "Describes the executive in India, contrasting parliamentary and presidential systems, and the roles of the President, Prime Minister, Council of Ministers and bureaucracy.", [
          tp("What is an Executive?", ["Types of Executive", "Parliamentary Executive in India"]),
          tp("Powers and Position of the President", ["Discretionary Powers of the President", "The Vice-President"]),
          tp("Prime Minister and Council of Ministers", ["Role of the Prime Minister", "Council of Ministers and Collective Responsibility"]),
          tp("Permanent Executive: Bureaucracy", ["All India Services", "Role of Bureaucracy"]),
        ]),
        ch(5, "legislature", "Legislature", "Explains the structure and functions of Parliament, law-making procedures, and how Parliament controls the executive.", [
          tp("Why Do We Need a Parliament?", ["Why Two Houses?", "Rajya Sabha", "Lok Sabha"]),
          tp("Functions and Powers of Parliament", ["Legislative and Financial Functions", "Powers of the Rajya Sabha", "Special Powers of Each House"]),
          tp("How Does Parliament Make Laws?", ["Stages of a Bill", "Money Bills and Joint Sittings"]),
          tp("How Does Parliament Control the Executive?", ["Deliberation and Discussion", "Control over Finance and No-confidence Motion", "Parliamentary Committees and Anti-defection Law"]),
        ]),
        ch(6, "judiciary", "Judiciary", "Describes the independence, structure and jurisdiction of India's judiciary, judicial activism and judicial review.", [
          tp("Independence of Judiciary", ["Why Do We Need an Independent Judiciary?", "Appointment and Removal of Judges"]),
          tp("Structure and Jurisdiction of the Supreme Court", ["Structure of the Judiciary", "Original, Writ and Appellate Jurisdiction", "Advisory Jurisdiction"]),
          tp("Judicial Activism and Judicial Review", ["Public Interest Litigation", "Judicial Review", "Judiciary and Parliament"]),
        ]),
        ch(7, "federalism", "Federalism", "Explains federalism, the Indian model with a strong central government, conflicts in centre-state relations, and special provisions for some states.", [
          tp("What is Federalism?", ["Key Features of Federalism", "Federalism in the Indian Constitution"]),
          tp("Federalism with a Strong Central Government", ["Division of Powers", "Unitary Features"]),
          tp("Conflicts in India's Federal System", ["Centre-State Relations", "Demands for Autonomy", "Role of Governors and President's Rule", "Interstate Conflicts"]),
          tp("Special Provisions", ["Special Provisions for Certain States", "Jammu and Kashmir"]),
        ]),
        ch(8, "local-governments", "Local Governments", "Traces the growth of local government in India and the 73rd and 74th Amendments that created Panchayati Raj and urban local bodies.", [
          tp("Why Local Governments?", ["Importance of Local Government", "Growth of Local Government in India"]),
          tp("73rd and 74th Amendments", ["Three-tier Structure", "Elections and Reservations", "State Election Commissioners and Finance Commissions", "74th Amendment and Urban Local Bodies"]),
          tp("Implementation of the Amendments", ["Transfer of Subjects", "Financial Dependence"]),
        ]),
        ch(9, "constitution-as-a-living-document", "Constitution as a Living Document", "Explains how the Constitution has evolved through amendments and judicial interpretation while keeping its basic structure intact.", [
          tp("Are Constitutions Static?", ["How to Amend the Constitution", "Special Majority and Ratification by States"]),
          tp("Why Have There Been So Many Amendments?", ["Differing Interpretations", "Amendments through Political Consensus", "Controversial Amendments"]),
          tp("Basic Structure and Evolution of the Constitution", ["Basic Structure Doctrine", "Constitution as a Living Document"]),
        ]),
        ch(10, "the-philosophy-of-the-constitution", "The Philosophy of the Constitution", "Examines the political philosophy and core values embedded in the Indian Constitution and some criticisms of it.", [
          tp("What is Meant by the Philosophy of the Constitution?", ["Constitution as a Means of Democratic Transformation", "Why Look at the Constituent Assembly Debates?"]),
          tp("Political Philosophy of Our Constitution", ["Individual Freedom and Social Justice", "Respect for Diversity and Minority Rights", "Secularism", "Universal Franchise and Federalism"]),
          tp("Procedural Achievements and Criticisms", ["Procedural Achievements", "Criticisms and Limitations"]),
        ]),
      ],
    },
    {
      id: "political-theory",
      title: "Political Theory — Textbook for Class XI",
      chapters: [
        ch(1, "political-theory-an-introduction", "Political Theory: An Introduction", "Introduces politics and political theory, and why studying ideas like freedom, equality and justice matters.", [
          tp("What is Politics?", ["Understanding Politics", "Politics in Everyday Life"]),
          tp("What Do We Study in Political Theory?", ["Ideas and Principles", "Putting Political Theory into Practice"]),
          tp("Why Should We Study Political Theory?", ["Relevance for Citizens", "Reasoning about Political Ideas"]),
        ]),
        ch(2, "freedom", "Freedom", "Explores the meaning of freedom, the sources of constraints, the harm principle, and negative and positive liberty.", [
          tp("The Ideal of Freedom", ["What is Freedom?", "The Sources of Constraints"]),
          tp("Why Do We Need Constraints?", ["Harm Principle", "Negative and Positive Liberty"]),
          tp("Freedom of Expression", ["Importance of Free Expression", "Limits on Expression"]),
        ]),
        ch(3, "equality", "Equality", "Examines why equality matters, its political, social and economic dimensions, and ways of promoting equality.", [
          tp("Why Does Equality Matter?", ["Equality of Opportunities", "Natural and Social Inequalities"]),
          tp("Three Dimensions of Equality", ["Political Equality", "Social Equality", "Economic Equality"]),
          tp("How Can We Promote Equality?", ["Establishing Formal Equality", "Equality through Differential Treatment", "Affirmative Action"]),
        ]),
        ch(4, "social-justice", "Social Justice", "Discusses the meaning of justice, Rawls' theory of fair distribution, and the pursuit of social justice.", [
          tp("What is Justice?", ["Equal Treatment for Equals", "Proportionate Justice", "Recognition of Special Needs"]),
          tp("Just Distribution", ["Distributive Justice", "John Rawls' Theory of Justice", "Veil of Ignorance"]),
          tp("Pursuing Social Justice", ["Free Markets versus State Intervention", "Meeting Basic Needs"]),
        ]),
        ch(5, "rights", "Rights", "Explains what rights are, where they come from, legal rights, kinds of rights, and the responsibilities they entail.", [
          tp("What are Rights?", ["Rights as Justified Claims", "Where Do Rights Come From?"]),
          tp("Legal Rights and the State", ["Legal Rights", "Kinds of Rights: Political, Economic and Cultural"]),
          tp("Rights and Responsibilities", ["Duties Linked to Rights", "Balancing Rights"]),
        ]),
        ch(6, "citizenship", "Citizenship", "Discusses citizenship as full and equal membership, equal rights, citizens and nations, and the idea of universal citizenship.", [
          tp("Full and Equal Membership", ["Meaning of Citizenship", "Struggles for Equal Rights"]),
          tp("Equal Rights and Citizenship", ["Citizen and Nation", "Universal Citizenship"]),
          tp("Global Citizenship", ["Idea of Global Citizenship", "Refugees and Stateless People"]),
        ]),
        ch(7, "nationalism", "Nationalism", "Explores the meaning of nations and nationalism, national self-determination, and nationalism and pluralism.", [
          tp("Introducing Nationalism", ["Phases of Nationalism", "Nations and Nationalism"]),
          tp("National Self-determination", ["Right to Self-determination", "Nation-states"]),
          tp("Nationalism and Pluralism", ["Accommodating Diversity", "Group Rights"]),
        ]),
        ch(8, "secularism", "Secularism", "Examines the meaning of secularism, the Western and Indian models, and criticisms of Indian secularism.", [
          tp("What is Secularism?", ["Inter-religious Domination", "Intra-religious Domination", "Secular State"]),
          tp("The Western Model of Secularism", ["Mutual Exclusion of State and Religion"]),
          tp("The Indian Model of Secularism", ["Principled Distance", "Criticisms of Indian Secularism"]),
        ]),
      ],
    },
  ],
};

export const class11: Grade = {
  id: "11",
  label: "Class 11",
  subjects: [physics, chemistry, biology, mathematics, economics, politicalScience],
};

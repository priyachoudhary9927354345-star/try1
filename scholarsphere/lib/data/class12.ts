import type {
  Chapter,
  Grade,
  QuizQuestion,
  Subtopic,
  Topic,
  TopicContent,
} from "../types";

/*
 * Class 12 — CBSE / NCERT rationalised textbooks (2023-24 onward).
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

const electricChargesAndFields = ch(
  1,
  "electric-charges-and-fields",
  "Electric Charges and Fields",
  "Introduces electric charge and its properties, Coulomb's law, electric fields and dipoles, and Gauss's law with its applications.",
  [
    tp(
      "Electric Charge and its Properties",
      ["Conductors and Insulators", "Charging by Induction", "Basic Properties of Electric Charge"],
      {
        intro:
          "Around 600 BC, Thales of Miletus noticed that amber rubbed with wool attracts light objects like bits of straw. Today we know this happens because rubbing transfers electrons, leaving objects electrically charged. Electric charge is a basic property of matter, just like mass.",
        sections: [
          {
            heading: "Two Kinds of Charge",
            body: "There are two kinds of electric charge, named positive and negative by Benjamin Franklin. Like charges repel and unlike charges attract. When a glass rod is rubbed with silk, the rod becomes positive and the silk negative, because electrons move from glass to silk. Charge is measured in coulomb (C): 1 C is the charge flowing through a wire in 1 s when the current is 1 A.",
          },
          {
            heading: "Conductors, Insulators and Induction",
            body: "Conductors like metals, the human body and the earth allow charge to move freely because they have free electrons. Insulators like glass, plastic and nylon do not, so charge stays where it is placed. Connecting a charged body to the earth to neutralise it is called **earthing** or grounding. In charging by induction, a charged rod brought near a conductor rearranges its charges; earthing the far side and then removing the rod leaves the conductor with a charge opposite to the rod's — without the rod ever touching it.",
          },
          {
            heading: "Additivity, Conservation and Quantisation",
            body: "Charges are scalars and add up algebraically, taking signs into account: a system with +1, +2, −3 and +4 units has a total charge of +4. The total charge of an isolated system is conserved — charge can be transferred but never created or destroyed. Charge is also quantised: any charge is an integral multiple of the basic charge e = 1.602 × 10⁻¹⁹ C, so q = ne. At the large scale, e is so tiny that charge appears continuous.",
          },
        ],
        definitions: [
          { term: "Electric charge", meaning: "An intrinsic property of matter due to which it experiences electric forces; it can be positive or negative." },
          { term: "Conductor", meaning: "A substance that allows electric charge to move freely through it, such as a metal." },
          { term: "Insulator", meaning: "A substance that offers high resistance to the flow of charge, such as glass or plastic." },
          { term: "Charging by induction", meaning: "Charging a conductor without contact, by bringing a charged body near it and earthing it." },
          { term: "Quantisation of charge", meaning: "The fact that every charge is an integral multiple of the elementary charge e." },
        ],
        formulas: [
          { label: "Quantisation of charge", expression: "q = n·e, n = 0, ±1, ±2, …", note: "e = 1.602 × 10⁻¹⁹ C" },
          { label: "Additivity", expression: "Q_total = q₁ + q₂ + q₃ + … (with signs)" },
        ],
        keyPoints: [
          "There are two kinds of charges: like charges repel, unlike charges attract.",
          "Charging by friction involves transfer of electrons, not creation of charge.",
          "Charge is additive, conserved and quantised.",
          "The SI unit of charge is the coulomb (C).",
          "In induction, the induced charge is always opposite to the inducing charge.",
        ],
        explainers: {
          eli10:
            "Everything is made of tiny particles, and some of them — electrons — can hop from one object to another when you rub things together. The object that gains electrons becomes negatively charged, and the one that loses them becomes positive. Opposites attract, like magnets, so a charged comb can pull tiny bits of paper towards it. You can never make charge out of nothing — you can only move it around.",
          realWorld:
            "On a dry winter day in Delhi, you might feel a tiny shock when you touch a metal door handle after walking on a carpet — that's charge built up on your body jumping to the metal. Your hair standing up after combing it with a plastic comb is the same effect. Petrol tankers have a metal chain touching the road to earth any charge that builds up, preventing sparks near the fuel.",
          mnemonic:
            "Remember the three properties with 'ACQ' — like the word 'acquire': Additive, Conserved, Quantised. And for induction, remember 'near-side opposite, far-side same' — the side of the conductor near the rod gets the opposite charge.",
        },
      },
    ),
    tp(
      "Coulomb's Law and Electric Field",
      ["Coulomb's Law", "Forces between Multiple Charges", "Electric Field and Field Lines", "Electric Dipole"],
      {
        intro:
          "Coulomb's law tells us exactly how strongly two point charges push or pull each other. To describe how a charge affects the space around it, we use the idea of an electric field. Together, these ideas let us calculate forces in any arrangement of charges.",
        sections: [
          {
            heading: "Coulomb's Law and Superposition",
            body: "Charles Coulomb found that the force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them, acting along the line joining them. In vacuum, F = k·q₁q₂/r², where k = 1/(4πε₀) ≈ 9 × 10⁹ N m² C⁻². When many charges are present, the **principle of superposition** says the total force on any charge is the vector sum of the forces due to each of the other charges, each calculated as if the others were absent.",
          },
          {
            heading: "Electric Field and Field Lines",
            body: "The electric field at a point is the force experienced by a small positive test charge placed there, per unit charge: E = F/q₀. For a point charge q, E = kq/r², pointing away from a positive charge and towards a negative one. Electric field lines are a picture of the field: they start on positive charges and end on negative charges, never cross each other, do not form closed loops, and are crowded where the field is strong.",
          },
          {
            heading: "The Electric Dipole",
            body: "An electric dipole is a pair of equal and opposite charges, +q and −q, separated by a small distance 2a. Its dipole moment p = q × 2a is a vector pointing from −q to +q. Far away, the dipole's field falls off as 1/r³, faster than a single charge's field. In a uniform external field, a dipole feels no net force but experiences a torque τ = p × E that tries to align it with the field.",
          },
        ],
        definitions: [
          { term: "Coulomb's law", meaning: "The force between two point charges is proportional to the product of charges and inversely proportional to the square of the distance between them." },
          { term: "Electric field", meaning: "The force per unit positive test charge at a point, E = F/q₀; SI unit N C⁻¹." },
          { term: "Electric field line", meaning: "A curve whose tangent at any point gives the direction of the electric field at that point." },
          { term: "Electric dipole moment", meaning: "The product of either charge of a dipole and the separation between them, p = q × 2a, directed from −q to +q." },
        ],
        formulas: [
          { label: "Coulomb's law", expression: "F = k·q₁q₂/r², k = 1/(4πε₀) ≈ 9 × 10⁹ N m² C⁻²", note: "ε₀ = 8.854 × 10⁻¹² C² N⁻¹ m⁻²" },
          { label: "Field of a point charge", expression: "E = k·q/r²" },
          { label: "Dipole field on axis (r ≫ a)", expression: "E = 2k·p/r³" },
          { label: "Dipole field on equatorial line (r ≫ a)", expression: "E = k·p/r³ (directed opposite to p)" },
          { label: "Torque on a dipole", expression: "τ = p × E, |τ| = pE sin θ" },
        ],
        keyPoints: [
          "Coulomb force is an inverse-square, central force acting along the line joining the charges.",
          "Forces and fields from many charges add as vectors (superposition).",
          "Field lines begin on positive and end on negative charges and never intersect.",
          "A dipole's field falls as 1/r³ at large distances.",
          "In a uniform field, a dipole has zero net force but a torque pE sin θ.",
        ],
        explainers: {
          eli10:
            "Every charge is surrounded by an invisible 'push-pull zone' called an electric field. If another charge enters this zone, it feels a push or a pull. The closer they get, the stronger the push — double the distance and the force becomes four times weaker. Field lines are like arrows drawn in this zone to show which way a tiny positive charge would be pushed.",
          realWorld:
            "Photocopiers and laser printers in every Indian office use Coulomb's law: toner particles are charged so that they stick only to the charged image area on a drum. Air-purifier 'electrostatic precipitators' in thermal power plants use strong electric fields to pull charged ash particles out of chimney smoke. Water molecules are tiny dipoles too, which is why they line up in a microwave's changing field and heat your food.",
          mnemonic:
            "For dipole fields, remember '2 on the Axis, 1 at the Equator' — the axial field is 2kp/r³ and the equatorial field is kp/r³, both falling as 1/r³. For field lines: 'Start at Plus, Stop at Minus, Never Cross, Never Loop'.",
        },
      },
    ),
    tp(
      "Electric Flux and Gauss's Law",
      ["Electric Flux", "Gauss's Law", "Applications of Gauss's Law"],
      {
        intro:
          "Electric flux measures how many field lines pass through a surface. Gauss's law connects the total flux through a closed surface to the charge enclosed inside it. For symmetric charge arrangements, it makes finding the electric field remarkably easy.",
        sections: [
          {
            heading: "Electric Flux",
            body: "The electric flux through a small area ΔS is ΔΦ = E·ΔS = E ΔS cos θ, where θ is the angle between the field and the normal to the area. Flux is largest when the surface faces the field directly and zero when the field runs parallel to the surface. It is a scalar with SI unit N m² C⁻¹. For a closed surface, outward flux is positive and inward flux negative.",
          },
          {
            heading: "Gauss's Law",
            body: "Gauss's law states that the total electric flux through any closed surface equals the net charge enclosed divided by ε₀: Φ = q_enclosed/ε₀. The imaginary closed surface is called a **Gaussian surface**. Charges outside the surface do not contribute to the net flux, because every field line entering from outside also leaves. If a closed surface encloses no net charge, the total flux through it is zero.",
          },
          {
            heading: "Applications",
            body: "For an infinitely long straight wire with linear charge density λ, Gauss's law gives E = λ/(2πε₀r), directed radially. For an infinite plane sheet with surface charge density σ, E = σ/(2ε₀), independent of distance from the sheet. For a uniformly charged thin spherical shell, the field outside is E = q/(4πε₀r²), as if all charge were at the centre, while the field inside the shell is zero. These results use λ, σ and ρ to describe continuous charge distributions along a line, over a surface and through a volume.",
          },
        ],
        definitions: [
          { term: "Electric flux", meaning: "The total number of electric field lines passing through a surface; Φ = E·ΔS." },
          { term: "Gaussian surface", meaning: "An imaginary closed surface chosen to apply Gauss's law." },
          { term: "Linear charge density (λ)", meaning: "Charge per unit length of a line charge, in C m⁻¹." },
          { term: "Surface charge density (σ)", meaning: "Charge per unit area of a surface, in C m⁻²." },
        ],
        formulas: [
          { label: "Electric flux", expression: "ΔΦ = E·ΔS = E ΔS cos θ" },
          { label: "Gauss's law", expression: "Φ = ∮E·dS = q_enclosed / ε₀" },
          { label: "Infinite line charge", expression: "E = λ / (2πε₀ r)" },
          { label: "Infinite plane sheet", expression: "E = σ / (2ε₀)" },
          { label: "Thin spherical shell", expression: "E = q / (4πε₀ r²) outside (r > R); E = 0 inside (r < R)" },
        ],
        keyPoints: [
          "Flux depends on the field, the area and the angle between field and normal.",
          "Net flux through a closed surface depends only on the charge enclosed.",
          "Charges outside a closed surface contribute zero net flux.",
          "Field of an infinite plane sheet is independent of distance.",
          "Field inside a uniformly charged spherical shell is zero.",
        ],
        explainers: {
          eli10:
            "Imagine field lines are like rain falling through an open umbrella-shaped hoop. Flux is how much 'rain' passes through the hoop — more if you hold it flat under the rain, none if you tilt it sideways. Gauss's law says that if you put an imaginary balloon around some charges, the total 'rain' coming out of the balloon depends only on how much charge is inside. Charges outside don't count, because whatever goes in also comes out.",
          realWorld:
            "During a thunderstorm, sitting inside a car or bus is safer than standing in the open. The metal body acts like a closed conducting shell, and the electric field inside it stays nearly zero, just as Gauss's law predicts for a charged shell. This shielding idea is also why sensitive electronics in ISRO labs are placed in metal enclosures called Faraday cages.",
          mnemonic:
            "Remember 'Flux Counts Only Inside Guests' — Gauss's law counts only the charge inside the surface. For results: 'Line gets r, Sheet gets nothing, Shell gets r²' — a line charge's field falls as 1/r, a sheet's field does not depend on distance, and a shell's field outside falls as 1/r².",
        },
      },
    ),
  ],
  [
    q("q1", "The SI unit of electric charge is:", ["Ampere", "Coulomb", "Volt", "Newton"], 1, "Electric charge is measured in coulomb (C); 1 C = 1 A × 1 s."),
    q("q2", "If the distance between two point charges is doubled, the Coulomb force between them becomes:", ["Half", "Double", "Four times", "One-fourth"], 3, "F ∝ 1/r², so doubling r reduces the force to one-fourth."),
    q("q3", "Which of the following charges is NOT possible on a body?", ["3.2 × 10⁻¹⁹ C", "1.6 × 10⁻¹⁹ C", "2.4 × 10⁻¹⁹ C", "4.8 × 10⁻¹⁹ C"], 2, "Charge must be an integral multiple of e = 1.6 × 10⁻¹⁹ C; 2.4 × 10⁻¹⁹ C is 1.5e."),
    q("q4", "The net electric flux through a closed surface enclosing a charge q is:", ["q/ε₀", "qε₀", "Zero", "q/(4πε₀)"], 0, "By Gauss's law, the net flux equals the enclosed charge divided by ε₀."),
    q("q5", "An electric dipole placed in a uniform electric field experiences:", ["A net force but no torque", "Neither force nor torque", "Both a net force and a torque", "A torque but no net force"], 3, "Forces on +q and −q are equal and opposite, so the net force is zero, but they form a couple that produces torque."),
    q("q6", "The electric field inside a uniformly charged thin spherical shell is:", ["Maximum at the centre", "Zero", "Same as at the surface", "Inversely proportional to r²"], 1, "A Gaussian surface inside the shell encloses no charge, so the field inside is zero."),
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
      title: "Physics — Textbook for Class XII, Part I",
      chapters: [
        electricChargesAndFields,
        ch(2, "electrostatic-potential-and-capacitance", "Electrostatic Potential and Capacitance", "Covers electrostatic potential and potential energy, equipotential surfaces, conductors and dielectrics, and capacitors.", [
          tp("Electrostatic Potential", ["Potential due to a Point Charge", "Potential due to an Electric Dipole", "Potential due to a System of Charges", "Equipotential Surfaces"]),
          tp("Potential Energy", ["Potential Energy of a System of Charges", "Potential Energy in an External Field"]),
          tp("Conductors and Dielectrics", ["Electrostatics of Conductors", "Dielectrics and Polarisation"]),
          tp("Capacitors and Capacitance", ["The Parallel Plate Capacitor", "Effect of Dielectric on Capacitance", "Combination of Capacitors", "Energy Stored in a Capacitor"]),
        ]),
        ch(3, "current-electricity", "Current Electricity", "Explains electric current, Ohm's law, resistivity, electrical power, cells and Kirchhoff's rules for circuits.", [
          tp("Electric Current and Ohm's Law", ["Electric Currents in Conductors", "Ohm's Law", "Drift of Electrons and the Origin of Resistivity", "Limitations of Ohm's Law"]),
          tp("Resistivity of Various Materials", ["Resistivity of Materials", "Temperature Dependence of Resistivity"]),
          tp("Electrical Energy, Power and Cells", ["Electrical Energy and Power", "EMF and Internal Resistance", "Cells in Series and in Parallel"]),
          tp("Kirchhoff's Rules", ["Junction Rule", "Loop Rule", "Wheatstone Bridge"]),
        ]),
        ch(4, "moving-charges-and-magnetism", "Moving Charges and Magnetism", "Describes magnetic forces on moving charges and currents, the Biot–Savart and Ampere's laws, and the moving coil galvanometer.", [
          tp("Magnetic Force", ["Lorentz Force", "Force on a Current-carrying Conductor", "Motion in a Magnetic Field"]),
          tp("Magnetic Field due to a Current Element", ["Biot–Savart Law", "Field on the Axis of a Circular Current Loop"]),
          tp("Ampere's Circuital Law", ["Ampere's Circuital Law", "The Solenoid", "Force between Two Parallel Currents: the Ampere"]),
          tp("Torque on a Current Loop", ["Magnetic Dipole", "The Moving Coil Galvanometer"]),
        ]),
        ch(5, "magnetism-and-matter", "Magnetism and Matter", "Studies the bar magnet, Gauss's law for magnetism, magnetisation, and the magnetic properties of materials.", [
          tp("The Bar Magnet", ["Magnetic Field Lines", "Bar Magnet as an Equivalent Solenoid", "Dipole in a Uniform Magnetic Field"]),
          tp("Magnetism and Gauss's Law", ["Gauss's Law for Magnetism", "Absence of Magnetic Monopoles"]),
          tp("Magnetisation and Magnetic Properties of Materials", ["Magnetisation and Magnetic Intensity", "Diamagnetism", "Paramagnetism", "Ferromagnetism"]),
        ]),
        ch(6, "electromagnetic-induction", "Electromagnetic Induction", "Explains how changing magnetic flux induces an emf, through Faraday's and Lenz's laws, motional emf, inductance and the AC generator.", [
          tp("Faraday's Law of Induction", ["Experiments of Faraday and Henry", "Magnetic Flux", "Faraday's Law"]),
          tp("Lenz's Law and Motional EMF", ["Lenz's Law and Conservation of Energy", "Motional Electromotive Force"]),
          tp("Inductance", ["Mutual Inductance", "Self-inductance"]),
          tp("AC Generator", ["Principle of the AC Generator", "Induced EMF in a Rotating Coil"]),
        ]),
        ch(7, "alternating-current", "Alternating Current", "Analyses AC circuits with resistors, inductors and capacitors using phasors, including LCR resonance, power factor and transformers.", [
          tp("AC Voltage Applied to Circuit Elements", ["AC Voltage Applied to a Resistor", "Representation of AC by Phasors", "AC Voltage Applied to an Inductor", "AC Voltage Applied to a Capacitor"]),
          tp("Series LCR Circuit", ["Phasor-diagram Solution", "Impedance", "Resonance"]),
          tp("Power in AC Circuits and Transformers", ["Power Factor", "Transformers"]),
        ]),
        ch(8, "electromagnetic-waves", "Electromagnetic Waves", "Introduces displacement current, the nature and sources of electromagnetic waves, and the electromagnetic spectrum.", [
          tp("Displacement Current", ["Inconsistency in Ampere's Law", "Maxwell's Displacement Current"]),
          tp("Electromagnetic Waves", ["Sources of Electromagnetic Waves", "Nature of Electromagnetic Waves"]),
          tp("Electromagnetic Spectrum", ["Radio Waves and Microwaves", "Infrared, Visible and Ultraviolet", "X-rays and Gamma Rays"]),
        ]),
      ],
    },
    {
      id: "physics-part-2",
      title: "Physics — Textbook for Class XII, Part II",
      chapters: [
        ch(9, "ray-optics-and-optical-instruments", "Ray Optics and Optical Instruments", "Covers reflection and refraction of light, total internal reflection, lenses, prisms, and optical instruments like microscopes and telescopes.", [
          tp("Reflection by Spherical Mirrors", ["Sign Convention", "Focal Length of Spherical Mirrors", "The Mirror Equation"]),
          tp("Refraction and Total Internal Reflection", ["Refraction", "Total Internal Reflection", "Optical Fibres"]),
          tp("Refraction at Spherical Surfaces and by Lenses", ["Refraction at a Spherical Surface", "Lens Maker's Formula", "Power of a Lens", "Combination of Thin Lenses"]),
          tp("Prism and Optical Instruments", ["Refraction through a Prism", "The Microscope", "The Telescope"]),
        ]),
        ch(10, "wave-optics", "Wave Optics", "Explains light as a wave using Huygens principle, and studies interference, diffraction and polarisation.", [
          tp("Huygens Principle", ["Wavefronts", "Refraction and Reflection of Plane Waves"]),
          tp("Interference of Light Waves", ["Coherent and Incoherent Addition of Waves", "Young's Double-slit Experiment", "Fringe Width"]),
          tp("Diffraction", ["The Single Slit", "Resolving Power"]),
          tp("Polarisation", ["Polaroids", "Malus' Law"]),
        ]),
        ch(11, "dual-nature-of-radiation-and-matter", "Dual Nature of Radiation and Matter", "Studies the photoelectric effect, Einstein's photoelectric equation, photons, and the wave nature of matter.", [
          tp("Electron Emission and the Photoelectric Effect", ["Electron Emission", "Hertz's and Lenard's Observations", "Experimental Study of Photoelectric Effect"]),
          tp("Einstein's Photoelectric Equation", ["Photoelectric Effect and Wave Theory of Light", "Einstein's Photoelectric Equation", "Particle Nature of Light: The Photon"]),
          tp("Wave Nature of Matter", ["de Broglie Hypothesis", "de Broglie Wavelength"]),
        ]),
        ch(12, "atoms", "Atoms", "Traces atomic models from Rutherford's alpha-scattering experiment to the Bohr model and the hydrogen spectrum.", [
          tp("Alpha-particle Scattering and Rutherford's Nuclear Model", ["Geiger–Marsden Experiment", "Alpha-particle Trajectory", "Electron Orbits"]),
          tp("Atomic Spectra", ["Spectral Series of Hydrogen"]),
          tp("Bohr Model of the Hydrogen Atom", ["Bohr's Postulates", "Energy Levels", "Line Spectra of the Hydrogen Atom", "de Broglie's Explanation of Bohr's Second Postulate"]),
        ]),
        ch(13, "nuclei", "Nuclei", "Explores the composition and size of the nucleus, mass-energy equivalence, binding energy, nuclear force, and nuclear fission and fusion.", [
          tp("Atomic Masses and Composition of Nucleus", ["Atomic Mass Unit", "Isotopes, Isobars and Isotones", "Size of the Nucleus"]),
          tp("Mass-Energy and Nuclear Binding Energy", ["Mass-Energy Equivalence", "Mass Defect and Binding Energy", "Binding Energy per Nucleon"]),
          tp("Nuclear Force and Nuclear Energy", ["Nuclear Force", "Nuclear Fission", "Nuclear Fusion"]),
        ]),
        ch(14, "semiconductor-electronics-materials-devices-and-simple-circuits", "Semiconductor Electronics: Materials, Devices and Simple Circuits", "Introduces semiconductors, intrinsic and extrinsic types, the p-n junction, and the diode as a rectifier.", [
          tp("Classification of Metals, Conductors and Semiconductors", ["Classification on the Basis of Conductivity", "Energy Bands"]),
          tp("Intrinsic and Extrinsic Semiconductors", ["Intrinsic Semiconductor", "n-type Semiconductor", "p-type Semiconductor"]),
          tp("p-n Junction and Semiconductor Diode", ["Formation of a p-n Junction", "Forward Bias", "Reverse Bias"]),
          tp("Application of Junction Diode as a Rectifier", ["Half-wave Rectifier", "Full-wave Rectifier"]),
        ]),
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* CHEMISTRY                                                           */
/* ------------------------------------------------------------------ */

const solutions = ch(
  1,
  "solutions",
  "Solutions",
  "Studies types of solutions, ways of expressing concentration, solubility, Raoult's law, and colligative properties used to find molar masses.",
  [
    tp(
      "Types of Solutions and Concentration",
      ["Types of Solutions", "Expressing Concentration of Solutions", "Solubility and Henry's Law"],
      {
        intro:
          "A solution is a homogeneous mixture of two or more components. The component present in the largest amount is usually the solvent, and the others are solutes. How much solute is dissolved — the concentration — decides many properties of the solution.",
        sections: [
          {
            heading: "Types of Solutions",
            body: "Binary solutions have two components, and depending on whether the solute and solvent are solids, liquids or gases, there are nine types. Air is a gaseous solution, sugar in water is a solid-in-liquid solution, and brass (copper and zinc) is a solid-in-solid solution. Chloroform vapour mixed with nitrogen is a liquid-in-gas solution, while an amalgam of mercury with sodium is a liquid-in-solid solution. Most important for us are liquid solutions.",
          },
          {
            heading: "Expressing Concentration",
            body: "Concentration can be expressed as mass percentage, volume percentage, mass by volume percentage, or parts per million (ppm) for very dilute solutions. **Mole fraction** is the moles of a component divided by total moles; all mole fractions add up to 1. **Molarity (M)** is moles of solute per litre of solution, while **molality (m)** is moles of solute per kilogram of solvent. Since volume changes with temperature, molarity depends on temperature but molality, mass % and mole fraction do not.",
          },
          {
            heading: "Solubility of Gases: Henry's Law",
            body: "Henry's law states that the partial pressure of a gas in the vapour phase is proportional to its mole fraction in the solution: p = K_H·x. So the solubility of a gas increases with pressure. A higher K_H means lower solubility at a given pressure. Gas solubility decreases as temperature rises, which is why aquatic life prefers cold water with more dissolved oxygen.",
          },
        ],
        definitions: [
          { term: "Solution", meaning: "A homogeneous mixture of two or more components whose composition can vary within limits." },
          { term: "Mole fraction (x)", meaning: "The number of moles of a component divided by the total number of moles of all components." },
          { term: "Molarity (M)", meaning: "Number of moles of solute dissolved in one litre of solution." },
          { term: "Molality (m)", meaning: "Number of moles of solute per kilogram of solvent." },
          { term: "Henry's law", meaning: "At constant temperature, the partial pressure of a gas over a solution is proportional to its mole fraction in the solution." },
        ],
        formulas: [
          { label: "Mole fraction", expression: "x_A = n_A / (n_A + n_B)", note: "x_A + x_B = 1" },
          { label: "Molarity", expression: "M = moles of solute / volume of solution (L)" },
          { label: "Molality", expression: "m = moles of solute / mass of solvent (kg)" },
          { label: "Henry's law", expression: "p = K_H · x" },
        ],
        keyPoints: [
          "There are nine types of binary solutions based on physical states.",
          "Molarity depends on temperature; molality and mole fraction do not.",
          "Gas solubility increases with pressure (Henry's law) and decreases with temperature.",
          "Higher K_H means lower solubility of the gas.",
          "ppm is used for very dilute solutions, like pollutants in water.",
        ],
        explainers: {
          eli10:
            "When you stir sugar into water and it disappears, you've made a solution — the sugar is still there, just spread out evenly. Concentration tells you how 'strong' it is, like how sweet your nimbu paani is. And gases like fizz in soda dissolve better when squeezed under high pressure, which is why a soda bottle hisses when you open it — the pressure drops and the gas escapes.",
          realWorld:
            "Soft-drink bottles are sealed under high pressure of CO₂ so more gas dissolves, following Henry's law. Scuba divers breathing compressed air risk 'the bends' when they surface too fast, because dissolved nitrogen forms bubbles in their blood; their tanks use air diluted with helium. Climbers on high Himalayan peaks suffer from anoxia because low air pressure means less oxygen dissolves in their blood.",
          mnemonic:
            "'Molarity is Moody, moLALity is caLm' — molarity changes with temperature because volume does, while molality (based on mass) stays calm. For Henry's law: 'High Pressure, High Solubility; High K_H, Hard to dissolve'.",
        },
      },
    ),
    tp(
      "Vapour Pressure and Raoult's Law",
      ["Vapour Pressure of Liquid-Liquid Solutions", "Raoult's Law as a Special Case of Henry's Law", "Ideal and Non-ideal Solutions", "Azeotropes"],
      {
        intro:
          "Every liquid has a tendency to evaporate, which creates a vapour pressure above it. When two liquids are mixed, or a solid is dissolved in a liquid, the vapour pressure changes in a predictable way. Raoult's law describes this change.",
        sections: [
          {
            heading: "Raoult's Law",
            body: "For a solution of volatile liquids, Raoult's law states that the partial vapour pressure of each component is directly proportional to its mole fraction in the solution: p₁ = p₁°x₁. By Dalton's law, the total vapour pressure is the sum of the partial pressures. When a non-volatile solute is dissolved in a solvent, fewer solvent molecules are at the surface, so the vapour pressure of the solution is lower than that of the pure solvent. Raoult's law is actually a special case of Henry's law, where K_H becomes equal to p°.",
          },
          {
            heading: "Ideal and Non-ideal Solutions",
            body: "Ideal solutions obey Raoult's law at all concentrations, with ΔmixH = 0 and ΔmixV = 0; this happens when A–B interactions are nearly the same as A–A and B–B interactions. Examples include n-hexane with n-heptane, and benzene with toluene. Solutions showing **positive deviation** have weaker A–B interactions, so vapour pressure is higher than expected — for example, ethanol and acetone. Solutions showing **negative deviation** have stronger A–B interactions and lower vapour pressure — for example, chloroform and acetone, or phenol and aniline.",
          },
          {
            heading: "Azeotropes",
            body: "Azeotropes are binary mixtures that have the same composition in liquid and vapour phases and boil at a constant temperature, so they cannot be separated by fractional distillation. Solutions with large positive deviation form minimum boiling azeotropes; for example, ethanol and water form one at about 95% ethanol by volume. Solutions with large negative deviation form maximum boiling azeotropes, such as nitric acid and water at about 68% nitric acid by mass.",
          },
        ],
        definitions: [
          { term: "Vapour pressure", meaning: "The pressure exerted by the vapour of a liquid in equilibrium with the liquid at a given temperature." },
          { term: "Raoult's law", meaning: "The partial vapour pressure of each volatile component of a solution is directly proportional to its mole fraction." },
          { term: "Ideal solution", meaning: "A solution that obeys Raoult's law over the entire range of concentration, with ΔmixH = 0 and ΔmixV = 0." },
          { term: "Azeotrope", meaning: "A binary mixture with the same composition in liquid and vapour phase that boils at a constant temperature." },
        ],
        formulas: [
          { label: "Raoult's law", expression: "p₁ = p₁°·x₁" },
          { label: "Total vapour pressure", expression: "p_total = p₁°x₁ + p₂°x₂ = p₁° + (p₂° − p₁°)x₂" },
        ],
        keyPoints: [
          "Adding a non-volatile solute lowers the vapour pressure of the solvent.",
          "Ideal solutions: ΔmixH = 0, ΔmixV = 0, obey Raoult's law exactly.",
          "Positive deviation: weaker A–B interactions, higher vapour pressure, minimum boiling azeotrope.",
          "Negative deviation: stronger A–B interactions, lower vapour pressure, maximum boiling azeotrope.",
          "Azeotropes cannot be separated by fractional distillation.",
        ],
        explainers: {
          eli10:
            "Imagine the surface of water as a crowded exit gate at a stadium, with water molecules trying to escape as vapour. If you add sugar, some sugar molecules take up spots at the gate, so fewer water molecules can escape. That's why the vapour pressure goes down. Raoult's law just says: the fewer water molecules at the gate, the less vapour escapes, in exact proportion.",
          realWorld:
            "Pure ethanol for labs can't be made just by distilling fermented sugarcane molasses in Indian distilleries, because ethanol and water form an azeotrope at about 95% ethanol. To make fuel-grade ethanol for India's E20 petrol blending programme, extra steps like molecular sieves are needed to remove the last bit of water. The same Raoult's law reasoning explains why a pot of salty water takes slightly longer to boil.",
          mnemonic:
            "'Positive = Pushy Party' — in positive deviation, molecules dislike each other and push out into vapour, giving higher vapour pressure and a minimum boiling azeotrope. 'Negative = Nice Neighbours' — they cling together, lowering vapour pressure and giving a maximum boiling azeotrope.",
        },
      },
    ),
    tp(
      "Colligative Properties",
      ["Relative Lowering of Vapour Pressure", "Elevation of Boiling Point and Depression of Freezing Point", "Osmosis and Osmotic Pressure", "Abnormal Molar Masses"],
      {
        intro:
          "Colligative properties are properties of solutions that depend only on the number of solute particles, not on what those particles are. There are four of them. Because they depend on particle count, they can be used to find the molar mass of an unknown solute.",
        sections: [
          {
            heading: "Vapour Pressure, Boiling Point and Freezing Point",
            body: "The relative lowering of vapour pressure equals the mole fraction of the solute: (p₁° − p₁)/p₁° = x₂. Because vapour pressure is lowered, the solution must be heated to a higher temperature to boil — this is **elevation of boiling point**, ΔTb = Kb·m. Similarly, the solution freezes at a lower temperature — **depression of freezing point**, ΔTf = Kf·m. Kb and Kf are the ebullioscopic and cryoscopic constants; for water, Kb = 0.52 K kg mol⁻¹ and Kf = 1.86 K kg mol⁻¹.",
          },
          {
            heading: "Osmosis and Osmotic Pressure",
            body: "Osmosis is the flow of solvent molecules through a semipermeable membrane from pure solvent (or a dilute solution) into a more concentrated solution. The extra pressure needed to just stop this flow is the osmotic pressure, π = CRT. Solutions with equal osmotic pressure are isotonic; 0.9% NaCl (normal saline) is isotonic with blood, which is why it is used in IV drips. If pressure larger than the osmotic pressure is applied on the solution side, solvent flows backwards — **reverse osmosis** — which is used to purify seawater and in home RO purifiers.",
          },
          {
            heading: "Abnormal Molar Masses",
            body: "When solutes dissociate or associate in solution, the number of particles changes, and the measured colligative property gives an 'abnormal' molar mass. For example, NaCl splits into Na⁺ and Cl⁻, nearly doubling the particles, while ethanoic acid molecules pair up (dimerise) in benzene, nearly halving them. The **van't Hoff factor**, i, corrects for this: i > 1 for dissociation and i < 1 for association. The modified equations become ΔTb = i·Kb·m, ΔTf = i·Kf·m and π = iCRT.",
          },
        ],
        definitions: [
          { term: "Colligative property", meaning: "A property of a dilute solution that depends only on the number of solute particles, not their nature." },
          { term: "Osmotic pressure (π)", meaning: "The excess pressure that must be applied to a solution to prevent osmosis through a semipermeable membrane." },
          { term: "Isotonic solutions", meaning: "Solutions having the same osmotic pressure at a given temperature." },
          { term: "Reverse osmosis", meaning: "Flow of solvent from solution to pure solvent when a pressure greater than osmotic pressure is applied." },
          { term: "van't Hoff factor (i)", meaning: "Ratio of normal molar mass to abnormal (observed) molar mass, accounting for dissociation or association." },
        ],
        formulas: [
          { label: "Relative lowering of vapour pressure", expression: "(p₁° − p₁)/p₁° = x₂" },
          { label: "Elevation of boiling point", expression: "ΔTb = Kb·m", note: "Kb (water) = 0.52 K kg mol⁻¹" },
          { label: "Depression of freezing point", expression: "ΔTf = Kf·m", note: "Kf (water) = 1.86 K kg mol⁻¹" },
          { label: "Osmotic pressure", expression: "π = CRT = (n₂/V)RT" },
          { label: "van't Hoff factor", expression: "i = normal molar mass / abnormal molar mass" },
        ],
        keyPoints: [
          "The four colligative properties: relative lowering of vapour pressure, boiling point elevation, freezing point depression, osmotic pressure.",
          "They depend on the number of solute particles, not their identity.",
          "Osmotic pressure is preferred for finding molar masses of proteins and polymers.",
          "0.9% NaCl solution is isotonic with blood.",
          "i > 1 for dissociation (e.g. NaCl, KCl); i < 1 for association (e.g. ethanoic acid in benzene).",
        ],
        explainers: {
          eli10:
            "Colligative properties only care about 'how many' guests are at the party, not 'who' they are. Add more solute particles, and water finds it harder to boil and harder to freeze. It also tries to rush towards the crowded side through a special filter, which is osmosis. Salt counts double because each salt particle breaks into two pieces in water!",
          realWorld:
            "Your home RO water purifier pushes tap water through a membrane at high pressure — reverse osmosis — leaving salts behind. When your mother salts raw mango for pickles, water is drawn out of the mango by osmosis. In hospitals, doctors use 0.9% saline for drips because it is isotonic with blood; a stronger or weaker solution would shrink or swell your red blood cells.",
          mnemonic:
            "Remember the four with 'VBFO — Very Big Fat Omelette': Vapour pressure lowering, Boiling point elevation, Freezing point depression, Osmotic pressure. For the van't Hoff factor: 'Dissociate → Divide → i Increases', 'Associate → Add up → i goes down'.",
        },
      },
    ),
  ],
  [
    q("q1", "Which of the following concentration terms depends on temperature?", ["Molality", "Mole fraction", "Molarity", "Mass percentage"], 2, "Molarity uses volume of solution, which changes with temperature."),
    q("q2", "According to Henry's law, the solubility of a gas in a liquid:", ["Increases with increase in pressure", "Decreases with increase in pressure", "Is independent of pressure", "Increases with increase in temperature"], 0, "p = K_H·x, so a higher partial pressure means more gas dissolves."),
    q("q3", "A mixture of ethanol and acetone shows:", ["Negative deviation from Raoult's law", "Ideal behaviour", "Maximum boiling azeotrope formation", "Positive deviation from Raoult's law"], 3, "Acetone breaks some hydrogen bonds between ethanol molecules, weakening interactions and raising vapour pressure."),
    q("q4", "Which of the following is NOT a colligative property?", ["Osmotic pressure", "Vapour pressure", "Depression of freezing point", "Elevation of boiling point"], 1, "Vapour pressure itself is not colligative; the relative lowering of vapour pressure is."),
    q("q5", "The van't Hoff factor for a solute that dimerises completely in solution is:", ["0.5", "1", "2", "3"], 0, "Dimerisation halves the number of particles, so i = 1/2."),
    q("q6", "Which method is preferred to find the molar mass of proteins?", ["Elevation of boiling point", "Depression of freezing point", "Relative lowering of vapour pressure", "Osmotic pressure"], 3, "Osmotic pressure measurements work at room temperature and give measurable values even for dilute solutions of macromolecules."),
  ],
);

const chemistry: Grade["subjects"][number] = {
  id: "chemistry",
  name: "Chemistry",
  icon: "beaker",
  color: "violet",
  textbooks: [
    {
      id: "chemistry-part-1",
      title: "Chemistry — Textbook for Class XII, Part I",
      chapters: [
        solutions,
        ch(2, "electrochemistry", "Electrochemistry", "Explains galvanic and electrolytic cells, electrode potentials, the Nernst equation, conductance, batteries, fuel cells and corrosion.", [
          tp("Electrochemical Cells", ["Galvanic Cells", "Measurement of Electrode Potential", "Standard Hydrogen Electrode"]),
          tp("Nernst Equation", ["Equilibrium Constant from Nernst Equation", "Electrochemical Cell and Gibbs Energy"]),
          tp("Conductance of Electrolytic Solutions", ["Measurement of Conductivity", "Variation of Conductivity and Molar Conductivity with Concentration", "Kohlrausch's Law"]),
          tp("Electrolytic Cells, Batteries and Corrosion", ["Electrolysis and Faraday's Laws", "Primary and Secondary Batteries", "Fuel Cells", "Corrosion"]),
        ]),
        ch(3, "chemical-kinetics", "Chemical Kinetics", "Studies rates of chemical reactions, factors affecting them, integrated rate equations, and the effect of temperature through the Arrhenius equation.", [
          tp("Rate of a Chemical Reaction", ["Average and Instantaneous Rate", "Rate Law and Rate Constant"]),
          tp("Factors Influencing Rate of a Reaction", ["Order of a Reaction", "Molecularity of a Reaction"]),
          tp("Integrated Rate Equations", ["Zero Order Reactions", "First Order Reactions", "Half-life of a Reaction", "Pseudo First Order Reactions"]),
          tp("Temperature Dependence and Collision Theory", ["Arrhenius Equation", "Effect of Catalyst", "Collision Theory of Chemical Reactions"]),
        ]),
        ch(4, "the-d-and-f-block-elements", "The d- and f-Block Elements", "Covers the electronic configurations and general properties of transition elements, important compounds, and the lanthanoids and actinoids.", [
          tp("Transition Elements (d-Block)", ["Position in the Periodic Table", "Electronic Configurations", "General Properties of Transition Elements"]),
          tp("Some Important Compounds of Transition Elements", ["Potassium Dichromate", "Potassium Permanganate"]),
          tp("The Inner Transition Elements (f-Block)", ["The Lanthanoids and Lanthanoid Contraction", "The Actinoids", "Applications of d- and f-Block Elements"]),
        ]),
        ch(5, "coordination-compounds", "Coordination Compounds", "Introduces Werner's theory, terminology, nomenclature, isomerism and bonding in coordination compounds, and their importance.", [
          tp("Werner's Theory and Definitions", ["Werner's Theory of Coordination Compounds", "Ligands, Coordination Number and Coordination Sphere"]),
          tp("Nomenclature and Isomerism", ["Formulas and IUPAC Names", "Geometric and Optical Isomerism", "Structural Isomerism"]),
          tp("Bonding in Coordination Compounds", ["Valence Bond Theory", "Magnetic Properties", "Crystal Field Theory", "Colour in Coordination Compounds"]),
          tp("Importance and Applications", ["Applications in Biology, Analysis and Medicine"]),
        ]),
      ],
    },
    {
      id: "chemistry-part-2",
      title: "Chemistry — Textbook for Class XII, Part II",
      chapters: [
        ch(6, "haloalkanes-and-haloarenes", "Haloalkanes and Haloarenes", "Covers classification, nomenclature, preparation, properties and reactions of halogen compounds, including SN1 and SN2 mechanisms.", [
          tp("Classification and Nomenclature", ["Classification", "Nomenclature", "Nature of C–X Bond"]),
          tp("Methods of Preparation", ["Preparation of Haloalkanes", "Preparation of Haloarenes", "Physical Properties"]),
          tp("Chemical Reactions", ["Nucleophilic Substitution: SN1 and SN2", "Stereochemical Aspects", "Elimination Reactions", "Reactions of Haloarenes"]),
          tp("Polyhalogen Compounds", ["Dichloromethane, Chloroform and Iodoform", "Freons and DDT"]),
        ]),
        ch(7, "alcohols-phenols-and-ethers", "Alcohols, Phenols and Ethers", "Studies the classification, nomenclature, preparation, properties and reactions of alcohols, phenols and ethers.", [
          tp("Classification, Nomenclature and Structure", ["Classification", "Nomenclature", "Structures of Functional Groups"]),
          tp("Alcohols and Phenols", ["Preparation of Alcohols", "Preparation of Phenols", "Physical Properties", "Chemical Reactions"]),
          tp("Some Commercially Important Alcohols", ["Methanol", "Ethanol"]),
          tp("Ethers", ["Preparation of Ethers", "Physical and Chemical Properties"]),
        ]),
        ch(8, "aldehydes-ketones-and-carboxylic-acids", "Aldehydes, Ketones and Carboxylic Acids", "Explores the carbonyl group in aldehydes, ketones and carboxylic acids, their preparation, properties and reactions.", [
          tp("Aldehydes and Ketones", ["Nomenclature and Structure of Carbonyl Group", "Preparation", "Physical Properties"]),
          tp("Reactions of Aldehydes and Ketones", ["Nucleophilic Addition Reactions", "Oxidation and Reduction", "Reactions due to α-Hydrogen", "Uses"]),
          tp("Carboxylic Acids", ["Nomenclature and Structure", "Methods of Preparation", "Acidity of Carboxylic Acids", "Chemical Reactions and Uses"]),
        ]),
        ch(9, "amines", "Amines", "Describes the structure, classification, nomenclature, preparation, properties and reactions of amines and diazonium salts.", [
          tp("Structure, Classification and Nomenclature", ["Structure of Amines", "Classification", "Nomenclature"]),
          tp("Preparation and Properties of Amines", ["Preparation of Amines", "Physical Properties", "Basic Character of Amines", "Chemical Reactions"]),
          tp("Diazonium Salts", ["Method of Preparation", "Chemical Reactions", "Importance in Synthesis of Aromatic Compounds"]),
        ]),
        ch(10, "biomolecules", "Biomolecules", "Studies the structure and functions of carbohydrates, proteins, enzymes, vitamins, nucleic acids and hormones.", [
          tp("Carbohydrates", ["Classification of Carbohydrates", "Monosaccharides: Glucose and Fructose", "Disaccharides and Polysaccharides"]),
          tp("Proteins and Enzymes", ["Amino Acids", "Structure of Proteins", "Denaturation of Proteins", "Enzymes"]),
          tp("Vitamins and Hormones", ["Classification of Vitamins", "Hormones"]),
          tp("Nucleic Acids", ["Chemical Composition", "Structure of Nucleic Acids", "Biological Functions"]),
        ]),
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* BIOLOGY                                                             */
/* ------------------------------------------------------------------ */

const biology: Grade["subjects"][number] = {
  id: "biology",
  name: "Biology",
  icon: "leaf",
  color: "emerald",
  textbooks: [
    {
      id: "biology",
      title: "Biology — Textbook for Class XII",
      chapters: [
        ch(1, "sexual-reproduction-in-flowering-plants", "Sexual Reproduction in Flowering Plants", "Describes the flower's reproductive structures, pollination, double fertilisation, and the development of seeds and fruits.", [
          tp("Flower and Pre-fertilisation Events", ["Stamen, Microsporangium and Pollen Grain", "The Pistil, Megasporangium and Embryo Sac", "Pollination and Outbreeding Devices", "Pollen-Pistil Interaction"]),
          tp("Double Fertilisation", ["Syngamy and Triple Fusion"]),
          tp("Post-fertilisation Events", ["Endosperm and Embryo", "Seed and Fruit"]),
          tp("Apomixis and Polyembryony", ["Apomixis", "Polyembryony"]),
        ]),
        ch(2, "human-reproduction", "Human Reproduction", "Explains the male and female reproductive systems, gametogenesis, the menstrual cycle, fertilisation, pregnancy and parturition.", [
          tp("Male and Female Reproductive Systems", ["The Male Reproductive System", "The Female Reproductive System"]),
          tp("Gametogenesis and Menstrual Cycle", ["Spermatogenesis", "Oogenesis", "Menstrual Cycle"]),
          tp("Fertilisation and Implantation", ["Fertilisation", "Implantation"]),
          tp("Pregnancy, Embryonic Development, Parturition and Lactation", ["Pregnancy and Embryonic Development", "Parturition and Lactation"]),
        ]),
        ch(3, "reproductive-health", "Reproductive Health", "Discusses reproductive health, population control, birth control methods, sexually transmitted infections and infertility.", [
          tp("Reproductive Health: Problems and Strategies", ["Reproductive Health Programmes", "Population Stabilisation"]),
          tp("Birth Control", ["Natural and Barrier Methods", "IUDs and Oral Contraceptives", "Surgical Methods", "Medical Termination of Pregnancy"]),
          tp("Sexually Transmitted Infections and Infertility", ["Sexually Transmitted Infections", "Infertility and Assisted Reproductive Technologies"]),
        ]),
        ch(4, "principles-of-inheritance-and-variation", "Principles of Inheritance and Variation", "Covers Mendel's laws, deviations from Mendelism, the chromosomal theory of inheritance, sex determination and genetic disorders.", [
          tp("Mendel's Laws of Inheritance", ["Inheritance of One Gene", "Inheritance of Two Genes", "Law of Dominance, Segregation and Independent Assortment"]),
          tp("Deviations from Mendelism", ["Incomplete Dominance", "Co-dominance", "Pleiotropy and Polygenic Inheritance"]),
          tp("Chromosomal Theory and Sex Determination", ["Chromosomal Theory of Inheritance", "Linkage and Recombination", "Sex Determination"]),
          tp("Mutation and Genetic Disorders", ["Mutation and Pedigree Analysis", "Mendelian Disorders", "Chromosomal Disorders"]),
        ]),
        ch(5, "molecular-basis-of-inheritance", "Molecular Basis of Inheritance", "Explains DNA structure, the search for genetic material, replication, transcription, the genetic code, translation, gene regulation and DNA fingerprinting.", [
          tp("The DNA and the Search for Genetic Material", ["Structure of Polynucleotide Chain", "Packaging of DNA Helix", "Transforming Principle and Hershey-Chase Experiment", "RNA World"]),
          tp("Replication and Transcription", ["Semiconservative Replication", "Transcription Unit", "Types of RNA and Process of Transcription"]),
          tp("Genetic Code and Translation", ["Genetic Code", "tRNA: the Adapter Molecule", "Translation"]),
          tp("Regulation of Gene Expression, Human Genome Project and DNA Fingerprinting", ["The Lac Operon", "Human Genome Project", "DNA Fingerprinting"]),
        ]),
        ch(6, "evolution", "Evolution", "Traces the origin of life, evidences and theories of evolution, Hardy-Weinberg principle and the evolution of humans.", [
          tp("Origin of Life and Evidences for Evolution", ["Origin of Life", "Evidences for Evolution", "Adaptive Radiation"]),
          tp("Biological Evolution and its Mechanism", ["Darwin's Theory of Natural Selection", "Mechanism of Evolution", "Hardy-Weinberg Principle"]),
          tp("A Brief Account of Evolution", ["Evolution of Plants and Animals", "Origin and Evolution of Man"]),
        ]),
        ch(7, "human-health-and-disease", "Human Health and Disease", "Covers common infectious diseases, immunity, AIDS, cancer, and drug and alcohol abuse.", [
          tp("Common Diseases in Humans", ["Bacterial and Viral Diseases", "Protozoan Diseases: Malaria", "Helminth and Fungal Diseases", "Prevention and Control"]),
          tp("Immunity", ["Innate and Acquired Immunity", "Active and Passive Immunity", "Vaccination, Allergies and Auto-immunity"]),
          tp("AIDS and Cancer", ["AIDS", "Cancer"]),
          tp("Drugs and Alcohol Abuse", ["Adolescence and Drug Abuse", "Addiction and Dependence", "Prevention and Control"]),
        ]),
        ch(8, "microbes-in-human-welfare", "Microbes in Human Welfare", "Explores the use of microbes in household products, industry, sewage treatment, biogas production, biocontrol and as biofertilisers.", [
          tp("Microbes in Household Products and Industry", ["Microbes in Household Products", "Fermented Beverages and Antibiotics", "Chemicals, Enzymes and Bioactive Molecules"]),
          tp("Microbes in Sewage Treatment and Biogas", ["Primary and Secondary Treatment", "Microbes in Production of Biogas"]),
          tp("Microbes as Biocontrol Agents and Biofertilisers", ["Biocontrol Agents", "Biofertilisers"]),
        ]),
        ch(9, "biotechnology-principles-and-processes", "Biotechnology: Principles and Processes", "Introduces the principles of biotechnology, the tools of recombinant DNA technology and the processes used to create recombinant products.", [
          tp("Principles of Biotechnology", ["Genetic Engineering", "Maintenance of Sterile Conditions"]),
          tp("Tools of Recombinant DNA Technology", ["Restriction Enzymes", "Cloning Vectors", "Competent Host for Transformation"]),
          tp("Processes of Recombinant DNA Technology", ["Isolation of DNA and Cutting at Specific Locations", "Amplification using PCR", "Insertion of Recombinant DNA into Host", "Obtaining the Foreign Gene Product and Downstream Processing"]),
        ]),
        ch(10, "biotechnology-and-its-applications", "Biotechnology and its Applications", "Describes applications of biotechnology in agriculture and medicine, transgenic animals, and the ethical issues involved.", [
          tp("Biotechnological Applications in Agriculture", ["Genetically Modified Crops", "Bt Cotton", "Pest Resistant Plants and RNA Interference"]),
          tp("Biotechnological Applications in Medicine", ["Genetically Engineered Insulin", "Gene Therapy", "Molecular Diagnosis"]),
          tp("Transgenic Animals and Ethical Issues", ["Transgenic Animals", "Ethical Issues and Biopiracy"]),
        ]),
        ch(11, "organisms-and-populations", "Organisms and Populations", "Studies population attributes, population growth models, and interactions between populations of different species.", [
          tp("Populations", ["Population Attributes", "Population Growth", "Exponential and Logistic Growth", "Life History Variation"]),
          tp("Population Interactions", ["Predation", "Competition", "Parasitism", "Commensalism and Mutualism"]),
        ]),
        ch(12, "ecosystem", "Ecosystem", "Describes ecosystem structure and function, productivity, decomposition, energy flow and ecological pyramids.", [
          tp("Ecosystem: Structure and Function", ["Components of an Ecosystem", "Stratification"]),
          tp("Productivity and Decomposition", ["Primary and Secondary Productivity", "Decomposition"]),
          tp("Energy Flow and Ecological Pyramids", ["Food Chains and Food Webs", "Trophic Levels", "Ecological Pyramids"]),
        ]),
        ch(13, "biodiversity-and-conservation", "Biodiversity and Conservation", "Explains the levels and patterns of biodiversity, its importance, causes of its loss, and in situ and ex situ conservation.", [
          tp("Biodiversity", ["Levels of Biodiversity", "How Many Species are There on Earth?", "Biodiversity in India"]),
          tp("Patterns of Biodiversity", ["Latitudinal Gradients", "Species-Area Relationships", "Importance of Species Diversity"]),
          tp("Loss of Biodiversity", ["Causes of Biodiversity Losses", "The Evil Quartet"]),
          tp("Biodiversity Conservation", ["Why Should We Conserve Biodiversity?", "In situ Conservation", "Ex situ Conservation"]),
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
      id: "mathematics-part-1",
      title: "Mathematics — Textbook for Class XII, Part I",
      chapters: [
        ch(1, "relations-and-functions", "Relations and Functions", "Studies types of relations including equivalence relations, and types of functions including one-one and onto functions.", [
          tp("Types of Relations", ["Empty and Universal Relations", "Reflexive, Symmetric and Transitive Relations", "Equivalence Relations and Equivalence Classes"]),
          tp("Types of Functions", ["One-one (Injective) Functions", "Onto (Surjective) Functions", "Bijective Functions"]),
        ]),
        ch(2, "inverse-trigonometric-functions", "Inverse Trigonometric Functions", "Defines inverse trigonometric functions using restricted domains, their principal value branches, graphs and properties.", [
          tp("Basic Concepts", ["Restricting Domains of Trigonometric Functions", "Principal Value Branch", "Graphs of Inverse Trigonometric Functions"]),
          tp("Properties of Inverse Trigonometric Functions", ["Elementary Properties", "Simplifying Expressions"]),
        ]),
        ch(3, "matrices", "Matrices", "Introduces matrices, their types, operations, transpose, symmetric and skew-symmetric matrices, and invertible matrices.", [
          tp("Matrix and Types of Matrices", ["Order of a Matrix", "Types of Matrices", "Equality of Matrices"]),
          tp("Operations on Matrices", ["Addition and Scalar Multiplication", "Multiplication of Matrices", "Properties of Matrix Operations"]),
          tp("Transpose of a Matrix", ["Properties of Transpose", "Symmetric and Skew Symmetric Matrices"]),
          tp("Invertible Matrices", ["Inverse of a Matrix", "Uniqueness of Inverse"]),
        ]),
        ch(4, "determinants", "Determinants", "Covers determinants, area of triangles, minors and cofactors, adjoint and inverse of a matrix, and solving linear equations.", [
          tp("Determinant", ["Determinant of a 2 × 2 Matrix", "Determinant of a 3 × 3 Matrix"]),
          tp("Area of a Triangle", ["Area using Determinants", "Condition for Collinearity"]),
          tp("Minors, Cofactors and Adjoint", ["Minors and Cofactors", "Adjoint of a Matrix", "Inverse of a Matrix"]),
          tp("Applications of Determinants and Matrices", ["Consistency of a System of Equations", "Solving Linear Equations using Inverse of a Matrix"]),
        ]),
        ch(5, "continuity-and-differentiability", "Continuity and Differentiability", "Studies continuity and differentiability of functions and the rules of differentiation, including chain rule, implicit, logarithmic and parametric differentiation.", [
          tp("Continuity", ["Continuity at a Point", "Algebra of Continuous Functions"]),
          tp("Differentiability", ["Derivatives of Composite Functions (Chain Rule)", "Implicit Functions", "Inverse Trigonometric Functions"]),
          tp("Exponential and Logarithmic Functions", ["Derivatives of Exponential and Log Functions", "Logarithmic Differentiation"]),
          tp("Derivatives of Parametric Functions and Second Order Derivatives", ["Parametric Forms", "Second Order Derivative"]),
        ]),
        ch(6, "application-of-derivatives", "Application of Derivatives", "Uses derivatives to find rates of change, increasing and decreasing functions, and maxima and minima.", [
          tp("Rate of Change of Quantities", ["Rate of Change", "Marginal Cost and Revenue"]),
          tp("Increasing and Decreasing Functions", ["Definitions and Test", "Intervals of Increase and Decrease"]),
          tp("Maxima and Minima", ["First Derivative Test", "Second Derivative Test", "Absolute Maxima and Minima"]),
        ]),
      ],
    },
    {
      id: "mathematics-part-2",
      title: "Mathematics — Textbook for Class XII, Part II",
      chapters: [
        ch(7, "integrals", "Integrals", "Develops integration as the inverse of differentiation, methods of integration, and definite integrals with their properties.", [
          tp("Integration as Inverse Process of Differentiation", ["Indefinite Integrals", "Properties of Indefinite Integrals"]),
          tp("Methods of Integration", ["Integration by Substitution", "Integration using Partial Fractions", "Integration by Parts", "Integrals of Some Particular Functions"]),
          tp("Definite Integral", ["Fundamental Theorem of Calculus", "Evaluation by Substitution", "Properties of Definite Integrals"]),
        ]),
        ch(8, "application-of-integrals", "Application of Integrals", "Uses definite integrals to find the area under simple curves.", [
          tp("Area under Simple Curves", ["Area between a Curve and the x-axis", "Area between a Curve and the y-axis", "Area Below the x-axis"]),
          tp("Area of Standard Regions", ["Area of a Circle", "Area of an Ellipse", "Area Bounded by a Parabola and a Line"]),
        ]),
        ch(9, "differential-equations", "Differential Equations", "Introduces differential equations, their order and degree, general and particular solutions, and methods to solve first order equations.", [
          tp("Basic Concepts", ["Order of a Differential Equation", "Degree of a Differential Equation"]),
          tp("General and Particular Solutions", ["General Solution", "Particular Solution"]),
          tp("Methods of Solving First Order, First Degree Differential Equations", ["Variables Separable", "Homogeneous Differential Equations", "Linear Differential Equations"]),
        ]),
        ch(10, "vector-algebra", "Vector Algebra", "Introduces vectors, their types, addition, components, and scalar and vector products.", [
          tp("Basic Concepts and Types of Vectors", ["Position Vector and Direction Cosines", "Types of Vectors"]),
          tp("Addition of Vectors and Components", ["Addition of Vectors", "Multiplication by a Scalar", "Components of a Vector", "Section Formula"]),
          tp("Product of Two Vectors", ["Scalar (Dot) Product", "Projection of a Vector", "Vector (Cross) Product"]),
        ]),
        ch(11, "three-dimensional-geometry", "Three Dimensional Geometry", "Uses vectors to study direction cosines, equations of lines in space, angles between lines and shortest distance.", [
          tp("Direction Cosines and Direction Ratios of a Line", ["Direction Cosines", "Direction Ratios", "Line through Two Points"]),
          tp("Equation of a Line in Space", ["Line through a Point Parallel to a Vector", "Line through Two Given Points"]),
          tp("Angle and Shortest Distance between Lines", ["Angle between Two Lines", "Skew Lines", "Shortest Distance between Two Lines"]),
        ]),
        ch(12, "linear-programming", "Linear Programming", "Formulates linear programming problems and solves them graphically using the corner point method.", [
          tp("Linear Programming Problem and its Mathematical Formulation", ["Objective Function and Constraints", "Feasible Region"]),
          tp("Graphical Method of Solving LPP", ["Corner Point Method", "Bounded and Unbounded Regions"]),
        ]),
        ch(13, "probability", "Probability", "Covers conditional probability, the multiplication theorem, independent events, Bayes' theorem, and random variables.", [
          tp("Conditional Probability", ["Properties of Conditional Probability", "Multiplication Theorem on Probability"]),
          tp("Independent Events and Bayes' Theorem", ["Independent Events", "Partition of a Sample Space", "Theorem of Total Probability", "Bayes' Theorem"]),
          tp("Random Variables and their Probability Distributions", ["Random Variables", "Probability Distribution", "Mean of a Random Variable"]),
        ]),
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* ECONOMICS                                                           */
/* ------------------------------------------------------------------ */

const nationalIncomeAccounting = ch(
  2,
  "national-income-accounting",
  "National Income Accounting",
  "Explains basic macroeconomic concepts, the circular flow of income, the three methods of measuring national income, related aggregates, and real versus nominal GDP.",
  [
    tp(
      "Some Basic Concepts of Macroeconomics",
      ["Final and Intermediate Goods", "Consumption and Capital Goods", "Stocks and Flows", "Gross Investment and Depreciation"],
      {
        intro:
          "To measure how much an economy produces, we first need to be clear about what exactly to count. Macroeconomics distinguishes between goods used up in production and goods that reach their final users. It also separates quantities measured at a point in time from those measured over a period.",
        sections: [
          {
            heading: "Final and Intermediate Goods",
            body: "A final good is one that will not pass through any further stage of production — it is bought by its final user for consumption or investment. An intermediate good is used up as input in producing other goods, like the steel sheets bought by a car maker or the flour bought by a baker. Whether a good is final or intermediate depends on its **use**, not its nature: milk bought by a household is final, but milk bought by a sweet shop is intermediate. Only final goods are counted in national income to avoid double counting.",
          },
          {
            heading: "Consumption Goods and Capital Goods",
            body: "Final goods are of two types. Consumption goods, like food and clothing, are consumed when purchased by their final consumers; durable ones like TVs and cars are called consumer durables. Capital goods, like machines, tools and buildings, are durable goods used in production that are not used up in a single production cycle. Capital goods gradually wear out and need replacing over time.",
          },
          {
            heading: "Stocks, Flows, Investment and Depreciation",
            body: "A **stock** is measured at a point in time (like the capital a firm owns on 31 March), while a **flow** is measured over a period of time (like the income earned during a year). Production and income are flows. Addition to the stock of capital during a period is called investment, or gross investment. The wear and tear of capital during production is called depreciation, or consumption of fixed capital. Net investment = gross investment − depreciation, and it measures the actual addition to the capital stock.",
          },
        ],
        definitions: [
          { term: "Final goods", meaning: "Goods purchased by their final users for consumption or investment, which do not undergo further transformation in production." },
          { term: "Intermediate goods", meaning: "Goods used as raw material or input for producing other goods, or resold, during the same year." },
          { term: "Capital goods", meaning: "Durable final goods used in production over many cycles, such as machinery and buildings." },
          { term: "Depreciation", meaning: "The fall in value of fixed capital due to normal wear and tear and expected obsolescence; also called consumption of fixed capital." },
          { term: "Stock and flow", meaning: "A stock is measured at a point of time; a flow is measured over a period of time." },
        ],
        formulas: [
          { label: "Net investment", expression: "Net Investment = Gross Investment − Depreciation" },
        ],
        keyPoints: [
          "Whether a good is final or intermediate depends on its end use, not on the good itself.",
          "Only final goods are included in national income, to avoid double counting.",
          "Capital goods are durable and used over several production cycles.",
          "Income and production are flows; capital and wealth are stocks.",
          "Net investment = gross investment − depreciation.",
        ],
        explainers: {
          eli10:
            "Think about a samosa you buy. The potatoes, flour and oil the shopkeeper bought were 'intermediate goods' — they got used up to make the samosa. The samosa you eat is the 'final good'. If we counted the potatoes and the samosa both, we'd be counting the potatoes twice! The shopkeeper's kadhai is a 'capital good' — it's used again and again and slowly wears out.",
          realWorld:
            "When Maruti Suzuki buys tyres from MRF, those tyres are intermediate goods. But when you replace your car's tyres at a local shop, the tyres you buy are final goods. A kirana store's refrigerator is a capital good that slowly depreciates. Your bank balance on 1 January is a stock, while your monthly salary or pocket money is a flow.",
          mnemonic:
            "'Stock is a Snapshot, Flow is a Film' — a stock is measured at one moment like a photo, a flow over time like a movie. For goods, remember 'Use decides the label' — the same milk can be final or intermediate depending on who buys it and why.",
        },
      },
    ),
    tp(
      "Circular Flow and Methods of Calculating National Income",
      ["Circular Flow of Income", "Product or Value Added Method", "Expenditure Method", "Income Method"],
      {
        intro:
          "In an economy, money keeps going round in a circle between households and firms. Firms pay households for their factor services, and households spend that income buying goods from firms. Because of this circular flow, we can measure national income in three equivalent ways.",
        sections: [
          {
            heading: "The Circular Flow of Income",
            body: "Households own the four factors of production — land, labour, capital and entrepreneurship — and earn rent, wages, interest and profits in return. They spend this income on goods and services produced by firms, which then pay factors again. In a simple economy without government, savings or foreign trade, the aggregate value of production, total factor income and total expenditure are all equal. That is why national income can be measured at three points in the circle: production, income or expenditure.",
          },
          {
            heading: "Product (Value Added) Method",
            body: "Adding up the full value of every firm's output would count intermediate goods again and again — the problem of **double counting**. Instead, we add up each firm's value added: the value of its output minus the value of intermediate goods it used. Changes in inventories (unsold stock) are counted as part of a firm's investment and hence its output. GDP is the sum of the gross value added of all firms in the economy.",
          },
          {
            heading: "Expenditure and Income Methods",
            body: "The **expenditure method** adds up final expenditure on goods and services: private consumption (C), investment (I), government purchases (G) and net exports (X − M). So GDP = C + I + G + (X − M). The **income method** adds up the factor payments made by firms: wages (W), profits (P), interest (In) and rent (R), so GDP = W + P + In + R. All three methods give the same value of GDP.",
          },
        ],
        definitions: [
          { term: "Circular flow of income", meaning: "The continuous flow of income and expenditure between households and firms in an economy." },
          { term: "Value added", meaning: "The net contribution of a firm to production: value of output minus value of intermediate goods used." },
          { term: "Double counting", meaning: "The error of counting the value of intermediate goods more than once when calculating national income." },
          { term: "Gross Domestic Product (GDP)", meaning: "The market value of all final goods and services produced within the domestic territory of a country during a year." },
          { term: "Inventory", meaning: "The stock of unsold finished goods, semi-finished goods or raw materials a firm carries from one year to the next." },
        ],
        formulas: [
          { label: "Gross value added", expression: "GVA = Value of Output − Intermediate Consumption" },
          { label: "Expenditure method", expression: "GDP_MP = C + I + G + (X − M)" },
          { label: "Income method", expression: "GDP = W + P + In + R" },
          { label: "Change in inventories", expression: "Change in inventories = Production − Sales" },
        ],
        keyPoints: [
          "Production, income and expenditure are three equivalent ways to measure GDP.",
          "Value added method avoids double counting of intermediate goods.",
          "Change in inventories is treated as investment by the firm.",
          "Expenditure method: GDP = C + I + G + (X − M).",
          "Income method: GDP = wages + profits + interest + rent.",
        ],
        explainers: {
          eli10:
            "Imagine a village where everyone works at a factory and buys things from the same factory. The factory pays wages to the villagers, and villagers spend that money buying the factory's products. The money just keeps going round and round! So you can find out how big the village economy is by counting what the factory made, what villagers earned, or what villagers spent — all three give the same answer.",
          realWorld:
            "Take a cup of chai sold at a tapri in Mumbai. The farmer grows tea leaves worth ₹2, the packaging company turns them into tea powder worth ₹3, and the chaiwala sells the chai for ₹10 using ₹5 of tea powder, milk and sugar. Adding ₹2 + ₹3 + ₹10 would count the tea twice; instead we add only the value each one added. India's National Statistics Office uses all three methods to estimate the country's GDP.",
          mnemonic:
            "For the expenditure method, remember 'CIGXM' as 'Chai, Idli, Gulab jamun, eXtra Masala' — C + I + G + (X − M). For the income method, the four factor payments are 'We Pay In Rupees' — Wages, Profits, Interest, Rent.",
        },
      },
    ),
    tp(
      "Macroeconomic Aggregates, Real GDP and Welfare",
      ["Factor Cost, Basic Prices and Market Prices", "Some Macroeconomic Identities", "Nominal and Real GDP", "GDP and Welfare"],
      {
        intro:
          "GDP can be adjusted in different ways to answer different questions: Who earned it? Is it net of wear and tear? Does it include taxes? Economists also separate the effect of rising prices from genuine growth in output. Finally, we ask whether a higher GDP always means people are better off.",
        sections: [
          {
            heading: "From GDP to National Income",
            body: "GDP measures production within a country's borders. Adding **net factor income from abroad** (NFIA) — factor income earned by residents abroad minus that earned by non-residents in India — gives Gross National Product (GNP). Subtracting depreciation gives the net measures NDP and NNP. Market prices include indirect taxes and exclude subsidies, so NNP at factor cost = NNP at market prices − (indirect taxes − subsidies). This NNP at factor cost is called **National Income**.",
          },
          {
            heading: "Personal Income and Disposable Income",
            body: "Not all national income reaches households. Personal Income is National Income minus undistributed profits, net interest payments by households and corporate tax, plus transfer payments from the government and firms. Personal Disposable Income is what households can actually spend or save, after paying personal taxes and non-tax payments such as fines. India now reports Gross Value Added at basic prices, which includes production taxes but excludes production subsidies.",
          },
          {
            heading: "Nominal GDP, Real GDP and Welfare",
            body: "Nominal GDP values output at current prices, so it can rise simply because prices rise. Real GDP values output at the prices of a fixed base year, so it changes only when actual production changes. The ratio of nominal to real GDP is the **GDP deflator**, an index of prices. A higher GDP does not necessarily mean higher welfare, because GDP ignores how income is distributed, excludes non-monetary exchanges like household work, and does not account for externalities like pollution.",
          },
        ],
        definitions: [
          { term: "Net factor income from abroad (NFIA)", meaning: "Factor income earned by residents from abroad minus factor income earned by non-residents in the domestic economy." },
          { term: "National Income", meaning: "Net National Product at factor cost: NNP_MP minus net indirect taxes." },
          { term: "Real GDP", meaning: "The value of final goods and services produced in a year, measured at constant (base year) prices." },
          { term: "GDP deflator", meaning: "The ratio of nominal GDP to real GDP, used as an index of the general price level." },
          { term: "Externalities", meaning: "Benefits or harms that a firm or individual causes to others without being paid or penalised for them." },
        ],
        formulas: [
          { label: "GNP", expression: "GNP = GDP + NFIA" },
          { label: "Net Domestic Product", expression: "NDP = GDP − Depreciation" },
          { label: "National Income", expression: "NNP_FC = NNP_MP − (Indirect Taxes − Subsidies)" },
          { label: "Personal Disposable Income", expression: "PDI = PI − Personal Tax Payments − Non-tax Payments" },
          { label: "GDP deflator", expression: "GDP Deflator = (Nominal GDP ÷ Real GDP) × 100" },
        ],
        keyPoints: [
          "Gross − depreciation = Net; Domestic + NFIA = National.",
          "Market price − net indirect taxes = factor cost.",
          "NNP at factor cost is called National Income.",
          "Real GDP uses base-year prices and reflects actual changes in output.",
          "GDP deflator = nominal GDP / real GDP.",
          "GDP is an imperfect welfare index: it ignores distribution, non-monetary exchanges and externalities.",
        ],
        explainers: {
          eli10:
            "Suppose your family's bakery sold 100 cakes last year for ₹100 each, and this year also 100 cakes but for ₹120 each. Your earnings went up, but you didn't actually bake more cakes! Real GDP is like counting cakes, while nominal GDP is like counting rupees. Economists care about real GDP because it shows if the country is truly producing more.",
          realWorld:
            "When the government reports India's GDP growth, it quotes real GDP at 2011-12 prices, so that inflation doesn't make growth look bigger than it is. Money sent home by Indians working in the Gulf counts in India's GNP but not its GDP, since it was earned outside India. And GDP doesn't count the unpaid cooking and caregiving done at home, or subtract the cost of Delhi's winter smog — which is why GDP alone can't tell us how well people live.",
          mnemonic:
            "Use 'Gross → Net: minus Depreciation (G−D=N)', 'Domestic → National: plus NFIA (D+N=N)', and 'Market → Factor: minus Net Indirect Tax (M−NIT=F)'. Apply all three to GDP_MP and you land on National Income, NNP_FC.",
        },
      },
    ),
  ],
  [
    q("q1", "Which of the following is a flow variable?", ["Wealth", "Money supply on 31 March", "National income", "Capital stock"], 2, "National income is measured over a period of time, so it is a flow."),
    q("q2", "GDP at market prices by the expenditure method is:", ["C + I + G + (X − M)", "C + I + G − (X + M)", "W + P + In + R", "C + S + T"], 0, "The expenditure method adds consumption, investment, government purchases and net exports."),
    q("q3", "National Income is the same as:", ["GDP at market prices", "NNP at factor cost", "NDP at market prices", "GNP at market prices"], 1, "National Income is defined as Net National Product at factor cost."),
    q("q4", "Value added by a firm equals:", ["Value of output + intermediate consumption", "Sales − depreciation", "Profit + rent", "Value of output − intermediate consumption"], 3, "Value added is the value of output minus the value of intermediate goods used."),
    q("q5", "If nominal GDP is ₹2,400 crore and real GDP is ₹2,000 crore, the GDP deflator is:", ["83.3", "120", "100", "140"], 1, "GDP deflator = (2400 ÷ 2000) × 100 = 120."),
    q("q6", "Which is NOT a reason why GDP may be a poor index of welfare?", ["Distribution of GDP", "Non-monetary exchanges", "Externalities", "Use of market prices for final goods"], 3, "NCERT lists distribution, non-monetary exchanges and externalities as the limitations; valuing final goods at market prices is simply how GDP is measured."),
  ],
);

const economics: Grade["subjects"][number] = {
  id: "economics",
  name: "Economics",
  icon: "trending",
  color: "orange",
  textbooks: [
    {
      id: "introductory-microeconomics",
      title: "Introductory Microeconomics — Textbook for Class XII",
      chapters: [
        ch(1, "introduction-to-microeconomics", "Introduction", "Introduces the central problems of an economy, the production possibility frontier, and the distinction between microeconomics and macroeconomics.", [
          tp("A Simple Economy", ["Scarcity and Choice", "Central Problems of an Economy"]),
          tp("Production Possibility Frontier", ["Organisation of Economic Activities", "Centrally Planned and Market Economies"]),
          tp("Positive and Normative Economics", ["Positive and Normative Economics", "Microeconomics and Macroeconomics"]),
        ]),
        ch(2, "theory-of-consumer-behaviour", "Theory of Consumer Behaviour", "Explains how consumers make choices using utility analysis and the indifference curve approach, leading to the demand curve.", [
          tp("Utility", ["Cardinal Utility Analysis", "Law of Diminishing Marginal Utility", "Ordinal Utility Analysis"]),
          tp("The Consumer's Budget", ["Budget Set and Budget Line", "Changes in the Budget Set"]),
          tp("Optimal Choice of the Consumer", ["Indifference Curves and their Properties", "Consumer's Equilibrium"]),
          tp("Demand", ["Demand Curve and the Law of Demand", "Normal and Inferior Goods", "Market Demand", "Elasticity of Demand"]),
        ]),
        ch(3, "production-and-costs", "Production and Costs", "Studies the production function, returns to a factor, returns to scale, and short-run and long-run costs.", [
          tp("Production Function", ["The Short Run and the Long Run", "Total, Average and Marginal Product", "Law of Diminishing Marginal Product"]),
          tp("Returns to Scale", ["Increasing, Constant and Decreasing Returns to Scale"]),
          tp("Costs", ["Short Run Costs", "Long Run Costs"]),
        ]),
        ch(4, "the-theory-of-the-firm-under-perfect-competition", "The Theory of the Firm under Perfect Competition", "Explains the features of perfect competition, revenue, profit maximisation and the firm's supply curve.", [
          tp("Perfect Competition: Defining Features", ["Features of Perfect Competition", "Price Taking Behaviour"]),
          tp("Revenue and Profit Maximisation", ["Total, Average and Marginal Revenue", "Conditions for Profit Maximisation"]),
          tp("Supply Curve of a Firm", ["Short Run and Long Run Supply Curve", "Determinants of a Firm's Supply Curve", "Market Supply Curve", "Price Elasticity of Supply"]),
        ]),
        ch(5, "market-equilibrium", "Market Equilibrium", "Studies how demand and supply determine equilibrium price and quantity, shifts in equilibrium, and applications like price ceilings and floors.", [
          tp("Equilibrium, Excess Demand and Excess Supply", ["Market Equilibrium with Fixed Number of Firms", "Market Equilibrium with Free Entry and Exit"]),
          tp("Shifts in Demand and Supply", ["Demand Shift", "Supply Shift", "Simultaneous Shifts"]),
          tp("Applications", ["Price Ceiling", "Price Floor"]),
        ]),
      ],
    },
    {
      id: "introductory-macroeconomics",
      title: "Introductory Macroeconomics — Textbook for Class XII",
      chapters: [
        ch(1, "introduction-to-macroeconomics", "Introduction", "Introduces macroeconomics, its emergence after the Great Depression, and the context of the present book.", [
          tp("Emergence of Macroeconomics", ["The Great Depression", "Keynes and the General Theory"]),
          tp("Context of the Present Book of Macroeconomics", ["Capitalist Economy", "The Four Major Sectors of an Economy"]),
        ]),
        nationalIncomeAccounting,
        ch(3, "money-and-banking", "Money and Banking", "Explains the functions of money, the demand and supply of money, the money creation process of banks, and the policy tools of the RBI.", [
          tp("Functions of Money", ["Medium of Exchange", "Unit of Account", "Store of Value"]),
          tp("Supply of Money", ["Legal Definitions: Narrow and Broad Money", "Currency and Demand Deposits"]),
          tp("Money Creation by Banking System", ["Balance Sheet of a Fictional Bank", "Limits to Credit Creation and Money Multiplier"]),
          tp("Policy Tools to Control Money Supply", ["Open Market Operations", "Bank Rate, Repo and Reverse Repo", "Cash Reserve Ratio and SLR"]),
        ]),
        ch(4, "determination-of-income-and-employment", "Determination of Income and Employment", "Explains aggregate demand and its components, equilibrium output, and the investment multiplier.", [
          tp("Aggregate Demand and its Components", ["Consumption", "Investment"]),
          tp("Determination of Income in Two-sector Model", ["Ex Ante and Ex Post", "Movement along a Curve versus Shift of a Curve", "Macroeconomic Equilibrium"]),
          tp("Effects of an Autonomous Change on Equilibrium Demand", ["Shifts in Aggregate Demand", "The Multiplier Mechanism", "Paradox of Thrift"]),
        ]),
        ch(5, "government-budget-and-the-economy", "Government Budget and the Economy", "Describes the components of the government budget, types of deficits, and fiscal policy.", [
          tp("Government Budget: Meaning and its Components", ["Objectives of Government Budget", "Classification of Receipts", "Classification of Expenditure"]),
          tp("Balanced, Surplus and Deficit Budget", ["Measures of Government Deficit", "Revenue, Fiscal and Primary Deficit"]),
          tp("Fiscal Policy", ["Changes in Government Expenditure and Taxes", "Debt"]),
        ]),
        ch(6, "open-economy-macroeconomics", "Open Economy Macroeconomics", "Covers the balance of payments, foreign exchange markets, and exchange rate systems.", [
          tp("The Balance of Payments", ["Current Account", "Capital Account", "BoP Surplus and Deficit"]),
          tp("The Foreign Exchange Market", ["Foreign Exchange Rate", "Determination of the Exchange Rate", "Merits and Demerits of Flexible and Fixed Exchange Rate Systems", "Managed Floating"]),
        ]),
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* POLITICAL SCIENCE                                                   */
/* ------------------------------------------------------------------ */

const politicalScience: Grade["subjects"][number] = {
  id: "political-science",
  name: "Political Science",
  icon: "landmark",
  color: "rose",
  textbooks: [
    {
      id: "contemporary-world-politics",
      title: "Contemporary World Politics — Textbook for Class XII",
      chapters: [
        ch(1, "the-end-of-bipolarity", "The End of Bipolarity", "Examines the Soviet system, the disintegration of the USSR, shock therapy in post-communist states, and India's relations with them.", [
          tp("What was the Soviet System?", ["Features of the Soviet System", "Gorbachev and the Disintegration"]),
          tp("Why Did the Soviet Union Disintegrate?", ["Causes of Disintegration", "Consequences of Disintegration"]),
          tp("Shock Therapy in Post-Communist Regimes", ["Consequences of Shock Therapy", "Tensions and Conflicts"]),
          tp("India and Post-Communist Countries", ["India's Relations with Russia", "Relations with Central Asian Republics"]),
        ]),
        ch(2, "new-centres-of-power", "New Centres of Power", "Studies the European Union, ASEAN, the rise of China, Japan and South Korea as new centres of economic and political power.", [
          tp("European Union", ["Evolution of the European Union", "Economic and Political Influence"]),
          tp("Association of South East Asian Nations (ASEAN)", ["ASEAN Way", "ASEAN Community and Relations with India"]),
          tp("Rise of the Chinese Economy", ["Economic Reforms in China", "India-China Relations"]),
          tp("Japan and South Korea", ["Japan", "South Korea"]),
        ]),
        ch(3, "contemporary-south-asia", "Contemporary South Asia", "Explores democracy and conflicts in South Asian countries, India-Pakistan relations, and regional cooperation through SAARC.", [
          tp("What is South Asia?", ["The Military and Democracy in Pakistan", "Democracy in Bangladesh", "Monarchy and Democracy in Nepal", "Ethnic Conflict and Democracy in Sri Lanka"]),
          tp("India-Pakistan Conflicts", ["Kashmir Issue", "Water Sharing and Other Disputes"]),
          tp("India and its Other Neighbours", ["Bangladesh, Nepal and Sri Lanka", "Bhutan and Maldives"]),
          tp("Peace and Cooperation", ["SAARC", "SAFTA"]),
        ]),
        ch(4, "international-organisations", "International Organisations", "Discusses the need for international organisations, the UN and its reform, and other organisations like the IMF, World Bank and WTO.", [
          tp("Why International Organisations?", ["Evolution of the UN", "Principal Organs of the UN"]),
          tp("Reform of the UN after the Cold War", ["Reform of Structures and Processes", "Jurisdiction of the UN", "India's Position on UN Reforms"]),
          tp("The UN in a Unipolar World", ["Challenges before the UN", "Relevance of the UN"]),
          tp("Other International Organisations", ["IMF and World Bank", "WTO and IAEA", "NGOs: Amnesty International and Human Rights Watch"]),
        ]),
        ch(5, "security-in-the-contemporary-world", "Security in the Contemporary World", "Contrasts traditional and non-traditional notions of security and examines new sources of threat and India's security strategy.", [
          tp("What is Security?", ["Meaning of Security", "Traditional Notions: External and Internal"]),
          tp("Non-traditional Notions of Security", ["Human Security", "Global Security"]),
          tp("New Sources of Threats", ["Terrorism", "Human Rights, Global Poverty and Health Epidemics"]),
          tp("Cooperative Security and India's Security Strategy", ["Cooperative Security", "India's Security Strategy"]),
        ]),
        ch(6, "environment-and-natural-resources", "Environment and Natural Resources", "Explores environmental concerns in global politics, the common heritage of humankind, common but differentiated responsibilities, and indigenous peoples' rights.", [
          tp("Environmental Concerns in Global Politics", ["Environmental Degradation", "Earth Summit and Sustainable Development"]),
          tp("Protection of Global Commons", ["The Global Commons", "Common but Differentiated Responsibilities", "Kyoto Protocol and India's Stand"]),
          tp("Resource Geopolitics and Indigenous Peoples", ["Resource Geopolitics", "Environmental Movements", "Indigenous Peoples and their Rights"]),
        ]),
        ch(7, "globalisation", "Globalisation", "Explains the concept, causes and political, economic and cultural consequences of globalisation, and resistance to it.", [
          tp("Concept and Causes of Globalisation", ["Concept of Globalisation", "Causes of Globalisation"]),
          tp("Consequences of Globalisation", ["Political Consequences", "Economic Consequences", "Cultural Consequences"]),
          tp("India and Globalisation", ["Globalisation in India", "Resistance to Globalisation"]),
        ]),
      ],
    },
    {
      id: "politics-in-india-since-independence",
      title: "Politics in India since Independence — Textbook for Class XII",
      chapters: [
        ch(1, "challenges-of-nation-building", "Challenges of Nation Building", "Examines the challenges India faced after independence: Partition, integration of princely states, and reorganisation of states.", [
          tp("Challenges for the New Nation", ["Three Challenges", "Partition: Displacement and Rehabilitation"]),
          tp("Integration of Princely States", ["The Problem", "Government's Approach", "Instrument of Accession: Hyderabad and Manipur"]),
          tp("Reorganisation of States", ["Linguistic States", "States Reorganisation Commission"]),
        ]),
        ch(2, "era-of-one-party-dominance", "Era of One-Party Dominance", "Studies the first general elections and the dominance of the Congress party in the early decades of Indian democracy.", [
          tp("Challenge of Building Democracy", ["First Three General Elections"]),
          tp("Congress Dominance in the First Three Elections", ["Nature of Congress Dominance", "Congress as Social and Ideological Coalition", "Tolerance and Management of Factions"]),
          tp("Emergence of Opposition Parties", ["Socialist Party", "Communist Party and Bharatiya Jana Sangh", "Swatantra Party"]),
        ]),
        ch(3, "politics-of-planned-development", "Politics of Planned Development", "Discusses the political choices behind India's model of planned development, the Five Year Plans, and their key controversies.", [
          tp("Political Contestation over Development", ["Ideas of Development", "Planning and the Planning Commission"]),
          tp("The Early Phase of Planning", ["First Five Year Plan", "Rapid Industrialisation: Second Five Year Plan"]),
          tp("Key Controversies and Outcomes", ["Agriculture versus Industry", "Public versus Private Sector", "Foundations and Land Reforms", "Green Revolution"]),
        ]),
        ch(4, "indias-external-relations", "India's External Relations", "Examines India's foreign policy, non-alignment, conflicts with China and Pakistan, and its nuclear policy.", [
          tp("International Context and the Policy of Non-alignment", ["Nehru's Role", "Distance from Two Camps", "Afro-Asian Unity"]),
          tp("Peace and Conflict with China", ["The Chinese Invasion, 1962"]),
          tp("Wars and Peace with Pakistan", ["War of 1965", "Bangladesh War, 1971"]),
          tp("India's Nuclear Programme", ["Nuclear Tests and Policy", "Shifting Alliances in World Politics"]),
        ]),
        ch(5, "challenges-to-and-restoration-of-the-congress-system", "Challenges to and Restoration of the Congress System", "Traces the challenges to Congress after Nehru, the 1967 elections, the Congress split, and its restoration under Indira Gandhi.", [
          tp("Challenge of Political Succession", ["From Nehru to Shastri", "From Shastri to Indira Gandhi"]),
          tp("Fourth General Elections, 1967", ["Context of the Elections", "Non-Congressism and Coalitions", "Defections"]),
          tp("Split in the Congress", ["Indira vs the Syndicate", "Presidential Election, 1969"]),
          tp("The 1971 Election and Restoration of Congress", ["Contest and Outcome", "Restoration?"]),
        ]),
        ch(6, "the-crisis-of-democratic-order", "The Crisis of Democratic Order", "Examines the background, declaration, consequences and lessons of the Emergency of 1975–77.", [
          tp("Background to Emergency", ["Economic Context", "Gujarat and Bihar Movements", "Conflict with Judiciary"]),
          tp("Declaration of Emergency", ["Crisis and Response", "Consequences", "Controversies regarding Emergency"]),
          tp("Politics after Emergency", ["Lok Sabha Elections, 1977", "Janata Government", "Lessons of the Emergency"]),
        ]),
        ch(7, "regional-aspirations", "Regional Aspirations", "Discusses regional movements and aspirations in Jammu and Kashmir, Punjab and the North-East, and how Indian democracy has accommodated them.", [
          tp("Region and the Nation", ["Indian Approach", "Areas of Tension"]),
          tp("Jammu and Kashmir", ["Roots of the Problem", "External and Internal Disputes", "Politics since 1948"]),
          tp("Punjab", ["Political Context", "Cycle of Violence", "Road to Peace"]),
          tp("The North-East", ["Demands for Autonomy", "Secessionist Movements", "Movements against Outsiders"]),
        ]),
        ch(8, "recent-developments-in-indian-politics", "Recent Developments in Indian Politics", "Explores developments since 1989 including coalition politics, the rise of OBCs in politics, communalism, and the emergence of a new consensus.", [
          tp("Context of the 1990s", ["Era of Coalitions", "Alliance Politics"]),
          tp("Political Rise of Other Backward Classes", ["Mandal Implemented", "Political Fallouts"]),
          tp("Communalism, Secularism and Democracy", ["Ayodhya Issue", "Communalism and Democracy"]),
          tp("Emergence of New Consensus", ["Lok Sabha Elections 2004", "Growing Consensus", "Recent Lok Sabha Elections"]),
        ]),
      ],
    },
  ],
};

export const class12: Grade = {
  id: "12",
  label: "Class 12",
  subjects: [physics, chemistry, biology, mathematics, economics, politicalScience],
};

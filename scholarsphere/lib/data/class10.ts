/**
 * Class 10 curriculum (CBSE / NCERT, rationalised textbooks 2023-24 onward).
 *
 * Chapter lists follow the current NCERT contents pages. Topics follow the
 * NCERT section structure. A handful of chapters carry full reading content
 * and a chapter quiz; the rest are outline entries.
 */
import type { Chapter, Grade } from "../types";

/* ------------------------------------------------------------------------ */
/* Science — Chapter 1: Chemical Reactions and Equations (flagship chapter)  */
/* ------------------------------------------------------------------------ */

const chemicalReactionsAndEquations: Chapter = {
  id: "chemical-reactions-and-equations",
  number: 1,
  title: "Chemical Reactions and Equations",
  summary:
    "How to recognise a chemical change, write and balance chemical equations, classify reactions, and see oxidation at work in corrosion and rancidity.",
  topics: [
    {
      id: "what-is-a-chemical-reaction",
      title: "Recognising a Chemical Reaction",
      subtopics: [
        { id: "burning-magnesium-ribbon", title: "Burning of a magnesium ribbon" },
        { id: "observations-that-show-a-reaction", title: "Observations that show a reaction has occurred" },
        { id: "reactants-and-products", title: "Reactants and products" },
      ],
      content: {
        intro:
          "Milk turning sour, food being digested, iron gate rusting and a cracker bursting all have one thing in common: new substances are formed. Such a change is called a chemical change, and the process is called a chemical reaction. In this topic you learn the clues that tell you a chemical reaction has taken place.",
        sections: [
          {
            heading: "Burning a magnesium ribbon",
            body:
              "When a clean magnesium ribbon is held with tongs and burnt, it gives a **dazzling white flame** and turns into a white powder. That white powder is magnesium oxide, a brand-new substance made when magnesium combines with oxygen in the air. The ribbon is first rubbed with sandpaper to remove the dull layer of oxide already sitting on its surface. Because the flame is very bright, you should view it from a distance and never stare at it.",
          },
          {
            heading: "Clues that a reaction has happened",
            body:
              "You cannot see atoms rearranging, but you can see the effects. A chemical reaction usually shows one or more of these signs: a **change in state**, a **change in colour**, **evolution of a gas**, or a **change in temperature**. For example, adding zinc granules to dilute sulphuric acid gives bubbles of hydrogen gas and the flask becomes warm. Mixing lead nitrate and potassium iodide solutions produces a bright yellow solid, lead iodide.",
          },
          {
            heading: "Reactants and products",
            body:
              "The substances that you start with are called **reactants**, and the new substances formed are called **products**. In burning magnesium, magnesium and oxygen are the reactants while magnesium oxide is the product. During a reaction the atoms of the reactants are simply rearranged to form products; no atom is created or destroyed. This idea becomes very important when we learn to balance equations.",
          },
        ],
        definitions: [
          { term: "Chemical reaction", meaning: "A process in which one or more substances change to form new substances with different properties." },
          { term: "Reactants", meaning: "The substances that take part in a chemical reaction; written on the left side of an equation." },
          { term: "Products", meaning: "The new substances formed in a chemical reaction; written on the right side of an equation." },
          { term: "Precipitate", meaning: "An insoluble solid that separates out from a solution during a reaction, such as yellow lead iodide." },
        ],
        formulas: [
          { label: "Burning magnesium", expression: "2Mg + O₂ → 2MgO", note: "Dazzling white flame; white powder formed." },
          { label: "Zinc with dilute sulphuric acid", expression: "Zn + H₂SO₄ → ZnSO₄ + H₂", note: "Gas evolved and flask gets warm." },
          { label: "Lead nitrate with potassium iodide", expression: "Pb(NO₃)₂ + 2KI → PbI₂ + 2KNO₃", note: "Yellow precipitate of PbI₂." },
        ],
        keyPoints: [
          "A chemical reaction forms new substances with new properties.",
          "Signs of a reaction: change in state, change in colour, evolution of gas, change in temperature.",
          "Magnesium ribbon is cleaned with sandpaper to remove its protective oxide layer before burning.",
          "Reactants are the starting substances; products are the substances formed.",
          "Atoms are only rearranged in a reaction; they are neither created nor destroyed.",
        ],
        explainers: {
          eli10:
            "Imagine you have a box of LEGO bricks built into a car. If you pull the car apart and build a house with the same bricks, you have made something totally new, but you did not add or throw away a single brick. A chemical reaction is just like that: the tiny bricks (atoms) rearrange to make new stuff. You can tell it happened because things change colour, fizz, get hot, or turn from liquid to solid.",
          realWorld:
            "Think of making curd at home: warm milk plus a spoon of old curd slowly turns into thick, sour curd that can never turn back into milk. Or watch the gas stove in your kitchen, where LPG burns with a blue flame and the steel vessel gets hot. When your mother squeezes lemon into a glass of milk and it curdles, that too is a chemical change. Each of these shows a clue: a new taste, heat, or a change in state.",
          mnemonic:
            "Remember the four clues with **'Sab Colour Gas Temp'**: State change, Colour change, Gas given off, Temperature change. If you spot any one of these, suspect a chemical reaction. Then check whether a new substance has really formed.",
        },
      },
    },
    {
      id: "chemical-equations",
      title: "Chemical Equations",
      subtopics: [
        { id: "writing-a-chemical-equation", title: "Writing a chemical equation" },
        { id: "balanced-chemical-equations", title: "Balanced chemical equations" },
        { id: "state-symbols-and-conditions", title: "State symbols and reaction conditions" },
      ],
      content: {
        intro:
          "Describing every reaction in long sentences would be slow, so chemists use a shorthand called a chemical equation. It shows the reactants, the products and the direction of change using formulae and an arrow. A good equation is also balanced, so that it obeys the law of conservation of mass.",
        sections: [
          {
            heading: "From sentence to word equation to skeletal equation",
            body:
              "The sentence 'magnesium burns in oxygen to form magnesium oxide' can be written as a **word equation**: magnesium + oxygen → magnesium oxide. Reactants go on the left, products on the right, and the arrow points towards the products; a plus sign separates two or more substances on the same side. Replacing names with formulae gives Mg + O₂ → MgO. Because the number of oxygen atoms is not equal on both sides, this is called a **skeletal chemical equation**.",
          },
          {
            heading: "Why equations must be balanced",
            body:
              "The **law of conservation of mass** says that mass can neither be created nor destroyed in a chemical reaction. So the total number of atoms of each element must be the same on both sides of the arrow. An equation that satisfies this is a **balanced chemical equation**. For example, Zn + H₂SO₄ → ZnSO₄ + H₂ is already balanced, because every element has the same count on both sides.",
          },
          {
            heading: "Balancing step by step (hit-and-trial method)",
            body:
              "Take Fe + H₂O → Fe₃O₄ + H₂. First list the atoms of each element on both sides, then start with the compound that has the most atoms, Fe₃O₄. There are 4 oxygen atoms on the right, so put 4 in front of H₂O; now there are 8 hydrogen atoms on the left, so write 4H₂ on the right. Finally, 3 iron atoms are needed on the left, giving 3Fe + 4H₂O → Fe₃O₄ + 4H₂. **Never change the formula** (the small subscripts) of a substance; change only the numbers written in front of it.",
          },
          {
            heading: "Making equations more informative",
            body:
              "We add **state symbols** to show physical states: (s) for solid, (l) for liquid, (g) for gas and (aq) for an aqueous solution in water. The balanced iron equation then reads 3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g), where (g) on water tells us steam was used. Conditions like temperature, pressure or a catalyst are written above or below the arrow, for example 'sunlight' and 'chlorophyll' in photosynthesis. These details tell a reader exactly how to carry out the reaction.",
          },
        ],
        definitions: [
          { term: "Chemical equation", meaning: "A symbolic representation of a chemical reaction using formulae of reactants and products." },
          { term: "Skeletal equation", meaning: "An unbalanced chemical equation in which the formulae are correct but the atom counts on the two sides are not equal." },
          { term: "Balanced chemical equation", meaning: "An equation in which the number of atoms of each element is equal on both sides." },
          { term: "Law of conservation of mass", meaning: "Mass can neither be created nor destroyed in a chemical reaction." },
          { term: "State symbols", meaning: "(s), (l), (g) and (aq), written after formulae to show solid, liquid, gas and aqueous states." },
        ],
        formulas: [
          { label: "Word equation", expression: "Magnesium + Oxygen → Magnesium oxide" },
          { label: "Skeletal (unbalanced)", expression: "Mg + O₂ → MgO" },
          { label: "Balanced", expression: "2Mg + O₂ → 2MgO" },
          { label: "Iron with steam (balanced with states)", expression: "3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)" },
          { label: "Photosynthesis (with conditions)", expression: "6CO₂(aq) + 12H₂O(l) → C₆H₁₂O₆(aq) + 6O₂(aq) + 6H₂O(l)", note: "Sunlight and chlorophyll written over the arrow." },
        ],
        keyPoints: [
          "Reactants on the left, products on the right, arrow pointing towards products.",
          "A skeletal equation has correct formulae but unequal atom counts.",
          "Balancing follows the law of conservation of mass.",
          "Balance only by changing coefficients, never the subscripts in formulae.",
          "Start balancing with the compound that has the maximum number of atoms.",
          "State symbols (s), (l), (g), (aq) and conditions over the arrow make equations more informative.",
        ],
        explainers: {
          eli10:
            "A chemical equation is like a recipe card written in code. On the left you list what goes in, on the right what comes out, and the arrow means 'turns into'. Balancing is like counting your marbles before and after a game: if you started with 8 red marbles, you must still have 8 at the end, just in different bags. So we add numbers in front of each item until every kind of atom matches on both sides.",
          realWorld:
            "When a shopkeeper at a kirana store tallies the day, the cash in the drawer plus the goods sold must match what he started with. A balanced equation is the same kind of hisaab for atoms. When you light the gas burner, the equation CH₄ + 2O₂ → CO₂ + 2H₂O tells you exactly how many oxygen molecules each methane molecule needs. That is why a burner that gets too little air gives a sooty yellow flame.",
          mnemonic:
            "Use **'Big first, O and H last'**: start with the biggest formula, balance metals and other atoms, and leave oxygen and hydrogen for the end. And remember **'Front number, not foot number'**: you may change the big number in front of a formula, never the small number at its foot (the subscript).",
        },
      },
    },
    {
      id: "types-of-chemical-reactions",
      title: "Types of Chemical Reactions",
      subtopics: [
        { id: "combination-reaction", title: "Combination reaction" },
        { id: "decomposition-reaction", title: "Decomposition reaction" },
        { id: "displacement-reaction", title: "Displacement reaction" },
        { id: "double-displacement-reaction", title: "Double displacement reaction" },
      ],
      content: {
        intro:
          "Thousands of reactions happen around us, but most of them fit into a few families. Grouping reactions into types helps you predict products and remember equations. The four main types are combination, decomposition, displacement and double displacement.",
        sections: [
          {
            heading: "Combination reactions",
            body:
              "In a **combination reaction**, two or more reactants join to form a single product. Adding water to quicklime (calcium oxide) forms slaked lime (calcium hydroxide) and releases a lot of heat. The slaked lime used for whitewashing slowly reacts with carbon dioxide in air to form a thin, shiny layer of calcium carbonate on walls after two or three days. Reactions that release heat, like this one, are called **exothermic**; burning of natural gas and respiration are other exothermic reactions.",
          },
          {
            heading: "Decomposition reactions",
            body:
              "In a **decomposition reaction**, a single reactant breaks down into two or more simpler products. It needs energy, which can come from heat (**thermal decomposition**), electricity (**electrolysis**) or light (**photolytic decomposition**). Heating green ferrous sulphate crystals gives a brown solid and a smell of burning sulphur, while heating limestone gives quicklime, used in making cement. Silver chloride turns grey in sunlight as it decomposes into silver and chlorine, which is why it is used in black and white photography. Because they absorb energy, most decomposition reactions are **endothermic**.",
          },
          {
            heading: "Displacement reactions",
            body:
              "In a **displacement reaction**, a more reactive element pushes out (displaces) a less reactive element from its compound. When an iron nail is dipped in blue copper sulphate solution, the nail gets a brownish coating of copper and the blue colour fades as ferrous sulphate forms. Zinc and lead can also displace copper from its compounds. The reverse does not happen, because copper is less reactive than iron, zinc or lead.",
          },
          {
            heading: "Double displacement reactions",
            body:
              "In a **double displacement reaction**, two compounds exchange their ions to form two new compounds. Mixing sodium sulphate and barium chloride solutions immediately forms a white, insoluble substance, barium sulphate. Any reaction that produces an insoluble solid (a **precipitate**) is also called a **precipitation reaction**. The yellow lead iodide formed from lead nitrate and potassium iodide is another example.",
          },
        ],
        definitions: [
          { term: "Combination reaction", meaning: "A reaction in which two or more substances combine to form a single product." },
          { term: "Decomposition reaction", meaning: "A reaction in which a single reactant breaks down into two or more simpler products." },
          { term: "Displacement reaction", meaning: "A reaction in which a more reactive element displaces a less reactive element from its compound." },
          { term: "Double displacement reaction", meaning: "A reaction in which two compounds exchange ions to form two new compounds." },
          { term: "Exothermic / Endothermic", meaning: "Exothermic reactions release heat; endothermic reactions absorb energy." },
        ],
        formulas: [
          { label: "Combination (quicklime + water)", expression: "CaO(s) + H₂O(l) → Ca(OH)₂(aq) + Heat" },
          { label: "Whitewash shine", expression: "Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s) + H₂O(l)" },
          { label: "Thermal decomposition of ferrous sulphate", expression: "2FeSO₄(s) → Fe₂O₃(s) + SO₂(g) + SO₃(g)" },
          { label: "Thermal decomposition of limestone", expression: "CaCO₃(s) → CaO(s) + CO₂(g)" },
          { label: "Heating lead nitrate", expression: "2Pb(NO₃)₂(s) → 2PbO(s) + 4NO₂(g) + O₂(g)", note: "Brown fumes of nitrogen dioxide." },
          { label: "Electrolysis of water", expression: "2H₂O(l) → 2H₂(g) + O₂(g)", note: "Volume of hydrogen is double that of oxygen." },
          { label: "Photolytic decomposition", expression: "2AgCl(s) → 2Ag(s) + Cl₂(g)", note: "In sunlight; white turns grey." },
          { label: "Displacement", expression: "Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)" },
          { label: "Double displacement (precipitation)", expression: "Na₂SO₄(aq) + BaCl₂(aq) → BaSO₄(s) + 2NaCl(aq)" },
        ],
        keyPoints: [
          "Combination: A + B → AB. Decomposition: AB → A + B.",
          "Decomposition needs energy as heat, electricity or light, so it is usually endothermic.",
          "Respiration, burning of fuels and CaO + water are exothermic reactions.",
          "A more reactive metal displaces a less reactive metal from its salt solution.",
          "Double displacement is an exchange of ions; if a precipitate forms it is a precipitation reaction.",
          "Silver chloride and silver bromide decompose in light, which is used in black and white photography.",
        ],
        explainers: {
          eli10:
            "Think of reactions as things that happen to friends in a playground. Combination is two kids holding hands to become a pair. Decomposition is a pair letting go and running off separately. Displacement is a stronger kid cutting in and taking someone's partner away, and double displacement is two pairs swapping partners at a dance.",
          realWorld:
            "Before Diwali, many families whitewash their homes with 'chuna' (slaked lime) made by adding water to quicklime, and the bucket gets hot: a combination reaction. The walls turn shiny after a few days as the lime reacts with carbon dioxide from the air. In a cement factory, limestone is heated to get quicklime by decomposition. And an old iron nail left in a blue copper sulphate solution in the school lab turns coppery-brown by displacement.",
          mnemonic:
            "Use the letters: **Combination A+B→AB, Decomposition AB→A+B, Displacement A+BC→AC+B, Double displacement AB+CD→AD+CB**. For the energy sources of decomposition, think **'HEL'**: Heat, Electricity, Light. And for displacement, 'the bully is always more reactive'.",
        },
      },
    },
    {
      id: "oxidation-reduction-and-effects",
      title: "Oxidation, Reduction and their Effects",
      subtopics: [
        { id: "oxidation-and-reduction", title: "Oxidation and reduction" },
        { id: "redox-reactions", title: "Redox reactions, oxidising and reducing agents" },
        { id: "corrosion", title: "Corrosion" },
        { id: "rancidity", title: "Rancidity" },
      ],
      content: {
        intro:
          "Some reactions involve the gain or loss of oxygen or hydrogen. When a substance gains oxygen it is oxidised, and when it loses oxygen it is reduced. Oxidation also explains why iron rusts and why chips go stale, so this topic connects the lab to your kitchen.",
        sections: [
          {
            heading: "Oxidation and reduction",
            body:
              "Heating copper powder in a china dish turns its surface **black**, because copper combines with oxygen to form copper oxide. If hydrogen gas is passed over this hot copper oxide, the black coating turns brown again as copper metal is formed and water is produced. So, **oxidation** is the gain of oxygen or loss of hydrogen, and **reduction** is the loss of oxygen or gain of hydrogen. In the second reaction, copper oxide loses oxygen (reduced) while hydrogen gains oxygen (oxidised).",
          },
          {
            heading: "Redox reactions",
            body:
              "Oxidation and reduction always happen together: if one substance is oxidised, another is reduced in the same reaction. Such reactions are called **redox reactions**. The substance that gives oxygen (or removes hydrogen) is the **oxidising agent**, and the substance that removes oxygen (or gives hydrogen) is the **reducing agent**. In ZnO + C → Zn + CO, zinc oxide is reduced and carbon is oxidised, so carbon is the reducing agent.",
          },
          {
            heading: "Corrosion",
            body:
              "When a metal is attacked by moisture, air, acids and similar substances around it, it slowly gets eaten away; this is **corrosion**. Iron develops a reddish-brown coating called **rust**, silver articles develop a black coating, and copper develops a green coating. Corrosion damages car bodies, bridges, iron railings, ships and anything made of metal, costing a great deal of money to repair and replace every year. You will study ways to prevent it, such as painting, oiling and galvanising, in the chapter on metals.",
          },
          {
            heading: "Rancidity",
            body:
              "When fats and oils are oxidised, they become **rancid**, and their smell and taste change so the food becomes unpleasant to eat. To slow this down, manufacturers add **antioxidants** to foods that contain fats and oil. Storing food in **airtight containers** also helps by keeping oxygen away. Chips packets are flushed with **nitrogen**, an unreactive gas, to stop the chips from getting oxidised.",
          },
        ],
        definitions: [
          { term: "Oxidation", meaning: "Gain of oxygen or loss of hydrogen by a substance during a reaction." },
          { term: "Reduction", meaning: "Loss of oxygen or gain of hydrogen by a substance during a reaction." },
          { term: "Redox reaction", meaning: "A reaction in which oxidation and reduction take place simultaneously." },
          { term: "Corrosion", meaning: "The gradual eating away of a metal by the action of air, moisture, acids and other substances around it." },
          { term: "Rancidity", meaning: "Oxidation of fats and oils in food, which changes their smell and taste." },
        ],
        formulas: [
          { label: "Oxidation of copper", expression: "2Cu + O₂ → 2CuO", note: "Brown copper turns black on heating." },
          { label: "Reduction of copper oxide", expression: "CuO + H₂ → Cu + H₂O", note: "CuO is reduced; H₂ is oxidised." },
          { label: "Redox with carbon", expression: "ZnO + C → Zn + CO" },
          { label: "Redox with hydrochloric acid", expression: "MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂" },
        ],
        keyPoints: [
          "Oxidation: gain of O or loss of H. Reduction: loss of O or gain of H.",
          "Oxidation and reduction occur together in redox reactions.",
          "The oxidising agent gets reduced; the reducing agent gets oxidised.",
          "Rust on iron is reddish-brown; silver turns black; copper turns green.",
          "Rancidity is prevented by antioxidants, airtight containers and flushing packets with nitrogen.",
          "Refrigeration also slows rancidity by lowering the rate of oxidation.",
        ],
        explainers: {
          eli10:
            "Oxygen is like a very clingy friend who loves to stick to things. When oxygen sticks to something, we say that thing got oxidised. When oxygen is pulled away from something, that thing got reduced. The iron swing in the park turning orange-brown and old oil smelling bad are both because oxygen quietly stuck to them over time.",
          realWorld:
            "In the monsoon, the iron grill on your balcony gets reddish-brown patches of rust, and your grandmother's silver payal turns dark if kept out. A packet of namkeen left open for a week tastes stale and smells odd because its oil became rancid. That is why chips bags are puffed up with nitrogen and why achaar is kept in airtight jars. Even the old copper vessel in a temple slowly gets a green layer.",
          mnemonic:
            "For Class 10, remember **'Oxidation: Oxygen On, Hydrogen Off'** and the reverse for reduction. You may also meet **OIL RIG** (Oxidation Is Loss, Reduction Is Gain) later in Class 11, where it refers to electrons. And for agents: 'the oxidising agent gives away its oxygen and itself gets reduced'.",
        },
      },
    },
  ],
  quiz: [
    {
      id: "cre-q1",
      question: "Why is a magnesium ribbon cleaned with sandpaper before burning it?",
      options: [
        "To make it thinner so it burns faster",
        "To remove the layer of magnesium oxide on its surface",
        "To add oxygen to the ribbon",
        "To make its flame coloured",
      ],
      answer: 1,
      explanation: "Magnesium gets coated with a layer of magnesium oxide in air; this layer prevents it from burning easily, so it is rubbed off.",
    },
    {
      id: "cre-q2",
      question: "Which of these is the correctly balanced equation for iron reacting with steam?",
      options: [
        "Fe + H₂O → Fe₃O₄ + H₂",
        "3Fe + H₂O → Fe₃O₄ + H₂",
        "3Fe + 4H₂O → Fe₃O₄ + 4H₂",
        "Fe + 4H₂O → Fe₃O₄ + 4H₂",
      ],
      answer: 2,
      explanation: "3Fe + 4H₂O → Fe₃O₄ + 4H₂ has 3 Fe, 8 H and 4 O atoms on each side.",
    },
    {
      id: "cre-q3",
      question: "CaO(s) + H₂O(l) → Ca(OH)₂(aq) + Heat is an example of a:",
      options: [
        "Combination reaction that is exothermic",
        "Decomposition reaction that is endothermic",
        "Displacement reaction",
        "Double displacement reaction",
      ],
      answer: 0,
      explanation: "Two reactants form one product and heat is released, so it is an exothermic combination reaction.",
    },
    {
      id: "cre-q4",
      question: "When an iron nail is kept in copper sulphate solution, the blue colour fades. Why?",
      options: [
        "Copper displaces iron from iron sulphate",
        "The solution evaporates",
        "Iron is oxidised by air",
        "Iron displaces copper, forming pale green ferrous sulphate",
      ],
      answer: 3,
      explanation: "Iron is more reactive than copper: Fe + CuSO₄ → FeSO₄ + Cu, so blue CuSO₄ is replaced by pale green FeSO₄.",
    },
    {
      id: "cre-q5",
      question: "Silver chloride turns grey in sunlight. This is a:",
      options: [
        "Thermal decomposition",
        "Photolytic decomposition",
        "Combination reaction",
        "Double displacement reaction",
      ],
      answer: 1,
      explanation: "Light breaks 2AgCl into 2Ag and Cl₂, a decomposition driven by light, used in black and white photography.",
    },
    {
      id: "cre-q6",
      question: "In the reaction CuO + H₂ → Cu + H₂O, which substance is oxidised?",
      options: ["CuO", "Cu", "H₂", "H₂O"],
      answer: 2,
      explanation: "Hydrogen gains oxygen to become water, so H₂ is oxidised; CuO loses oxygen and is reduced.",
    },
    {
      id: "cre-q7",
      question: "Mixing sodium sulphate and barium chloride solutions gives a white precipitate of:",
      options: ["Sodium chloride", "Barium chloride", "Sodium sulphate", "Barium sulphate"],
      answer: 3,
      explanation: "Na₂SO₄ + BaCl₂ → BaSO₄ + 2NaCl; the insoluble BaSO₄ appears as a white precipitate in this double displacement reaction.",
    },
    {
      id: "cre-q8",
      question: "Why are bags of chips flushed with nitrogen gas?",
      options: [
        "To prevent the oil in chips from being oxidised",
        "To make the chips crisper by adding nitrogen",
        "To kill germs by heating the packet",
        "To make the packet heavier",
      ],
      answer: 0,
      explanation: "Nitrogen is unreactive and pushes out oxygen, preventing rancidity of the fats and oils in chips.",
    },
  ],
};

/* ------------------------------------------------------------------------ */
/* Science — Chapter 9: Light – Reflection and Refraction                    */
/* ------------------------------------------------------------------------ */

const lightReflectionAndRefraction: Chapter = {
  id: "light-reflection-and-refraction",
  number: 9,
  title: "Light – Reflection and Refraction",
  summary:
    "Laws of reflection and refraction, image formation by spherical mirrors and lenses, the mirror and lens formulae, refractive index and power of a lens.",
  topics: [
    {
      id: "reflection-of-light",
      title: "Reflection of Light",
      subtopics: [
        { id: "laws-of-reflection", title: "Laws of reflection" },
        { id: "image-in-a-plane-mirror", title: "Image formed by a plane mirror" },
      ],
      content: {
        intro:
          "We see objects because light from them reaches our eyes. A highly polished surface such as a mirror sends back most of the light that falls on it; this bouncing back is called reflection. Light travels in straight lines, and reflection follows two simple laws.",
        sections: [
          {
            heading: "The two laws of reflection",
            body:
              "The ray of light that falls on a mirror is the **incident ray**, the ray that bounces back is the **reflected ray**, and the line perpendicular to the mirror at the point of incidence is the **normal**. The first law says that the **angle of incidence equals the angle of reflection**. The second law says that the incident ray, the normal and the reflected ray all lie in the **same plane**. These laws apply to every reflecting surface, flat or curved.",
          },
          {
            heading: "The image in a plane mirror",
            body:
              "A plane (flat) mirror always forms an image that is **virtual and erect**, meaning it cannot be caught on a screen and is the right way up. The image is the **same size** as the object and is as far behind the mirror as the object is in front of it. The image is also **laterally inverted**, which means left and right are swapped. That is why your right hand appears as the left hand of your mirror image.",
          },
        ],
        definitions: [
          { term: "Reflection", meaning: "The bouncing back of light from a polished surface into the same medium." },
          { term: "Angle of incidence (∠i)", meaning: "The angle between the incident ray and the normal at the point of incidence." },
          { term: "Angle of reflection (∠r)", meaning: "The angle between the reflected ray and the normal." },
          { term: "Virtual image", meaning: "An image that cannot be obtained on a screen; rays only appear to meet." },
          { term: "Lateral inversion", meaning: "Sideways reversal of an image, where left appears as right and vice versa." },
        ],
        formulas: [{ label: "First law of reflection", expression: "∠i = ∠r" }],
        keyPoints: [
          "Angle of incidence equals angle of reflection.",
          "Incident ray, normal and reflected ray lie in the same plane.",
          "Plane mirror images are virtual, erect, same size and laterally inverted.",
          "Image distance behind a plane mirror equals object distance in front of it.",
          "The laws of reflection hold for plane and spherical mirrors alike.",
        ],
        explainers: {
          eli10:
            "Throw a ball at a wall at a slant and it bounces off at the same slant on the other side. Light does exactly the same thing when it hits a mirror. That is the whole rule: it goes out at the same angle it came in. And your mirror twin always raises the 'wrong' hand because the mirror flips left and right.",
          realWorld:
            "Look at the front of an ambulance on an Indian road: the word AMBULANCE is painted in mirror-reversed letters. The driver ahead sees it in the rear-view mirror, which flips it back so it reads AMBULANCE. Your dressing-table mirror shows you the same-size, upright image every morning. Even a still pond near a temple reflects the building by the same laws.",
          mnemonic:
            "**'In equals Out, all in one plane'**: angle in equals angle out, and all three lines share one flat sheet. For a plane mirror image, remember **VESL**: Virtual, Erect, Same size, Laterally inverted.",
        },
      },
    },
    {
      id: "spherical-mirrors",
      title: "Spherical Mirrors",
      subtopics: [
        { id: "terms-for-spherical-mirrors", title: "Pole, centre of curvature, focus and focal length" },
        { id: "image-formation-by-spherical-mirrors", title: "Image formation by concave and convex mirrors" },
        { id: "sign-convention-for-mirrors", title: "New Cartesian sign convention" },
        { id: "mirror-formula-and-magnification", title: "Mirror formula and magnification" },
      ],
      content: {
        intro:
          "A spherical mirror is part of a hollow sphere. If the reflecting surface curves inward, like the inside of a spoon, it is a concave mirror; if it bulges outward, like the back of a spoon, it is a convex mirror. The kind and position of the image depends on where the object is kept.",
        sections: [
          {
            heading: "Important terms",
            body:
              "The centre of the mirror's surface is the **pole (P)**, and the centre of the sphere it is part of is the **centre of curvature (C)**. The straight line through P and C is the **principal axis**. Rays parallel to the principal axis meet (concave) or appear to come from (convex) a point called the **principal focus (F)**. The distance PF is the **focal length (f)** and the radius of curvature R is twice the focal length: **R = 2f**.",
          },
          {
            heading: "Images formed by a concave mirror",
            body:
              "For an object far away (at infinity) a concave mirror forms a tiny, real, inverted image at F. As the object moves closer, beyond C, at C, and between C and F, the real, inverted image moves further out and grows: diminished, then same size at C, then enlarged beyond C. With the object at F the image is at infinity. Only when the object is **between P and F** is the image **virtual, erect and enlarged**, behind the mirror. This is why concave mirrors are used in torches and headlights (bulb at F gives a parallel beam), as shaving mirrors, by dentists, and to concentrate sunlight in solar furnaces.",
          },
          {
            heading: "Images formed by a convex mirror",
            body:
              "A convex mirror **always** forms a virtual, erect and diminished image behind the mirror, between P and F, wherever the object is placed. For an object at infinity the image is a point at F. Because the image is small, a convex mirror shows a **much wider field of view**. That is why convex mirrors are used as rear-view mirrors in vehicles.",
          },
          {
            heading: "Sign convention and the mirror formula",
            body:
              "In the **New Cartesian sign convention**, the pole is the origin and the object is always placed to the left, so distances measured along the incident light (to the right) are positive and against it (to the left) are negative. Heights above the principal axis are positive and below are negative. So the object distance u is negative, the focal length of a concave mirror is negative and that of a convex mirror is positive. The **mirror formula** 1/v + 1/u = 1/f relates these distances, and magnification m = h′/h = −v/u tells us how big the image is; a negative m means a real, inverted image.",
          },
        ],
        definitions: [
          { term: "Pole (P)", meaning: "The centre of the reflecting surface of a spherical mirror." },
          { term: "Centre of curvature (C)", meaning: "The centre of the sphere of which the mirror is a part; it lies in front of a concave mirror and behind a convex mirror." },
          { term: "Principal focus (F)", meaning: "The point where rays parallel to the principal axis meet after reflection (concave) or appear to diverge from (convex)." },
          { term: "Focal length (f)", meaning: "The distance between the pole and the principal focus." },
          { term: "Magnification (m)", meaning: "The ratio of the height of the image to the height of the object." },
        ],
        formulas: [
          { label: "Radius of curvature", expression: "R = 2f" },
          { label: "Mirror formula", expression: "1/v + 1/u = 1/f" },
          { label: "Magnification (mirror)", expression: "m = h′/h = −v/u", note: "m negative → real, inverted; m positive → virtual, erect." },
        ],
        keyPoints: [
          "Concave mirror: converging; convex mirror: diverging.",
          "R = 2f for spherical mirrors of small aperture.",
          "Concave mirror gives a virtual, erect, enlarged image only when the object is between P and F.",
          "Convex mirror always gives a virtual, erect, diminished image.",
          "Object distance u is always negative in the New Cartesian sign convention.",
          "f is negative for a concave mirror and positive for a convex mirror.",
        ],
        explainers: {
          eli10:
            "Take a shiny steel spoon. Look into the hollow side and your face may look upside down, because that side is a concave mirror that bends light inward. Flip the spoon and look at the bulging side: you look small and upright, because that convex side spreads light out. Bring the hollow side really close to your nose and suddenly you look big and upright!",
          realWorld:
            "The side mirror on an auto-rickshaw or a two-wheeler is convex, which is why the label says objects are closer than they appear: it shows a small image of a wide stretch of road. The mirror inside a torch or a car headlight is concave, with the bulb at its focus, to throw a strong parallel beam. Your dentist uses a small concave mirror to see an enlarged image of your teeth. Large concave mirrors are also used in solar cookers and solar furnaces to focus sunlight.",
          mnemonic:
            "**'Concave Caves In, Convex Comes out'** helps you tell the shapes apart. For uses: **'Convex for Cars, Concave for Close-ups'**: rear-view mirrors are convex, shaving and dentist mirrors are concave. And for the formula, mirrors **add** (1/v + 1/u) while lenses **subtract** (1/v − 1/u).",
        },
      },
    },
    {
      id: "refraction-of-light",
      title: "Refraction of Light",
      subtopics: [
        { id: "refraction-through-glass-slab", title: "Refraction through a rectangular glass slab" },
        { id: "laws-of-refraction", title: "Laws of refraction and Snell's law" },
        { id: "refractive-index", title: "The refractive index" },
      ],
      content: {
        intro:
          "A pencil in a glass of water looks bent at the surface, and the bottom of a tank looks raised. These happen because light changes direction when it goes from one transparent medium to another. This bending of light is called refraction, and it happens because light travels at different speeds in different media.",
        sections: [
          {
            heading: "Refraction through a glass slab",
            body:
              "When a ray of light enters a rectangular glass slab from air, it bends **towards the normal**, because it slows down in the optically denser glass. When it comes out into air again, it bends **away from the normal**. Since the two opposite faces are parallel, the emergent ray is **parallel to the incident ray** but shifted sideways a little; this shift is called lateral displacement. A ray that hits the surface along the normal passes straight through without bending.",
          },
          {
            heading: "Laws of refraction",
            body:
              "The first law says that the incident ray, the refracted ray and the normal at the point of incidence all lie in the **same plane**. The second law, **Snell's law**, says that for a given pair of media and a given colour of light, sin i / sin r is a constant. This constant is the refractive index of the second medium with respect to the first. So the amount of bending depends on which two media are involved.",
          },
          {
            heading: "The refractive index",
            body:
              "The refractive index tells us how much light slows down in a medium. The **absolute refractive index** of a medium is the speed of light in air (or vacuum), about 3 × 10⁸ m/s, divided by the speed of light in that medium. Water has a refractive index of about 1.33, crown glass about 1.52 and diamond about 2.42, the highest in the NCERT table. A medium with a larger refractive index is **optically denser**, even if it is not denser in mass, as kerosene (1.44) is optically denser than water though it is lighter.",
          },
        ],
        definitions: [
          { term: "Refraction", meaning: "The change in direction of light when it passes obliquely from one transparent medium to another." },
          { term: "Snell's law", meaning: "For a given pair of media and colour of light, sin i / sin r is constant." },
          { term: "Refractive index (n₂₁)", meaning: "Speed of light in medium 1 divided by speed of light in medium 2." },
          { term: "Absolute refractive index", meaning: "Speed of light in vacuum (or air) divided by the speed of light in the medium, nₘ = c/v." },
          { term: "Optically denser medium", meaning: "The medium with the larger refractive index, in which light travels slower." },
        ],
        formulas: [
          { label: "Snell's law", expression: "sin i / sin r = n₂₁ (constant)" },
          { label: "Relative refractive index", expression: "n₂₁ = v₁ / v₂" },
          { label: "Absolute refractive index", expression: "nₘ = c / v", note: "c ≈ 3 × 10⁸ m/s" },
        ],
        keyPoints: [
          "Light bends towards the normal when entering a denser medium and away from it when entering a rarer medium.",
          "For a glass slab, the emergent ray is parallel to the incident ray but laterally displaced.",
          "Snell's law: sin i / sin r = constant.",
          "Refractive index = speed in first medium / speed in second medium.",
          "Diamond (2.42) has the highest refractive index in the NCERT table; water is 1.33; crown glass 1.52.",
        ],
        explainers: {
          eli10:
            "Imagine pushing a toy car from a smooth floor onto a carpet at a slant. The wheel that touches the carpet first slows down, so the car turns a little. Light does the same thing when it goes from air into water or glass: it slows down and turns. That turning is refraction, and it is why a straw in your glass looks broken.",
          realWorld:
            "Drop a coin into a steel bucket of water at home and it looks closer to the surface than it really is. A lemon in a glass of nimbu-pani looks bigger from the side. When you stand in a swimming pool, your legs look shorter. All these are tricks of refraction, as light bends when leaving water and entering air.",
          mnemonic:
            "**'FST: Fast to Slow bends Towards'**: going from a faster (rarer) medium to a slower (denser) one, light bends towards the normal; slow to fast, it bends away. And **n = c/v**: 'n is how many times slower light gets'.",
        },
      },
    },
    {
      id: "refraction-by-spherical-lenses",
      title: "Refraction by Spherical Lenses",
      subtopics: [
        { id: "convex-and-concave-lenses", title: "Convex and concave lenses" },
        { id: "image-formation-by-lenses", title: "Image formation by lenses" },
        { id: "lens-formula-and-magnification", title: "Lens formula and magnification" },
        { id: "power-of-a-lens", title: "Power of a lens" },
      ],
      content: {
        intro:
          "A lens is a piece of transparent material bound by two surfaces, at least one of which is spherical. Lenses bend light to form images and are used in spectacles, cameras, microscopes and telescopes. A convex lens brings light together, while a concave lens spreads it out.",
        sections: [
          {
            heading: "Convex and concave lenses",
            body:
              "A **convex lens** is thicker in the middle than at the edges and converges parallel rays to a real focus, so it is a **converging lens**. A **concave lens** is thicker at the edges and makes parallel rays spread out as if from a point, so it is a **diverging lens**. A lens has two principal foci, F₁ and F₂, one on each side, and its centre is the **optical centre (O)**. A ray passing through the optical centre goes straight through without deviation.",
          },
          {
            heading: "Images formed by lenses",
            body:
              "A convex lens forms a **real and inverted** image for most positions of the object, and its size changes with position: diminished beyond 2F₁, same size at 2F₁, enlarged between F₁ and 2F₁. When the object is **between F₁ and O**, the image is **virtual, erect and enlarged** on the same side, which is how a magnifying glass works. A concave lens always forms a **virtual, erect and diminished** image on the same side as the object, between F₁ and O.",
          },
          {
            heading: "Lens formula and magnification",
            body:
              "Lenses use the same New Cartesian sign convention, measured from the optical centre. The focal length of a convex lens is **positive** and that of a concave lens is **negative**. The **lens formula** is 1/v − 1/u = 1/f, and magnification is m = h′/h = v/u. Notice the minus sign sits in the formula for lenses, whereas for mirrors it sits in the magnification.",
          },
          {
            heading: "Power of a lens",
            body:
              "The **power** of a lens measures how strongly it converges or diverges light, and it is the reciprocal of its focal length: P = 1/f, with f in metres. Its SI unit is the **dioptre (D)**, where 1 D is the power of a lens of focal length 1 m. A convex lens has positive power and a concave lens negative power, so an optician's prescription of −2.0 D means a concave lens of focal length −0.5 m. When lenses are placed in contact, their powers simply add: P = P₁ + P₂ + P₃ + …",
          },
        ],
        definitions: [
          { term: "Convex lens", meaning: "A lens thicker at the middle than at the edges; it converges light." },
          { term: "Concave lens", meaning: "A lens thicker at the edges than at the middle; it diverges light." },
          { term: "Optical centre (O)", meaning: "The central point of a lens; a ray through it passes undeviated." },
          { term: "Power of a lens", meaning: "The reciprocal of focal length in metres; the degree of convergence or divergence of light." },
          { term: "Dioptre (D)", meaning: "SI unit of power; the power of a lens of focal length 1 metre." },
        ],
        formulas: [
          { label: "Lens formula", expression: "1/v − 1/u = 1/f" },
          { label: "Magnification (lens)", expression: "m = h′/h = v/u" },
          { label: "Power of a lens", expression: "P = 1/f", note: "f in metres; unit dioptre (D)." },
          { label: "Lenses in contact", expression: "P = P₁ + P₂ + P₃ + …" },
        ],
        keyPoints: [
          "Convex lens: converging, f and P positive. Concave lens: diverging, f and P negative.",
          "Convex lens gives a virtual, erect, enlarged image only when the object is between F₁ and O.",
          "Concave lens always gives a virtual, erect, diminished image.",
          "Lens formula: 1/v − 1/u = 1/f; magnification m = v/u.",
          "Power P = 1/f (in metres), measured in dioptres.",
          "Powers of lenses in contact add algebraically.",
        ],
        explainers: {
          eli10:
            "A convex lens is like a friendly team captain who gathers all the players (light rays) into one spot. That is why a magnifying glass can focus sunlight into a hot bright dot. A concave lens is like a sprinkler that spreads water out in all directions. Power tells you how strong the lens is at gathering or spreading: short focal length means strong lens.",
          realWorld:
            "When an optometrist at a local eye clinic writes '+1.5 D' for your grandfather's reading glasses, that is a convex lens with focal length about 0.67 m to help him read the newspaper. A classmate with '−2.0 D' glasses wears concave lenses to see the blackboard clearly. The magnifying glass a watch-repair uncle uses is a convex lens held close to tiny parts. Phone cameras also contain several small lenses working together.",
          mnemonic:
            "**'Lenses Lose, Mirrors Mix'**: lens formula has a minus (1/v − 1/u), mirror formula has a plus (1/v + 1/u). For power, **'Plus is Pinch-together'**: positive power converges (convex), negative power spreads (concave). And **P = 1/f in metres**, so convert centimetres first.",
        },
      },
    },
  ],
  quiz: [
    {
      id: "light-q1",
      question: "The radius of curvature of a spherical mirror is 20 cm. What is its focal length?",
      options: ["40 cm", "20 cm", "10 cm", "5 cm"],
      answer: 2,
      explanation: "R = 2f, so f = R/2 = 20/2 = 10 cm.",
    },
    {
      id: "light-q2",
      question: "Which mirror is used as a rear-view mirror in vehicles?",
      options: ["Convex mirror", "Concave mirror", "Plane mirror", "Any curved mirror"],
      answer: 0,
      explanation: "A convex mirror always gives an erect, diminished image and a wider field of view.",
    },
    {
      id: "light-q3",
      question: "Where should an object be placed in front of a concave mirror to get a virtual, erect and enlarged image?",
      options: ["At infinity", "At C", "Beyond C", "Between P and F"],
      answer: 3,
      explanation: "Only when the object is between the pole and the focus does a concave mirror form a virtual, erect, enlarged image.",
    },
    {
      id: "light-q4",
      question: "A ray of light goes from air into glass obliquely. It will:",
      options: [
        "Bend away from the normal",
        "Bend towards the normal",
        "Go straight without bending",
        "Be reflected back completely",
      ],
      answer: 1,
      explanation: "Glass is optically denser than air, so light slows down and bends towards the normal.",
    },
    {
      id: "light-q5",
      question: "The refractive index of diamond is 2.42. This means:",
      options: [
        "Light is 2.42 times faster in diamond than in air",
        "Diamond is 2.42 times heavier than water",
        "The speed of light in air is 2.42 times its speed in diamond",
        "Diamond reflects 2.42 times more light",
      ],
      answer: 2,
      explanation: "Absolute refractive index n = c/v, so light in air is 2.42 times faster than in diamond.",
    },
    {
      id: "light-q6",
      question: "What is the power of a concave lens of focal length 2 m?",
      options: ["+2 D", "−2 D", "+0.5 D", "−0.5 D"],
      answer: 3,
      explanation: "P = 1/f = 1/(−2 m) = −0.5 D; concave lenses have negative focal length and power.",
    },
    {
      id: "light-q7",
      question: "Which is the correct lens formula?",
      options: ["1/v − 1/u = 1/f", "1/v + 1/u = 1/f", "v − u = f", "1/u − 1/v = 1/f"],
      answer: 0,
      explanation: "For lenses, 1/v − 1/u = 1/f; the plus sign version is the mirror formula.",
    },
    {
      id: "light-q8",
      question: "A concave lens always forms an image that is:",
      options: [
        "Real, inverted and enlarged",
        "Virtual, erect and diminished",
        "Real, erect and same size",
        "Virtual, inverted and enlarged",
      ],
      answer: 1,
      explanation: "Wherever the object is placed, a concave lens forms a virtual, erect, diminished image between F₁ and O.",
    },
  ],
};

/* ------------------------------------------------------------------------ */
/* Mathematics — Chapter 1: Real Numbers                                      */
/* ------------------------------------------------------------------------ */

const realNumbers: Chapter = {
  id: "real-numbers",
  number: 1,
  title: "Real Numbers",
  summary:
    "The Fundamental Theorem of Arithmetic, finding HCF and LCM by prime factorisation, and proving numbers like √2 are irrational.",
  topics: [
    {
      id: "fundamental-theorem-of-arithmetic",
      title: "The Fundamental Theorem of Arithmetic",
      subtopics: [
        { id: "prime-factorisation", title: "Expressing composite numbers as products of primes" },
        { id: "uniqueness-of-factorisation", title: "Uniqueness of prime factorisation" },
        { id: "applying-the-theorem", title: "Using the theorem: can 6ⁿ end with 0?" },
      ],
      content: {
        intro:
          "Primes are the building blocks of all natural numbers, much like atoms are the building blocks of matter. Every composite number can be built by multiplying primes together, and there is only one way to do it. This powerful fact is called the Fundamental Theorem of Arithmetic.",
        sections: [
          {
            heading: "Breaking numbers into primes",
            body:
              "A composite number can be split repeatedly using a **factor tree** until only primes remain. For example, 32760 = 2 × 2 × 2 × 3 × 3 × 5 × 7 × 13, which we write as 2³ × 3² × 5 × 7 × 13. Similarly 140 = 2² × 5 × 7 and 3825 = 3² × 5² × 17. Multiplying primes can create every natural number greater than 1 that is not itself prime.",
          },
          {
            heading: "The theorem and why 'unique' matters",
            body:
              "The **Fundamental Theorem of Arithmetic** states: every composite number can be expressed (factorised) as a product of primes, and this factorisation is **unique, apart from the order** in which the prime factors occur. Whether you start the factor tree of 60 with 6 × 10 or 4 × 15, you always end with 2² × 3 × 5. Writing primes in ascending order gives the one standard form. This uniqueness is what lets us use prime factorisation to answer questions with certainty.",
          },
          {
            heading: "Using the theorem: can 6ⁿ end with 0?",
            body:
              "A number ending in 0 must be divisible by 10, so its prime factorisation must contain both 2 and **5**. But 6ⁿ = (2 × 3)ⁿ = 2ⁿ × 3ⁿ contains only the primes 2 and 3. By uniqueness, there is no other factorisation hiding a 5. So 6ⁿ can **never** end with the digit 0 for any natural number n.",
          },
        ],
        definitions: [
          { term: "Prime number", meaning: "A natural number greater than 1 whose only factors are 1 and itself." },
          { term: "Composite number", meaning: "A natural number greater than 1 that has more than two factors." },
          { term: "Prime factorisation", meaning: "Writing a number as a product of prime numbers." },
          { term: "Fundamental Theorem of Arithmetic", meaning: "Every composite number can be expressed as a product of primes, uniquely apart from the order of the factors." },
        ],
        formulas: [
          { label: "Example factorisation", expression: "32760 = 2³ × 3² × 5 × 7 × 13" },
          { label: "Powers of 6", expression: "6ⁿ = 2ⁿ × 3ⁿ", note: "No factor 5, so 6ⁿ never ends in 0." },
        ],
        keyPoints: [
          "Every composite number is a product of primes.",
          "The prime factorisation of a number is unique apart from order.",
          "Write prime factors in ascending order, using powers for repeated primes.",
          "A number ends in 0 only if its prime factors include both 2 and 5.",
          "6ⁿ, 4ⁿ and 12ⁿ can never end with 0 because they have no factor 5.",
        ],
        explainers: {
          eli10:
            "Think of prime numbers as special LEGO bricks that cannot be broken into smaller bricks. Every other number is a model built by snapping these prime bricks together. The cool part is that each model has exactly one set of bricks: 12 is always two 2-bricks and one 3-brick, no matter how you build it. That is the Fundamental Theorem of Arithmetic.",
          realWorld:
            "Your Aadhaar number identifies exactly one person; prime factorisation works like an Aadhaar for numbers, since each number has one unique set of prime factors. Online banking and UPI payments are kept safe by encryption that relies on how hard it is to find the prime factors of very large numbers. Even when a sweet shop packs 60 laddoos, the ways to arrange them in equal boxes all come from 60 = 2² × 3 × 5.",
          mnemonic:
            "**'Every number has one prime passport'**: the stamps (primes) can be listed in any order, but the set never changes. For the zero test, remember **'No 5, no zero'**: if 5 is missing from the prime passport, the number cannot end in 0.",
        },
      },
    },
    {
      id: "hcf-and-lcm-by-prime-factorisation",
      title: "HCF and LCM by Prime Factorisation",
      subtopics: [
        { id: "finding-hcf", title: "Finding HCF using prime factors" },
        { id: "finding-lcm", title: "Finding LCM using prime factors" },
        { id: "hcf-lcm-product-relation", title: "HCF × LCM = product of two numbers" },
      ],
      content: {
        intro:
          "In earlier classes you found HCF and LCM by listing factors and multiples. Prime factorisation gives a faster and more reliable method. Once both numbers are written as products of primes, HCF and LCM can be read off almost instantly.",
        sections: [
          {
            heading: "HCF: smallest powers of common primes",
            body:
              "Write each number in its prime factorised form. The **HCF** is the product of the **smallest power of each common prime factor**. For 6 = 2 × 3 and 20 = 2² × 5, the only common prime is 2, and its smallest power is 2¹, so HCF(6, 20) = 2. For 96 = 2⁵ × 3 and 404 = 2² × 101, HCF = 2² = 4.",
          },
          {
            heading: "LCM: greatest powers of all primes",
            body:
              "The **LCM** is the product of the **greatest power of each prime factor** that appears in any of the numbers. For 6 and 20, the primes involved are 2, 3 and 5 with greatest powers 2², 3¹ and 5¹, so LCM = 4 × 3 × 5 = 60. For 96 and 404, LCM = 2⁵ × 3 × 101 = 9696. The same rules work for three or more numbers: for 6, 72 and 120, HCF = 2 × 3 = 6 and LCM = 2³ × 3² × 5 = 360.",
          },
          {
            heading: "A useful shortcut for two numbers",
            body:
              "For any two positive integers a and b, **HCF(a, b) × LCM(a, b) = a × b**. Check it: 2 × 60 = 120 = 6 × 20. So if you know the HCF, you can find the LCM by dividing the product by it, e.g. LCM(96, 404) = (96 × 404) ÷ 4 = 9696. **Careful:** this relation does not hold for three numbers; 6 × 360 ≠ 6 × 72 × 120.",
          },
        ],
        definitions: [
          { term: "HCF", meaning: "Highest Common Factor: the largest number that divides each of the given numbers." },
          { term: "LCM", meaning: "Lowest Common Multiple: the smallest number that is a multiple of each of the given numbers." },
          { term: "Co-prime numbers", meaning: "Two numbers whose HCF is 1, such as 8 and 15." },
        ],
        formulas: [
          { label: "HCF", expression: "HCF = product of smallest powers of common prime factors" },
          { label: "LCM", expression: "LCM = product of greatest powers of all prime factors involved" },
          { label: "Two-number relation", expression: "HCF(a, b) × LCM(a, b) = a × b", note: "Valid only for two numbers." },
        ],
        keyPoints: [
          "Always factorise into primes first.",
          "HCF uses common primes with the smallest powers.",
          "LCM uses all primes with the greatest powers.",
          "HCF × LCM = product of the numbers works only for two numbers.",
          "For co-prime numbers, HCF = 1 and LCM = their product.",
          "The HCF always divides the LCM.",
        ],
        explainers: {
          eli10:
            "Write each number as a bag of prime bricks. The HCF is the bricks that both bags share, taking only as many as the smaller bag has. The LCM is the smallest bag that could hold everything from both bags, so you take the biggest pile of each kind of brick. That is it: shared-and-smallest for HCF, everything-and-biggest for LCM.",
          realWorld:
            "Two buses leave the Kashmere Gate depot together; one returns every 20 minutes and the other every 6 minutes. They will next be at the depot together after LCM(6, 20) = 60 minutes. If a teacher has 96 pencils and 404 erasers and wants to make identical gift packs with nothing left over, the largest number of packs is HCF(96, 404) = 4. Wedding caterers use the same idea to split sweets equally across tables.",
          mnemonic:
            "**'HCF: Common and Small; LCM: All and Tall'**. HCF takes only the common primes at their smallest power; LCM takes all primes at their tallest power. And **'Two only for H×L'**: HCF × LCM = product works only for two numbers.",
        },
      },
    },
    {
      id: "revisiting-irrational-numbers",
      title: "Revisiting Irrational Numbers",
      subtopics: [
        { id: "prime-dividing-a-square", title: "If a prime p divides a², then p divides a" },
        { id: "proving-root-2-irrational", title: "Proof that √2 is irrational" },
        { id: "irrationality-of-sums-and-products", title: "Irrationality of sums, differences and products" },
      ],
      content: {
        intro:
          "A number is irrational if it cannot be written as p/q where p and q are integers and q ≠ 0. You know that √2, √3 and π are irrational, but how can we be sure? In this topic we use the Fundamental Theorem of Arithmetic to prove it.",
        sections: [
          {
            heading: "A key result about primes",
            body:
              "**Theorem:** let p be a prime number. If p divides a², where a is a positive integer, then p divides a. This follows from unique prime factorisation: the primes in a² are exactly the primes in a, each appearing twice as often. So if p appears in a², it must already appear in a. We will use this fact to prove irrationality.",
          },
          {
            heading: "Proof by contradiction: √2 is irrational",
            body:
              "Assume, on the contrary, that √2 is rational, so √2 = a/b where a and b are co-prime integers and b ≠ 0. Squaring, 2b² = a², so 2 divides a², and by the theorem 2 divides a. Write a = 2c; then 2b² = 4c², so b² = 2c², meaning 2 divides b as well. Now 2 divides both a and b, which **contradicts** that they are co-prime, so our assumption was wrong and **√2 is irrational**. The same method proves √3, √5 and √p for any prime p are irrational.",
          },
          {
            heading: "Sums and products with irrationals",
            body:
              "The sum or difference of a rational and an irrational number is **irrational**; for example, 5 − √3 is irrational. The product or quotient of a **non-zero** rational and an irrational number is also **irrational**, so 3√2 and 2/√5 are irrational. To prove such results, assume the number is rational, rearrange to isolate the square root, and show you get a contradiction. For instance, if 5 − √3 = a/b, then √3 = 5 − a/b would be rational, which is false.",
          },
        ],
        definitions: [
          { term: "Rational number", meaning: "A number that can be written as p/q, where p and q are integers and q ≠ 0." },
          { term: "Irrational number", meaning: "A number that cannot be written in the form p/q with integers p, q and q ≠ 0, such as √2 or π." },
          { term: "Proof by contradiction", meaning: "A method of proof that assumes the opposite of what is to be proved and shows this leads to something impossible." },
          { term: "Co-prime", meaning: "Two integers with no common factor other than 1." },
        ],
        formulas: [
          { label: "Key theorem", expression: "p prime and p | a² ⇒ p | a" },
          { label: "Step in the √2 proof", expression: "√2 = a/b ⇒ 2b² = a²" },
        ],
        keyPoints: [
          "If a prime p divides a², then p divides a.",
          "√p is irrational for every prime p.",
          "Irrationality proofs use contradiction with the co-prime assumption.",
          "Rational ± irrational = irrational.",
          "Non-zero rational × or ÷ irrational = irrational.",
        ],
        explainers: {
          eli10:
            "To prove √2 cannot be a fraction, we pretend it is one, already simplified as much as possible. Then we do some careful squaring and find that both the top and bottom must be even, which means the fraction was not simplified after all. That is impossible, like saying a box is both empty and full. So the pretend idea must be wrong, and √2 is not a fraction.",
          realWorld:
            "A carpenter making a square table with 1 m sides finds its diagonal is √2 m, about 1.414 m, and no tape measure mark will ever match it exactly. Tiles on a square floor in your home show the same thing when you measure corner to corner. Engineers simply round √2 to as many decimals as they need, precisely because it never ends or repeats.",
          mnemonic:
            "Remember the proof as **'Assume, Square, Share, Clash'**: Assume √2 = a/b in lowest terms, Square both sides, show 2 is a Shared factor of a and b, and Clash with the co-prime assumption. For combinations: **'One irrational spoils the mix'**, except when you multiply by zero.",
        },
      },
    },
  ],
  quiz: [
    {
      id: "rn-q1",
      question: "What is the prime factorisation of 140?",
      options: ["2 × 7 × 10", "2² × 5 × 7", "2 × 5 × 14", "2³ × 5 × 7"],
      answer: 1,
      explanation: "140 = 2 × 2 × 5 × 7 = 2² × 5 × 7, and every factor is prime.",
    },
    {
      id: "rn-q2",
      question: "The Fundamental Theorem of Arithmetic says the prime factorisation of a composite number is:",
      options: [
        "Unique, apart from the order of factors",
        "Different each time you factorise",
        "Always a power of 2",
        "Possible only for even numbers",
      ],
      answer: 0,
      explanation: "Every composite number has exactly one prime factorisation, apart from the order in which the primes occur.",
    },
    {
      id: "rn-q3",
      question: "HCF of 96 and 404 is:",
      options: ["2", "8", "12", "4"],
      answer: 3,
      explanation: "96 = 2⁵ × 3 and 404 = 2² × 101; the common prime is 2 with smallest power 2², so HCF = 4.",
    },
    {
      id: "rn-q4",
      question: "Given HCF(26, 91) = 13, what is LCM(26, 91)?",
      options: ["91", "364", "182", "2366"],
      answer: 2,
      explanation: "LCM = (26 × 91) ÷ 13 = 2366 ÷ 13 = 182.",
    },
    {
      id: "rn-q5",
      question: "Why can 6ⁿ never end with the digit 0?",
      options: [
        "Because 6 is even",
        "Because its prime factorisation has no 5",
        "Because 6 is not prime",
        "Because n must be odd",
      ],
      answer: 1,
      explanation: "6ⁿ = 2ⁿ × 3ⁿ; to end in 0 a number needs prime factors 2 and 5, and 5 is missing.",
    },
    {
      id: "rn-q6",
      question: "LCM of 6, 72 and 120 is:",
      options: ["720", "120", "240", "360"],
      answer: 3,
      explanation: "6 = 2 × 3, 72 = 2³ × 3², 120 = 2³ × 3 × 5; LCM = 2³ × 3² × 5 = 360.",
    },
    {
      id: "rn-q7",
      question: "Which of the following is irrational?",
      options: ["√5", "√16", "0.25", "22/7"],
      answer: 0,
      explanation: "5 is prime, so √5 is irrational; √16 = 4, 0.25 = 1/4 and 22/7 are rational.",
    },
    {
      id: "rn-q8",
      question: "The number 5 − √3 is:",
      options: [
        "Rational, because 5 is rational",
        "An integer",
        "Irrational, because rational minus irrational is irrational",
        "Equal to √2",
      ],
      answer: 2,
      explanation: "If 5 − √3 were rational, √3 would equal 5 minus a rational, which is rational: a contradiction.",
    },
  ],
};

/* ------------------------------------------------------------------------ */
/* Mathematics — Chapter 8: Introduction to Trigonometry                      */
/* ------------------------------------------------------------------------ */

const introductionToTrigonometry: Chapter = {
  id: "introduction-to-trigonometry",
  number: 8,
  title: "Introduction to Trigonometry",
  summary:
    "The six trigonometric ratios of an acute angle in a right triangle, their values at 0°, 30°, 45°, 60° and 90°, and the three fundamental identities.",
  topics: [
    {
      id: "trigonometric-ratios",
      title: "Trigonometric Ratios",
      subtopics: [
        { id: "defining-the-ratios", title: "Defining sin, cos, tan, cosec, sec and cot" },
        { id: "relations-between-ratios", title: "Reciprocal and quotient relations" },
        { id: "finding-ratios-from-one-ratio", title: "Finding all ratios from one given ratio" },
      ],
      content: {
        intro:
          "Trigonometry means 'measuring the sides of a triangle'. In a right-angled triangle, the ratios of the sides depend only on the angle, not on how big the triangle is. These ratios are called trigonometric ratios, and they let us find heights and distances we cannot measure directly.",
        sections: [
          {
            heading: "Naming the sides",
            body:
              "In a right triangle ABC with the right angle at B, look at the acute angle A. The side opposite the right angle, AC, is the **hypotenuse**. The side facing angle A, BC, is the **side opposite** to A, and the remaining side AB is the **side adjacent** to A. If you switch to angle C, the opposite and adjacent sides swap, so always name the sides with respect to the angle you are working with.",
          },
          {
            heading: "The six ratios",
            body:
              "**sin A** = opposite/hypotenuse, **cos A** = adjacent/hypotenuse and **tan A** = opposite/adjacent. Their reciprocals are **cosec A** = hypotenuse/opposite, **sec A** = hypotenuse/adjacent and **cot A** = adjacent/opposite. Also, tan A = sin A / cos A and cot A = cos A / sin A. Because similar triangles have proportional sides, the value of each ratio stays the same for a given angle, whatever the size of the triangle.",
          },
          {
            heading: "Knowing one ratio gives all six",
            body:
              "If tan A = 4/3, draw a right triangle with opposite side 4k and adjacent side 3k. By Pythagoras, the hypotenuse is √(16k² + 9k²) = 5k. So sin A = 4/5, cos A = 3/5, cosec A = 5/4, sec A = 5/3 and cot A = 3/4. Since the hypotenuse is the longest side, sin A and cos A are always less than 1 for an acute angle, while sec A and cosec A are always greater than 1.",
          },
        ],
        definitions: [
          { term: "Hypotenuse", meaning: "The side opposite the right angle; the longest side of a right triangle." },
          { term: "sin A", meaning: "Ratio of the side opposite angle A to the hypotenuse." },
          { term: "cos A", meaning: "Ratio of the side adjacent to angle A to the hypotenuse." },
          { term: "tan A", meaning: "Ratio of the side opposite angle A to the side adjacent to angle A." },
          { term: "Reciprocal ratios", meaning: "cosec A = 1/sin A, sec A = 1/cos A, cot A = 1/tan A." },
        ],
        formulas: [
          { label: "Sine", expression: "sin A = opposite / hypotenuse" },
          { label: "Cosine", expression: "cos A = adjacent / hypotenuse" },
          { label: "Tangent", expression: "tan A = opposite / adjacent = sin A / cos A" },
          { label: "Reciprocals", expression: "cosec A = 1/sin A, sec A = 1/cos A, cot A = 1/tan A" },
        ],
        keyPoints: [
          "Opposite and adjacent sides depend on which acute angle you choose.",
          "Trigonometric ratios depend only on the angle, not on the size of the triangle.",
          "tan A = sin A / cos A and cot A = cos A / sin A.",
          "cosec, sec and cot are reciprocals of sin, cos and tan.",
          "For acute angles, 0 < sin A < 1 and 0 < cos A < 1.",
        ],
        explainers: {
          eli10:
            "Imagine a slide in a park. If the slide is steeper, it rises more for every step you walk forward. Trigonometric ratios are just numbers that describe how steep an angle is by comparing the sides of a right triangle. A big slide and a baby slide with the same steepness have the same ratios, even though one is taller.",
          realWorld:
            "When a mason in your neighbourhood builds a ramp for a wheelchair at a hospital entrance, the slope is a tan ratio: height divided by horizontal length. A ladder leaning against a wall while painting a house makes an angle whose cosine tells how far its foot is from the wall. Pilots landing at Delhi airport follow a glide slope of about 3°, which is again a trigonometric ratio in action.",
          mnemonic:
            "The classic is **SOH-CAH-TOA**: Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent. An Indian favourite is **'Pandit Badri Prasad Har Har Bol'**: sin = P/H, cos = B/H, tan = P/B, where P is perpendicular, B is base and H is hypotenuse.",
        },
      },
    },
    {
      id: "trigonometric-ratios-of-specific-angles",
      title: "Trigonometric Ratios of Some Specific Angles",
      subtopics: [
        { id: "ratios-of-45-degrees", title: "Ratios of 45°" },
        { id: "ratios-of-30-and-60-degrees", title: "Ratios of 30° and 60°" },
        { id: "ratios-of-0-and-90-degrees", title: "Ratios of 0° and 90°" },
      ],
      content: {
        intro:
          "Some angles appear again and again in geometry: 0°, 30°, 45°, 60° and 90°. Their trigonometric ratios can be found exactly using simple triangles. Knowing this table by heart makes many problems quick and easy.",
        sections: [
          {
            heading: "The 45° angle",
            body:
              "In a right triangle with one angle 45°, the other acute angle is also 45°, so it is **isosceles**: the two legs are equal, say a. By Pythagoras, the hypotenuse is a√2. Therefore sin 45° = cos 45° = 1/√2, and tan 45° = 1. The reciprocals are cosec 45° = sec 45° = √2 and cot 45° = 1.",
          },
          {
            heading: "The 30° and 60° angles",
            body:
              "Take an equilateral triangle of side 2a and drop a perpendicular from one vertex; it splits the triangle into two right triangles with angles 30°, 60°, 90°. The sides are 2a (hypotenuse), a (opposite 30°) and a√3 (opposite 60°). So sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3, and sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3. Notice that sin 30° = cos 60° and cos 30° = sin 60°.",
          },
          {
            heading: "The 0° and 90° angles",
            body:
              "Imagine angle A shrinking to 0°: the opposite side shrinks to 0 and the adjacent side becomes as long as the hypotenuse. So sin 0° = 0, cos 0° = 1 and tan 0° = 0, while cosec 0° and cot 0° are **not defined**. As A grows to 90°, sin 90° = 1, cos 90° = 0, and tan 90° and sec 90° are **not defined**. As A increases from 0° to 90°, sin A increases from 0 to 1 and cos A decreases from 1 to 0.",
          },
        ],
        definitions: [
          { term: "Not defined", meaning: "A ratio whose denominator becomes 0, such as tan 90° = 1/0." },
          { term: "Isosceles right triangle", meaning: "A right triangle with two equal legs; its acute angles are both 45°." },
          { term: "30°-60°-90° triangle", meaning: "Half of an equilateral triangle, with sides in the ratio 1 : √3 : 2." },
        ],
        formulas: [
          { label: "sin values (0°, 30°, 45°, 60°, 90°)", expression: "0, 1/2, 1/√2, √3/2, 1" },
          { label: "cos values (0°, 30°, 45°, 60°, 90°)", expression: "1, √3/2, 1/√2, 1/2, 0" },
          { label: "tan values (0°, 30°, 45°, 60°, 90°)", expression: "0, 1/√3, 1, √3, not defined" },
        ],
        keyPoints: [
          "sin 30° = 1/2, sin 45° = 1/√2, sin 60° = √3/2.",
          "cos values are the sin values in reverse order.",
          "tan 45° = 1; tan 90° is not defined.",
          "sin A increases and cos A decreases as A goes from 0° to 90°.",
          "sin A = cos A only at A = 45°.",
        ],
        explainers: {
          eli10:
            "Cut a square sandwich corner to corner and you get two triangles with 45° angles, where both short sides are the same. Cut an equal-sided triangle down the middle and you get the 30°-60° triangle. Because these shapes are so neat, we can work out their ratios exactly, like knowing your times tables. Learn the little table once and you will use it everywhere.",
          realWorld:
            "Look at a folded paper aeroplane or a samosa: many of their corners are near 30°, 60° or 45°. Roof trusses on factory sheds are often built at 30° so rain runs off quickly. A kite string making a 60° angle with the ground lets you find the kite's height as length × sin 60°. Set squares in your geometry box come in exactly these two shapes: 45°-45°-90° and 30°-60°-90°.",
          mnemonic:
            "Write 0, 1, 2, 3, 4 for 0° to 90°, divide each by 4 and take the square root: √(0/4), √(1/4), √(2/4), √(3/4), √(4/4) gives 0, 1/2, 1/√2, √3/2, 1, the sin values. **Reverse the row for cos**, and divide sin by cos to get tan. This 'root of n by 4' trick rebuilds the table in seconds.",
        },
      },
    },
    {
      id: "trigonometric-identities",
      title: "Trigonometric Identities",
      subtopics: [
        { id: "identity-sin-cos", title: "sin²A + cos²A = 1" },
        { id: "identity-sec-tan", title: "1 + tan²A = sec²A" },
        { id: "identity-cosec-cot", title: "1 + cot²A = cosec²A" },
        { id: "proving-identities", title: "Using identities to prove results" },
      ],
      content: {
        intro:
          "An identity is an equation that is true for every value of the variable for which both sides are defined. Trigonometry has three basic identities, all coming from the Pythagoras theorem. They let us express any ratio in terms of any other and simplify complicated expressions.",
        sections: [
          {
            heading: "Where the identities come from",
            body:
              "In right triangle ABC, right-angled at B, Pythagoras gives AB² + BC² = AC². Divide every term by AC²: (AB/AC)² + (BC/AC)² = 1, that is **cos²A + sin²A = 1**, true for 0° ≤ A ≤ 90°. Dividing instead by AB² gives **1 + tan²A = sec²A** (for 0° ≤ A < 90°). Dividing by BC² gives **cot²A + 1 = cosec²A** (for 0° < A ≤ 90°).",
          },
          {
            heading: "Expressing one ratio through another",
            body:
              "Identities let you write every ratio using just one. For example, from 1 + tan²A = sec²A, sec A = √(1 + tan²A). From sin²A + cos²A = 1, cos A = √(1 − sin²A), so tan A = sin A / √(1 − sin²A). This is useful when a problem gives you one ratio and asks for another.",
          },
          {
            heading: "Proving identities",
            body:
              "To prove an identity, work on the **more complicated side** and simplify it until it matches the other side. Common moves are: convert everything into sin and cos, take LCM of fractions, and replace sin²A + cos²A with 1. For example, (sec A − tan A)(sec A + tan A) = sec²A − tan²A = 1. Never move terms across the equals sign as if solving an equation; transform one side at a time.",
          },
        ],
        definitions: [
          { term: "Identity", meaning: "An equation that holds for all values of the angle for which both sides are defined." },
          { term: "sin²A", meaning: "Shorthand for (sin A)², the square of sin A." },
          { term: "Pythagoras theorem", meaning: "In a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides." },
        ],
        formulas: [
          { label: "Identity 1", expression: "sin²θ + cos²θ = 1", note: "0° ≤ θ ≤ 90°" },
          { label: "Identity 2", expression: "1 + tan²θ = sec²θ", note: "0° ≤ θ < 90°" },
          { label: "Identity 3", expression: "1 + cot²θ = cosec²θ", note: "0° < θ ≤ 90°" },
          { label: "Useful factorisation", expression: "sec²θ − tan²θ = (secθ − tanθ)(secθ + tanθ) = 1" },
        ],
        keyPoints: [
          "All three identities come from Pythagoras theorem.",
          "sin²A + cos²A = 1 is the master identity; divide it by cos²A or sin²A to get the others.",
          "Identities help express any ratio in terms of another.",
          "Prove identities by simplifying one side, usually the more complex one.",
          "Converting to sin and cos is often the quickest route.",
        ],
        explainers: {
          eli10:
            "Pythagoras says the two short sides of a right triangle, squared and added, equal the long side squared. If we shrink the triangle so the long side is exactly 1, the short sides become cos A and sin A. So cos²A + sin²A = 1 is just Pythagoras wearing a trigonometry costume! The other two identities are the same idea divided by something.",
          realWorld:
            "A lamp post and its shadow make a right triangle with the sun's rays. Whatever the time of day, sin² + cos² of the sun's angle adds up to 1, so knowing one ratio from the shadow length tells you all the others. Surveyors laying out roads in hilly areas like Shimla use these identities to switch between slopes and distances quickly.",
          mnemonic:
            "Start from **'S-C-1': sin² + cos² = 1**. Divide by cos² to get **'1 + tan² = sec²'** (the 't-s' pair), divide by sin² to get **'1 + cot² = cosec²'** (the 'co' pair). Notice the 'co' functions stay together: cot goes with cosec.",
        },
      },
    },
  ],
  quiz: [
    {
      id: "trig-q1",
      question: "What is the value of sin 30°?",
      options: ["√3/2", "1/√2", "1/2", "1"],
      answer: 2,
      explanation: "In a 30°-60°-90° triangle the side opposite 30° is half the hypotenuse, so sin 30° = 1/2.",
    },
    {
      id: "trig-q2",
      question: "If tan A = 4/3, then sin A equals:",
      options: ["4/5", "3/5", "3/4", "5/4"],
      answer: 0,
      explanation: "Opposite = 4k, adjacent = 3k, hypotenuse = 5k, so sin A = 4/5.",
    },
    {
      id: "trig-q3",
      question: "The value of sin²60° + cos²60° is:",
      options: ["0", "√3", "1/2", "1"],
      answer: 3,
      explanation: "sin²θ + cos²θ = 1 for any θ; check: 3/4 + 1/4 = 1.",
    },
    {
      id: "trig-q4",
      question: "Which of these is not defined?",
      options: ["sin 90°", "tan 90°", "cos 90°", "tan 0°"],
      answer: 1,
      explanation: "tan 90° = sin 90° / cos 90° = 1/0, which is not defined.",
    },
    {
      id: "trig-q5",
      question: "Which identity is correct?",
      options: ["1 + tan²A = sec²A", "1 − tan²A = sec²A", "tan²A − 1 = sec²A", "1 + sec²A = tan²A"],
      answer: 0,
      explanation: "Dividing sin²A + cos²A = 1 by cos²A gives tan²A + 1 = sec²A.",
    },
    {
      id: "trig-q6",
      question: "(2 tan 30°) / (1 + tan²30°) equals:",
      options: ["sin 30°", "tan 60°", "cos 60°", "sin 60°"],
      answer: 3,
      explanation: "(2/√3) ÷ (4/3) = √3/2 = sin 60°.",
    },
    {
      id: "trig-q7",
      question: "As A increases from 0° to 90°, the value of cos A:",
      options: ["Increases from 0 to 1", "Stays the same", "Decreases from 1 to 0", "First increases, then decreases"],
      answer: 2,
      explanation: "cos 0° = 1 and cos 90° = 0, and cos A steadily decreases between them.",
    },
    {
      id: "trig-q8",
      question: "(sec A − tan A)(sec A + tan A) simplifies to:",
      options: ["0", "1", "2 sec A", "tan²A"],
      answer: 1,
      explanation: "It equals sec²A − tan²A, which is 1 by the identity 1 + tan²A = sec²A.",
    },
  ],
};

/* ------------------------------------------------------------------------ */
/* History — Chapter 1: The Rise of Nationalism in Europe                    */
/* ------------------------------------------------------------------------ */

const riseOfNationalismInEurope: Chapter = {
  id: "the-rise-of-nationalism-in-europe",
  number: 1,
  title: "The Rise of Nationalism in Europe",
  summary:
    "How the French Revolution, liberal ideas, the revolutions of 1830–1848 and the unification of Germany and Italy turned Europe into a continent of nation-states.",
  topics: [
    {
      id: "french-revolution-and-the-idea-of-the-nation",
      title: "The French Revolution and the Idea of the Nation",
      subtopics: [
        { id: "la-patrie-and-le-citoyen", title: "La patrie and le citoyen: creating a collective identity" },
        { id: "spreading-nationalism-abroad", title: "Spreading the idea beyond France" },
        { id: "napoleonic-code", title: "Napoleon and the Civil Code of 1804" },
      ],
      content: {
        intro:
          "The first clear expression of nationalism came with the French Revolution in 1789. Power was transferred from an absolute king to the body of French citizens, who now saw themselves as one people. The revolutionaries and later Napoleon took many steps to build this sense of a shared nation.",
        sections: [
          {
            heading: "Creating a sense of collective identity",
            body:
              "The revolutionaries stressed the ideas of **la patrie** (the fatherland) and **le citoyen** (the citizen), which described a united community with equal rights under a constitution. A new French **tricolour** flag replaced the royal standard, and the Estates General was elected by active citizens and renamed the **National Assembly**. New hymns were composed, oaths were taken and martyrs commemorated, all in the name of the nation. A centralised administrative system made uniform laws for all citizens.",
          },
          {
            heading: "Uniting the nation's economy and language",
            body:
              "Internal customs duties and dues were abolished, and a **uniform system of weights and measures** was adopted. Regional dialects were discouraged, and **French**, as spoken and written in Paris, became the common language of the nation. The revolutionaries also declared that it was France's mission to liberate the peoples of Europe from despotism. Students and educated middle-class members in other European cities set up **Jacobin clubs**, and their activities prepared the way for French armies moving into Holland, Belgium, Switzerland and much of Italy in the 1790s.",
          },
          {
            heading: "Napoleon's Civil Code",
            body:
              "Napoleon destroyed democracy in France by making himself emperor, but in administration he brought revolutionary principles to make the system rational and efficient. The **Civil Code of 1804**, known as the **Napoleonic Code**, did away with all privileges based on birth, established equality before the law and secured the right to property. In conquered regions he simplified administrative divisions, abolished the feudal system and freed peasants from serfdom and manorial dues; in towns, guild restrictions were removed and transport and communication improved. At first many welcomed the French armies as harbingers of liberty, but enthusiasm turned to hostility because of **increased taxation, censorship and forced conscription** into the French armies.",
          },
        ],
        definitions: [
          { term: "Nationalism", meaning: "A strong feeling of belonging to a nation and loyalty to it, based on shared identity, history and interests." },
          { term: "Absolutism", meaning: "A system of rule with no restraints on the power exercised by the monarch; a centralised, often repressive monarchical government." },
          { term: "La patrie", meaning: "French for 'the fatherland'; the idea of the nation as a shared homeland." },
          { term: "Le citoyen", meaning: "French for 'the citizen'; a member of the nation with equal rights." },
          { term: "Napoleonic Code", meaning: "The Civil Code of 1804 that abolished privileges by birth, established equality before law and secured the right to property." },
        ],
        dates: [
          { date: "1789", event: "French Revolution begins; sovereignty passes from the monarchy to the French citizens." },
          { date: "1790s", event: "French armies move into Holland, Belgium, Switzerland and much of Italy." },
          { date: "1797", event: "Napoleon invades Italy; Napoleonic wars begin." },
          { date: "1804", event: "Napoleonic Code (Civil Code) introduced." },
          { date: "1814–1815", event: "Fall of Napoleon." },
        ],
        keyPoints: [
          "The French Revolution of 1789 was the first clear expression of nationalism.",
          "Ideas of la patrie and le citoyen built a collective French identity.",
          "A new tricolour, National Assembly, uniform laws, weights and measures, and French language unified the nation.",
          "The Napoleonic Code of 1804 ended privileges of birth and ensured equality before law and right to property.",
          "Conquered peoples turned against the French because of taxes, censorship and forced conscription.",
        ],
        explainers: {
          eli10:
            "Before 1789, people in France were told they belonged to the king. The revolution said, 'No, the country belongs to all of us, the citizens!' So they made a new flag, sang new songs, used the same language and the same measuring units, just like a school gets house colours and a school song to make everyone feel part of one team. Napoleon later spread some of these rules to other countries, but people got angry because he also made them pay taxes and join his army.",
          realWorld:
            "Think of how India built a shared identity after 1947: one national flag, one national anthem, a Constitution giving equal rights, and a single rupee and metric system replacing many princely-state coins and old units like seer and maund. Just as GST in 2017 removed many internal tax barriers between Indian states, revolutionary France abolished internal customs duties. These common symbols help someone in Kerala and someone in Punjab feel they belong to the same nation.",
          mnemonic:
            "Remember France's nation-building kit as **'F-L-A-G-S'**: Flag (tricolour), Language (French), Assembly (National), Guidelines (uniform laws, weights and measures), Songs (hymns and oaths). For Napoleon's Code, **'BEP'**: no privileges of Birth, Equality before law, Property rights.",
        },
      },
    },
    {
      id: "the-making-of-nationalism-in-europe",
      title: "The Making of Nationalism in Europe",
      subtopics: [
        { id: "aristocracy-and-the-new-middle-class", title: "The aristocracy and the new middle class" },
        { id: "liberal-nationalism", title: "What did liberal nationalism stand for?" },
        { id: "new-conservatism-after-1815", title: "A new conservatism after 1815" },
        { id: "the-revolutionaries", title: "The revolutionaries" },
      ],
      content: {
        intro:
          "In the mid-eighteenth century there were no 'nation-states' as we know them. Germany, Italy and Switzerland were divided into kingdoms, duchies and cantons, and empires like the Habsburg Empire ruled many peoples speaking different languages. New social classes and new ideas slowly changed this picture.",
        sections: [
          {
            heading: "The aristocracy and the new middle class",
            body:
              "Socially and politically, a landed **aristocracy** was the dominant class; its members shared a common way of life across regions, owned estates and town houses, and spoke French for diplomacy and in high society. The majority of the population was made up of **peasantry**. In Western and parts of Central Europe, the growth of industrial production and trade created a **new middle class** of industrialists, businessmen and professionals. Among the educated, liberal middle classes, ideas of national unity following the abolition of aristocratic privileges gained popularity.",
          },
          {
            heading: "Liberal nationalism",
            body:
              "The term **liberalism** comes from the Latin root *liber*, meaning free. For the new middle classes, liberalism stood for freedom for the individual and equality of all before the law; politically, it meant government by consent, the end of autocracy and clerical privileges, a constitution and representative government through parliament. However, in France the right to vote and get elected was granted only to **property-owning men**, and women were kept out. Economically, liberalism meant freedom of markets and the abolition of state restrictions on the movement of goods and capital. In 1834, a customs union or **Zollverein** was formed at the initiative of Prussia and joined by most German states; it abolished tariff barriers and reduced the number of currencies from over thirty to two.",
          },
          {
            heading: "A new conservatism after 1815",
            body:
              "After Napoleon's defeat in 1815, European governments followed **conservatism**, believing that established traditional institutions like the monarchy, the Church, social hierarchies, property and the family should be preserved. Representatives of Britain, Russia, Prussia and Austria met at Vienna, hosted by the Austrian Chancellor **Duke Metternich**, and drew up the **Treaty of Vienna of 1815**. It restored the Bourbon dynasty to power in France, set up a series of states on France's boundaries to prevent future French expansion, and undid most changes made during the Napoleonic wars. The conservative regimes were autocratic, did not tolerate criticism and dissent, and imposed **censorship** on newspapers, books, plays and songs.",
          },
          {
            heading: "The revolutionaries",
            body:
              "Fear of repression drove many liberal-nationalists underground, and secret societies sprang up in many European states to train revolutionaries and spread their ideas. **Giuseppe Mazzini**, born in Genoa in 1807, became a member of the secret society of the Carbonari. After being sent into exile in 1831 for attempting a revolution in Liguria, he founded **Young Italy** in Marseilles and then **Young Europe** in Berne. Mazzini believed that nations were the natural units of mankind and that Italy had to be forged into a single unified republic. Metternich described him as 'the most dangerous enemy of our social order'.",
          },
        ],
        definitions: [
          { term: "Liberalism", meaning: "From Latin 'liber' (free): individual freedom, equality before law, government by consent and a constitution." },
          { term: "Zollverein", meaning: "A German customs union formed in 1834 at Prussia's initiative that abolished tariff barriers among member states." },
          { term: "Conservatism", meaning: "A political philosophy that stressed the importance of tradition, established institutions and customs, and preferred gradual development to quick change." },
          { term: "Treaty of Vienna (1815)", meaning: "Agreement of the European powers after Napoleon's defeat that restored monarchies and undid Napoleonic changes." },
          { term: "Suffrage", meaning: "The right to vote." },
        ],
        dates: [
          { date: "1807", event: "Giuseppe Mazzini born in Genoa." },
          { date: "1815", event: "Congress and Treaty of Vienna; Bourbon dynasty restored in France." },
          { date: "1831", event: "Mazzini exiled; founds Young Italy in Marseilles." },
          { date: "1834", event: "Mazzini founds Young Europe in Berne." },
          { date: "1834", event: "Zollverein customs union formed at Prussia's initiative." },
        ],
        keyPoints: [
          "Before 1789, Europe had no nation-states; regions were ruled by dynasties and empires.",
          "The educated liberal middle class led demands for national unity.",
          "Liberalism meant individual freedom, equality before law, constitution and free markets, but voting was limited to property-owning men.",
          "The Zollverein of 1834 created economic unity among German states.",
          "The Treaty of Vienna (1815) restored conservative monarchies under Metternich's leadership.",
          "Mazzini founded Young Italy and Young Europe to spread revolutionary nationalism.",
        ],
        explainers: {
          eli10:
            "After Napoleon was beaten, the old kings got together in Vienna and said, 'Let's put everything back the way it was.' But many young, educated people wanted freedom, fair laws and their own country. They weren't allowed to say this openly, so they formed secret clubs, a bit like a secret club at school that plans a surprise. Mazzini was the most famous of them, dreaming of one united Italy.",
          realWorld:
            "Before GST, a truck carrying goods from Maharashtra to Karnataka had to stop at state check-posts and pay different taxes, slowing trade. The German Zollverein of 1834 did something similar to GST: it removed customs barriers between German states so goods could move freely. Traders who benefited began to think of 'Germany' as one economic unit long before it became one country.",
          mnemonic:
            "**'Liberals want CREF'**: Constitution, Representative government, Equality before law, Freedom of markets. For Vienna 1815, think **'Metternich Made Monarchs Mighty'**: the conservatives restored kings and censored critics. For Mazzini, **'Young Italy, Young Europe: M for Marseilles, B for Berne'**.",
        },
      },
    },
    {
      id: "the-age-of-revolutions-1830-1848",
      title: "The Age of Revolutions: 1830–1848",
      subtopics: [
        { id: "july-revolution-and-greek-independence", title: "The July Revolution and Greek independence" },
        { id: "the-romantic-imagination", title: "The romantic imagination and national feeling" },
        { id: "hunger-hardship-and-popular-revolt", title: "Hunger, hardship and popular revolt" },
        { id: "1848-revolution-of-the-liberals", title: "1848: the revolution of the liberals" },
      ],
      content: {
        intro:
          "As conservative regimes tried to hold on to power, liberalism and nationalism became linked with revolution in many parts of Europe. Between 1830 and 1848, uprisings broke out in the Italian and German states, the Ottoman provinces, Ireland and Poland. Culture, hunger and liberal ideas all played a part.",
        sections: [
          {
            heading: "1830: France sneezes, Europe catches cold",
            body:
              "In **July 1830**, liberal revolutionaries in France overthrew the Bourbon kings who had been restored in 1815, and set up a constitutional monarchy with **Louis Philippe** at its head. Metternich once remarked, 'When France sneezes, the rest of Europe catches cold.' The July Revolution sparked an uprising in Brussels, which led to Belgium breaking away from the United Kingdom of the Netherlands. The **Greek war of independence**, which began in **1821**, drew support from Greeks in exile and many West Europeans; the English poet **Lord Byron** raised funds and went to fight, dying of fever in 1824. The **Treaty of Constantinople of 1832** recognised Greece as an independent nation.",
          },
          {
            heading: "The romantic imagination",
            body:
              "Culture played an important role in creating the idea of the nation. **Romanticism** was a cultural movement that criticised the glorification of reason and focused on emotions, intuition and mystical feelings, trying to create a shared collective heritage. The German philosopher **Johann Gottfried Herder** claimed that true German culture was to be discovered among the common people, *das volk*, through folk songs, folk poetry and folk dances, the **volksgeist**. In **Poland**, which had been partitioned at the end of the eighteenth century by Russia, Prussia and Austria, language became a weapon of resistance: after a failed armed rebellion against Russian rule in **1831**, Polish was used for church gatherings and religious instruction, and **Karol Kurpinski** turned folk dances like the polonaise and mazurka into nationalist symbols through his operas and music.",
          },
          {
            heading: "Hunger, hardship and popular revolt",
            body:
              "The 1830s were years of great economic hardship in Europe. The population grew enormously, there were more job seekers than jobs, and small producers in towns faced stiff competition from cheap machine-made goods from England. In **1845**, weavers in **Silesia** led a revolt against contractors who had drastically reduced their payments. In **1848**, food shortages and widespread unemployment brought the population of Paris out on the roads; **Louis Philippe was forced to flee**, and a National Assembly proclaimed a Republic, granted suffrage to all adult males above 21 and guaranteed the right to work, setting up **national workshops** to provide employment.",
          },
          {
            heading: "1848: the revolution of the liberals",
            body:
              "Alongside the poor, educated middle classes across Europe demanded constitutionalism with national unification. In the German regions, elected representatives met on **18 May 1848** in the **Frankfurt parliament** at the Church of St Paul and drafted a constitution for a German nation headed by a monarchy subject to a parliament. When they offered the crown to **Friedrich Wilhelm IV, King of Prussia**, he rejected it and joined other monarchs to oppose the assembly, which was eventually forced to disband. The parliament was dominated by the middle classes, lost support from workers and artisans, and denied political rights to women. Yet the uprisings were not wasted: autocratic monarchies began to introduce changes, **serfdom and bonded labour were abolished** in the Habsburg dominions and Russia, and the Habsburgs granted more autonomy to the Hungarians in 1867.",
          },
        ],
        definitions: [
          { term: "Romanticism", meaning: "A cultural movement that focused on emotions, intuition and folk culture to develop a particular form of nationalist sentiment." },
          { term: "Volksgeist", meaning: "The spirit of the people, expressed in folk songs, poetry and dances (Herder's idea)." },
          { term: "Frankfurt parliament", meaning: "An all-German national assembly that met on 18 May 1848 in the Church of St Paul to draft a constitution for a united Germany." },
          { term: "Feminist", meaning: "Awareness of women's rights and interests based on the belief of the social, economic and political equality of the genders." },
        ],
        dates: [
          { date: "1821", event: "Greek struggle for independence begins." },
          { date: "1824", event: "Lord Byron dies of fever while supporting the Greek cause." },
          { date: "July 1830", event: "July Revolution in France; Louis Philippe becomes constitutional monarch." },
          { date: "1830", event: "Uprising in Brussels; Belgium breaks away from the United Kingdom of the Netherlands." },
          { date: "1831", event: "Armed rebellion in Poland against Russian rule is crushed." },
          { date: "1832", event: "Treaty of Constantinople recognises Greece as an independent nation." },
          { date: "1845", event: "Revolt of Silesian weavers against contractors." },
          { date: "1848", event: "Revolutions across Europe; Louis Philippe flees Paris; Republic proclaimed in France." },
          { date: "18 May 1848", event: "Frankfurt parliament convenes in the Church of St Paul." },
          { date: "1867", event: "Habsburg rulers grant more autonomy to the Hungarians." },
        ],
        keyPoints: [
          "The July Revolution of 1830 in France triggered uprisings elsewhere, including Belgium's independence.",
          "Greece won independence through the Treaty of Constantinople, 1832.",
          "Romantics like Herder used folk culture and language to build national feeling.",
          "Polish language became a tool of resistance against Russian domination.",
          "1848 saw revolts driven by hunger and by liberal demands for constitution and unification.",
          "The Frankfurt parliament failed when the Prussian king rejected the crown, but reforms like the abolition of serfdom followed.",
        ],
        explainers: {
          eli10:
            "Imagine a classroom where the strict monitor is put back in charge after a fun week without him. At first everyone stays quiet, but then one row starts protesting and soon the whole class joins in. That is what happened in Europe between 1830 and 1848: France protested first and others copied. Some people fought for food and jobs, others for a written set of rules and their own country, and even poets and musicians joined in with songs and stories.",
          realWorld:
            "In India, too, culture and language fuelled national feeling: Bankim Chandra's 'Vande Mataram' and the use of folk tales and songs stirred patriotism, just as Herder's folk songs did in Germany. The way Polish people clung to their language under Russian rule is similar to how people in many parts of India proudly protect their mother tongue. And when food prices shoot up and jobs are scarce, protests often follow, as they did in Paris in 1848.",
          mnemonic:
            "Remember the timeline as **'21-30-32-48'**: 1821 Greece revolts, 1830 July Revolution, 1832 Greece free by Treaty of Constantinople, 1848 Europe erupts. For 1848, think **'Frankfurt Failed, Friedrich Frowned'**: the Frankfurt parliament failed when Friedrich Wilhelm IV refused the crown.",
        },
      },
    },
    {
      id: "the-making-of-germany-and-italy",
      title: "The Making of Germany and Italy",
      subtopics: [
        { id: "germany-can-the-army-be-the-architect", title: "Germany: can the army be the architect of a nation?" },
        { id: "italy-unified", title: "Italy unified" },
        { id: "the-strange-case-of-britain", title: "The strange case of Britain" },
      ],
      content: {
        intro:
          "After 1848, nationalism in Europe moved away from its link with democracy and revolution. Conservatives now used nationalist feeling to strengthen state power and gain political control. Germany and Italy were unified through war, diplomacy and strong leaders, while Britain became a nation through a long, slow process.",
        sections: [
          {
            heading: "Germany: can the army be the architect?",
            body:
              "After the failure of the Frankfurt parliament, **Prussia** took on the leadership of the movement for national unification. Its chief minister, **Otto von Bismarck**, was the architect of this process, carried out with the help of the Prussian army and bureaucracy. **Three wars over seven years**, with **Austria, Denmark and France**, ended in Prussian victory and completed unification. On **18 January 1871**, the Prussian king **William I** was proclaimed **German Emperor** in a ceremony held at the Hall of Mirrors in **Versailles**. The new state placed a strong emphasis on modernising currency, banking, legal and judicial systems.",
          },
          {
            heading: "Italy unified",
            body:
              "In the middle of the nineteenth century Italy was divided into **seven states**, of which only **Sardinia-Piedmont** was ruled by an Italian princely house. The north was under the Austrian Habsburgs, the centre was ruled by the Pope, and the south was under the Bourbon kings of Spain; even the Italian language had no common form. After Mazzini's revolutionary uprisings of 1831 and 1848 failed, **King Victor Emmanuel II** of Sardinia-Piedmont and his chief minister **Count Cavour** took the lead. Through a tactful diplomatic alliance with France, Sardinia-Piedmont defeated the Austrian forces in **1859**. In **1860**, **Giuseppe Garibaldi** led his volunteers into South Italy and the Kingdom of the Two Sicilies, winning the support of local peasants to drive out the Spanish rulers, and in **1861** Victor Emmanuel II was proclaimed **king of united Italy**.",
          },
          {
            heading: "The strange case of Britain",
            body:
              "In Britain the nation-state was not the result of a sudden upheaval but of a **long-drawn-out process**. The primary identities of people in the British Isles were ethnic: English, Welsh, Scot or Irish. The **Act of Union of 1707** between England and Scotland created the United Kingdom of Great Britain, allowing England to impose its influence on Scotland; Scottish Highlanders were forbidden to speak their **Gaelic** language or wear their national dress. In Ireland, a revolt led by **Wolfe Tone** and his United Irishmen in 1798 failed, and Ireland was **forcibly incorporated** into the United Kingdom in **1801**. A new 'British nation' was forged through the propagation of a dominant English culture, with symbols like the Union Jack, the national anthem 'God Save Our Noble King' and the English language.",
          },
        ],
        definitions: [
          { term: "Unification", meaning: "The process of bringing separate states together into one nation-state." },
          { term: "Otto von Bismarck", meaning: "Chief minister of Prussia and the architect of German unification." },
          { term: "Count Cavour", meaning: "Chief minister of Sardinia-Piedmont who led Italian unification through diplomacy." },
          { term: "Giuseppe Garibaldi", meaning: "Italian revolutionary whose volunteers freed South Italy from Spanish Bourbon rule." },
          { term: "Act of Union (1707)", meaning: "The union of England and Scotland that formed the United Kingdom of Great Britain." },
        ],
        dates: [
          { date: "1707", event: "Act of Union between England and Scotland." },
          { date: "1798", event: "Failed revolt of Wolfe Tone and the United Irishmen." },
          { date: "1801", event: "Ireland forcibly incorporated into the United Kingdom." },
          { date: "1859", event: "Sardinia-Piedmont, allied with France, defeats Austria." },
          { date: "1860", event: "Garibaldi's volunteers march into South Italy and the Kingdom of the Two Sicilies." },
          { date: "1861", event: "Victor Emmanuel II proclaimed king of united Italy." },
          { date: "1864–1871", event: "Prussia's three wars with Denmark, Austria and France." },
          { date: "18 January 1871", event: "William I proclaimed German Emperor at Versailles." },
        ],
        keyPoints: [
          "After 1848, conservatives used nationalism to build state power.",
          "Bismarck unified Germany using the Prussian army and bureaucracy through three wars.",
          "William I was proclaimed German Emperor at Versailles in January 1871.",
          "Italy was unified by Cavour's diplomacy, Garibaldi's volunteers and King Victor Emmanuel II.",
          "Victor Emmanuel II became king of united Italy in 1861.",
          "Britain became a nation-state slowly, through English domination of Scotland, Wales and Ireland.",
        ],
        explainers: {
          eli10:
            "Germany was like a big jigsaw puzzle with many small pieces. Bismarck put the pieces together using the Prussian army, winning three wars, and then crowned his king as emperor. Italy's puzzle was put together by a clever minister (Cavour), a brave adventurer in a red shirt (Garibaldi) and a king (Victor Emmanuel II). Britain was different: England slowly pulled Scotland, Wales and Ireland into one country, even when they did not want it.",
          realWorld:
            "After 1947, Sardar Vallabhbhai Patel and V. P. Menon integrated over 500 princely states into the Indian Union, using persuasion and, in a few cases like Hyderabad, force. This is a bit like how Cavour's diplomacy and Bismarck's 'blood and iron' joined many small states into Italy and Germany. The British story also echoes in India's past: a dominant culture being pushed on smaller groups often causes resentment, which is why India's Constitution protects many languages.",
          mnemonic:
            "For Germany: **'B-3-W-71'**: Bismarck, 3 wars, William I, 1871. For Italy: **'CGV'** like a 'Clever Guy's Victory': Cavour (diplomacy), Garibaldi (volunteers), Victor Emmanuel II (king in 1861). For Britain, **'07 Scots, 01 Irish'**: 1707 Scotland, 1801 Ireland.",
        },
      },
    },
    {
      id: "visualising-the-nation-and-imperialism",
      title: "Visualising the Nation; Nationalism and Imperialism",
      subtopics: [
        { id: "allegories-marianne-and-germania", title: "Allegories: Marianne and Germania" },
        { id: "symbols-of-the-nation", title: "What the symbols meant" },
        { id: "balkans-and-the-road-to-world-war", title: "The Balkan problem and the road to war" },
      ],
      content: {
        intro:
          "How do you show a whole nation in a picture? Artists in the eighteenth and nineteenth centuries represented nations as female figures, giving an abstract idea a concrete form. By the end of the nineteenth century, however, nationalism had turned narrow and aggressive, and rivalries over the Balkans pushed Europe towards war.",
        sections: [
          {
            heading: "Nations as female allegories",
            body:
              "Artists personified a nation as a **female figure**; she did not stand for any particular woman but was an **allegory** of the nation. In France she was named **Marianne**, a popular Christian name, with the red cap, the tricolour and the cockade taken from the ideas of liberty and the Republic; her statues were put up in public squares and her image appeared on coins and stamps. **Germania** became the allegory of the German nation, wearing a crown of oak leaves because the German oak stands for heroism. In 1848, the French artist **Frederic Sorrieu** prepared a series of four prints visualising his dream of a world made up of 'democratic and social Republics'.",
          },
          {
            heading: "Reading the symbols",
            body:
              "Nationalist images used symbols with clear meanings. **Broken chains** meant being freed; a **breastplate with an eagle** was the symbol of the German empire and strength; the **crown of oak leaves** meant heroism; the **sword** showed readiness to fight; an **olive branch around the sword** showed willingness to make peace. The **black, red and gold tricolour** was the flag of the liberal-nationalists in 1848, banned by the Dukes of the German states, and the **rays of the rising sun** marked the beginning of a new era. Philip Veit painted Germania for the Frankfurt parliament, hung from the ceiling of the Church of St Paul.",
          },
          {
            heading: "Nationalism and imperialism",
            body:
              "By the last quarter of the nineteenth century, nationalism no longer had the idealistic liberal-democratic spirit of the first half of the century; it became a **narrow creed with limited ends**. The most serious source of tension was the **Balkans**, a region of ethnic variation including modern Romania, Bulgaria, Albania, Greece, Macedonia, Croatia, Bosnia-Herzegovina, Slovenia, Serbia and Montenegro, whose inhabitants were broadly known as **Slavs**. As the **Ottoman Empire** disintegrated, the Balkan states fought one another, and the big powers, Russia, Germany, England and Austria-Hungary, competed for control of the region. This led to a series of wars and finally the **First World War in 1914**. Meanwhile, colonised peoples elsewhere, including in India, used the idea of nationalism to resist imperial domination.",
          },
        ],
        definitions: [
          { term: "Allegory", meaning: "When an abstract idea (like freedom or the nation) is expressed through a person or thing." },
          { term: "Marianne", meaning: "The female allegory of the French nation, shown with a red cap, tricolour and cockade." },
          { term: "Germania", meaning: "The female allegory of the German nation, wearing a crown of oak leaves." },
          { term: "Imperialism", meaning: "A policy by which powerful nations extend control over other territories and peoples." },
          { term: "Balkans", meaning: "A region of ethnic variation in south-east Europe, largely under the Ottoman Empire in the 19th century." },
        ],
        dates: [
          { date: "1848", event: "Frederic Sorrieu's four prints of 'democratic and social Republics'; Philip Veit's Germania painted." },
          { date: "1871", event: "After this, nationalism turns narrower and more aggressive." },
          { date: "1882", event: "Ernst Renan lectures 'What is a Nation?' at the University of Sorbonne." },
          { date: "Late 19th century", event: "Ottoman Empire disintegrates; Balkan rivalries intensify." },
          { date: "1914", event: "First World War breaks out." },
        ],
        keyPoints: [
          "Nations were visualised as female allegories: Marianne (France) and Germania (Germany).",
          "Symbols: broken chains = freedom, oak leaves = heroism, sword = readiness to fight, olive branch = peace.",
          "The black, red and gold tricolour was the flag of the 1848 liberal-nationalists.",
          "Late 19th-century nationalism became narrow and aggressive.",
          "The Balkans, amid Ottoman decline and big-power rivalry, became the powder keg that led to the First World War.",
        ],
        explainers: {
          eli10:
            "A country is a big idea, and big ideas are hard to draw. So artists drew a lady to stand for the country, and gave her special things to hold: a sword to show she is brave, an olive branch to show she wants peace, and broken chains to show she is free. Later, though, countries became like bullies in a playground, all fighting over the same corner (the Balkans), and that fight grew into the First World War.",
          realWorld:
            "In India, the image of **Bharat Mata**, painted by Abanindranath Tagore as a calm woman holding a book, sheaves of paddy, a mala and cloth, works just like Marianne and Germania. The Ashoka Chakra on our flag and the lions of Sarnath on currency notes are national symbols too. When you see a cartoon showing India as a woman in a tricolour saree, you are seeing an allegory of the nation.",
          mnemonic:
            "Match countries and ladies by their first letters: **'Germania for Germany, Marianne for the Marseillaise land (France)'**. For symbols, remember **'Chains broke, Oak spoke, Sword woke, Olive hope'**: freedom, heroism, readiness, peace.",
        },
      },
    },
  ],
  quiz: [
    {
      id: "rne-q1",
      question: "Which of these was a provision of the Napoleonic Code of 1804?",
      options: [
        "Restoration of feudal dues",
        "Voting rights for all women",
        "Abolition of privileges based on birth",
        "Censorship of all newspapers",
      ],
      answer: 2,
      explanation: "The Civil Code abolished privileges based on birth, established equality before law and secured the right to property.",
    },
    {
      id: "rne-q2",
      question: "Who hosted the Congress of Vienna in 1815?",
      options: ["Otto von Bismarck", "Duke Metternich", "Napoleon Bonaparte", "Count Cavour"],
      answer: 1,
      explanation: "The Austrian Chancellor Duke Metternich hosted the Congress that drew up the Treaty of Vienna.",
    },
    {
      id: "rne-q3",
      question: "The Zollverein, formed in 1834, was:",
      options: [
        "A customs union of German states at Prussia's initiative",
        "A secret society of Italian revolutionaries",
        "A treaty recognising Greek independence",
        "The German national parliament",
      ],
      answer: 0,
      explanation: "The Zollverein abolished tariff barriers among German states and reduced currencies from over thirty to two.",
    },
    {
      id: "rne-q4",
      question: "Giuseppe Mazzini founded which secret society in Marseilles?",
      options: ["Carbonari", "United Irishmen", "Jacobin Club", "Young Italy"],
      answer: 3,
      explanation: "Mazzini founded Young Italy in Marseilles and later Young Europe in Berne.",
    },
    {
      id: "rne-q5",
      question: "Which treaty recognised Greece as an independent nation?",
      options: ["Treaty of Vienna, 1815", "Treaty of Constantinople, 1832", "Act of Union, 1707", "Treaty of Versailles, 1871"],
      answer: 1,
      explanation: "The Treaty of Constantinople of 1832 recognised Greece as an independent nation.",
    },
    {
      id: "rne-q6",
      question: "Who rejected the crown offered by the Frankfurt parliament in 1848?",
      options: ["Victor Emmanuel II", "Louis Philippe", "Friedrich Wilhelm IV of Prussia", "William I"],
      answer: 2,
      explanation: "Friedrich Wilhelm IV, King of Prussia, rejected the offer and opposed the elected assembly.",
    },
    {
      id: "rne-q7",
      question: "In January 1871, who was proclaimed German Emperor at Versailles?",
      options: ["Otto von Bismarck", "Friedrich Wilhelm IV", "Napoleon III", "William I of Prussia"],
      answer: 3,
      explanation: "The Prussian king William I was proclaimed German Emperor in the Hall of Mirrors at Versailles.",
    },
    {
      id: "rne-q8",
      question: "In the allegory of Germania, what does the crown of oak leaves stand for?",
      options: ["Heroism", "Peace", "Being freed", "Beginning of a new era"],
      answer: 0,
      explanation: "The German oak stands for heroism; the olive branch means peace and broken chains mean freedom.",
    },
  ],
};

/* ------------------------------------------------------------------------ */
/* Economics — Chapter 1: Development                                         */
/* ------------------------------------------------------------------------ */

const development: Chapter = {
  id: "development",
  number: 1,
  title: "Development",
  summary:
    "What development means to different people, how countries are compared using per capita income, why health, education and public facilities matter, and why development must be sustainable.",
  topics: [
    {
      id: "what-development-promises",
      title: "What Development Promises – Different People, Different Goals",
      subtopics: [
        { id: "different-people-different-goals", title: "Different people, different goals" },
        { id: "conflicting-goals", title: "Conflicting developmental goals" },
        { id: "income-and-other-goals", title: "Income and other goals" },
      ],
      content: {
        intro:
          "Development means progress, but progress for whom? A landless labourer, a rich farmer and a city girl may all want very different things from life. This topic explores how people's developmental goals differ, why they can clash, and why income is not the only thing people want.",
        sections: [
          {
            heading: "Different people, different goals",
            body:
              "People have different aspirations depending on their life situations. **Landless rural labourers** want more days of work and better wages, and a local school that gives their children quality education. **Prosperous farmers from Punjab** want assured high family income through higher support prices for their crops. An **urban unemployed youth** wants a good job, and a **girl from a rich urban family** wants as much freedom as her brother and to be able to pursue her studies abroad. So the idea of development is different for different people.",
          },
          {
            heading: "When goals conflict",
            body:
              "Sometimes, what is development for one person may even be **destructive** for another. For example, to get more electricity, industrialists may want more dams. But dams may **submerge land** and disrupt the lives of people who are displaced, such as tribal communities. They might resent this and prefer small check dams or tanks to irrigate their land. So developmental goals can be conflicting.",
          },
          {
            heading: "Income and other goals",
            body:
              "What people desire are regular work, better wages and decent prices for their crops, in other words **more income**. But besides seeking more income, people also seek **equal treatment, freedom, security and respect** from others, and they resent discrimination. Many important things in life, like a safe and secure environment, a friendly workplace or a pollution-free neighbourhood, cannot be bought with money. So for development, people look at a **mix of goals**, both material and non-material.",
          },
        ],
        definitions: [
          { term: "Development", meaning: "Progress or improvement in people's lives; its meaning depends on each person's aspirations and situation." },
          { term: "Developmental goals", meaning: "The things that people want from life, such as better income, freedom, security and respect." },
          { term: "Non-material goals", meaning: "Goals like equality, freedom, security and respect that cannot be measured or bought with money." },
        ],
        keyPoints: [
          "Different people have different, sometimes conflicting, developmental goals.",
          "What is development for one group may be destructive for another, as with large dams.",
          "Income is an important goal, but not the only one.",
          "People also want equal treatment, freedom, security and respect.",
          "Many important things in life cannot be bought with money.",
        ],
        explainers: {
          eli10:
            "Ask everyone in your class what would make their life better. One friend wants a new cycle, another wants the playground fixed, and another just wants to be allowed to play cricket like her brother. That is development: different people want different things. Sometimes one person's wish, like a big new road, might mean someone else loses their house, so wishes can clash too.",
          realWorld:
            "When the Sardar Sarovar Dam was built on the Narmada, cities and farms in Gujarat got water and electricity, but many villages and forest communities were submerged and people had to move. The Narmada Bachao Andolan protested for the rights of those displaced. Closer home, a new flyover may help office-goers reach work faster, while the street vendors under it lose their space. Both sides are thinking about 'development'.",
          mnemonic:
            "Think **'Income + FRESS'**: people want Income, plus Freedom, Respect, Equality, Safety and Security. And remember **'One's dam, another's damage'** to recall that development goals can conflict.",
        },
      },
    },
    {
      id: "national-development-and-comparison",
      title: "National Development and Comparing Countries",
      subtopics: [
        { id: "national-development", title: "National development" },
        { id: "average-income-and-per-capita-income", title: "Average income or per capita income" },
        { id: "world-bank-classification", title: "How the World Bank classifies countries" },
        { id: "limitations-of-averages", title: "Limitations of averages" },
      ],
      content: {
        intro:
          "If individuals have different goals, their notions of national development are also likely to differ. To compare countries or states, we need a common yardstick. Income is considered one of the most important attributes, so we compare countries by their average income.",
        sections: [
          {
            heading: "National development",
            body:
              "Ideas of what a country should do for development will often conflict, so we need to ask whether there is a **fair and just path** for all. Development should be one where more people's ideals and goals are met. Thinking about national development means asking what would make the lives of most people better, and how to do it fairly.",
          },
          {
            heading: "Average income or per capita income",
            body:
              "Countries with higher income are generally considered more developed than others with less income. But the total income of a country does not tell us what an average person is likely to earn, since populations differ. So we calculate **average income**, which is the total income of the country divided by its total population. Average income is also called **per capita income**. It is a useful measure for comparing countries.",
          },
          {
            heading: "The World Bank classification",
            body:
              "The **World Bank**, in its **World Development Report**, uses **per capita income** as the criterion for classifying countries. Countries with high per capita income are called **rich or high-income countries**, and those with very low per capita income are called **low-income countries**. India comes in the category of **lower-middle-income countries**. Rich countries, excluding a few countries of the Middle East and certain other small countries, are generally called developed countries.",
          },
          {
            heading: "Averages hide disparities",
            body:
              "While averages are useful for comparison, they **hide disparities**. Imagine Country A where five citizens earn 9,500, 10,500, 9,800, 10,000 and 10,200 rupees, and Country B where four citizens earn 500 each and one earns 48,000. Both have an average income of 10,000 rupees, yet in Country B one person is very rich while the others are very poor. Most people would prefer to live in Country A, where income is more **equitably distributed**.",
          },
        ],
        definitions: [
          { term: "Average income", meaning: "The total income of a country divided by its total population." },
          { term: "Per capita income", meaning: "Another name for average income; income per person." },
          { term: "World Development Report", meaning: "A report published by the World Bank that classifies countries by per capita income." },
          { term: "Developed countries", meaning: "Rich (high-income) countries, excluding a few Middle-East and small countries." },
        ],
        formulas: [
          { label: "Per capita income", expression: "Per capita income = Total income of the country ÷ Total population" },
        ],
        keyPoints: [
          "Income is one of the most important attributes for comparing countries.",
          "Per capita (average) income = total income ÷ total population.",
          "The World Bank classifies countries by per capita income.",
          "India is a lower-middle-income country.",
          "Averages are useful for comparison but hide disparities in distribution.",
        ],
        explainers: {
          eli10:
            "Suppose five children share a box of 50 toffees. If each gets 10, the average is 10 and everyone is happy. But if one child grabs 46 and the others get only 1 each, the average is still 10, even though four children are sad. Per capita income is this average for a whole country, and it can hide the fact that some people have much less than others.",
          realWorld:
            "When news channels say India's per capita income has risen, it does not mean every family's income rose equally. A software engineer in Bengaluru and a daily-wage worker in a village are both counted in the same average. That is why economists also look at poverty data and inequality, not just the average, to see how ordinary people are doing.",
          mnemonic:
            "**'Per capita = per head'**, from Latin 'caput', meaning head: total income divided by the number of heads. For the limitation, remember **'Average hides the ache'**: the average can look fine while many people are struggling.",
        },
      },
    },
    {
      id: "income-and-other-criteria",
      title: "Income and Other Criteria",
      subtopics: [
        { id: "infant-mortality-rate", title: "Infant mortality rate" },
        { id: "literacy-rate-and-net-attendance-ratio", title: "Literacy rate and net attendance ratio" },
        { id: "human-development-index", title: "Human Development Index" },
      ],
      content: {
        intro:
          "Income alone does not tell us whether people are healthy, educated or live long lives. A state with lower per capita income may still do better on health and education than a richer state. So economists also use other criteria, and the UNDP combines several of them into the Human Development Index.",
        sections: [
          {
            heading: "Health: infant mortality rate",
            body:
              "The **infant mortality rate (IMR)** indicates the number of children that die before the age of one year as a proportion of 1000 live children born in that particular year. A low IMR shows that a place has good healthcare, safe drinking water and nutrition for mothers and babies. NCERT's comparison shows that **Kerala**, though not the richest state by per capita income, has a much lower IMR than several richer states. This is because Kerala has adequate provision of **basic health and educational facilities**.",
          },
          {
            heading: "Education: literacy rate and attendance",
            body:
              "The **literacy rate** measures the proportion of the literate population in the **7 years and above** age group. The **net attendance ratio** is the total number of children of age group 14 and 15 years attending school as a percentage of the total number of children in the same age group. These tell us whether children are actually getting educated. A state can have high income but still have many children out of school.",
          },
          {
            heading: "The Human Development Index",
            body:
              "The **Human Development Report** published by the **UNDP** (United Nations Development Programme) compares countries based on the **educational levels of the people, their health status and per capita income**. Health is measured by **life expectancy at birth**, which denotes the average expected length of life of a person at the time of birth. Education is measured by the mean years of schooling and expected years of schooling. In this ranking, India's neighbour **Sri Lanka** is much ahead of India in many respects, showing that income is not everything.",
          },
        ],
        definitions: [
          { term: "Infant mortality rate (IMR)", meaning: "Number of children that die before the age of one year as a proportion of 1000 live children born in that year." },
          { term: "Literacy rate", meaning: "Proportion of literate population in the 7 years and above age group." },
          { term: "Net attendance ratio", meaning: "Children aged 14 and 15 attending school as a percentage of all children of that age group." },
          { term: "Life expectancy at birth", meaning: "The average expected length of life of a person at the time of birth." },
          { term: "Human Development Index (HDI)", meaning: "UNDP's measure combining income, health (life expectancy) and education to rank countries." },
        ],
        keyPoints: [
          "Income alone is not an adequate measure of development.",
          "IMR, literacy rate and net attendance ratio measure health and education.",
          "Kerala has low IMR due to adequate basic health and educational facilities.",
          "UNDP's Human Development Report ranks countries on income, health and education.",
          "Life expectancy at birth is the average expected length of life at birth.",
          "Sri Lanka ranks ahead of India on human development despite being a smaller economy.",
        ],
        explainers: {
          eli10:
            "Imagine two families. One has more money but the children are often sick and do not go to school. The other has less money but everyone is healthy and all the kids are learning. Which family is doing better? Economists say you must look at health and education too, not just money, and that is what the Human Development Index does.",
          realWorld:
            "Kerala is often talked about because babies there have a much better chance of surviving their first year, thanks to nearby health centres, trained nurses and high female literacy. Mothers who can read understand vaccination schedules and nutrition better. That is why government schemes like mid-day meals and immunisation drives through anganwadis matter so much for development, even if they do not directly raise incomes.",
          mnemonic:
            "HDI has three legs like a stool: **'Health, Education, Money' → 'HEM'**. Life expectancy for health, schooling for education, per capita income for money. For IMR, remember **'1 year, 1000 babies'**: deaths before age 1 per 1000 live births.",
        },
      },
    },
    {
      id: "public-facilities",
      title: "Public Facilities",
      subtopics: [
        { id: "why-public-facilities-matter", title: "Why money cannot buy everything" },
        { id: "collective-provision", title: "Collective provision of goods and services" },
        { id: "public-distribution-system", title: "Public Distribution System and Kerala's example" },
      ],
      content: {
        intro:
          "Money in your pocket cannot buy all the goods and services you need to live well. Some things, like a pollution-free environment or protection from disease, are best provided collectively. Public facilities provided by the government make a big difference to people's well-being.",
        sections: [
          {
            heading: "Money cannot buy everything",
            body:
              "Your income can buy many things, but it usually **cannot buy** a pollution-free environment, unadulterated medicines, or protection from infectious diseases, unless your whole community takes preventive steps. The cheapest and best way to get these is often to provide them **collectively**. For example, it is cheaper to have **collective security** for a whole locality than for each house to hire its own guard. Similarly, schools and health centres run by the government help everyone, not just those who can pay.",
          },
          {
            heading: "Collective provision of goods and services",
            body:
              "Many states in India have better human development because the government provides **public facilities** such as schools, health centres, safe drinking water and roads. When people in a village all benefit from a primary health centre, the whole community becomes healthier. Where these facilities are poor, even families with some income suffer, because they cannot buy good healthcare or schooling nearby.",
          },
          {
            heading: "The Public Distribution System",
            body:
              "The **Public Distribution System (PDS)** provides food grains and other essentials at subsidised rates through **ration shops**. Some states have a well-functioning PDS; where it works well, the health and nutritional status of people is likely to be better. **Kerala** stands out because of adequate provision of basic health and educational facilities, and a well-run PDS. So public facilities play a key role in development.",
          },
        ],
        definitions: [
          { term: "Public facilities", meaning: "Goods and services provided by the government for everyone, such as schools, hospitals, water supply and roads." },
          { term: "Collective provision", meaning: "Providing a good or service for a whole community together, which is often cheaper and more effective." },
          { term: "Public Distribution System (PDS)", meaning: "A government system of ration shops that supply food grains and essentials at subsidised prices." },
        ],
        keyPoints: [
          "Money cannot buy all goods and services needed for a good life.",
          "Some goods, like security and a clean environment, are best provided collectively.",
          "Government schools, health centres and safe water improve human development.",
          "A well-functioning PDS improves health and nutrition.",
          "Kerala's good health and education outcomes come largely from public facilities.",
        ],
        explainers: {
          eli10:
            "If every house on your street had to build its own little road, it would be silly and super expensive. Instead, everyone shares one road that the government builds. Schools, hospitals, clean water and ration shops work the same way. When these shared things are good, everyone lives better, even families who don't have much money.",
          realWorld:
            "Under the National Food Security Act, families get subsidised wheat and rice from the local ration shop, which helps millions eat regularly. Government hospitals like AIIMS and small primary health centres in villages give treatment that many could never afford privately. The mosquito fogging your municipality does in the monsoon protects the whole colony from dengue, something no single family could do alone.",
          mnemonic:
            "Remember **'Share to Care'**: shared (public) facilities take care of everyone. For PDS, think **'Poor Don't Starve'** to recall that the Public Distribution System provides cheap food grains.",
        },
      },
    },
    {
      id: "sustainability-of-development",
      title: "Sustainability of Development",
      subtopics: [
        { id: "renewable-and-non-renewable-resources", title: "Renewable and non-renewable resources" },
        { id: "overuse-of-groundwater", title: "Overuse of groundwater" },
        { id: "future-generations", title: "Development for future generations" },
      ],
      content: {
        intro:
          "Can the present level of development be kept up in the future? Many scientists warn that it cannot, if we keep using resources as we do now. Sustainable development means meeting our needs without destroying the environment and resources that future generations will need.",
        sections: [
          {
            heading: "Renewable and non-renewable resources",
            body:
              "**Renewable resources** are those that are replenished by nature, like crops and plants; groundwater is an example too, as it is replenished by rainfall. But even renewable resources can be **overused**; if we use more groundwater than rain recharges, we overuse it. **Non-renewable resources**, like **crude oil**, will get exhausted after years of use because there is a fixed stock on earth that cannot be replenished. New reserves may be discovered, but the total stock is still limited.",
          },
          {
            heading: "Groundwater under threat",
            body:
              "Recent evidence suggests that the **groundwater in India is under serious threat of overuse**. In many regions, especially in agriculturally prosperous areas and the hard-rock plateau areas, water tables are falling steadily. If present trends continue, a large part of the country could be facing water shortages. This shows that high growth today may not be sustainable if it uses up natural resources faster than they can be replaced.",
          },
          {
            heading: "Thinking of future generations",
            body:
              "**Sustainability of development** is a new area of knowledge in which scientists, economists, philosophers and other social scientists work together. The consequences of **environmental degradation do not respect national or state boundaries**, so the issue is no longer local. Our future is linked together. So development must be planned in a way that the needs of the present are met without compromising the ability of future generations to meet theirs.",
          },
        ],
        definitions: [
          { term: "Renewable resources", meaning: "Resources replenished by nature, such as groundwater, forests and crops, which can still be overused." },
          { term: "Non-renewable resources", meaning: "Resources with a fixed stock that get exhausted with use, such as crude oil." },
          { term: "Sustainable development", meaning: "Development that meets present needs without harming the ability of future generations to meet their own needs." },
          { term: "Environmental degradation", meaning: "Damage to the environment, such as depletion of resources, pollution and loss of biodiversity." },
        ],
        keyPoints: [
          "Even renewable resources like groundwater can be overused.",
          "Non-renewable resources like crude oil have a limited stock.",
          "Groundwater in India faces serious threat of overuse.",
          "Environmental degradation crosses state and national boundaries.",
          "Sustainable development protects resources for future generations.",
        ],
        explainers: {
          eli10:
            "Imagine a piggy bank that your grandparents filled for you and all your future cousins. If you break it open and spend everything today, nothing is left for anyone later. Earth's oil and underground water are like that piggy bank. Sustainable development means spending carefully so there is still enough for the kids who come after us.",
          realWorld:
            "In parts of Punjab, farmers now need deeper and deeper tubewells because heavy use of groundwater for paddy has made water tables fall. Chennai faced a severe water crisis in 2019 when its reservoirs almost dried up. And the smog in Delhi each winter, partly from stubble burning in neighbouring states, shows how pollution crosses state boundaries.",
          mnemonic:
            "**'Renew but don't overdo; Non-renew, soon it's through'**: renewable resources can still be overused, and non-renewable ones will run out. For sustainability, think **'Today's needs, tomorrow's seeds'**.",
        },
      },
    },
  ],
  quiz: [
    {
      id: "dev-q1",
      question: "Per capita income of a country is calculated as:",
      options: [
        "Total income ÷ total number of workers",
        "Total income × total population",
        "Total income ÷ total population",
        "Total exports ÷ total population",
      ],
      answer: 2,
      explanation: "Per capita (average) income is the total income of the country divided by its total population.",
    },
    {
      id: "dev-q2",
      question: "Which criterion does the World Bank use to classify countries in its World Development Report?",
      options: ["Per capita income", "Literacy rate", "Life expectancy", "Size of population"],
      answer: 0,
      explanation: "The World Bank uses per capita income to classify countries as rich, middle-income or low-income.",
    },
    {
      id: "dev-q3",
      question: "Infant mortality rate refers to:",
      options: [
        "Number of births per 1000 people in a year",
        "Number of children dying before age one per 1000 live births in that year",
        "Number of children below 5 in a population",
        "Deaths of mothers during childbirth",
      ],
      answer: 1,
      explanation: "IMR is the number of children that die before one year of age as a proportion of 1000 live children born in that year.",
    },
    {
      id: "dev-q4",
      question: "Which organisation publishes the Human Development Report?",
      options: ["World Bank", "IMF", "WTO", "UNDP"],
      answer: 3,
      explanation: "The United Nations Development Programme (UNDP) publishes the Human Development Report.",
    },
    {
      id: "dev-q5",
      question: "Country A's citizens earn 9,500, 10,500, 9,800, 10,000 and 10,200; Country B's earn 500, 500, 500, 500 and 48,000. What does this show?",
      options: [
        "Country B is more developed",
        "Averages can hide unequal distribution of income",
        "Country A has a higher average income",
        "Income does not matter at all",
      ],
      answer: 1,
      explanation: "Both have an average of 10,000, but income in Country B is very unequally distributed.",
    },
    {
      id: "dev-q6",
      question: "Kerala has a low infant mortality rate mainly because of:",
      options: [
        "The highest per capita income in India",
        "Large industries",
        "Adequate provision of basic health and educational facilities",
        "Heavy rainfall",
      ],
      answer: 2,
      explanation: "NCERT notes Kerala's low IMR is due to adequate provision of basic health and educational facilities.",
    },
    {
      id: "dev-q7",
      question: "Which of the following is a non-renewable resource?",
      options: ["Groundwater", "Forests", "Crops", "Crude oil"],
      answer: 3,
      explanation: "Crude oil has a fixed stock that gets exhausted with use; the others are replenished by nature.",
    },
    {
      id: "dev-q8",
      question: "Industrialists want more dams for electricity, but tribal people oppose them. This shows that:",
      options: [
        "Developmental goals of different people can conflict",
        "Dams never produce electricity",
        "Tribal people do not want development",
        "Only income matters for development",
      ],
      answer: 0,
      explanation: "What is development for one group may be destructive for another, since dams can submerge land and displace people.",
    },
  ],
};

/* ------------------------------------------------------------------------ */
/* Class 10                                                                  */
/* ------------------------------------------------------------------------ */

export const class10: Grade = {
  id: "10",
  label: "Class 10",
  subjects: [
    /* ===================================================================== */
    /* Mathematics                                                           */
    /* ===================================================================== */
    {
      id: "mathematics",
      name: "Mathematics",
      icon: "calculator",
      color: "indigo",
      textbooks: [
        {
          id: "mathematics-class-x",
          title: "Mathematics — Textbook for Class X",
          chapters: [
            realNumbers,
            {
              id: "polynomials",
              number: 2,
              title: "Polynomials",
              summary: "Zeroes of a polynomial, their geometrical meaning on a graph, and how zeroes relate to the coefficients.",
              topics: [
                {
                  id: "geometrical-meaning-of-zeroes",
                  title: "Geometrical Meaning of the Zeroes of a Polynomial",
                  subtopics: [
                    { id: "degree-and-types", title: "Degree: linear, quadratic and cubic polynomials" },
                    { id: "zeroes-of-a-polynomial", title: "Zeroes of a polynomial" },
                    { id: "zeroes-from-graphs", title: "Reading zeroes from graphs" },
                  ],
                },
                {
                  id: "relationship-between-zeroes-and-coefficients",
                  title: "Relationship between Zeroes and Coefficients of a Polynomial",
                  subtopics: [
                    { id: "sum-and-product-of-zeroes", title: "Sum and product of zeroes of a quadratic" },
                    { id: "cubic-polynomial-relations", title: "Relations for a cubic polynomial" },
                    { id: "forming-a-quadratic", title: "Forming a quadratic from given zeroes" },
                  ],
                },
              ],
            },
            {
              id: "pair-of-linear-equations-in-two-variables",
              number: 3,
              title: "Pair of Linear Equations in Two Variables",
              summary: "Solving two linear equations together by graphing and by the substitution and elimination methods.",
              topics: [
                {
                  id: "graphical-method-of-solution",
                  title: "Graphical Method of Solution of a Pair of Linear Equations",
                  subtopics: [
                    { id: "intersecting-coincident-parallel-lines", title: "Intersecting, coincident and parallel lines" },
                    { id: "consistent-and-inconsistent-pairs", title: "Consistent and inconsistent pairs" },
                    { id: "ratio-conditions", title: "Conditions using ratios of coefficients" },
                  ],
                },
                {
                  id: "algebraic-methods-of-solving",
                  title: "Algebraic Methods of Solving a Pair of Linear Equations",
                  subtopics: [
                    { id: "substitution-method", title: "Substitution method" },
                    { id: "elimination-method", title: "Elimination method" },
                    { id: "word-problems", title: "Word problems" },
                  ],
                },
              ],
            },
            {
              id: "quadratic-equations",
              number: 4,
              title: "Quadratic Equations",
              summary: "Forming quadratic equations from situations, solving them by factorisation and judging the nature of their roots.",
              topics: [
                {
                  id: "quadratic-equations-standard-form",
                  title: "Quadratic Equations",
                  subtopics: [
                    { id: "standard-form", title: "Standard form ax² + bx + c = 0" },
                    { id: "representing-situations", title: "Representing situations mathematically" },
                  ],
                },
                {
                  id: "solution-by-factorisation",
                  title: "Solution of a Quadratic Equation by Factorisation",
                  subtopics: [
                    { id: "splitting-the-middle-term", title: "Splitting the middle term" },
                    { id: "roots-of-a-quadratic", title: "Roots of a quadratic equation" },
                  ],
                },
                {
                  id: "nature-of-roots",
                  title: "Nature of Roots",
                  subtopics: [
                    { id: "discriminant", title: "The discriminant b² − 4ac" },
                    { id: "real-equal-or-no-roots", title: "Two distinct, equal or no real roots" },
                  ],
                },
              ],
            },
            {
              id: "arithmetic-progressions",
              number: 5,
              title: "Arithmetic Progressions",
              summary: "Lists of numbers with a common difference, their nth term and the sum of their first n terms.",
              topics: [
                {
                  id: "arithmetic-progressions-basics",
                  title: "Arithmetic Progressions",
                  subtopics: [
                    { id: "common-difference", title: "First term and common difference" },
                    { id: "identifying-an-ap", title: "Identifying an AP" },
                  ],
                },
                {
                  id: "nth-term-of-an-ap",
                  title: "nth Term of an AP",
                  subtopics: [
                    { id: "general-term-formula", title: "aₙ = a + (n − 1)d" },
                    { id: "nth-term-from-the-end", title: "nth term from the end" },
                    { id: "applications-of-nth-term", title: "Applications" },
                  ],
                },
                {
                  id: "sum-of-first-n-terms",
                  title: "Sum of First n Terms of an AP",
                  subtopics: [
                    { id: "sum-formula", title: "Sₙ = n/2 [2a + (n − 1)d]" },
                    { id: "sum-using-last-term", title: "Sₙ = n/2 (a + l)" },
                    { id: "sum-of-natural-numbers", title: "Sum of first n natural numbers" },
                  ],
                },
              ],
            },
            {
              id: "triangles",
              number: 6,
              title: "Triangles",
              summary: "Similar figures, the Basic Proportionality Theorem and the criteria for similarity of triangles.",
              topics: [
                {
                  id: "similar-figures",
                  title: "Similar Figures",
                  subtopics: [
                    { id: "congruent-vs-similar", title: "Congruent versus similar figures" },
                    { id: "similarity-of-polygons", title: "Similarity of polygons" },
                  ],
                },
                {
                  id: "similarity-of-triangles",
                  title: "Similarity of Triangles",
                  subtopics: [
                    { id: "basic-proportionality-theorem", title: "Basic Proportionality Theorem (Thales)" },
                    { id: "converse-of-bpt", title: "Converse of the Basic Proportionality Theorem" },
                  ],
                },
                {
                  id: "criteria-for-similarity-of-triangles",
                  title: "Criteria for Similarity of Triangles",
                  subtopics: [
                    { id: "aaa-and-aa-criterion", title: "AAA and AA criterion" },
                    { id: "sss-criterion", title: "SSS criterion" },
                    { id: "sas-criterion", title: "SAS criterion" },
                  ],
                },
              ],
            },
            {
              id: "coordinate-geometry",
              number: 7,
              title: "Coordinate Geometry",
              summary: "Finding the distance between two points and the point that divides a line segment in a given ratio.",
              topics: [
                {
                  id: "distance-formula",
                  title: "Distance Formula",
                  subtopics: [
                    { id: "deriving-the-distance-formula", title: "Deriving the distance formula" },
                    { id: "distance-from-origin", title: "Distance from the origin" },
                    { id: "collinearity-and-shapes", title: "Checking collinearity and types of figures" },
                  ],
                },
                {
                  id: "section-formula",
                  title: "Section Formula",
                  subtopics: [
                    { id: "internal-division", title: "Internal division in a ratio m₁ : m₂" },
                    { id: "mid-point-formula", title: "Mid-point formula" },
                    { id: "finding-the-ratio", title: "Finding the ratio of division" },
                  ],
                },
              ],
            },
            introductionToTrigonometry,
            {
              id: "some-applications-of-trigonometry",
              number: 9,
              title: "Some Applications of Trigonometry",
              summary: "Using trigonometric ratios to find heights and distances with angles of elevation and depression.",
              topics: [
                {
                  id: "line-of-sight-elevation-depression",
                  title: "Line of Sight, Angle of Elevation and Angle of Depression",
                  subtopics: [
                    { id: "line-of-sight", title: "Line of sight" },
                    { id: "angle-of-elevation", title: "Angle of elevation" },
                    { id: "angle-of-depression", title: "Angle of depression" },
                  ],
                },
                {
                  id: "heights-and-distances",
                  title: "Heights and Distances",
                  subtopics: [
                    { id: "problems-with-one-triangle", title: "Problems with one right triangle" },
                    { id: "problems-with-two-triangles", title: "Problems with two right triangles" },
                    { id: "choosing-the-right-ratio", title: "Choosing the right ratio" },
                  ],
                },
              ],
            },
            {
              id: "circles",
              number: 10,
              title: "Circles",
              summary: "Tangents to a circle, why a tangent is perpendicular to the radius, and tangents drawn from an external point.",
              topics: [
                {
                  id: "tangent-to-a-circle",
                  title: "Tangent to a Circle",
                  subtopics: [
                    { id: "secant-and-tangent", title: "Non-intersecting line, secant and tangent" },
                    { id: "tangent-perpendicular-to-radius", title: "Tangent is perpendicular to the radius" },
                  ],
                },
                {
                  id: "number-of-tangents-from-a-point",
                  title: "Number of Tangents from a Point on a Circle",
                  subtopics: [
                    { id: "point-inside-on-outside", title: "Point inside, on and outside the circle" },
                    { id: "equal-tangent-lengths", title: "Lengths of tangents from an external point are equal" },
                  ],
                },
              ],
            },
            {
              id: "areas-related-to-circles",
              number: 11,
              title: "Areas Related to Circles",
              summary: "Areas of sectors and segments of a circle and the length of an arc.",
              topics: [
                {
                  id: "circle-review",
                  title: "Circles: Perimeter and Area",
                  subtopics: [
                    { id: "circumference-and-area", title: "Circumference 2πr and area πr²" },
                    { id: "arcs-minor-and-major", title: "Minor and major arcs" },
                  ],
                },
                {
                  id: "areas-of-sector-and-segment",
                  title: "Areas of Sector and Segment of a Circle",
                  subtopics: [
                    { id: "area-of-a-sector", title: "Area of a sector (θ/360) × πr²" },
                    { id: "length-of-an-arc", title: "Length of an arc (θ/360) × 2πr" },
                    { id: "area-of-a-segment", title: "Area of a segment" },
                  ],
                },
              ],
            },
            {
              id: "surface-areas-and-volumes",
              number: 12,
              title: "Surface Areas and Volumes",
              summary: "Surface areas and volumes of solids formed by combining cubes, cuboids, cylinders, cones, spheres and hemispheres.",
              topics: [
                {
                  id: "surface-area-of-combination-of-solids",
                  title: "Surface Area of a Combination of Solids",
                  subtopics: [
                    { id: "visible-surfaces", title: "Adding only the visible surfaces" },
                    { id: "common-combinations", title: "Common combinations: capsule, tent, toy" },
                  ],
                },
                {
                  id: "volume-of-combination-of-solids",
                  title: "Volume of a Combination of Solids",
                  subtopics: [
                    { id: "adding-volumes", title: "Adding volumes of parts" },
                    { id: "removing-parts", title: "Solids with parts scooped out" },
                  ],
                },
              ],
            },
            {
              id: "statistics",
              number: 13,
              title: "Statistics",
              summary: "Mean, mode and median of grouped data and the empirical relationship between them.",
              topics: [
                {
                  id: "mean-of-grouped-data",
                  title: "Mean of Grouped Data",
                  subtopics: [
                    { id: "direct-method", title: "Direct method" },
                    { id: "assumed-mean-method", title: "Assumed mean method" },
                    { id: "step-deviation-method", title: "Step-deviation method" },
                  ],
                },
                {
                  id: "mode-of-grouped-data",
                  title: "Mode of Grouped Data",
                  subtopics: [
                    { id: "modal-class", title: "Modal class" },
                    { id: "mode-formula", title: "Mode = l + [(f₁ − f₀)/(2f₁ − f₀ − f₂)] × h" },
                  ],
                },
                {
                  id: "median-of-grouped-data",
                  title: "Median of Grouped Data",
                  subtopics: [
                    { id: "cumulative-frequency", title: "Cumulative frequency" },
                    { id: "median-formula", title: "Median = l + [(n/2 − cf)/f] × h" },
                    { id: "empirical-relationship", title: "3 Median = Mode + 2 Mean" },
                  ],
                },
              ],
            },
            {
              id: "probability",
              number: 14,
              title: "Probability",
              summary: "The theoretical approach to probability using equally likely outcomes, with coins, dice and cards.",
              topics: [
                {
                  id: "probability-a-theoretical-approach",
                  title: "Probability — A Theoretical Approach",
                  subtopics: [
                    { id: "equally-likely-outcomes", title: "Equally likely outcomes" },
                    { id: "theoretical-probability-formula", title: "P(E) = favourable outcomes ÷ total outcomes" },
                    { id: "elementary-events", title: "Elementary events" },
                  ],
                },
                {
                  id: "properties-of-probability",
                  title: "Properties and Applications of Probability",
                  subtopics: [
                    { id: "impossible-and-sure-events", title: "Impossible and sure events" },
                    { id: "complementary-events", title: "Complementary events: P(E) + P(not E) = 1" },
                    { id: "coins-dice-and-cards", title: "Problems with coins, dice and playing cards" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    /* ===================================================================== */
    /* Science                                                               */
    /* ===================================================================== */
    {
      id: "science",
      name: "Science",
      icon: "flask",
      color: "emerald",
      textbooks: [
        {
          id: "science-class-x",
          title: "Science — Textbook for Class X",
          chapters: [
            chemicalReactionsAndEquations,
            {
              id: "acids-bases-and-salts",
              number: 2,
              title: "Acids, Bases and Salts",
              summary: "Properties of acids and bases, the pH scale, and important salts such as common salt, baking soda, washing soda, bleaching powder and plaster of Paris.",
              topics: [
                {
                  id: "chemical-properties-of-acids-and-bases",
                  title: "Understanding the Chemical Properties of Acids and Bases",
                  subtopics: [
                    { id: "indicators", title: "Acids and bases in the laboratory: indicators" },
                    { id: "reaction-with-metals-and-carbonates", title: "Reaction with metals, carbonates and hydrogencarbonates" },
                    { id: "neutralisation", title: "Neutralisation and reaction with metal oxides" },
                  ],
                },
                {
                  id: "what-acids-and-bases-have-in-common",
                  title: "What do All Acids and All Bases have in Common?",
                  subtopics: [
                    { id: "hydrogen-ions-in-water", title: "H⁺ ions in water" },
                    { id: "bases-in-water-and-alkalis", title: "Bases in water and alkalis" },
                    { id: "diluting-acids", title: "Diluting acids safely" },
                  ],
                },
                {
                  id: "strength-of-acid-or-base-solutions",
                  title: "How Strong are Acid or Base Solutions?",
                  subtopics: [
                    { id: "ph-scale", title: "The pH scale" },
                    { id: "importance-of-ph", title: "Importance of pH in everyday life" },
                  ],
                },
                {
                  id: "more-about-salts",
                  title: "More about Salts",
                  subtopics: [
                    { id: "family-of-salts-and-ph", title: "Family of salts and pH of salts" },
                    { id: "chemicals-from-common-salt", title: "Chemicals from common salt: NaOH, bleaching powder, baking soda, washing soda" },
                    { id: "water-of-crystallisation", title: "Water of crystallisation and plaster of Paris" },
                  ],
                },
              ],
            },
            {
              id: "metals-and-non-metals",
              number: 3,
              title: "Metals and Non-metals",
              summary: "Physical and chemical properties of metals and non-metals, ionic compounds, extraction of metals and prevention of corrosion.",
              topics: [
                {
                  id: "physical-properties",
                  title: "Physical Properties",
                  subtopics: [
                    { id: "properties-of-metals", title: "Metals: lustre, malleability, ductility, conductivity" },
                    { id: "properties-of-non-metals", title: "Non-metals and exceptions" },
                  ],
                },
                {
                  id: "chemical-properties-of-metals",
                  title: "Chemical Properties of Metals",
                  subtopics: [
                    { id: "metals-with-oxygen-and-water", title: "Reaction with oxygen and water" },
                    { id: "metals-with-acids", title: "Reaction with acids" },
                    { id: "reactivity-series", title: "The reactivity series" },
                  ],
                },
                {
                  id: "how-metals-and-non-metals-react",
                  title: "How do Metals and Non-metals React?",
                  subtopics: [
                    { id: "ionic-bonds", title: "Formation of ionic compounds" },
                    { id: "properties-of-ionic-compounds", title: "Properties of ionic compounds" },
                  ],
                },
                {
                  id: "occurrence-of-metals",
                  title: "Occurrence of Metals",
                  subtopics: [
                    { id: "extraction-of-metals", title: "Extraction of metals: enrichment of ores" },
                    { id: "metals-by-reactivity", title: "Extracting metals low, middle and high in the series" },
                    { id: "refining-of-metals", title: "Refining of metals" },
                  ],
                },
                {
                  id: "corrosion-of-metals",
                  title: "Corrosion",
                  subtopics: [
                    { id: "prevention-of-corrosion", title: "Prevention of corrosion: painting, galvanising" },
                    { id: "alloys", title: "Alloys" },
                  ],
                },
              ],
            },
            {
              id: "carbon-and-its-compounds",
              number: 4,
              title: "Carbon and its Compounds",
              summary: "Covalent bonding in carbon, why carbon forms so many compounds, reactions of carbon compounds, ethanol, ethanoic acid, and soaps and detergents.",
              topics: [
                {
                  id: "bonding-in-carbon",
                  title: "Bonding in Carbon — The Covalent Bond",
                  subtopics: [
                    { id: "covalent-bond", title: "Sharing electrons: the covalent bond" },
                    { id: "single-double-triple-bonds", title: "Single, double and triple bonds" },
                  ],
                },
                {
                  id: "versatile-nature-of-carbon",
                  title: "Versatile Nature of Carbon",
                  subtopics: [
                    { id: "catenation-and-tetravalency", title: "Catenation and tetravalency" },
                    { id: "saturated-and-unsaturated", title: "Saturated and unsaturated compounds" },
                    { id: "homologous-series-and-functional-groups", title: "Homologous series and functional groups" },
                    { id: "nomenclature", title: "Nomenclature of carbon compounds" },
                  ],
                },
                {
                  id: "chemical-properties-of-carbon-compounds",
                  title: "Chemical Properties of Carbon Compounds",
                  subtopics: [
                    { id: "combustion", title: "Combustion" },
                    { id: "oxidation", title: "Oxidation" },
                    { id: "addition-and-substitution", title: "Addition and substitution reactions" },
                  ],
                },
                {
                  id: "ethanol-and-ethanoic-acid",
                  title: "Some Important Carbon Compounds — Ethanol and Ethanoic Acid",
                  subtopics: [
                    { id: "properties-of-ethanol", title: "Properties of ethanol" },
                    { id: "properties-of-ethanoic-acid", title: "Properties of ethanoic acid and esterification" },
                  ],
                },
                {
                  id: "soaps-and-detergents",
                  title: "Soaps and Detergents",
                  subtopics: [
                    { id: "micelles", title: "How soaps clean: micelles" },
                    { id: "hard-water-and-detergents", title: "Hard water, scum and detergents" },
                  ],
                },
              ],
            },
            {
              id: "life-processes",
              number: 5,
              title: "Life Processes",
              summary: "How living organisms carry out nutrition, respiration, transportation and excretion.",
              topics: [
                {
                  id: "what-are-life-processes",
                  title: "What are Life Processes?",
                  subtopics: [
                    { id: "maintenance-functions", title: "Maintenance functions of living organisms" },
                    { id: "need-for-energy-and-raw-materials", title: "Need for energy and raw materials" },
                  ],
                },
                {
                  id: "nutrition",
                  title: "Nutrition",
                  subtopics: [
                    { id: "autotrophic-nutrition", title: "Autotrophic nutrition and photosynthesis" },
                    { id: "heterotrophic-nutrition", title: "Heterotrophic nutrition" },
                    { id: "nutrition-in-human-beings", title: "Nutrition in human beings" },
                  ],
                },
                {
                  id: "respiration",
                  title: "Respiration",
                  subtopics: [
                    { id: "aerobic-and-anaerobic", title: "Aerobic and anaerobic respiration" },
                    { id: "human-respiratory-system", title: "Human respiratory system" },
                  ],
                },
                {
                  id: "transportation",
                  title: "Transportation",
                  subtopics: [
                    { id: "transportation-in-human-beings", title: "Transportation in human beings: heart, blood vessels" },
                    { id: "lymph", title: "Lymph" },
                    { id: "transportation-in-plants", title: "Transportation in plants: xylem and phloem" },
                  ],
                },
                {
                  id: "excretion",
                  title: "Excretion",
                  subtopics: [
                    { id: "excretion-in-human-beings", title: "Excretion in human beings: kidneys and nephrons" },
                    { id: "excretion-in-plants", title: "Excretion in plants" },
                  ],
                },
              ],
            },
            {
              id: "control-and-coordination",
              number: 6,
              title: "Control and Coordination",
              summary: "How the nervous system and hormones coordinate the body in animals, and how plants respond to stimuli.",
              topics: [
                {
                  id: "animals-nervous-system",
                  title: "Animals — Nervous System",
                  subtopics: [
                    { id: "neuron-and-synapse", title: "Neuron and synapse" },
                    { id: "reflex-actions", title: "Reflex actions and reflex arc" },
                    { id: "human-brain", title: "Human brain" },
                    { id: "protection-of-tissues", title: "How are these tissues protected?" },
                  ],
                },
                {
                  id: "coordination-in-plants",
                  title: "Coordination in Plants",
                  subtopics: [
                    { id: "immediate-response-to-stimulus", title: "Immediate response to stimulus" },
                    { id: "movement-due-to-growth", title: "Movement due to growth: tropisms" },
                    { id: "plant-hormones", title: "Plant hormones" },
                  ],
                },
                {
                  id: "hormones-in-animals",
                  title: "Hormones in Animals",
                  subtopics: [
                    { id: "endocrine-glands", title: "Endocrine glands and their hormones" },
                    { id: "feedback-mechanism", title: "Feedback mechanism" },
                  ],
                },
              ],
            },
            {
              id: "how-do-organisms-reproduce",
              number: 7,
              title: "How do Organisms Reproduce?",
              summary: "Asexual and sexual modes of reproduction in organisms, including flowering plants and human beings, and reproductive health.",
              topics: [
                {
                  id: "do-organisms-create-exact-copies",
                  title: "Do Organisms Create Exact Copies of Themselves?",
                  subtopics: [
                    { id: "dna-copying-and-variation", title: "DNA copying and variation" },
                    { id: "importance-of-variation", title: "Importance of variation" },
                  ],
                },
                {
                  id: "modes-of-reproduction-by-single-organisms",
                  title: "Modes of Reproduction Used by Single Organisms",
                  subtopics: [
                    { id: "fission-and-fragmentation", title: "Fission and fragmentation" },
                    { id: "regeneration-and-budding", title: "Regeneration and budding" },
                    { id: "vegetative-propagation", title: "Vegetative propagation" },
                    { id: "spore-formation", title: "Spore formation" },
                  ],
                },
                {
                  id: "sexual-reproduction",
                  title: "Sexual Reproduction",
                  subtopics: [
                    { id: "why-sexual-reproduction", title: "Why the sexual mode of reproduction?" },
                    { id: "sexual-reproduction-in-flowering-plants", title: "Sexual reproduction in flowering plants" },
                    { id: "reproduction-in-human-beings", title: "Reproduction in human beings" },
                    { id: "reproductive-health", title: "Reproductive health" },
                  ],
                },
              ],
            },
            {
              id: "heredity",
              number: 8,
              title: "Heredity",
              summary: "How variations arise during reproduction, Mendel's rules of inheritance and how the sex of a child is determined.",
              topics: [
                {
                  id: "accumulation-of-variation",
                  title: "Accumulation of Variation during Reproduction",
                  subtopics: [
                    { id: "variation-across-generations", title: "Variation across generations" },
                    { id: "survival-advantage", title: "Variations and survival" },
                  ],
                },
                {
                  id: "heredity-and-inheritance",
                  title: "Heredity",
                  subtopics: [
                    { id: "inherited-traits", title: "Inherited traits" },
                    { id: "mendels-contributions", title: "Rules for the inheritance of traits — Mendel's contributions" },
                    { id: "how-traits-get-expressed", title: "How do these traits get expressed?" },
                    { id: "sex-determination", title: "Sex determination" },
                  ],
                },
              ],
            },
            lightReflectionAndRefraction,
            {
              id: "the-human-eye-and-the-colourful-world",
              number: 10,
              title: "The Human Eye and the Colourful World",
              summary: "How the eye works, common defects of vision and their correction, and optical phenomena such as dispersion, atmospheric refraction and scattering.",
              topics: [
                {
                  id: "the-human-eye",
                  title: "The Human Eye",
                  subtopics: [
                    { id: "structure-of-the-eye", title: "Structure of the eye" },
                    { id: "power-of-accommodation", title: "Power of accommodation" },
                  ],
                },
                {
                  id: "defects-of-vision",
                  title: "Defects of Vision and their Correction",
                  subtopics: [
                    { id: "myopia", title: "Myopia (near-sightedness)" },
                    { id: "hypermetropia", title: "Hypermetropia (far-sightedness)" },
                    { id: "presbyopia", title: "Presbyopia" },
                  ],
                },
                {
                  id: "prism-and-dispersion",
                  title: "Refraction through a Prism and Dispersion of White Light",
                  subtopics: [
                    { id: "refraction-through-a-prism", title: "Refraction of light through a prism" },
                    { id: "dispersion-and-spectrum", title: "Dispersion and the spectrum" },
                    { id: "rainbow", title: "Formation of a rainbow" },
                  ],
                },
                {
                  id: "atmospheric-refraction",
                  title: "Atmospheric Refraction",
                  subtopics: [
                    { id: "twinkling-of-stars", title: "Twinkling of stars" },
                    { id: "advance-sunrise-delayed-sunset", title: "Advance sunrise and delayed sunset" },
                  ],
                },
                {
                  id: "scattering-of-light",
                  title: "Scattering of Light",
                  subtopics: [
                    { id: "tyndall-effect", title: "Tyndall effect" },
                    { id: "why-the-sky-is-blue", title: "Why is the colour of the clear sky blue?" },
                  ],
                },
              ],
            },
            {
              id: "electricity",
              number: 11,
              title: "Electricity",
              summary: "Electric current, potential difference, Ohm's law, resistance and its factors, combinations of resistors, and the heating effect and power of electric current.",
              topics: [
                {
                  id: "current-and-potential-difference",
                  title: "Electric Current, Potential Difference and Circuit Diagrams",
                  subtopics: [
                    { id: "electric-current-and-circuit", title: "Electric current and circuit" },
                    { id: "potential-difference", title: "Electric potential and potential difference" },
                    { id: "circuit-diagram", title: "Circuit diagram symbols" },
                  ],
                },
                {
                  id: "ohms-law",
                  title: "Ohm's Law",
                  subtopics: [
                    { id: "v-equals-ir", title: "V = IR" },
                    { id: "v-i-graph", title: "V–I graph" },
                  ],
                },
                {
                  id: "factors-affecting-resistance",
                  title: "Factors on which the Resistance of a Conductor Depends",
                  subtopics: [
                    { id: "length-and-area", title: "Length and area of cross-section" },
                    { id: "resistivity", title: "Resistivity" },
                  ],
                },
                {
                  id: "resistance-of-a-system-of-resistors",
                  title: "Resistance of a System of Resistors",
                  subtopics: [
                    { id: "resistors-in-series", title: "Resistors in series" },
                    { id: "resistors-in-parallel", title: "Resistors in parallel" },
                  ],
                },
                {
                  id: "heating-effect-and-electric-power",
                  title: "Heating Effect of Electric Current and Electric Power",
                  subtopics: [
                    { id: "joules-law-of-heating", title: "Joule's law of heating" },
                    { id: "applications-of-heating-effect", title: "Practical applications of heating effect" },
                    { id: "electric-power", title: "Electric power and kilowatt hour" },
                  ],
                },
              ],
            },
            {
              id: "magnetic-effects-of-electric-current",
              number: 12,
              title: "Magnetic Effects of Electric Current",
              summary: "Magnetic fields and field lines, fields due to current-carrying conductors, force on a conductor in a magnetic field, and domestic electric circuits.",
              topics: [
                {
                  id: "magnetic-field-and-field-lines",
                  title: "Magnetic Field and Field Lines",
                  subtopics: [
                    { id: "compass-and-field", title: "Compass needle and magnetic field" },
                    { id: "properties-of-field-lines", title: "Properties of magnetic field lines" },
                  ],
                },
                {
                  id: "magnetic-field-due-to-current",
                  title: "Magnetic Field due to a Current-Carrying Conductor",
                  subtopics: [
                    { id: "straight-conductor", title: "Straight conductor and right-hand thumb rule" },
                    { id: "circular-loop", title: "Circular loop" },
                    { id: "solenoid", title: "Solenoid and electromagnet" },
                  ],
                },
                {
                  id: "force-on-current-carrying-conductor",
                  title: "Force on a Current-Carrying Conductor in a Magnetic Field",
                  subtopics: [
                    { id: "direction-of-force", title: "Direction of force" },
                    { id: "flemings-left-hand-rule", title: "Fleming's left-hand rule" },
                  ],
                },
                {
                  id: "domestic-electric-circuits",
                  title: "Domestic Electric Circuits",
                  subtopics: [
                    { id: "live-neutral-earth", title: "Live, neutral and earth wires" },
                    { id: "fuse-and-overloading", title: "Fuse, short-circuiting and overloading" },
                  ],
                },
              ],
            },
            {
              id: "our-environment",
              number: 13,
              title: "Our Environment",
              summary: "Ecosystems and their components, food chains and webs, energy flow, and how human activities such as ozone depletion and waste generation affect the environment.",
              topics: [
                {
                  id: "adding-waste-to-environment",
                  title: "What Happens When We Add Our Waste to the Environment?",
                  subtopics: [
                    { id: "biodegradable-substances", title: "Biodegradable substances" },
                    { id: "non-biodegradable-substances", title: "Non-biodegradable substances" },
                  ],
                },
                {
                  id: "ecosystem-and-its-components",
                  title: "Ecosystem — What are its Components?",
                  subtopics: [
                    { id: "biotic-and-abiotic", title: "Biotic and abiotic components" },
                    { id: "food-chains-and-webs", title: "Food chains and food webs" },
                    { id: "energy-flow-ten-percent-law", title: "Flow of energy and the 10 per cent law" },
                    { id: "biological-magnification", title: "Biological magnification" },
                  ],
                },
                {
                  id: "how-our-activities-affect-environment",
                  title: "How do Our Activities Affect the Environment?",
                  subtopics: [
                    { id: "ozone-layer-depletion", title: "Ozone layer and its depletion" },
                    { id: "managing-the-garbage", title: "Managing the garbage we produce" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    /* ===================================================================== */
    /* Social Science                                                        */
    /* ===================================================================== */
    {
      id: "social-science",
      name: "Social Science",
      icon: "globe",
      color: "amber",
      textbooks: [
        /* ---------------- History ---------------- */
        {
          id: "india-and-the-contemporary-world-ii",
          title: "India and the Contemporary World – II (History)",
          chapters: [
            riseOfNationalismInEurope,
            {
              id: "nationalism-in-india",
              number: 2,
              title: "Nationalism in India",
              summary: "How the Non-Cooperation and Civil Disobedience movements under Gandhiji drew different social groups into the national struggle and built a sense of collective belonging.",
              topics: [
                {
                  id: "first-world-war-khilafat-and-non-cooperation",
                  title: "The First World War, Khilafat and Non-Cooperation",
                  subtopics: [
                    { id: "idea-of-satyagraha", title: "The idea of satyagraha" },
                    { id: "rowlatt-act", title: "The Rowlatt Act and Jallianwala Bagh" },
                    { id: "why-non-cooperation", title: "Why non-cooperation?" },
                  ],
                },
                {
                  id: "differing-strands-within-the-movement",
                  title: "Differing Strands within the Movement",
                  subtopics: [
                    { id: "movement-in-the-towns", title: "The movement in the towns" },
                    { id: "rebellion-in-the-countryside", title: "Rebellion in the countryside" },
                    { id: "swaraj-in-the-plantations", title: "Swaraj in the plantations" },
                  ],
                },
                {
                  id: "towards-civil-disobedience",
                  title: "Towards Civil Disobedience",
                  subtopics: [
                    { id: "salt-march", title: "The Salt March and the Civil Disobedience Movement" },
                    { id: "how-participants-saw-the-movement", title: "How participants saw the movement" },
                    { id: "limits-of-civil-disobedience", title: "The limits of Civil Disobedience" },
                  ],
                },
                {
                  id: "sense-of-collective-belonging",
                  title: "The Sense of Collective Belonging",
                  subtopics: [
                    { id: "images-and-symbols", title: "Bharat Mata, flags and symbols" },
                    { id: "folklore-and-history", title: "Folklore and reinterpretation of history" },
                  ],
                },
              ],
            },
            {
              id: "the-making-of-a-global-world",
              number: 3,
              title: "The Making of a Global World",
              summary: "The long history of global trade, migration and capital flows, from the silk routes to the nineteenth-century world economy, the Great Depression and the post-war order.",
              topics: [
                {
                  id: "the-pre-modern-world",
                  title: "The Pre-modern World",
                  subtopics: [
                    { id: "silk-routes", title: "Silk routes link the world" },
                    { id: "food-travels", title: "Food travels: spaghetti and potato" },
                    { id: "conquest-disease-and-trade", title: "Conquest, disease and trade" },
                  ],
                },
                {
                  id: "the-nineteenth-century",
                  title: "The Nineteenth Century (1815–1914)",
                  subtopics: [
                    { id: "a-world-economy-takes-shape", title: "A world economy takes shape and the role of technology" },
                    { id: "colonialism-and-rinderpest", title: "Late nineteenth-century colonialism and rinderpest" },
                    { id: "indentured-labour-migration", title: "Indentured labour migration from India" },
                    { id: "indian-trade-and-colonialism", title: "Indian entrepreneurs abroad, Indian trade and colonialism" },
                  ],
                },
                {
                  id: "the-inter-war-economy",
                  title: "The Inter-war Economy",
                  subtopics: [
                    { id: "wartime-transformations", title: "Wartime transformations and post-war recovery" },
                    { id: "rise-of-mass-production", title: "Rise of mass production and consumption" },
                    { id: "the-great-depression", title: "The Great Depression" },
                    { id: "india-and-the-great-depression", title: "India and the Great Depression" },
                  ],
                },
                {
                  id: "rebuilding-a-world-economy",
                  title: "Rebuilding a World Economy: The Post-War Era",
                  subtopics: [
                    { id: "bretton-woods", title: "Post-war settlement and the Bretton Woods institutions" },
                    { id: "decolonisation-and-independence", title: "Decolonisation and independence" },
                    { id: "end-of-bretton-woods-and-globalisation", title: "End of Bretton Woods and the beginning of globalisation" },
                  ],
                },
              ],
            },
            {
              id: "the-age-of-industrialisation",
              number: 4,
              title: "The Age of Industrialisation",
              summary: "Proto-industrialisation, the slow spread of factories and steam power in Britain, and how industrialisation unfolded in colonial India.",
              topics: [
                {
                  id: "before-the-industrial-revolution",
                  title: "Before the Industrial Revolution",
                  subtopics: [
                    { id: "proto-industrialisation", title: "Proto-industrialisation" },
                    { id: "coming-up-of-the-factory", title: "The coming up of the factory" },
                    { id: "pace-of-industrial-change", title: "The pace of industrial change" },
                  ],
                },
                {
                  id: "hand-labour-and-steam-power",
                  title: "Hand Labour and Steam Power",
                  subtopics: [
                    { id: "preference-for-hand-labour", title: "Why industrialists preferred hand labour" },
                    { id: "life-of-the-workers", title: "Life of the workers" },
                  ],
                },
                {
                  id: "industrialisation-in-the-colonies",
                  title: "Industrialisation in the Colonies",
                  subtopics: [
                    { id: "age-of-indian-textiles", title: "The age of Indian textiles" },
                    { id: "what-happened-to-weavers", title: "What happened to weavers?" },
                    { id: "manchester-comes-to-india", title: "Manchester comes to India" },
                  ],
                },
                {
                  id: "factories-come-up",
                  title: "Factories Come Up",
                  subtopics: [
                    { id: "early-entrepreneurs", title: "The early entrepreneurs" },
                    { id: "where-did-workers-come-from", title: "Where did the workers come from?" },
                    { id: "peculiarities-of-industrial-growth", title: "The peculiarities of industrial growth and small-scale industries" },
                  ],
                },
                {
                  id: "market-for-goods",
                  title: "Market for Goods",
                  subtopics: [
                    { id: "advertisements", title: "Advertisements and labels" },
                    { id: "calendars-and-nationalist-messages", title: "Calendars and nationalist messages" },
                  ],
                },
              ],
            },
            {
              id: "print-culture-and-the-modern-world",
              number: 5,
              title: "Print Culture and the Modern World",
              summary: "The history of print from East Asia to Europe and India, and how print shaped religious debate, revolution, reform and nationalism.",
              topics: [
                {
                  id: "the-first-printed-books",
                  title: "The First Printed Books",
                  subtopics: [
                    { id: "print-in-china", title: "Woodblock printing in China" },
                    { id: "print-in-japan", title: "Print in Japan" },
                  ],
                },
                {
                  id: "print-comes-to-europe",
                  title: "Print Comes to Europe",
                  subtopics: [
                    { id: "gutenberg-and-the-printing-press", title: "Gutenberg and the printing press" },
                    { id: "spread-of-printing", title: "Spread of printing across Europe" },
                  ],
                },
                {
                  id: "the-print-revolution-and-its-impact",
                  title: "The Print Revolution and its Impact",
                  subtopics: [
                    { id: "a-new-reading-public", title: "A new reading public" },
                    { id: "religious-debates-and-fear-of-print", title: "Religious debates and the fear of print" },
                    { id: "print-and-dissent", title: "Print and dissent" },
                  ],
                },
                {
                  id: "the-reading-mania",
                  title: "The Reading Mania and the Nineteenth Century",
                  subtopics: [
                    { id: "print-culture-and-french-revolution", title: "Print culture and the French Revolution" },
                    { id: "children-women-and-workers", title: "Children, women and workers as readers" },
                    { id: "further-innovations", title: "Further innovations in printing" },
                  ],
                },
                {
                  id: "india-and-the-world-of-print",
                  title: "India and the World of Print",
                  subtopics: [
                    { id: "manuscripts-before-print", title: "Manuscripts before the age of print" },
                    { id: "religious-reform-and-public-debates", title: "Religious reform and public debates" },
                    { id: "new-forms-of-publication", title: "New forms of publication; women and print" },
                    { id: "print-and-censorship", title: "Print and censorship" },
                  ],
                },
              ],
            },
          ],
        },

        /* ---------------- Geography ---------------- */
        {
          id: "contemporary-india-ii",
          title: "Contemporary India – II (Geography)",
          chapters: [
            {
              id: "resources-and-development",
              number: 1,
              title: "Resources and Development",
              summary: "Types of resources, the need for resource planning and sustainable development, land use in India, and soil types, erosion and conservation.",
              topics: [
                {
                  id: "types-of-resources",
                  title: "Types of Resources",
                  subtopics: [
                    { id: "on-the-basis-of-origin-and-exhaustibility", title: "On the basis of origin and exhaustibility" },
                    { id: "on-the-basis-of-ownership", title: "On the basis of ownership" },
                    { id: "on-the-basis-of-status-of-development", title: "On the basis of status of development" },
                  ],
                },
                {
                  id: "development-of-resources",
                  title: "Development of Resources",
                  subtopics: [
                    { id: "sustainable-development", title: "Sustainable development" },
                    { id: "rio-summit-and-agenda-21", title: "Rio de Janeiro Earth Summit, 1992 and Agenda 21" },
                  ],
                },
                {
                  id: "resource-planning",
                  title: "Resource Planning",
                  subtopics: [
                    { id: "resource-planning-in-india", title: "Resource planning in India" },
                    { id: "conservation-of-resources", title: "Conservation of resources" },
                  ],
                },
                {
                  id: "land-resources",
                  title: "Land Resources",
                  subtopics: [
                    { id: "land-utilisation", title: "Land utilisation" },
                    { id: "land-use-pattern-in-india", title: "Land use pattern in India" },
                    { id: "land-degradation-and-conservation", title: "Land degradation and conservation measures" },
                  ],
                },
                {
                  id: "soil-as-a-resource",
                  title: "Soil as a Resource",
                  subtopics: [
                    { id: "classification-of-soils", title: "Classification of soils: alluvial, black, red and yellow, laterite, arid, forest" },
                    { id: "soil-erosion", title: "Soil erosion" },
                    { id: "soil-conservation", title: "Soil conservation" },
                  ],
                },
              ],
            },
            {
              id: "forest-and-wildlife-resources",
              number: 2,
              title: "Forest and Wildlife Resources",
              summary: "India's biodiversity, the causes of its depletion, and government and community efforts to conserve forests and wildlife.",
              topics: [
                {
                  id: "flora-and-fauna-in-india",
                  title: "Flora and Fauna in India",
                  subtopics: [
                    { id: "biodiversity", title: "Biodiversity" },
                    { id: "iucn-categories", title: "Categories of species: normal, endangered, vulnerable, rare, endemic, extinct" },
                    { id: "depletion-of-flora-and-fauna", title: "Vanishing forests and causes of depletion" },
                  ],
                },
                {
                  id: "conservation-of-forest-and-wildlife",
                  title: "Conservation of Forest and Wildlife in India",
                  subtopics: [
                    { id: "wildlife-protection-act", title: "Indian Wildlife (Protection) Act, 1972" },
                    { id: "project-tiger", title: "Project Tiger and protected areas" },
                  ],
                },
                {
                  id: "community-and-conservation",
                  title: "Community and Conservation",
                  subtopics: [
                    { id: "chipko-and-beej-bachao", title: "Chipko movement and Beej Bachao Andolan" },
                    { id: "joint-forest-management", title: "Joint Forest Management" },
                    { id: "sacred-groves", title: "Sacred groves and traditional conservation" },
                  ],
                },
              ],
            },
            {
              id: "water-resources",
              number: 3,
              title: "Water Resources",
              summary: "Why water scarcity occurs, the benefits and problems of multi-purpose river projects, and traditional and modern rainwater harvesting.",
              topics: [
                {
                  id: "water-scarcity",
                  title: "Water Scarcity and the Need for Water Conservation and Management",
                  subtopics: [
                    { id: "causes-of-water-scarcity", title: "Causes of water scarcity" },
                    { id: "need-for-conservation", title: "Need for water conservation" },
                  ],
                },
                {
                  id: "multi-purpose-river-projects",
                  title: "Multi-Purpose River Projects and Integrated Water Resources Management",
                  subtopics: [
                    { id: "dams-as-temples-of-modern-india", title: "Dams: 'temples of modern India'" },
                    { id: "problems-of-large-dams", title: "Problems and opposition to large dams" },
                  ],
                },
                {
                  id: "rainwater-harvesting",
                  title: "Rainwater Harvesting",
                  subtopics: [
                    { id: "traditional-methods", title: "Traditional methods: guls, kuls, khadins, johads, tankas" },
                    { id: "rooftop-rainwater-harvesting", title: "Rooftop rainwater harvesting" },
                    { id: "bamboo-drip-irrigation", title: "Bamboo drip irrigation in Meghalaya" },
                  ],
                },
              ],
            },
            {
              id: "agriculture",
              number: 4,
              title: "Agriculture",
              summary: "Types of farming, cropping seasons, major crops of India, and technological and institutional reforms in Indian agriculture.",
              topics: [
                {
                  id: "types-of-farming",
                  title: "Types of Farming",
                  subtopics: [
                    { id: "primitive-subsistence-farming", title: "Primitive subsistence farming" },
                    { id: "intensive-subsistence-farming", title: "Intensive subsistence farming" },
                    { id: "commercial-farming", title: "Commercial farming and plantations" },
                  ],
                },
                {
                  id: "cropping-pattern",
                  title: "Cropping Pattern",
                  subtopics: [
                    { id: "rabi", title: "Rabi season" },
                    { id: "kharif", title: "Kharif season" },
                    { id: "zaid", title: "Zaid season" },
                  ],
                },
                {
                  id: "major-crops",
                  title: "Major Crops",
                  subtopics: [
                    { id: "food-crops", title: "Rice, wheat, millets, maize and pulses" },
                    { id: "food-crops-other-than-grains", title: "Sugarcane, oilseeds, tea, coffee, horticulture" },
                    { id: "non-food-crops", title: "Rubber and fibre crops" },
                  ],
                },
                {
                  id: "technological-and-institutional-reforms",
                  title: "Technological and Institutional Reforms",
                  subtopics: [
                    { id: "land-reforms", title: "Land reforms" },
                    { id: "green-and-white-revolution", title: "Green Revolution and White Revolution" },
                    { id: "schemes-for-farmers", title: "Kisan Credit Card, crop insurance and minimum support price" },
                  ],
                },
              ],
            },
            {
              id: "minerals-and-energy-resources",
              number: 5,
              title: "Minerals and Energy Resources",
              summary: "What minerals are, how they occur and are classified, why they must be conserved, and India's conventional and non-conventional energy sources.",
              topics: [
                {
                  id: "what-is-a-mineral",
                  title: "What is a Mineral?",
                  subtopics: [
                    { id: "mode-of-occurrence-of-minerals", title: "Mode of occurrence of minerals" },
                    { id: "classification-of-minerals", title: "Classification: metallic, non-metallic and energy minerals" },
                  ],
                },
                {
                  id: "conservation-of-minerals",
                  title: "Conservation of Minerals",
                  subtopics: [
                    { id: "finite-and-non-renewable", title: "Minerals are finite and non-renewable" },
                    { id: "recycling-and-substitutes", title: "Recycling and using substitutes" },
                  ],
                },
                {
                  id: "energy-resources",
                  title: "Energy Resources",
                  subtopics: [
                    { id: "conventional-sources", title: "Conventional sources: coal, petroleum, natural gas, electricity" },
                    { id: "non-conventional-sources", title: "Non-conventional sources: nuclear, solar, wind, biogas, tidal, geothermal" },
                  ],
                },
                {
                  id: "conservation-of-energy-resources",
                  title: "Conservation of Energy Resources",
                  subtopics: [
                    { id: "judicious-use", title: "Judicious use of energy" },
                    { id: "shift-to-renewables", title: "Shifting to renewable energy" },
                  ],
                },
              ],
            },
            {
              id: "manufacturing-industries",
              number: 6,
              title: "Manufacturing Industries",
              summary: "The importance of manufacturing, factors of industrial location, classification of industries, and industrial pollution and its control.",
              topics: [
                {
                  id: "importance-of-manufacturing",
                  title: "Importance of Manufacturing",
                  subtopics: [
                    { id: "manufacturing-as-backbone", title: "Manufacturing as the backbone of development" },
                    { id: "contribution-to-national-economy", title: "Contribution of industry to national economy" },
                  ],
                },
                {
                  id: "industrial-location",
                  title: "Industrial Location",
                  subtopics: [
                    { id: "factors-of-location", title: "Factors affecting location of industries" },
                    { id: "agglomeration-economies", title: "Agglomeration economies" },
                  ],
                },
                {
                  id: "classification-of-industries",
                  title: "Classification of Industries",
                  subtopics: [
                    { id: "by-source-of-raw-materials", title: "Agro-based and mineral-based" },
                    { id: "by-role-ownership-and-size", title: "By role, ownership and capital investment" },
                  ],
                },
                {
                  id: "industrial-pollution",
                  title: "Industrial Pollution and Environmental Degradation",
                  subtopics: [
                    { id: "types-of-industrial-pollution", title: "Air, water, thermal and noise pollution" },
                    { id: "control-of-environmental-degradation", title: "Control of environmental degradation" },
                  ],
                },
              ],
            },
            {
              id: "lifelines-of-national-economy",
              number: 7,
              title: "Lifelines of National Economy",
              summary: "India's transport networks, communication systems, international trade and tourism as the lifelines of the economy.",
              topics: [
                {
                  id: "transport",
                  title: "Transport",
                  subtopics: [
                    { id: "roadways", title: "Roadways" },
                    { id: "railways-and-pipelines", title: "Railways and pipelines" },
                    { id: "waterways-and-major-sea-ports", title: "Waterways and major sea ports" },
                    { id: "airways", title: "Airways" },
                  ],
                },
                {
                  id: "communication",
                  title: "Communication",
                  subtopics: [
                    { id: "personal-communication", title: "Personal communication: post and telecom" },
                    { id: "mass-communication", title: "Mass communication" },
                  ],
                },
                {
                  id: "international-trade",
                  title: "International Trade",
                  subtopics: [
                    { id: "balance-of-trade", title: "Balance of trade" },
                    { id: "indias-exports-and-imports", title: "India's exports and imports" },
                  ],
                },
                {
                  id: "tourism-as-a-trade",
                  title: "Tourism as a Trade",
                  subtopics: [
                    { id: "benefits-of-tourism", title: "Benefits of tourism" },
                    { id: "types-of-tourism", title: "Heritage, eco, adventure and medical tourism" },
                  ],
                },
              ],
            },
          ],
        },

        /* ---------------- Political Science ---------------- */
        {
          id: "democratic-politics-ii",
          title: "Democratic Politics – II (Political Science)",
          chapters: [
            {
              id: "power-sharing",
              number: 1,
              title: "Power Sharing",
              summary: "Why power sharing is desirable, illustrated by Belgium and Sri Lanka, and the different forms it takes in modern democracies.",
              topics: [
                {
                  id: "belgium-and-sri-lanka",
                  title: "Belgium and Sri Lanka",
                  subtopics: [
                    { id: "belgian-model", title: "Accommodation in Belgium" },
                    { id: "majoritarianism-in-sri-lanka", title: "Majoritarianism in Sri Lanka" },
                  ],
                },
                {
                  id: "why-power-sharing-is-desirable",
                  title: "Why Power Sharing is Desirable",
                  subtopics: [
                    { id: "prudential-reasons", title: "Prudential reasons" },
                    { id: "moral-reasons", title: "Moral reasons" },
                  ],
                },
                {
                  id: "forms-of-power-sharing",
                  title: "Forms of Power Sharing",
                  subtopics: [
                    { id: "horizontal-distribution", title: "Among organs of government (horizontal)" },
                    { id: "vertical-distribution", title: "Among governments at different levels (vertical)" },
                    { id: "among-social-groups", title: "Among social groups" },
                    { id: "among-parties-and-pressure-groups", title: "Among political parties, pressure groups and movements" },
                  ],
                },
              ],
            },
            {
              id: "federalism",
              number: 2,
              title: "Federalism",
              summary: "Key features of federalism, what makes India a federal country, how federalism is practised, and decentralisation to local governments.",
              topics: [
                {
                  id: "what-is-federalism",
                  title: "What is Federalism?",
                  subtopics: [
                    { id: "key-features-of-federalism", title: "Key features of federalism" },
                    { id: "coming-together-and-holding-together", title: "Coming together and holding together federations" },
                  ],
                },
                {
                  id: "what-makes-india-a-federal-country",
                  title: "What Makes India a Federal Country?",
                  subtopics: [
                    { id: "three-lists", title: "Union, State and Concurrent Lists" },
                    { id: "residuary-subjects-and-union-territories", title: "Residuary subjects and Union Territories" },
                    { id: "role-of-judiciary", title: "Role of the judiciary" },
                  ],
                },
                {
                  id: "how-is-federalism-practised",
                  title: "How is Federalism Practised?",
                  subtopics: [
                    { id: "linguistic-states", title: "Linguistic states" },
                    { id: "language-policy", title: "Language policy" },
                    { id: "centre-state-relations", title: "Centre-state relations" },
                  ],
                },
                {
                  id: "decentralisation-in-india",
                  title: "Decentralisation in India",
                  subtopics: [
                    { id: "constitutional-amendment-1992", title: "The 1992 constitutional amendment" },
                    { id: "panchayati-raj", title: "Panchayati Raj" },
                    { id: "municipalities", title: "Municipalities and municipal corporations" },
                  ],
                },
              ],
            },
            {
              id: "gender-religion-and-caste",
              number: 3,
              title: "Gender, Religion and Caste",
              summary: "How social divisions based on gender, religion and caste are expressed in politics, and how democracy responds to them.",
              topics: [
                {
                  id: "gender-and-politics",
                  title: "Gender and Politics",
                  subtopics: [
                    { id: "public-private-division", title: "Public/private division and sexual division of labour" },
                    { id: "womens-political-representation", title: "Women's political representation" },
                  ],
                },
                {
                  id: "religion-communalism-and-politics",
                  title: "Religion, Communalism and Politics",
                  subtopics: [
                    { id: "communalism", title: "Communalism and its forms" },
                    { id: "secular-state", title: "Secular state" },
                  ],
                },
                {
                  id: "caste-and-politics",
                  title: "Caste and Politics",
                  subtopics: [
                    { id: "caste-inequalities", title: "Caste inequalities" },
                    { id: "caste-in-politics", title: "Caste in politics" },
                    { id: "politics-in-caste", title: "Politics in caste" },
                  ],
                },
              ],
            },
            {
              id: "political-parties",
              number: 4,
              title: "Political Parties",
              summary: "What political parties do, why democracies need them, party systems, national and state parties in India, and challenges and reforms.",
              topics: [
                {
                  id: "why-do-we-need-political-parties",
                  title: "Why do We Need Political Parties?",
                  subtopics: [
                    { id: "meaning-of-political-party", title: "Meaning of a political party" },
                    { id: "functions-of-parties", title: "Functions of political parties" },
                    { id: "necessity-of-parties", title: "Necessity of political parties" },
                  ],
                },
                {
                  id: "how-many-parties",
                  title: "How Many Parties Should We Have?",
                  subtopics: [
                    { id: "one-two-and-multi-party-systems", title: "One-party, two-party and multi-party systems" },
                    { id: "coalitions-and-alliances", title: "Alliances and coalitions" },
                  ],
                },
                {
                  id: "national-and-state-parties",
                  title: "National Parties and State Parties",
                  subtopics: [
                    { id: "recognition-by-election-commission", title: "Recognition by the Election Commission" },
                    { id: "national-parties", title: "National parties" },
                    { id: "state-parties", title: "State parties" },
                  ],
                },
                {
                  id: "challenges-and-reform",
                  title: "Challenges to Political Parties and How They Can be Reformed",
                  subtopics: [
                    { id: "challenges-to-parties", title: "Challenges: internal democracy, dynastic succession, money and muscle power, lack of choice" },
                    { id: "reforming-parties", title: "How can parties be reformed?" },
                  ],
                },
              ],
            },
            {
              id: "outcomes-of-democracy",
              number: 5,
              title: "Outcomes of Democracy",
              summary: "How to assess democracy by its outcomes: accountable government, economic growth, reduced inequality, accommodation of diversity and dignity of citizens.",
              topics: [
                {
                  id: "assessing-democracys-outcomes",
                  title: "How do We Assess Democracy's Outcomes?",
                  subtopics: [
                    { id: "accountable-government", title: "Accountable, responsive and legitimate government" },
                    { id: "transparency", title: "Transparency and citizens' participation" },
                  ],
                },
                {
                  id: "economic-growth-and-development",
                  title: "Economic Growth and Development",
                  subtopics: [
                    { id: "growth-in-democracies-and-dictatorships", title: "Growth in democracies and dictatorships" },
                    { id: "factors-in-growth", title: "Other factors in economic growth" },
                  ],
                },
                {
                  id: "reduction-of-inequality-and-poverty",
                  title: "Reduction of Inequality and Poverty",
                  subtopics: [
                    { id: "economic-inequality", title: "Economic inequality in democracies" },
                    { id: "poverty-and-democracy", title: "Poverty and democracy" },
                  ],
                },
                {
                  id: "accommodation-of-social-diversity",
                  title: "Accommodation of Social Diversity",
                  subtopics: [
                    { id: "majority-and-minority", title: "Majority and minority opinion" },
                    { id: "rule-by-majority", title: "Rule by majority is not rule by one community" },
                  ],
                },
                {
                  id: "dignity-and-freedom-of-citizens",
                  title: "Dignity and Freedom of the Citizens",
                  subtopics: [
                    { id: "dignity-of-women", title: "Dignity of women" },
                    { id: "caste-equality", title: "Caste equality" },
                    { id: "expectations-from-democracy", title: "Rising expectations and complaints" },
                  ],
                },
              ],
            },
          ],
        },

        /* ---------------- Economics ---------------- */
        {
          id: "understanding-economic-development",
          title: "Understanding Economic Development (Economics)",
          chapters: [
            development,
            {
              id: "sectors-of-the-indian-economy",
              number: 2,
              title: "Sectors of the Indian Economy",
              summary: "Primary, secondary and tertiary sectors, their changing share in GDP and employment, organised and unorganised sectors, and public and private sectors.",
              topics: [
                {
                  id: "sectors-of-economic-activities",
                  title: "Sectors of Economic Activities",
                  subtopics: [
                    { id: "primary-sector", title: "Primary sector" },
                    { id: "secondary-sector", title: "Secondary sector" },
                    { id: "tertiary-sector", title: "Tertiary sector" },
                  ],
                },
                {
                  id: "comparing-the-three-sectors",
                  title: "Comparing the Three Sectors",
                  subtopics: [
                    { id: "gross-domestic-product", title: "Gross Domestic Product (GDP)" },
                    { id: "historical-change-in-sectors", title: "Historical change in sectors" },
                    { id: "rising-importance-of-tertiary-sector", title: "Rising importance of the tertiary sector" },
                  ],
                },
                {
                  id: "where-are-most-people-employed",
                  title: "Where are Most of the People Employed?",
                  subtopics: [
                    { id: "underemployment", title: "Underemployment and disguised unemployment" },
                    { id: "creating-more-employment", title: "How to create more employment" },
                  ],
                },
                {
                  id: "organised-and-unorganised-sectors",
                  title: "Division of Sectors as Organised and Unorganised",
                  subtopics: [
                    { id: "organised-sector", title: "Organised sector" },
                    { id: "unorganised-sector", title: "Unorganised sector" },
                    { id: "protecting-unorganised-workers", title: "Protecting workers in the unorganised sector" },
                  ],
                },
                {
                  id: "public-and-private-sectors",
                  title: "Sectors in Terms of Ownership: Public and Private Sectors",
                  subtopics: [
                    { id: "public-sector", title: "Public sector" },
                    { id: "private-sector", title: "Private sector" },
                  ],
                },
              ],
            },
            {
              id: "money-and-credit",
              number: 3,
              title: "Money and Credit",
              summary: "Money as a medium of exchange, modern forms of money, how banks lend, terms of credit, and formal and informal sources of credit in India.",
              topics: [
                {
                  id: "money-as-a-medium-of-exchange",
                  title: "Money as a Medium of Exchange",
                  subtopics: [
                    { id: "double-coincidence-of-wants", title: "Double coincidence of wants" },
                    { id: "barter-system", title: "Problems of the barter system" },
                  ],
                },
                {
                  id: "modern-forms-of-money",
                  title: "Modern Forms of Money",
                  subtopics: [
                    { id: "currency", title: "Currency" },
                    { id: "deposits-with-banks", title: "Deposits with banks and cheques" },
                  ],
                },
                {
                  id: "loan-activities-of-banks",
                  title: "Loan Activities of Banks and Two Credit Situations",
                  subtopics: [
                    { id: "how-banks-lend", title: "How banks use deposits to give loans" },
                    { id: "two-different-credit-situations", title: "Two different credit situations and debt-trap" },
                  ],
                },
                {
                  id: "terms-of-credit",
                  title: "Terms of Credit",
                  subtopics: [
                    { id: "interest-rate-and-collateral", title: "Interest rate and collateral" },
                    { id: "documentation-and-repayment", title: "Documentation and mode of repayment" },
                  ],
                },
                {
                  id: "formal-sector-credit-in-india",
                  title: "Formal Sector Credit in India",
                  subtopics: [
                    { id: "formal-and-informal-credit", title: "Formal and informal sources of credit" },
                    { id: "self-help-groups", title: "Self-Help Groups for the poor" },
                  ],
                },
              ],
            },
            {
              id: "globalisation-and-the-indian-economy",
              number: 4,
              title: "Globalisation and the Indian Economy",
              summary: "How MNCs and foreign trade integrate markets, the factors that enabled globalisation, the role of the WTO, and globalisation's impact on India.",
              topics: [
                {
                  id: "production-across-countries",
                  title: "Production across Countries",
                  subtopics: [
                    { id: "multinational-corporations", title: "Multinational corporations" },
                    { id: "interlinking-production", title: "Interlinking production across countries" },
                  ],
                },
                {
                  id: "foreign-trade-and-integration-of-markets",
                  title: "Foreign Trade and Integration of Markets",
                  subtopics: [
                    { id: "choices-for-producers-and-buyers", title: "More choices for producers and buyers" },
                    { id: "integration-of-markets", title: "Integration of markets" },
                  ],
                },
                {
                  id: "what-is-globalisation",
                  title: "What is Globalisation?",
                  subtopics: [
                    { id: "movement-of-goods-services-investment", title: "Movement of goods, services, investment and technology" },
                    { id: "movement-of-people", title: "Movement of people" },
                  ],
                },
                {
                  id: "factors-enabling-globalisation",
                  title: "Factors that have Enabled Globalisation",
                  subtopics: [
                    { id: "technology", title: "Technology" },
                    { id: "liberalisation", title: "Liberalisation of foreign trade and investment policy" },
                    { id: "world-trade-organisation", title: "World Trade Organisation" },
                  ],
                },
                {
                  id: "impact-of-globalisation-on-india",
                  title: "Impact of Globalisation on India",
                  subtopics: [
                    { id: "benefits-and-competition", title: "Benefits to consumers and producers" },
                    { id: "special-economic-zones", title: "Special Economic Zones and labour flexibility" },
                    { id: "struggle-for-fair-globalisation", title: "The struggle for a fair globalisation" },
                  ],
                },
              ],
            },
            {
              id: "consumer-rights",
              number: 5,
              title: "Consumer Rights",
              summary: "How consumers are exploited in the marketplace, the rise of the consumer movement, consumer rights and the redressal system under the Consumer Protection Act.",
              topics: [
                {
                  id: "the-consumer-in-the-marketplace",
                  title: "The Consumer in the Marketplace",
                  subtopics: [
                    { id: "exploitation-of-consumers", title: "Ways in which consumers are exploited" },
                    { id: "need-for-rules", title: "Need for rules and regulations" },
                  ],
                },
                {
                  id: "consumer-movement",
                  title: "Consumer Movement",
                  subtopics: [
                    { id: "origins-in-india", title: "Origins of the consumer movement in India" },
                    { id: "consumer-protection-act", title: "Consumer Protection Act (COPRA)" },
                  ],
                },
                {
                  id: "rights-of-consumers",
                  title: "Consumer Rights",
                  subtopics: [
                    { id: "safety-and-information", title: "Right to safety and right to be informed" },
                    { id: "choice-and-redressal", title: "Right to choose and right to seek redressal" },
                    { id: "representation", title: "Right to representation" },
                    { id: "standardisation-marks", title: "ISI, Agmark and Hallmark" },
                  ],
                },
                {
                  id: "taking-the-consumer-movement-forward",
                  title: "Taking the Consumer Movement Forward",
                  subtopics: [
                    { id: "consumer-courts", title: "Three-tier consumer courts" },
                    { id: "national-consumers-day", title: "National Consumers' Day, 24 December" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

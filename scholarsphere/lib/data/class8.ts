import type {
  Chapter,
  Grade,
  QuizQuestion,
  Topic,
  TopicContent,
} from "../types";

/*
 * Class 8 — CBSE / NCERT (rationalised textbooks, 2023-24 onward, pre-2025
 * editions). Topic and subtopic ids are kebab-case slugs of their titles.
 */

const slug = (s: string): string =>
  s
    .toLowerCase()
    .replace(/²/g, "2")
    .replace(/³/g, "3")
    .replace(/['’"“”]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const t = (title: string, subtopics: string[], content?: TopicContent): Topic => ({
  id: slug(title),
  title,
  subtopics: subtopics.map((s) => ({ id: slug(s), title: s })),
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
/* Mathematics                                                         */
/* ------------------------------------------------------------------ */

const rationalNumbers = ch(
  1,
  "rational-numbers",
  "Rational Numbers",
  "Explores the properties of rational numbers under the four operations, their representation on the number line and how to find rational numbers between any two of them.",
  [
    t(
      "Properties of Rational Numbers",
      ["Closure", "Commutativity", "Associativity", "Distributivity of Multiplication over Addition"],
      {
        intro:
          "A rational number is any number that can be written as p/q, where p and q are integers and q ≠ 0. Just like whole numbers and integers, rational numbers follow some dependable rules when we add, subtract, multiply or divide them. Knowing these rules makes long calculations much shorter.",
        sections: [
          {
            heading: "Closure",
            body: "If you add, subtract or multiply any two rational numbers, the answer is always another rational number. So rational numbers are **closed** under addition, subtraction and multiplication. For example, 3/8 + (−5/7) = (21 − 40)/56 = −19/56, which is again rational. Division is the exception, because division by zero is not defined; if we leave out zero, rational numbers are closed under division too.",
          },
          {
            heading: "Commutativity",
            body: "For addition and multiplication, the order of the numbers does not change the answer: a + b = b + a and a × b = b × a. For example, −2/3 + 5/7 = 1/21 and 5/7 + (−2/3) = 1/21. Subtraction and division are not commutative, because 2/3 − 5/4 is not equal to 5/4 − 2/3.",
          },
          {
            heading: "Associativity",
            body: "When adding or multiplying three rational numbers, the way we group them does not matter: (a + b) + c = a + (b + c) and (a × b) × c = a × (b × c). This lets us group numbers that are easy to combine first. Subtraction and division are not associative, so for them the brackets must be respected.",
          },
          {
            heading: "Distributivity of Multiplication over Addition",
            body: "For any rational numbers a, b and c, a × (b + c) = a × b + a × c, and similarly a × (b − c) = a × b − a × c. For example, −3/4 × (2/3 + (−5/6)) = −3/4 × (−1/6) = 1/8, and −3/4 × 2/3 + (−3/4) × (−5/6) = −1/2 + 5/8 = 1/8 as well. This property is very useful for simplifying expressions like 2/5 × (−3/7) − 3/7 × 3/5, which becomes −3/7 × (2/5 + 3/5) = −3/7.",
          },
        ],
        definitions: [
          { term: "Rational number", meaning: "A number that can be written in the form p/q, where p and q are integers and q ≠ 0." },
          { term: "Closure property", meaning: "A set is closed under an operation if performing that operation on any two members always gives a member of the same set." },
          { term: "Commutative property", meaning: "Changing the order of two numbers does not change the result of the operation." },
          { term: "Associative property", meaning: "Changing the grouping of three numbers does not change the result of the operation." },
          { term: "Distributive property", meaning: "Multiplication spreads over addition or subtraction: a × (b + c) = ab + ac." },
        ],
        formulas: [
          { label: "Commutativity of addition", expression: "a + b = b + a" },
          { label: "Commutativity of multiplication", expression: "a × b = b × a" },
          { label: "Associativity of addition", expression: "(a + b) + c = a + (b + c)" },
          { label: "Associativity of multiplication", expression: "(a × b) × c = a × (b × c)" },
          { label: "Distributivity", expression: "a × (b + c) = a × b + a × c", note: "Also a × (b − c) = a × b − a × c" },
        ],
        keyPoints: [
          "Rational numbers are closed under addition, subtraction and multiplication.",
          "Rational numbers are not closed under division because division by 0 is undefined.",
          "Addition and multiplication are commutative and associative for rational numbers.",
          "Subtraction and division are neither commutative nor associative.",
          "Multiplication distributes over addition and subtraction.",
        ],
        explainers: {
          eli10:
            "Think of rational numbers as a big family of fractions, including negative ones and whole numbers. If two family members add, subtract or multiply, the answer is always another family member — nobody leaves the family. When you add or multiply, you can swap their places or change who pairs up first, and the answer stays the same. But subtraction and division are fussy: swap the order and the answer changes.",
          realWorld:
            "Suppose you buy 1/2 kg of tomatoes and 3/4 kg of onions at the sabzi mandi. Whether the shopkeeper weighs the tomatoes first or the onions first, the total is 5/4 kg — that's commutativity. If a samosa costs ₹15 and you buy 3 for yourself and 2 for your friend, you can compute 15 × 3 + 15 × 2 or simply 15 × (3 + 2) = ₹75 — that's distributivity. Shopkeepers use these tricks in their heads every day.",
          mnemonic:
            "Remember \"CCAD — Closure, Commutative, Associative, Distributive\" as \"Cool Cats Always Dance\". Then add: \"Plus and Times are polite; Minus and Divide break the rules\" — only addition and multiplication are commutative and associative.",
        },
      },
    ),
    t(
      "Role of Zero, One and Inverses",
      ["The Role of Zero (Additive Identity)", "The Role of One (Multiplicative Identity)", "Negative of a Number (Additive Inverse)", "Reciprocal (Multiplicative Inverse)"],
      {
        intro:
          "Two special numbers, 0 and 1, behave in a unique way with rational numbers. Zero leaves a number unchanged when added, and one leaves a number unchanged when multiplied. Every rational number also has a partner that 'undoes' it: a negative for addition and, except for zero, a reciprocal for multiplication.",
        sections: [
          {
            heading: "Zero and One: the Identities",
            body: "Adding 0 to any rational number gives the same number back: a + 0 = 0 + a = a. So **0 is the additive identity** for rational numbers, just as it is for whole numbers and integers. Multiplying any rational number by 1 also gives the same number: a × 1 = 1 × a = a. So **1 is the multiplicative identity**.",
          },
          {
            heading: "Negative of a Number",
            body: "For every rational number a/b there is a number −a/b such that a/b + (−a/b) = 0. We call −a/b the additive inverse or negative of a/b. For example, the additive inverse of 3/7 is −3/7, and the additive inverse of −2/3 is 2/3. Adding a number to its negative always takes you back to zero.",
          },
          {
            heading: "Reciprocal",
            body: "A rational number c/d is the reciprocal (multiplicative inverse) of a/b if a/b × c/d = 1. To find it, simply flip the fraction: the reciprocal of 2/5 is 5/2 and the reciprocal of −3/5 is −5/3. Notice that a number and its reciprocal have the same sign. Zero has no reciprocal, because no number multiplied by 0 can give 1.",
          },
        ],
        definitions: [
          { term: "Additive identity", meaning: "The number 0, since adding it to any number leaves the number unchanged." },
          { term: "Multiplicative identity", meaning: "The number 1, since multiplying any number by it leaves the number unchanged." },
          { term: "Additive inverse", meaning: "The negative of a number; their sum is 0." },
          { term: "Reciprocal", meaning: "The multiplicative inverse of a non-zero number; their product is 1." },
        ],
        formulas: [
          { label: "Additive identity", expression: "a + 0 = 0 + a = a" },
          { label: "Multiplicative identity", expression: "a × 1 = 1 × a = a" },
          { label: "Additive inverse", expression: "a/b + (−a/b) = 0" },
          { label: "Reciprocal", expression: "a/b × b/a = 1", note: "Valid only when a ≠ 0 and b ≠ 0" },
        ],
        keyPoints: [
          "0 is the additive identity and 1 is the multiplicative identity for rational numbers.",
          "The additive inverse of a/b is −a/b, and of −a/b is a/b.",
          "The reciprocal of a/b is b/a; a number and its reciprocal have the same sign.",
          "0 has no reciprocal.",
          "1 and −1 are their own reciprocals.",
        ],
        explainers: {
          eli10:
            "Zero is like an empty tiffin box: add it to your lunch and you still have the same lunch. One is like a photocopier set to 1 copy: whatever you put in comes out exactly the same. A number's negative is its 'undo button' for adding, bringing you back to zero. A reciprocal is its 'undo button' for multiplying, bringing you back to one.",
          realWorld:
            "If you walk 3/4 km forward from your gate and then 3/4 km back, you end up where you started — the walk back is the additive inverse. If a recipe for 4 people is made 4 times larger and then shared among 4 plates (divided by 4), each plate gets the original amount, because multiplying by 4 and by 1/4 undo each other. Cashiers at a kirana store also rely on 'add then subtract the same amount' to check change.",
          mnemonic:
            "\"Zero adds nothing, One multiplies nothing.\" For inverses: \"Negative flips the sign, Reciprocal flips the fraction.\" And never forget: \"Zero can't flip.\"",
        },
      },
    ),
    t(
      "Representation of Rational Numbers on the Number Line",
      ["Natural Numbers, Whole Numbers and Integers on the Number Line", "Placing Fractions and Rational Numbers"],
      {
        intro:
          "Every rational number can be shown as a point on the number line. You have already marked natural numbers, whole numbers and integers on it. Rational numbers fill in many of the gaps between these points.",
        sections: [
          {
            heading: "Building the Number Line",
            body: "Natural numbers 1, 2, 3, … lie to the right of 0 at equal steps. Whole numbers include 0 as well, and integers extend the line to the left with −1, −2, −3, and so on. Numbers to the right are greater, and numbers to the left are smaller. Positive numbers lie to the right of 0 and negative numbers to the left.",
          },
          {
            heading: "Marking a Rational Number",
            body: "To mark 5/8, divide the gap between 0 and 1 into 8 equal parts and count 5 parts to the right of 0. The denominator tells you how many equal parts one unit is divided into, and the numerator tells you how many parts to count. For −3/4, divide the gap between 0 and −1 into 4 equal parts and count 3 parts to the left. A number like 7/3 = 2 1/3 lies one-third of the way from 2 to 3.",
          },
        ],
        definitions: [
          { term: "Number line", meaning: "A straight line on which every point represents a number, with equal spacing between consecutive integers." },
          { term: "Denominator", meaning: "The bottom number of a fraction; it tells into how many equal parts a unit is divided." },
          { term: "Numerator", meaning: "The top number of a fraction; it tells how many of those parts are taken." },
        ],
        keyPoints: [
          "Every rational number corresponds to a point on the number line.",
          "Positive rational numbers lie to the right of 0 and negative ones to the left.",
          "The denominator decides the number of equal divisions in one unit.",
          "Improper fractions are easier to mark after converting them to mixed numbers.",
        ],
        explainers: {
          eli10:
            "Imagine a long road with milestones 0, 1, 2, 3 on one side and −1, −2, −3 on the other. Fractions are like the small stones between the milestones. To reach 5/8, you cut the road between 0 and 1 into 8 equal steps and walk 5 of them. Negative fractions are on the other side of zero.",
          realWorld:
            "A measuring scale in your geometry box is a number line: each centimetre is split into 10 millimetres, so 3.7 cm (or 37/10 cm) is 7 small marks after 3. A thermometer showing winter temperatures in Shimla also works like a number line, with readings like −2.5 °C lying below zero. Petrol-pump meters and weighing machines use the same idea.",
          mnemonic:
            "\"Bottom cuts, Top counts\": the denominator cuts one unit into equal pieces, and the numerator counts how many pieces to step. \"Plus goes right, Minus goes left.\"",
        },
      },
    ),
    t(
      "Rational Numbers between Two Rational Numbers",
      ["Infinitely Many Rational Numbers", "Using Equivalent Fractions", "Using the Mean"],
      {
        intro:
          "Between two consecutive integers like 1 and 2, there is no other integer. But between any two rational numbers, there are always more rational numbers — in fact, infinitely many. We can find them using equivalent fractions or by taking averages.",
        sections: [
          {
            heading: "Using Equivalent Fractions",
            body: "To find rational numbers between −2/5 and 1/2, first write them with a common denominator: −4/10 and 5/10. Now −3/10, −2/10, −1/10, 0, 1/10, 2/10, 3/10 and 4/10 all lie between them. If you need more, write them as −8/20 and 10/20 and you get even more numbers in between. By making the denominator larger, you can find as many as you like.",
          },
          {
            heading: "Using the Mean",
            body: "The mean (average) of two numbers always lies between them. For 1/4 and 1/2, the mean is (1/4 + 1/2) ÷ 2 = 3/8, and 1/4 < 3/8 < 1/2. You can repeat the process: the mean of 1/4 and 3/8 is 5/16, which also lies between 1/4 and 1/2. Since this can go on forever, there are infinitely many rational numbers between any two rational numbers.",
          },
        ],
        definitions: [
          { term: "Equivalent fractions", meaning: "Fractions that represent the same value, such as 1/2, 2/4 and 5/10." },
          { term: "Mean (average) of two numbers", meaning: "Half of their sum; it always lies exactly midway between them." },
          { term: "Density of rational numbers", meaning: "The fact that between any two rational numbers there are infinitely many rational numbers." },
        ],
        formulas: [
          { label: "Mean of two rational numbers", expression: "(a + b) / 2", note: "If a < b, then a < (a + b)/2 < b" },
        ],
        keyPoints: [
          "There are infinitely many rational numbers between any two rational numbers.",
          "Converting to equivalent fractions with a larger common denominator reveals numbers in between.",
          "The mean of two numbers always lies between them.",
          "Repeated averaging can produce as many in-between numbers as needed.",
        ],
        explainers: {
          eli10:
            "Between 1 and 2 on a ruler there seem to be no whole numbers, but if you zoom in you see halves, quarters, eighths and more. No matter how close two fractions are, you can always zoom in again and find a fraction sitting between them. It's like cutting a chocolate bar into smaller and smaller pieces — you never run out of places to cut.",
          realWorld:
            "Petrol prices change by tiny amounts, like ₹102.45 to ₹102.46, and there are still values like ₹102.455 in between. When two friends share the bill and want to meet 'halfway' on how much each pays, they are using the mean. Scientists and engineers always find more precise values between two readings.",
          mnemonic:
            "\"Same bottom, then squeeze\": make the denominators equal, then pick numerators in between. \"Average sits in the middle\" — (a + b)/2 is always between a and b.",
        },
      },
    ),
  ],
  [
    q("rn-q1", "Which property is shown by 3/4 + (−2/5) = (−2/5) + 3/4?", ["Closure", "Commutativity", "Associativity", "Distributivity"], 1, "Changing the order of the numbers in addition does not change the sum — this is the commutative property."),
    q("rn-q2", "What is the additive inverse of −7/9?", ["7/9", "−9/7", "9/7", "−7/9"], 0, "−7/9 + 7/9 = 0, so 7/9 is the additive inverse."),
    q("rn-q3", "Which rational number has no reciprocal?", ["1", "−1", "0", "1/2"], 2, "No number multiplied by 0 gives 1, so 0 has no reciprocal."),
    q("rn-q4", "Rational numbers are NOT closed under which operation?", ["Addition", "Subtraction", "Multiplication", "Division"], 3, "Division by 0 is not defined, so rational numbers are not closed under division."),
    q("rn-q5", "What is the mean of 1/4 and 1/2?", ["3/4", "3/8", "1/8", "1/3"], 1, "(1/4 + 1/2) ÷ 2 = (3/4) ÷ 2 = 3/8, which lies between 1/4 and 1/2."),
    q("rn-q6", "Which number is the multiplicative identity for rational numbers?", ["0", "−1", "1", "10"], 2, "a × 1 = a for every rational number a, so 1 is the multiplicative identity."),
  ],
);

const mathematics = {
  id: "mathematics",
  name: "Mathematics",
  icon: "calculator" as const,
  color: "indigo" as const,
  textbooks: [
    {
      id: "mathematics-class-8",
      title: "Mathematics — Textbook for Class VIII",
      chapters: [
        rationalNumbers,
        ch(2, "linear-equations-in-one-variable", "Linear Equations in One Variable", "Solves equations with a single variable using transposition, including equations with the variable on both sides, and applies them to word problems.", [
          t("Solving Equations with the Variable on One Side", ["Transposing Terms", "Checking the Solution"]),
          t("Solving Equations with the Variable on Both Sides", ["Transposing Variables", "Simplifying Brackets"]),
          t("Reducing Equations to Simpler Form", ["Clearing Fractions Using the LCM", "Simplifying Before Solving"]),
          t("Applications of Linear Equations", ["Number and Age Problems", "Perimeter and Geometry Problems", "Money and Coin Problems"]),
        ]),
        ch(3, "understanding-quadrilaterals", "Understanding Quadrilaterals", "Classifies polygons, establishes angle-sum and exterior-angle facts, and studies the properties of special quadrilaterals.", [
          t("Polygons", ["Classification by Number of Sides", "Convex and Concave Polygons", "Regular and Irregular Polygons"]),
          t("Angle Sum Property", ["Angle Sum of a Quadrilateral", "Angle Sum of a Polygon"]),
          t("Sum of the Measures of the Exterior Angles of a Polygon", ["Exterior Angle Sum Is 360°", "Number of Sides of a Regular Polygon"]),
          t("Kinds of Quadrilaterals", ["Trapezium and Kite", "Parallelogram and Its Properties", "Rhombus, Rectangle and Square"]),
        ]),
        ch(4, "data-handling", "Data Handling", "Covers organising and grouping data into histograms, drawing pie charts and understanding chance and probability.", [
          t("Organising and Grouping Data", ["Raw Data and Frequency Tables", "Class Intervals and Class Size", "Histograms"]),
          t("Circle Graph or Pie Chart", ["Central Angle of a Sector", "Drawing Pie Charts"]),
          t("Chance and Probability", ["Random Experiments", "Equally Likely Outcomes", "Outcomes as Events", "Chance and Probability in Real Life"]),
        ]),
        ch(5, "squares-and-square-roots", "Squares and Square Roots", "Studies properties and patterns of square numbers and methods of finding square roots.", [
          t("Properties of Square Numbers", ["Ending Digits of Squares", "Squares of Even and Odd Numbers", "Pythagorean Triplets"]),
          t("Interesting Patterns", ["Adding Consecutive Odd Numbers", "Numbers between Square Numbers"]),
          t("Finding the Square of a Number", ["Using (a + b)²", "Squares of Numbers Ending in 5"]),
          t("Square Roots", ["Square Root through Prime Factorisation", "Square Root by Division Method", "Square Roots of Decimals", "Estimating Square Roots"]),
        ]),
        ch(6, "cubes-and-cube-roots", "Cubes and Cube Roots", "Explores perfect cubes, their patterns, and finding cube roots by prime factorisation.", [
          t("Cubes", ["Perfect Cubes", "Some Interesting Patterns", "Smallest Multiple That Is a Perfect Cube"]),
          t("Cube Roots", ["Cube Root through Prime Factorisation", "Cube Root of a Cube Number"]),
        ]),
        ch(7, "comparing-quantities", "Comparing Quantities", "Applies percentages to discounts, profit and loss, taxes and compound interest.", [
          t("Percentages and Discounts", ["Percentage Increase and Decrease", "Discount and Marked Price", "Estimation in Percentages"]),
          t("Profit, Loss and Tax", ["Cost Price and Selling Price", "Overhead Expenses", "Sales Tax, VAT and GST"]),
          t("Compound Interest", ["Simple versus Compound Interest", "Deducing a Formula for Compound Interest", "Interest Compounded Half-Yearly", "Applications of the Compound Interest Formula"]),
        ]),
        ch(8, "algebraic-expressions-and-identities", "Algebraic Expressions and Identities", "Covers types of algebraic expressions, their addition and multiplication, and standard algebraic identities.", [
          t("Terms, Factors and Coefficients", ["Monomials, Binomials and Polynomials", "Like and Unlike Terms", "Addition and Subtraction of Expressions"]),
          t("Multiplication of Algebraic Expressions", ["Multiplying a Monomial by a Monomial", "Multiplying a Monomial by a Polynomial", "Multiplying a Polynomial by a Polynomial"]),
          t("Algebraic Identities", ["What Is an Identity?", "Standard Identities", "Applying Identities"]),
        ]),
        ch(9, "mensuration", "Mensuration", "Finds areas of trapeziums and polygons and the surface areas and volumes of cubes, cuboids and cylinders.", [
          t("Area of Plane Figures", ["Area of a Trapezium", "Area of a General Quadrilateral", "Area of a Polygon"]),
          t("Surface Area of Solids", ["Surface Area of a Cuboid", "Surface Area of a Cube", "Surface Area of a Cylinder"]),
          t("Volume and Capacity", ["Volume of a Cube and Cuboid", "Volume of a Cylinder", "Volume and Capacity"]),
        ]),
        ch(10, "exponents-and-powers", "Exponents and Powers", "Extends exponents to negative powers, applies the laws of exponents and writes very small numbers in standard form.", [
          t("Powers with Negative Exponents", ["Meaning of Negative Exponents", "Expanding Numbers Using Exponents"]),
          t("Laws of Exponents", ["Laws for Integral Exponents", "Using Laws of Exponents to Simplify"]),
          t("Use of Exponents to Express Small Numbers in Standard Form", ["Standard Form of Small Numbers", "Comparing Very Large and Very Small Numbers"]),
        ]),
        ch(11, "direct-and-inverse-proportions", "Direct and Inverse Proportions", "Distinguishes quantities that vary directly from those that vary inversely and solves related problems.", [
          t("Direct Proportion", ["Meaning of Direct Proportion", "The Ratio x/y = k", "Problems on Direct Proportion"]),
          t("Inverse Proportion", ["Meaning of Inverse Proportion", "The Product xy = k", "Problems on Inverse Proportion"]),
        ]),
        ch(12, "factorisation", "Factorisation", "Factorises algebraic expressions by common factors, regrouping and identities, and divides polynomials.", [
          t("What Is Factorisation?", ["Factors of Natural Numbers", "Factors of Algebraic Expressions"]),
          t("Methods of Factorisation", ["Method of Common Factors", "Factorisation by Regrouping Terms", "Factorisation Using Identities", "Factors of the Form (x + a)(x + b)"]),
          t("Division of Algebraic Expressions", ["Dividing a Monomial by a Monomial", "Dividing a Polynomial by a Monomial", "Dividing a Polynomial by a Polynomial"]),
        ]),
        ch(13, "introduction-to-graphs", "Introduction to Graphs", "Reviews bar, pie and line graphs and introduces linear graphs using coordinates.", [
          t("Kinds of Graphs", ["Bar Graph", "Pie Graph", "Histogram", "Line Graph"]),
          t("Linear Graphs", ["Location of a Point", "Coordinates"]),
          t("Some Applications", ["Quantity and Cost", "Principal and Simple Interest", "Time and Distance"]),
        ]),
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Science                                                             */
/* ------------------------------------------------------------------ */

const forceAndPressure = ch(
  8,
  "force-and-pressure",
  "Force and Pressure",
  "Explains force as a push or pull, its effects on motion and shape, contact and non-contact forces, and pressure in solids, liquids, gases and the atmosphere.",
  [
    t(
      "Force: A Push or a Pull",
      ["Push and Pull", "Forces Are Due to an Interaction", "Exploring Forces"],
      {
        intro:
          "Whenever we open a door, lift a bag or kick a ball, we are applying a force. In science, a force is simply a push or a pull on an object. Forces always arise when two objects interact, and they have both strength and direction.",
        sections: [
          {
            heading: "Push and Pull",
            body: "Every action that makes something move, stop or change involves pushing, pulling or both. Opening a drawer is a pull, closing it is a push. Picking up a book, drawing water from a well and kicking a football are all examples of forces. In science, any such push or pull on an object is called a **force**.",
          },
          {
            heading: "Forces Arise from Interaction",
            body: "At least two objects must interact for a force to come into play. A man standing behind a stationary car does not exert a force on it until he actually pushes it. In a tug-of-war, both teams pull on the rope, and the rope is the object they interact through. A force cannot exist on its own; it is always applied by one object on another.",
          },
          {
            heading: "Exploring Forces: Net Force",
            body: "Forces applied on an object in the same direction add up. If you and your friend push a heavy box together in the same direction, it moves more easily. If forces act in opposite directions, the net force is the difference between them, and the object moves in the direction of the larger force. If two equal forces act in opposite directions, the net force is zero and the object does not move — as in a tug-of-war where both teams pull equally hard.",
          },
        ],
        definitions: [
          { term: "Force", meaning: "A push or a pull on an object that results from its interaction with another object." },
          { term: "Magnitude", meaning: "The strength or size of a force." },
          { term: "Net force", meaning: "The single combined force that results when two or more forces act on an object." },
          { term: "Newton (N)", meaning: "The SI unit of force." },
        ],
        formulas: [
          { label: "Net force — same direction", expression: "F(net) = F₁ + F₂" },
          { label: "Net force — opposite directions", expression: "F(net) = F₁ − F₂", note: "Acts in the direction of the larger force F₁" },
        ],
        keyPoints: [
          "A force is a push or a pull.",
          "At least two objects must interact for a force to act.",
          "A force has both magnitude and direction.",
          "Forces in the same direction add; forces in opposite directions subtract.",
          "If the net force is zero, the object's state of motion does not change.",
        ],
        explainers: {
          eli10:
            "A force is any push or pull. When you pull your school bag off the bench or push a swing, you are using force. You can't push on nothing — there must always be something you push against. If you and a friend push a box the same way, it zooms; if you push from opposite sides with the same strength, it stays still.",
          realWorld:
            "Think of a tug-of-war on your school's sports day. Each team pulls the rope in opposite directions. If both teams pull equally, the rope's centre mark does not move, because the net force is zero. The moment one team pulls harder, the rope moves towards them — the bigger force wins by the difference in strength.",
          mnemonic:
            "\"Push or Pull — that's a force, in full.\" For net force: \"Same side — add; Opposite side — subtract; Winner decides the direction.\"",
        },
      },
    ),
    t(
      "Effects of Force",
      ["A Force Can Change the State of Motion", "A Force Can Change the Shape of an Object"],
      {
        intro:
          "A force can do several things to an object. It can make a stationary object move, speed it up, slow it down, stop it or change its direction. A force can also change the shape of an object.",
        sections: [
          {
            heading: "Change in the State of Motion",
            body: "The state of motion of an object is described by its speed and direction of motion. An object at rest has zero speed. A force can make a ball at rest start rolling, make a moving ball go faster or slower, stop it, or change its direction — as when a batsman hits a cricket ball. A change in either speed or direction, or both, is a change in the state of motion.",
          },
          {
            heading: "Change in Shape",
            body: "When you press a lump of dough with a rolling pin, squeeze a sponge or stretch a rubber band, their shapes change because of the force applied. Some objects, like a rubber band or spring, regain their shape when the force is removed. Others, like clay or dough, keep the new shape. Note that applying a force does not always produce a change — pushing a wall with all your strength changes neither its motion nor its visible shape.",
          },
        ],
        definitions: [
          { term: "State of motion", meaning: "The description of an object by its speed and direction of motion; rest is a state of zero speed." },
          { term: "Speed", meaning: "The distance covered by an object in unit time." },
          { term: "Deformation", meaning: "A change in the shape or size of an object due to a force." },
        ],
        keyPoints: [
          "A force can move a stationary object or stop a moving one.",
          "A force can change the speed of a moving object.",
          "A force can change the direction of motion of an object.",
          "A force can change the shape of an object.",
          "Applying a force does not always result in a visible change.",
        ],
        explainers: {
          eli10:
            "Force is like a magic hand that can do many tricks. It can start a toy car, make it go faster, slow it down, stop it or turn it around. It can also squish a ball of clay into a flat roti shape. Sometimes, though, the hand pushes on something big like a wall and nothing seems to happen.",
          realWorld:
            "In a cricket match, the bowler applies force to set the ball moving, the batsman applies force to change its direction and speed, and a fielder applies force to stop it. At home, your mother rolls dough into a round chapati by pressing it — a force changing shape. Squeezing a lemon at a nimbu-pani stall is the same idea.",
          mnemonic:
            "Remember \"MSD-S\": force can change **M**otion (start/stop), **S**peed, **D**irection and **S**hape. Think of \"MS Dhoni's Shot\" — one hit changes the ball's motion, speed and direction.",
        },
      },
    ),
    t(
      "Contact and Non-contact Forces",
      ["Muscular Force", "Friction", "Magnetic and Electrostatic Force", "Gravitational Force"],
      {
        intro:
          "Forces can be grouped by whether the objects need to touch each other. Contact forces act only when objects are in contact, while non-contact forces act even from a distance.",
        sections: [
          {
            heading: "Contact Forces",
            body: "**Muscular force** is the force produced by the action of our muscles, used in walking, lifting and even digesting food; animals like bullocks and horses also use it to do work. **Friction** is the force that acts between surfaces in contact and opposes motion — it is why a rolling ball gradually slows down and stops. Both need physical contact to act, so they are called contact forces.",
          },
          {
            heading: "Magnetic and Electrostatic Forces",
            body: "A magnet can attract iron pins or repel another magnet without touching them; this is **magnetic force**. When a plastic straw is rubbed with paper, it gets charged and can attract bits of paper or repel another charged straw; this is **electrostatic force**. Both act from a distance, so they are non-contact forces.",
          },
          {
            heading: "Gravitational Force",
            body: "Objects fall towards the earth because the earth pulls them. This force of attraction is called **gravity** or the gravitational force. Gravity is not a property of the earth alone — every object in the universe, big or small, attracts every other object. Gravity is a non-contact force that acts on us all the time.",
          },
        ],
        definitions: [
          { term: "Contact force", meaning: "A force that acts only when the interacting objects are in physical contact." },
          { term: "Non-contact force", meaning: "A force that acts without the objects touching each other." },
          { term: "Muscular force", meaning: "The force resulting from the action of muscles." },
          { term: "Friction", meaning: "The force between two surfaces in contact that opposes their relative motion." },
          { term: "Gravity", meaning: "The attractive force exerted by every object in the universe on every other object." },
        ],
        keyPoints: [
          "Muscular force and friction are contact forces.",
          "Magnetic, electrostatic and gravitational forces are non-contact forces.",
          "Friction always acts opposite to the direction of motion.",
          "A charged object can attract or repel another object from a distance.",
          "Every object in the universe exerts a gravitational pull on every other object.",
        ],
        explainers: {
          eli10:
            "Some forces are like handshakes — you have to touch to feel them, like your muscles pushing a cart or the rubbing force that stops a sliding slipper. Other forces are like waving from far away — they work without touching. A magnet pulling a pin, a rubbed balloon pulling your hair, and the earth pulling a falling mango are all 'waving from far away' forces.",
          realWorld:
            "When a mango drops from a tree in summer, gravity pulls it down without touching it. When you rub a plastic comb in your dry hair and hold it near tiny paper bits, they jump up — that's electrostatic force. Fridge magnets holding up a school timetable use magnetic force. And a rickshaw puller uses muscular force, while friction between tyres and road helps it grip.",
          mnemonic:
            "Contact forces: \"My Friend\" — **M**uscular and **F**riction. Non-contact forces: \"MEG\" — **M**agnetic, **E**lectrostatic, **G**ravitational. \"My Friend touches, MEG waves from afar.\"",
        },
      },
    ),
    t(
      "Pressure",
      ["Pressure as Force per Unit Area", "Pressure Exerted by Liquids and Gases", "Atmospheric Pressure"],
      {
        intro:
          "The same force can have very different effects depending on the area over which it acts. Pressure tells us how concentrated a force is. Solids, liquids and gases — including the air around us — all exert pressure.",
        sections: [
          {
            heading: "Pressure = Force ÷ Area",
            body: "Pressure is the force acting perpendicularly on a unit area of a surface. The smaller the area, the larger the pressure for the same force. That is why a sharp knife cuts better than a blunt one, and nails have pointed tips. Porters place a round piece of cloth on their heads to increase the area of contact and reduce the pressure of the load, and school bags have wide straps for the same reason.",
          },
          {
            heading: "Liquids and Gases Exert Pressure",
            body: "Water fills a container and pushes on its bottom and its walls. If holes are made at different heights in a bottle full of water, water from the lowest hole spurts out farthest, showing that liquid pressure increases with depth. Water spurting equally from holes at the same height shows that liquids exert equal pressure at the same depth. Gases also exert pressure on the walls of their container, which is why a balloon or bicycle tube swells up when air is pumped in.",
          },
          {
            heading: "Atmospheric Pressure",
            body: "The earth is surrounded by a blanket of air called the atmosphere, and the pressure this air exerts is called atmospheric pressure. The force of air on an area of just 15 cm × 15 cm is about equal to the weight of a 225 kg object (about 2250 N). We are not crushed because the pressure inside our bodies is also equal to atmospheric pressure and cancels it. A rubber sucker sticks to a smooth surface because pressing it pushes out the air, and the atmosphere presses it firmly in place.",
          },
        ],
        definitions: [
          { term: "Pressure", meaning: "Force acting on a unit area of a surface." },
          { term: "Thrust", meaning: "Force acting perpendicular to a surface." },
          { term: "Atmospheric pressure", meaning: "The pressure exerted by the envelope of air surrounding the earth." },
          { term: "Pascal (Pa)", meaning: "The SI unit of pressure, equal to 1 newton per square metre (N/m²)." },
        ],
        formulas: [
          { label: "Pressure", expression: "Pressure = Force / Area", note: "Measured in pascal (Pa) = N/m²" },
        ],
        keyPoints: [
          "Pressure = force ÷ area on which it acts.",
          "The smaller the area, the greater the pressure for the same force.",
          "Liquids exert pressure on the bottom and walls of their container, and it increases with depth.",
          "Liquids exert equal pressure at the same depth.",
          "Gases exert pressure on the walls of their container.",
          "Air exerts atmospheric pressure, balanced by the pressure inside our bodies.",
        ],
        explainers: {
          eli10:
            "Pressure is about how much a push is squeezed into a small space. If you press your palm on a balloon, nothing happens, but press it with a pin and it pops, because all the push goes into one tiny point. Water also pushes — more strongly the deeper you go. Even the air is pushing on you all the time, but your body pushes back equally, so you don't feel squashed.",
          realWorld:
            "Watch a coolie at a railway station: he puts a round cloth pad on his head before lifting heavy suitcases, spreading the weight over a larger area so it hurts less. A sharp vegetable knife cuts tomatoes easily because its thin edge gives high pressure. Water tanks on rooftops give better flow on the ground floor than on the top floor because pressure increases with depth.",
          mnemonic:
            "\"P = F over A — Pointy is Painful\": small area means big pressure. For liquids: \"Deeper means Stronger.\" For air: \"Air pushes, body pushes back.\"",
        },
      },
    ),
  ],
  [
    q("fp-q1", "What is the SI unit of pressure?", ["Newton", "Pascal", "Joule", "Watt"], 1, "Pressure is force per unit area, measured in pascal (Pa), where 1 Pa = 1 N/m²."),
    q("fp-q2", "Which of these is a non-contact force?", ["Friction", "Muscular force", "Magnetic force", "Push on a door"], 2, "A magnet can attract iron without touching it, so magnetic force is a non-contact force."),
    q("fp-q3", "Pressure is equal to:", ["Force / Area", "Force × Area", "Area / Force", "Force − Area"], 0, "Pressure is the force acting per unit area."),
    q("fp-q4", "Why do school bags have wide straps?", ["To increase pressure on the shoulders", "To reduce pressure by spreading the force over a larger area", "To reduce the weight of the bag", "To make the bag look bigger"], 1, "A larger area of contact reduces the pressure for the same force, so wide straps are more comfortable."),
    q("fp-q5", "Two students push a box in opposite directions with forces of 10 N and 4 N. What is the net force?", ["14 N", "0 N", "6 N in the direction of the 4 N push", "6 N in the direction of the 10 N push"], 3, "For opposite forces the net force is the difference (10 − 4 = 6 N) and acts in the direction of the larger force."),
    q("fp-q6", "How does the pressure exerted by a liquid change as depth increases?", ["It decreases", "It stays the same", "It increases", "It becomes zero"], 2, "Liquid pressure increases with depth, which is why water spurts farthest from the lowest hole in a bottle."),
  ],
);

const science = {
  id: "science",
  name: "Science",
  icon: "flask" as const,
  color: "emerald" as const,
  textbooks: [
    {
      id: "science-class-8",
      title: "Science — Textbook for Class VIII",
      chapters: [
        ch(1, "crop-production-and-management", "Crop Production and Management", "Describes agricultural practices from soil preparation and sowing to irrigation, crop protection, harvesting and storage, along with food from animals.", [
          t("Agricultural Practices", ["Kharif and Rabi Crops", "Basic Practices of Crop Production"]),
          t("Preparation of Soil and Sowing", ["Ploughing and Levelling", "Agricultural Implements", "Selection and Sowing of Seeds"]),
          t("Adding Manure, Fertilisers and Irrigation", ["Manure and Fertilisers", "Traditional Methods of Irrigation", "Modern Methods of Irrigation"]),
          t("Protection, Harvesting and Storage", ["Protection from Weeds", "Harvesting and Threshing", "Storage of Grains"]),
          t("Food from Animals", ["Animal Husbandry", "Fish, Poultry and Dairy Products"]),
        ]),
        ch(2, "microorganisms-friend-and-foe", "Microorganisms: Friend and Foe", "Introduces the major groups of microorganisms, their useful and harmful roles, food preservation and the nitrogen cycle.", [
          t("Microorganisms and Where They Live", ["Bacteria, Fungi, Protozoa and Algae", "Viruses", "Habitats of Microorganisms"]),
          t("Friendly Microorganisms", ["Making of Curd and Bread", "Commercial Use of Microorganisms", "Medicinal Use: Antibiotics and Vaccines", "Increasing Soil Fertility and Cleaning the Environment"]),
          t("Harmful Microorganisms", ["Disease-causing Microorganisms in Humans", "Diseases in Animals and Plants", "Food Poisoning"]),
          t("Food Preservation", ["Chemical Methods", "Preservation by Salt, Sugar and Oil", "Heat, Cold and Storage Methods"]),
          t("Nitrogen Fixation and Nitrogen Cycle", ["Nitrogen Fixation", "The Nitrogen Cycle"]),
        ]),
        ch(3, "coal-and-petroleum", "Coal and Petroleum", "Examines exhaustible natural resources such as coal, petroleum and natural gas, their products and the need to conserve them.", [
          t("Natural Resources", ["Inexhaustible Natural Resources", "Exhaustible Natural Resources"]),
          t("Coal", ["Formation of Coal", "Coke, Coal Tar and Coal Gas"]),
          t("Petroleum and Natural Gas", ["Formation of Petroleum", "Refining of Petroleum", "Natural Gas"]),
          t("Some Natural Resources Are Limited", ["Limited Availability of Fossil Fuels", "Tips for Saving Petrol and Diesel"]),
        ]),
        ch(4, "combustion-and-flame", "Combustion and Flame", "Explains combustion, the conditions needed for it, how fire is controlled, the structure of a flame and what makes a good fuel.", [
          t("What Is Combustion?", ["Combustible and Non-combustible Substances", "Ignition Temperature", "Inflammable Substances"]),
          t("How Do We Control Fire?", ["Conditions Necessary for Fire", "Fire Extinguishers"]),
          t("Types of Combustion", ["Rapid Combustion", "Spontaneous Combustion", "Explosion"]),
          t("Flame and Structure of a Flame", ["What Is a Flame?", "Zones of a Candle Flame"]),
          t("What Is a Fuel?", ["Characteristics of a Good Fuel", "Fuel Efficiency and Calorific Value", "Harmful Effects of Burning Fuels"]),
        ]),
        ch(5, "conservation-of-plants-and-animals", "Conservation of Plants and Animals", "Discusses deforestation and its effects, and ways of conserving forests and wildlife through protected areas, awareness and recycling.", [
          t("Deforestation and Its Causes", ["Causes of Deforestation", "Consequences of Deforestation"]),
          t("Conservation of Forest and Wildlife", ["Biosphere Reserves", "Wildlife Sanctuaries", "National Parks"]),
          t("Flora, Fauna and Species", ["Flora and Fauna", "Endemic Species", "Red Data Book", "Migration"]),
          t("Recycling of Paper and Reforestation", ["Recycling of Paper", "Reforestation"]),
        ]),
        ch(6, "reproduction-in-animals", "Reproduction in Animals", "Covers sexual and asexual modes of reproduction in animals, fertilisation, development of the embryo and metamorphosis.", [
          t("Modes of Reproduction", ["Sexual Reproduction", "Asexual Reproduction"]),
          t("Sexual Reproduction", ["Male and Female Reproductive Organs", "Fertilisation", "Development of the Embryo", "Viviparous and Oviparous Animals"]),
          t("Young Ones to Adults", ["Metamorphosis in Frogs", "Metamorphosis in Silkworms"]),
          t("Asexual Reproduction", ["Budding in Hydra", "Binary Fission in Amoeba", "Cloning"]),
        ]),
        ch(7, "reaching-the-age-of-adolescence", "Reaching the Age of Adolescence", "Describes the physical and emotional changes during adolescence, the role of hormones and the importance of reproductive health.", [
          t("Adolescence and Puberty", ["Changes at Puberty", "Development of Sex Organs"]),
          t("Secondary Sexual Characters and Hormones", ["Secondary Sexual Characters", "Role of Hormones in Initiating Reproductive Function", "Other Endocrine Glands"]),
          t("Reproductive Phase of Life in Humans", ["Menstruation", "How Is the Sex of the Baby Determined?"]),
          t("Reproductive Health", ["Nutritional Needs of Adolescents", "Personal Hygiene", "Say No to Drugs"]),
        ]),
        forceAndPressure,
        ch(9, "friction", "Friction", "Explains the causes and factors affecting friction, why it is both useful and harmful, and ways to increase or reduce it.", [
          t("Force of Friction", ["What Causes Friction", "Factors Affecting Friction"]),
          t("Friction: A Necessary Evil", ["Advantages of Friction", "Disadvantages of Friction"]),
          t("Increasing and Reducing Friction", ["Methods to Increase Friction", "Methods to Reduce Friction", "Wheels Reduce Friction"]),
          t("Fluid Friction", ["Drag in Air and Water", "Streamlined Shapes"]),
        ]),
        ch(10, "sound", "Sound", "Explains how sound is produced by vibrations, how it travels and is heard, its characteristics, and the problem of noise pollution.", [
          t("Sound Is Produced by a Vibrating Body", ["Vibration", "Sound Produced by Humans"]),
          t("Propagation and Hearing of Sound", ["Sound Needs a Medium to Travel", "We Hear Sound through Our Ears"]),
          t("Characteristics of Sound", ["Amplitude, Time Period and Frequency", "Loudness and Pitch", "Audible and Inaudible Sounds"]),
          t("Noise and Noise Pollution", ["Noise and Music", "Harms of Noise Pollution", "Measures to Limit Noise Pollution"]),
        ]),
        ch(11, "chemical-effects-of-electric-current", "Chemical Effects of Electric Current", "Investigates which liquids conduct electricity, the chemical changes caused by current and the process and uses of electroplating.", [
          t("Do Liquids Conduct Electricity?", ["Testing Conduction with a Tester", "Good and Poor Conducting Liquids"]),
          t("Chemical Effects of Electric Current", ["Observations: Bubbles, Deposits and Colour Change", "Passing Current through Copper Sulphate Solution"]),
          t("Electroplating", ["Process of Electroplating", "Uses of Electroplating"]),
        ]),
        ch(12, "some-natural-phenomena", "Some Natural Phenomena", "Explains electric charges and lightning, safety during thunderstorms, and the causes of and protection against earthquakes.", [
          t("Lightning and Electric Charges", ["Charging by Rubbing", "Types of Charges and Their Interaction", "Transfer of Charge"]),
          t("The Story of Lightning", ["How Lightning Occurs", "Lightning Safety", "Lightning Conductors"]),
          t("Earthquakes", ["What Is an Earthquake?", "Causes of Earthquakes", "Seismic Zones and Measuring Earthquakes", "Protection against Earthquakes"]),
        ]),
        ch(13, "light", "Light", "Studies the laws of reflection, multiple reflections, dispersion of sunlight and the structure and care of the human eye.", [
          t("Reflection of Light", ["What Makes Things Visible", "Laws of Reflection", "Regular and Diffused Reflection"]),
          t("Multiple Reflections", ["Reflected Light Can Be Reflected Again", "Multiple Images", "Kaleidoscope"]),
          t("Sunlight: White or Coloured?", ["Dispersion of Light", "Rainbow"]),
          t("The Human Eye", ["What Is Inside Our Eyes?", "Care of the Eyes", "Braille System for the Visually Impaired"]),
        ]),
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Social Science                                                      */
/* ------------------------------------------------------------------ */

const socialScience = {
  id: "social-science",
  name: "Social Science",
  icon: "globe" as const,
  color: "amber" as const,
  textbooks: [
    {
      id: "our-pasts-iii",
      title: "Our Pasts III — History Textbook for Class VIII",
      chapters: [
        ch(1, "how-when-and-where", "How, When and Where", "Examines how historians use dates, periods and colonial records to study the past, and what those records leave out.", [
          t("How Important Are Dates?", ["Which Dates?", "How Do We Periodise?"]),
          t("What Is Colonial?", ["Meaning of Colonialism", "Changes under British Rule"]),
          t("How Do We Know?", ["Administration Produces Records", "Surveys Become Important", "What Official Records Do Not Tell"]),
        ]),
        ch(2, "from-trade-to-territory", "From Trade to Territory: The Company Establishes Power", "Traces how the East India Company changed from a trading body into a territorial power in India.", [
          t("East India Company Comes East", ["Company Begins Trade in Bengal", "How Trade Led to Battles", "The Battle of Plassey", "Company Officials Become Nabobs"]),
          t("Company Rule Expands", ["Tipu Sultan: The Tiger of Mysore", "War with the Marathas", "The Claim to Paramountcy", "The Doctrine of Lapse"]),
          t("Setting Up a New Administration", ["Presidencies and Collectors", "The Company Army"]),
        ]),
        ch(3, "ruling-the-countryside", "Ruling the Countryside", "Explains the Company's revenue systems and how indigo cultivation led to the Blue Rebellion.", [
          t("The Company Becomes the Diwan", ["Revenue for the Company", "The Need to Improve Agriculture", "The Permanent Settlement", "A New System Is Devised"]),
          t("Crops for Europe", ["Why the Demand for Indian Indigo?", "Britain Turns to India", "How Was Indigo Cultivated?"]),
          t("The Blue Rebellion and After", ["The Indigo Rebellion of 1859", "The Indigo Commission and Champaran"]),
        ]),
        ch(4, "tribals-dikus-and-the-vision-of-a-golden-age", "Tribals, Dikus and the Vision of a Golden Age", "Describes tribal ways of life, how colonial rule affected them and the movement led by Birsa Munda.", [
          t("How Did Tribal Groups Live?", ["Jhum Cultivators", "Hunters and Gatherers", "Taking to Settled Cultivation"]),
          t("How Did Colonial Rule Affect Tribal Lives?", ["What Happened to Tribal Chiefs?", "Forest Laws and Their Impact", "The Problem with Trade", "The Search for Work"]),
          t("A Closer Look: Birsa Munda", ["Birsa's Movement", "The Significance of Birsa's Movement"]),
        ]),
        ch(5, "when-people-rebel-1857-and-after", "When People Rebel: 1857 and After", "Analyses the causes, spread and suppression of the Revolt of 1857 and the changes that followed.", [
          t("Policies and the People", ["Nawabs Lose Their Power", "The Peasants and the Sepoys", "Responses to Reforms"]),
          t("A Mutiny Becomes a Popular Rebellion", ["From Meerut to Delhi", "The Rebellion Spreads"]),
          t("The Company Fights Back", ["Recapture of Delhi", "Suppression of the Rebel Leaders"]),
          t("Aftermath", ["Transfer of Power to the British Crown", "Changes in Policy after 1858"]),
        ]),
        ch(6, "civilising-the-native-educating-the-nation", "Civilising the \"Native\", Educating the Nation", "Discusses British education policy, from Orientalism to English education, and Indian visions of national education.", [
          t("How the British Saw Education", ["The Tradition of Orientalism", "Grave Errors of the East", "Education for Commerce: Wood's Despatch"]),
          t("What Happened to the Local Schools?", ["The Report of William Adam", "New Routines, New Rules"]),
          t("The Agenda for a National Education", ["English Education Has Enslaved Us: Mahatma Gandhi", "Tagore's Abode of Peace"]),
        ]),
        ch(7, "women-caste-and-reform", "Women, Caste and Reform", "Covers nineteenth-century reform movements on the status of women and the demand for caste equality.", [
          t("Working towards Change", ["Changing the Lives of Widows", "Girls Begin Going to School", "Women Write about Women"]),
          t("Caste and Social Reform", ["Demands for Equality and Justice", "Gulamgiri: Jyotirao Phule", "Who Could Enter Temples?", "The Non-Brahman Movement"]),
          t("Organisations for Reform", ["Brahmo Samaj and Prarthana Samaj", "Derozio and Young Bengal", "Ramakrishna Mission and Arya Samaj", "Aligarh and Singh Sabha Movements"]),
        ]),
        ch(8, "the-making-of-the-national-movement", "The Making of the National Movement: 1870s–1947", "Follows the growth of Indian nationalism from the founding of the Congress to Independence and Partition.", [
          t("The Emergence of Nationalism", ["The Indian National Congress", "Freedom Is Our Birthright", "The Partition of Bengal and Swadeshi"]),
          t("The Growth of Mass Nationalism", ["The Advent of Mahatma Gandhi", "The Rowlatt Satyagraha", "Khilafat Agitation and Non-Cooperation Movement"]),
          t("The Happenings of 1922–1929", ["Simon Commission", "Purna Swaraj"]),
          t("The March to Dandi", ["Salt Satyagraha", "Civil Disobedience"]),
          t("Quit India and Later", ["The Quit India Movement", "Towards Independence and Partition"]),
        ]),
      ],
    },
    {
      id: "resources-and-development",
      title: "Resources and Development — Geography Textbook for Class VIII",
      chapters: [
        ch(1, "resources", "Resources", "Defines resources, classifies them into types and explains the need for conservation and sustainable development.", [
          t("What Is a Resource?", ["Utility and Value", "Role of Time and Technology"]),
          t("Types of Resources", ["Natural Resources", "Renewable and Non-renewable Resources", "Actual and Potential Resources", "Ubiquitous and Localised Resources"]),
          t("Human-made and Human Resources", ["Human-made Resources", "Human Resource Development"]),
          t("Conserving Resources", ["Resource Conservation", "Sustainable Development", "Principles of Sustainable Development"]),
        ]),
        ch(2, "land-soil-water-natural-vegetation-and-wildlife-resources", "Land, Soil, Water, Natural Vegetation and Wildlife Resources", "Studies the use, degradation and conservation of land, soil, water, natural vegetation and wildlife.", [
          t("Land", ["Land Use", "Conservation of Land Resource", "Landslides and Mitigation"]),
          t("Soil", ["Formation of Soil", "Factors of Soil Formation", "Degradation and Conservation of Soil"]),
          t("Water", ["Problems of Water Availability", "Conservation of Water Resources"]),
          t("Natural Vegetation and Wildlife", ["Distribution of Natural Vegetation", "Conservation of Natural Vegetation and Wildlife"]),
        ]),
        ch(3, "agriculture", "Agriculture", "Explains economic activities, the farm system, types of farming, major crops and agricultural development.", [
          t("Economic Activities and Farm System", ["Primary, Secondary and Tertiary Activities", "Inputs, Processes and Outputs"]),
          t("Types of Farming", ["Subsistence Farming", "Commercial Farming"]),
          t("Major Crops", ["Rice and Wheat", "Millets and Maize", "Cotton and Jute", "Coffee and Tea"]),
          t("Agricultural Development", ["A Farm in India", "A Farm in the USA"]),
        ]),
        ch(4, "industries", "Industries", "Classifies industries, discusses factors affecting their location and studies major industries through case studies.", [
          t("Classification of Industries", ["Raw Materials", "Size", "Ownership"]),
          t("Factors Affecting Location of Industries", ["Location Factors", "Industrial System", "Industrial Regions"]),
          t("Distribution of Major Industries", ["Iron and Steel Industry", "Cotton Textile Industry", "Information Technology"]),
        ]),
        ch(5, "human-resources", "Human Resources", "Examines the distribution, density, change and composition of population as a human resource.", [
          t("Distribution of Population", ["Population Density", "Factors Affecting Distribution of Population"]),
          t("Population Change", ["Birth Rate and Death Rate", "Migration"]),
          t("Patterns of Population Change and Composition", ["Patterns of Population Change", "Population Composition", "Population Pyramid"]),
        ]),
      ],
    },
    {
      id: "social-and-political-life-iii",
      title: "Social and Political Life III — Civics Textbook for Class VIII",
      chapters: [
        ch(1, "the-indian-constitution", "The Indian Constitution", "Explains why a country needs a constitution and describes the key features of the Indian Constitution.", [
          t("Why Does a Country Need a Constitution?", ["Laying Out Ideals", "Defining the Political System", "Preventing Misuse of Power"]),
          t("Key Features of the Indian Constitution", ["Federalism", "Parliamentary Form of Government", "Separation of Powers"]),
          t("Fundamental Rights and Secularism", ["Fundamental Rights", "Directive Principles of State Policy", "Secularism"]),
        ]),
        ch(2, "understanding-secularism", "Understanding Secularism", "Discusses the meaning of secularism and how the Indian state keeps religion separate from state power.", [
          t("What Is Secularism?", ["Separation of Religion from the State", "Why Is It Important?"]),
          t("Indian Secularism", ["Strategies of Distancing, Non-interference and Intervention", "How Indian Secularism Differs from Other Democracies"]),
        ]),
        ch(3, "parliament-and-the-making-of-laws", "Parliament and the Making of Laws", "Explains the role of Parliament, who its members are and how laws are made, including the role of citizens.", [
          t("Why Should People Decide?", ["People's Participation in Decision-making", "Representatives and Elections"]),
          t("The Role of the Parliament", ["To Select the National Government", "To Control, Guide and Inform the Government", "Law-making"]),
          t("Who Are the People in Parliament?", ["Lok Sabha and Rajya Sabha", "Representation of Marginalised Groups"]),
          t("How Do New Laws Come About?", ["Role of Citizens", "The Protection of Women from Domestic Violence Act", "Unpopular and Controversial Laws"]),
        ]),
        ch(4, "judiciary", "Judiciary", "Describes the role, independence and structure of the Indian judiciary and how citizens can access justice.", [
          t("What Is the Role of the Judiciary?", ["Dispute Resolution", "Judicial Review", "Upholding the Law and Enforcing Fundamental Rights"]),
          t("What Is an Independent Judiciary?", ["Separation of Powers", "Appointment of Judges"]),
          t("What Is the Structure of Courts in India?", ["District Courts", "High Courts", "Supreme Court", "The Appellate System"]),
          t("Branches of the Legal System and Access to Courts", ["Criminal Law and Civil Law", "Public Interest Litigation"]),
        ]),
        ch(5, "understanding-marginalisation", "Understanding Marginalisation", "Explains what it means to be socially marginalised, with a focus on Adivasis and minorities.", [
          t("What Does It Mean to Be Socially Marginalised?", ["Meaning of Marginalisation", "Causes of Marginalisation"]),
          t("Adivasis and Marginalisation", ["Who Are Adivasis?", "Adivasis and Stereotyping", "Development and Displacement"]),
          t("Minorities and Marginalisation", ["Safeguards for Minorities", "Muslims and Marginalisation"]),
        ]),
        ch(6, "confronting-marginalisation", "Confronting Marginalisation", "Shows how marginalised groups use Fundamental Rights and specific laws to fight discrimination and seek justice.", [
          t("Invoking Fundamental Rights", ["Abolition of Untouchability", "Using Rights to Demand Justice"]),
          t("Laws for the Marginalised", ["Promoting Social Justice: Reservations", "Protecting the Rights of Dalits and Adivasis"]),
          t("The Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989", ["Aims of the Act", "Adivasi Demands and the Forest Rights Act, 2006"]),
          t("Manual Scavenging", ["What Is Manual Scavenging?", "The 1993 Act and Beyond"]),
        ]),
        ch(7, "public-facilities", "Public Facilities", "Examines public facilities like water supply, the government's role in providing them and issues of equity.", [
          t("Water and the People of Chennai", ["Unequal Access to Water", "Water as Part of the Fundamental Right to Life"]),
          t("Public Facilities", ["What Are Public Facilities?", "The Government's Role"]),
          t("Water Supply to Chennai: Is It Available to All?", ["Shortages and Private Suppliers", "In Search of Alternatives"]),
        ]),
        ch(8, "law-and-social-justice", "Law and Social Justice", "Discusses the need for laws protecting workers, consumers and the environment, using the Bhopal gas tragedy as a case study.", [
          t("What Is a Worker's Worth?", ["Minimum Wages", "Enforcement of Safety Laws"]),
          t("The Bhopal Gas Tragedy", ["The Disaster of 1984", "Struggle for Justice"]),
          t("New Laws to Protect the Environment", ["Environment as a Public Facility", "Role of Courts and Citizens"]),
        ]),
      ],
    },
  ],
};

export const class8: Grade = {
  id: "8",
  label: "Class 8",
  subjects: [mathematics, science, socialScience],
};

import type {
  Chapter,
  Grade,
  QuizQuestion,
  Topic,
  TopicContent,
} from "../types";

/*
 * Class 9 — CBSE / NCERT (rationalised textbooks, 2023-24 onward).
 * Topic and subtopic ids are kebab-case slugs of their titles.
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

const numberSystems = ch(
  1,
  "number-systems",
  "Number Systems",
  "Extends the number system from rational to irrational and real numbers, studies their decimal expansions, operations, rationalisation and laws of exponents.",
  [
    t(
      "Introduction to Number Systems",
      ["Natural Numbers, Whole Numbers and Integers", "Rational Numbers", "Rational Numbers between Two Numbers"],
      {
        intro:
          "Numbers have grown step by step, from counting numbers to fractions and negatives. Each new collection contains the earlier one. In this chapter we see that even rational numbers do not fill the whole number line, which leads us to real numbers.",
        sections: [
          {
            heading: "From Counting to Integers",
            body: "The counting numbers 1, 2, 3, … are called **natural numbers** (N). Adding 0 gives the **whole numbers** (W), and including the negatives −1, −2, −3, … gives the **integers** (Z, from the German word 'zahlen', meaning 'to count'). Every natural number is a whole number, and every whole number is an integer.",
          },
          {
            heading: "Rational Numbers",
            body: "A number r is **rational** if it can be written as p/q, where p and q are integers and q ≠ 0. The set is written Q (from 'quotient'). Every integer is rational, since for example −5 = −5/1. Rational numbers have many equivalent forms, like 1/2 = 2/4 = 10/20; we usually use the standard form where p and q have no common factor other than 1 and q is positive.",
          },
          {
            heading: "Infinitely Many Rational Numbers in Between",
            body: "Between any two rational numbers there are infinitely many rational numbers. To find five rational numbers between 1 and 2, write them as 6/6 and 12/6; then 7/6, 8/6, 9/6, 10/6 and 11/6 lie between them. Another way is to take the average: (a + b)/2 always lies between a and b.",
          },
        ],
        definitions: [
          { term: "Natural numbers (N)", meaning: "The counting numbers 1, 2, 3, …" },
          { term: "Whole numbers (W)", meaning: "The natural numbers together with 0." },
          { term: "Integers (Z)", meaning: "Whole numbers together with negative numbers: …, −2, −1, 0, 1, 2, …" },
          { term: "Rational number (Q)", meaning: "A number that can be written as p/q, where p and q are integers and q ≠ 0." },
        ],
        formulas: [
          { label: "Rational number", expression: "r = p/q, where p, q are integers and q ≠ 0" },
          { label: "A number between a and b", expression: "(a + b)/2" },
        ],
        keyPoints: [
          "N ⊂ W ⊂ Z ⊂ Q: each set is contained in the next.",
          "Every integer is a rational number, but not every rational number is an integer.",
          "Rational numbers have infinitely many equivalent forms.",
          "There are infinitely many rational numbers between any two rational numbers.",
        ],
        explainers: {
          eli10:
            "Numbers are like a family of nesting dolls. The smallest doll holds counting numbers, the next one adds zero, the next adds negative numbers, and a bigger one adds all the fractions. Each bigger doll holds all the smaller ones inside it. And between any two fractions you can always squeeze in more fractions.",
          realWorld:
            "Cricket scores use whole numbers, temperatures in Leh in winter need negative integers, and your pocket money split among friends often needs fractions like ₹50/3. Railway timetables, recipe measurements like 3/4 cup of rice, and marks like 72.5 out of 80 are all rational numbers you meet daily.",
          mnemonic:
            "\"No Wise Zebra Questions\" — N ⊂ W ⊂ Z ⊂ Q, in order from smallest to biggest. For Q, remember \"Q for Quotient\" — any number you can write as a fraction.",
        },
      },
    ),
    t(
      "Irrational Numbers",
      ["What Are Irrational Numbers?", "Locating √2 on the Number Line", "Real Numbers"],
      {
        intro:
          "Some numbers on the number line cannot be written as p/q at all. These are called irrational numbers. Together, rational and irrational numbers make up the real numbers.",
        sections: [
          {
            heading: "What Are Irrational Numbers?",
            body: "A number s is **irrational** if it cannot be written in the form p/q, where p and q are integers and q ≠ 0. The Pythagoreans in ancient Greece were among the first to discover such numbers. Examples include √2, √3, √15, π and numbers like 0.10110111011110… Note that the square root of a perfect square, like √16 = 4, is rational.",
          },
          {
            heading: "Locating √2 on the Number Line",
            body: "Draw a square of side 1 unit on the number line with one corner at 0. By the Pythagoras theorem, its diagonal is √(1² + 1²) = √2. With the compass at 0 and radius equal to the diagonal, draw an arc cutting the number line; that point represents √2. Similarly, drawing a 1-unit perpendicular at the end of √2 gives a hypotenuse of √3, which can also be marked.",
          },
          {
            heading: "Real Numbers",
            body: "The collection of all rational and irrational numbers together is called the set of **real numbers**, denoted by R. Every real number is either rational or irrational. Every real number corresponds to a unique point on the number line, and every point on the number line represents a unique real number — that is why it is called the real number line.",
          },
        ],
        definitions: [
          { term: "Irrational number", meaning: "A number that cannot be written in the form p/q, where p and q are integers and q ≠ 0." },
          { term: "Real numbers (R)", meaning: "The collection of all rational and irrational numbers." },
          { term: "Real number line", meaning: "The number line on which every point represents a unique real number." },
        ],
        formulas: [
          { label: "Diagonal of a unit square", expression: "√(1² + 1²) = √2" },
          { label: "Next step in the square-root spiral", expression: "√((√n)² + 1²) = √(n + 1)" },
        ],
        keyPoints: [
          "Irrational numbers cannot be expressed as p/q.",
          "√2, √3, √5 and π are irrational; √4 = 2 and √9 = 3 are rational.",
          "√2 can be located on the number line using the diagonal of a unit square.",
          "Rational and irrational numbers together form the real numbers.",
          "Each point on the number line corresponds to exactly one real number.",
        ],
        explainers: {
          eli10:
            "Some numbers are so shy they refuse to be written as a neat fraction. √2 is one of them — no fraction, however clever, equals it exactly. But you can still find its exact spot on a number line: draw a square with sides of 1, and its diagonal is exactly √2 long. All the neat fractions and the shy numbers together are called real numbers.",
          realWorld:
            "When a carpenter in your colony makes a square window frame of 1 m sides, the diagonal wooden brace he cuts is √2 ≈ 1.414 m long. The wheel of a bicycle covers a distance of π × diameter in one turn, and π is irrational. These numbers show up whenever we deal with diagonals and circles.",
          mnemonic:
            "\"Irrational = Impossible as a Ratio.\" To draw √2: \"One-one square, measure the stair\" — a 1-by-1 square's diagonal gives √2.",
        },
      },
    ),
    t(
      "Real Numbers and Their Decimal Expansions",
      ["Terminating Decimal Expansions", "Non-terminating Recurring Decimal Expansions", "Converting Recurring Decimals to p/q", "Non-terminating Non-recurring Decimal Expansions"],
      {
        intro:
          "Writing a number as a decimal tells us whether it is rational or irrational. Rational numbers either stop or repeat a pattern forever. Irrational numbers go on forever without any repeating pattern.",
        sections: [
          {
            heading: "Terminating and Recurring Decimals",
            body: "When we divide p by q, either the remainder becomes zero or it starts repeating. If the remainder becomes zero, the decimal **terminates**, as in 7/8 = 0.875. If the remainders repeat, the digits repeat, as in 10/3 = 3.333… or 1/7 = 0.142857142857…, written with a bar over the repeating block. Such decimals are called **non-terminating recurring**.",
          },
          {
            heading: "Converting Recurring Decimals to p/q",
            body: "Every terminating or non-terminating recurring decimal can be written as p/q. For 0.333…, let x = 0.333…; then 10x = 3.333…, so 10x − x = 3, giving x = 1/3. For 1.272727…, let x = 1.2727…; then 100x = 127.2727…, so 99x = 126 and x = 126/99 = 14/11. Multiply by 10 if one digit repeats, 100 if two digits repeat, and so on.",
          },
          {
            heading: "Non-terminating Non-recurring Decimals",
            body: "The decimal expansion of an irrational number neither ends nor repeats. For example, √2 = 1.4142135623… and π = 3.14159265… keep going with no repeating block. The fraction 22/7 is only an approximation of π, since 22/7 is rational and π is not. So: a number is rational if and only if its decimal expansion terminates or recurs.",
          },
        ],
        definitions: [
          { term: "Terminating decimal", meaning: "A decimal expansion that ends after a finite number of digits, such as 0.875." },
          { term: "Non-terminating recurring decimal", meaning: "A decimal that goes on forever with a block of digits repeating, such as 0.142857142857…" },
          { term: "Non-terminating non-recurring decimal", meaning: "A decimal that goes on forever without any repeating block; it represents an irrational number." },
          { term: "Period", meaning: "The block of digits that repeats in a recurring decimal." },
        ],
        formulas: [
          { label: "One repeating digit", expression: "If x = 0.aaa…, then 10x − x = a, so x = a/9" },
          { label: "Two repeating digits", expression: "If x = 0.ababab…, then 100x − x = ab, so x = ab/99" },
        ],
        keyPoints: [
          "Rational numbers have terminating or non-terminating recurring decimal expansions.",
          "Irrational numbers have non-terminating non-recurring decimal expansions.",
          "Any recurring decimal can be converted to the form p/q.",
          "22/7 and 3.14 are only rational approximations of π.",
          "The number of digits in the repeating block is always less than the divisor.",
        ],
        explainers: {
          eli10:
            "Decimals are like songs. Some songs end after a few notes — those are terminating decimals like 0.5. Some songs loop the same tune forever, like 0.333… — those are recurring decimals. Both kinds come from fractions. But irrational numbers are like a song that never ends and never repeats its tune, like √2 = 1.41421356…",
          realWorld:
            "When you split a ₹100 bill equally among 3 friends, the calculator shows 33.333333…, a recurring decimal — the '3' never stops. When you split ₹100 among 8 friends, you get exactly ₹12.50, a terminating decimal. A shopkeeper rounds these off, but mathematically 100/3 goes on forever.",
          mnemonic:
            "\"Stops or Loops → Rational; Never stops, never loops → Irrational.\" For conversion: \"One digit loops, multiply by 10; two digits loop, multiply by 100.\"",
        },
      },
    ),
    t(
      "Operations on Real Numbers",
      ["Operations with Irrational Numbers", "Identities Involving Square Roots", "Rationalising the Denominator", "Laws of Exponents for Real Numbers"],
      {
        intro:
          "Real numbers can be added, subtracted, multiplied and divided just like rational numbers. Some useful identities make working with square roots easier. We also extend the laws of exponents to rational powers.",
        sections: [
          {
            heading: "Operations with Irrational Numbers",
            body: "If r is rational and s is irrational, then r + s, r − s, r × s and r ÷ s are irrational (with r ≠ 0 for multiplication and division). For example, 2 + √3 and 3√2 are irrational. But two irrational numbers can combine to give a rational one: √2 × √2 = 2 and √3 − √3 = 0. So the sum or product of two irrational numbers may be rational or irrational.",
          },
          {
            heading: "Identities and Rationalising",
            body: "For positive real numbers a and b: √(ab) = √a × √b, √(a/b) = √a/√b, and (√a + √b)(√a − √b) = a − b. We use the last identity to **rationalise the denominator**, i.e. remove the square root from the bottom of a fraction. For example, 1/√2 = √2/2, and 1/(2 + √3) = (2 − √3)/((2 + √3)(2 − √3)) = (2 − √3)/(4 − 3) = 2 − √3.",
          },
          {
            heading: "Laws of Exponents",
            body: "The laws you know for integer powers also hold for real bases a, b > 0 and rational exponents p, q. For example, a^p × a^q = a^(p + q) and (a^p)^q = a^(pq). A fractional exponent means a root: a^(1/n) = ⁿ√a, so 64^(1/2) = 8 and 125^(1/3) = 5. Also a^(m/n) = (ⁿ√a)^m, so 32^(2/5) = (⁵√32)² = 2² = 4.",
          },
        ],
        definitions: [
          { term: "Rationalising the denominator", meaning: "Rewriting a fraction so that its denominator has no square roots, by multiplying top and bottom by a suitable factor." },
          { term: "Conjugate", meaning: "For a + √b, the expression a − √b; their product a² − b is rational." },
          { term: "nth root", meaning: "For a > 0, ⁿ√a = b means bⁿ = a and b > 0." },
          { term: "Exponent", meaning: "The power to which a base is raised, showing repeated multiplication or a root when fractional." },
        ],
        formulas: [
          { label: "Product of roots", expression: "√(ab) = √a × √b" },
          { label: "Quotient of roots", expression: "√(a/b) = √a / √b" },
          { label: "Difference of squares", expression: "(√a + √b)(√a − √b) = a − b" },
          { label: "Conjugate product", expression: "(a + √b)(a − √b) = a² − b" },
          { label: "Square of a sum", expression: "(√a + √b)² = a + 2√(ab) + b" },
          { label: "Laws of exponents", expression: "aᵖ·a^q = a^(p+q);  (aᵖ)^q = a^(pq);  aᵖ/a^q = a^(p−q);  aᵖ·bᵖ = (ab)ᵖ" },
          { label: "Fractional exponent", expression: "a^(m/n) = (ⁿ√a)^m = ⁿ√(a^m)" },
        ],
        keyPoints: [
          "Rational ± irrational is always irrational.",
          "The product or sum of two irrational numbers can be rational or irrational.",
          "To rationalise 1/(a + √b), multiply numerator and denominator by a − √b.",
          "a^(1/n) is the nth root of a.",
          "a^0 = 1 for any a ≠ 0.",
        ],
        explainers: {
          eli10:
            "Square roots are like tricky guests at the bottom of a fraction, and mathematicians prefer to move them to the top. The trick is to multiply by a 'partner' that makes the root disappear, like √2 × √2 = 2. Fractional powers are just a secret code for roots: a power of 1/2 means square root, and 1/3 means cube root.",
          realWorld:
            "Engineers designing a staircase for a building in Mumbai use diagonals like √2 m and simplify expressions like 1/√2 to √2/2 ≈ 0.707 to calculate quickly. Bank compound interest and population growth also use exponent laws. Calculators and phones use these rules internally when you press √ or xʸ.",
          mnemonic:
            "\"Root at the bottom? Bring its twin with a flipped sign\" — multiply by the conjugate. For exponents: \"Multiply → Add powers, Power of power → Multiply powers, Divide → Subtract.\" And \"bottom of the power = root\": a^(1/n) = ⁿ√a.",
        },
      },
    ),
  ],
  [
    q("ns-q1", "Which of the following is an irrational number?", ["√16", "22/7", "√5", "0.25"], 2, "√5 cannot be written as p/q; √16 = 4, 22/7 and 0.25 are rational."),
    q("ns-q2", "The decimal expansion of 1/7 is:", ["Terminating", "Non-terminating recurring", "Non-terminating non-recurring", "An integer"], 1, "1/7 = 0.142857142857…, where the block 142857 repeats forever."),
    q("ns-q3", "0.333… written in the form p/q is:", ["1/3", "3/10", "33/100", "10/3"], 0, "Let x = 0.333…; then 10x − x = 3, so 9x = 3 and x = 1/3."),
    q("ns-q4", "Which is the rationalised form of 1/√7?", ["1/7", "7", "√7", "√7/7"], 3, "Multiply numerator and denominator by √7: 1/√7 = √7/(√7 × √7) = √7/7."),
    q("ns-q5", "What is the value of 32^(2/5)?", ["16", "8", "4", "2"], 2, "32^(1/5) = 2, so 32^(2/5) = 2² = 4."),
    q("ns-q6", "What is √3 × √12?", ["√15", "6", "36", "3√2"], 1, "√3 × √12 = √36 = 6, showing that the product of two irrational numbers can be rational."),
  ],
);

const mathematics = {
  id: "mathematics",
  name: "Mathematics",
  icon: "calculator" as const,
  color: "indigo" as const,
  textbooks: [
    {
      id: "mathematics-class-9",
      title: "Mathematics — Textbook for Class IX",
      chapters: [
        numberSystems,
        ch(2, "polynomials", "Polynomials", "Studies polynomials in one variable, their zeroes, the Factor Theorem, factorisation and algebraic identities.", [
          t("Polynomials in One Variable", ["Terms and Coefficients", "Degree of a Polynomial", "Linear, Quadratic and Cubic Polynomials"]),
          t("Zeroes of a Polynomial", ["Value of a Polynomial", "Finding Zeroes"]),
          t("Factorisation of Polynomials", ["The Factor Theorem", "Splitting the Middle Term", "Factorising Cubic Polynomials"]),
          t("Algebraic Identities", ["Identities for Squares", "Identities for Cubes", "Identity for x³ + y³ + z³ − 3xyz"]),
        ]),
        ch(3, "coordinate-geometry", "Coordinate Geometry", "Introduces the Cartesian system for locating points in a plane using coordinates.", [
          t("Introduction to Locating Points", ["Describing Position with Two References", "History: René Descartes"]),
          t("Cartesian System", ["The x-axis and y-axis", "Quadrants and Sign Conventions", "Abscissa and Ordinate"]),
        ]),
        ch(4, "linear-equations-in-two-variables", "Linear Equations in Two Variables", "Introduces linear equations of the form ax + by + c = 0 and shows that they have infinitely many solutions.", [
          t("Linear Equations", ["The Form ax + by + c = 0", "Writing Equations from Situations"]),
          t("Solution of a Linear Equation", ["Infinitely Many Solutions", "Finding Solutions"]),
        ]),
        ch(5, "introduction-to-euclids-geometry", "Introduction to Euclid's Geometry", "Presents Euclid's definitions, axioms and postulates and their use in proving simple results.", [
          t("Euclid's Definitions, Axioms and Postulates", ["Euclid's Definitions", "Euclid's Axioms", "Euclid's Five Postulates"]),
          t("Axioms and Theorems", ["Consistency of Axioms", "Proving Simple Results"]),
        ]),
        ch(6, "lines-and-angles", "Lines and Angles", "Covers angle pairs, the linear pair axiom and angles formed when a transversal cuts parallel lines.", [
          t("Basic Terms and Definitions", ["Types of Angles", "Complementary and Supplementary Angles", "Adjacent Angles and Linear Pairs"]),
          t("Intersecting and Non-intersecting Lines", ["Linear Pair Axiom", "Vertically Opposite Angles Theorem"]),
          t("Parallel Lines and a Transversal", ["Corresponding Angles", "Alternate and Interior Angles", "Lines Parallel to the Same Line"]),
        ]),
        ch(7, "triangles", "Triangles", "Studies congruence of triangles, congruence criteria and properties of isosceles triangles.", [
          t("Congruence of Triangles", ["Meaning of Congruence", "Corresponding Parts of Congruent Triangles (CPCT)"]),
          t("Criteria for Congruence of Triangles", ["SAS Congruence Rule", "ASA and AAS Congruence Rules", "SSS Congruence Rule", "RHS Congruence Rule"]),
          t("Some Properties of a Triangle", ["Angles Opposite Equal Sides", "Sides Opposite Equal Angles"]),
        ]),
        ch(8, "quadrilaterals", "Quadrilaterals", "Proves properties of parallelograms and the Mid-point Theorem and its converse.", [
          t("Properties of a Parallelogram", ["Opposite Sides and Angles", "Diagonals Bisect Each Other", "Conditions for a Parallelogram"]),
          t("The Mid-point Theorem", ["Statement and Proof", "Converse of the Mid-point Theorem"]),
        ]),
        ch(9, "circles", "Circles", "Studies chords, arcs, angles subtended by them and cyclic quadrilaterals.", [
          t("Angle Subtended by a Chord at a Point", ["Equal Chords Subtend Equal Angles", "Converse Result"]),
          t("Perpendicular from the Centre to a Chord", ["Perpendicular Bisects the Chord", "Line through the Centre Bisecting a Chord"]),
          t("Equal Chords and Their Distances from the Centre", ["Equal Chords Are Equidistant", "Converse Result"]),
          t("Angle Subtended by an Arc of a Circle", ["Angle at the Centre Is Double", "Angles in the Same Segment"]),
          t("Cyclic Quadrilaterals", ["Opposite Angles Are Supplementary", "Converse Result"]),
        ]),
        ch(10, "herons-formula", "Heron's Formula", "Finds the area of a triangle from its three sides using Heron's formula.", [
          t("Area of a Triangle", ["Using Base and Height", "Right and Equilateral Triangles"]),
          t("Area of a Triangle by Heron's Formula", ["Semi-perimeter", "Heron's Formula", "Applications"]),
        ]),
        ch(11, "surface-areas-and-volumes", "Surface Areas and Volumes", "Calculates the surface areas and volumes of right circular cones, spheres and hemispheres.", [
          t("Surface Area of a Right Circular Cone", ["Slant Height", "Curved and Total Surface Area"]),
          t("Surface Area of a Sphere", ["Surface Area of a Sphere", "Surface Area of a Hemisphere"]),
          t("Volume of a Right Circular Cone", ["Relation with a Cylinder", "Formula and Applications"]),
          t("Volume of a Sphere", ["Volume of a Sphere", "Volume of a Hemisphere"]),
        ]),
        ch(12, "statistics", "Statistics", "Represents data graphically using bar graphs, histograms and frequency polygons.", [
          t("Bar Graphs", ["Reading Bar Graphs", "Drawing Bar Graphs"]),
          t("Histograms", ["Histograms with Uniform Class Widths", "Histograms with Varying Class Widths"]),
          t("Frequency Polygons", ["Class Marks", "Drawing a Frequency Polygon"]),
        ]),
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Science                                                             */
/* ------------------------------------------------------------------ */

const motion = ch(
  7,
  "motion",
  "Motion",
  "Describes motion using distance, displacement, speed, velocity and acceleration, represents it with graphs, derives the equations of motion and introduces uniform circular motion.",
  [
    t(
      "Describing Motion",
      ["Reference Point", "Distance and Displacement", "Uniform and Non-uniform Motion"],
      {
        intro:
          "We say an object is in motion when its position changes with time. To describe that change, we need a fixed point to measure from. Motion can be described by how far an object travels and how far it ends up from where it started.",
        sections: [
          {
            heading: "Reference Point",
            body: "To describe where an object is, we choose a fixed **reference point**, also called the origin. A school may be '2 km north of the railway station' — here the station is the reference point. Motion is relative: a passenger sitting in a moving train is at rest with respect to the train but in motion with respect to the platform.",
          },
          {
            heading: "Distance and Displacement",
            body: "**Distance** is the total length of the path actually travelled, and it has only magnitude. **Displacement** is the shortest distance from the initial to the final position, along with its direction. If you walk 60 km from O to C and then 25 km back to B, the distance is 85 km but the displacement is only 35 km. If you come back to the starting point, your displacement is zero even though you have covered some distance.",
          },
          {
            heading: "Uniform and Non-uniform Motion",
            body: "If an object covers equal distances in equal intervals of time, however small those intervals, it is in **uniform motion**. If it covers unequal distances in equal intervals of time, it is in **non-uniform motion**. A car moving through busy traffic or a person jogging in a park are examples of non-uniform motion.",
          },
        ],
        definitions: [
          { term: "Reference point (origin)", meaning: "A fixed point with respect to which the position of an object is described." },
          { term: "Distance", meaning: "The total path length covered by an object; it has magnitude only." },
          { term: "Displacement", meaning: "The shortest distance between the initial and final positions of an object, along with its direction." },
          { term: "Uniform motion", meaning: "Motion in which an object covers equal distances in equal intervals of time." },
          { term: "Non-uniform motion", meaning: "Motion in which an object covers unequal distances in equal intervals of time." },
        ],
        formulas: [
          { label: "Relation between the two", expression: "Magnitude of displacement ≤ distance travelled", note: "They are equal only when the object moves in a straight line without turning back" },
        ],
        keyPoints: [
          "Motion is always described relative to a reference point.",
          "Distance has only magnitude; displacement has both magnitude and direction.",
          "Displacement can be zero even when the distance travelled is not zero.",
          "Uniform motion: equal distances in equal time intervals.",
          "Most motion in daily life is non-uniform.",
        ],
        explainers: {
          eli10:
            "Imagine you walk from your house to the park and back home. Your legs did a lot of walking — that's distance. But if someone asks, 'How far are you from where you started?', the answer is zero — that's displacement. And to say where anything is, you first need a starting point, like saying 'the shop is next to my school'.",
          realWorld:
            "An auto-rickshaw driver in Delhi who takes a passenger around a roundabout and back to the same stop has driven a real distance and charges for it, even though the displacement is zero. That's why meters measure distance, not displacement. A Metro train moving at steady speed between stations is close to uniform motion, while a bus in traffic is non-uniform.",
          mnemonic:
            "\"Distance is the Diary of the whole trip; Displacement is the Direct shortcut with Direction.\" For uniform motion: \"Same time, same distance — Uniform is Unchanging.\"",
        },
      },
    ),
    t(
      "Measuring the Rate of Motion",
      ["Speed", "Average Speed", "Velocity", "Acceleration"],
      {
        intro:
          "Two objects may cover the same distance, but one may do it faster. Speed tells us how fast an object moves, velocity adds direction, and acceleration tells us how quickly velocity changes.",
        sections: [
          {
            heading: "Speed and Average Speed",
            body: "**Speed** is the distance travelled by an object in unit time, and its SI unit is metre per second (m/s). Since most objects move non-uniformly, we usually talk about **average speed** = total distance ÷ total time. For example, a car that travels 100 km in 2 hours has an average speed of 50 km/h, even if it sometimes went faster or slower.",
          },
          {
            heading: "Velocity",
            body: "**Velocity** is speed in a definite direction. Velocity can change by changing speed, direction or both. When velocity changes at a uniform rate, the average velocity is the arithmetic mean of the initial velocity u and final velocity v, i.e. (u + v)/2. Velocity has the same SI unit as speed, m/s.",
          },
          {
            heading: "Acceleration",
            body: "**Acceleration** is the change in velocity per unit time: a = (v − u)/t. Its SI unit is m/s². If velocity increases, acceleration is positive (in the direction of velocity); if velocity decreases, acceleration is negative and is sometimes called retardation. If velocity changes by equal amounts in equal time intervals, the motion is **uniformly accelerated**, as in a freely falling body.",
          },
        ],
        definitions: [
          { term: "Speed", meaning: "Distance travelled per unit time." },
          { term: "Average speed", meaning: "Total distance travelled divided by total time taken." },
          { term: "Velocity", meaning: "Speed of an object moving in a definite direction." },
          { term: "Acceleration", meaning: "Rate of change of velocity with time." },
          { term: "Uniform acceleration", meaning: "Acceleration in which velocity changes by equal amounts in equal intervals of time." },
        ],
        formulas: [
          { label: "Average speed", expression: "average speed = total distance / total time" },
          { label: "Average velocity (uniformly changing)", expression: "v(avg) = (u + v) / 2" },
          { label: "Acceleration", expression: "a = (v − u) / t", note: "SI unit: m/s²" },
          { label: "Unit conversion", expression: "1 km/h = 5/18 m/s" },
        ],
        keyPoints: [
          "SI unit of speed and velocity is m/s; of acceleration is m/s².",
          "Speed has only magnitude; velocity has magnitude and direction.",
          "Velocity changes if speed, direction or both change.",
          "Negative acceleration means the object is slowing down.",
          "Free fall is an example of uniformly accelerated motion.",
        ],
        explainers: {
          eli10:
            "Speed tells you how quickly you are going, like 'I cycle at 10 km every hour'. Velocity is speed plus a direction, like '10 km per hour towards school'. Acceleration is how quickly your speed or direction changes — pedalling harder downhill means you accelerate, and pressing the brakes means you decelerate.",
          realWorld:
            "The speedometer of a scooter shows instantaneous speed, while the trip from Pune to Mumbai averaging 60 km/h is average speed. When a train leaves the station, it accelerates; as it approaches the next station, it slows down, which is negative acceleration. Traffic signs saying '40 km/h' are speed limits, since the direction is set by the road.",
          mnemonic:
            "\"Speed is Simple, Velocity has a Vector (direction).\" For acceleration: \"a = (v − u)/t — Very Useful Things\" (v minus u over t). Units: \"Speed per second → per second squared\".",
        },
      },
    ),
    t(
      "Graphical Representation of Motion",
      ["Distance–Time Graphs", "Velocity–Time Graphs"],
      {
        intro:
          "Graphs give a quick picture of how an object moves. A distance–time graph shows how position changes, and a velocity–time graph shows how velocity changes. The shape and slope of the line reveal the type of motion.",
        sections: [
          {
            heading: "Distance–Time Graphs",
            body: "Time is taken on the x-axis and distance on the y-axis. For uniform speed, the graph is a straight line, and its slope (distance ÷ time) gives the speed. A steeper line means a greater speed. For non-uniform motion, the graph is a curve, since the object covers unequal distances in equal time intervals.",
          },
          {
            heading: "Velocity–Time Graphs",
            body: "Time is on the x-axis and velocity on the y-axis. For uniform velocity, the graph is a straight line parallel to the time axis. For uniformly accelerated motion, it is a straight sloping line, and its slope gives the acceleration. The **area under a velocity–time graph** equals the displacement (distance, for motion in one direction without turning back).",
          },
        ],
        definitions: [
          { term: "Distance–time graph", meaning: "A graph of distance travelled against time." },
          { term: "Velocity–time graph", meaning: "A graph of velocity against time." },
          { term: "Slope", meaning: "The steepness of a line: change along the y-axis divided by the change along the x-axis." },
        ],
        formulas: [
          { label: "Slope of distance–time graph", expression: "speed = Δdistance / Δtime" },
          { label: "Slope of velocity–time graph", expression: "acceleration = Δvelocity / Δtime" },
          { label: "Area under velocity–time graph", expression: "displacement = area between the graph and time axis" },
        ],
        keyPoints: [
          "A straight-line distance–time graph shows uniform speed.",
          "A curved distance–time graph shows non-uniform speed.",
          "A horizontal velocity–time graph shows uniform velocity (zero acceleration).",
          "A straight sloping velocity–time graph shows uniform acceleration.",
          "The area under a velocity–time graph gives displacement.",
        ],
        explainers: {
          eli10:
            "A graph is like a comic strip of a journey. In a distance–time graph, a straight slanted line means you're moving at a steady pace, and a steeper line means you're going faster. In a velocity–time graph, a flat line means your speed isn't changing, while a line going up means you're speeding up.",
          realWorld:
            "Apps like Google Maps or a fitness tracker on your parent's phone draw graphs of your walk, showing distance covered over time. During a morning jog around the colony, the flat parts show when you stopped for water. Railway engineers use velocity–time graphs to plan how a train speeds up and slows down between stations.",
          mnemonic:
            "\"Slope of d–t is Speed, Slope of v–t is Acceleration, Area under v–t is Displacement\" — remember \"SSA-AD\": \"Slope Speed, Slope Acceleration, Area Displacement.\"",
        },
      },
    ),
    t(
      "Equations of Motion and Uniform Circular Motion",
      ["Equations of Motion by Graphical Method", "Uniform Circular Motion"],
      {
        intro:
          "For an object moving in a straight line with uniform acceleration, three equations connect velocity, time, displacement and acceleration. These can be derived from the velocity–time graph. Motion along a circle at constant speed is a special kind of accelerated motion.",
        sections: [
          {
            heading: "The Three Equations of Motion",
            body: "For uniform acceleration a, initial velocity u, final velocity v, time t and displacement s: the first equation v = u + at comes from the slope of the v–t graph. The second, s = ut + ½at², comes from the area under the v–t graph (a rectangle plus a triangle). The third, 2as = v² − u², links velocity and position without time. Example: a car starting from rest (u = 0) with a = 2 m/s² reaches v = 20 m/s in t = 10 s.",
          },
          {
            heading: "Uniform Circular Motion",
            body: "When an object moves along a circular path at constant speed, its direction changes at every point. Since velocity includes direction, the velocity keeps changing, so the motion is **accelerated** even though the speed is constant. An athlete running at constant speed on a circular track, the moon around the earth and a stone whirled on a thread are examples. If the object takes time t to go around a circle of radius r once, its speed is v = 2πr/t.",
          },
        ],
        definitions: [
          { term: "Equations of motion", meaning: "Relations between u, v, a, t and s for an object moving with uniform acceleration in a straight line." },
          { term: "Initial velocity (u)", meaning: "The velocity of an object at the start of the time interval." },
          { term: "Final velocity (v)", meaning: "The velocity of an object at the end of the time interval." },
          { term: "Uniform circular motion", meaning: "Motion of an object along a circular path with constant speed." },
        ],
        formulas: [
          { label: "First equation (velocity–time)", expression: "v = u + at" },
          { label: "Second equation (position–time)", expression: "s = ut + ½at²" },
          { label: "Third equation (position–velocity)", expression: "2as = v² − u²" },
          { label: "Speed in uniform circular motion", expression: "v = 2πr / t" },
        ],
        keyPoints: [
          "The equations of motion apply only to uniform acceleration in a straight line.",
          "v = u + at is the velocity–time relation.",
          "s = ut + ½at² is the position–time relation.",
          "2as = v² − u² is the position–velocity relation.",
          "Uniform circular motion is accelerated because the direction of velocity changes continuously.",
        ],
        explainers: {
          eli10:
            "The equations of motion are like a recipe: if you know how fast something starts, how quickly it speeds up and for how long, you can work out how fast it ends up and how far it goes. Going around in a circle is sneaky — even if your speed stays the same, you keep turning, and turning counts as changing velocity.",
          realWorld:
            "When a car driver on a highway presses the accelerator, the equation v = u + at tells how fast the car will be going after a few seconds. Traffic police use the third equation to estimate a vehicle's speed from its skid marks. A giant wheel at a Diwali mela spins at steady speed, yet the riders feel a pull because they are continuously changing direction.",
          mnemonic:
            "\"Very Useful Advice Today\" → v = u + at. \"Sita Uses Tea And Half Tea-squared\" → s = ut + ½at². \"Two Aunties Sing Very Very Unusual Umm\" → 2as = v² − u². For circles: \"Once around = 2πr.\"",
        },
      },
    ),
  ],
  [
    q("mo-q1", "A car starts from rest and reaches 20 m/s in 5 s. What is its acceleration?", ["4 m/s²", "100 m/s²", "0.25 m/s²", "25 m/s²"], 0, "a = (v − u)/t = (20 − 0)/5 = 4 m/s²."),
    q("mo-q2", "An athlete completes one full round of a circular track and stops at the starting point. What is the displacement?", ["Equal to the circumference", "Twice the radius", "Zero", "Equal to the radius"], 2, "Displacement is the shortest distance between initial and final positions; since they coincide, it is zero."),
    q("mo-q3", "The slope of a distance–time graph gives:", ["Acceleration", "Speed", "Displacement", "Time"], 1, "Slope = distance ÷ time, which is speed."),
    q("mo-q4", "The area under a velocity–time graph gives:", ["Acceleration", "Speed", "Force", "Displacement"], 3, "Velocity × time has the units of length, and the area under the v–t graph equals displacement."),
    q("mo-q5", "Why is uniform circular motion called accelerated motion?", ["Its speed keeps changing", "The direction of its velocity changes continuously", "The distance covered is zero", "Its mass keeps changing"], 1, "Velocity includes direction; on a circle the direction changes at every point, so the velocity changes."),
    q("mo-q6", "A train moving at 10 m/s accelerates uniformly at 2 m/s² for 5 s. How far does it travel in this time?", ["50 m", "100 m", "75 m", "25 m"], 2, "s = ut + ½at² = 10 × 5 + ½ × 2 × 25 = 50 + 25 = 75 m."),
  ],
);

const science = {
  id: "science",
  name: "Science",
  icon: "flask" as const,
  color: "emerald" as const,
  textbooks: [
    {
      id: "science-class-9",
      title: "Science — Textbook for Class IX",
      chapters: [
        ch(1, "matter-in-our-surroundings", "Matter in Our Surroundings", "Describes the particle nature of matter, the characteristics of particles, the three states of matter and how matter changes state.", [
          t("Physical Nature of Matter", ["Matter Is Made Up of Particles", "How Small Are These Particles?"]),
          t("Characteristics of Particles of Matter", ["Particles Have Space between Them", "Particles Are Continuously Moving", "Particles Attract Each Other"]),
          t("States of Matter", ["The Solid State", "The Liquid State", "The Gaseous State"]),
          t("Can Matter Change Its State?", ["Effect of Change of Temperature", "Effect of Change of Pressure"]),
          t("Evaporation", ["Factors Affecting Evaporation", "How Does Evaporation Cause Cooling?"]),
        ]),
        ch(2, "is-matter-around-us-pure", "Is Matter Around Us Pure?", "Distinguishes pure substances from mixtures, and explains solutions, suspensions, colloids, and physical and chemical changes.", [
          t("What Is a Mixture?", ["Pure Substances and Mixtures", "Types of Mixtures"]),
          t("What Is a Solution?", ["Properties of a Solution", "Concentration of a Solution"]),
          t("Suspensions and Colloidal Solutions", ["What Is a Suspension?", "What Is a Colloidal Solution?", "Tyndall Effect"]),
          t("Physical and Chemical Changes", ["Physical Changes", "Chemical Changes"]),
          t("What Are the Types of Pure Substances?", ["Elements", "Compounds"]),
        ]),
        ch(3, "atoms-and-molecules", "Atoms and Molecules", "Introduces the laws of chemical combination, Dalton's atomic theory, atoms, molecules, ions and writing chemical formulae.", [
          t("Laws of Chemical Combination", ["Law of Conservation of Mass", "Law of Constant Proportions"]),
          t("What Is an Atom?", ["Dalton's Atomic Theory", "Symbols of Atoms of Different Elements", "Atomic Mass"]),
          t("What Is a Molecule?", ["Molecules of Elements", "Molecules of Compounds", "What Is an Ion?"]),
          t("Writing Chemical Formulae", ["Valency", "Formulae of Simple Compounds", "Molecular Mass"]),
        ]),
        ch(4, "structure-of-the-atom", "Structure of the Atom", "Traces the discovery of subatomic particles and the atomic models of Thomson, Rutherford and Bohr, along with electron distribution and valency.", [
          t("Charged Particles in Matter", ["Discovery of Electrons", "Discovery of Protons"]),
          t("The Structure of an Atom", ["Thomson's Model of an Atom", "Rutherford's Model of an Atom", "Bohr's Model of an Atom", "Neutrons"]),
          t("How Are Electrons Distributed in Different Orbits?", ["Bohr–Bury Rules", "Electronic Configuration of the First 18 Elements"]),
          t("Valency, Atomic Number and Mass Number", ["Valency", "Atomic Number", "Mass Number"]),
        ]),
        ch(5, "the-fundamental-unit-of-life", "The Fundamental Unit of Life", "Explains the cell as the basic unit of life, its structural components, organelles and cell division.", [
          t("What Are Living Organisms Made Up Of?", ["Discovery of the Cell", "Unicellular and Multicellular Organisms"]),
          t("What Is a Cell Made Up Of?", ["Plasma Membrane", "Cell Wall", "Nucleus", "Cytoplasm"]),
          t("Cell Organelles", ["Endoplasmic Reticulum and Golgi Apparatus", "Lysosomes", "Mitochondria and Plastids", "Vacuoles"]),
          t("Cell Division", ["Mitosis", "Meiosis"]),
        ]),
        ch(6, "tissues", "Tissues", "Describes the different types of plant and animal tissues and their functions.", [
          t("Are Plants and Animals Made of the Same Types of Tissues?", ["Differences in Organisation", "Growth Patterns"]),
          t("Plant Tissues", ["Meristematic Tissue", "Simple Permanent Tissue", "Complex Permanent Tissue"]),
          t("Animal Tissues", ["Epithelial Tissue", "Connective Tissue", "Muscular Tissue", "Nervous Tissue"]),
        ]),
        motion,
        ch(8, "force-and-laws-of-motion", "Force and Laws of Motion", "Explains balanced and unbalanced forces and Newton's three laws of motion, including inertia and momentum.", [
          t("Balanced and Unbalanced Forces", ["Effects of Force", "Balanced Forces", "Unbalanced Forces"]),
          t("First Law of Motion", ["Galileo's Observations", "Inertia", "Inertia and Mass"]),
          t("Second Law of Motion", ["Momentum", "F = ma", "Unit of Force"]),
          t("Third Law of Motion", ["Action and Reaction", "Examples of the Third Law"]),
        ]),
        ch(9, "gravitation", "Gravitation", "Covers the universal law of gravitation, free fall, mass and weight, thrust and pressure, buoyancy and Archimedes' principle.", [
          t("Gravitation", ["Universal Law of Gravitation", "Importance of the Universal Law of Gravitation"]),
          t("Free Fall", ["Acceleration Due to Gravity", "Motion of Objects under the Influence of Gravity"]),
          t("Mass and Weight", ["Mass", "Weight", "Weight of an Object on the Moon"]),
          t("Thrust and Pressure", ["Pressure in Fluids", "Buoyancy", "Why Objects Float or Sink"]),
          t("Archimedes' Principle", ["Statement of the Principle", "Applications"]),
        ]),
        ch(10, "work-and-energy", "Work and Energy", "Defines work in science, forms of energy including kinetic and potential energy, conservation of energy and power.", [
          t("Work", ["Scientific Conception of Work", "Work Done by a Constant Force"]),
          t("Energy", ["Forms of Energy", "Kinetic Energy", "Potential Energy", "Law of Conservation of Energy"]),
          t("Rate of Doing Work", ["Power", "Commercial Unit of Energy"]),
        ]),
        ch(11, "sound", "Sound", "Explains production and propagation of sound, its characteristics, reflection, the range of hearing and uses of ultrasound.", [
          t("Production of Sound", ["Vibrating Objects", "Different Ways of Producing Sound"]),
          t("Propagation of Sound", ["Sound Needs a Medium", "Sound Waves Are Longitudinal", "Characteristics of a Sound Wave"]),
          t("Speed of Sound in Different Media", ["Speed in Solids, Liquids and Gases", "Effect of Temperature"]),
          t("Reflection of Sound", ["Echo", "Reverberation", "Uses of Multiple Reflection of Sound"]),
          t("Range of Hearing and Applications of Ultrasound", ["Range of Hearing", "Applications of Ultrasound"]),
        ]),
        ch(12, "improvement-in-food-resources", "Improvement in Food Resources", "Discusses ways of improving crop yields and managing animal husbandry to increase food production.", [
          t("Crop Variety Improvement", ["Hybridisation", "Desirable Agronomic Traits"]),
          t("Crop Production Management", ["Nutrient Management", "Irrigation", "Cropping Patterns"]),
          t("Crop Protection Management", ["Weeds, Insect Pests and Diseases", "Storage of Grains"]),
          t("Animal Husbandry", ["Cattle Farming", "Poultry Farming", "Fish Production", "Bee-keeping"]),
        ]),
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Social Science                                                      */
/* ------------------------------------------------------------------ */

const frenchRevolution = ch(
  1,
  "the-french-revolution",
  "The French Revolution",
  "Traces how a society of privileges and a financial crisis in France led to the Revolution of 1789, the end of monarchy, the Reign of Terror and lasting ideas of liberty, equality and rights.",
  [
    t(
      "French Society During the Late Eighteenth Century",
      ["The Three Estates", "The Struggle to Survive", "A Growing Middle Class Envisages an End to Privileges"],
      {
        intro:
          "In the late eighteenth century, France was ruled by an absolute monarch and its society was divided into three unequal groups called estates. The treasury was empty, taxes fell on the common people, and bread was often scarce. New ideas from philosophers encouraged the growing middle class to question privileges based on birth.",
        sections: [
          {
            heading: "An Empty Treasury and the Three Estates",
            body: "Louis XVI of the Bourbon family became king of France in 1774, at the age of 20, and married the Austrian princess Marie Antoinette. Long years of war, including helping the thirteen American colonies win independence from Britain, had drained France's resources, and the debt had grown to more than 2 billion livres. French society was divided into three estates: the clergy (First Estate), the nobility (Second Estate), and everyone else — merchants, lawyers, peasants, artisans and servants — in the Third Estate. Only the Third Estate paid taxes, including the **taille** (a direct tax to the state) and the **tithe** (a tax to the church), while the first two estates enjoyed privileges by birth.",
          },
          {
            heading: "The Struggle to Survive",
            body: "The population of France rose from about 23 million in 1715 to 28 million in 1789. Food grain production could not keep pace, so the price of bread — the staple diet of the majority — rose rapidly. Most workers were paid fixed wages that did not rise with prices, so the gap between rich and poor widened. Droughts or hail could reduce the harvest and lead to a **subsistence crisis**, when people could not get even their basic means of livelihood.",
          },
          {
            heading: "A Growing Middle Class",
            body: "In the eighteenth century, a new social group — the middle class — grew wealthy through trade and manufacturing; it also included lawyers and administrative officials. They were educated and believed that no group should be privileged by birth; a person's position should depend on merit. Philosophers shaped these ideas: John Locke, in 'Two Treatises of Government', argued against the divine and absolute right of the monarch; Jean-Jacques Rousseau proposed government based on a 'social contract' between people and their representatives; and Montesquieu, in 'The Spirit of the Laws', proposed dividing power among the legislative, executive and judiciary. These ideas were discussed in salons and coffee-houses and spread through books and newspapers.",
          },
        ],
        definitions: [
          { term: "Old Regime", meaning: "The society and institutions of France before 1789." },
          { term: "Estate", meaning: "One of the three social orders of French society: clergy, nobility and the Third Estate." },
          { term: "Taille", meaning: "A direct tax paid to the state by the Third Estate." },
          { term: "Tithe", meaning: "A tax levied by the church, amounting to one-tenth of the agricultural produce." },
          { term: "Subsistence crisis", meaning: "An extreme situation in which the basic means of livelihood, such as food, are endangered." },
        ],
        dates: [
          { date: "1715", event: "France's population is about 23 million." },
          { date: "1762", event: "Rousseau publishes 'The Social Contract'." },
          { date: "1774", event: "Louis XVI becomes king of France; the treasury is nearly empty." },
          { date: "1789", event: "France's population reaches about 28 million amid rising bread prices." },
        ],
        keyPoints: [
          "France had an absolute monarchy under Louis XVI from 1774.",
          "Wars, especially the American War of Independence, left France deeply in debt.",
          "Only the Third Estate paid taxes; the clergy and nobility were exempt by birth.",
          "Rising population and bread prices caused frequent subsistence crises.",
          "The middle class, inspired by Locke, Rousseau and Montesquieu, rejected privilege by birth.",
        ],
        explainers: {
          eli10:
            "Imagine a school where only one group of students does all the homework and pays all the fees, while two small groups get free passes just because of the families they were born into. That's what France was like before 1789. On top of that, the king had spent all the money on wars, and bread was becoming too costly for ordinary people. Clever writers started saying, 'Why should birth decide who is special?'",
          realWorld:
            "Think of how onion or tomato prices sometimes shoot up in India and become a big talking point in every household and in elections. In 1780s France, the price of bread did the same, but wages stayed fixed, so poor families simply could not afford to eat. Add unfair taxes that only ordinary people paid, and you can see why anger built up — just as price rises and unfair rules spark protests today.",
          mnemonic:
            "Three Estates: \"Clergy Prays, Nobles Play, Third Pays.\" Three thinkers: \"LRM — Locke Rejects Monarchy's divine right, Rousseau's Social Contract, Montesquieu splits power in three.\"",
        },
      },
    ),
    t(
      "The Outbreak of the Revolution",
      ["The Estates General of 1789", "The Tennis Court Oath and the Storming of the Bastille", "France Becomes a Constitutional Monarchy"],
      {
        intro:
          "To raise new taxes, Louis XVI called a meeting of the Estates General in 1789. The Third Estate's demand for fair voting turned this meeting into a revolution. Within months, the Bastille had fallen and France was on its way to becoming a constitutional monarchy.",
        sections: [
          {
            heading: "The Estates General and the Tennis Court Oath",
            body: "On 5 May 1789, Louis XVI called an assembly of the Estates General at Versailles to pass proposals for new taxes; it had last met in 1614. By tradition, each estate had one vote, so the first two estates could always outvote the Third. The Third Estate demanded that each member have one vote, and when the king rejected this, its members walked out. On 20 June 1789, they assembled in an indoor tennis court at Versailles, declared themselves a **National Assembly**, and swore not to disperse until they had drafted a constitution limiting the monarch's powers. They were led by Mirabeau, a noble, and Abbé Sieyès, a priest who wrote the pamphlet 'What is the Third Estate?'.",
          },
          {
            heading: "The Storming of the Bastille",
            body: "Meanwhile, a severe winter had caused a bad harvest, and the price of bread rose sharply. Rumours spread that the king was about to order troops to fire on the citizens. On 14 July 1789, an angry crowd stormed the **Bastille**, a fortress-prison that was hated as a symbol of the king's despotic power. In the countryside, rumours of lords hiring bands of brigands led to the 'Great Fear', when peasants attacked chateaux and burnt records of manorial dues. Faced with this revolt, Louis XVI recognised the National Assembly, and on the night of 4 August 1789 the Assembly abolished the feudal system of obligations and taxes; tithes were abolished and church lands were confiscated.",
          },
          {
            heading: "The Constitution of 1791",
            body: "The National Assembly completed a constitution in 1791 that made France a **constitutional monarchy**. The powers of the monarch were separated among the legislature, executive and judiciary, and laws were made by an indirectly elected National Assembly. However, only men above 25 who paid taxes equal to at least 3 days of a labourer's wage were 'active citizens' with the right to vote; other men and all women were 'passive citizens'. The Constitution began with the **Declaration of the Rights of Man and Citizen**, which declared rights such as life, freedom of speech and opinion, and equality before law to be natural and inalienable.",
          },
        ],
        definitions: [
          { term: "Estates General", meaning: "A political body in France to which the three estates sent representatives; only the king could call it." },
          { term: "National Assembly", meaning: "The body formed by the Third Estate representatives on 20 June 1789 to draft a constitution." },
          { term: "Bastille", meaning: "A fortress-prison in Paris, hated as a symbol of the king's despotic power." },
          { term: "Constitutional monarchy", meaning: "A system in which the monarch's powers are limited by a constitution." },
          { term: "Active and passive citizens", meaning: "Under the 1791 Constitution, taxpaying men above 25 who could vote were active; the rest were passive." },
        ],
        dates: [
          { date: "5 May 1789", event: "Louis XVI convenes the Estates General at Versailles." },
          { date: "20 June 1789", event: "Tennis Court Oath: the Third Estate declares itself the National Assembly." },
          { date: "14 July 1789", event: "An agitated crowd storms and destroys the Bastille." },
          { date: "4 August 1789", event: "The Assembly abolishes the feudal system of obligations and taxes." },
          { date: "26 August 1789", event: "The Declaration of the Rights of Man and Citizen is adopted." },
          { date: "1791", event: "The Constitution makes France a constitutional monarchy." },
        ],
        keyPoints: [
          "The Estates General met on 5 May 1789 for the first time since 1614.",
          "The Third Estate demanded one vote per member instead of one vote per estate.",
          "The Tennis Court Oath (20 June 1789) created the National Assembly.",
          "The storming of the Bastille on 14 July 1789 marks the start of the Revolution.",
          "The 1791 Constitution created a constitutional monarchy but limited the vote to active citizens.",
          "The Declaration of the Rights of Man and Citizen declared rights as natural and inalienable.",
        ],
        explainers: {
          eli10:
            "The king called a big meeting only to ask for more money. The common people's group said, 'We're the biggest group — each person should get a vote!' When the king refused, they met in a sports hall and promised not to leave until they wrote new rules for France. Meanwhile, hungry, angry Parisians broke into the Bastille prison, and suddenly the king had to share his power.",
          realWorld:
            "Think of a housing society meeting where three groups vote, and two small groups always team up to outvote the largest one. Naturally, the majority would demand 'one flat, one vote'. That's exactly what the Third Estate wanted. India's Constitution, written by the Constituent Assembly, also begins with a statement of ideals and guarantees Fundamental Rights — an idea that owes a lot to the Declaration of 1789.",
          mnemonic:
            "\"May Meeting, June Oath, July Jail-break\": 5 May — Estates General, 20 June — Tennis Court Oath, 14 July — Bastille. Then \"August ends feudalism, '91 gives a Constitution.\"",
        },
      },
    ),
    t(
      "France Abolishes Monarchy and Becomes a Republic",
      ["The Jacobins and the Convention", "The Reign of Terror", "A Directory Rules France"],
      {
        intro:
          "The constitutional monarchy did not last. Wars abroad and hardship at home led the radical Jacobins to overthrow the king and declare France a republic in 1792. What followed was the violent Reign of Terror and then an unstable Directory, which opened the way for Napoleon.",
        sections: [
          {
            heading: "The Jacobins and the Convention",
            body: "In April 1792, the National Assembly declared war against Prussia and Austria, and thousands of volunteers joined the army. Many felt the revolution had to go further, since the 1791 Constitution gave rights only to the rich. Political clubs became rallying points, the most successful being the **Jacobin club**, named after the former convent of St Jacob in Paris and led by **Maximilian Robespierre**; many members were small shopkeepers and artisans, and some wore long striped trousers and came to be called **sans-culottes** ('those without knee breeches'). On 10 August 1792, the Jacobins led an angry crowd to storm the Palace of the Tuileries and held the king hostage. Elections were then held in which all men of 21 and above could vote, and the newly elected assembly, called the **Convention**, abolished the monarchy on 21 September 1792 and declared France a republic.",
          },
          {
            heading: "The Reign of Terror",
            body: "Louis XVI was sentenced to death for treason and publicly executed on 21 January 1793; Queen Marie Antoinette met the same fate soon after. The period from 1793 to 1794 is called the **Reign of Terror**: Robespierre followed a policy of severe control and punishment, and anyone he saw as an enemy of the republic was arrested, tried and guillotined. His government issued laws placing a maximum ceiling on wages and prices, rationed meat and bread, and forced peasants to sell grain at fixed prices; everyone had to eat the 'equality bread' made of wholewheat. Forms of address changed: instead of Monsieur and Madame, all French people were 'Citoyen' and 'Citoyenne' (citizen). Finally, in July 1794, Robespierre himself was convicted and guillotined.",
          },
          {
            heading: "A Directory Rules France",
            body: "The fall of the Jacobins allowed the wealthier middle classes to seize power. A new constitution denied the vote to non-propertied sections of society and set up two elected legislative councils. These appointed a **Directory**, an executive made up of five members, as a safeguard against a one-man executive like the Jacobins had. But the Directors often clashed with the councils, and the political instability paved the way for the rise of a military dictator, Napoleon Bonaparte.",
          },
        ],
        definitions: [
          { term: "Jacobins", meaning: "Members of the most successful political club of the Revolution, led by Robespierre." },
          { term: "Sans-culottes", meaning: "Literally 'those without knee breeches'; the Jacobins and poorer supporters who wore long striped trousers." },
          { term: "Convention", meaning: "The assembly elected in 1792 that abolished the monarchy and declared France a republic." },
          { term: "Republic", meaning: "A form of government where people elect the government, including the head of government, with no hereditary monarchy." },
          { term: "Guillotine", meaning: "A device with two poles and a blade used to behead people, named after Dr Guillotin." },
        ],
        dates: [
          { date: "April 1792", event: "The National Assembly declares war against Prussia and Austria." },
          { date: "10 August 1792", event: "Jacobins storm the Palace of the Tuileries and hold the king hostage." },
          { date: "21 September 1792", event: "The Convention abolishes the monarchy; France becomes a republic." },
          { date: "21 January 1793", event: "Louis XVI is executed at the Place de la Concorde." },
          { date: "1793–1794", event: "The Reign of Terror under Robespierre." },
          { date: "July 1794", event: "Robespierre is convicted and guillotined." },
          { date: "1795", event: "A new constitution sets up the Directory." },
        ],
        keyPoints: [
          "The Jacobin club, led by Robespierre, pushed the revolution in a radical direction.",
          "The Convention abolished the monarchy on 21 September 1792 and declared France a republic.",
          "Louis XVI was executed for treason on 21 January 1793.",
          "The Reign of Terror (1793–94) brought severe control, rationing and mass executions.",
          "The Directory, a five-member executive, ruled after 1795 but was unstable.",
          "Instability under the Directory led to the rise of Napoleon Bonaparte.",
        ],
        explainers: {
          eli10:
            "After the king agreed to share power, many people still felt the new rules helped only the rich. A group called the Jacobins took over, removed the king and made France a country with no king — a republic. Their leader, Robespierre, became so strict and scary that this time is called the Reign of Terror. In the end, he too was punished, and a team of five leaders took charge, but they kept quarrelling.",
          realWorld:
            "In India, we elect our government and our President is not a king who inherits the post — that's a republic, which is why we celebrate 26 January as Republic Day. France became a republic in 1792, but it learnt the hard way that power without checks can turn into terror. That's one reason modern democracies, like ours, separate powers and protect rights through courts.",
          mnemonic:
            "\"J-C-T-D\" → Jacobins → Convention (Republic, 1792) → Terror (1793–94) → Directory (five Directors). Remember \"Robespierre's Rule = Rations, Rules and Razor (guillotine)\".",
        },
      },
    ),
    t(
      "Women, Slavery and Everyday Life",
      ["Did Women Have a Revolution?", "The Abolition of Slavery", "The Revolution and Everyday Life", "Conclusion: The Legacy of the Revolution"],
      {
        intro:
          "The Revolution changed more than who ruled France. Women organised to demand equal rights, the question of slavery in French colonies was debated, and new freedoms transformed everyday life. Its ideas of liberty and equality spread far beyond France.",
        sections: [
          {
            heading: "Did Women Have a Revolution?",
            body: "Women were active participants from the start, hoping the revolution would improve their lives. Most women of the Third Estate worked as seamstresses, laundresses, sold flowers and vegetables at the market or worked as domestic servants. They started their own political clubs and newspapers — about sixty women's clubs came up, the best known being the **Society of Revolutionary and Republican Women** — and demanded the right to vote, to be elected and to hold office. The revolutionary government made schooling compulsory for all girls, made marriage a contract entered into freely, legalised divorce and let women train for jobs and run small businesses. But in 1793 the Jacobin government closed women's clubs; the activist Olympe de Gouges was executed, and French women finally won the right to vote only in 1946.",
          },
          {
            heading: "The Abolition of Slavery",
            body: "In the eighteenth century, France's Caribbean colonies — Martinique, Guadeloupe and San Domingo — supplied tobacco, indigo, sugar and coffee, grown by enslaved people brought from Africa through the triangular slave trade. Port cities like Bordeaux and Nantes grew rich from this trade. The National Assembly did not pass laws against slavery, fearing opposition from businessmen, but in 1794 the Convention freed all slaves in the French overseas possessions. This lasted only ten years, as Napoleon reintroduced slavery; it was finally abolished in French colonies in 1848.",
          },
          {
            heading: "The Revolution and Everyday Life",
            body: "In 1789, soon after the storming of the Bastille, censorship was abolished, and the Declaration of Rights proclaimed freedom of speech and expression as natural rights. Newspapers, pamphlets, books and printed pictures spread quickly, and plays, songs and festive processions carried ideas of liberty and justice to ordinary people, including those who could not read. Symbols like the broken chain, the red Phrygian cap and the colours blue-white-red became popular. In 1804, Napoleon Bonaparte crowned himself Emperor of France; he was finally defeated at Waterloo in 1815. The ideas of liberty and democratic rights became the most important legacy of the Revolution, inspiring movements across Europe and in colonies, and influencing thinkers like Tipu Sultan and Rammohan Roy in India.",
          },
        ],
        definitions: [
          { term: "Society of Revolutionary and Republican Women", meaning: "The most famous women's political club in revolutionary France, demanding equal political rights." },
          { term: "Triangular slave trade", meaning: "Trade between Europe, Africa and the Americas in which enslaved Africans were shipped to work on plantations." },
          { term: "Abolition", meaning: "The official ending of a practice or institution, such as slavery." },
          { term: "Censorship", meaning: "Official control over what can be printed, spoken or performed." },
        ],
        dates: [
          { date: "1789", event: "Censorship is abolished soon after the storming of the Bastille." },
          { date: "1793", event: "The Jacobin government bans women's clubs; Olympe de Gouges is executed." },
          { date: "1794", event: "The Convention frees all slaves in French overseas possessions." },
          { date: "1804", event: "Napoleon Bonaparte crowns himself Emperor of France." },
          { date: "1815", event: "Napoleon is defeated at Waterloo." },
          { date: "1848", event: "Slavery is finally abolished in the French colonies." },
          { date: "1946", event: "Women in France win the right to vote." },
        ],
        keyPoints: [
          "Women fought for political rights through their own clubs and newspapers.",
          "Reforms gave girls compulsory schooling and legalised divorce, but women remained passive citizens.",
          "Women's clubs were banned in 1793; French women got the vote only in 1946.",
          "The Convention freed slaves in 1794, Napoleon reintroduced slavery, and it was finally abolished in 1848.",
          "Abolition of censorship in 1789 led to a flood of newspapers, pamphlets and songs.",
          "The Revolution's lasting legacy is the ideas of liberty and democratic rights.",
        ],
        explainers: {
          eli10:
            "The Revolution said 'everyone is equal', but women and enslaved people had to keep fighting to be included in that 'everyone'. Women formed clubs and asked for the vote, but they had to wait more than 150 years to get it. Slavery in French colonies was ended, brought back and ended for good only in 1848. Still, the Revolution let people speak and print their ideas freely, and its big idea — freedom for all — spread around the world.",
          realWorld:
            "Indian women got the right to vote from the very first general election in 1951–52, but French women, whose revolution began in 1789, had to wait until 1946. Our Constitution bans forced labour and untouchability, carrying forward the fight for dignity that began with debates like the abolition of slavery. Even Raja Rammohan Roy, the Bengal reformer, admired the ideas of the French Revolution.",
          mnemonic:
            "Slavery: \"94 Freed, 1802 Returned (Napoleon), 48 Ended.\" Women's vote: \"'46 — women fix it\" (1946). Napoleon: \"Crowned in '04, Crushed in '15 (Waterloo).\"",
        },
      },
    ),
  ],
  [
    q("fr-q1", "When was the Bastille stormed?", ["14 July 1789", "5 May 1789", "21 January 1793", "20 June 1789"], 0, "An angry crowd stormed the Bastille on 14 July 1789, marking the start of the Revolution."),
    q("fr-q2", "Who wrote 'The Social Contract'?", ["John Locke", "Montesquieu", "Jean-Jacques Rousseau", "Abbé Sieyès"], 2, "Rousseau proposed a government based on a social contract between people and their representatives."),
    q("fr-q3", "What was the direct tax paid to the state by the Third Estate called?", ["Tithe", "Taille", "Livre", "Maximum"], 1, "The taille was a direct tax to the state; the tithe was paid to the church, and the livre was a unit of currency."),
    q("fr-q4", "What is the period from 1793 to 1794 in France called?", ["The Great Fear", "The Directory", "The Old Regime", "The Reign of Terror"], 3, "Under Robespierre, 1793–94 saw severe control and mass executions, known as the Reign of Terror."),
    q("fr-q5", "In which year did women in France win the right to vote?", ["1791", "1848", "1946", "1804"], 2, "Despite their struggle during the Revolution, French women won the vote only in 1946."),
    q("fr-q6", "When was slavery finally abolished in the French colonies?", ["1794", "1848", "1804", "1815"], 1, "The Convention freed slaves in 1794, Napoleon reintroduced slavery, and it was finally abolished in 1848."),
  ],
);

const socialScience = {
  id: "social-science",
  name: "Social Science",
  icon: "globe" as const,
  color: "amber" as const,
  textbooks: [
    {
      id: "india-and-the-contemporary-world-i",
      title: "India and the Contemporary World I — History Textbook for Class IX",
      chapters: [
        frenchRevolution,
        ch(2, "socialism-in-europe-and-the-russian-revolution", "Socialism in Europe and the Russian Revolution", "Explores liberal, radical and socialist ideas in Europe and how the Russian Revolution of 1917 created the first socialist state.", [
          t("The Age of Social Change", ["Liberals, Radicals and Conservatives", "Industrial Society and Social Change", "The Coming of Socialism to Europe", "Support for Socialism"]),
          t("The Russian Revolution", ["The Russian Empire in 1914", "Economy and Society", "Socialism in Russia", "A Turbulent Time: The 1905 Revolution"]),
          t("The February Revolution in Petrograd", ["The First World War and the Russian Empire", "After February"]),
          t("The Revolution of October 1917", ["What Changed after October?", "The Civil War", "Making a Socialist Society"]),
          t("The Global Influence of the Russian Revolution and the USSR", ["Stalinism and Collectivisation", "Impact across the World"]),
        ]),
        ch(3, "nazism-and-the-rise-of-hitler", "Nazism and the Rise of Hitler", "Examines the rise of Hitler after the Weimar Republic's collapse, Nazi ideology and the horrors of the Holocaust.", [
          t("Birth of the Weimar Republic", ["The Effects of the War", "Political Radicalism and Economic Crises", "The Years of Depression"]),
          t("Hitler's Rise to Power", ["The Nazi Party's Growth", "The Destruction of Democracy", "Reconstruction"]),
          t("The Nazi Worldview", ["Racial Ideology", "Establishment of the Racial State", "The Racial Utopia"]),
          t("Youth in Nazi Germany", ["The Nazi Cult of Motherhood", "The Art of Propaganda"]),
          t("Ordinary People and the Crimes against Humanity", ["Knowledge about the Holocaust", "Responses of Ordinary People"]),
        ]),
        ch(4, "forest-society-and-colonialism", "Forest Society and Colonialism", "Studies how colonial rule changed forests and the lives of forest communities in India and Java.", [
          t("Why Deforestation?", ["Land to Be Improved", "Sleepers on the Tracks", "Plantations"]),
          t("The Rise of Commercial Forestry", ["How Were the Lives of People Affected?", "How Did Forest Rules Affect Cultivation?", "Who Could Hunt?", "New Trades, New Employment and New Services"]),
          t("Rebellion in the Forest", ["The People of Bastar", "The Fears of the People"]),
          t("Forest Transformations in Java", ["The Woodcutters of Java", "Samin's Challenge", "War and Deforestation", "New Developments in Forestry"]),
        ]),
        ch(5, "pastoralists-in-the-modern-world", "Pastoralists in the Modern World", "Describes the lives of pastoral nomads in India and Africa and how colonial rule changed their movements and livelihoods.", [
          t("Pastoral Nomads and Their Movements", ["In the Mountains", "On the Plateaus, Plains and Deserts"]),
          t("Colonial Rule and Pastoral Life", ["Waste Land Rules", "Forest Acts", "Criminal Tribes Act and Grazing Tax"]),
          t("How Did These Changes Affect the Lives of Pastoralists?", ["Shortage of Pastures", "How Did the Pastoralists Cope?"]),
          t("Pastoralism in Africa", ["Where Have the Grazing Lands Gone?", "The Borders Are Closed", "When Pastures Dry", "Not All Were Equally Affected"]),
        ]),
      ],
    },
    {
      id: "contemporary-india-i",
      title: "Contemporary India I — Geography Textbook for Class IX",
      chapters: [
        ch(1, "india-size-and-location", "India – Size and Location", "Describes India's location, size, relationship with the world and its neighbouring countries.", [
          t("Location", ["Latitudinal and Longitudinal Extent", "The Tropic of Cancer and the Standard Meridian"]),
          t("Size", ["Area of India", "East–West and North–South Extent"]),
          t("India and the World", ["Central Location in the Eastern Hemisphere", "Trans-Indian Ocean Routes", "Historical Contacts"]),
          t("India's Neighbours", ["Land Neighbours", "Island Neighbours"]),
        ]),
        ch(2, "physical-features-of-india", "Physical Features of India", "Explains the formation and major physiographic divisions of India — mountains, plains, plateaus, desert, coasts and islands.", [
          t("The Himalayan Mountains", ["Himadri, Himachal and Shiwaliks", "Longitudinal Divisions", "Purvachal"]),
          t("The Northern Plains", ["Punjab, Ganga and Brahmaputra Plains", "Bhabar, Terai, Bhangar and Khadar"]),
          t("The Peninsular Plateau", ["The Central Highlands", "The Deccan Plateau", "Western and Eastern Ghats"]),
          t("The Indian Desert and the Coastal Plains", ["The Thar Desert", "The Western Coastal Plains", "The Eastern Coastal Plains"]),
          t("The Islands", ["Lakshadweep Islands", "Andaman and Nicobar Islands"]),
        ]),
        ch(3, "drainage", "Drainage", "Studies the Himalayan and Peninsular river systems, lakes and the role and pollution of rivers.", [
          t("Drainage Systems in India", ["Drainage Basin and Water Divide", "Himalayan and Peninsular Rivers"]),
          t("The Himalayan Rivers", ["The Indus River System", "The Ganga River System", "The Brahmaputra River System"]),
          t("The Peninsular Rivers", ["The Narmada and Tapi Basins", "The Godavari and Mahanadi Basins", "The Krishna and Kaveri Basins"]),
          t("Lakes", ["Types of Lakes", "Importance of Lakes"]),
          t("Role of Rivers in the Economy and River Pollution", ["Importance of Rivers", "River Pollution"]),
        ]),
        ch(4, "climate", "Climate", "Explains the factors controlling India's climate, the mechanism of the monsoon, the seasons and rainfall distribution.", [
          t("Climatic Controls", ["Latitude and Altitude", "Pressure and Winds", "Distance from the Sea"]),
          t("Factors Affecting India's Climate", ["Latitude, Altitude and Relief", "Pressure and Winds", "Jet Streams and Western Cyclonic Disturbances"]),
          t("The Indian Monsoon", ["Mechanism of the Monsoon", "The Onset of the Monsoon and Withdrawal", "Breaks in the Monsoon"]),
          t("The Seasons", ["The Cold Weather Season", "The Hot Weather Season", "Advancing Monsoon", "Retreating Monsoon"]),
          t("Distribution of Rainfall and Monsoon as a Unifying Bond", ["Distribution of Rainfall", "Monsoon as a Unifying Bond"]),
        ]),
        ch(5, "natural-vegetation-and-wildlife", "Natural Vegetation and Wildlife", "Describes the major types of natural vegetation in India and its wildlife.", [
          t("Types of Vegetation", ["Tropical Evergreen Forests", "Tropical Deciduous Forests", "Tropical Thorn Forests and Scrubs", "Montane Forests and Mangrove Forests"]),
          t("Wildlife", ["Fauna of India", "Conservation of Wildlife"]),
        ]),
        ch(6, "population", "Population", "Examines India's population size, distribution, density and the processes of population change.", [
          t("Population Size and Distribution", ["Population Size and Distribution by Numbers", "Population Density"]),
          t("Population Growth and Processes of Population Change", ["Population Growth", "Birth Rate and Death Rate", "Migration"]),
        ]),
      ],
    },
    {
      id: "democratic-politics-i",
      title: "Democratic Politics I — Political Science Textbook for Class IX",
      chapters: [
        ch(1, "what-is-democracy-why-democracy", "What is Democracy? Why Democracy?", "Defines democracy through its key features and weighs the arguments for and against it.", [
          t("What Is Democracy?", ["A Simple Definition", "Why Define Democracy?"]),
          t("Features of Democracy", ["Major Decisions by Elected Leaders", "Free and Fair Electoral Competition", "One Person, One Vote, One Value", "Rule of Law and Respect for Rights"]),
          t("Why Democracy?", ["Arguments against Democracy", "Arguments for Democracy"]),
          t("Broader Meanings of Democracy", ["Democracy beyond Government", "Democracy as an Ideal"]),
        ]),
        ch(2, "constitutional-design", "Constitutional Design", "Explains why constitutions are needed, how the Indian Constitution was made and the values it enshrines, using South Africa as a comparison.", [
          t("Democratic Constitution in South Africa", ["Struggle against Apartheid", "Towards a New Constitution"]),
          t("Why Do We Need a Constitution?", ["Functions of a Constitution", "Constitution as a Set of Rules"]),
          t("Making of the Indian Constitution", ["The Path to the Constitution", "The Constituent Assembly"]),
          t("Guiding Values of the Indian Constitution", ["The Dream and the Promise", "Philosophy of the Constitution: The Preamble"]),
        ]),
        ch(3, "electoral-politics", "Electoral Politics", "Describes why elections are needed, the Indian electoral system and what makes elections in India democratic.", [
          t("Why Elections?", ["Need for Elections", "What Makes an Election Democratic?"]),
          t("Our System of Elections", ["Electoral Constituencies", "Reserved Constituencies", "Voters' List and Nomination of Candidates"]),
          t("Election Campaign and Polling", ["Election Campaign", "Polling and Counting of Votes"]),
          t("What Makes Elections in India Democratic?", ["Independent Election Commission", "Popular Participation", "Acceptance of Election Outcome", "Challenges to Free and Fair Elections"]),
        ]),
        ch(4, "working-of-institutions", "Working of Institutions", "Explains how major decisions are taken and the roles of Parliament, the political executive and the judiciary.", [
          t("How Is a Major Policy Decision Taken?", ["A Government Order", "The Decision Makers", "Need for Political Institutions"]),
          t("Parliament", ["Why Do We Need a Parliament?", "Two Houses of Parliament"]),
          t("Political Executive", ["Political and Permanent Executive", "Prime Minister and Council of Ministers", "Powers of the Prime Minister", "The President"]),
          t("The Judiciary", ["Independence of the Judiciary", "Judicial Review and Public Interest Litigation"]),
        ]),
        ch(5, "democratic-rights", "Democratic Rights", "Explains why rights are essential in a democracy and describes the Fundamental Rights in the Indian Constitution.", [
          t("Life without Rights", ["Prison in Guantanamo Bay", "Citizens' Rights in Saudi Arabia", "Ethnic Massacre in Kosovo"]),
          t("Rights in a Democracy", ["What Are Rights?", "Why Do We Need Rights in a Democracy?"]),
          t("Rights in the Indian Constitution", ["Right to Equality and Right to Freedom", "Right against Exploitation", "Right to Freedom of Religion", "Cultural and Educational Rights and Right to Constitutional Remedies"]),
          t("Expanding Scope of Rights", ["New Rights", "Rights as the Basis of Democracy"]),
        ]),
      ],
    },
    {
      id: "economics-class-9",
      title: "Economics — Textbook for Class IX",
      chapters: [
        ch(1, "the-story-of-village-palampur", "The Story of Village Palampur", "Uses a hypothetical village to explain the basic concepts of production, including land, labour, capital and non-farm activities.", [
          t("Overview", ["Organisation of Production", "Land, Labour, Physical Capital and Human Capital"]),
          t("Farming in Palampur", ["Land Is Fixed", "Is There a Way to Grow More from the Same Land?", "Will the Land Sustain?", "Distribution of Land among Farmers"]),
          t("Labour and Capital in Farming", ["Who Will Provide the Labour?", "The Capital Needed in Farming", "Sale of Surplus Farm Products"]),
          t("Non-farm Activities in Palampur", ["Dairy", "Small-scale Manufacturing", "Shopkeepers", "Transport"]),
        ]),
        ch(2, "people-as-resource", "People as Resource", "Explains how investment in education and health turns population into human capital, and examines unemployment.", [
          t("Economic Activities by Men and Women", ["Primary, Secondary and Tertiary Sectors", "Market and Non-market Activities"]),
          t("Quality of Population", ["Education", "Health"]),
          t("Unemployment", ["Seasonal and Disguised Unemployment", "Educated Unemployment", "Effects of Unemployment"]),
        ]),
        ch(3, "poverty-as-a-challenge", "Poverty as a Challenge", "Studies how poverty is measured in India, its trends, causes, vulnerable groups and anti-poverty measures.", [
          t("Poverty as Seen by Social Scientists", ["Two Typical Cases of Poverty", "Indicators of Poverty", "Social Exclusion and Vulnerability"]),
          t("Poverty Line", ["Measuring Poverty", "Poverty Estimates"]),
          t("Vulnerable Groups and Inter-State Disparities", ["Vulnerable Groups", "Inter-State Disparities", "Global Poverty Scenario"]),
          t("Causes of Poverty and Anti-Poverty Measures", ["Causes of Poverty", "Anti-Poverty Measures", "The Challenges Ahead"]),
        ]),
        ch(4, "food-security-in-india", "Food Security in India", "Explains the meaning of food security, who is food-insecure, and how buffer stocks, the PDS and cooperatives help.", [
          t("What Is Food Security?", ["Availability, Accessibility and Affordability", "Why Food Security?"]),
          t("Who Are Food-Insecure?", ["Vulnerable Groups", "Hunger: Chronic and Seasonal"]),
          t("Food Security in India", ["The Green Revolution", "Buffer Stock", "The Public Distribution System"]),
          t("Role of Cooperatives in Food Security", ["Cooperative Stores", "Grain Banks"]),
        ]),
      ],
    },
  ],
};

export const class9: Grade = {
  id: "9",
  label: "Class 9",
  subjects: [mathematics, science, socialScience],
};

// ─── STEP 1: Supercategory Prompt Template ─────────────────────────────────────
export function batchPromptTemplate({ problems }: { problems: string[] }) {
  return `
You are a math educator trained in the **COMPS (Conceptual Model-Based Problem Solving)** framework.
Your task is to classify each arithmetic word problem into one of the following conceptual categories:

## 🔁 Change
Describes a situation where a **quantity increases or decreases over time** due to some event (e.g., gaining, losing, spending, receiving).  
It involves a **transformation** — a quantity starts at one amount and becomes a different amount.
These problems typically follow a **before-and-after structure** or unfold across **multiple time points**.
### Common Indicators
- Actions like: _gave_, _lost_, _got_, _added_, _received_, _left_, _joined_
- Tense or language indicates **sequence** or **time passing**

## ➕ Combine
Describes a situation where **two or more distinct quantities** are **grouped together into a total**.
There is **no transformation** — nothing changes over time. The parts are simply added to find a total.
Even if events happened at different times (e.g., two races), if there is no **change in state**, it's **Combine**.
### Common Indicators
- Parts are distinct but **independent**
- No item is being gained/lost/transferred
- Words like: _in total_, _altogether_, _sum_

## ⚖️ Compare
Describes a situation where **two quantities are contrasted** to find the **difference** between them  
(or determine which is more, less, or how much more or less).
### Common Indicators
- Questions asking: _how many more..._, _how many fewer..._
- Focus is on **difference**, **not change** or **combining**

---

### 🔍 Classification Guide

Think step-by-step:
1. **Does the problem describe a quantity that changes over time**  
   due to an action like gaining or losing?  
   → ✅ **Change**
2. **Does the problem group together multiple distinct quantities**  
   without affecting each other?  
   → ✅ **Combine**
3. **Does the problem contrast two amounts** to find a difference or comparison?  
   → ✅ **Compare**
> 🔑 Focus on what the story is **doing**: changing something, grouping parts, or contrasting values.

---

### ✅ Output Format
Return your answer in the following JSON array format:

[
  {{
    "problem": "<problem text>",
    "category": "Change|Combine|Compare",
    "reasoning": "<explanation of your reasoning in full sentences and connected thoughts>"
  }}
]


Here are the problems:
${problems.map((p) => `${p}`).join("\n")}
`;
}

// ─── STEP 2: Subcategory Prompt Generator ──────────────────────────────────────
export function getSubtypePrompt(category: string, problem: string): string {
  const prompts = {
    Change: {
      options: "CJPU | CJWU | CSPU | CSWU",
      desc: `
Classify it into one of the following types:
- CJPU: Change–Join, Part Unknown  
- CJWU: Change–Join, Whole Unknown  
- CSPU: Change–Separate, Part Unknown  
- CSWU: Change–Separate, Whole Unknown  

---

### 🔧 Step-by-Step Instructions

#### 🔹 Step 1: Determine the Situation Type
Is the quantity increasing or decreasing over time?
- If it **increases** → it's a **Join** problem  
- If it **decreases** → it's a **Separate** problem

---

### 🔹 Step 2: Identify the Quantities in the Model
Use this structure:
Start ± Change = Result

Now fill in each of the three quantities from the problem:
- **Start**: the initial amount before anything is added or removed  
- **Change**: the amounts that are added (Join) or removed (Separate)  
- **Result**: the final amount after the change has happened
Label whichever value is unknown as "unknown".

---

### Step 3: Identify the Unknown and Its Role

#### For **Join**:
- Start and Change are **Parts**, Result is the **Whole**
- If **Start** or **Change** is unknown → it's a **Part Unknown** → **CJPU**
- If **Result** is unknown → it's a **Whole Unknown** → **CJWU**

#### For **Separate**:
- Start is the **Whole**, Change and Result are **Parts**
- If **Start** is unknown → it's a **Whole Unknown** → **CSWU**
- If **Change** or **Result** is unknown → it's a **Part Unknown** → **CSPU**

> ✅ Don't just label based on what is missing.  
> 🧠 Classify based on what that missing value **represents** in the model.

`,
    },
    Combine: {
      options: "CPU | CWU",
      desc: `
Classify it into one of the following types:
- **CPU**: Combine, Part Unknown  
- **CWU**: Combine, Whole Unknown  

---

### 🔧 Step-by-Step Instructions

#### 🔹 Step 2: Identify the Quantities in the Combine Model

Use this structure:  
> Part 1 + Part 2 = Whole

Now fill in from the problem:
- **Part 1**: a known amount in the group  
- **Part 2**: another known amount in the group  
- **Whole**: the total combined amount
Mark whichever one is **unknown**.

#### 🔹 Step 3: Determine the Type of Unknown
- If one of the **Parts** is unknown → it's a **Part Unknown** → **CPU**  
- If the **Whole** is unknown → it's a **Whole Unknown** → **CWU**

`,
    },
    Compare: {
      options: "CLDU | CLLQU | CLSQU | CMDU | CMLQU | CMSQU",
      desc: `
Choose one of:
- CLDU, CLLQU, CLSQU (Compare-Less)
- CMDU, CMLQU, CMSQU (Compare-More)

Classify it into one of the following types:

## Compare–Less
- **CLDU** – Compare–Less, Difference Unknown
- **CLLQU** – Compare–Less, Larger Quantity Unknown
- **CLSQU** – Compare–Less, Smaller Quantity Unknown

## Compare–More
- **CMDU** – Compare–More, Difference Unknown
- **CMLQU** – Compare–More, Larger Quantity Unknown
- **CMSQU** – Compare–More, Smaller Quantity Unknown

---

## 🔍 Step-by-Step Instructions

1. **Determine the Comparison Direction**  
   - Is the problem asking **how many more**, **how many fewer**, or comparing one group to another?
   - If the focus is on **"less than"**, it's a **Compare–Less** problem.  
   - If the focus is on **"more than"**, it's a **Compare–More** problem.

2. **Use the Compare Model**  
   According to the COMPS framework:
   > Bigger = Smaller + Difference

   Now fill in from the problem:
    - **Bigger**: larger quantity
    - **Smaller**: smaller quantity
    - **Difference**: how much more or less
   Mark whichever one is unknown.

3. **Identify the Unknown**  
Which of the three quantities is missing?
- **Difference Unknown** → *_DU
- **Larger Quantity Unknown** → *_LQU
- **Smaller Quantity Unknown** → *_SQU
`,
    },
  };

  const format = prompts[category as keyof typeof prompts];
  if (!format) return "❌ Error: Unknown category provided.";

  return `
You are classifying this word problem using the COMPS (Conceptual Model-Based Problem Solving) framework.

${format.desc}

🚫 Do not rephrase or restate the problem in a different form.
✅ Always classify based on the original sentence structure and comparison direction.

Problem:
${problem}

Respond strictly in the following JSON format with no extra commentary:
{
  "reasoning": "<explanation of your reasoning in full sentences and connected thoughts>",
  "subcategory": "${format.options}"
}`;
}

// ─── STEP 3: Model Answer Prompt Generator ─────────────────────────────────────
export function getModelAnswerPrompt(
  category: string,
  problem: string,
): string {
  const prompts = {
    Change: {
      modelKeys: ["start", "change", "end"],
      desc: `
You are solving a **Change** word problem using the COMPS model:  
> Start ± Change = End

---

## 🔧 Step-by-Step Guide
1. Determine if the problem describes an **increase** (Join) or **decrease** (Separate) in quantity.
2. Identify the three model parts:
   - **Start**: the amount before anything happened
   - **Change**: the amount added or taken away
   - **End**: the result after the change

---

## ✅ Your Task
1. Extract the values from the story.
2. Assign each number to the correct model label: start, change, end.
3. If a value is unknown, write null.
4. Calculate the missing value, and assign it to answer.
5. Explain your steps clearly.

📦 Example Output:
{{
  "modelAnswers": {{
    "start": 12,
    "change": null,
    "end": 18
  }},
  "answer": 6,
  "reasoning": "12 + ? = 18 → 18 - 12 = 6, so the change is 6."
}}

⚠️ IMPORTANT: All values in modelAnswers must be numbers or null. Do not include mathematical expressions like "2 + 2" - calculate the result and write "4" instead.

Problem:
"${problem}"

Only return the JSON object.
`,
    },
    Combine: {
      modelKeys: ["part1", "part2", "whole"],
      desc: `
You are solving a **Combine** word problem using the COMPS model:  
> Part 1 + Part 2 = Whole

---

## 🔧 Step-by-Step Guide

1. Identify the three values:
   - **Part 1**: the first part of the group
   - **Part 2**: the second part of the group
   - **Whole**: the total after combining

---

## ✅ Your Task
1. Assign values to part1, part2, and whole.
2. Use "null" for the missing part.
3. Calculate the answer.
4. Explain your math clearly.

📦 Example Output:

{{
  "modelAnswers": {{
    "part1": 4,
    "part2": 6,
    "whole": null
  }},
  "answer": 10,
  "reasoning": "4 + 6 = 10, so the total is 10."
}}

⚠️ IMPORTANT: All values in modelAnswers must be numbers or null. Do not include mathematical expressions like "2 + 2" - calculate the result and write "4" instead.

Problem:
"${problem}"

Only return the JSON object.
`,
    },
    Compare: {
      modelKeys: ["bigger", "smaller", "difference"],
      desc: `
You are solving a **Compare** word problem using the COMPS model:  
> Bigger = Smaller + Difference

---

## 🔧 Step-by-Step Guide

1. Identify the quantities:
   - **Bigger**: the larger amount
   - **Smaller**: the lesser amount
   - **Difference**: how much more or fewer

---

## ✅ Your Task

1. Assign values to bigger, smaller, and difference.
2. Use "null" for the unknown one.
3. Solve for the answer and explain how.

📦 Example Output:

{{
  "modelAnswers": {{
    "bigger": null,
    "smaller": 4,
    "difference": 2
  }},
  "answer": 6,
  "reasoning": "Bigger = 4 + 2 = 6, so the bigger amount is 6."
}}

⚠️ IMPORTANT: All values in modelAnswers must be numbers or null. Do not include mathematical expressions like "2 + 2" - calculate the result and write "4" instead.

Problem:
"${problem}"

Only return the JSON object.
`,
    },
  };

  const format = prompts[category as keyof typeof prompts];
  if (!format) return "❌ Error: Unknown category provided.";

  return format.desc;
}

// ─── STEP 4: Story Grammar Prompt Generator ─────────────────────────────────────
export function getStoryGrammarPrompt(
  problem: string,
  subtype: string,
  modelAnswers: string,
  answer: number,
): string {
  const modelStructures = {
    CJPU: { model: "Start + Change = End", boxes: ["start", "change", "end"] },
    CJWU: { model: "Start + Change = End", boxes: ["start", "change", "end"] },
    CSPU: { model: "Start - Change = End", boxes: ["start", "change", "end"] },
    CSWU: { model: "Start - Change = End", boxes: ["start", "change", "end"] },
    CPU: { model: "Part1 + Part2 = Whole", boxes: ["part1", "part2", "whole"] },
    CWU: { model: "Part1 + Part2 = Whole", boxes: ["part1", "part2", "whole"] },
    CMDU: {
      model: "Bigger = Smaller + Difference",
      boxes: ["bigger", "smaller", "difference"],
    },
    CMLQU: {
      model: "Bigger = Smaller + Difference",
      boxes: ["bigger", "smaller", "difference"],
    },
    CMSQU: {
      model: "Bigger = Smaller + Difference",
      boxes: ["bigger", "smaller", "difference"],
    },
    CLDU: {
      model: "Bigger = Smaller + Difference",
      boxes: ["bigger", "smaller", "difference"],
    },
    CLLQU: {
      model: "Bigger = Smaller + Difference",
      boxes: ["bigger", "smaller", "difference"],
    },
    CLSQU: {
      model: "Bigger = Smaller + Difference",
      boxes: ["bigger", "smaller", "difference"],
    },
  };

  const modelInfo = modelStructures[subtype as keyof typeof modelStructures];
  if (!modelInfo) throw new Error(`Unknown subtype: ${subtype}`);

  return `
You are an expert elementary math teacher helping a student solve a word problem using the COMPS (Conceptual Model-Based Problem Solving) framework.

The student is in Grades 1–4 and needs clear, supportive help understanding what to do at each step.

---

📘 Problem:
"${problem}"

🔢 Subtype: ${subtype}  
📐 Model Type: ${modelInfo.model}  
📦 Equation Parts: ${modelInfo.boxes.join(", ")}  
📦 Model Answers: ${modelAnswers}
📊 Final Answer: ${answer}

---

🧠 Your Task

Generate a list of ${modelInfo.boxes.length} questions — one for each model part — that will help the child fill in the model equation.

For each part, generate:

- **text**: a simple story grammar question in the student's language
- **boxTarget**: the model box it refers to (e.g., "start", "whole")
- **context**: a friendly explanation of what the story grammar question asks, using warm, simple language for young readers in grades 1–4.

🧒 Keep the tone warm and supportive, as if you're sitting next to the child.  
Do **not** rephrase the problem. Do **not** give away the answer.

---

✅ Output Format:
[
  {{
    "text": "Story grammar question for the student",
    "boxTarget": "start",
    "context": "a friendly explanation of what the story grammar question asks, using warm, simple language for young readers in grades 1–4."
  }},
  ...
]

Use clear and natural language. Do not use math words like “variable” or “term.” Use the actual items from the story where it helps.

Now write the JSON array.
`;
}

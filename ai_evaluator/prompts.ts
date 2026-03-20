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
- Actions like: _gave_, _lost_, _got_, _added_, _received_, _left_, _joined_, _used_, _spent_, _threw_
- Tense or language indicates **sequence** or **time passing**

### ⚠️ Easy to confuse with Combine — watch for this pattern:
Some Change problems describe an original amount that was partly used or removed, leaving a remainder. The math may look like addition (used + left = total), but if the story involves **something happening to a quantity over time** (items being consumed, spent, thrown, broken, given away), it is **Change — not Combine**.
- Example: "She had some stickers. She gave away 5. She has 8 left. How many did she start with?" → **Change** (something happened — she gave them away)
- Example: "There are 5 red pens and 8 blue pens. How many altogether?" → **Combine** (nothing happened — they just exist together)

## ➕ Combine
Describes a situation where **two or more distinct quantities** are **grouped together into a total**.
There is **no transformation** — nothing changes over time. The parts are simply added to find a total.
Even if events happened at different times (e.g., two races), if there is **no change in state of any single quantity**, it's **Combine**.
### Common Indicators
- Parts are distinct but **independent** — neither is created from or affected by the other
- No item is being gained/lost/transferred/used/consumed
- Words like: _in total_, _altogether_, _sum_

## ⚖️ Compare
Describes a situation where **two separate, independent quantities** are contrasted at the **same point in time** to find the **difference** between them.
### Common Indicators
- Questions asking: _how many more..._, _how many fewer..._
- Focus is on **difference**, **not change** or **combining**
- Always involves **two distinct people, objects or groups** being compared to each other

### ⚠️ Easy to confuse with Change — watch for this pattern:
If the problem involves the **same person or object at two different points in time** (before and after something happened), it is **Change — not Compare**, even if the question asks "how much more/less/taller/heavier".
- Example: "Tom was 120cm tall last year. Now he is 125cm. How much did he grow?" → **Change** (same person, two moments in time)
- Example: "Tom is 125cm tall. Sara is 120cm tall. How much taller is Tom?" → **Compare** (two different people at the same time)

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

⚠️ CRITICAL RULES:
- You MUST classify EVERY problem. Never skip or leave a problem unclassified.
- The only valid values for "category" are exactly: **Change**, **Combine**, or **Compare**.
- NEVER use "Unknown", "Other", "Unclear", or any value outside those three.
- If you are unsure, make your best judgement and pick the most likely category.

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

⚠️ CRITICAL RULES:
- You MUST pick exactly ONE subcategory from this list: ${format.options}
- NEVER output "Unknown", "Other", "Unclear", or anything outside that list.
- If you are unsure, commit to your best judgement and pick the closest match.

Respond strictly in the following JSON format with no extra commentary:
{
  "reasoning": "<explanation of your reasoning in full sentences and connected thoughts>",
  "subcategory": "<one of: ${format.options}>"
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
You are solving a word problem where something changes over time — a quantity either grows or shrinks because of something that happens in the story.

There are three numbers in the story:
- How much there was **at the beginning** (start)
- How much was **added or taken away** (change)
- How much there is **at the end** (end)

One of these three numbers is missing. Find it and explain how.

---

## ✅ Your Task
1. Read the story and identify all three numbers (start, change, end). Write null for the one that is missing.
2. Calculate the missing number.
3. Write a reasoning explanation IN THE VOICE OF A WARM TEACHER speaking directly to a child. The explanation must:
   - Use the real names, objects and actions from the story (not abstract labels)
   - Walk through the logic step by step in simple everyday language
   - Show the arithmetic clearly (e.g. "85 - 21 = 64")
   - End by stating the answer in a full sentence about the story
   - Never use words like "start", "change", "end", "model", "equation", "variable", or any COMPS terminology
   - Be 2–4 sentences long

📦 Example (story: "There were 12 apples. Mia ate some. Now there are 7 left. How many did she eat?"):
{{
  "modelAnswers": {{
    "start": 12,
    "change": null,
    "end": 7
  }},
  "answer": 5,
  "reasoning": "We know Mia started with 12 apples, and now there are only 7 left. That means some apples were eaten. If we take 7 away from 12, we get 12 - 7 = 5. So Mia ate 5 apples."
}}

⚠️ All values in modelAnswers must be numbers or null. Never write a math expression like "2 + 2" as a value — calculate it and write the result.

Problem:
"${problem}"

Only return the JSON object.
`,
    },
    Combine: {
      modelKeys: ["part1", "part2", "whole"],
      desc: `
You are solving a word problem where two separate groups are brought together into one total.

There are three numbers:
- The **first group**
- The **second group**
- The **total** of both groups together

One of these three numbers is missing. Find it and explain how.

---

## ✅ Your Task
1. Read the story and identify the two groups and the total. Write null for the one that is missing.
2. Calculate the missing number.
3. Write a reasoning explanation IN THE VOICE OF A WARM TEACHER speaking directly to a child. The explanation must:
   - Use the real names, objects and actions from the story (not abstract labels)
   - Walk through the logic step by step in simple everyday language
   - Show the arithmetic clearly (e.g. "34 + 33 = 67")
   - End by stating the answer in a full sentence about the story
   - Never use words like "part", "whole", "model", "equation", "variable", or any COMPS terminology
   - Be 2–4 sentences long

📦 Example (story: "There are 4 red balls and 6 blue balls. How many balls are there altogether?"):
{{
  "modelAnswers": {{
    "part1": 4,
    "part2": 6,
    "whole": null
  }},
  "answer": 10,
  "reasoning": "We have two groups of balls — 4 red ones and 6 blue ones. To find out how many there are altogether, we add them together: 4 + 6 = 10. So there are 10 balls in total."
}}

⚠️ All values in modelAnswers must be numbers or null. Never write a math expression like "2 + 2" as a value — calculate it and write the result.

Problem:
"${problem}"

Only return the JSON object.
`,
    },
    Compare: {
      modelKeys: ["bigger", "smaller", "difference"],
      desc: `
You are solving a word problem where two amounts are compared to find how much more or less one is than the other.

There are three numbers:
- The **bigger amount**
- The **smaller amount**
- The **difference** between them (how much more or fewer)

One of these three numbers is missing. Find it and explain how.

---

## ✅ Your Task
1. Read the story and identify the bigger amount, the smaller amount, and the difference. Write null for the one that is missing.
2. Calculate the missing number.
3. Write a reasoning explanation IN THE VOICE OF A WARM TEACHER speaking directly to a child. The explanation must:
   - Use the real names, objects and actions from the story (not abstract labels)
   - Walk through the logic step by step in simple everyday language
   - Show the arithmetic clearly (e.g. "33 - 17 = 16")
   - End by stating the answer in a full sentence about the story
   - Never use words like "bigger", "smaller", "difference", "model", "equation", "variable", or any COMPS terminology
   - Be 2–4 sentences long

📦 Example (story: "The red box has 15 crayons. The blue box has 9 crayons. How many more crayons does the red box have?"):
{{
  "modelAnswers": {{
    "bigger": 15,
    "smaller": 9,
    "difference": null
  }},
  "answer": 6,
  "reasoning": "The red box has 15 crayons and the blue box has 9 crayons. To find out how many more the red box has, we take the blue box amount away from the red box amount: 15 - 9 = 6. So the red box has 6 more crayons than the blue box."
}}

⚠️ All values in modelAnswers must be numbers or null. Never write a math expression like "2 + 2" as a value — calculate it and write the result.

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
You are a warm and patient primary school teacher helping a young child (Grades 1–4) work through a word problem step by step using the COMPS (Conceptual Model-Based Problem Solving) framework.
Some of these children have learning difficulties, so your language must be very simple, concrete, and encouraging.

---

📘 Problem:
"${problem}"

🔢 Subtype: ${subtype}
📐 Model: ${modelInfo.model}
📦 Equation Parts: ${modelInfo.boxes.join(", ")}
📦 Model Answers: ${modelAnswers}
📊 Final Answer: ${answer}

---

🧠 Your Task

Write ${modelInfo.boxes.length} questions — one for each part of the model equation — that guide the child to find each number in the story.

### Rules for every question:

1. **The answer must always be a number.** Every question must be answerable with a specific number. Never ask a question whose answer is a name only, a description, or a yes/no. If you name a person or object to help orient the child, always end with a "how many / how much" clause so the answer is a number. For example: "Peppa weighs 33 kg and George weighs 17 kg — how much does Peppa weigh?" is good. "Who weighs more?" is not.

2. **Use the real things from the story.** Instead of abstract labels like "what is the start value?", ask "How many decorations were on the tree before lunch?" Use the actual objects, people and actions from the problem.

3. **Make the child think, not just copy.** For values that are given in the story, ask the child to find them. For the unknown value, ask what we are trying to figure out — framed as a natural question about the story.

4. **Simple words only.** No "variable", "equation", "value", "unknown", "model", "part", "whole" as abstract terms. Write as if speaking warmly to a 7-year-old.

5. **One idea per question. Short sentences.**

---

✅ Output Format — return only this JSON array, no extra text:
[
  {{
    "text": "The question for the child — must be answerable with a number",
    "boxTarget": "${modelInfo.boxes[0]}",
    "context": "One short friendly sentence telling the child where to look or what to think about to find this number."
  }},
  ...
]

Now write the JSON array for all ${modelInfo.boxes.length} parts.
`;
}

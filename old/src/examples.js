export const examples = `
📌 CJPU (Change-Join, Part Unknown)
"Mia walked 3 miles before lunch. She walked more in the evening. In total, she walked 8 miles. How many miles did she walk in the evening?"
Known start and total → missing increase → CJPU

📌 CJWU (Change-Join, Whole Unknown)
"Luca read 15 pages in the morning and 12 more at night. How many pages did he read in total?"
Two known parts → missing total → CJWU

📌 CSPU (Change-Separate, Part Unknown)
"Jon started with 120 tokens. He gave some away and now has 75. How many did he give away?"
Known total and remainder → missing decrease → CSPU

📌 CSWU (Change-Separate, Whole Unknown)
"Lila gave away 15 of her stickers and now has 22. How many did she start with?"
Known decrease and remainder → missing original total → CSWU

📌 CPU (Combine, Part Unknown)
"There are 40 students in a school. 23 are girls. How many are boys?"
Whole and one part known → missing other part → CPU

📌 CWU (Combine, Whole Unknown)
"A bookshelf holds 25 fiction and 34 non-fiction books. How many books in total?"
Known parts → missing whole → CWU

📌 CLDU (Compare-Less, Difference Unknown)
"Alex has 92 toy cars. Brad has 108. How many fewer cars does Alex have than Brad?"
Two full values → missing difference (fewer) → CLDU

📌 CLLQU (Compare-Less, Larger Quantity Unknown)
"Liam has 300 baseball cards. That’s 75 fewer than what Jack has. How many does Jack have?"
Smaller + difference → missing larger → CLLQU

📌 CLSQU (Compare-Less, Smaller Quantity Unknown)
"Julia read 60 fewer pages than Hannah. Hannah read 150 pages. How many did Julia read?"
Larger + difference → missing smaller → CLSQU

📌 CMDU (Compare-More, Difference Unknown)
"The green house uses 680 kWh of electricity. The red house uses 720 kWh. How much more does the red house use?"
Two full values → missing difference (more) → CMDU

📌 CMLQU (Compare-More, Larger Quantity Unknown)
"The blue shelf holds 90 books. That’s 15 more than the yellow shelf. How many on the yellow shelf?"
Smaller + difference → missing larger → CMLQU

📌 CMSQU (Compare-More, Smaller Quantity Unknown)
"The science team scored 85 points, which was 10 more than the math team. How many points did the math team score?"
Larger + difference → missing smaller → CMSQU
`;

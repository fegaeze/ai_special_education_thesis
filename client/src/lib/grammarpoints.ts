import {
  StoryGrammarPrompt,
  ModelAnswerKey,
  CompSubType,
  ModelType,
  ModelEquationSymbol,
} from "@/lib/types/quiz";

interface ModelConfigEntry {
  boxes: ModelAnswerKey[];
  symbols: ModelEquationSymbol[];
  labels: Partial<Record<ModelAnswerKey, string>>;
}

export const modelConfig: Record<ModelType, ModelConfigEntry> = {
  [ModelType.PartPartWhole]: {
    boxes: [ModelAnswerKey.part1, ModelAnswerKey.part2, ModelAnswerKey.whole],
    symbols: [ModelEquationSymbol.Plus, ModelEquationSymbol.Equals],
    labels: {
      [ModelAnswerKey.part1]: "part",
      [ModelAnswerKey.part2]: "part",
      [ModelAnswerKey.whole]: "whole",
    },
  },
  [ModelType.ChangeJoin]: {
    boxes: [ModelAnswerKey.start, ModelAnswerKey.change, ModelAnswerKey.end],
    symbols: [ModelEquationSymbol.Plus, ModelEquationSymbol.Equals],
    labels: {
      [ModelAnswerKey.start]: "start",
      [ModelAnswerKey.change]: "change",
      [ModelAnswerKey.end]: "end",
    },
  },
  [ModelType.ChangeSeparate]: {
    boxes: [ModelAnswerKey.end, ModelAnswerKey.change, ModelAnswerKey.start],
    symbols: [ModelEquationSymbol.Plus, ModelEquationSymbol.Equals],
    labels: {
      [ModelAnswerKey.start]: "start",
      [ModelAnswerKey.change]: "change",
      [ModelAnswerKey.end]: "end",
    },
  },
  [ModelType.Compare]: {
    boxes: [
      ModelAnswerKey.bigger,
      ModelAnswerKey.smaller,
      ModelAnswerKey.difference,
    ],
    symbols: [ModelEquationSymbol.Equals, ModelEquationSymbol.Plus],
    labels: {
      bigger: "bigger",
      smaller: "smaller",
      difference: "difference",
    },
  },
};

interface GrammarPoint {
  type: CompSubType;
  model: ModelType;
  prompts: StoryGrammarPrompt[];
  boxes: ModelAnswerKey[];
  symbols: string[];
  labels: ModelConfigEntry["labels"];
}

export const grammarPoints: Record<CompSubType, GrammarPoint> = {
  [CompSubType.CWU]: {
    type: CompSubType.CWU,
    model: ModelType.PartPartWhole,
    prompts: [
      { text: "What is in the first group?", boxTarget: ModelAnswerKey.part1 },
      { text: "What is in the second group?", boxTarget: ModelAnswerKey.part2 },
      { text: "How many are there in all?", boxTarget: ModelAnswerKey.whole },
    ],
    ...modelConfig[ModelType.PartPartWhole],
  },
  [CompSubType.CPU]: {
    type: CompSubType.CPU,
    model: ModelType.PartPartWhole,
    prompts: [
      { text: "What is in the first group?", boxTarget: ModelAnswerKey.part1 },
      { text: "What is in the second group?", boxTarget: ModelAnswerKey.part2 },
      { text: "How many are there in all?", boxTarget: ModelAnswerKey.whole },
    ],
    ...modelConfig[ModelType.PartPartWhole],
  },
  [CompSubType.CJWU]: {
    type: CompSubType.CJWU,
    model: ModelType.ChangeJoin,
    prompts: [
      { text: "How many at the start?", boxTarget: ModelAnswerKey.start },
      { text: "How many were added?", boxTarget: ModelAnswerKey.change },
      { text: "How many now?", boxTarget: ModelAnswerKey.end },
    ],
    ...modelConfig[ModelType.ChangeJoin],
  },
  [CompSubType.CJPU]: {
    type: CompSubType.CJPU,
    model: ModelType.ChangeJoin,
    prompts: [
      { text: "How many at the start?", boxTarget: ModelAnswerKey.start },
      { text: "How many were added?", boxTarget: ModelAnswerKey.change },
      { text: "How many now?", boxTarget: ModelAnswerKey.end },
    ],
    ...modelConfig[ModelType.ChangeJoin],
  },
  [CompSubType.CSWU]: {
    type: CompSubType.CSWU,
    model: ModelType.ChangeSeparate,
    prompts: [
      { text: "How many are left?", boxTarget: ModelAnswerKey.end },
      { text: "How many were taken away?", boxTarget: ModelAnswerKey.change },
      { text: "How many at the start?", boxTarget: ModelAnswerKey.start },
    ],
    ...modelConfig[ModelType.ChangeSeparate],
  },
  [CompSubType.CSPU]: {
    type: CompSubType.CSPU,
    model: ModelType.ChangeSeparate,
    prompts: [
      { text: "How many are left?", boxTarget: ModelAnswerKey.end },
      { text: "How many were taken away?", boxTarget: ModelAnswerKey.change },
      { text: "How many at the start?", boxTarget: ModelAnswerKey.start },
    ],
    ...modelConfig[ModelType.ChangeSeparate],
  },
  [CompSubType.CMDU]: {
    type: CompSubType.CMDU,
    model: ModelType.Compare,
    prompts: [
      {
        text: "How many in the bigger group?",
        boxTarget: ModelAnswerKey.bigger,
      },
      {
        text: "How many in the smaller group?",
        boxTarget: ModelAnswerKey.smaller,
      },
      { text: "How many more?", boxTarget: ModelAnswerKey.difference },
    ],
    ...modelConfig[ModelType.Compare],
  },
  [CompSubType.CMLQU]: {
    type: CompSubType.CMLQU,
    model: ModelType.Compare,
    prompts: [
      {
        text: "How many in the bigger group?",
        boxTarget: ModelAnswerKey.bigger,
      },
      {
        text: "How many in the smaller group?",
        boxTarget: ModelAnswerKey.smaller,
      },
      { text: "How many more?", boxTarget: ModelAnswerKey.difference },
    ],
    ...modelConfig[ModelType.Compare],
  },
  [CompSubType.CMSQU]: {
    type: CompSubType.CMSQU,
    model: ModelType.Compare,
    prompts: [
      {
        text: "How many in the bigger group?",
        boxTarget: ModelAnswerKey.bigger,
      },
      {
        text: "How many in the smaller group?",
        boxTarget: ModelAnswerKey.smaller,
      },
      { text: "How many more?", boxTarget: ModelAnswerKey.difference },
    ],
    ...modelConfig[ModelType.Compare],
  },
  [CompSubType.CLDU]: {
    type: CompSubType.CLDU,
    model: ModelType.Compare,
    prompts: [
      {
        text: "How many in the bigger group?",
        boxTarget: ModelAnswerKey.bigger,
      },
      {
        text: "How many in the smaller group?",
        boxTarget: ModelAnswerKey.smaller,
      },
      { text: "How many fewer?", boxTarget: ModelAnswerKey.difference },
    ],
    ...modelConfig[ModelType.Compare],
  },
  [CompSubType.CLLQU]: {
    type: CompSubType.CLLQU,
    model: ModelType.Compare,
    prompts: [
      {
        text: "How many in the bigger group?",
        boxTarget: ModelAnswerKey.bigger,
      },
      {
        text: "How many in the smaller group?",
        boxTarget: ModelAnswerKey.smaller,
      },
      { text: "How many fewer?", boxTarget: ModelAnswerKey.difference },
    ],
    ...modelConfig[ModelType.Compare],
  },
  [CompSubType.CLSQU]: {
    type: CompSubType.CLSQU,
    model: ModelType.Compare,
    prompts: [
      {
        text: "How many in the bigger group?",
        boxTarget: ModelAnswerKey.bigger,
      },
      {
        text: "How many in the smaller group?",
        boxTarget: ModelAnswerKey.smaller,
      },
      { text: "How many fewer?", boxTarget: ModelAnswerKey.difference },
    ],
    ...modelConfig[ModelType.Compare],
  },
};

import type { Block } from "@/lib/blocks";

import gettingStarted from "./getting-started";
import variablesAndTypes from "./variables-and-types";
import operatorsAndExpressions from "./operators-and-expressions";
import inputAndOutput from "./input-and-output";
import conditionals from "./conditionals";
import loops from "./loops";
import functions from "./functions";
import arrays from "./arrays";
import strings from "./strings";
import pointers from "./pointers";
import pointersAndArrays from "./pointers-and-arrays";
import dynamicMemory from "./dynamic-memory";
import structsAndUnions from "./structs-and-unions";
import fileIO from "./file-io";
import thePreprocessor from "./the-preprocessor";
import multiFilePrograms from "./multi-file-programs";
import pitfallsAndDebugging from "./pitfalls-and-debugging";
import whereNext from "./where-next";

export const chapterContent: Record<string, Block[]> = {
  "getting-started": gettingStarted,
  "variables-and-types": variablesAndTypes,
  "operators-and-expressions": operatorsAndExpressions,
  "input-and-output": inputAndOutput,
  conditionals: conditionals,
  loops: loops,
  functions: functions,
  arrays: arrays,
  strings: strings,
  pointers: pointers,
  "pointers-and-arrays": pointersAndArrays,
  "dynamic-memory": dynamicMemory,
  "structs-and-unions": structsAndUnions,
  "file-io": fileIO,
  "the-preprocessor": thePreprocessor,
  "multi-file-programs": multiFilePrograms,
  "pitfalls-and-debugging": pitfallsAndDebugging,
  "where-next": whereNext,
};

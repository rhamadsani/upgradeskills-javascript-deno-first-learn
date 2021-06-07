// mofs module

import { readJson, writeJson } from "https://deno.land/std@0.97.0/fs/mod.ts";

const jsonObj = await readJson('test.json');

console.log(jsonObj)
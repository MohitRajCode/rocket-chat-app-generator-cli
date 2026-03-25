#!/usr/bin/env node

import { Command } from "commander";
import { generateApp } from "./generator.js";

const program = new Command();

program
  .command("generate <appName>")
  .description("Generate Rocket.Chat App")
  .action((appName) => {
    generateApp(appName);
  });

program.parse();
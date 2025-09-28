#!/usr/bin/env node

const { Command } = require("commander");
const fs = require("fs");
const inquirer = require("inquirer").default;
const dotenv = require("dotenv");

const program = new Command();

program
  .name("env-setup")
  .description("Generate a .env file from .env.example")
  .option("-e, --example <path>", "Path to .env.example", ".env.example")
  .option("-o, --output <path>", "Path to output .env file", ".env")
  .action(async ({ example: examplePath, output: outputPath } = {}) => {
    if (!fs.existsSync(examplePath)) {
      console.error(`❌ Example file not found: ${examplePath}`);

      process.exit(1);
    };

    const exampleContent = fs.readFileSync(examplePath, "utf8");
    const parsed = dotenv.parse(exampleContent);

    const questions = Object.keys(parsed).map((key) => ({
      type: "input",
      name: key,
      message: `Enter value for ${key}:`,
      default: parsed[key] || ""
    }));

    const answers = await inquirer.prompt(questions);

    const envContent = Object.entries(answers)
      .map(([key, value]) => {
        if (!/^[a-zA-Z0-9_.-]*$/.test(value)) {
          value = `"${value.replace(/"/g, '\\"')}"`;
        };

        return `${key}=${value}`;
      })
      .join("\n");

    fs.writeFileSync(outputPath, envContent, "utf8");

    console.log(`✅ ${outputPath} created successfully!`);
  });

program.parse(process.argv);
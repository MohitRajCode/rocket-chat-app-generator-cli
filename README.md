#  Rocket.Chat App Generator CLI

>> This is a prototype CLI tool built as part of a GSoC proposal for Rocket.Chat.

---

##  Problem
>>Building Rocket.Chat apps requires understanding complex architecture and writing repetitive boilerplate code for commands, APIs, UI interactions, and integrations. This increases development time and creates a high entry barrier for developers.

---

##  Solution
>>This project provides a CLI tool that generates a valid Rocket.Chat app structure using a template-based approach. It ensures developers start with a correct, consistent, and extensible foundation, reducing setup time and minimizing errors.

---

##  Features
- CLI-based app generation  
- Template-driven scaffolding  
- Dynamic placeholder replacement  
- Clean and modular project structure  
- Easily extendable for additional features (commands, APIs, UI)

---

##  Usage

### 1. Install dependencies
npm install

2. Link CLI globally
npm link

3. Generate a new app
rc-app generate MyApp

# Output Folder Structure

output/MyApp/
├── src/
│   └── App.ts
└── app.json


# Rocket.Chat App Architecture

The generated App.ts file represents the foundational entry point of a Rocket.Chat App. When deployed, such apps act as extensions that enhance the functionality of a Rocket.Chat workspace.

Rocket.Chat Apps support key capabilities such as:

Slash commands
External API integrations
Interactive UI components
Event listeners
Custom API endpoints

The generated class includes a minimal initialize() method, which serves as the starting point of the app lifecycle.

This minimal structure is intentional, providing a clean and valid foundation that can be extended with features like commands, event handlers, and integrations.

In this project, the CLI generator automates the creation of this foundational structure, ensuring that developers start with a correct, consistent, and extensible Rocket.Chat app setup.

# Overall Project Structure
rc-app-cli/
│
├── src/
│   ├── cli.js
│   └── generator.js
│
├── templates/
│   └── base/
│       ├── src/
│       │   └── App.ts
│       └── app.json
│
├── output/
├── package.json
└── README.md



# How It Works
1.User runs the CLI command:
rc-app generate MyApp

2.The CLI reads template files from /templates

3.Placeholders are replaced dynamically:
{{AppName}}
{{appId}}

4.A complete Rocket.Chat app structure is generated inside /output


# VISION
The CLI reads template files from /templates
Placeholders are replaced dynamically:
{{AppName}}
{{appId}}
A complete Rocket.Chat app structure is generated inside /output

# Future Enhancements
Slash command generator
API endpoint generator
AI-assisted code generation
Test generation and validation system
Deployment automation

# CONCLUSION

This CLI tool simplifies Rocket.Chat app development by automating the initial setup and providing a scalable foundation. By combining structured templates with future AI integration, it aims to make app development faster, easier, and more accessible.
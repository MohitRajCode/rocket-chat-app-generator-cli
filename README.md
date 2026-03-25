# 🚀 Rocket.Chat App Generator CLI

> 🚧 This is a prototype CLI tool built as part of a GSoC proposal for Rocket.Chat.

---

## 🧩 Problem

Building Rocket.Chat apps requires understanding complex architecture and writing repetitive boilerplate code for commands, APIs, UI interactions, and integrations. This increases development time and creates a high entry barrier for developers.

---

## 💡 Solution

This project provides a CLI tool that generates a valid Rocket.Chat app structure using a template-based approach. It ensures developers start with a correct, consistent, and extensible foundation, reducing setup time and minimizing errors.

---

## ✨ Features

* CLI-based app generation
* Template-driven scaffolding
* Dynamic placeholder replacement
* Clean and modular project structure
* Easily extendable for additional features (commands, APIs, UI)

---

## ⚙️ Usage

### 1. Install dependencies

```bash
npm install
```

### 2. Link CLI globally

```bash
npm link
```

### 3. Generate a new app

```bash
rc-app generate MyApp
```

---

## 🎬 Example

```bash
rc-app generate HelloApp
```

Generates a ready-to-use Rocket.Chat app inside `/output/HelloApp`

---

## 📁 Output

```bash
output/MyApp/
├── src/
│   └── App.ts
└── app.json
```

---

## 🧠 Rocket.Chat App Architecture

The generated `App.ts` file represents the foundational entry point of a Rocket.Chat App. When deployed, such apps act as extensions that enhance the functionality of a Rocket.Chat workspace.

Rocket.Chat Apps support key capabilities such as:

* Slash commands
* External API integrations
* Interactive UI components
* Event listeners
* Custom API endpoints

The generated class includes a minimal `initialize()` method, which serves as the starting point of the app lifecycle.

This minimal structure is intentional, providing a clean and valid foundation that can be extended with features like commands, event handlers, and integrations.

In this project, the CLI generator automates the creation of this foundational structure, ensuring that developers start with a correct, consistent, and extensible Rocket.Chat app setup.

---

## 🏗️ Project Structure

```bash
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
```

---

## ⚙️ How It Works

1. User runs the CLI command:

```bash
rc-app generate MyApp
```

2. The CLI reads template files from `/templates`

3. Placeholders are replaced dynamically:

* `{{AppName}}`
* `{{appId}}`

4. A complete Rocket.Chat app structure is generated inside `/output`

---

## 🚀 Vision

This project aims to build an intelligent developer tool for Rocket.Chat Apps using a hybrid approach:

* Templates → Ensure reliability and correct structure
* AI (LLMs) → Provide flexibility and generate custom logic

This approach improves development speed, code consistency, and developer experience.

---

## 📌 Future Enhancements

* Slash command generator
* API endpoint generator
* AI-assisted code generation
* Test generation and validation system
* Deployment automation

---

## 🤝 Contribution

This project is being developed as part of a GSoC proposal to improve the Rocket.Chat developer ecosystem. Feedback and suggestions are welcome!

---

## 🏁 Conclusion

This CLI tool simplifies Rocket.Chat app development by automating the initial setup and providing a scalable foundation. By combining structured templates with future AI integration, it aims to make app development faster, easier, and more accessible.

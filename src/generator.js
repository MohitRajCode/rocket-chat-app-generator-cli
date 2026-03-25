import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function generateApp(appName) {
    const templateDir = path.join(__dirname, "..", "templates", "base");
    const outputDir = path.join(process.cwd(), "output", appName);

    // Create folders
    fs.ensureDirSync(path.join(outputDir, "src"));

    // ========================
    // Generate App.ts
    // ========================
    let appTemplate = fs.readFileSync(
        path.join(templateDir, "src", "App.ts"),
        "utf-8"
    );

    appTemplate = appTemplate
        .replace(/{{\s*AppName\s*}}/g, appName)
        .replace(/{{\s*appId\s*}}/g, appName.toLowerCase());

    fs.writeFileSync(
        path.join(outputDir, "src", "App.ts"),
        appTemplate
    );

    // ========================
    // Generate app.json
    // ========================
    let appJson = fs.readFileSync(
        path.join(templateDir, "app.json"),
        "utf-8"
    );

    appJson = appJson
        .replace(/{{\s*AppName\s*}}/g, appName)
        .replace(/{{\s*appId\s*}}/g, appName.toLowerCase());

    fs.writeFileSync(
        path.join(outputDir, "app.json"),
        appJson
    );

    console.log(`✅ ${appName} generated successfully`);
}
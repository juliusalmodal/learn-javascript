# Local JavaScript Development Setup

This guide covers how to set up your local environment for running and developing JavaScript applications.

## Prerequisites

- A computer with Windows, macOS, or Linux
- Internet connection for downloads

## Installing Node.js

Node.js is the runtime that allows you to run JavaScript outside of a web browser.

### Option 1: Official Installer (Recommended)
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS (Long Term Support) version for your operating system
3. Run the installer and follow the setup wizard
4. Restart your terminal/command prompt if necessary

### Option 2: Using Package Managers

#### Windows (Chocolatey)
```powershell
choco install nodejs
```

#### macOS (Homebrew)
```bash
brew install node
```

#### Linux (Ubuntu/Debian)
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## Verifying Installation

After installation, open a terminal and run:

```bash
node --version
npm --version
```

You should see version numbers for both Node.js and npm (Node Package Manager).

## Running JavaScript Files

### Basic Execution
1. Create a JavaScript file (e.g., `hello.js`):
   ```javascript
   console.log("Hello, JavaScript!");
   ```

2. Run it with Node.js:
   ```bash
   node hello.js
   ```

### Interactive Mode (REPL)
Start an interactive JavaScript session:
```bash
node
```
Type JavaScript code directly and press Enter. Type `.exit` to quit.

## Using npm (Node Package Manager)

npm comes bundled with Node.js and manages packages/libraries.

### Initializing a Project
```bash
mkdir my-project
cd my-project
npm init -y  # Creates package.json with default settings
```

### Installing Packages
```bash
# Install a package locally (saves to node_modules)
npm install lodash

# Install a package globally (available system-wide)
npm install -g create-react-app

# Install for development only
npm install --save-dev jest
```

### Running Scripts
Add scripts to your `package.json`:
```json
{
  "scripts": {
    "start": "node app.js",
    "test": "jest",
    "dev": "nodemon app.js"
  }
}
```

Run them with:
```bash
npm start
npm test
npm run dev
```

## Development Tools

### Code Editors
- **Visual Studio Code** (recommended): Free, excellent JavaScript support
- **Sublime Text**: Lightweight alternative
- **WebStorm**: Full-featured IDE (paid)

### Additional Tools
- **nodemon**: Automatically restarts your app on file changes
  ```bash
  npm install -g nodemon
  nodemon app.js
  ```

- **ESLint**: Code linting
  ```bash
  npm install --save-dev eslint
  npx eslint --init
  ```

## Running the Examples in This Repository

All JavaScript files in this repository can be run with Node.js:

```bash
# From the repository root
node basics/variables.js
node basics/functions.js
node intermediate/async-promises.js
```

## Troubleshooting

### Common Issues
- **"node is not recognized"**: Restart your terminal or check your PATH
- **Permission errors**: On macOS/Linux, you might need `sudo` for global installs
- **Old Node version**: Update using the installer or package manager

### Checking Your Setup
Run this command to verify everything works:
```bash
node -e "console.log('Node.js is working!')"
```

## Next Steps
- Explore the `basics/`, `intermediate/`, and `advanced/` folders
- Try building a simple Node.js application
- Learn about npm packages and modules

For more advanced setups, consider using nvm (Node Version Manager) to manage multiple Node.js versions.
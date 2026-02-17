# Running JavaScript in the Browser

This guide explains how to run JavaScript code in web browsers and create interactive web pages.

## Browser JavaScript vs Node.js

- **Browser JavaScript**: Runs in web browsers, interacts with HTML/CSS, handles user events
- **Node.js**: Runs on servers, handles file system, networking, etc.

Both use the same core JavaScript language but have different APIs.

## Basic HTML Structure

Every web page needs HTML. JavaScript is added using `<script>` tags:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My JavaScript Page</title>
</head>
<body>
    <h1>Hello World</h1>

    <!-- JavaScript goes here -->
    <script>
        console.log("Hello from the browser!");
    </script>
</body>
</html>
```

## Ways to Include JavaScript

### 1. Inline Scripts (in HTML)
```html
<script>
    // JavaScript code here
    alert("Hello!");
</script>
```

### 2. External Files (Recommended)
```html
<script src="script.js"></script>
```

Create `script.js` in the same folder:
```javascript
// script.js
console.log("Hello from external file!");
```

### 3. Script Placement
- **In `<head>`**: Loads before page content (use for libraries)
- **Before `</body>`**: Loads after content (recommended for performance)
- **Async/Defer attributes**: Control loading timing

```html
<!-- Async: Load in parallel, execute when ready -->
<script async src="script.js"></script>

<!-- Defer: Load in parallel, execute after HTML parsing -->
<script defer src="script.js"></script>
```

## Browser Developer Tools

### Opening Console
- **Chrome/Edge**: Press F12 or Ctrl+Shift+I, go to Console tab
- **Firefox**: Press F12 or Ctrl+Shift+K
- **Safari**: Enable Developer menu, then Develop → Show Web Inspector

### Using Console
```javascript
// Try these in the browser console
console.log("Hello!");
console.error("Error message");
console.warn("Warning");
console.table([{name: "John", age: 30}, {name: "Jane", age: 25}]);
```

## DOM Manipulation

JavaScript can interact with HTML elements:

```html
<!DOCTYPE html>
<html>
<body>
    <h1 id="title">Hello</h1>
    <button onclick="changeText()">Click me</button>

    <script>
        function changeText() {
            document.getElementById("title").textContent = "Text changed!";
        }

        // Or using modern syntax
        document.querySelector("#title").style.color = "blue";
    </script>
</body>
</html>
```

## Running Your Files

### Method 1: Open Directly in Browser
1. Save your HTML file (e.g., `index.html`)
2. Double-click the file or drag it into your browser
3. Open Developer Tools to see console output

### Method 2: Local Web Server (Recommended)
For better development experience, use a local server:

#### Using Node.js (http-server)
```bash
npm install -g http-server
cd your-project-folder
http-server
```
Then visit `http://localhost:8080`

#### Using Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then visit `http://localhost:8000`

#### Using VS Code Extension
- Install "Live Server" extension
- Right-click HTML file → "Open with Live Server"

## Common Browser APIs

### Alerts and Prompts
```javascript
alert("This is an alert!");
const name = prompt("What's your name?");
confirm("Are you sure?");
```

### Timers
```javascript
// Execute after 1 second
setTimeout(() => console.log("Delayed!"), 1000);

// Execute every 2 seconds
setInterval(() => console.log("Repeated!"), 2000);
```

### Local Storage
```javascript
// Store data
localStorage.setItem("name", "John");

// Retrieve data
const name = localStorage.getItem("name");
console.log(name); // "John"
```

## Debugging Tips

1. **Use console.log()** extensively
2. **Check for errors** in the Console tab
3. **Use breakpoints** in Sources tab
4. **Inspect elements** with the Elements tab
5. **Network tab** for AJAX requests

## Security Considerations

- **Same-Origin Policy**: Scripts can only access resources from the same domain
- **Content Security Policy (CSP)**: Restricts script sources for security
- **HTTPS**: Always use for production sites

## Next Steps

- Learn about DOM events (click, submit, etc.)
- Explore modern frameworks (React, Vue)
- Study AJAX/Fetch API for server communication
- Practice with browser-specific APIs (Geolocation, Web Storage, etc.)

## Example Project Structure

```
your-project/
├── index.html
├── script.js
├── styles.css
└── assets/
    └── images/
```

This setup allows you to build interactive web applications using JavaScript in the browser.
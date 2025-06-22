# DOM Practice with JavaScript and Tailwind CSS

This is a simple interactive web project designed to **practice DOM manipulation** using vanilla JavaScript. It also uses **Tailwind CSS** for basic styling and layout.

---

## ✅ What This Project Demonstrates

- Selecting elements by **ID** and **class**
- Updating text and HTML content using `.textContent` and `.innerHTML`
- Changing styles dynamically with `.style`
- Adding/removing CSS classes with `.classList`
- Capturing and using **user input**
- Displaying interactive **alerts**

---

## What Happens When You Click "Run Practice"

When the **"Run Practice"** button is clicked, the JavaScript function `runPractice()` runs and does the following:

1. **Selects the heading** with `id="mainHeading"` and:
   - Changes its text to `"Hello from JavaScript!"`
   - Changes its color to green

2. **Finds the first paragraph** with class `"info"` and:
   - Replaces its content with italic text: _First Paragraph updated!_
   - Adds a `highlight` class to it

3. **Selects all paragraphs** with class `"info"` and:
   - Removes the class `text-gray-700`
   - Adds the class `text-blue-500` (changes text color)

4. **Reads the text** the user typed into the `<input>` field and:
   - Shows it in a browser alert box using `alert()`

---

## Project Structure

<pre>
project-root/
├── dist/
│   └── output.css           # Compiled Tailwind CSS
├── node_modules/            # Installed packages
├── src/
│   └── input.css            # Tailwind directives (@tailwind base, etc.)
├── .gitignore               # Ignores node_modules and system files
├── index.html               # Main HTML structure and layout
├── script.js                # JavaScript for DOM manipulation
├── postcss.config.js        # PostCSS setup
├── tailwind.config.js       # Tailwind content/config setup
├── package.json             # Project dependencies and scripts
├── package-lock.json        # Lockfile for exact package versions
</pre>

---

## Technologies Used

- **HTML5**
- **Tailwind CSS** (for layout and styling)
- **Vanilla JavaScript** (for all interactivity)

---

## How to Use

1. Open `index.html` in a browser
2. Type something in the input box
3. Click the **Run Practice** button
4. Watch the content and styles change, and see your input in an alert!

---

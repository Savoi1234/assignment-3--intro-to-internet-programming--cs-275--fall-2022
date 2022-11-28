# Fall 2022 Intro to Internet Programming — Assignment 3

☞ **Plagiarism in any form will result in failing the entire course. You’ve been duly warned.** ☜
* **Do not start this project until you have read these instructions carefully.**
* **Read these instructions repeatedly until you understand, then begin your project. If something is not clear, ask.**

---

## ❖・Introduction・❖
Create a *single* web page consisting of HTML, CSS, and JavaScript that creates a carousel of images sourced from a local file system using JSONP, much like how a full-stack app might read data from a database. A 26-second video of what’s required for this project is available from [http://vanegas.cs.hartford.edu/uploads/videos/cs-275/working-with-jsonp.mp4](http://vanegas.cs.hartford.edu/uploads/videos/cs-275/working-with-jsonp.mp4).

You will need to implement from scratch development and production Gulp tracks for this project. Running `gulp serve` should invoke the development track; running `gulp build` should invoke the production track.

**Note**: _You may **only** work within the confines of the included scaffold._

---

## ❖・Rules・❖
Before you begin, **update Node, NPM, ESLint, and Stylelint**

### General
* Do not alter the scaffold of this project, especially the `.gitignore` files. Should you need to defeat this rule, explain so in a comment in the code, and also in a commit message.
* The user interface of your project should approximate as close as possible the rendering in the video. Visual rules are defined under the **CSS** section below.
* Do not resize the images in the `img` folder.
* Do not add/delete images to/from the `img` folder.
* There should not be any scroll bars on the page, either horizontal or vertical.
* Author your code according to the included `.editorconfig` rules. (**Do not alter**.)
* Validate/lint JavaScript according to the included `.eslintrc` rules. (**Do not alter**.)
* Validate/lint CSS according to the included `.stylelintrc.json` rules. (**Do not alter**.)

### HTML
* Do not edit `index.html`. All the HTML required for this project is already in place. Any DOM manipulations _must_ take place via JavaScript.

### CSS
* No CSS libraries may be used.
* Use *only* the Open Sans typeface, which is included in the `head` element of `index.html`.
* Keep the default font size to 16 pixels.
* Set the content leading to `1.4`.
* Set the font size of `h1` to 32 pixels.
* Set the leading of the `h1` element to `38px`.
* Set the width of each slide in your carousel to `640` pixels, with left/right padding of `20px`.
* Place *all* your styles in `main.css`.

### JavaScript
* No JavaScript libraries may be used.
* The included `data.json` file is not in JSONP format. Therefore, you will need to make a slight edit to the file. **Note**: Your edit does *not* require changing any of the properties in `data.json`.
* Place *all* your JavaScript in `main.js`.
* Your code should not generate any ESLint errors, except warnings for line lengths.
* Use backticks exclusively for all variable interpolation and string manipulation. Should you need to defeat this rule, explain so in a comment.
* Avoid function hoisting; use only arrow functions. Should you need to defeat this rule, explain so in a comment.
* No variable hoisting; only `let` declarations. Again, should you need to defeat this rule, explain so in a comment.

### Task Running with Gulp
As mentioned in the introduction, you must employ Gulp as the task runner with workflows for development and production.

#### Development
* Your CSS must validate using the enclosed `.stylelintrc.json` file.
* Your JavaScript must validate using the included `.eslintrc.json` file.
* Your JavaScript must be transpiled to ES5.
* The development, or dev, track must lint/validate CSS and JavaScript each time you save a `.css` or `.js` file.
* Additionally, the development track must also refresh the browser when any of these files have changed.
* `gulp serve` triggers the dev track.

#### Production
* The production, or prod, track must compress all the aforementioned languages. *Do not lint them*, as they have already been linted in the development track.
* `gulp build` should load the entire production environment into a folder called `prod`, which must be fully self-sufficient and contain all the required files — compressed and linted — of the web page. **Note**: Check that your entire project works as a standalone web app in the `prod` folder. You can do so by moving the `prod` folder elsewhere in your file system before submitting, then launching `index.html`.

---

## ❖・Due・❖
Tuesday, 29 November 2022, at 10:00 PM.

---

## ❖・Grading・❖
| Item                                                      | Points |
| --------------------------------------------------------- | :----: |
| *Fully-implemented assignment according to directions*    | `25`   |
| *Overall code quality across Gulp, JavaScript, and CSS*   | `25`   |
| *Project implemented following assignment directions*     | `25`   |
| *Full Gulp development and production scaffolds in place* | `25`   |

**Tip**: To ensure the files required by your project are not being ignored, you’re strongly advised to clone your repo into a different folder on your computer, or to a different computer altogether.

---

## ❖・Submission・❖
You will need to issue a pull request back into the original repo, the one from which your fork was created for this project. See the **Issuing Pull Requests** section of [this site](http://code-warrior.github.io/tutorials/git/github/index.html) for help on how to submit your assignment.

**Note**: This assignment may *only* be submitted via GitHub. **No other form of submission will be accepted**.

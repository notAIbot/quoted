# CLAUDE.md — Project Brain

## North Star
I'm building a quote collection for community so that we can save and revisit quotes that inspire or resonate with everyone.

## Current Milestone
- [x] Hello World (repo working, can push to GitHub) ✅
- [x] MVP (live on GitHub Pages with a working quote collection) ✅

## Tech Stack
- HTML/CSS/JavaScript (vanilla, no framework)
- Hosted on GitHub Pages
- Version control with Git/GitHub

## How to Run
- Local: Open index.html in browser
- Live: https://notaibot.github.io/launchpad/

## Current Status - WHERE WE STOPPED (Dec 30, 2024 - Session 4)
**Completed:**
- ✅ Step 1-3: Environment setup complete
- ✅ Step 4: Project brainstormed - Quote Collection
- ✅ Step 5: GitHub setup and first repository created
- ✅ Step 6: Hello World webpage created with Einstein quote
- ✅ Step 7: GitHub Pages enabled - Site is LIVE!
- ✅ Step 8: Added interactive "Add Quote" form with JavaScript
- ✅ Step 9: Updated project documentation (README.md and CLAUDE.md)
- ✅ Step 10: Separated data from display (created data.js with 5 initial quotes)
- ✅ Step 11: Added localStorage - quotes now persist across page refreshes!
- ✅ Step 12: Added delete button - can remove unwanted quotes
- ✅ Step 13: Added random quote button with "Show Another Random Quote" feature
- ✅ Created personal GitHub account (notAIbot)
- ✅ Cleaned all personal information from repository
- ✅ Site verified working on phone
- ✅ All 3 planned MVP features complete!

**All MVP Features Complete!**
- ✅ localStorage persistence
- ✅ Delete quotes functionality
- ✅ Random quote display

## Next 3 Steps
1. Push random quote feature to GitHub Pages
2. Consider additional features (search, categories, favorites, etc.)
3. Get feedback from community on what features to add next

## Decisions Made
- Starting with a simple static site (no database) - easy to deploy and maintain
- Using vanilla JavaScript (no frameworks) - keeps it simple for learning
- Focusing on display first, will add features like search/categories later

## What I Learned

**Dec 30, 2024:**
- Implemented localStorage for browser data persistence
- Learned how localStorage works:
  - `localStorage.setItem()` to save data
  - `localStorage.getItem()` to retrieve data
  - Data persists even after closing browser
  - Must convert arrays/objects to JSON strings for storage
  - Use `JSON.stringify()` to convert to string
  - Use `JSON.parse()` to convert back to objects
- Added delete functionality to dynamically created elements
- Learned about:
  - `data-*` attributes to store custom data in HTML elements
  - `querySelectorAll()` to select multiple elements
  - `splice()` method to remove items from arrays
  - Event listeners on dynamically created buttons
  - `parseInt()` to convert strings to numbers
- Combined multiple features: delete action triggers save to localStorage and re-render
- Quotes now persist permanently in browser storage
- Implemented random quote feature with button state management
- Learned about generating random numbers:
  - `Math.random()` generates a number between 0 and 1
  - `Math.floor()` rounds down to get whole numbers
  - Combined to pick random array indices
- Learned about UI state management:
  - Showing/hiding buttons dynamically with `.style.display`
  - Creating different button flows (initial vs. active state)
  - Managing multiple buttons that work together
- Created smooth user experience with "Show Another Random Quote" button
- Completed all 3 planned MVP features!

**Dec 29, 2024:**
- Built my first interactive JavaScript feature - an "Add Quote" form
- Learned how HTML forms work (form, textarea, input elements)
- Learned how to use JavaScript to:
  - Get values from form inputs using `.value`
  - Prevent page reload with `e.preventDefault()`
  - Listen for events with `addEventListener`
  - Store data in JavaScript arrays using `push()`
  - Loop through arrays with `forEach()`
  - Create HTML elements dynamically with `createElement()`
  - Add elements to the page with `appendChild()`
- Learned about CSS styling for forms (focus states, hover effects)
- Understood the importance of code comments for learning
- Learned about git remotes and upstream branches
- Used `git push --set-upstream` to link local branch to remote
- Successfully pushed changes and saw them go live on GitHub Pages

**Dec 26, 2024:**
- Created personal GitHub account (notAIbot) for learning projects
- Authenticated GitHub CLI with personal account using `gh auth login`
- Created public repository under personal account
- Pushed code to new repository using git remotes
- Enabled GitHub Pages via GitHub API
- Site is now LIVE at: https://notaibot.github.io/launchpad/
- Verified site works on phone - it's accessible from anywhere!
- Learned about git remotes (can have multiple: origin, personal, etc.)
- Enterprise GitHub accounts have restrictions on public repos and GitHub Pages
- Successfully separated personal learning projects from enterprise account
- Cleaned all personal info from repository:
  - Rewrote git commit history using git filter-branch
  - Removed enterprise remote references
  - Updated global git config to use personal identity
  - Used git reflog expire and garbage collection to permanently remove old commits
- Learned about git filter-branch, reflog, and garbage collection
- Understanding the difference between local git config vs global config

**Dec 25, 2024:**
- Completed environment setup (Node.js, Claude Code, VS Code, Git, GitHub CLI)
- Created Projects folder structure
- Learned basic terminal commands
- Defined project goal and North Star statement
- Set up Git repository and made first commit
- Pushed code to GitHub successfully
- Learned what commits are (snapshots of project state)
- Created first HTML webpage with CSS styling
- Added first quote (Einstein) to the page
- Opened webpage locally in browser

## Known Issues
- None currently! localStorage and delete features are working perfectly.

## Project Scope (MVP)
- Display a collection of quotes with authors
- Clean, readable design
- Easy to add new quotes by editing a data file

## Future Ideas (Not for MVP)
- Search/filter by author or keyword
- Random quote button
- Categories/tags
- Favorite quotes feature

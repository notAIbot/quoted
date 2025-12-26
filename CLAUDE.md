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

## Current Status - WHERE WE STOPPED (Dec 26, 2024 - Session 2)
**Completed:**
- ✅ Step 1-3: Environment setup complete
- ✅ Step 4: Project brainstormed - Quote Collection
- ✅ Step 5: GitHub setup and first repository created
- ✅ Step 6: Hello World webpage created with Einstein quote
- ✅ Step 7: GitHub Pages enabled - Site is LIVE!
- ✅ Created personal GitHub account (notAIbot)
- ✅ Cleaned all personal information from repository
- ✅ Site verified working on phone

**Ready to Start:**
- 🔄 Step 8: Add more quotes and interactive features (NEXT STEP)
  - Options: Add more quotes OR add interactive JavaScript feature (random quote button, etc.)

## Next 3 Steps
1. Verify site is accessible from phone
2. Add more quotes to the collection
3. Add interactive features (search, categories, etc.)

## Decisions Made
- Starting with a simple static site (no database) - easy to deploy and maintain
- Using vanilla JavaScript (no frameworks) - keeps it simple for learning
- Focusing on display first, will add features like search/categories later

## What I Learned

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
- None yet - just getting started!

## Project Scope (MVP)
- Display a collection of quotes with authors
- Clean, readable design
- Easy to add new quotes by editing a data file

## Future Ideas (Not for MVP)
- Search/filter by author or keyword
- Random quote button
- Categories/tags
- Favorite quotes feature

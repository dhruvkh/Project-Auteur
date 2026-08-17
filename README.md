# Auteur Global

Marketing website for Auteur Global, a creative syndicate for comic-graphic storytelling (Qomix Classics, Qanvas).

Built with React 19, Vite, React Router, Framer Motion, and Tailwind CSS.

## Run Locally

**Prerequisites:** Node.js 18+ and npm

1. Install dependencies:
   ```
   npm install
   ```
2. Run the dev server:
   ```
   npm run dev
   ```
   The app will be available at http://localhost:3000

## Other Scripts

- Build for production:
  ```
  npm run build
  ```
- Preview the production build locally:
  ```
  npm run preview
  ```

## Pushing to the Main Repository

The repository's remote is `origin` → `https://github.com/dhruvkh/Project-Auteur.git`, and the primary branch is `main`.

1. Check what's changed:
   ```
   git status
   git diff
   ```
2. Stage and commit your changes:
   ```
   git add <file1> <file2>
   git commit -m "Describe your change"
   ```
3. Pull the latest changes to avoid conflicts:
   ```
   git pull origin main
   ```
4. Push to the main repo:
   ```
   git push origin main
   ```

If you're working on a feature branch instead of committing directly to `main`:
```
git checkout -b my-feature-branch
# ...make changes, commit...
git push origin my-feature-branch
```
Then open a pull request into `main` on GitHub.

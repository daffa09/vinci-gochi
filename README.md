<!-- portfolio -->
<!-- slug: vincigochi -->
<!-- title: VinciGochi -->
<!-- description: VinciGochi Game -->
<!-- image: https://github.com/user-attachments/assets/ff7ae80a-6f5a-46dc-981a-3e255a77d3bd -->
<!-- tags: html, css, javascript, game -->

# VinciGochi

<img width="1550" height="823" alt="image" src="https://github.com/user-attachments/assets/ff7ae80a-6f5a-46dc-981a-3e255a77d3bd" />

This is the VinciGochi Project, created by students of Pancasila University as part of the requirements for the Web Design course.
The project members are as follows:

- [Daffa Fathan](https://github.com/daffa09) (4522210082)
- [Fathan Rachel](https://github.com/Fathanrachel) (4522210071)
- [Antonius Valentino](https://github.com/AtroxMedaTic) (4522210109)
- [Firja Rakha](https://github.com/FirjaRakha) (4522210072)

## About The Project

The name of this project is VinciGochi, a combination of DaVinci and Tamagotchi.
DaVinci is taken from Leonardo da Vinci — a world-renowned artist, inventor, and scientist — while Tamagotchi refers to the iconic virtual pet toy that became massively popular in the 90s.

## 🚀 Getting Started

- clone this repository
  ```php
  git clone https://github.com/daffa09/vinci-gochi.git
  ```

- Run the project:
  Simply open index.html in your browser.

- Optional:
If you're using a local server or planning to deploy it to hosting, make sure the src/ folder and the manifest files are properly configured so the game works smoothly as a PWA.

## 🚀 Technologies & Project Structure

### Main technologies:
- HTML
- JavaScript

### Folder structure:
```php
/src
.editorconfig
.gitignore
about.html
fallback.json
index.html
manifest.json
serviceworker.js
```
This project is packaged as a Progressive Web App (PWA) — see the release: PWA VinchiGochi (Latest, Sep 12 2024).

## 🎮 Key Features

- Fully interactive virtual pet (feed, play, rest)
- Real-time pet status indicators
- Responsive and mobile-friendly UI
- Offline support via Service Worker + Manifest

## 🛠 Development & Contribution

- The master branch serves as the stable release.
- Create a new branch for new features or bug fixes, then open a Pull Request when ready.
- Make sure any changes include clear documentation and update the README when needed.
- Bug reports or feature requests can be submitted through the Issues tab in the repository.

## 📦 Build & Deployment

Because this is a static HTML/JS project, it can be deployed easily on any static hosting service (GitHub Pages, Vercel, Netlify, etc.).
To ensure PWA functionality works correctly:
- Keep manifest.json and serviceworker.js at the project root.
- Ensure fallback.json is configured to handle offline states.

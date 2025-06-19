### To-do

- AOS omzetten naar Framer Motion
- Category tags fixen op projectcards


```
reactPortfolio
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ assets
│     └─ images
├─ README.md
├─ src
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ icons
│  │  │  ├─ devicon--figma.svg
│  │  │  ├─ devicon--tailwindcss.svg
│  │  │  ├─ devicon--typescript.svg
│  │  │  ├─ favico.svg
│  │  │  ├─ Github-desktop-logo-symbol.svg.png
│  │  │  ├─ htmlcss.svg
│  │  │  ├─ logos--adobe-after-effects.svg
│  │  │  ├─ logos--adobe-illustrator.svg
│  │  │  ├─ logos--adobe-photoshop.svg
│  │  │  ├─ logos--adobe-premiere.svg
│  │  │  ├─ logos--github-icon.svg
│  │  │  ├─ logos--javascript.svg
│  │  │  └─ logos--miro-icon.svg
│  │  └─ images
│  │     ├─ cambridge.jpg
│  │     ├─ external-link.svg
│  │     ├─ propedeuse.jpg
│  │     └─ PWSprijs.jpg
│  ├─ components
│  │  ├─ footer.tsx
│  │  └─ nav.tsx
│  ├─ css
│  │  ├─ input.css
│  │  └─ tailwindOutput.css
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ about
│  │  │  ├─ about.tsx
│  │  │  └─ components
│  │  │     ├─ certifications.tsx
│  │  │     ├─ introduction.tsx
│  │  │     └─ qualities.tsx
│  │  ├─ home
│  │  │  ├─ components
│  │  │  │  ├─ FeaturedProjects.tsx
│  │  │  │  ├─ Hero.tsx
│  │  │  │  ├─ Roadmap.tsx
│  │  │  │  └─ ToolTiles.tsx
│  │  │  └─ home.tsx
│  │  ├─ projectpage
│  │  │  ├─ components
│  │  │  └─ project.tsx
│  │  ├─ projects
│  │  │  ├─ assets
│  │  │  │  ├─ blendersetup.png
│  │  │  │  ├─ boekenzoeker.png
│  │  │  │  ├─ esotsm.jpg
│  │  │  │  ├─ gameboxd.png
│  │  │  │  ├─ gamescout.png
│  │  │  │  ├─ onyx.png
│  │  │  │  ├─ portfolio1.png
│  │  │  │  ├─ Portfolio2.png
│  │  │  │  ├─ rhythmrain.png
│  │  │  │  ├─ userjourney.png
│  │  │  │  └─ whackamole.png
│  │  │  ├─ components
│  │  │  │  ├─ controls.tsx
│  │  │  │  ├─ projectcard.tsx
│  │  │  │  └─ projectdata.tsx
│  │  │  └─ projectlist.tsx
│  │  └─ projects.zip
│  └─ typescript
│     ├─ backgroundsphere.ts
│     ├─ themeselector.ts
│     └─ vite-env.d.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```
```
reactPortfolio
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ assets
├─ README.md
├─ src
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ fonts
│  │  ├─ icons
│  │  │  ├─ devicon--figma.svg
│  │  │  ├─ devicon--tailwindcss.svg
│  │  │  ├─ devicon--typescript.svg
│  │  │  ├─ favico.svg
│  │  │  ├─ Github-desktop-logo-symbol.svg.png
│  │  │  ├─ htmlcss.svg
│  │  │  ├─ logos--adobe-after-effects.svg
│  │  │  ├─ logos--adobe-illustrator.svg
│  │  │  ├─ logos--adobe-photoshop.svg
│  │  │  ├─ logos--adobe-premiere.svg
│  │  │  ├─ logos--github-icon.svg
│  │  │  ├─ logos--javascript.svg
│  │  │  └─ logos--miro-icon.svg
│  │  └─ images
│  │     ├─ cambridge.jpg
│  │     ├─ external-link.svg
│  │     ├─ propedeuse.jpg
│  │     └─ PWSprijs.jpg
│  ├─ components
│  │  ├─ footer.tsx
│  │  └─ nav.tsx
│  ├─ css
│  │  ├─ input.css
│  │  └─ tailwindOutput.css
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ about
│  │  │  ├─ about.tsx
│  │  │  └─ components
│  │  │     ├─ certifications.tsx
│  │  │     ├─ introduction.tsx
│  │  │     └─ qualities.tsx
│  │  ├─ home
│  │  │  ├─ components
│  │  │  │  ├─ FeaturedProjects.tsx
│  │  │  │  ├─ Hero.tsx
│  │  │  │  ├─ Roadmap.tsx
│  │  │  │  └─ ToolTiles.tsx
│  │  │  └─ home.tsx
│  │  └─ projects
│  │     ├─ assets
│  │     │  ├─ blender
│  │     │  │  └─ blendersetup.png
│  │     │  ├─ boekenzoeker
│  │     │  │  └─ boekenzoeker.png
│  │     │  ├─ gameboxd
│  │     │  │  └─ gameboxd.png
│  │     │  ├─ gamescout
│  │     │  │  └─ gamescout.png
│  │     │  ├─ onyx
│  │     │  │  └─ onyx.png
│  │     │  ├─ personalprojects
│  │     │  │  └─ esotsm.jpg
│  │     │  ├─ porfolio2
│  │     │  │  └─ Portfolio2.png
│  │     │  ├─ portfolio1
│  │     │  │  └─ portfolio1.png
│  │     │  ├─ rhythmrain
│  │     │  │  └─ rhythmrain.png
│  │     │  ├─ userjourney
│  │     │  │  └─ userjourney.png
│  │     │  └─ whackamole
│  │     │     └─ whackamole.png
│  │     ├─ components
│  │     │  ├─ controls.tsx
│  │     │  ├─ projectcard.tsx
│  │     │  └─ projectdata.tsx
│  │     ├─ project.tsx
│  │     └─ projectlist.tsx
│  └─ typescript
│     ├─ backgroundsphere.ts
│     ├─ themeselector.ts
│     └─ vite-env.d.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```
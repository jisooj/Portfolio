# Pages
- Home page (/)
  - Tile view
  - Each tile shows up when scrolling down 
- Work (/work)
  - List view of each project with name, image, year, description
  - Clicking each row goes to project page
- Dedicated page for each project (/projects/:projectId)
- About (/about)
  - [x] Name, email
  - [x] About me
  - [x] Experience
  - [x] Education
  - [x] Skills
  - [x] Language
  - [ ] LinkedIn, Instagram (Sticky Icons)

- Menu: Work, About
  - Web view: located at the left
  - Mobile view: located at the top, sticky
- Footer
  - Shows up when the page reaches the bottom
- Final measurement check (gap, margin, padding, font size, etc)
Out of scope:
- Accessibility (/a11y - this will be in v2)
  - Various controls to change font, color, etc. that users can control

# Components
- Tiles for each project in Home page.
  - Tile click -> drill down on the project by ~~popping up a layover view~~ redirecting to project page (/projects/:projectId). 
  - Each tile shows up when scrolling down
- Project page used for displaying more detailed view of each project. Click X will redirect users to where they were before (/ or /work)
- Overwall look and feel of the page (background, font, etc)
- Navigation
- All components should be responsive
- Project list view in Work page
- About page: Name, description, resume, LinkedIn, etc

# Misc TODO
- Favicon
- Logo

---------------------------
# vite project setup

npx create-vite
React
Typescript

npm install
npm run dev

npm install tailwindcss @tailwindcss/vite

npm install gh-pages --save-dev

package.json
<!-- "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
} -->

npm run deploy

Reference
- [Vite project setup](https://www.youtube.com/watch?v=b4i8l73DU6A&list=WL&index=2&ab_channel=PedroTech)
- [Sample portfolio project](https://github.com/lohitkolluri/Portfolio-Website)
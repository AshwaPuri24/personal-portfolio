# Personal Portfolio

Welcome to my personal portfolio! This project showcases my skills, projects, and experience as a Full Stack Developer. Built with modern web technologies, it serves as a platform to highlight my expertise and connect with potential collaborators or employers.

## Features

- **Responsive Design**: Fully responsive and optimized for all devices.
- **Dynamic Sections**:
  - **Hero Section**: Introduction with animated text and social links.
  - **About Me**: Overview of my background and expertise.
  - **Skills**: Visual representation of my technical skills.
  - **Projects**: Showcase of my featured projects with links to GitHub and live demos.
  - **Contact**: A functional contact form to get in touch.
  - **Footer**: Quick links and social media connections.
- **Dark Mode Support**: The design adapts to dark mode for better user experience.
- **Horizontal Scrolling Projects Section**: Smooth scrolling for project cards.

## Technologies Used

- **Frontend**:
  - React.js
  - CSS3 (custom styles for each section)
  - React Icons for visual elements
  - React Type Animation for dynamic text effects
- **Build Tools**:
  - Vite for fast development and optimized builds
- **Linting**:
  - ESLint for code quality and consistency

## Project Structure

```.gitignore
eslint.config.js
index.html
package.json
README.md
vite.config.js
public/
  assets/
    profile-photo.png
    Resume.pdf
src/
  App.jsx
  main.jsx
  components/
    About.jsx
    Contact.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    Projects.jsx
    Skills.jsx
  data/
    projects.js
    skills.js
  Styles/
    About.css
    App.css
    Contact.css
    Footer.css
    Hero.css
    index.css
    Navbar.css
    Projects.css
    Skills.css
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/personal-portfolio.git
   ```

2. Navigate to the project directory:

   ```sh
   cd personal-portfolio
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

### Development

Start the development server:

```sh
npm run dev
```

Visit `http://localhost:5173` in your browser to view the portfolio.

### Build

To create a production build:

```sh
npm run build
```

The build files will be generated in the `dist` directory.

### Preview

To preview the production build:

```sh
npm run preview
```

## Customization

- Update the content in the `src/components` directory to reflect your personal details.
- Replace the assets in the `public/assets` folder with your own images and resume.
- Modify styles in the `src/Styles` directory to match your branding.

## Future Enhancements

- Add backend integration for the contact form.
- Include a blog section for sharing articles and insights.
- Expand the projects section with more detailed case studies.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to explore the portfolio and connect with me for collaboration or opportunities!

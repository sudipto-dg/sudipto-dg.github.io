# Portfolio Website

A modern, responsive portfolio/resume website built with React, TypeScript, and Tailwind CSS. Deployed on GitHub Pages.

## Features

- 🎨 Modern dark theme with gradient accents
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Fast and optimized with Vite
- 🎯 Smooth scroll navigation
- 📄 Resume download functionality
- 📧 Contact form
- 🔗 Social media links

## Sections

- **About**: Personal introduction and hero section
- **Experience**: Work experience timeline
- **Skills**: Technical skills organized by category
- **Education**: Educational background
- **Contact**: Contact form and social links

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- GitHub Actions (for deployment)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sudipto-dg.git
cd sudipto-dg
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Customization

### Update Content

1. **Personal Information**: Edit `src/components/About.tsx`
2. **Experience**: Update the `experiences` array in `src/components/Experience.tsx`
3. **Skills**: Modify the `skills` array in `src/components/Skills.tsx`
4. **Education**: Update the `education` array in `src/components/Education.tsx`
5. **Contact**: Update email and social links in `src/components/Contact.tsx`

### Resume

Replace `public/resume.pdf` with your actual resume PDF file.

### Colors & Styling

Customize colors in `src/index.css` using the `@theme` directive. The current theme uses:
- Dark background: `#0a0a0a`
- Accent colors: Blue to Purple gradient
- Text: Light gray/white

## Deployment to GitHub Pages

This project uses **GitHub Actions** for automatic deployment. Every time you push to the `main` branch, your site will be automatically built and deployed.

### Initial Setup

1. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **"GitHub Actions"** (not "Deploy from a branch")
   - Save

2. **Update Base Path** (if needed):
   - If your repository name is different, update the `base` path in `vite.config.ts`
   - For custom domain, set `base: '/'`

3. **Push to trigger deployment**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

The GitHub Actions workflow will automatically:
- Build your project
- Deploy to GitHub Pages
- Make your site available at `https://sudipto-dg.github.io/`

### Manual Deployment

You can also trigger deployment manually:
- Go to the **Actions** tab in your repository
- Select "Deploy to GitHub Pages" workflow
- Click **"Run workflow"**

### Automatic Deployment

After the initial setup, every push to `main` will automatically deploy your site. No manual steps needed!

## Project Structure

```
sudipto-dg/
├── public/
│   ├── index.html
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── types.ts
├── .github/
│   └── workflows/
│       └── deploy.yml
├── vite.config.ts
└── package.json
```

## License

This project is open source and available under the MIT License.

## Contact

Sudipto Dasgupta - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/sudipto-dg](https://github.com/yourusername/sudipto-dg)

# Architecture Portfolio - Alexandre Dubois

A modern, minimalist portfolio website for an architecture student at ULB (Université Libre de Bruxelles).

## Features

- Clean, architectural design aesthetic
- Fully responsive layout
- Four main pages: Home, Projects, About, Contact
- Grid-based project showcase
- Contact form with social links
- Optimized for portfolio reviews by professors and juries

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Pexels** - Stock images for placeholders

## Project Structure

```
src/
├── components/
│   ├── Layout.jsx         # Main layout with navbar and footer
│   ├── Navbar.jsx         # Navigation component
│   ├── Footer.jsx         # Footer with copyright and social links
│   ├── ProjectCard.jsx    # Reusable project card component
│   └── SectionWrapper.jsx # Container component for consistent spacing
├── pages/
│   ├── Home.jsx          # Homepage with hero and featured projects
│   ├── Projects.jsx      # Full projects grid
│   ├── About.jsx         # About page with biography and skills
│   └── Contact.jsx       # Contact information and form
├── App.jsx               # React Router configuration
├── main.jsx             # Application entry point
└── index.css            # Tailwind CSS imports and base styles
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd project
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## Deploying to Vercel

### Method 1: Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"

### Method 2: Vercel CLI

1. Install Vercel CLI
```bash
npm i -g vercel
```

2. Deploy
```bash
vercel
```

3. Follow the prompts to complete deployment

## Customization

### Updating Personal Information

- **Name**: Search for "Alexandre Dubois" across all files
- **Email**: Update in `src/pages/Contact.jsx`
- **Social Links**: Update URLs in `src/components/Footer.jsx` and `src/pages/Contact.jsx`

### Adding Projects

Edit the `projects` array in `src/pages/Projects.jsx`:

```javascript
{
  id: 1,
  title: 'Your Project Title',
  year: 'Academic Year 2024-2025',
  studio: 'Studio Name',
  image: 'your-image-url'
}
```

### Changing Colors

The design uses a minimal grayscale palette. To customize:

1. Update `tailwind.config.js` for global color changes
2. Modify individual component classes for specific elements

### Adding Your Portfolio PDF

Place your PDF file in the `public/` folder as `portfolio.pdf`, or update the link in `src/pages/Contact.jsx`.

## Design Philosophy

This portfolio follows architectural editorial principles:

- **Typography**: Clean, legible fonts with generous line spacing
- **Layout**: Grid-based with large margins
- **Color**: White/soft gray backgrounds with dark text
- **Interactions**: Subtle hover effects and transitions
- **Images**: High-quality architectural photography from Pexels

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio.

# Quantum Computing Institute Website

A modern, multilingual website for the International Institute for Recovery and Development of Ukraine, specializing in quantum computing research and applications.

## 🌍 Features

- **6 Languages Support**: Ukrainian, English, German, French, Spanish, and Dutch
- **Modern Design**: Built with React, TypeScript, and Tailwind CSS
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Intersection observer-based animations for engaging user experience
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🚀 Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Context API

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd shadcn-ui
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

4. Build for production:
```bash
pnpm run build
```

## 🌐 Available Languages

- 🇺🇦 Ukrainian (uk)
- 🇬🇧 English (en)
- 🇩🇪 German (de)
- 🇫🇷 French (fr)
- 🇪🇸 Spanish (es)
- 🇳🇱 Dutch (nl)

## 📁 Project Structure

```
shadcn-ui/
├── src/
│   ├── components/
│   │   ├── sections/        # Page sections (Hero, About, Services, etc.)
│   │   ├── ui/              # shadcn/ui components
│   │   ├── LanguageSwitcher.tsx
│   │   └── Navigation.tsx
│   ├── contexts/
│   │   └── LanguageContext.tsx
│   ├── hooks/
│   │   └── useIntersectionObserver.ts
│   ├── lib/
│   │   ├── i18n.ts          # Translation files
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── vite.config.ts
```

## 🎨 Customization

### Adding a New Language

1. Add translations to `src/lib/i18n.ts`:
```typescript
export const translations = {
  // ... existing languages
  it: {
    nav: { home: 'Home', ... },
    hero: { title: '...', ... },
    // ... all sections
  }
};
```

2. Update `src/components/LanguageSwitcher.tsx`:
```typescript
const languages = [
  // ... existing languages
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
];
```

### Modifying Sections

All page sections are located in `src/components/sections/`. Each section is a separate component that can be easily modified or replaced.

## 📧 Contact

For inquiries, please contact: eurecoveryeu@gmail.com

## 📄 License

This project is private and proprietary to the International Institute for Recovery and Development of Ukraine.

## 🤝 Contributing

This is a private project. For any suggestions or issues, please contact the development team.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
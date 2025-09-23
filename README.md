# Resume Builder

A modern, professional resume builder built with Next.js 14, React, and Tailwind CSS. Create impressive resumes with multiple templates and export to PDF.

## Features

- 🎨 **4 Professional Templates**: Modern, Classic, Creative, and Minimal designs
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- 📄 **PDF Export**: Download your resume as a high-quality PDF
- ⚡ **Real-time Preview**: See changes instantly as you type
- 🎯 **Complete Sections**: Personal info, experience, education, skills, and projects
- 💾 **Local Storage**: Your data is saved automatically in your browser
- 🎭 **Modern UI**: Clean, intuitive interface with smooth animations

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd resume-builder
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Choose a Template**: Select from 4 professional templates
2. **Fill Your Information**: Add personal details, work experience, education, skills, and projects
3. **Preview in Real-time**: See your resume update instantly
4. **Download PDF**: Export your completed resume as a PDF

## Templates

### Modern Template
- Clean, contemporary design
- Blue accent colors
- Perfect for tech and business roles

### Classic Template
- Traditional professional layout
- Conservative styling
- Ideal for corporate positions

### Creative Template
- Bold, eye-catching design
- Orange/red gradient accents
- Great for creative industries

### Minimal Template
- Simple, elegant layout
- Lots of white space
- Perfect for any industry

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form handling
- **html2canvas** - HTML to canvas conversion
- **jsPDF** - PDF generation
- **Lucide React** - Beautiful icons

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ResumeForm.tsx  # Form component
│   ├── ResumePreview.tsx # Preview component
│   └── TemplateSelector.tsx # Template selector
├── types/              # TypeScript type definitions
│   └── resume.ts       # Resume data types
└── utils/              # Utility functions
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.
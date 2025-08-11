# Zalos - AI Agents for Compliance Automation

## Modern Landing Page for Document Risk Identification & Redaction

### About Zalos

Zalos builds AI agents to automate compliance processes, specifically focusing on **Document Risk Identification & Redaction**. We help organizations identify document risks, mask sensitive data, and automate compliance processes - in minutes, not days.

### Our Solution

- 🔍 **Risk Identification**: Automatically detect sensitive data and compliance risks in documents
- 🛡️ **Data Redaction**: Intelligent masking of sensitive information
- ⚡ **Speed**: Complete compliance processes in minutes instead of days
- 🤖 **AI-Powered**: Advanced machine learning algorithms for accurate detection

## Problems to Solve

### Hidden Costs of Manual Redaction

**Manual redaction increases risks, reduces efficiency, and is impossible to scale**

- **⏰ Wasted Time**: Large document sets take days to accurately process
- **📊 Compliance Risks**: Human process is prone to errors — risking reputations and more  
- **🔗 Poor Oversight**: Audits and disputes become guesswork without strong process control

## Features

### Review Risks at Speed and Scale

**AI-driven risk identification, redaction and compliance - ready to scale with your needs**

- **⚙️ Set Rules**: Configure PII, Company Sensitivities, or custom rules to match your legal framework
- **📊 Prioritize Files**: Surface the most sensitive documents and pages for faster resolution
- **🚩 Flag Risks**: AI-driven detection of context-sensitive risks beyond simple keywords
- **📝 Manipulate Files**: Redact, anonymize, or pseudonymize across Microsoft file formats
- **🔗 Seamless Integrations**: Works natively with SharePoint, secure file transfer, or other integration needs
- **📋 Ensure Auditability**: Log changes, rationale for every redaction, and maintain a full audit trail

### Technical Features

- 📱 Responsive design optimized for all devices
- 🔥 Built with [Next.js](https://nextjs.org) for optimal performance
- 🎨 Modern styling with [Tailwind CSS](https://tailwindcss.com)
- 🎉 Full [TypeScript](https://www.typescriptlang.org) support
- 🤖 SEO optimized with metadata and structured data
- ⚡ Fast loading with code splitting and optimization

## Use Cases

### Purpose-built for High Security

**Protect sensitive data across regulated industries with advanced, compliant anonymization**

#### 📁 Data Subject Access Requests

Automate DSAR fulfilment by finding, extracting, and redacting relevant files while maintaining an audit trail.

#### 🔒 Past Project File Anonymisation

Clean legacy archives for safe re-use in wider organizations or AI pipelines - without risking burying hidden risks.

#### 🔗 Regulatory & Compliance Reviews

Meet internal and external compliance demands with consistent, repeatable anonymisation workflows.

## Development Setup

### 1. Clone and Install

```bash
git clone https://github.com/your-org/getzalos-website.git
cd getzalos-website
pnpm install
```

### 2. Development Server

Start the development server with live reload:

```bash
pnpm dev
```

Open <http://localhost:3000> to view the Zalos landing page.

### 3. Customization

1. **Content**: Update the configuration in `src/config/index.json` to customize the Zalos landing page content
2. **Images**: Add Zalos brand assets to `public/assets/images/` and reference them in the config
3. **Branding**: Modify `tailwind.config.js` to match Zalos brand colors and styling

### 4. Production Deployment

You can deploy locally in production mode:

```bash
pnpm build
pnpm start
```

Or create an optimized static build:

```bash
pnpm build-prod
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── MainHero.tsx    # Hero section
│   ├── Product.tsx     # Product showcase
│   ├── Features.tsx    # Feature highlights
│   ├── UseCases.tsx    # Use case examples
│   ├── Pricing.tsx     # Pricing plans
│   ├── About.tsx       # Company information
│   └── Footer.tsx      # Site footer
├── config/
│   └── index.json      # Content configuration
├── pages/
│   └── index.tsx       # Main landing page
└── styles/
    └── main.css        # Global styles
```

## Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have questions or found a bug.

## Technology Stack

This landing page is built with modern web technologies:

- **Next.js 12** - React framework with static site generation
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **React Scroll** - Navigation scrolling

## License

Licensed under the MIT License, Copyright © 2024 Zalos

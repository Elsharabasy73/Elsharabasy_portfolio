import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-5 h-5' }) => {
  const normalized = name.toLowerCase();

  // JavaScript
  if (normalized.includes('javascript') || normalized === 'js') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630" className={className}>
        <rect width="630" height="630" fill="#F7DF1E" rx="80" />
        <path fill="#000000" d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" />
      </svg>
    );
  }

  // TypeScript
  if (normalized.includes('typescript') || normalized === 'ts') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#3178C6" rx="18" />
        <path fill="#FFFFFF" d="M1.5 64C1.5 29.5 29.5 1.5 64 1.5S126.5 29.5 126.5 64 98.5 126.5 64 126.5 1.5 98.5 1.5 64" />
        <path fill="#3178C6" d="M0 0h128v128H0z" />
        <path fill="#FFFFFF" d="M70.9 97.8c3.9 2.2 8.7 3.5 14 3.5 12.3 0 19.8-6.4 19.8-16.5 0-9.2-5.7-14.3-16.1-18.7-7.9-3.4-10.9-6.2-10.9-10.9 0-4.6 3.7-8 10.1-8 4.7 0 8.3 1.3 11 2.8l2.9-9.1c-3.1-1.6-7.5-2.7-12.7-2.7-12 0-19.1 6.5-19.1 16.2 0 8.6 5.5 13.9 15.3 18 8 3.5 11.6 6.5 11.6 11.5 0 5.4-4.5 8.7-11.4 8.7-5.5 0-10.4-1.8-13.8-3.9l-0.7 9.1zM34.9 59.5h15.2v41.3h9.6V59.5h15.2v-8.4H34.9v8.4z" />
      </svg>
    );
  }

  // Node.js
  if (normalized.includes('node')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <path fill="#339933" d="M64 8.7L14.7 37.2v57l49.3 28.5 49.3-28.5v-57L64 8.7zm28.2 73.1c-1.6 2.7-3.9 5-6.8 6.7-5.8 3.4-13 3.4-18.8 0l-14-8.1c-2.9-1.7-5.2-4-6.8-6.7-1.6-2.7-2.5-5.9-2.5-9.1s.9-6.4 2.5-9.1c1.6-2.7 3.9-5 6.8-6.7l14-8.1c2.9-1.7 6.2-2.5 9.4-2.5s6.5.8 9.4 2.5l14 8.1c2.9 1.7 5.2 4 6.8 6.7 1.6 2.7 2.5 5.9 2.5 9.1s-.8 6.4-2.4 9.1z" />
        <path fill="#FFFFFF" d="M64 45.4c-1.5 0-3 .4-4.3 1.1l-14 8.1c-1.3.8-2.4 1.8-3.1 3.1-.8 1.2-1.1 2.7-1.1 4.1s.4 2.9 1.1 4.1c.8 1.2 1.8 2.3 3.1 3.1l14 8.1c1.3.8 2.8 1.1 4.3 1.1s3-.4 4.3-1.1l14-8.1c1.3-.8 2.4-1.8 3.1-3.1.8-1.2 1.1-2.7 1.1-4.1s-.4-2.9-1.1-4.1c-.8-1.2-1.8-2.3-3.1-3.1l-14-8.1c-1.3-.7-2.8-1.1-4.3-1.1z" />
      </svg>
    );
  }

  // Express.js
  if (normalized.includes('express')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#18181B" rx="20" />
        <path fill="#FFFFFF" d="M28 88V40h12v40h18v8H28zm36.5 0l11.5-22.5L65.5 44h13.5l5.5 12 5.5-12h13.5l-10.5 21.5L95 88H81.5l-6-13.5L69.5 88H64.5z" />
        <path fill="#10B981" d="M102 78h16v6h-16z" />
      </svg>
    );
  }

  // RESTful API
  if (normalized.includes('rest')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#0D9488" rx="20" />
        <path fill="#FFFFFF" d="M30 64h68M64 30v68M40 40l48 48M88 40L40 88" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" opacity="0.3" />
        <rect x="24" y="44" width="80" height="40" rx="8" fill="#134E4A" />
        <text x="64" y="69" fill="#2DD4BF" fontSize="20" fontWeight="bold" fontFamily="monospace" textAnchor="middle">REST</text>
      </svg>
    );
  }

  // GraphQL
  if (normalized.includes('graphql')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#E10098" rx="20" />
        <path fill="#FFFFFF" d="M64 22l38 22v44l-38 22-38-22V44l38-22zm0 8.5L33.5 48v35.8L64 101.4l30.5-17.6V48L64 30.5z" />
        <circle cx="64" cy="22" r="7" fill="#FFFFFF" />
        <circle cx="102" cy="44" r="7" fill="#FFFFFF" />
        <circle cx="102" cy="88" r="7" fill="#FFFFFF" />
        <circle cx="64" cy="110" r="7" fill="#FFFFFF" />
        <circle cx="26" cy="88" r="7" fill="#FFFFFF" />
        <circle cx="26" cy="44" r="7" fill="#FFFFFF" />
      </svg>
    );
  }

  // Socket.IO / WebSockets
  if (normalized.includes('socket') || normalized.includes('websocket')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#010101" rx="20" />
        <circle cx="64" cy="64" r="46" fill="#000000" stroke="#FFFFFF" strokeWidth="6" />
        <path fill="#FFFFFF" d="M64 26a38 38 0 1 0 38 38A38 38 0 0 0 64 26zm0 64a26 26 0 1 1 26-26 26 26 0 0 1-26 26z" />
        <path fill="#10B981" d="M60 40l-12 24h12l-4 24 16-28H60z" />
      </svg>
    );
  }

  // JWT & Auth
  if (normalized.includes('jwt') || normalized.includes('auth')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#000000" rx="20" />
        <path fill="#FB015B" d="M34 50a14 14 0 1 1 28 0 14 14 0 0 1-28 0z" />
        <path fill="#D63AFF" d="M66 50a14 14 0 1 1 28 0 14 14 0 0 1-28 0z" />
        <path fill="#00B9F1" d="M50 78a14 14 0 1 1 28 0 14 14 0 0 1-28 0z" />
        <text x="64" y="112" fill="#FFFFFF" fontSize="16" fontWeight="bold" fontFamily="monospace" textAnchor="middle">JWT</text>
      </svg>
    );
  }

  // Prisma ORM
  if (normalized.includes('prisma')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#2D3748" rx="20" />
        <path fill="#16A394" d="M72.5 16.5l37.2 82.8c1.3 2.9-.6 6.2-3.7 6.6L44.8 113c-2.4.3-4.5-1.5-4.8-3.9L22.6 38.6c-.4-2.5 1.5-4.8 4-5.1l43.2-17.3c.9-.3 1.9-.1 2.7.3z" />
        <path fill="#2DE0BA" d="M72.5 16.5L44.8 113c-.3-2.4-.6-6.2 1.2-8.5L72.5 16.5z" opacity="0.4" />
        <path fill="#FFFFFF" d="M72.5 16.5L41.8 108.8 24.5 37.2l48-20.7z" opacity="0.25" />
      </svg>
    );
  }

  // Mongoose ODM
  if (normalized.includes('mongoose')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#880000" rx="20" />
        <path fill="#FFFFFF" d="M30 40c8-10 24-14 36-12 16 3 28 16 32 30 3 12-2 26-12 34-10 8-24 10-36 6-10-3-18-12-20-22 6 4 14 6 22 4 12-2 20-12 18-24-1-6-6-12-12-14-10-3-20 4-28-2z" />
        <circle cx="82" cy="52" r="4" fill="#880000" />
      </svg>
    );
  }

  // MongoDB
  if (normalized.includes('mongodb')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#023430" rx="20" />
        <path fill="#47A248" d="M63.7 18.5s-2 2.3-4.8 6.7C52.4 35.5 39 58 39 76.2c0 19.3 12.3 32.8 25 33.3 0 0 .5 2 0 4.5.3 0 .7 0 1 0 .3 0 .7 0 1 0-.5-2.5 0-4.5 0-4.5 12.7-.5 25-14 25-33.3 0-18.2-13.4-40.7-19.9-51-2.8-4.4-4.8-6.7-4.8-6.7-.4-.7-1.3-.7-1.6 0z" />
        <path fill="#499D4A" d="M64 18.5v91c12.7-.5 25-14 25-33.3 0-18.2-13.4-40.7-19.9-51-2.8-4.4-4.8-6.7-4.8-6.7-.1-.2-.2-.2-.3 0z" />
        <path fill="#FFFFFF" d="M64 94c-.2 0-.4-.1-.5-.2-3.7-3.7-8.5-12.7-8.5-22.3 0-10.2 5.5-20.8 8.6-26.2.2-.3.7-.3.9 0 3.1 5.4 8.6 16 8.6 26.2 0 9.6-4.8 18.6-8.5 22.3-.2.1-.4.2-.6.2z" opacity="0.6" />
      </svg>
    );
  }

  // PostgreSQL
  if (normalized.includes('postgres')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#336791" rx="20" />
        <path fill="#FFFFFF" d="M64 24c-19 0-34 14-34 32 0 12 7 23 18 28v16l14-8c1 .1 1.9.1 2.9.1 19 0 34-14 34-32s-15-32-34.9-32.1z" opacity="0.9" />
        <path fill="#336791" d="M62 38c-12 0-21 9-21 20 0 8 5 14 12 17v10l9-5c0 0 0 0 0 0 12 0 21-9 21-20s-9-22-21-22z" />
        <circle cx="53" cy="52" r="3" fill="#FFFFFF" />
      </svg>
    );
  }

  // Redis
  if (normalized.includes('redis')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#DC382D" rx="20" />
        <path fill="#FFFFFF" d="M64 24L26 44v40l38 20 38-20V44L64 24zm0 12l25 13-25 13-25-13 25-13zm-27 24l22 11.5v23.5L37 83.5V60zm32 35V71.5L91 60v23.5L69 95z" />
      </svg>
    );
  }

  // MySQL / SQL
  if (normalized.includes('mysql') || normalized.includes('sql')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#00758F" rx="20" />
        <path fill="#F29111" d="M78 44c-4-4-10-6-16-6-12 0-22 8-22 20 0 14 14 18 22 22 6 3 10 5 10 9 0 4-4 7-9 7-7 0-13-4-16-10l-10 6c5 9 15 14 26 14 14 0 23-8 23-21 0-14-12-18-21-22-6-3-11-5-11-9 0-4 4-6 8-6 5 0 10 2 13 6l12-9z" />
      </svg>
    );
  }

  // Database Migrations
  if (normalized.includes('migration')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#4B5563" rx="20" />
        <ellipse cx="64" cy="36" rx="34" ry="12" fill="#10B981" />
        <path fill="#10B981" d="M30 36v20c0 6.6 15.2 12 34 12s34-5.4 34-12V36" opacity="0.7" />
        <path fill="#10B981" d="M30 56v20c0 6.6 15.2 12 34 12s34-5.4 34-12V56" opacity="0.9" />
        <path fill="#FFFFFF" d="M84 74l18 18-18 18v-10H50v-16h34v-10z" />
      </svg>
    );
  }

  // Azure
  if (normalized.includes('azure')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#0089D6" rx="20" />
        <path fill="#FFFFFF" d="M28 98l28-70h20L48 98H28zm26-24l16-46h18l24 70H88L76 74H54z" />
      </svg>
    );
  }

  // AWS
  if (normalized.includes('aws') || normalized.includes('amazon')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#232F3E" rx="20" />
        <path fill="#FF9900" d="M34 50l6 18h6l-9-24h-6l-9 24h6l6-18zm26-6h-6v24h6V44zm24 0h-5l-8 14-8-14h-5l10 18-10 18h6l7-13 7 13h6L77 62l11-18z" />
        <path fill="#FF9900" d="M30 84c20 14 48 14 68 0 2-1 4 1 2 3-23 16-56 16-72 0-2-2 0-4 2-3z" />
        <path fill="#FF9900" d="M96 82l5 6-9 2 4-8z" />
      </svg>
    );
  }

  // Caddy Server
  if (normalized.includes('caddy')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#1B2B34" rx="20" />
        <path fill="#22D3EE" d="M64 24c-22 0-40 18-40 40s18 40 40 40 40-18 40-40-18-40-40-40zm0 16c13.2 0 24 10.8 24 24s-10.8 24-24 24-24-10.8-24-24 10.8-24 24-24z" />
        <path fill="#10B981" d="M54 50h20v28H54z" opacity="0.8" />
        <circle cx="64" cy="64" r="8" fill="#FFFFFF" />
      </svg>
    );
  }

  // systemd / PM2
  if (normalized.includes('systemd') || normalized.includes('pm2')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#1E293B" rx="20" />
        <path fill="#38BDF8" d="M64 30l28 16v32L64 94 36 78V46l28-16z" />
        <circle cx="64" cy="62" r="12" fill="#0F172A" />
        <path fill="#FFFFFF" d="M60 52l12 10-12 10V52z" />
      </svg>
    );
  }

  // Docker
  if (normalized.includes('docker')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#2496ED" rx="20" />
        <path fill="#FFFFFF" d="M108 62c-2-1.4-6.4-1.8-10-.6-.6-4.5-4-8-8.4-8-1 0-2 .2-3 .5C83 45 74 44 74 44v10H60V44H48v10H36V44H24v20c-8 1-14 8-14 16 0 10 9 18 20 18 28 0 54-14 66-30 4 .3 8-.5 11-2.5 3-2 3.5-3.5 3-3.5zm-50-4h10v10H58V58zm-12 0h10v10H46V58zm-12 0h10v10H34V58zm24-12h10v10H58V46zm-12 0h10v10H46V46z" />
      </svg>
    );
  }

  // GitHub Actions / Git
  if (normalized.includes('github') || normalized.includes('git')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#181717" rx="20" />
        <path fill="#FFFFFF" d="M64 24C41.9 24 24 41.9 24 64c0 17.7 11.5 32.7 27.4 38 2 .4 2.7-.9 2.7-1.9v-6.7c-11.1 2.4-13.5-5.4-13.5-5.4-1.8-4.6-4.4-5.8-4.4-5.8-3.6-2.5.3-2.4.3-2.4 4 .3 6.1 4.1 6.1 4.1 3.6 6.1 9.4 4.3 11.6 3.3.4-2.6 1.4-4.3 2.5-5.3-8.9-1-18.2-4.4-18.2-19.8 0-4.4 1.6-7.9 4.1-10.7-.4-1-.1.8-4.1 0 0 3.4-1.1 11.1 4.1 3.2-.9 6.7-1.3 10.1-1.3s6.9.4 10.1 1.3c7.7-5.2 11.1-4.1 11.1-4.1 1.8 3.1.7 6.9.3 7.9 2.6 2.8 4.1 6.3 4.1 10.7 0 15.4-9.4 18.7-18.3 19.7 1.4 1.2 2.7 3.7 2.7 7.4v11c0 1.1.7 2.3 2.8 1.9C92.5 96.7 104 81.7 104 64c0-22.1-17.9-40-40-40z" />
        <circle cx="86" cy="42" r="6" fill="#2088FF" />
      </svg>
    );
  }

  // Linux / Ubuntu
  if (normalized.includes('linux') || normalized.includes('ubuntu')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#E95420" rx="20" />
        <circle cx="64" cy="64" r="38" fill="none" stroke="#FFFFFF" strokeWidth="10" />
        <circle cx="28" cy="64" r="8" fill="#FFFFFF" />
        <circle cx="82" cy="33" r="8" fill="#FFFFFF" />
        <circle cx="82" cy="95" r="8" fill="#FFFFFF" />
      </svg>
    );
  }

  // React.js
  if (normalized.includes('react')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#20232A" rx="20" />
        <ellipse cx="64" cy="64" rx="44" ry="17" fill="none" stroke="#61DAFB" strokeWidth="4.5" />
        <ellipse cx="64" cy="64" rx="44" ry="17" fill="none" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(60 64 64)" />
        <ellipse cx="64" cy="64" rx="44" ry="17" fill="none" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(120 64 64)" />
        <circle cx="64" cy="64" r="7.5" fill="#61DAFB" />
      </svg>
    );
  }

  // EJS Server Templating
  if (normalized.includes('ejs')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#A91E22" rx="20" />
        <text x="64" y="68" fill="#FFFFFF" fontSize="28" fontWeight="bold" fontFamily="monospace" textAnchor="middle">&lt;% %&gt;</text>
        <text x="64" y="96" fill="#FDE047" fontSize="18" fontWeight="bold" fontFamily="monospace" textAnchor="middle">EJS</text>
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes('tailwind')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#0B1120" rx="20" />
        <path fill="#38BDF8" d="M64 42c-10.7 0-17.3 5.3-20 16 4-5.3 8.7-7.3 14-6 3.1.8 5.3 3 7.7 5.5C69.6 61.5 74.3 66 84 66c10.7 0 17.3-5.3 20-16-4 5.3-8.7 7.3-14 6-3.1-.8-5.3-3-7.7-5.5C78.4 46.5 73.7 42 64 42zm-20 24c-10.7 0-17.3 5.3-20 16 4-5.3 8.7-7.3 14-6 3.1.8 5.3 3 7.7 5.5C49.6 85.5 54.3 90 64 90c10.7 0 17.3-5.3 20-16-4 5.3-8.7 7.3-14 6-3.1-.8-5.3-3-7.7-5.5C58.4 70.5 53.7 66 44 66z" />
      </svg>
    );
  }

  // Python
  if (normalized.includes('python')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#1E293B" rx="20" />
        <path fill="#3776AB" d="M63.6 22c-15.6 0-14.6 6.8-14.6 6.8l.1 7h15v2.1H34.4s-9.9 1.1-9.9 14.5 8.7 13.9 8.7 13.9h5.2v-7.3s-.3-8.7 8.5-8.7h14.7s8.2-.1 8.2-8V30s1.2-8-6.2-8zm-8.3 4.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
        <path fill="#FFD43B" d="M64.4 106c15.6 0 14.6-6.8 14.6-6.8l-.1-7h-15V90.1h29.7s9.9-1.1 9.9-14.5-8.7-13.9-8.7-13.9h-5.2v7.3s.3 8.7-8.5 8.7H46.4s-8.2.1-8.2 8V98s-1.2 8 6.2 8zm8.3-4.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
      </svg>
    );
  }

  // C++
  if (normalized.includes('c++') || normalized.includes('cpp')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#00599C" rx="20" />
        <path fill="#FFFFFF" d="M64 24L28 44.8v41.6L64 107.2l36-20.8V44.8L64 24zm-2.8 56.4c-8.8 0-15.9-7.1-15.9-15.9s7.1-15.9 15.9-15.9c5.2 0 9.8 2.5 12.6 6.3l-5.6 3.6c-1.6-2.1-4.1-3.5-7-3.5-4.8 0-8.8 3.9-8.8 8.8s3.9 8.8 8.8 8.8c2.9 0 5.4-1.4 7-3.5l5.6 3.6c-2.8 3.8-7.4 6.3-12.6 6.3zm20.8-13.5h-4v4h-3v-4h-4v-3h4v-4h3v4h4v3zm14 0h-4v4h-3v-4h-4v-3h4v-4h3v4h4v3z" />
      </svg>
    );
  }

  // C Language
  if (normalized === 'c' || normalized.startsWith('c ') || normalized.includes('c language')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#659AD2" rx="20" />
        <path fill="#FFFFFF" d="M64 24L28 44.8v41.6L64 107.2l36-20.8V44.8L64 24zm0 60c-11 0-20-9-20-20s9-20 20-20c6.6 0 12.4 3.2 16 8.2l-7.2 4.8c-2.1-3-5.3-5-8.8-5-6.6 0-12 5.4-12 12s5.4 12 12 12c3.5 0 6.7-2 8.8-5l7.2 4.8c-3.6 5-9.4 8.2-16 8.2z" />
      </svg>
    );
  }

  // Java
  if (normalized.includes('java')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" fill="#5382A1" rx="20" />
        <path fill="#E76F00" d="M48 88c12 2 24 2 32-4 0 0-3 3-10 5-8 3-16 2-22-1zm-4-10c14 3 32 3 42-5 0 0-4 4-13 7-11 3-22 2-29-2zm28-44c4 5 2 10-2 15-4 5-9 9-9 14 0 4 2 7 6 9-5-1-9-4-9-9 0-6 6-11 10-15 4-5 5-9 4-14z" />
        <path fill="#FFFFFF" d="M64 96c-18 0-28-2-28-4 0 0 4 3 14 5 14 2 28 1 38-2 0 0-4 2-14 3-3 0-7-.2-10-.2z" />
      </svg>
    );
  }

  // Fallback Terminal/Code icon
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
      <rect width="128" height="128" fill="#3F3F46" rx="20" />
      <path fill="#10B981" d="M36 44l20 20-20 20M64 84h28" stroke="#10B981" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

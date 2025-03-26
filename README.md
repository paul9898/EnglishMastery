# English Mastery

An interactive English learning platform focused on IELTS preparation and general English skills.

## Features

- Grammar lessons with interactive exercises
- Pronunciation practice (coming soon)
- Fluency development (coming soon)
- Vocabulary building (coming soon)
- Contact form for 1-1 tutoring

## Tech Stack

- React + TypeScript
- Express.js
- Tailwind CSS
- Mailgun for email
- Vite for build tooling

## Development Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   MAILGUN_API_KEY=your_mailgun_api_key
   MAILGUN_DOMAIN=your_mailgun_domain
   MAILGUN_FROM_EMAIL=your_mailgun_from_email
   CONTACT_EMAIL=your_contact_email
   PORT=3000
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

This project is configured for deployment on Render. The following environment variables need to be set in Render:

- `MAILGUN_API_KEY`
- `MAILGUN_DOMAIN`
- `MAILGUN_FROM_EMAIL`
- `CONTACT_EMAIL`
- `PORT` (defaults to 3000)
- `NODE_ENV` (set to production)

## License

MIT # eslsite-new

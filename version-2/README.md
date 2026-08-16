<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/7d4337d1-0e93-4926-af1e-4cff92ac6ccd

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Contact form

The contact form posts to [Web3Forms](https://web3forms.com) — no backend
required.

**Setup:**

1. Create an access key at https://web3forms.com with your recipient email
2. Copy the key to `.env.local` (gitignored):
   `VITE_WEB3FORMS_ACCESS_KEY="your-key"`
3. On Vercel, add the same variable under
   **Project Settings > Environment Variables** (name: `VITE_WEB3FORMS_ACCESS_KEY`)

The form sends the visitor's name, email, and message to your Web3Forms
recipient inbox, with the visitor's address as the reply-to. A hidden
`botcheck` honeypot field is silently discarded by Web3Forms, and the
submission button shows sending / success / error states.

See [.env.example](.env.example) for the full variable reference.

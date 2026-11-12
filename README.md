# AI chatbot in a Next.js website

A Next.js (App Router) site with an AI chatbot in the corner. It reads the page a visitor is on and answers from it. No API route, no server code, no npm package: one `next/script` tag in the root layout.

**Live demo:** https://fengyiqicoder.github.io/nextjs-ai-chatbot/ (a static export on GitHub Pages; Northwind is a made-up coffee shop.)

## Add it to your Next.js site

1. Get a free key at [onetagai.com](https://onetagai.com) (1,000,000 tokens one time, no credit card).
2. In `app/layout.tsx`, import `Script` and add it after `{children}`:

```tsx
import Script from "next/script";

// inside <body>, after {children}
<Script
  src="https://onetagai.com/widget.js"
  data-key="YOUR_ONETAG_KEY"
  strategy="afterInteractive"
/>
```

3. `npm run dev` to try it. It works the same on Vercel, with `output: "export"`, or on any other host.

The key is public by design, so it is fine in a client component and in a public repo; you do not need an environment variable or an API route. Because the tag lives in the root layout, the chatbot is on every page and stays mounted across client-side navigation.

Pages Router? Put the same `<Script>` in `pages/_app.tsx`.

## Run this demo

```sh
npm install
npm run dev
```

## License

MIT

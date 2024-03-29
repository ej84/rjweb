Hello! This is my portfolio website to demonstrate my project works I have accomplished and been working on as a full stack web application developer.

Language: React JS, Tailwind CSS

Web Framework Environment: Next JS

ChangeLog

3/20/2024

- Set up the basic project using npx create-next-app.

- Changed background as blue color and divided sections for introducing title and portfolio.

3/21/2024

- Started to figure out design from small device screen for mobile view. Made all texts aligned to the center on mobile view, or to the left on bigger screens.

- Created "gridset1" CSS class in globals.css file so every div that contains this gets the same CSS style configured in it without having to write over and over again.

- Created openPortfolio function for button "Portfolio" to open or hide portfolio works that I will upload after creating new styles for this section.

3/26/2024

- Added mouse hovering effect which changes the Portfolio button's background color to gray. Tested few shadow background color effect for title then removed.

3/27/2024

- In globals.css script, added .onMouse selector for mouse hovering effect like changing outline color, background color, and so on.

3/29/2024

- Added new button click and mouse hovering consts to manage their states more dynamically for buttons styles. Defined two CSS selectors named mouseOn:hover for hovering and btnClick for clicking with the same styles of each buttons.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

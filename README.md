This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

 I have used latest version of NextJs for this task. As per latest version, server side component can not receive event props from client side component. Therefore, I cannot make default task to editable or deletable. 
 Beacuase my design is to enable all the task editable and deletable, I had to use client side rendering.
 Also, Now getServerSideProps function is not supported in index.js which is entry to nextjS app. 

 

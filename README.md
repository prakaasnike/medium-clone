
# Medium Clone

Medium Clone using React Nextjs,tailwind css,sanity.

##
![App Screenshot](https://ik.imagekit.io/1wydvliz6as/medium_4RygAwAia.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649236510089)

## 📌 Overview

`/pages`

- `pages/index.tsx` = Homepage and list all Blogs
- `pages/post/[slug].tsx` = Details Blog

`/pages/api`
- `pages/api/createComment.ts` = API createComment that store data to sanity studio


## Sanity Api Keys

Getting the API Keys

Create an `.env.local` and follow the name `.env.name` and get the API Keys based on the steps below
    
Sanity Api Keys

1. Create a Sanity account
2. Create new project
3. npm install -g @sanity/cli && sanity init
4. After you create new project, Go to your project, you will see the PROJECT ID at the top
5. 5. After that you need to go to -> API -> TOKENS -> ADD API TOKEN -> ENTER YOUR PROJECT NAME -> CHOOSE THE ACCESS PRIVILEGES FOR THE TOKEN(PERMISSIONS) -> CHANGE PERMISSIONS TO EDITOR
6. Put it into the environment variables according to .env.example and you're all set!

![Alt Text](https://ik.imagekit.io/1wydvliz6as/ezgif.com-gif-maker__1__PAqzRqoG3.gif)


## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

##⚙ Tech Stack
- Javascript
- ReactJS
- NextJS
- Typescript
- TailwindCSS
- Sanity


Starting the Project
Install the dependencies with` npm i` or `yarn`
Start the project by `npm run dev` or `yarn dev`

## How to use
Execute create-next-app with `npm or Yarn` to bootstrap the example:

```
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```
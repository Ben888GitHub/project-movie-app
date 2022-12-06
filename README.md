<div align="center">
<img src="images/movie.png" alt="movie" width="200" height="auto" />
<h1>TMDB Film Explorer</h1>
<p>
    TMDB Film Explorer App built with NextJS & TailwindCSS
  </p>

<!-- Badges -->
<p>
  <a href="https://github.com/Ben888GitHub/project-movie-app/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/Ben888GitHub/project-movie-app" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/Ben888GitHub/project-movie-app" alt="last update" />
  </a>
  <a href="https://github.com/Ben888GitHub/project-movie-app/network/members">
    <img src="https://img.shields.io/github/forks/Ben888GitHub/project-movie-app" alt="forks" />
  </a>
  <a href="https://github.com/Ben888GitHub/project-movie-app/stargazers">
    <img src="https://img.shields.io/github/stars/Ben888GitHub/project-movie-app" alt="stars" />
  </a>
  <a href="https://github.com/Ben888GitHub/project-movie-app/issues/">
    <img src="https://img.shields.io/github/issues/Ben888GitHub/project-movie-app" alt="open issues" />
  </a>
  <a href="https://github.com/Ben888GitHub/project-movie-app/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/Ben888GitHub/project-movie-app.svg" alt="license" />
  </a>
</p>

<h4>
    <a href="https://project-movie-app.vercel.app/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/Ben888GitHub/project-movie-app/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/Ben888GitHub/project-movie-app/issues/">Request Feature</a>
  </h4>

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents :notebook_with_decorative_cover:</summary>
  <ol>
    <li>
      <a href="#about-the-project-star2">About The Project</a>
      <ul>
        <li><a href="#tech-stack-computer">Tech Stack</a></li>
        <li><a href="#features-dart">Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started-toolbox">Getting Started</a>
    </li>
    <li><a href="#usage-eyes">Usage</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project :star2:

<div align="center"> 
  <img src="/images/plexpremirepm.png" alt="screenshot" />
  <img src="/images/plexpremiercr.png" alt="screenshot" />
</div>

<!-- TechStack -->

### Tech Stack :computer:

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)](https://tanstack.com/query/v4/docs/overview)

<!-- Features -->

### Features :dart:

- Dark Mode Support
- View Popular Movies in Pages
- View Popular TV Shows in Pages
- Get Specific Movie or TV Show Information in Detail
- Search any Movie or TV Show
- Responsive Layout

## Getting Started :toolbox:

1. Clone the repository and `cd` into its project root directory.
2. Inside the directory, run `npm i` to install dependencies.
3. Get your API Key from [TMDB API](https://www.themoviedb.org/settings/api)
4. Create `.env.local` file and place all your activated API Keys.
5. Run `npm run dev` from the project directory to run in development mode

```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage :eyes:

- In every pages of the app, you can toggle either `light` or `dark` color mode from [next-theme](https://www.npmjs.com/package/next-themes) based on your preferences.
- You can view the displayed Popular Movies and TV Shows in the Home Page
- You can click the Popular Movies or TV Shows and navigate to the their pages with more items
- Click any specific Movie or TV Show to navigate the page where you can view its information in detail
- Click on the Search Button to search and navigate to any Movie or TV Show Page

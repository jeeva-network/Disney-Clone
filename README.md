
# [Disney+ Clone](https://disney-clone-developers-project.vercel.app/)

This is a Disney+ clone application built using HTML, CSS, TypeScript, React.js, Next.js, Tailwind CSS, and the Movie Database API (TheMovieDB). The project simulates a streaming platform like Disney+ by displaying movies, TV shows, and more, allowing users to browse and explore various categories.

## Features

- **Browse Movies and TV Shows**: Display a wide selection of movies and TV shows.
- **Responsive Design**: Works seamlessly across different devices.
- **Search Functionality**: Search for movies and TV shows by name.
- **API Integration**: Uses TheMovieDB API to fetch movie and TV show data dynamically.
- **User Interface**: Modern, intuitive UI design similar to Disney+ [here](https://disney-clone-developers-project.vercel.app/). 
- **Next.js Pages**: Fully server-rendered pages for fast load times and SEO optimization.

## Tech Stack

- **Frontend**:
  - ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black) React.js
  - ![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white) Next.js
  - ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) TypeScript
  - ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) HTML5
  - ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) CSS3
  - ![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white) Tailwind CSS
  - ![ShadCN UI](https://img.shields.io/badge/-ShadCN%20UI-000000?style=flat-square&logo=shadcn&logoColor=white) ShadCN UI
- **API**:
  - ![TMDB](https://img.shields.io/badge/-TMDb-000000?style=flat-square&logo=themoviedb&logoColor=white) TheMovieDB API
- **Styling**:
  - Custom CSS for styling
  - Responsive design using **Tailwind CSS**
  - Prebuilt components from **ShadCN UI**
## Setup Instructions

To run the project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/jeeva-network/Disney-Clone.git

cd disney-clone
```

### 2. Install dependencies

Install the necessary Node modules with NPM. Make sure you have installed Node JS already on your system. If not, click [here](https://nodejs.org/en/download) to download the latest Node LTS.

```bash
  npm install (or) npm i
```

### 3. Set up API Key:

- Go to [TheMovieDB](https://www.themoviedb.org/) and create an account if you don’t have one.
- Get your API key from [here](https://www.themoviedb.org/settings/api).
- In the project, create a **.env.local** file and add your API key like so:

```env
  TMDB_API_KEY=abcd0.efGH123IjKlm
```

### 4. Run the Development Server

```bash
  npm run dev
```
Enjoy and customize the app how you want.

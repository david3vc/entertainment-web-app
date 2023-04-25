# Frontend Mentor - Entertainment web app solution

This is a solution to the [Entertainment web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X).

## Table of contents

  

- [Overview](#overview)

- [The challenge](#the-challenge)

- [Screenshot](#screenshot)

- [Links](#links)

- [My process](#my-process)

- [Built with](#built-with)

- [Author](#author)

## Overview
This project consists of searching for movies or tv series provided by TMDB API, which is a complete free database created by the community.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate between Home, Movies, TV Series, and Bookmarked Shows pages
- Add/Remove bookmarks from all movies and TV series
- Search for relevant shows on all pages
- **Bonus**: Build this project as a full-stack application
- **Bonus**: If you're building a full-stack app, we provide authentication screen (sign-up/login) designs if you'd like to create an auth flow

### Screenshot
![enter image description here](https://heroic-hotteok-f68933.netlify.app/assets/Screenshot_430-aaed3873.png)

### Links

- Solution URL: [https://entertainment-web-app-xi.vercel.app](https://entertainment-web-app-xi.vercel.app/)
- Live Site URL: [https://github.com/david3vc/entertainment-web-app.git](https://github.com/david3vc/entertainment-web-app.git)

## My process
The process to deploy the project locally is:

 1. Download npm dependencies with **npm i**
 2. Create an account in auth0 (which will be used for authentication) to obtain the **domain** and the **client id**
 3. Create an account in tmdb (which will be the api of the movies and tv series) to obtain the **api key**
 4. Add an **.env** file in the root of the project:
- **VITE_REACT_APP_AUTH0_DOMAIN**: is the domain of auth0
- **VITE_REACT_APP_AUTH0_CLIENT_ID**: is the client id of auth0
- **VITE_REACT_APP_AUTH0_CALLBACK_URL**: is the base url concatenated with **/callback**, for example: *http://localhost:5173/callback*
- **VITE_API_KEY_TMDB**: is the tmdb api key
- **VITE_API_TMDB_URL**: is the tmdb api base url

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) 
- [Styled Components](https://styled-components.com/) - For styles
- [Auth0](https://auth0.com/)
- [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction)
- Axios
- React query

## Author

- Github- [David Vera](https://github.com/david3vc)
- Frontend Mentor - [@david3vc](https://www.frontendmentor.io/profile/david3vc)

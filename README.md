<h1 align="center">Spacestagram</h1>

[Deployed App](https://spacestagram-ji.herokuapp.com/)

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Functionality](#functionality)
- [Contributors](#contributing)

## About 
Spacestagram is a single page app created for the Shopify Winter Internship proogram. This app allows the user to browse through a collection of astronomy photos from one of NASA's APIs. The app has basic like/unlike functionality for each photo.

### Wins/Challenges
-- CHALLENGES -- 
* Not enough time. I decided last minute (day or so before the due date - while working on another contract project) to complete this tech challenge and apply for the internship. I applied and made it all the way through to the end for the Fall internship, but ended up not receiving an offer. Wanted to give it another shot. :) 
* Local Storage functionality. I have the functions all written out, however, something is off and I couldn't get it working properly in time for submission. 

-- WINS --
* Accomplishing all I did in such a short amount of time. I am proud of what I was able to complete and feel good knowing I did my best work. 

## Installation

1. Clone down this repository to a directory of your choice
2. <code>cd</code> into the repo
3. Run <code>npm i</code> to install dependencies
4. Run the command <code>npm run start</code> to run the application in your browser
5. Begin interacting!

#### Testing 
1. <code>npm i -D cypress</code>
2. Add the following to your package.json file
<pre><code>{
  "scripts": {
    "cypress": "./node_modules/.bin/cypress open"
  }
}</code></pre>
3. Then run <code>npm run cypress</code>
4. Select the space-test.js file
5. Cypress will automatically open and the tests will start running. 

## Technologies Used
- ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)

- <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>

- [![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.javascript.com/)

- ![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)

- ![SASS](https://img.shields.io/badge/SASS%20-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white)

- ![Cypress](https://img.shields.io/badge/cypress%20-%2317202C.svg?&style=for-the-badge&logo=cypress&logoColor=white)

## Functionality
When the user visits the app they will be greeted with a pre-populated page of 10 images from NASA's Astronomy Photo of the Day API. As the user scrolls through the page they will notice they have the ability to like and unlike any photo they choose. 
<img src="https://github.com/jgiwinski/spacestagram/blob/master/assets/home.gif" alt="home gif" width="600"/>

The app is resposive and can be comfortably viewed on mobile, tablet, and desktop. 
<img src="https://github.com/jgiwinski/spacestagram/blob/master/assets/mobile.gif" alt="mobile gif" width="600"/>

Spacestagram passes Lighthouse testing with 100% and does not trigger any errors during a WAVE test. 
<img src="https://github.com/jgiwinski/spacestagram/blob/master/assets/accessibility.png" alt="accesibility" width="600"/>

### Future Iterations / Improvements 
- Get local stroage functionality working properly so that a user can leave or refresh the page and their likes persist. 

## Contributing

[<img src="https://img.shields.io/badge/LinkedIn-julia--iwinski-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0FBBD6"/>][linkedin2]
[<img src="https://img.shields.io/badge/Github-julia--iwinski-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github2]

[linkedin2]: https://www.linkedin.com/in/julia-iwinski-898540138/
[github2]: https://github.com/jgiwinski

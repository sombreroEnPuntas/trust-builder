# `trust-builder`
Challenge task: build a trust builder for TrustPilot.  
Demo app on Heroku :)  

~~https://trust-builder.herokuapp.com/~~  
Checking my portfolio and want something to click?  
Open an issue on this repo requesting to activate the deployed app!

## Table of Contents
- [Intro](#intro)
- [Details](#details)
- [Available Scripts](#available-scripts)
  - [yarn start](#yarn-start)
  - [yarn test](#yarn-test)
  - [yarn run build](#yarn-run-build)

## Intro

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).  
After ejecting, I added the required font-family and a sass loader for webpack.

I decided to go for `React.js` because it is one of the major frameworks currently used.
This way, the widget could be easily delivered to partners as a dependency for their projects.

Tradeoff: yes, it does not work if the partner is not using react ;)

## Details

I am assuming that there is a minimum of 5 comments.

## Available Scripts

You need `npm`, `yarn`, and `node` globally installed.
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

To the default `jest` testing env, I added `enzyme` because it's awesome.

The project generates a folder called `/coverage` which is `.gitignore`d on this repo.
Run it on your local, and notice the **100%** test coverage :)

Launches the test runner in the interactive watch mode.<br>
I used the data from [src/mocks/reviews.json](/mocks/reviews.json) to generate some snapshots.<br>
If you change that, you need to tell `jest` to update the snapshots.
Just press `u` :)

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

<br>  
<br>  
<br>  
*Follow the commits.*

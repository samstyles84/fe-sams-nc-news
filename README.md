## How to run the project locally

Once you have cloned down the Git repo (`https://github.com/samstyles84/fe-sams-nc-news`), install the required dependencies: Axios, Reach Router, Jest using `npm install`.

The app has been developed using node v14.4.0.

Use `npm start` to generate a local copy of the app, `npm test` to run the test suite, and `npm run build` to deploy the App.

The list of registered users that can be used to log in within the app is defined in the backend database. The list is as follows:

    - 'tickle122'
    - 'grumpy19'
    - 'happyamy2016'
    - 'cooljmessy'
    - 'weegembump'
    - 'jessjelly'

## Features

### Articles

- Serves a list of all articles
- Articles can be viewed by topic
- Users can sort articles by date created / comment_count / votes
- Logged in users can vote on articles
- Logged in users can vote a maximum of once in either direction per page load
- Votes are persistent when page is refreshed
  ​

### Individual Article / Comments

- Individual articles can be accessed, along with their comments
- Logged in users can vote on comments
- Logged in users can vote a maximum of once in either direction per page load
- Votes are persistent when page is refreshed
- Logged in users can post new comments, which are persistent
- Logged in users can only delete their own comments

## link to the hosted version of the project

The hosted project can be found here: `https://sams-nc-news.netlify.app/`.

## link to the back-end repository of the project

The backend repository can be found at this location: `https://github.com/samstyles84/be-nc-news`

## link to the hosted version of the back-end project

The backend application app has been published to Heroku at this location: `https://nc-hosting-samstyles84.herokuapp.com/api`

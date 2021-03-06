# Twitter template

Twitter template with integration of Twitter Widgets

## Live Preview 🚀

Click image for live preview

[<img src="https://i.ibb.co/DwRDGd8/Screenshot-2020-10-30-213408.jpg">](https://twitter-template.web.app/)

## Usage

1- Download or clone the project <br />
2- Run `$ npm install` to add the dependencies <br />
3- Create project in firebase: https://console.firebase.google.com/ <br />
4- Add firebase project configuration to `.env` <br />
5- Create database in Cloud Firestore, create collection `posts` and add documents that contains:
```yaml
{
   "avatar": "",            # {string}    => avatar image as cdn
   "displayName": "",       # {string}    => account name
   "image": "",             # {string}    => post image as cdn
   "text": "",              # {string}    => post decription
   "timestamp": "",         # {timestamp} => post creation date
   "username": "",          # {string}    => acount user name
   "verified": ""           # {boolean}   => is the account verified!
}
```
=> those are the posts that will appear in the feed! <br />
6- Run the project `$ npm start` <br /><br />

To know more about Firebase check: https://firebase.google.com/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

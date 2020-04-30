# Dalai Redirector

Dalai forces the person clicking the link through an ETH-Domain whic requires an ETH login. This allowed me to force ETH Authentication without any access to ETH user data.

## Project setup
If you want to run dalai on your own n.ethz.ch webspace follow the steps below.

**Please note that this build requires you to have Node, npm and vue installed on your local machine.**

### 1. Clone the repo to your machine 
```bash
git clone git@github.com:Divepit/Dalai.git
```
### 2. Change the Vue config
Currently the config is set to my personal webspace which contains a subfolder called 'redirector'.

The config file is located in the root directory of this repo.
```js
// vue.config.js
module.exports = {
  publicPath: '/~marcotr/redirector/'
}
```

Change the `publicPath` to your nETHz shortname followed by the directory you are placing the file in. In my case one can now reach the redirector via https://n.ethz.ch/~marcotr/redirector

**Please note that this directory will then contain the .htacess.n file which will only allow access through the nETHz login.**

### 3. Add your firebase config

Generate a new firebase project and add a file called `fire.js` to the root directory of this repo. The file should look as follows:

```js
import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  // COPY YOUR FIREBASE CONFIG HERE
}
const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.firestore()

export { db }

```
Copy the config of your firebase App (provided by firebase) into this file.

### 4. Build the app on your local machine.
First you will need to install all the necessary dependencies
``` 
npm install
```
Then we build the app
```
npm run build
```

This will regenerate the `/dist` directory. You can now copy the `/dist` directory into the directory you specified in step 2 on your nETHz webspace.

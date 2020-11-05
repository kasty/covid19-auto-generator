# COVID-19 AUTO GENERATOR
The aim of this project was to create a pre-configured COVID-19 derogatory travel certificate (October 2020 version) generator to be used by one or more people.

Once configured, it allows you to generate an authorization in two clicks.

> Please note, you use this generator at your own risk, I decline all responsibility in the event of an error resulting in a penalty

## Remaining todos
- [ ] Improve this documentation
- [ ] Load config from an external file (no build needed)
- [ ] Improve TypeScript types

## Démo 
![demo gif](https://kasty.github.io/demo-covid-auto-gen.gif "Demo covid19 auto generator")

Online demo on https://kasty.github.io/

## Usage

* Clone the repository
* Install dependencies
```
npm install
```
* Edit the config file at `src/config.ts`
Example :
```
import { configType } from './config/config';

const config: configType = {
  reasonsList: {
    travail: {
      title: "au boulot",
      emoji: "🖥"
    },
    famille: {
      title: "m'occuper de la famille",
      emoji: "💪🏼"
    },
    achats: {
      title: "faire les courses",
      emoji: "🛒"
    },
    sport_animaux: {
      title: "prendre l'air",
      emoji: " ☔️"
    },
    sante: {
      title: "chez le doc (glups)",
      emoji: "🤒"
    },
    handicap: {
      title: "me déplacer en situation de handicap",
      emoji: "🦽"
    },
    convocation: {
      title: "à une convocation",
      emoji: "📄"
    },
    missions: {
      title: "participer à une mission d'intérêt général",
      emoji: "🔧"
    },
    enfants: {
      title: "chercher les enfants à l'école",
      emoji: "🧸"
    },
  },
  users: {
    robert: {
      profile: {
        firstname: 'Robert',
        lastname: 'Tudor',
        birthday: '24/06/1978',
        placeofbirth: 'Nantes',
        address: '35 rue de l\'épée',
        zipcode: '44000',
        city: 'Nantes',
        emoji: '🐼'
      },
      settings: {
        choices: [
          'famille',
          'achats',
          'sport_animaux',
          'sante',
          'handicap'
        ],
        defaultChoice: 'sport_animaux',
      },
    },
    janine: {
      profile: {
        firstname: 'Janine',
        lastname: 'Tudor',
        birthday: '01/05/1975',
        placeofbirth: 'Biarritz',
        address: '35 rue de l\'épée',
        zipcode: '44000',
        city: 'Nantes',
        emoji: '🐙'
      },
      settings: {
        choices: [
          'travail',
          'famille',
          'achats',
          'sport_animaux',
          'sante',
          'missions'
        ],
        defaultChoice: 'travail',
      },
    },
  },
  defaultUser: "janine"
};

export default config;
```
* To test your app you can run it locally with
```
npm start
```
See Create React App documentation below for more informations
* To build your app run
```
npm run build
```
Then host the `build` folder on a webserver and enjoy the app on your phone !


## About Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

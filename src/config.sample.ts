import { configType } from './config/types';

const config: configType = {
  // all possible reasons
  reasonsList: {
    travail: {
      title: 'au boulot',
      emoji: '🖥',
    },
    famille: {
      title: "m'occuper de la famille",
      emoji: '💪🏼',
    },
    achats: {
      title: 'faire les courses',
      emoji: '🛒',
    },
    sport_animaux: {
      title: "prendre l'air",
      emoji: ' ☔️',
    },
    sante: {
      title: 'chez le doc (glups)',
      emoji: '🤒',
    },
    handicap: {
      title: 'me déplacer en situation de handicap',
      emoji: '🦽',
    },
    convocation: {
      title: 'à une convocation',
      emoji: '📄',
    },
    missions: {
      title: "participer à une mission d'intérêt général",
      emoji: '🔧',
    },
    enfants: {
      title: "chercher les enfants à l'école",
      emoji: '🧸',
    },
  },
  // you can add as many users as you want
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
        // only displayed in the select box
        emoji: '🐼',
      },
      settings: {
        // limit the list of choices for this user
        choices: [
          'famille',
          'achats',
          'sport_animaux',
          'sante',
          'handicap',
        ],
        // user's default choice selected (optional)
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
        emoji: '🐙',
      },
      settings: {
        choices: [
          'travail',
          'famille',
          'achats',
          'sport_animaux',
          'sante',
          'missions',
        ],
        defaultChoice: 'travail',
      },
    },
  },
  defaultUser: 'janine',
};

export default config;

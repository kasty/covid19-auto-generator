import { ConfigType } from './config/types';

const config: ConfigType = {
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
};

export default config;

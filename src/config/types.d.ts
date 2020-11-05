export type configType = {
  reasonsList: ReasonListType;
  defaultUser?: keyof UsersType;
  users: UsersType;
}
type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

type ReasonFieldsType = {
  title: string;
  emoji?: string;
}
type ReasonsNameType = "travail" | "famille" | "achats" | "sport_animaux" | "sante" | "handicap" | "convocation" | "missions" | "enfants";

type ReasonListType = PartialRecord<ReasonsNameType, ReasonFieldsType>;

type UsersType = Record<string, UserType>;

export type UserType = {
  profile: {
    firstname: string;
    lastname: string;
    birthday: string; // format: JJ/MM/AAAA
    placeofbirth: string;
    address: string;
    zipcode: string;
    city: string;
    emoji?: string;
    datesortie: string;
    heuresortie: string;
  },
  settings: {
    choices: string[];
    defaultChoice: string;
  }
};

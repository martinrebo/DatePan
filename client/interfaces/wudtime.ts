import { ImageSourcePropType } from "react-native";

export interface IWudtime {
  _id: string;
  category: "fun" | "skills" | "purpose" | "";
  wudType: {
    name: string;
    activities: Array<{}>;
  };
  activity: string | ""; // cañas y tapas, picnic,
  date: Date | null;
  startTime: Date | null;
  endTime: Date | null;
  city: "Barcelona";
  place: IGooglePlace | null;
  notes: string | ""; // 'Description of the event here'
  userId: string | "" | null; // User firebase ID
  photoURL: ImageSourcePropType | null; // User photo URL
  displayName: string | ""; // User display name
}

export interface IGooglePlace {
  label: string;
  value: {
    description: string;
    place_id: string;
  };
}

export interface IWudtimeResponse {
  _id: string;
  data: IWudtime;
  joiners?: Array<{}>;
}

import { ImageSourcePropType } from "react-native";

export interface IWudtime {
  category: "fun" | "skills" | "purpose" | "";
  wudType: {
    name: string;
    activities: Array<{}>;
  };
  activity: string | ""; // cañas y tapas, picnic,
  date: Date;
  startTime: Date;
  endTime: Date;
  duration: string | ""; // '1h'
  city: string | ""; // 'Madrid'
  address: string | ""; // 'Calle de la Hispanidad, 1'
  place: string | ""; // 'Bar Iberia '
  notes: string | ""; // 'Description of the event here'
  userId: string | "" | undefined; // User firebase ID
  photoURL: ImageSourcePropType | undefined; // User photo URL
  displayName: string | ""; // User display name
}

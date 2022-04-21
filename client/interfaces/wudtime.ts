import { ImageSourcePropType } from "react-native";

export interface IWudtime {
  category: "fun" | "skills" | "purpose" | "";
  wudType: {
    name: string;
    activities: Array<{}>;
  };
  activity: string | ""; // cañas y tapas, picnic,
  date: Date | null;
  startTime: Date | null;
  endTime: Date | null;
  city: string | ""; // 'Madrid'
  address: string | ""; // 'Calle de la Hispanidad, 1'
  place: string | ""; // 'Bar Iberia '
  notes: string | ""; // 'Description of the event here'
  userId: string | "" | null; // User firebase ID
  photoURL: ImageSourcePropType | null; // User photo URL
  displayName: string | ""; // User display name
}

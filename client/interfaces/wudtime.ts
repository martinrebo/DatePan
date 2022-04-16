export interface Wudtime {
  category: "fun" | "skills" | "purpose" | "";
  wudType: {
    name: string;
    activities: Array<{}>;
  };
  activity: string | ""; // cañas y tapas, picnic,
  date: string | ""; // '2020-01-01'
  time: string | ""; // '12:00'
  duration: string | ""; // '1h'
  city: string | ""; // 'Madrid'
  address: string | ""; // 'Calle de la Hispanidad, 1'
  place: string | ""; // 'Bar Iberia '
  notes: string | ""; // 'Description of the event here'
  userId: string | "" | undefined; // User firebase ID
  photoURL: string | ""; // User photo URL
  displayName: string | ""; // User display name
}

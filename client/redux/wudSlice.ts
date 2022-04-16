import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Wudtime } from "../interfaces/wudtime";

interface IuserData {
  photoURL: string;
  displayName: string;
  userId: string;
}

const initialState: Wudtime = {
  category: "",
  wudType: {
    name: "",
    activities: [],
  },
  activity: "",
  date: "",
  time: "",
  duration: "",
  location: "",
  notes: "",
  userId: "",
  photoURL: "",
  displayName: "",
};

export const wudSlice = createSlice({
  name: "createWud",
  initialState,
  reducers: {
    addType: (state: Wudtime, action: PayloadAction<Wudtime["category"]>) => {
      state.category = action.payload;
    },
    addSubtype: (state: Wudtime, action: PayloadAction<Wudtime["wudType"]>) => {
      state.wudType = action.payload;
    },
    addActivity: (
      state: Wudtime,
      action: PayloadAction<Wudtime["activity"]>
    ) => {
      state.activity = action.payload;
    },
    addDate: (state: Wudtime, action: PayloadAction<Wudtime["date"]>) => {
      state.date = action.payload;
    },
    addTime: (state: Wudtime, action: PayloadAction<Wudtime["time"]>) => {
      state.time = action.payload;
    },
    addDuration: (
      state: Wudtime,
      action: PayloadAction<Wudtime["duration"]>
    ) => {
      state.duration = action.payload;
    },
    addLocation: (
      state: Wudtime,
      action: PayloadAction<Wudtime["location"]>
    ) => {
      state.location = action.payload;
    },
    addNotes: (state: Wudtime, action: PayloadAction<Wudtime["notes"]>) => {
      state.notes = action.payload;
    },
    addUserData: (state: Wudtime, action: PayloadAction<IuserData>) => {
      state.userId = action.payload.userId!;
      state.photoURL = action.payload.photoURL!;
      state.displayName = action.payload.displayName;
    },
    reset: (state: Wudtime) => {
      state = initialState;
    },
  },
});

export const {
  addType,
  addSubtype,
  addActivity,
  addDate,
  addTime,
  addDuration,
  addLocation,
  addNotes,
  addUserData,
  reset,
} = wudSlice.actions;
export const selectWud = (state: RootState) => state;

export default wudSlice.reducer;

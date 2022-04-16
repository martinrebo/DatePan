import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Wudtime } from "../interfaces/wudtime";

interface IuserData {
  photoURL: string;
  displayName: string;
  userId: string;
}

interface IlocationData {
  city: string;
  address: string;
  place: string;
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
  city: "",
  address: "",
  place: "",
  notes: "",
  userId: "",
  photoURL: "",
  displayName: "",
};

export const wudSlice = createSlice({
  name: "createWud",
  initialState,
  reducers: {
    addCategory: (
      state: Wudtime,
      action: PayloadAction<Wudtime["category"]>
    ) => {
      state.category = action.payload;
    },
    addType: (state: Wudtime, action: PayloadAction<Wudtime["wudType"]>) => {
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
    addNotes: (state: Wudtime, action: PayloadAction<Wudtime["notes"]>) => {
      state.notes = action.payload;
    },
    addUserData: (state: Wudtime, action: PayloadAction<IuserData>) => {
      state.userId = action.payload.userId!;
      state.photoURL = action.payload.photoURL!;
      state.displayName = action.payload.displayName;
    },
    addLocationData: (state: Wudtime, action: PayloadAction<IlocationData>) => {
      state.city = action.payload.city;
      state.address = action.payload.address;
      state.place = action.payload.place;
    },
    reset: (state: Wudtime) => {
      state = initialState;
    },
  },
});

export const {
  addCategory,
  addType,
  addActivity,
  addDate,
  addTime,
  addDuration,
  addLocationData,
  addNotes,
  addUserData,
  reset,
} = wudSlice.actions;
export const selectWud = (state: RootState) => state;

export default wudSlice.reducer;

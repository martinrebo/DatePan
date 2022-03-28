import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Wudtime } from "../interfaces/wudtime";

const initialState: Wudtime = {
  type: "",
  subtype: {
    name: "",
    activities: [],
  },
  activity: "",
  date: "",
  time: "",
  duration: "",
  location: "",
  notes: "",
};

export const wudSlice = createSlice({
  name: "createWud",
  initialState,
  reducers: {
    addType: (state: Wudtime, action: PayloadAction<Wudtime["type"]>) => {
      state.type = action.payload;
    },
    addSubtype: (state: Wudtime, action: PayloadAction<Wudtime["subtype"]>) => {
      state.subtype = action.payload;
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
  reset,
} = wudSlice.actions;
export const selectWud = (state: RootState) => state;

export default wudSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { IGooglePlace, IWudtime } from "../interfaces/wudtime";
import { ImageSourcePropType } from "react-native";

interface IuserData {
  photoURL: ImageSourcePropType | undefined;
  displayName: string;
  userId: string;
}

interface IlocationData {
  city: string;
  address: string;
  place: string;
}

const initialState: IWudtime = {
  category: "",
  wudType: {
    name: "",
    activities: [],
  },
  activity: "",
  date: null,
  startTime: null,
  endTime: null,
  city: "Barcelona",
  place: {
    label: "Barceloneta",
    value: {
      description: "Barceloneta description and map",
      place_id: "",
    },
  },
  notes: "",
  userId: "",
  photoURL: null,
  displayName: "",
};

export const wudSlice = createSlice({
  name: "createWud",
  initialState,
  reducers: {
    addCategory: (
      state: IWudtime,
      action: PayloadAction<IWudtime["category"]>
    ) => {
      state.category = action.payload;
    },
    addType: (state: IWudtime, action: PayloadAction<IWudtime["wudType"]>) => {
      state.wudType = action.payload;
    },
    addActivity: (
      state: IWudtime,
      action: PayloadAction<IWudtime["activity"]>
    ) => {
      state.activity = action.payload;
    },
    addDate: (state: IWudtime, action: PayloadAction<Date | null>) => {
      console.log("addDate slice", action.payload);
      state.date = action.payload;
    },
    addStartTime: (
      state: IWudtime,
      action: PayloadAction<IWudtime["startTime"]>
    ) => {
      state.startTime = action.payload;
    },
    addEndTime: (
      state: IWudtime,
      action: PayloadAction<IWudtime["endTime"]>
    ) => {
      state.startTime = action.payload;
    },
    addNotes: (state: IWudtime, action: PayloadAction<IWudtime["notes"]>) => {
      state.notes = action.payload;
    },
    addUserData: (state: IWudtime, action: PayloadAction<IuserData>) => {
      state.userId = action.payload.userId!;
      state.photoURL = action.payload.photoURL!;
      state.displayName = action.payload.displayName;
    },
    addLocationData: (state: IWudtime, action: PayloadAction<IGooglePlace>) => {
      state.place = action.payload;
    },
    reset: (state: IWudtime) => {
      state = initialState;
    },
  },
});

export const {
  addCategory,
  addType,
  addActivity,
  addDate,
  addStartTime,
  addEndTime,
  addLocationData,
  addNotes,
  addUserData,
  reset,
} = wudSlice.actions;
export const selectWud = (state: RootState) => state;

export default wudSlice.reducer;

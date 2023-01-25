import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ImageInterface, MemeInterface } from "orsys-tjs-meme";
import { REST_ADR } from "../config/config";
export interface ISliceListes {
  memes: Array<MemeInterface>;
  images: Array<ImageInterface>;
}
const initialState = {
  memes: [],
  images: [],
};
type RequestState = "pending" | "fulfilled" | "rejected";
const listes = createSlice({
  name: "listes",
  initialState,
  reducers: {
    addImage: (
      state: ISliceListes,
      action: { type: any; payload: ImageInterface }
    ) => {
      state.images.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(
      fetchImagesListe.fulfilled,
      (
        state: ISliceListes,
        action: { type: any, payload :any }
      ) => {
        state.images.push(...action.payload);
      }
    )
  },
});

export const fetchImagesListe = createAsyncThunk(
  "listes/fetchImages",
  async () => {
    const response = await fetch(`${REST_ADR}/images`);
    const data = await response.json();
    return data;
  }
);
export const { addImage } = listes.actions;
export default listes.reducer;

import { createSlice } from '@reduxjs/toolkit'
import { ImageInterface, MemeInterface } from 'orsys-tjs-meme';
export interface ISliceListes{
    memes:Array<MemeInterface>
    images:Array<ImageInterface>
}
const initialState = {
    memes:[],
    images:[],
}

const listes = createSlice({
  name: 'listes',
  initialState,
  reducers: {
    addImage:(state:ISliceListes,action:{type:any,payload:ImageInterface})=>{
        state.images.push(action.payload);
    }
  }
});
//addImage(img);--> addImage(state,{type:'listes/addImage',payload:img})
export const {addImage} = listes.actions
export default listes.reducer

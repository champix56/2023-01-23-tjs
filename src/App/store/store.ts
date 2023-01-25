import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import listeReducer from "./listes";
import currentReducer from "./current";
export const uneValueAdeleteApresImplem = "";
export const store = configureStore({
  reducer: combineReducers({ listes: listeReducer, current: currentReducer }),
  devTools: true,
});
store.subscribe(() => {
  console.log(store.getState());
});

//store.dispatch({type:'listes/addImage',payload:{h:1000,w:50,url:'dfghj.jpg',id:123,name:"coucou"}});

//console.log(store.getState());

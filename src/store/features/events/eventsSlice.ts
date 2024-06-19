import { createAppSlice } from "@/store/createAppSlice";
import type { AppThunk } from "@/store/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { JsonObject } from "type-fest";
import { IEvent, fetchEvents } from "./eventsAPI";

export interface AgentsSliceState {
    isSuccess : boolean;
    events  : IEvent[];
    selectedIndex : string;
    status    : "idle" | "loading" | "failed";
    msg       : string;
}

const initialState: AgentsSliceState = {
    isSuccess : false,
    events    : [],
    status    : "idle",
    msg       :"",
    selectedIndex : "-1",
};

export const productsSlice = createAppSlice({
  name: "events",
  
  initialState,
  
  reducers: (create) => ({
    getEvents: create.asyncThunk(
      async ({filter, keyword}:{filter:boolean, keyword:string}) => {
        const response = await fetchEvents({filter, keyword});
        return response;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          if(action.payload.isSuccess) {
              state.events = JSON.parse(action.payload.data);
          }else{
              state.msg = action.payload.data;
          }
        },
        rejected: (state) => {
          state.status = "failed";
        },
      },
    ),
    setSelectedEvent: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.selectedIndex = action.payload;
      },
    ),
  }),
  
  selectors: {
    selectEvents : (events) => events.events,
    selectMsg      : (events) => events.msg,
    selectIsSuccess: (events) => events.isSuccess,
    selectStatus   : (events) => events.status,
    selectEvent  : (events) => events.selectedIndex,
  },
});

export const { getEvents, setSelectedEvent } =
  productsSlice.actions;
 
export const { selectEvent ,selectEvents, selectMsg, selectIsSuccess, selectStatus } = productsSlice.selectors;
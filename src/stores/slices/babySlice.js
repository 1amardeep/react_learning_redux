import { createSlice } from "@reduxjs/toolkit";
import { fetchBabies } from "../thunks/fetchBabies";
import { addBabies } from "../thunks/addBabies";

const babiesSlice = createSlice({
  name: "babies",
  initialState: {
    data: [],
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBabies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBabies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchBabies.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(addBabies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addBabies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addBabies.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const babiesSliceReducer = babiesSlice.reducer;

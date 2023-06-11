import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchBabies = createAsyncThunk("fetch/babies", async () => {
  const response = await axios.get("http://localhost:3005/babies");
  await pause(1000); // dev purpose
  return response.data;
});

//dev purpose code
const pause = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

export { fetchBabies };

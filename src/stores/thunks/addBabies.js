import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addBabies = createAsyncThunk("add/babies", async (data) => {
  const response = await axios.post("http://localhost:3005/babies", {
    name: faker.name.fullName(),
  });
  await pause(1000); // dev purpose
  return response.data;
});

//dev purpose code
const pause = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

export { addBabies };

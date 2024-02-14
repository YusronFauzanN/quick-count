import { createAsyncThunk } from "@reduxjs/toolkit";
import apiInstance from "../services";
export const login = createAsyncThunk(
  "auth/login",
  async ({ data }, { rejectWithValue }) => {
    try {
      const response = await apiInstance.post(
        `/auth/login`, {
            phone: data.phone,
            password: data.password
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
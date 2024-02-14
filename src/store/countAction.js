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

export const storeCount = createAsyncThunk(
  "quick-count/store",
  async ({ data }, { rejectWithValue }) => {
    try {
      const response = await apiInstance.post(
        `/quick-count/store`, {
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

export const getCount = createAsyncThunk(
  "quick-count/show",
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await apiInstance.post(
        `/quick-count/show`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
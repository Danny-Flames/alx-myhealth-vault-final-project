import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiRequest from "../../utils/api";

// Thunk for handling login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // Call the API utility to make the login request
      const response = await apiRequest({
        url: "/login",
        method: "POST",
        payload: { email, password },
      });
      return response; 
    } catch (error) {
      // Pass the error message to Redux state
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for handling user registration (signup)
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      // Call the API utility to make the registration request
      const response = await apiRequest({
        url: "/register",
        method: "POST",
        payload: { name, email, password },
      });
      return response; 
    } catch (error) {
      // Pass the error message to Redux state
      return rejectWithValue(error.message);
    }
  }
);

// Initial state for auth slice
const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

// Create a Redux slice for authentication
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handling login cases
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token; // Assuming the API returns a token
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to login";
      })

      // Handling register cases
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to register";
      });
  }, 
});

// Export the logout action and reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type AuthState = {
    user: any;
    token: string | null;
    loading: boolean;
    error: string | null;
};

const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    error: null,
};

export const login = createAsyncThunk("auth/login", async ({ email, password }: { email: string; password: string }) => {
    const response = await axios.post("/api/login", { email, password });
    return response.data;
});

export const register = createAsyncThunk(
    "auth/register",
    async ({ firstName, lastName, email, password }: { firstName: string; lastName: string; email: string; password: string }) => {
        const response = await axios.post("/api/register", { firstName, lastName, email, password });
        return response.data;
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error Occured while logging in";
            })
            .addCase(register.pending, (state)=> {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action ) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error Occured while registering"
            })
    },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;
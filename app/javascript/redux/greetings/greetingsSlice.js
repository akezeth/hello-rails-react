import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'http://localhost:3000/greetings';

  export const fetchGreetings = createAsyncThunk('messages/fetchGreetings', async (thunkAPI) => {
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });
  

  const initialState = {
    loading: false,
    messages: [],
    errors: null,
    isLoading: false
  };

  const messagesSlice = createSlice({
    name: 'messageList',
    initialState,
    reducers: {
  
    },
    extraReducers: (builder) => {
      builder.addCase(fetchGreetings.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(fetchGreetings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.messages = action.payload;
      });
     
    },
  });

  export default messagesSlice.reducer;
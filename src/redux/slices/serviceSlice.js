import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  allService: [],
  serviceHeilight: [],
};

// all services 
export const fetchServiceData = createAsyncThunk("services/fetchServices", async()=>{
  const response = await fetch("https://shrouded-wave-36908.herokuapp.com/services")
      .then(res=>res.json())
  return response;
})
// setvice heighlight 
export const fetchServiceHeighlight = createAsyncThunk("services/ServicesHeighlight", async()=>{
  const response = await fetch("https://shrouded-wave-36908.herokuapp.com/serviceheighlight")
      .then(res=>res.json())
  return response;
})

export const serviceSlice = createSlice({
  name: 'services',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addService: (state,action) => {
      // state.value += 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    removeService: (state, action) => {
      // state.value += action.payload;
    },
  },

  extraReducers: (builder) => {
    // push all services 
    builder.addCase(fetchServiceData.pending, (state) => {
        state.status = 'loading';
      })
    builder.addCase(fetchServiceData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.allService.push(action.payload) ;
      });

      // push highlighted services 
    builder.addCase(fetchServiceHeighlight.pending, (state) => {
        state.status = 'loading';
      })
    builder.addCase(fetchServiceHeighlight.fulfilled, (state, action) => {
        state.status = 'idle';
        state.serviceHeilight.push(action.payload) ;
      });
  },
});

export const { addService, removeService } = serviceSlice.actions;

export default serviceSlice.reducer;


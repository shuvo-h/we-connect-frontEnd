import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  allService: []
};

export const fetchServiceData = createAsyncThunk("services/fetchServices", async()=>{
  const response = await fetch("http://localhost:5000/services")
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
      // console.log(action.payload);
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    removeService: (state, action) => {
      // state.value += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchServiceData.pending, (state) => {
        state.status = 'loading';
      })
    builder.addCase(fetchServiceData.fulfilled, (state, action) => {
        console.log(action);
        state.status = 'idle';
        state.allService.push(action.payload) ;
      });
  },
});

export const { addService, removeService } = serviceSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(removeService(amount));
  }
};

export default serviceSlice.reducer;


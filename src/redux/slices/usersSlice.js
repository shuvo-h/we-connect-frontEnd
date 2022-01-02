import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  allUsers: []
};

export const fetchUsersData = createAsyncThunk("users/fetchUsers", async()=>{
  const response = await fetch("http://localhost:5000/users")
      .then(res=>res.json())
  return response;
})

export const usersSlice = createSlice({
  name: 'allUsers',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addUser: (state,action) => {
      // state.value += 1;
      // console.log(action.payload);
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    deleteUser: (state, action) => {
      // state.value += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsersData.pending, (state) => {
        state.status = 'loading';
      })
    builder.addCase(fetchUsersData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.allUsers.push(action.payload) ;
      });
  },
});

export const { addUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;


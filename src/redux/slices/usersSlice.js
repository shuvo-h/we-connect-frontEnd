import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  allUsers: [],
  singleUser: {},
  categorizedUser: []
};

// get all user from database 
export const fetchUsersData = createAsyncThunk("users/fetchUsers", async()=>{
  const response = await fetch("https://shrouded-wave-36908.herokuapp.com/users")
      .then(res=>res.json())
  return response;
})

// get single user from database 
export const fetchSingleUser = createAsyncThunk("users/fetchUser", async(id)=>{
  const response = await fetch(`https://shrouded-wave-36908.herokuapp.com/users/${id}`)
      .then(res=>res.json())
  return response;
})

// get users by category from database 
export const fetchUsersCategory = createAsyncThunk("users/fetchCategorizedUser", async(categoryName)=>{
  const response = await fetch(`https://shrouded-wave-36908.herokuapp.com/users/category/${categoryName}`)
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
      
      // for single user 
    builder.addCase(fetchSingleUser.pending, (state) => {
        state.status = 'loading';
      })
    builder.addCase(fetchSingleUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.singleUser = action.payload;
      });
      // for  users based on category
    builder.addCase(fetchUsersCategory.pending, (state) => {
        state.status = 'loading';
      })
    builder.addCase(fetchUsersCategory.fulfilled, (state, action) => {
        state.status = 'idle';
        state.categorizedUser.push(action.payload) ;
      });
  },
});

export const { addUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;


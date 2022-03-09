import { createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
  // store name
  name: "user",
  // state
  initialState:{
    userInfo:{
      name: "Dennis",
      email: "dennis@email.com"
    }, 
    pending: null,
    error: false,
    
  },
// actions
  reducers:{
    updateStart:(state)=>{
      state.pending = true;
    },
    updateSuccess:(state, action)=>{
      state.pending = false;
      state.userInfo = action.payload;
    },
    updateFailure:(state)=>{
      state.error = true;
    },
    
  },
});

// export action
export const {updateStart, updateSuccess, updateFailure} = userSlice.actions;

// export reducer to use in store
export default userSlice.reducer
 
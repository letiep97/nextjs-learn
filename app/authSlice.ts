import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    isConnect: false,
  },
  reducers: {
    connectWallet: (state) => {
      state.isConnect = true;
    },
    disconnectWallet: (state) => {
      state.isConnect = false;
    },
  },
});

const { reducer, actions } = authReducer;
export const { connectWallet, disconnectWallet } = actions;
export default reducer;

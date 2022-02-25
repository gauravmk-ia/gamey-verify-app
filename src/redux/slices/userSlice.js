import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: undefined,
  user_type: undefined,
  permissions: undefined,
}

export const slice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, action) => ({
      ...state,
      user: action.payload,
    }),
    setUserType: (state, action) => ({
      ...state,
      userType: action.payload,
    }),
    setPermissions: (state, action) => ({
      ...state,
      permissions: action.payload,
    }),
  },
});

export const { setUser, setUserType, setPermissions } = slice.actions;

export default slice.reducer;

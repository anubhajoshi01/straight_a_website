import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from './authService'

export const checkLoggedIn = () => {
  const setupTime = new Date(parseInt(localStorage.getItem('setupTime')))
  const now =  new Date()

  const loggedIn = setupTime !== null && setupTime > now;
  if(!loggedIn){
    localStorage.removeItem('user');
  }

  return loggedIn
}

checkLoggedIn();

const user = localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : null

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}



export const login = createAsyncThunk(
    'auth/login',
    async(user, thunkAPI) => {
        try {
            return await authService.loginUser(user)
          } catch (error) {
            const message =
              (error.response && error.response.data && error.response.data.message) ||
              error.message ||
              error.toString()
            return thunkAPI.rejectWithValue(message)
          }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        await authService.logout()
    }
)

export const authSlice = createSlice({
    name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
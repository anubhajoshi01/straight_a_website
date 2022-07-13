import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import formService from './formService'

const initialState = {
    forms: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const createForm = createAsyncThunk(
    'forms/create',
    async (formData, thunkAPI) => {
        try {
            return await formService.createForm(formData)
        }catch(e){
            const msg = (e.response && e.response.data && e.response.data.message) ||
            e.message || e.toString()
            console.log(e)
            return thunkAPI.rejectWithValue(msg);
        }
    }
)

export const deleteForm = createAsyncThunk(
    'forms/delete', 
    async(id, thunkAPI) => {
        try{
            const token = thunkAPI.getState().auth.user.token
            return await formService.deleteForm(id, token)
        }catch(e){
            const message = (e.respone && e.respone.data && e.respone.data.message) || e.message || e.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers : {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(createForm.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createForm.fulfilled, (state) => {
            state.isLoading = false
            state.isSuccess = true           
        })
        .addCase(createForm.rejected, (state) => {
            state.isLoading = false
            state.isError = true
        })
        .addCase(deleteForm.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteForm.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.blogs = state.goals.filter(
                (goal) => goal._id !== action.payload.id
            )
        })
        .addCase(deleteForm.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const { reset } = formSlice.actions
export default formSlice.reducer
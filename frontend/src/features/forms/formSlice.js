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

    }
})

export const { reset } = formSlice.actions
export default formSlice.reducer
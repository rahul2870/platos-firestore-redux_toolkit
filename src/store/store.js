import { configureStore } from '@reduxjs/toolkit' 
import PresonSlice from './features/personList'

export default configureStore({
    reducer: {
        person: PresonSlice
    },
})
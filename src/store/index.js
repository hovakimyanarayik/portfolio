import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from '../slices/ProjectsSlice'


export default configureStore({
    reducer: {
        projects: projectsReducer
    }
})
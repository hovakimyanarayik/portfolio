import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../firebase.confing";
import { collection, getDocs } from "firebase/firestore";


export const getProjects = createAsyncThunk(
    'projects/getProjects',
    async function(_, {rejectWithValue}) {
        const projectsCollectionRef = collection(db, "projects");
        try {
            const data = await getDocs(projectsCollectionRef);
            return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        } catch (error) {
            console.log(error);
        }
    }
)


const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: [],
        isLoading: true,
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(getProjects.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(getProjects.fulfilled, (state, action) => {
                state.isLoading = false
                state.projects = action.payload
            })
            .addCase(getProjects.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})


export default projectsSlice.reducer
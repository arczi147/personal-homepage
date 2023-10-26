import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        projects: null,
        status: "loading",
    },
    reducers: {
        fetchProjects: () => ({
            projects: null,
            status: "loading",
        }),
        fetchProjectsSuccess: ({ payload: projects }) => ({
            projects,
            status: "success",
        }),
        fecthProjectsError: () => ({
            projects: null,
            status: "error",
        }),
    },
});

export const {
    fetchProjects,
    fetchProjectsSuccess,
    fecthProjectsError
} = projectsSlice.actions;


export const selectProjectsState = state => state.projects;

export const selectProjects = state => selectProjectsState(state).projects;
export const selectProjectsStatus = state => selectProjectsState(state).status;

export default projectsSlice.reducer;
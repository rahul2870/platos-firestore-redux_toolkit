import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from '../../firebase'
import { v4 as uuidv4 } from 'uuid';



export const saveUser = createAsyncThunk(
    "person/saveUser",
    async (payload, getState) => {
        return new Promise((resolve, reject) => {
            const { toSave, collection } = payload;
            const id = uuidv4()
            db.collection(collection).doc(id).set({
                id,
                person: toSave
            }).then(e => {
                resolve('done')
            }).catch(() => {
                reject('error')
            })
        })
    }
)



export const editUser = createAsyncThunk(
    "person/editUser",
    async (payload, getState) => {
        const { collection, id, person } = payload
        return new Promise((resolve, reject) => {
            db.collection(collection).doc(id).update({
                person
            }).then(e => {
                resolve('done')
            }).catch(() => {
                reject('error')
            })
        })
    }
)

export const deleteUser = createAsyncThunk(
    "person/deleteUser",
    async (payload, getState) => {
        const { collection, id } = payload
        return new Promise((resolve, reject) => {
            db.collection(collection).doc(id).delete()
                .then(e => {
                    resolve('done')
                }).catch(() => {
                    reject('error')
                })
        })
    }
)

const initialState = {
    status: "Typing.....",
    person: []
}

export const PersonSlice = createSlice({
    name: "person",
    initialState: initialState,
    reducers: {
        saveList: (state, payload) => {
            state.person = payload.payload
        }
    },
    extraReducers: {
        [saveUser.pending]: (state, action) => {
            state.status = "loading";
        },
        [saveUser.fulfilled]: (state, action) => {
            state.status = "success";
        },
        [saveUser.rejected]: (state, action) => {
            state.status = "failed";
        },
        [editUser.pending]: (state, action) => {
            state.status = "loading";
        },
        [editUser.fulfilled]: (state, action) => {
            state.status = "success";
        },
        [editUser.rejected]: (state, action) => {
            state.status = "failed";
        },
        [deleteUser.pending]: (state, action) => {
            state.status = "loading";
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.status = "success";
        },
        [deleteUser.rejected]: (state, action) => {
            state.status = "failed";
        }
    }
})



export const { saveList } = PersonSlice.actions;
export default PersonSlice.reducer;
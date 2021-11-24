import { db } from '../../firebase'
import { v4 as uuidv4 } from 'uuid';

export const saveName = (payload) => {
    return new Promise((resolve, reject) => {
        const { toSave, collection } = payload;
        const id = uuidv4()
        db.collection(collection).doc(id).set({
            id,
            food: toSave
        }).then(e => {
            resolve('done')
        }).catch(() => {
            reject('error')
        })
    })

}


export const editName = (payload) => {
    return new Promise((resolve, reject) => {
        const { collection, id, food } = payload;
        db.collection(collection).doc(id).set({
            id,
            food
        }).then(e => {
            resolve('done')
        }).catch(() => {
            reject('error')
        })
    })

}



export const deleteName = (payload) => {
    return new Promise((resolve, reject) => {
        const { collection, id } = payload;
        db.collection(collection).doc(id)
            .delete()
            .then(e => {
                resolve('done')
            }).catch(() => {
                reject('error')
            })
    })

}
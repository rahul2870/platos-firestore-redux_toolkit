import React, { useState } from 'react'
import SMheader from '../_component/header/header'
import AddFoodModal from '../_component/Add-modal-for-food/modal'
import './style.css'
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase'
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import { editName, deleteName } from './firebaseHandlers';
import CircularProgress from '@mui/material/CircularProgress';
import MessageAlertCompo from '../_component/MessageAlertCompo/MessageAlertCompo'

export default function Food() {

    const [value, loading, error] = useCollection(db.collection("Food"))
    const [isEditable, setIsEditable] = useState("none")
    const [inputTemp, setInputTemp] = useState(null)
    const [messageAlert, setMessageAlert] = useState(null)
    const alertMessageHandler = (message) => {
        setMessageAlert(message)
        setTimeout(() => {
            setMessageAlert(null)
        }, 1700);
    }
    return (
        <div className="main-body">
            <SMheader pageTitle="Food" />
            <AddFoodModal type="Food" />

            {messageAlert && <MessageAlertCompo message={messageAlert ? messageAlert : "Saved"} />}

            <main id='person-page-list'>
                {loading && <CircularProgress />}
                {value && value.docs.map(val => {
                    return <div>
                        <input
                            className={val.data().id != isEditable ? "input-tobe-not-to-change" : "input-tobe-change"}
                            value={val.data().id != isEditable ? val.data().food : inputTemp}
                            onChange={(e) => {
                                setInputTemp(e.target.value)
                            }}
                            disabled={val.data().id != isEditable}
                        />
                        <aside
                            onClick={() => {
                                setIsEditable(val.data().id)
                                setInputTemp(null)
                            }}> <EditIcon />
                        </aside>
                        <aside
                            onClick={() => {
                                deleteName({
                                    collection: "Food",
                                    id: val.data().id
                                }).then(() => {
                                    setIsEditable(null)
                                    alertMessageHandler("Removed")
                                }).catch(() => {
                                    alertMessageHandler("Error")
                                })
                            }}> <CancelIcon />
                        </aside>
                        {(inputTemp &&
                            val.data().id == isEditable && inputTemp != val.data().food)
                            && <p onClick={() => {
                                editName({
                                    collection: 'Food',
                                    id: val.data().id,
                                    food: inputTemp
                                }).then(() => {
                                    setIsEditable(null)
                                    alertMessageHandler("Updated")
                                }).catch(() => {
                                    alertMessageHandler("Error")
                                })
                            }}>Save changes</p>}
                    </div>
                })}

            </main>
        </div>
    )
}

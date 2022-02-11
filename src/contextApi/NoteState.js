
import React, { useEffect, useState, } from 'react'
import NoteContext from './NoteContext'
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { analytics, auth } from '../Config'

function NoteState(props) {
    const [name, setName] = useState("subham")
    const [AllData, setAllData] = useState([])
    const [pData, setpData] = useState([])
    const userCollectionRef = collection(analytics, "product");


    function ChangeItem(Categorydata) {
       
      let paData = []
        pData.map((a)=>{
          if (a.Category === Categorydata ) {
            paData.push(a)
          }
        })
        setAllData(paData)
      }
    async function getAllData() {
        const data = await getDocs(userCollectionRef)

        setAllData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setpData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));



    }
    useEffect(() => {
        getAllData()
    }, [])
    return (
        <NoteContext.Provider value={{ name, AllData,ChangeItem ,pData}} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState

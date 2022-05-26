import app from '../../firebase'
import { useEffect, useState } from 'react'

export function useUser() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        app.firestore().collection("usersData").get().then(snap => {
            const newUser = snap.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))

            setUsers(newUser)
        })
    }, [])

    return users
}
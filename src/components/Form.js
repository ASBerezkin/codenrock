import React, { useEffect, useState } from 'react'
import firebase from 'firebase'

export const Form = () => {
  const [value, setValue] = useState('');
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyAoTb8h18f4B62eWU_j48O9LEbl-gjkH3M",
      authDomain: "codenrock.firebaseapp.com",
      databaseURL: "https://codenrock.firebaseio.com",
      projectId: "codenrock",
      storageBucket: "codenrock.appspot.com",
      messagingSenderId: "71208743367",
      appId: "1:71208743367:web:57720d57d281cfe2aa69e2"
    };

    firebase.initializeApp(firebaseConfig)

    const db = firebase.database()
  }, [])

  const handleClick = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    firebase.auth().createUserWithEmailAndPassword(value, 'akjhdsfgjahds21431KKK').then(response => console.log(response)).catch(error => console.log(error))
  }

  return (
    <>
      <input value={value} onChange={handleClick} />
      <button onClick={handleSubmit}>Клик</button>
      </>
  )
}

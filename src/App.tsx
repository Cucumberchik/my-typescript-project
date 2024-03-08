import React, { useEffect, useState } from "react"
import './App.scss';
import axios from "axios";
import { peopleApi } from "./api";
import { TypeApi, TypeUser } from "./types/types";
import UserList from "./components/UserList";


function App() {
  let [users, setUser] = useState<TypeUser[]>([])
  useEffect(() => { getUser() }, [])
  async function getUser() {
    try {
      const person = await axios<TypeApi>(peopleApi).then(res => res.data)
      setUser(person.value)
    } catch (e) {
      alert(e)
    }
  }
  return (
    <div className="App">
      {users.map((el, id) => (
        <div className="list" key={id}>
          <UserList user={el} />
        </div>
      ))}

    </div>
  );
}

export default App;

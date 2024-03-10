import { types } from "../../types/ActionTypes";
import { TypeTodo } from "@/types/types";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type TypeSelector = {
    users: TypeTodo[];
}
const Card = () => {
    let [values, setValues] = useState<TypeTodo>({
        name: "",
        surname: '',
        age: ""
    });
    let [user, setUser] = useState('')
    function getName(e: React.ChangeEvent<HTMLInputElement>, type: string) {
        if (type === "name") {
            setValues({ ...values, name: e.target.value });
        } else if (type === "surname") {
            setValues({ ...values, surname: e.target.value });
        } else {
            setValues({ ...values, age: e.target.value.replace(/[a-z , . /@]/, '') });
        }
    }
    let dispatch = useDispatch()
    console.log(user);

    let users = useSelector((state: TypeSelector) => state.users)
    const readOnly: TypeTodo = {
        name: "",
        surname: "",
        age: "",
        id: Date.now(),
    }
    const handleUser = () => {
        if (!users.includes(values)) {
            if (values !== readOnly) {
                dispatch({ type: types.addUser, payload: values })
                setValues({
                    name: "",
                    surname: '',
                    age: ""
                })
            } else {
                return
            }
        } else {
            return
        }

    }
    const handleEdit = (el: TypeTodo) => {
        setUser((user: string) => user = "edit")
        setValues(el)
    }
    return (
        <div className="Card">
            <div className="content">
                <div className="card_add_user">
                    <div className="card_add_Inputs">
                        <input value={values.name} onChange={(e) => getName(e, "name")} type="text" placeholder="Name" />
                        <input value={values.surname} onChange={(e) => getName(e, "surname")} type="text" placeholder="Surname" />
                        <input value={values.age} onChange={(e) => getName(e, "")} type="text" placeholder="Age" />
                        <button onClick={handleUser}>Add user</button>
                    </div>
                    <div className="card_read_user">
                        {users.map((el, id) => (
                            <div key={id} className="user_content">
                                <h2>{el.age}</h2>
                                <h1>{el.name}</h1>
                                <h4>{el.surname}</h4>
                                <button onClick={() => handleEdit(el)}>edit</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

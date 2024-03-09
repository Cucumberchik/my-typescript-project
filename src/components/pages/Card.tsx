import { types } from "../../types/ActionTypes";
import { IState } from "@/redux/moduls/users";
import { TypeValue } from "@/types/types";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const Card = () => {
    let [values, setValues] = useState<TypeValue>({
        name: "",
        surname: '',
        age: ""
    });
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
    let users = useSelector<IState>(state => state.users)

    const readOnly = {
        name: "",
        surname: "",
        age: ""
    }
    const handleUser = () => {
        if (values !== readOnly) {
            dispatch({ type: types.addUser, payload: values })
        } else {
            return
        }
    }
    console.log(users);

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
                </div>
            </div>
        </div>
    )
}

export default Card

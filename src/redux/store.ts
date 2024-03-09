import { createStore } from "redux";
import users from "./moduls/users";

export const store = createStore(users);
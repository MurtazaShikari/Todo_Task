import axios from "axios";

import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO } from "./type";

const API_URL = "http://localhost:8000";

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/todos`, { data });
    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (err) {
    console.log("Error while calling addNewTodo API", err.message);
  }
};

export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos`);
    dispatch({ type: GETALL_TODO, payload: res.data });
  } catch (err) {
    console.log("Error while calling getAllTodos API", err.message);
  }
};
export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos/${id}`);
    dispatch({ type: TOGGLE_TODO, payload: res.data });
  } catch (err) {
    console.log("Error while calling toggleTodo API", err.message);
  }
};

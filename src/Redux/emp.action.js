import * as types from "./student.actionType";
import axios from "axios";
import { getItem } from "../../Utils/localStorage";

export const getStudent =()=> (dispatch) => {
  const token = getItem("token");

  dispatch({ type: types.GET_EMPLOYEE_REQUEST });
  return axios
    .get("employee", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((r) => {
      dispatch({ type: types.GET_EMPLOYEE_SUCCESS, payload: r.data });
      return types.GET_EMPLOYEE_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.GET_EMPLOYEE_FAILURE, payload: err });
      return types.GET_EMPLOYEE_FAILURE;
    });
};







import * as types from "./emp.action.type";

const initialState = {
  employee: [],
  isLoading: false,
  isError: false,
};


export const empReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    
    case types.GET_EMPLOYEE_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
  
    case types.GET_EMPLOYEE_SUCCESS: {
      
      return {
        ...state,
        employee:[...payload],
        isLoading: false,
        isError: false,
      };
    }

    case types.GET_EMPLOYEE_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    
    default:
      return state;
  }
};

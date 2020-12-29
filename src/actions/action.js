import axios from "axios";
export const getEmployees = (dispatch) => {
  return (dispatch) => {
    axios.get("http://localhost:8080/fetch").then(
      (posRes) => {
        dispatch(myFun(posRes.data));
      },
      (errRes) => {
        console.log(errRes);
      }
    );
  };
};

const myFun = (records) => {
  return {
    type: "FETCH",
    value: records,
  };
};

// import { bindActionCreators } from "redux";

export const addFeature = (action) => {
    console.log("Dispatching ADD_FEATURE: " + action.name);
    return { type: "ADD_FEATURE", payload: action };
  };
  
  export const removeFeature = (action) => {
    console.log("Dispatching REMOVE_FEATURE: " + action.name);
    return { type: "REMOVE_FEATURE", payload: action };
  };
  
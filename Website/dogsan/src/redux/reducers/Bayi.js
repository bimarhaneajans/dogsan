import {
    CREATE_TUTORIAL,
    RETRIEVE_TUTORIALS,
    UPDATE_TUTORIAL,
    DELETE_TUTORIAL,
    DELETE_ALL_TUTORIALS,
  } from "../actions/types";
  
  const initialState = [];
  
  const tutorialReducer = (bayi = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_TUTORIAL:
        return [...bayi, payload];
  
      case RETRIEVE_TUTORIALS:
        return payload;
  
      case UPDATE_TUTORIAL:
        return bayi.map((tutorial) => {
          if (tutorial.id === payload.id) {
            return {
              ...bayi,
              ...payload,
            };
          } else {
            return tutorial;
          }
        });
  
      case DELETE_TUTORIAL:
        return bayi.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_TUTORIALS:
        return [];
  
      default:
        return bayi;
    }
  };
  
  export default tutorialReducer;
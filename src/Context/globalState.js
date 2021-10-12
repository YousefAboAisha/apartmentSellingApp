import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./appReducer";

// initial State
const initialState = {
  favHouses: JSON.parse(localStorage.getItem("favHouses")) || [],
  id: JSON.parse(localStorage.getItem("houseId")) || [],
};

// Create context
export const GlobalState = createContext(AppReducer);

// Provider Components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favHouses", JSON.stringify(state.favHouses));
    localStorage.setItem("houseId", JSON.stringify(state.id));
  }, [state]);

  const addHouseTofavHouses = (house) => {
    dispatch({ type: "ADD_House_To_Wish_List", payload: house });
  };

  const removeHouseTofavHouses = (id) => {
    dispatch({ type: "REMOVE_House_To_Wish_List", payload: id });
  };

  const setHouseId = (id) => {
    dispatch({ type: "SET_HOUSE_ID", payload: id });
  };

  return (
    <GlobalState.Provider
      value={{
        favHouses: state.favHouses,
        addHouseTofavHouses,
        removeHouseTofavHouses,
        id: state.id,
        setHouseId,
      }}
    >
      {props.children}
    </GlobalState.Provider>
  );
};

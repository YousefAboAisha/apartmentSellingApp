const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_House_To_Wish_List":
      return {
        ...state,
        favHouses: [...state.favHouses, action.payload],
      };

    case "REMOVE_House_To_Wish_List":
      return {
        ...state,
        favHouses: state.favHouses.filter(
          (house) => house.id !== action.payload
        ),
      };

    case "SET_HOUSE_ID":
      return {
        ...state,
        id: action.payload,
      };

    default:
      return state;
  }
};

export default AppReducer;

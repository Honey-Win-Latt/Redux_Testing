const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  // console.log(action.type);
  switch (action.type) {
    case "ADD": {
      let newPerson = {
        id: Math.random(),
        name: "Max",
        age: Math.floor(Math.random() * 40)
      };

      return { ...state.persons, persons: state.persons.concat(newPerson) };
      break;
    }
    case "DELETE": {
      let newPersons = state.persons.filter(p => p.id !== action.id);
      return {
        ...state.persons,
        persons: newPersons
      };
    }
    default:
      return state;
  }
};

export default reducer;

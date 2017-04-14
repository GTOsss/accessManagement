const initialState = {
  users: [
    {name: "Vasya", type: "Read"},
    {name: "Vitalyi", type: "Read"},
    {name: "Timothey", type: "Read"},
    {name: "Alex", type: "Write"}
  ],
  resultSearch: []
}

class user {
  constructor(name, type){
    this.name = name;
    this.type = type;
  }
}

export default function menu(state = initialState, action) {
  switch(action.type){
    case 'ADD_USER':
      state = {
        ...state,
        users: [...state.users, new user(action.payload.name, action.payload.type)]
      };
      break;
    case 'UPDATE_RESULT_SEARCH':
      state = {
        ...state,
        resultSearch: action.payload.users
      };
      break;
    case 'DELETE_USER':
      let newUsers = state.users.concat([]);
      newUsers.splice(action.payload.index, 1);
      state = {
        ...state,
        users: newUsers
      }
      break;
    case 'CHANGE_RIGHT':
      state = {
        ...state,
        users: [...state.users],
        resultSearch: [...state.resultSearch]
      }
      state.users[action.payload.index].type = action.payload.typeRight;
      break;
  }


  return state;
}


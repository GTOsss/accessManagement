const initialState = {
  users: []
}

class User {
  constructor(name, id){
    this.name = name;
    this.id = id;
  }
}

export default function menuAjax(state = initialState, action) {
  switch(action.type){
    case 'ADD_USER':
      console.log(action.payload);
      state = {
        ...state,
        users: [...state.users, new User(action.payload.name, action.payload.id)]
      };
      break;
    case 'DELETE_USER':
      state = {
        ...state,
        users: [...state.users]
      }
      state.users.splice(action.payload.index, 1);
      break;
    case 'UPDATE_USERS':
      state = {
        ...state,
        users: [...state.users]
      }
      state.users = action.payload.users
      break;
    case 'CHANGE_USER':
      state = {
        ...state,
        users: [...state.users]
      }
      state.users[action.payload.index].name = action.payload.name;
  }

  return state;
}


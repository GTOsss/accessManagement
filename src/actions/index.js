import $ from 'jquery';

export function addUser(name, type){
  return {
    type: 'ADD_USER',
    payload: {
      name: name,
      type: type
    }
  }
}

export function updateResultSearch(users) {
  return {
    type: 'UPDATE_RESULT_SEARCH',
    payload: {
      users: users
    }
  }
}

export function deleteUser(index){
  return {
    type: 'DELETE_USER',
    payload: {
      index: index
    }
  }
}

export function changeRight(index, typeRight){
  return {
    type: 'CHANGE_RIGHT',
    payload: {
      index: index,
      typeRight: typeRight
    }
  }
}

export function updateUsersAjax(){
  return dispatch => {
      $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/api/users/'
    }).then(data => {
      return dispatch({
        type: 'UPDATE_USERS',
        payload: {
          users: data.users
        }
      })
    }).catch(err => {
      console.error(err);
    })
  }
}

export function addUserAjax(name){
  return dispatch => {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/api/users/',
      data: {
        name: name
      }
    }).then(data => {
      return dispatch({
        type: 'ADD_USER',
        payload: {
          id: data.user.id,
          name: data.user.name
        }
      })
    }).catch(err => {
      console.error(err);
    })
  }
}

export function deleteUserAjax(id, index){
  return dispatch => {
    $.ajax({
      method: 'DELETE',
      url: 'http://localhost:3000/api/users/'+id
    }).then(data => {
      return dispatch({
        type: 'DELETE_USER',
        payload: {
          index: index
        }
      })
    }).catch(err => {
      console.error(err);
    })
  }
}

export function changeUserAjax(id, index, name) {
  return dispatch => {
    $.ajax({
      method: 'PUT',
      url: 'http://localhost:3000/api/users/'+id,
      data: {
        name: name
      }
    }).then(data => {
      console.log(data);
      return dispatch({
        type: 'CHANGE_USER',
        payload: {
          index: index,
          name: data.user.name
        }
      })
    }).catch(err => {
      console.error(err);
    })
  }
}





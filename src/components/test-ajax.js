import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import "./menu.css";
import $ from 'jquery';

class TestAjax extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/menu">Меню</Link></li>
            <li><Link to="/menu_ajax">Меню Ajax</Link></li>
            <li className="active"><Link to="/test_ajax">Тест Ajax</Link></li>
          </ul>
        </div>
      </div>
    );
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/api/users/'
    }).then(data => {
      console.log(data);
      return $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/api/users/',
        data: {
          name: 'Test user'
        }
      })
    }).then(data => {
      console.log(data);
      return $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/api/users/2'
      })
    }).then(data => {
      console.log(data);
      return $.ajax({
        method: 'PUT',
        url: 'http://localhost:3000/api/users/2',
        data: {
          name: 'test user changed!!!'
        }
      })
    }).then(data => {
      console.log(data);
      return $.ajax({
        method: 'DELETE',
        url: 'http://localhost:3000/api/users/2'
      })
    }).then(data => {
      console.log(data);
      return $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/api/users/'
      })
    }).then(data => {
      console.log(data)
    }).catch(error => {
      console.log(error);
    })
  }
}


function mapStateToProps(state){
  return {
  };
}

function mapDispatchToProps(dispach){
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestAjax);
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Main extends React.Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <ul className="nav navbar-nav">
          <li className="active"><Link to="/">Главная</Link></li>
          <li><Link to="/menu">Меню</Link></li>
          <li><Link to="/menu_ajax">Меню Ajax</Link></li>
          <li><Link to="/test_ajax">Тест Ajax</Link></li>
        </ul>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import "./menu.css";

class MenuAjax extends React.Component {
  constructor(props){
    super(props);
    this.state = { isInputRed: false, indexInputRename: -1};
  }

  render() {
    let reactElements = this.props.users.map((el, i) => {
      return (
        <tr key={i}>
          <td className="col-md-10">
            { this.getLabelOrInput(el, i) }
          </td>
          <td className="col-md-2">
            <span>{el.type}</span>
            <span
              key={i}
              className="glyphicon glyphicon-remove-sign btn-remove"
              onClick={(e)=>{this.deleteUser(i)}}>
            </span>
          </td>
        </tr>
      )
    });

    return (
      <div>
        <div className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/menu">Меню</Link></li>
            <li className="active"><Link to="/menu_ajax">Меню Ajax</Link></li>
            <li><Link to="/test_ajax">Тест Ajax</Link></li>
          </ul>
        </div>
        <div className="form-find">
          <input
            type="text"
            className={"col-md-6 search" + (this.state.isInputRed ? "-red" : "")}
            ref="search"
          />
          <div className="col-md-2">
            <select name="" id="" className="form-control" ref="selectRights">
              <option value="Read">Read</option>
              <option value="Write">Write</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <input type="button" value="Add" onClick={() => this.addUser()} className="btn btn-default"/>
        </div>
        <table className="col-md-12 table-users">
          <tbody>
          <tr>
            <th className="col-md-10">Name</th>
            <th className="col-md-2">Status</th>
          </tr >
            { reactElements }
          </tbody>
        </table>
      </div>
    );
  }

  getLabelOrInput(el, index) {
    if(index !== this.state.indexInputRename) {
      return (
        <span
          onClick={() => { this.rename(index) }}
        >{el.name}</span>
      )
    }
    else {
      return (
        <input
          type="text"
          className=""
          defaultValue={el.name}
          autoFocus
          onBlur={() => { this.rename(-1) }}
          ref="renameInput"/>
      )
    }
  }

  componentDidMount() {
    this.props.updateUsers();
  }

  componentDidUpdate() {
  }

  rename(index){
    if(index === -1){
      let i = this.state.indexInputRename;
      console.log(i, this.props.users[i].id, i, this.refs.renameInput.value);
      this.props.changeUser(this.props.users[i].id, i, this.refs.renameInput.value);
    }

    this.setState({indexInputRename: index})
  }

  focusChange(typeEvent) {

  }

  addUser(){
    this.props.addUser(this.refs.search.value);
  }

  deleteUser(index) {
    this.props.deleteUser(this.props.users[index].id, index)
  }
}

function mapStateToProps(state){
  return {
    users: state.menuAjax.users
  };
}

function mapDispatchToProps(dispach){
  return {
    addUser: bindActionCreators(actions.addUserAjax, dispach),
    deleteUser: bindActionCreators(actions.deleteUserAjax, dispach),
    updateUsers: bindActionCreators(actions.updateUsersAjax, dispach),
    changeUser: bindActionCreators(actions.changeUserAjax, dispach)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuAjax);
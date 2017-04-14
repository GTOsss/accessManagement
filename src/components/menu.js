import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import "./menu.css";

class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state = { isInputRed: false, isShowReasultSearch: false };
  }

  render() {
    let reactElements = this.props.users.map((el, i) => {
      return (
        <tr key={i}>
          <td className="col-md-10">{el.name}</td>
          <td className="col-md-2">
            <span>{el.type}</span>
            <span
              key={i}
              className="glyphicon glyphicon-remove-sign btn-remove"
              onClick={(e)=>{this.deleteUser(i)}}>
            </span>
          </td>
        </tr>
      );
    });

    let reactElementsSearchResult;
    if(!this.props.resultSearch){
      reactElementsSearchResult = this.props.resultSearch.map((el, i) => {
        return (
          <tr key={i}>
            <td className="col-md-6">{el.name}</td>
          </tr>
        );
      });
    }

    return (
      <div>
        <div className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li><Link to="/">Главная</Link></li>
            <li className="active"><Link to="/menu">Меню</Link></li>
            <li><Link to="/menu_ajax">Меню Ajax</Link></li>
            <li><Link to="/test_ajax">Тест Ajax</Link></li>
          </ul>
        </div>
        <div className="form-find">
          <input
            type="text"
            className={"col-md-6 search" + (this.state.isInputRed ? "-red" : "")}
            onChange={() => this.chageInputSearch()}
            ref="search"
          />
          <div className={"result-search col-md-6 " + (this.state.isShowReasultSearch ? "" : "none")} ref="resultSearch">
            <table className="table-users col-md-12">
              <tbody>
                { reactElementsSearchResult }
              </tbody>
            </table>
          </div>
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

  componentDidMount() {
    if(this.refs.resultSearch != undefined) {
      this.refs.resultSearch.style.left = this.refs.search.getBoundingClientRect().left + "px";
      this.refs.resultSearch.style.top = this.refs.search.getBoundingClientRect().top + this.refs.search.offsetHeight + "px";
      this.refs.resultSearch.style.width = this.refs.search.offsetWidth + "px";
    }

    this.refs.search.addEventListener('focus', (e)=>{this.focusChange('focus')});
    this.refs.search.addEventListener('focusout', (e)=>{this.focusChange('focusout')});
  }

  focusChange(typeEvent) {
    this.setState({isShowReasultSearch: !this.state.isShowReasultSearch});
  }

  addUser(){
    let isBreak = false;
    this.props.users.forEach((el, i) => {
      if (el.name === this.refs.search.value) {
        this.props.changeRight(i, this.refs.selectRights.value);
        isBreak = true;
        return;
      }
    });

    if(isBreak) { return };

    if(this.refs.search.value === "") {
      this.setState({isInputRed: !this.state.isInputRed});
      return;
    }
    this.props.addUser(this.refs.search.value, this.refs.selectRights.value);
  }

  chageInputSearch() {
    if(this.state.isInputRed){
      this.setState({isInputRed: !this.state.isInputRed});
    }

    let users = [];
    for (let i = 0; i < this.props.users.length; i++) {
      if(this.props.users[i].name.toLowerCase().indexOf(this.refs.search.value.toLowerCase()) != -1) {
        users.push(this.props.users[i]);
      }
    }
    this.props.updateResultSearch(users);
  }

  deleteUser(index) {
    this.props.deleteUser(index);
  }
}

function mapStateToProps(state){
  return {
    users: state.menu.users,
    resultSearch: state.menu.resultSearch
  };
}

function mapDispatchToProps(dispach){
  return {
    addUser: bindActionCreators(actions.addUser, dispach),
    updateResultSearch: bindActionCreators(actions.updateResultSearch, dispach),
    deleteUser: bindActionCreators(actions.deleteUser, dispach),
    changeRight: bindActionCreators(actions.changeRight, dispach)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
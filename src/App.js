import React, { Component } from "react";
import * as actions from "./actions/action";
import { connect } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
class App extends React.Component {
  componentDidMount() {
    this.props.getEmployees();
  }

  addProduct = () => {
    this.props.addRecord();
  };
  // showPopup = () => {
  //   console.log("hello");
  // };
  closePopup = () => {
    console.log("hiii");
  };

  render() {
    return (
      <div className="container mt-sm-5">
        <div
          className="btn btn-group btn-outline-primary float-right"
          onClick={this.showPopup}
          data-target="#products"
          data-toggle="modal"
        >
          <button className="btn btn-success btn-sm">Add</button>
          <i className=" glyphicon glyphicon-plus btn btn-info btn-sm"></i>
        </div>
        <table className="table table-bordered table-striped table-condensed">
          <thead>
            <tr className="bg-info">
              <th>SNO</th>
              <th>P_ID</th>
              <th>P_NAME</th>
              <th>P_COST</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((element, index) => (
              <tr>
                <th>{index + 1}</th>
                <th>{element.p_id}</th>
                <th>{element.p_name}</th>
                <th>{element.p_cost}</th>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ******************************modal design********************************** */}
        <div
          className="modal fade"
          id="products"
          data-keyboard="false"
          data-backdrop="static"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-sm">
            <div className="modal content">
              <div className="modal-header">
                <div className="modal-title">
                  <button
                    className="close"
                    onClick={this.closePopup}
                    data-dismiss="modal"
                  >
                    &times;
                  </button>
                  <h5>Products</h5>
                </div>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>P_ID</label>
                    <input
                      type="number"
                      className="form-control"
                      id="p_id"
                      placeholder="Product Id"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>P_NAME</label>
                    <input
                      type="text"
                      className="form-control"
                      id="p_name"
                      placeholder="Product Name"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>P_COST</label>
                    <input
                      type="number"
                      className="form-control"
                      id="p_cost"
                      placeholder="Product Cost"
                    ></input>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-success"
                  btn-sm
                  onClick={this.addProduct}
                >
                  Add
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={this.closePopup}
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const recive = (state) => {
  return {
    data: state.data,
  };
};

const send = (dispatch) => {
  return {
    getEmployees: () => {
      dispatch(actions.getEmployees());
    },
  };
};

export default connect(recive, send)(App);

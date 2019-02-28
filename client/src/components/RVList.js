import React, { Component } from "react";
import Modal from "./Modal";
import { Link } from 'react-router-dom'
import axios from "axios";

    class RVList extends Component {
      constructor(props) {
        super(props);
        this.state = {
          activeItem: {
            username: "",
            password: "",
            vehicleName: "",
            make: "",
            model: "",
            year: Number,
            rvClass: "",
            origin: "",
            image: "",
          },
          rvList: []
        };
      }

      componentDidMount() {
        this.refreshList();
      }

      refreshList = () => {
        axios
          .get("/api/rvs/")
          .then(res => this.setState({ rvList: res.data }))
          .catch(err => console.log(err));
      };

      toggle = () => {
        this.setState({ modal: !this.state.modal });
      };
      handleSubmit = item => {
        this.toggle();
        if (item.id) {
          axios
            .put(`/api/rvs/${item.id}/`, item)
            .then(res => this.refreshList());
          return;
        }
        axios
          .post("/api/rvs/", item)
          .then(res => this.refreshList());
      };
      handleDelete = item => {
        axios
          .delete(`/api/rvs/${item.id}`)
          .then(res => this.refreshList());
      };
      createItem = () => {
        const item = { username: "", password: "", vehicleName: "", make: "", model: "", year: Number, rvClass: "", origin: "", image:"" };
        this.setState({ activeItem: item, modal: !this.state.modal });
      };
      editItem = item => {
        this.setState({ activeItem: item, modal: !this.state.modal });
      };
      render() {
        return (
          <main className="content">
            <Link to="/">
            <a href= '/'><h1 className="text-white text-uppercase text-left my-4">Road Warrior</h1></a>
            </Link>
            <br></br>
            <div className="row ">
              <div className="col-md-6 col-sm-10 mx-auto p-0">
                <div className="card p-3">
                  <div className="">
                    <br></br>
                    <br></br>
                    <button onClick={this.createItem} className="btn btn-primary">
                      New RV
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {this.state.modal ? (
              <Modal
                activeItem={this.state.activeItem}
                toggle={this.toggle}
                onSave={this.handleSubmit}
              />
            ) : null}
          </main>
        );
      }
    }
    export default RVList;
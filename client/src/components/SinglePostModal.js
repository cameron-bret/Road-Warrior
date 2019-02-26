import React, { Component } from "react";
import Modal from "./Modal";
import axios from "axios";
import SimpleMap from "./SimpleMap";

    class SinglePostModal extends Component {
      constructor(props) {
        super(props);
        this.state = {
          activeItem: {
            vehicleName: "",
            post_image: "",
            title: "",
            description: "",
            date: Date,
          },
          postList: []
        };
      }

      componentDidMount() {
        this.refreshList();
      }

      refreshList = () => {
        axios
          .get("/api/posts/")
          .then(res => this.setState({ postList: res.data }))
          .catch(err => console.log(err));
      };

      toggle = () => {
        this.setState({ modal: !this.state.modal });
      };
      handleSubmit = item => {
        this.toggle();
        if (item.id) {
          axios
            .put(`/api/posts/${item.id}/`, item)
            .then(res => this.refreshList());
          return;
        }
        axios
          .post("/api/posts/", item)
          .then(res => this.refreshList());
      };
      handleDelete = item => {
        axios
          .delete(`/api/posts/${item.id}`)
          .then(res => this.refreshList());
      };
      createItem = () => {
        const item = { vehicleName: "", post_image:"", title: "", description: "", date: Date };
        this.setState({ activeItem: item, modal: !this.state.modal });
      };
      editItem = item => {
        this.setState({ activeItem: item, modal: !this.state.modal });
      };
      render() {
        return (
          <main className="content">
            <h1 className="text-white text-uppercase text-left my-4">Road Warrior</h1>
            <br></br>
            <div className="row ">
              <div className="col-md-6 col-sm-10 mx-auto p-0">
                <div className="card p-3">
                  <div className="">
                    <div>
                      <SimpleMap/>
                    </div>
                    <br></br>
                    <br></br>
                    <button onClick={this.createItem} className="btn btn-primary">
                      New Post
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
    export default SinglePostModal;
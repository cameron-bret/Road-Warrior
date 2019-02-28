import React, { Component } from "react";
import Modal from "./Modal";
import { Link } from 'react-router-dom'
import axios from "axios";
import SimpleMap from "./SimpleMap";
import styled from 'styled-components'

const HomeNavStyle = styled.nav`
    padding: 7px;
    text-decoration: none;
    display: inline-block;
    margin: 0 auto;
`
const MenuNavStyle = styled.nav`
    padding: 5px;
    display: inline-block;
    margin: 0 auto;
    position: absolute;right:0;top:10;
`
const PostStyle = styled.div`
    color: white;
    padding: 5px;
    display: block;
    margin: 0 auto;
`

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
          // console.log(res.data)
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
          <HomeNavStyle>
            <Link to="/">
            <a href= '/'><h1 className="text-white text-uppercase text-left my-4">Road Warrior</h1></a>
            </Link>
            </HomeNavStyle>
            <MenuNavStyle>
            <Link to="/rvs">
            <a href="https://imgur.com/z9iCNBO"><img src="https://i.imgur.com/z9iCNBO.png" alt="menu"/></a>
            </Link>
            <br></br>
            </MenuNavStyle>
            <div className="row ">
              <div className="col-md-6 col-sm-10 mx-auto p-0">
                <div className="card p-3">
                  <div className="">
                    <div>
                      <SimpleMap/>
                    </div>
                    <br></br>
                    <br></br>
                    <button onClick={this.createItem} className="btn btn-primary">New Post</button>
                  </div>
                </div>
              </div>
            </div>
            <PostStyle>
            <div>
              {this.state.postList.map((post, i) => (
                <div key ={i}>
                  {post.comment}
                  {post.vehicleName}
                  {post.post_image}
                  {post.title}
                  {post.description}
                  {post.date}
                  <button onClick= { () => this.handleDelete(post.title)} className="btn btn-primary">X</button>
                  <br></br>
                  <button onClick= { () => this.editItem(post.title)} className="btn btn-primary">Edit</button>
                </div>
              ))}
            </div>
            </PostStyle>
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
import React, { Component } from "react";
    import {
      Button,
      Modal,
      ModalHeader,
      ModalBody,
      ModalFooter,
      Form,
      FormGroup,
      Input,
      Label
    } from "reactstrap";

    export default class CustomModal extends Component {
      constructor(props) {
        super(props);
        this.state = {
          activeItem: this.props.activeItem
        };
      }
      handleChange = e => {
        let { name, value } = e.target;
        if (e.target.type === "checkbox") {
          value = e.target.checked;
        }
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
      };
      render() {
        const { toggle, onSave } = this.props;
        return (
          <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={toggle}> New Post </ModalHeader>
            <ModalBody>
              <Form>
              <FormGroup>
                  <Label for="vehicleName">Vehicle Name</Label>
                  <Input
                    type="text"
                    name="vehicleName"
                    value={this.state.activeItem.vehicleName}
                    onChange={this.handleChange}
                    placeholder="Vehicle Name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="post_image">Image</Label>
                  <Input
                    type="text"
                    name="post_image"
                    value={this.state.activeItem.post_image}
                    onChange={this.handleChange}
                    placeholder="Image URL"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="title">Title</Label>
                  <Input
                    type="text"
                    name="title"
                    value={this.state.activeItem.title}
                    onChange={this.handleChange}
                    placeholder="Title"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input
                    type="text"
                    name="description"
                    value={this.state.activeItem.description}
                    onChange={this.handleChange}
                    placeholder="Description"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="date">Date</Label>
                  <Input
                    type="date"
                    name="date"
                    value={this.state.activeItem.date}
                    onChange={this.handleChange}
                    placeholder="Date"
                  />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                Post
              </Button>
            </ModalFooter>
          </Modal>
        );
      }
    }
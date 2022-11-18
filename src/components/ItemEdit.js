import React, { Component } from 'react';
import './ItemEdit.css';
import { addItem } from '../actions';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item))
  }
}

class ItemEdit extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.itemTitle = React.createRef();
    this.itemSource = React.createRef();
    this.itemIngredients = React.createRef();
    this.itemPrepTime = React.createRef();
    this.itemInstructions = React.createRef();
  }

  handleSubmit(ev) {
    ev.preventDefault();
    let item = { title: this.itemTitle.current.value, 
                 source: this.itemSource.current.value, 
                 ingredients: this.itemIngredients.current.value, 
                 preptime: this.itemPrepTime.current.value, 
                 instructions: this.itemInstructions.current.value,
                 id: Date.now() 
  };
    this.props.addItem(item);   
    this.itemTitle.current.value = '';
    this.itemSource.current.value = '';
    this.itemIngredients.current.value = '';
    this.itemPrepTime.current.value = '';
    this.itemInstructions.current.value = '';
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formTitle" style={{width: "25%"}}>
          <Form.Label>Recipe Title</Form.Label>
          <Form.Control placeholder="Title" ref={this.itemTitle} />
          <Form.Label>Recipe Source</Form.Label>
          <Form.Control placeholder="Source" ref={this.itemSource} />
          <Form.Label>List of ingredients</Form.Label>
          <Form.Control placeholder="ingredients" ref={this.itemIngredients} />
          <Form.Label>Preparation time</Form.Label>
          <Form.Control placeholder="preptime" ref={this.itemPrepTime} />
          <Form.Label>Preparation instructions</Form.Label>
          <div>
            <textarea className="text-area" rows="4" cols="50" name="instructions" ref={this.itemInstructions}></textarea>
          </div>
        </Form.Group>
        <Button type="submit" onClick={(ev) => this.handleSubmit(ev)}>ADD</Button>
      </Form>
    )
  }
}

export default connect(null, mapDispatchToProps)(ItemEdit);
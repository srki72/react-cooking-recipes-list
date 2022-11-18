import React, { Component } from 'react';
import { connect } from "react-redux";
import { ListGroup, Button } from 'react-bootstrap';
import { deleteItem } from '../actions'
import './ItemLi.css';

function mapStateToProps(state) {
  return {
    items: state.items
  }  
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => dispatch(deleteItem(id))
  }
}


class ItemLi extends Component {
  render() {
    const list = this.props.items.map((item, ind)=>(
      <ListGroup.Item key={ind}>
        <div>
          <p>
          Recipe Name: {item.title}            
          </p>
        </div>

        <div>
          <p>
          Recipe Source: {item.source}            
          </p>
        </div>

        <div>
          <p>
          List of ingredients: {item.ingredients + ','}            
          </p>
        </div>

        <div>
          <p>
          Preparation Time: {item.preptime}            
          </p>
        </div>

        <div>
        Preparation Instructions: 
        <div>
        {item.instructions}
        </div>

        </div>
        <Button onClick={()=>this.props.deleteItem(item.id)} style={{ marginTop: '1em', marginLeft: '0%' }}>delete</Button>
      </ListGroup.Item>
      ));
    return (
      <ListGroup style={{ marginTop: '2em' }}>
        { list }
      </ListGroup>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemLi);
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import {add, changeDescription, search, clear } from "../store/actions/todoActions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler(e) {
    const {add, clear, search, description} = this.props
    if (e.key === "Enter") {
      e.shiftKey ? search(description) : add(description);
    } else if (e.key === "Escape") {
      clear();
    }
  }

  render() {
    const {add, search, description} = this.props
    return (
      <div role='form' className='todoForm cel'>
        <Grid cols='12 12 8'>
          <input
            id='description'
            className='form-control'
            placeholder='Adicione uma tarefa'
            onChange={this.props.changeDescription}
            onKeyUp={this.keyHandler}
            value={this.props.description}
          ></input>
        </Grid>

        <Grid cols='6 6 4'>
          <IconButton
            style='primary'
            icon='plus'
            onClick={() => {
              add(description)
            }}
            id='b1'
          ></IconButton>
          <IconButton
            style='info'
            icon='search'
            onClick={search}
            id='b2'
          ></IconButton>
          <IconButton
            style='danger'
            icon='close'
            onClick={this.props.clear}
            id='b3'
          ></IconButton>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  description: state.todo.description,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({add, changeDescription, search, clear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);

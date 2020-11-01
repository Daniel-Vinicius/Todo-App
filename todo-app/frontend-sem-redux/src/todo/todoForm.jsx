import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default (props) => {
  const keyHandler = (e) => {
    if(e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === 'Escape') {
      props.handleClear()
    }
  }

  return (
    <div role='form' className='todoForm cel'>
    <Grid cols='12 12 8'>
      <input
        id='description'
        className='form-control'
        placeholder='Adicione uma tarefa'
        onChange={props.handleChange}
        onKeyUp={keyHandler}
        value={props.description}
      ></input>
    </Grid>

    <Grid cols='6 6 4'>
      <IconButton style='primary' icon='plus'
      onClick={props.handleAdd} id='b1'
      ></IconButton>
      <IconButton style='info' icon='search'
      onClick={props.handleSearch} id='b2'
      ></IconButton>
      <IconButton style='danger' icon='close'
      onClick={props.handleClear} id='b3'
      ></IconButton>
    </Grid>
  </div>
  );
}

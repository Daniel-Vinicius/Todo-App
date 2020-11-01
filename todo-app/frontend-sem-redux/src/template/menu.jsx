import React from "react";

export default (props) => (
  <div className="container-fluid">
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>

      <a className='navbar-brand' href='#'>
        <div className="icone">
          <i className='fa fa-calendar-check-o fa-2x'></i> <h1>TodoApp</h1>
          </div>
        </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
        <span className="navbar-toggler-icon"></span>
      </button>   
       
      <div id='conteudoNavbarSuportado' className='navbar-collapse collapse'>

        <ul className='navbar-nav mr-auto '>

          <li className="nav-item navitem">
            <a className="linkli" href='#/todos'>Tarefas</a>
          </li>
          
          <li className="nav-item navitem">
            <a className="linkli" href='#/about'>Sobre</a>
          </li>

        </ul> 

      </div>

    </nav>
    </div>
);

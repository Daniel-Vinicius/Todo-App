import 'modules/font-awesome/css/font-awesome.min.css'
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import '../template/custom.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

export default props => (
    <div className="container">
        <Menu/>
        <Routes/>
    </div>
)

//quando está entre parenteses retorna algo, quando esta entre chaves  só retorna no return
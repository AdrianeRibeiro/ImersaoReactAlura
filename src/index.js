import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video/index'
import CadastroCategoria from './pages/cadastro/Categoria/index'
import PageNotFound from './pages/PageNotFound'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact></Route>
      <Route path='/cadastro/video' component={CadastroVideo}></Route>
      <Route path='/cadastro/categoria' component={CadastroCategoria}></Route>
      <Route component={PageNotFound}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

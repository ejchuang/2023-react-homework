import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoList from './TodoList'
import { HashRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter><TodoList /></HashRouter>
)

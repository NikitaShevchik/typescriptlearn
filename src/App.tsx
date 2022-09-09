import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import EventsExample from './components/EventsExample';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import { ITodo, IUser } from './types/types';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import TodosItemPage from './components/TodosItemPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <div>
            <Link to="/users" style={{ margin: '0 50px 0 0' }}>
              Пользователи
            </Link>
            <Link to="/todos">
              Список дел
            </Link>
          </div>
          <Routes>
            <Route path='/users' element={<UserPage />} />
            <Route path='/todos' element={<TodosPage />} />
            <Route path='/users/:id' element={<UserItemPage />} />
            <Route path='/todos/:id' element={<TodosItemPage />} />
            <Route path='*' element={<div>Not found</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

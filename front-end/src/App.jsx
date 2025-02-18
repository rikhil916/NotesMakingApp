import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/layout/Home';
import AllNotes from './pages/notes/AllNotes';
import NotesForm from './pages/notes/NotesForm';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path='/allnotes' element={<AllNotes />} />
        <Route path='/add' element={<NotesForm />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        </Route>
      </Routes>
    </>
    );     
}

export default App

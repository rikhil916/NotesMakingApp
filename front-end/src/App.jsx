import { useState,useEffect } from 'react'
import { Navigate,Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/layout/Home';
import AllNotes from './pages/notes/AllNotes';
import NotesForm from './pages/notes/NotesForm';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import toast,{ Toaster } from 'react-hot-toast';
import axios from 'axios';


function App() {
  const PrivateRoute=({children})=>{
    //const isAuthenticated=localStorage.getItem("token");
    const[isAuthenticated,setIsAuthenticated]=useState(false);
    const[isLoading,setIsLoading]=useState(true);
    const fetchUser=async()=>{
      setIsLoading(true);
      const response=await axios.get("http://localhost:8080/api/auth/get-user",{
        headers:{
          Authorization:`Bearer ${localStorage.getItem("token")}`
        }
      });
      console.log(response);
      if(response.data.success){
        setIsAuthenticated(true);
      }
      else{
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    }
    useEffect(()=>{
      fetchUser();
    },[])
    if(isLoading){
      return <p>Loading...</p>
    }
    return isAuthenticated ?children :<Navigate to="/login" />;
  }
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path='allnotes' element={
          <PrivateRoute>
            <AllNotes />
          </PrivateRoute >}/>
        <Route path='add' element={
          <PrivateRoute>
            <NotesForm />
          </PrivateRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        </Route>
      </Routes>
    </>
    );     
}

export default App

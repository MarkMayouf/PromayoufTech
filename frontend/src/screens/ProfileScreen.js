import React,{useState,useEffect} from 'react'
import {Form,Button,Row,Col}from "react-bootstrap"
import {useDispatch,useSelector } from "react-redux"
import Message from '../components/Message'
import Loader from "../components/Loader"
import {getUserDetails,updateUserProfile} from '../actions/userActions'
import {useNavigate } from 'react-router-dom';

const ProfileScreen = ()=> {

 const[name,setName]=useState("")
 const[email,setEmail]=useState("")
 const[password,setPassword]=useState("")
 const[confirmPassword,setConfirmPassword]=useState("")
 const[message,setMessage]=useState(null)

// const location = useLocation();

 const dispatch=useDispatch()


 const userDetails=useSelector((state) => state.userDetails)
 const {loading,error,user}=userDetails


 const userLogin=useSelector((state) => state.userLogin)
 const {userInfo}=userLogin
 
 const userUpdateProfile=useSelector((state) => state.userUpdateProfile)
 const {success}=userUpdateProfile
  
 const navigate = useNavigate()

 useEffect(()=>{
    if(!userInfo){
       navigate("/login")
    }else{
        if(!user.name){
            dispatch(getUserDetails("profile"))
        }else{
            setName(user.name)
            setEmail(user.email)
        }
    }
 },[dispatch,userInfo,user,navigate])

 const submitHandler=(e)=>{
    e.preventDefault()
        //Dispatch Register
        if(password!==confirmPassword){
            setMessage("Password do not match")

        }else{
       dispatch(updateUserProfile({id:user._id,name,email,password}))
        }
    
 }
  return (
    <Row>
    <Col md={3}>
   
    <h2>User Profile </h2>
    {message && <Message variant="danger">{message}</Message> }
    {error && <Message variant="danger">{error}</Message> }
    {success && <Message variant="success">Profile Updated</Message> }
    {loading && <Loader/>}
    <Form onSubmit={submitHandler}>
    <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" value={name}
        onChange={(e)=>setName(e.target.value)}></Form.Control>
        
     </Form.Group>
        <Form.Group controlId="email">
        <Form.Label> Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" value={email}
        onChange={(e)=>setEmail(e.target.value)}></Form.Control>
     </Form.Group>
      <Form.Group controlId="password">
         <Form.Label>Password</Form.Label>
         <Form.Control  className='pt-3'  type="password" placeholder="Enter Password" value={password}
       onChange={(e)=>setPassword(e.target.value)}></Form.Control>
     </Form.Group>
      
      <Form.Group controlId="password">
         <Form.Label>Confirm Password</Form.Label>
         <Form.Control  className='pt-3'  type="password" placeholder="Confirm Password" value={confirmPassword}
       onChange={(e)=>setConfirmPassword(e.target.value)}></Form.Control>
     </Form.Group>

       <Button  style={{ marginTop:20  }}  type="submit" variant='primary'>
      Update
       </Button>
    </Form>
    </Col>
    <Col md={9}>
    <h2>My Orders</h2>
    </Col>
    </Row>
  )
}

export default ProfileScreen
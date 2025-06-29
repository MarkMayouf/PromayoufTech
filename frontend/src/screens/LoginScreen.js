import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Form,Button,Row,Col}from "react-bootstrap"
import {useDispatch,useSelector } from "react-redux"
import Message from '../components/Message'
import Loader from "../components/Loader"
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import {  useLocation,useNavigate } from 'react-router-dom';


const LoginScreen = ()=> {
const navigate = useNavigate()
 const[email,setEmail]=useState("")
 const[password,setPassword]=useState("")
const location = useLocation();
 const dispatch=useDispatch()


 const userLogin=useSelector(state => state.userLogin)
 const {loading,error,userInfo}=userLogin


 const { search } = useLocation(); 
 const redirectInUrl = new URLSearchParams(search).get('redirect'); 
 const redirect = redirectInUrl ? redirectInUrl : '/';


 useEffect(()=>{
    if(userInfo){
       navigate(redirect)
    }
 },[userInfo,redirect])

 const submitHandler=(e)=>{
    e.preventDefault(
        //Dispatch Login
        dispatch(login(email,password))
    )
 }



  return (
    <FormContainer>
    <h1>Sign In </h1>
    {error && <Message variant="danger">{error}</Message> }
    {loading && <Loader/>}
    <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
        <Form.Label> Email Address</Form.Label>
        <Form.Control type="email" placeholde="Enter Email" value={email}
        onChange={(e)=>setEmail(e.target.value)}></Form.Control>
        
     </Form.Group>
      <Form.Group controlId="password">
         <Form.Label>Password</Form.Label>
         <Form.Control  className='pt-3'  type="password" placeholde="Enter Password" value={password}
       onChange={(e)=>setPassword(e.target.value)}></Form.Control>
     </Form.Group>
       <Button  style={{ marginTop:20  }}  type="submit" variant='primary'>
        Sign In
       </Button>
    </Form>
       <Row className='py-3'>
    <Col>
     New Customer ? <Link to={redirect ?`/register?redirect=${redirect}`:"/register"}> Register</Link>
    </Col>
    </Row>
    </FormContainer>
  )
}

export default LoginScreen
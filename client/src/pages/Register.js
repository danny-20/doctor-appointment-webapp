import React from 'react';
import '../styles/RegisterStyles.css'
import { Form, Input, message } from "antd";
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios';

const Register = () => {

  const navigate = useNavigate();


  //handler
  const onFinishHandler = async(values)=> {
    try {
      const res = await axios.post('/api/v1/user/register', values)
      if (res.data.success) {
        message.success('Registered Successfully!');
        navigate('/login')
      }else {
        message.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      message.error("Something Went Wrong")
    }
  }
  return (
    <>
      <div className="form-container">
        <Form layout='vertical' onFinish={onFinishHandler} className='register-form'>
          <h3 className='text-center'>Registration Form</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required/>
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required/>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required/>
          </Form.Item>
          <Link to="/login" className='m-2'>Already user? Login here</Link>
          <button className='btn btn-primary' type='submit'>Register</button>
        </Form>
      </div>
    </>
  )
}

export default Register

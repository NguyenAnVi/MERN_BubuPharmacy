import {Link, Navigate} from 'react-router-dom'
// import {Form, Button, Input, Row,Col, Space} from 'antd'

const onFinish = (values) => {
   console.log(values);
 };

const Signup = () => {
   return (
      <>
         <h1> Signup </h1> 

         {/* <Row>
            <Col 
               span={12} 
               offset={6}>
               <div>
                  <h1 style={{
                        textAlign:(`center`)
                     }}> Signup </h1>
                  <Form
                     name='login-form'
                     method='POST'
                     onFinish={onFinish}
                     initialValues={{
                        remember: true,
                     }}
                     wrapperCol={{
                        span:18
                     }}
                     labelCol={{
                        span: 6,
                     }}
                     >
                     <Form.Item 
                        name='name' 
                        label="Name" 
                        rules={[{
                           required: true,
                           message: "Please type your name"
                        }]}
                        wrapperCol={{
                           span:18
                        }}
                        >
                        <Input placeholder='Name'></Input>
                     </Form.Item>
                     <Form.Item 
                        name='phone' 
                        label="Phone" 
                        rules={[{
                           required: true,
                           message: "Please type your phone"
                        }]}
                        wrapperCol={{
                           span:18
                        }}
                        >
                        <Input placeholder='Phone'></Input>
                     </Form.Item>
                     <Form.Item 
                        name='password' 
                        label="Password" 
                        rules={[{
                           required: true,
                           message: "Please type your password"
                        }]}
                        wrapperCol={{
                           span:18
                        }}
                        >
                        <Input.Password placeholder='Password'></Input.Password>
                     </Form.Item>
                     <Row>
                        <Col
                           span={18}
                           offset={6}
                           >
                           <div>
                              <Space>
                                 <Button type='primary' htmlType="submit">Signup</Button>
                                 <Link to='/signin'>
                                    <Button type='default' htmlType="button">Signin</Button>
                                 </Link>
                              </Space>
                           </div>
                        </Col>
                     </Row>
                              
                  </Form>
               </div>
            </Col>
         </Row> */}
      </>
   )
}
export default Signup;
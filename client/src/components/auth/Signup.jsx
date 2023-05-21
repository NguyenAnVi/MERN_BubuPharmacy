import { connect } from "react-redux";
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import useForm from "../../use-form-react";
import { signUserUp } from "../../actions/index.js";

const SignUp = (props) => {
  const options = {
    initialValues: {
      name:"",
      email:"",
      phone: "",
      password: ""
    },
    callback: () => {
      console.log("works!", inputs);
      props.signUserUp(inputs);
    },
    debug: false,
  };
  const { onSubmit, onChange, inputs, dirty, submitting } = useForm("AdvanceForm", options);
  return (
    <>
      
      <Box
      sx={{
        py: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <h1> Signup </h1> 
      <form
        onSubmit={onSubmit}
      >
        <Input name="name" value={inputs.name} onChange={onChange} type="text" placeholder="Name" required/>
        <Input name="email" value={inputs.email} onChange={onChange} type="email" placeholder="Email"/>
        <Input name="phone" value={inputs.phone} onChange={onChange} type="tel" placeholder="Phone" required/>
        <Input name="password" value={inputs.password} type="password"onChange={onChange}  placeholder="Password" required sx={{ mb: 1 }} />
        <Button type="submit">Submit</Button>
      </form>
    </Box>
    </>
  );
};
export default connect(null, { signUserUp })(SignUp);

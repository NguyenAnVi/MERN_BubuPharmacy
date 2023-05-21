import { connect } from "react-redux";
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import useForm from "../../use-form-react";
import { signUserOut } from "../../actions/index.js";

const Signout = (props) => {
  const options = {
    callback: () => {
      console.log("works!");
      props.signUserOut();
    },
    debug: false,
  };
  const { onSubmit, onChange, inputs } = useForm("AdvanceForm", options);
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
      <h1> Signout </h1> 
      <form
        onSubmit={onSubmit}
      >
        <h3>You're about to signout</h3>
        <Button type="submit">Ok, sign me out!</Button>
      </form>
    </Box>
    </>
  );
};
export default connect(null, { signUserOut })(Signout);

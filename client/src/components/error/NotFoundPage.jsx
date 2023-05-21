import {Button} from '@mui/joy';
import {Link} from 'react-router-dom';
const NotFoundPage = () => (
  <div
    
    title="404"
    subTitle=""
    
  >
    <h1>404 - page not found</h1>
    <h4>Sorry, the page you visited does not exist.</h4>
    <Link  to='/'><Button href='/' type="primary">Back Home</Button></Link>
  </div>
);
export default NotFoundPage;
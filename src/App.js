import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Getproducts from './components/Getproducts';
import Addproducts from './components/Addproducts';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Notfound from './components/Notfound';
import Makepayment from './components/Makepayment';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <div className="App">
       <header className="App-header">
         <h1>Welcome to Sokogarden</h1>
       </header>
       <nav>
        {/* link to the different routes */}
        <Link to = "/getproducts" className='btn btn-primary m-2'>Home</Link>
        <Link to = "/addproducts" className='btn btn-secondary m-2'>Add Products</Link>
        <Link to = "/signin" className='btn btn-info m-2'>Sign In</Link>
        <Link to = "/signup" className='btn btn-success m-2'>Sign Up</Link>
       </nav>
       {/* Below are our different routes together with the rendered components*/}
       <Routes>
         <Route path = '/getproducts' element = {<Getproducts />} />
         <Route path = '/addproducts' element = {<Addproducts />} /> 
         <Route path = '/signup' element = {<Signup />} />
         <Route path = '/signin' element = {<Signin />} />
         <Route path = '/makepayment' element = {<Makepayment />} />
         <Route path = '/*' element = {<Notfound />} />
        
       </Routes>
    </div>
    </Router>
  );
}

export default App;

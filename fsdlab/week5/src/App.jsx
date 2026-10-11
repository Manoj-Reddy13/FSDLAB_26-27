import {
BrowserRouter,
Routes,
Route,
Link
} from "react-router-dom";

function Home(){
return (<><h1>Home Page</h1>;
<p>nothing to show here</p>;</>)
}

function About(){
return(<>
<h1>About Page</h1>;
<p>i am second year btech student</p>;</>)
}

function Contact(){
return(<> <h1>DETAIILS</h1>;
<p>manoj@gmail.com</p>;</>)
}

export default function App(){

return(

<BrowserRouter>

<nav>

<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>

</nav>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/about" element={<About/>}/>

<Route path="/contact" element={<Contact/>}/>

</Routes>

</BrowserRouter>

);

}
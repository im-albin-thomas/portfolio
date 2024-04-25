import logo from './logo.svg';
import './App.css';
import Home from "./comopnents/home.tsx"
import AboutMe from  "./comopnents/aboutMe.tsx";
import Stack from './comopnents/stack.tsx';
import Works from './comopnents/works.tsx';
import Companies from './comopnents/companies.tsx';
import ContactMe from './comopnents/contactUs.tsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Home></Home>
      <AboutMe></AboutMe>
      <Stack></Stack>
      <Works></Works>
      <Companies></Companies>
      <ContactMe></ContactMe>
      </header>
    </div>
  );
}

export default App;

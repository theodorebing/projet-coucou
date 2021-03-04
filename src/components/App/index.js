// == Import npm
import React from 'react';

// == Import
import './styles.scss';
// import Menu from 'src/components/Menu';
// import Content from 'src/components/Content';
import Index from 'src/components/Index';
import IndexLoginForm from '../Form/IndexLoginForm';
import Footer from 'src/components/Footer';



// == Composant
const App = () => (
  <div className="app">
   {/* <Index />
     <Menu />
    <Content /> 
    <Footer/>*/}
    <IndexLoginForm/>
  </div>
);

// == Export
export default App;

import React,{Component} from 'react'
import Calendar from './class-components';
import { Content, Footer, Header } from './func-components';


function App() {
  return (
    <>
      <Header/>
      <p><center><Calendar/></center></p>
      <Content/>
      <Footer/>
    </>
  );
}

export default App;

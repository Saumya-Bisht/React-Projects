import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Main1 from "./components/main1";
import Main2 from "./components/main2";
import Main3 from "./components/main3";
import Footer from './components/footer';

function App() {
  return (
    <div style={{fontFamily:"Times New Roman",margin:"0"}} >
      <Header/>
      <Main1/>
      <Main2/>
      <Main3/>
      <Footer/>
    </div>
  );
}

export default App;

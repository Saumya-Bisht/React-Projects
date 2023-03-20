// import logo from './logo.svg';
import './App.css';
//------ hootsuiteapp--- assign-06
// import Header from './components/hootsuiteheader';
// import MainContent from './components/hootsuitemain';
// import Footer from './components/hootsuitefooter'

//----carapp----- wt-01
// import Header from "./components/header";
// import Main1 from "./components/main1";
// import Main2 from "./components/main2";
// import Main3 from "./components/main3";
// import Footer from './components/footer';


//----logoapp----- homework-06
// import Header from './components/logoheader';
// import Mainlogo from './components/logomain';
// import Footer from './components/logofooter';

// import Task1 from "./components/tasks/task1";
// import Task2 from './components/tasks/task2';

// -------tic-tac-toe-----
import Board from './components/tic-tac-toe/t3';

function App() {
  return (
    <div className='body' style={{margin:"0",background: "linear-gradient(to top left, #ffcccc 0%, #ff99cc 100%)",padding:"9.5%"}}>
      <h1 style={{textAlign:"center",color:"#690b3b"}}>TIC-TAC-TOE GAME</h1>
      <Board/>
      <h3 style={{textAlign:"center",color:"#b70561"}}>Made with 💖 by SAUMYA BISHT</h3>


      {/* <Task1/>
      <Task2/> */}

      {/* <Header/>
      <Mainlogo/>
      <Footer/> */}


      {/* <Header/>      //wt-01
      <Main1/>
      <Main2/>
      <Main3/>
      <Footer/> */}


      {/* <Header/>     //assign-06
      <MainContent/>
      <Footer/> */}


      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import News from './Component/News/News';
import TopHeadline from './Component/TopHeadline/TopHeadline';


function App() {
  return (
  <div>
     <Header></Header>
     <News></News>
      <TopHeadline></TopHeadline>
  </div>
  );
}

export default App;

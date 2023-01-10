import './App.css';
import { Route,Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import Nav from './components/Nav';


function App() {
  return (
<div>
    <div className="App">
     <Nav/>
      <Routes>
          <Route path='/' element={<ArticleList/>}/>
     </Routes>
     </div>
    </div>
  );
}

export default App;

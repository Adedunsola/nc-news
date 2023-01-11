import './App.css';
import { Route,Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import Nav from './components/Nav';
import SingleArticle from './components/SingleArticle';


function App() {
  return (
<div>
    <div className="App">
     <Nav/>
      <Routes>
          <Route path='/' element={<ArticleList/>}/>
          <Route path='articles/:article_id' element={<SingleArticle/>}/>
     </Routes>
     </div>
    </div>
  );
}

export default App;

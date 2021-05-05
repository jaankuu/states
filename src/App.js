import './App.css';
import LikeCounter from './components/LikeCounter.js'
import Title from './components/Title.js'
import LikeButton from './components/LikeButton.js'
import AwesomeAnimals from './components/AwsomeAnimals.js'
import ArticleList from './components/ArticleList.js'
import ArticleCard from './components/ArticleCard'


function App() {
  return (
    <div className="App">
     <main className="container my-5">
       <Title content ="here's a counter" />
       <LikeCounter className="card col-md-6 col-lg-4" />
       <LikeButton className="card" />
      <AwesomeAnimals className="card" />
      <ArticleList className="card"/>
     </main> 
    </div>
  );
}

export default App;

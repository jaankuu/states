import './App.css';
import LikeCounter from './components/LikeCounter.js'
import Title from './components/Title.js'
import LikeButton from './components/LikeButton.js'

function App() {
  return (
    <div className="App">
     <main>
       <Title content ="here's a counter" />
       <LikeCounter />
       <LikeButton />
     </main>
    </div>
  );
}

export default App;

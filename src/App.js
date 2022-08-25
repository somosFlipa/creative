
import './scss/app.scss';
import { Routes, Route} from "react-router-dom";
import Home from './components/home/home';


function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>} />
    </Routes>
  );
}

export default App;

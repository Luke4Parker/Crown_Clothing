import {Routes, Route} from 'react-router-dom'
import Home from "./components/routes/home/home.component";
import Navigation from './components/routes/Navigation/navigation.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<div></div>} />
      </Route>
    </Routes>
  );
}

export default App;

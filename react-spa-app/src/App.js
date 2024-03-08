import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import YourWayCard from './components/YourWayCard';
import { Fragment } from 'react';
import MuscleView from './components/MuscleView'
import ExerciseView from './components/ExerciseView';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <Fragment>
              <NavBar />
              <YourWayCard />
            </Fragment>
          } />
          <Route path='/muscles' element={<MuscleView />} />
          <Route path='/muscles/:id' element={<ExerciseView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

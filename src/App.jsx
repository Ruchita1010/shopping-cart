import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { GridOne } from './grid/grid';

function App() {
    return (
        <Routes>
            <Route path='/' element={<GridOne />} />
        </Routes>
    )
}

export default App;
import {
  Routes,
  Route
} from 'react-router-dom';
import TableData from './pages/TableData';


function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<TableData/>} />
    </Routes>

    </>
  )
}

export default App

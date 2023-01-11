import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "../css/index.css"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

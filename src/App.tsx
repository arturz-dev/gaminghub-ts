import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'



function App() {

  return (
    <Router>
      <Routes>
        <Route path='' element={<RootLayout />}>
        </Route>
      </Routes>
  </Router>
  )
}

export default App

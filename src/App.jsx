import react from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import Subject from './Components/Subject';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/subject" element={<Subject />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

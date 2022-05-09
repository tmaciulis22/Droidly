import BlocklyEditorPage from './pages/BlocklyEditorPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OnboardingPage from './pages/OnboardingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<OnboardingPage />} />
        <Route path='/builder' element={<BlocklyEditorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

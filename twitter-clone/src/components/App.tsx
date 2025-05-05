import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';

function App() {
  return (
    <Router>
    <AuthProvider>
      <Routes>
      <Route path="/login" element={<div className='bg-red'>login</div>} />
        <Route path="/singup" element={<div className='bg-red'>signup</div>} />
          <Route path="/" element={<div>home</div>} />
          <Route path="*" element={<div>not found</div>} />
          </Routes>
          </AuthProvider>
    </Router>
  );
}

export default App;
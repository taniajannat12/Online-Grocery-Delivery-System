import React, { useState } from 'react';
import LoginPage from './Components/LoginPage';
import SignPage from './Components/SignPage';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {isLogin ? <LoginPage /> : <SignPage />}
      <div className="text-center mt-4 cursor-pointer text-blue-600" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
      </div>
    </div>
  );
}
export default App;
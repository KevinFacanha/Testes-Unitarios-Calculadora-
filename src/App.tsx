import React from 'react';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Simple Calculator</h1>
      <Calculator />
      <p className="mt-8 text-blue-700 text-sm">
        Basic calculator with unit tests
      </p>
    </div>
  );
}

export default App;
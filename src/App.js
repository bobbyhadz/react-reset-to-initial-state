import './App.css';

import {useState} from 'react';

const initialState = {
  name: '',
  country: '',
  salary: null,
};

export default function App() {
  const [employee, setEmployee] = useState(initialState);

  const updateState = () => {
    setEmployee({
      name: 'Alice',
      country: 'Austria',
      salary: 100,
    });
  };

  // 👇️ Reset to the initial state
  const resetState = () => {
    setEmployee(initialState);
  };

  return (
    <div>
      <button onClick={updateState}>Set state</button>

      <button onClick={resetState}>
        Reset to initial state
      </button>

      <h4>{JSON.stringify(employee, null, 4)}</h4>
    </div>
  );
}

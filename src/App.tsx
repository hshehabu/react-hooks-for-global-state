
import { createGlobalState } from 'react-hooks-global-state';

const initialState = { count: 0 };
const { useGlobalState } = createGlobalState(initialState);

const Counter = () => {
  const [count, setCount] = useGlobalState('count');
  return (
    <div>
      <span>Counter: {count}</span>
      <button onClick={() => setCount(v => v + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
};

const App = () => (
  <>
    <Counter />
    <Counter />
  </>
);

export default App
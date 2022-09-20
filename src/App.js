import { useState } from "react";
import "./styles.css";
import Before from "./before";
import After from "./after";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>에러 발생:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>다시 시도하세요</button>
    </div>
  );
};

export default function App() {
  const [on, setOn] = useState(false);

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <h1>React Suspense 예제</h1>
        <button onClick={() => setOn((on) => !on)}>
          {on ? "Suspense 끄기" : "Suspense 켜기"}
        </button>
        <hr />
        {on ? <After /> : <Before />}
      </ErrorBoundary>
    </div>
  );
}

"use client";
import { Button } from "musae";

const App = () => {
  const click = () => {
    const { promise, resolve } = Promise.withResolvers<void>();

    setTimeout(() => {
      resolve();
    }, 2000);

    return promise;
  };

  return (
    <Button autoLoading onClick={click}>
      自动等待
    </Button>
  );
};

export default App;

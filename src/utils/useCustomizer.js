import { useState } from 'react';

function useCustomizer(colors) {
  const [random, setRandom] = useState(colors[0]);

  function change() {
    setRandom(colors[Math.floor(Math.random() * 5)])
  }

  return [random, change]
}

export default useCustomizer;
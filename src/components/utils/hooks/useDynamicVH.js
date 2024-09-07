import { useState, useEffect } from 'react';

function useDynamicVH(initialVH) {
  const [vh, setVH] = useState(initialVH);

  useEffect(() => {
    function updateVH() {
      const newVH = window.innerHeight * (initialVH / 100);
      setVH(newVH);
    }
    updateVH();
    window.addEventListener('resize', updateVH);
    return () => window.removeEventListener('resize', updateVH);
  }, [initialVH]);
  return vh;
}

export default useDynamicVH;

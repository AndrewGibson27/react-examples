import React, { useState, useEffect } from 'react';

function HookComponent() {
  const [winWidth, setWinWidth] = useState(null);

  function updateWinWidth() {
    setWinWidth(window.innerWidth);
  }

  function bindWindowResize() {
    window.addEventListener('resize', updateWinWidth);
  }

  function unbindWindowResize() {
    window.removeEventListener('resize', updateWinWidth);
  }

  useEffect(() => {
    bindWindowResize();

    return () => {
      unbindWindowResize();
    };
  }, [winWidth === null]);

  return (
    <div>
      <p>Window width: {winWidth ? winWidth : 'not initialized'}</p>
    </div>
  );
};

export default HookComponent;

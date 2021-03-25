import React, { useRef, useState, useEffect } from "react";
import Routes from "./Routes";
import NET from "vanta/dist/vanta.net.min";

const MainPage = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  let homeRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: homeRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  },[vantaEffect]);

  return (
    <div ref={homeRef}>
      <Routes></Routes>
    </div>
  );
};

export default MainPage;

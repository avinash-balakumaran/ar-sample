import { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
// import { OrbitControls } from "react-three/d";

function App() {
  const store = createXRStore();

  if (navigator.xr) {
    console.log("supported");
  } else {
    console.log("not supported");
  }

  return (
    <>
      <div className="app">
        <button
          onClick={() => {
            console.log("clicking");

            store.enterAR();
          }}
        >
          Start AR
        </button>
        <Canvas>
          <XR store={store}>
            <mesh>
              <boxGeometry />
              <meshStandardMaterial color={"blue"} />
            </mesh>
          </XR>
        </Canvas>
      </div>
    </>
  );
}

export default App;

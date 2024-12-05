import { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
// import { OrbitControls } from "react-three/d";

function App() {
  const store = createXRStore();

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
            <mesh position-z={-5}>
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

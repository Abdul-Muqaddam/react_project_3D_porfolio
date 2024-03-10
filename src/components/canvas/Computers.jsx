import React, { Suspense,useEffect,useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,useGLTF,Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";
const Computers = ({isMobile}) => {
  const computer=useGLTF("./desktop_pc/scene.gltf")  // always make sure you don't have the same name of you component with variable
  return (
    <mesh>
      <hemisphereLight intensity={1.25} groundColor='black'/> {/* make sure have written attributes in camelcase */}
      <pointLight intensity={1}/>
      <spotLight  position={[-20,50,10]} angle={0.12} intensity={1} penumbra={1} castShadow shadow-mapSize={1024} />
      <primitive object={computer.scene} scale={isMobile?0.30:0.55} position={isMobile?[0,-0.65,-0.5]:[0,-2.50,-1.5]}/> {/* make sure you have used correct spelling */}
    </mesh>
  )
}
const ComputersCanvas=()=>{
  const [isMobile,setisMobile]=useState(false)
  useEffect(() => {
    const mediaQuery=window.matchMedia("(max-width:500px)")
    setisMobile(mediaQuery.matches)
    const handleMediaQueryChange=(event)=>{
      setisMobile(event.matches)
    }
    mediaQuery.addEventListener("change",handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener("change",handleMediaQueryChange)
    }
  }, [])
  
  return(
    <Canvas className={`${isMobile?"h-[200px]":"h-[692px]"}`} frameloop="demand" shadows camera={{position:[20,3,5],fov:25}} gl={{preserveDrawingBuffer:true}}  > {/* make sure framloop in is lowercase*/}
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}
export default  ComputersCanvas
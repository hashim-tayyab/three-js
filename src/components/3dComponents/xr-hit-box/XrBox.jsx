import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const XrBox = ({position}) => {
const cubeRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
  });
  return (
    <>
        <mesh ref={cubeRef} position={position}>
            <boxGeometry args={[0.5, 0.5, 0.5]}/>
            <meshStandardMaterial color={"mediumpurple"}/>
        </mesh>
    </>
  )
}

export default XrBox
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import styles from './About.module.css'

function Scene() {
  const icoRef   = useRef()
  const torus1   = useRef()
  const torus2   = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (icoRef.current) {
      icoRef.current.rotation.x = t * 0.28
      icoRef.current.rotation.y = t * 0.45
    }
    if (torus1.current) {
      torus1.current.rotation.x = t * 0.35
      torus1.current.rotation.z = t * 0.18
    }
    if (torus2.current) {
      torus2.current.rotation.y = t * 0.42
      torus2.current.rotation.z = t * 0.22
    }
  })

  return (
    <>
      <ambientLight intensity={0.05} />
      <pointLight position={[ 5,  5, 3]} color="#aaff00" intensity={4} distance={18} />
      <pointLight position={[-5, -5, 3]} color="#00f5ff" intensity={3} distance={18} />

      {/* core icosahedron */}
      <mesh ref={icoRef}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial
          color="#aaff00"
          wireframe
          emissive="#aaff00"
          emissiveIntensity={0.55}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* outer ring 1 */}
      <mesh ref={torus1}>
        <torusGeometry args={[2.1, 0.06, 8, 72]} />
        <meshStandardMaterial
          color="#00f5ff"
          emissive="#00f5ff"
          emissiveIntensity={0.9}
          transparent
          opacity={0.75}
        />
      </mesh>

      {/* outer ring 2 — tilted */}
      <mesh ref={torus2} rotation={[Math.PI / 2.4, 0, Math.PI / 3]}>
        <torusGeometry args={[2.4, 0.04, 8, 72]} />
        <meshStandardMaterial
          color="#aaff00"
          emissive="#aaff00"
          emissiveIntensity={0.7}
          transparent
          opacity={0.55}
        />
      </mesh>
    </>
  )
}

export default function AboutCube() {
  return (
    <div className={styles.canvasWrap}>
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 44 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Scene />
      </Canvas>
    </div>
  )
}

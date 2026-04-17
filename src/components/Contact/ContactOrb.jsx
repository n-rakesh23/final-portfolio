import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import styles from './Contact.module.css'

function PulsingOrb() {
  const meshRef = useRef()
  const ringRef = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (meshRef.current) {
      const s = 1 + Math.sin(t * 1.8) * 0.06
      meshRef.current.scale.setScalar(s)
      meshRef.current.rotation.y = t * 0.6
      meshRef.current.rotation.x = t * 0.3
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.4
      ringRef.current.rotation.x = t * 0.25
    }
  })

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[3, 3, 3]} color="#aaff00" intensity={5} distance={12} />
      <pointLight position={[-3,-3, 3]} color="#00f5ff" intensity={4} distance={12} />

      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#aaff00"
          wireframe
          emissive="#aaff00"
          emissiveIntensity={0.6}
          transparent
          opacity={0.8}
        />
      </mesh>

      <mesh ref={ringRef}>
        <torusGeometry args={[1.5, 0.06, 8, 64]} />
        <meshStandardMaterial
          color="#00f5ff"
          emissive="#00f5ff"
          emissiveIntensity={1}
          transparent
          opacity={0.6}
        />
      </mesh>
    </>
  )
}

export default function ContactOrb() {
  return (
    <div className={styles.orb}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <PulsingOrb />
      </Canvas>
    </div>
  )
}

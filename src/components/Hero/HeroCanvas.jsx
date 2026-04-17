import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/* ─── Stars ─────────────────────────────────────────── */
function Stars({ count = 1800 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 90
      pos[i * 3 + 1] = (Math.random() - 0.5) * 60
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40 - 10
    }
    return pos
  }, [count])

  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.y = s.clock.elapsedTime * 0.005
      ref.current.rotation.x = s.clock.elapsedTime * 0.002
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.055} color="#ffffff" sizeAttenuation transparent opacity={0.72} depthWrite={false} />
    </points>
  )
}

/* ─── Saturn ─────────────────────────────────────────── */
/*function Saturn() {
  const groupRef = useRef()
  useFrame((s) => {
    if (groupRef.current) groupRef.current.rotation.y = s.clock.elapsedTime * 0.07
  })
  return (
    <group ref={groupRef} position={[5.5, -3.5, -6.0]}>
      <mesh>
        <sphereGeometry args={[1.8, 48, 48]} />
        <meshStandardMaterial color="#c2884e" emissive="#8a5520" emissiveIntensity={0.2} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.96, 32, 32]} />
        <meshStandardMaterial color="#e8aa70" transparent opacity={0.07} side={THREE.BackSide} />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, 0.1, 0.25]}>
        <torusGeometry args={[3.1, 0.24, 2, 160]} />
        <meshStandardMaterial color="#aaff00" wireframe emissive="#aaff00" emissiveIntensity={0.4} transparent opacity={0.75} />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, 0.1, 0.25]}>
        <torusGeometry args={[3.9, 0.1, 2, 120]} />
        <meshStandardMaterial color="#aaff00" wireframe emissive="#aaff00" emissiveIntensity={0.22} transparent opacity={0.45} />
      </mesh>
    </group>
  )
} */

/* ─── Earth ──────────────────────────────────────────── */
/*function Earth() {
  const bodyRef  = useRef()
  const orbitRef = useRef()
  useFrame((s) => {
    const t = s.clock.elapsedTime
    if (bodyRef.current)  bodyRef.current.rotation.y  = t * 0.11
    if (orbitRef.current) orbitRef.current.rotation.z = t * 0.14
  })
  return (
    <group position={[-4.2, 2.8, -3.0]}>
      <group ref={bodyRef}>
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#0d3b6e" emissive="#091e3a" emissiveIntensity={0.4} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.52, 16, 16]} />
          <meshStandardMaterial color="#00f5ff" wireframe emissive="#00f5ff" emissiveIntensity={0.3} transparent opacity={0.25} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color="#1a88ff" transparent opacity={0.07} side={THREE.BackSide} />
        </mesh>
      </group>
      <mesh ref={orbitRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[0.9, 0.012, 4, 128]} />
        <meshStandardMaterial color="#00f5ff" emissive="#00f5ff" emissiveIntensity={0.9} transparent opacity={0.55} />
      </mesh>
    </group>
  )
}
*/
/* ─── Comet ──────────────────────────────────────────── */
function Comet() {
  const groupRef = useRef()
  const DURATION = 13
  useFrame((s) => {
    const t = (s.clock.elapsedTime % DURATION) / DURATION
    if (groupRef.current)
      groupRef.current.position.set(-20 + t * 42, 8 - t * 10, -8)
  })
  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[0.13, 10, 10]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={5} />
      </mesh>
      <mesh position={[-1.3, 0.85, 0]} rotation={[0, 0, Math.PI / 4 + 0.18]}>
        <coneGeometry args={[0.1, 2.4, 7]} />
        <meshStandardMaterial color="#00f5ff" emissive="#00f5ff" emissiveIntensity={1.8} transparent opacity={0.42} />
      </mesh>
      <mesh position={[-0.85, 0.56, 0]} rotation={[0, 0, Math.PI / 4 + 0.18]}>
        <coneGeometry args={[0.05, 1.5, 7]} />
        <meshStandardMaterial color="#aaff00" emissive="#aaff00" emissiveIntensity={2.2} transparent opacity={0.52} />
      </mesh>
    </group>
  )
}

/* ─── Nebula blobs ───────────────────────────────────── */
function Nebula() {
  return (
    <>
      <mesh position={[6, 5, -16]}>
        <sphereGeometry args={[5.5, 8, 8]} />
        <meshBasicMaterial color="#00f5ff" transparent opacity={0.016} side={THREE.BackSide} />
      </mesh>
      <mesh position={[-7, -4, -15]}>
        <sphereGeometry args={[6, 8, 8]} />
        <meshBasicMaterial color="#aaff00" transparent opacity={0.012} side={THREE.BackSide} />
      </mesh>
      <mesh position={[0, 0, -18]}>
        <sphereGeometry args={[8, 8, 8]} />
        <meshBasicMaterial color="#3322aa" transparent opacity={0.025} side={THREE.BackSide} />
      </mesh>
    </>
  )
}

/* ─── Satellite orbiting the 'h' in "Rakesh" ────────── */
/*
 * 'h' in "Rakesh Nayak" is ~5/12 through the string (left of centre).
 * At z = -2.5 with camera at z = 5 (depth = 7.5),
 * viewport half-width ≈ tan(30°) × 7.5 ≈ 4.33 wu.
 * 'h' sits roughly at world-x ≈ -0.9, world-y ≈ 0.9.
 */
const SAT_CENTER  = [-0.9, 0.9, -2.5]
const SAT_RADIUS  = 1.0
const SAT_TILT_X  = Math.PI / 5   // 36° tilt so orbit doesn't look flat
const SAT_TILT_Z  = 0.18

function SatelliteOrbitH() {
  const satRef = useRef()

  // Pre-allocate trig values for tilt rotation
  const cX = Math.cos(SAT_TILT_X), sX = Math.sin(SAT_TILT_X)
  const cZ = Math.cos(SAT_TILT_Z), sZ = Math.sin(SAT_TILT_Z)

  useFrame((state) => {
    if (!satRef.current) return
    const angle = state.clock.elapsedTime * 0.82

    // Flat circle → rotate around X → rotate around Z
    const lx =  SAT_RADIUS * Math.cos(angle)
    const ly =  SAT_RADIUS * Math.sin(angle)

    // After X rotation: (lx, ly·cX, ly·sX)
    const ax = lx,  ay = ly * cX,  az = ly * sX
    // After Z rotation: mix x and y
    const wx =  ax * cZ - ay * sZ
    const wy =  ax * sZ + ay * cZ
    const wz =  az

    satRef.current.position.set(
      SAT_CENTER[0] + wx,
      SAT_CENTER[1] + wy,
      SAT_CENTER[2] + wz,
    )
    // keep panels roughly perpendicular to orbit
    satRef.current.rotation.y = -angle + Math.PI / 2
    satRef.current.rotation.z =  SAT_TILT_Z
  })

  return (
    <group>
      {/* ── Orbit ring (shown in scene, matches the math above) ── */}
      <mesh position={SAT_CENTER} rotation={[SAT_TILT_X, 0, SAT_TILT_Z]}>
        <torusGeometry args={[SAT_RADIUS, 0.009, 4, 120]} />
        <meshStandardMaterial
          color="#00f5ff" emissive="#00f5ff" emissiveIntensity={0.65}
          transparent opacity={0.28} depthWrite={false}
        />
      </mesh>

      {/* ── Satellite body ── */}
      <group ref={satRef}>
        {/* body */}
        <mesh>
          <boxGeometry args={[0.24, 0.13, 0.13]} />
          <meshStandardMaterial color="#b0c4d8" emissive="#5577aa" emissiveIntensity={0.2} />
        </mesh>
        {/* left solar panel */}
        <mesh position={[-0.33, 0, 0]}>
          <boxGeometry args={[0.3, 0.1, 0.012]} />
          <meshStandardMaterial color="#00f5ff" emissive="#00f5ff" emissiveIntensity={0.7} transparent opacity={0.88} />
        </mesh>
        <mesh position={[-0.33, 0, 0.007]}>
          <boxGeometry args={[0.3, 0.1, 0.001]} />
          <meshStandardMaterial color="#00f5ff" wireframe emissive="#00f5ff" emissiveIntensity={1.2} />
        </mesh>
        {/* right solar panel */}
        <mesh position={[0.33, 0, 0]}>
          <boxGeometry args={[0.3, 0.1, 0.012]} />
          <meshStandardMaterial color="#00f5ff" emissive="#00f5ff" emissiveIntensity={0.7} transparent opacity={0.88} />
        </mesh>
        <mesh position={[0.33, 0, 0.007]}>
          <boxGeometry args={[0.3, 0.1, 0.001]} />
          <meshStandardMaterial color="#00f5ff" wireframe emissive="#00f5ff" emissiveIntensity={1.2} />
        </mesh>
        {/* antenna */}
        <mesh position={[0, 0.13, 0]}>
          <cylinderGeometry args={[0.008, 0.008, 0.17, 6]} />
          <meshStandardMaterial color="#ccddee" emissive="#aabbcc" emissiveIntensity={0.3} />
        </mesh>
        {/* dish */}
        <mesh position={[0, 0.225, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.08, 0.055, 8, 1, true]} />
          <meshStandardMaterial color="#aaff00" wireframe emissive="#aaff00" emissiveIntensity={0.95} />
        </mesh>
      </group>
    </group>
  )
}

/* ─── Launch Rocket: Earth → Saturn ─────────────────── */
/*
 * Planets are deep in the scene; we project their screen positions
 * onto z = -6 so the rocket stays clearly visible.
 *
 *  Earth  (−8.5, −2.5, −11) → at z=−6 → approx (−5.5, −1.7, −6)
 *  Saturn ( 7.5,  3.5, −13) → at z=−7 → approx ( 5.1,  2.4, −7)
 *
 * Quadratic Bézier arc lifts through (0, 6.5, −5) for the wide parabola.

// Pre-built path vectors (module scope – no rerenders)
// Earth at (-4.2, 2.8, -3.0) → north pole at y=3.3; rocket sits at RP0.y+0.35
// Saturn at (5.5, -3.5, -6.0) → north pole at y=-1.7; rocket rests at RP2
const RP0 = new THREE.Vector3(-4.1,  2.95, -3.0)  // launch pad — above Earth (top-left)
const RP1 = new THREE.Vector3( 0.6,  0.8,  -5.0)  // arc control — diagonal sweep
const RP2 = new THREE.Vector3( 5.3, -1.55, -6.0)  // landing — above Saturn north pole

const _cur  = new THREE.Vector3()
const _next = new THREE.Vector3()
const _dir  = new THREE.Vector3()
const _UP   = new THREE.Vector3(0, 1, 0)

function bezier(t, P0, P1, P2, out) {
  const u = 1 - t
  out.set(
    u * u * P0.x + 2 * u * t * P1.x + t * t * P2.x,
    u * u * P0.y + 2 * u * t * P1.y + t * t * P2.y,
    u * u * P0.z + 2 * u * t * P1.z + t * t * P2.z,
  )
}  

// ease-in-out cubic
const ease = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

const LAUNCH_CYCLE  = 20   // total cycle (s)
const HOLD_LAUNCH   = 2.0  // sit on Earth before lift-off
const TRAVEL_TIME   = 9.0  // flight duration
const HOLD_LAND     = 4.0  // sit on Saturn
// remaining (~5 s) → rocket hidden, scene resets

function LaunchRocket() {
  const groupRef   = useRef()
  const outerExRef = useRef()
  const innerExRef = useRef()

  useFrame((state) => {
    const el = groupRef.current
    if (!el) return

    const phase = state.clock.elapsedTime % LAUNCH_CYCLE

    // Phase 0: sitting on Earth
    if (phase < HOLD_LAUNCH) {
      el.visible = true
      el.position.copy(RP0)
      el.position.y += 0.35
      el.quaternion.identity()   // upright

      // idle exhaust flicker
      if (outerExRef.current) outerExRef.current.material.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 8) * 0.2
      if (innerExRef.current) innerExRef.current.material.emissiveIntensity = 0.8 + Math.sin(state.clock.elapsedTime * 12) * 0.3
    }

    // Phase 1: in flight
    else if (phase < HOLD_LAUNCH + TRAVEL_TIME) {
      el.visible = true
      const raw = (phase - HOLD_LAUNCH) / TRAVEL_TIME
      const t   = ease(raw)

      bezier(t, RP0, RP1, RP2, _cur)
      bezier(Math.min(t + 0.006, 1), RP0, RP1, RP2, _next)

      el.position.copy(_cur)

      // orient nose toward direction of travel
      _dir.subVectors(_next, _cur).normalize()
      if (_dir.lengthSq() > 0.0001) {
        el.quaternion.setFromUnitVectors(_UP, _dir)
      }

      // full-blast exhaust
      const pulse = 2.0 + Math.sin(state.clock.elapsedTime * 18) * 0.5
      if (outerExRef.current) outerExRef.current.material.emissiveIntensity = pulse
      if (innerExRef.current) innerExRef.current.material.emissiveIntensity = pulse + 1.2
    }

    // Phase 2: landed on Saturn
    else if (phase < HOLD_LAUNCH + TRAVEL_TIME + HOLD_LAND) {
      el.visible = true
      el.position.copy(RP2)
      el.quaternion.identity()   // upright on Saturn

      // cooling exhaust
      if (outerExRef.current) outerExRef.current.material.emissiveIntensity = 0.3
      if (innerExRef.current) innerExRef.current.material.emissiveIntensity = 0.4
    }

    // Phase 3: hidden (reset gap)
    else {
      el.visible = false
    }
  })

  return (
    <group ref={groupRef} scale={[0.95, 0.95, 0.95]}>
      {/* body *//*
      <mesh>
        <cylinderGeometry args={[0.15, 0.15, 0.72, 12]} />
        <meshStandardMaterial color="#dce8f0" emissive="#5577aa" emissiveIntensity={0.14} />
      </mesh>
      {/* nose *//*
      <mesh position={[0, 0.54, 0]}>
        <coneGeometry args={[0.15, 0.38, 12]} />
        <meshStandardMaterial color="#aaff00" emissive="#aaff00" emissiveIntensity={0.75} />
      </mesh>
      {/* porthole *//*
      <mesh position={[0, 0.16, 0.14]}>
        <circleGeometry args={[0.062, 14]} />
        <meshStandardMaterial color="#00f5ff" emissive="#00f5ff" emissiveIntensity={1.4} />
      </mesh>
      {/* fin L *//*
      <mesh position={[-0.21, -0.28, 0]} rotation={[0, 0, 0.44]}>
        <boxGeometry args={[0.22, 0.19, 0.032]} />
        <meshStandardMaterial color="#aaff00" emissive="#aaff00" emissiveIntensity={0.32} />
      </mesh>
      {/* fin R *//*
      <mesh position={[0.21, -0.28, 0]} rotation={[0, 0, -0.44]}>
        <boxGeometry args={[0.22, 0.19, 0.032]} />
        <meshStandardMaterial color="#aaff00" emissive="#aaff00" emissiveIntensity={0.32} />
      </mesh>
      {/* fin back *//*
      <mesh position={[0, -0.28, -0.21]} rotation={[-0.44, 0, 0]}>
        <boxGeometry args={[0.032, 0.19, 0.22]} />
        <meshStandardMaterial color="#aaff00" emissive="#aaff00" emissiveIntensity={0.32} />
      </mesh>
      {/* exhaust outer *//*
      <mesh ref={outerExRef} position={[0, -0.61, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.13, 0.52, 12]} />
        <meshStandardMaterial color="#00f5ff" emissive="#00f5ff" emissiveIntensity={2.2} transparent opacity={0.62} />
      </mesh>
      {/* exhaust core *//*
      <mesh ref={innerExRef} position={[0, -0.55, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.055, 0.34, 8]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={3.5} transparent opacity={0.48} />
      </mesh>
    </group>
  )
}
*/
  
/* ─── Original floating geometric shapes ────────────── */
const SHAPES = [
  { position: [-7,  2,   -8], type: 'ico',   color: '#aaff00', speed: 0.004, phase: 0   },
  { position: [ 6, -1,   -9], type: 'torus', color: '#00f5ff', speed: 0.005, phase: 1.2 },
  { position: [ 3,  3.5, -7], type: 'ico',   color: '#00f5ff', speed: 0.003, phase: 2.4 },
  { position: [-4, -2.5, -6], type: 'torus', color: '#aaff00', speed: 0.006, phase: 0.8 },
  { position: [ 0, -3.5, -8], type: 'ico',   color: '#aaff00', speed: 0.004, phase: 3.1 },
  { position: [ 8,  1.5, -5], type: 'torus', color: '#00f5ff', speed: 0.005, phase: 1.7 },
  { position: [-6, -1,   -5], type: 'ico',   color: '#00f5ff', speed: 0.003, phase: 2.1 },
  { position: [ 2,  5,   -9], type: 'torus', color: '#aaff00', speed: 0.004, phase: 4.0 },
]

function FloatingShape({ position, type, color, speed, phase }) {
  const ref = useRef()
  useFrame((s) => {
    const t = s.clock.elapsedTime
    if (ref.current) {
      ref.current.rotation.x = t * speed * 0.7
      ref.current.rotation.y = t * speed
      ref.current.position.y = position[1] + Math.sin(t * 0.4 + phase) * 0.35
    }
  })
  return (
    <mesh ref={ref} position={position}>
      {type === 'ico'
        ? <icosahedronGeometry args={[1, 0]} />
        : <torusGeometry args={[0.75, 0.28, 8, 20]} />
      }
      <meshStandardMaterial
        color={color}
        wireframe
        emissive={color}
        emissiveIntensity={0.45}
        transparent
        opacity={0.7}
      />
    </mesh>
  )
}

/* ─── Scene ──────────────────────────────────────────── */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.04} />
      <pointLight position={[ 0,  6,  2]} color="#aaff00" intensity={3}   distance={30} />
      <pointLight position={[ 0, -6,  2]} color="#00f5ff" intensity={2.5} distance={30} />
      <pointLight position={[ 5.5, -1.5, -4]} color="#c2884e" intensity={2.5} distance={18} />
      <pointLight position={[-4.2,  3.5, -2]} color="#1a88ff" intensity={2}   distance={14} />

      <Stars />
      {/*<Nebula />*/}
      {/* <Saturn /> */}
      {/* <Earth /> */}
      {/*<Comet />*/}
     { /*<SatelliteOrbitH />*/}
      {/* <LaunchRocket /> */}
      {SHAPES.map((s, i) => <FloatingShape key={i} {...s} />)}
    </>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{ antialias: false, alpha: false }}
      dpr={[1, 1.5]}
      frameloop="always"
    >
      <Scene />
    </Canvas>
  )
}

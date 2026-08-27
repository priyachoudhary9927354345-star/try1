"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Float, MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three";

/**
 * Procedural low-poly "signature villa" — built entirely from primitives so
 * the hero has zero external asset (glTF/HDR) dependency and loads instantly.
 */
function Villa() {
  const edgesGlass = useMemo(() => new THREE.BoxGeometry(6, 1.5, 0.06), []);

  return (
    <group position={[0, -0.4, 0]}>
      <mesh position={[0, -1.2, 0]} receiveShadow castShadow>
        <boxGeometry args={[8, 0.4, 5]} />
        <meshStandardMaterial color="#2b2b33" roughness={0.75} metalness={0.1} />
      </mesh>

      <mesh position={[-0.6, -0.15, 0]} receiveShadow castShadow>
        <boxGeometry args={[6.2, 1.7, 3.6]} />
        <meshStandardMaterial color="#3a3a44" roughness={0.6} metalness={0.15} />
      </mesh>

      <mesh position={[3, 0.55, -0.9]} receiveShadow castShadow>
        <boxGeometry args={[3.4, 1.2, 2.2]} />
        <meshStandardMaterial color="#45454f" roughness={0.5} metalness={0.2} />
      </mesh>

      <mesh position={[-0.4, 0.78, 0]} castShadow>
        <boxGeometry args={[6.8, 0.12, 3.9]} />
        <meshStandardMaterial color="#18181c" roughness={0.4} metalness={0.3} />
      </mesh>

      <mesh position={[-0.6, -0.15, 1.82]} geometry={edgesGlass}>
        <meshPhysicalMaterial
          color="#a9c9d6"
          transmission={1}
          thickness={0.4}
          roughness={0.06}
          ior={1.4}
          clearcoat={1}
          metalness={0}
        />
      </mesh>

      <mesh position={[2.55, -0.15, 1.86]} castShadow>
        <boxGeometry args={[0.1, 1.9, 0.1]} />
        <meshStandardMaterial
          color="#d4af6a"
          roughness={0.25}
          metalness={0.95}
          emissive="#a9823e"
          emissiveIntensity={0.1}
        />
      </mesh>

      <mesh position={[-0.4, 0.85, 1.96]}>
        <boxGeometry args={[6.8, 0.035, 0.035]} />
        <meshStandardMaterial
          color="#e6ca85"
          roughness={0.2}
          metalness={1}
          emissive="#a9823e"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

function FloatingCard({
  position,
  rotation,
  scale = 1,
  speed = 1.3,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: number;
  speed?: number;
}) {
  const geometry = useMemo(() => new THREE.BoxGeometry(1.3, 1.75, 0.03), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);

  return (
    <Float speed={speed} rotationIntensity={0.45} floatIntensity={1.4}>
      <group position={position} rotation={rotation} scale={scale}>
        <mesh geometry={geometry} castShadow>
          <meshPhysicalMaterial
            color="#33333c"
            transmission={0.55}
            roughness={0.2}
            thickness={0.25}
            metalness={0.15}
          />
        </mesh>
        <lineSegments geometry={edges}>
          <lineBasicMaterial color="#d4af6a" transparent opacity={0.8} />
        </lineSegments>
      </group>
    </Float>
  );
}

function ReflectiveGround() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.42, 0]}>
      <planeGeometry args={[36, 36]} />
      <MeshReflectorMaterial
        blur={[280, 100]}
        resolution={512}
        mixBlur={1}
        mixStrength={35}
        roughness={1}
        depthScale={1.1}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#050505"
        metalness={0.4}
      />
    </mesh>
  );
}

function CameraRig() {
  const { camera } = useThree();
  const clockStart = useRef<number | undefined>(undefined);
  const startPos = useMemo(() => new THREE.Vector3(0, 4.4, 17.5), []);
  const endPos = useMemo(() => new THREE.Vector3(0.6, 1.6, 9.4), []);
  const current = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    if (clockStart.current === undefined) clockStart.current = state.clock.elapsedTime;
    const elapsed = state.clock.elapsedTime - clockStart.current;
    const t = Math.min(1, elapsed / 2.6);
    const eased = 1 - Math.pow(1 - t, 3);
    current.lerpVectors(startPos, endPos, eased);
    camera.position.copy(current);
    camera.lookAt(0.2, 0.15, 0);
  });

  return null;
}

function MouseParallaxGroup() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const targetY = state.pointer.x * 0.35;
    const targetX = state.pointer.y * 0.1;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.045);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -targetX, 0.045);
  });

  return (
    <group ref={group}>
      <Villa />
      <FloatingCard position={[-4.2, 1.0, -1.5]} rotation={[0, 0.32, 0.05]} speed={1.1} />
      <FloatingCard position={[4.5, 1.3, 1.3]} rotation={[0, -0.4, -0.05]} scale={0.85} speed={1.4} />
      <FloatingCard position={[1.8, 0.9, -3.4]} rotation={[0, 0.12, 0]} scale={0.68} speed={0.9} />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{ fov: 32, position: [0, 4.4, 17.5] }}
    >
      <color attach="background" args={["#0a0a0d"]} />
      <fogExp2 attach="fog" args={["#0a0a0d", 0.026]} />

      <CameraRig />

      <hemisphereLight intensity={1.1} color="#cfe0f0" groundColor="#100e08" />
      <ambientLight intensity={0.9} color="#cfd8e0" />
      <directionalLight
        position={[6, 8, 4]}
        intensity={4.2}
        color="#fff2df"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <directionalLight position={[-6, 4, -5]} intensity={1.1} color="#8fb6c9" />
      <pointLight position={[-4.5, 1.2, 3]} intensity={3.5} color="#d4af6a" />
      <pointLight position={[3, 0.5, -3]} intensity={1.8} color="#8fb6c9" />

      <Suspense fallback={null}>
        <MouseParallaxGroup />
        <ReflectiveGround />
        <ContactShadows
          position={[0, -1.43, 0]}
          opacity={0.55}
          scale={20}
          blur={2.4}
          far={4}
        />
      </Suspense>
    </Canvas>
  );
}

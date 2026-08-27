"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Room } from "@/lib/properties";

function RoomBlock({ room, accent }: { room: Room; accent: string }) {
  const height = room.height ?? 0.5;
  const geometry = useMemo(
    () => new THREE.BoxGeometry(room.width, height, room.depth),
    [room.width, height, room.depth],
  );
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);

  return (
    <group position={[room.x, height / 2, room.z]}>
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial color="#34343d" roughness={0.7} transparent opacity={0.94} />
      </mesh>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color={accent} />
      </lineSegments>
      <Html center position={[0, height / 2 + 0.4, 0]} occlude distanceFactor={9}>
        <div className="whitespace-nowrap rounded-full border border-gold-400/30 bg-charcoal-950/85 px-2.5 py-1 text-[10px] uppercase tracking-wider text-gold-200">
          {room.label}
        </div>
      </Html>
    </group>
  );
}

function Ground() {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
        <planeGeometry args={[28, 22]} />
        <meshStandardMaterial color="#111114" roughness={1} />
      </mesh>
      <gridHelper args={[28, 28, "#2b2b33", "#1a1a1f"]} position={[0, 0, 0]} />
    </>
  );
}

export default function FloorPlan3D({
  rooms,
  accent,
}: {
  rooms: Room[];
  accent: string;
}) {
  return (
    <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 9.5, 9.5], fov: 40 }}>
      <color attach="background" args={["#0d0d10"]} />
      <hemisphereLight intensity={1} color="#cfe0f0" groundColor="#100e08" />
      <ambientLight intensity={1.1} />
      <directionalLight
        position={[6, 9, 5]}
        intensity={3.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <Suspense fallback={null}>
        <Ground />
        {rooms.map((room) => (
          <RoomBlock key={room.label} room={room} accent={accent} />
        ))}
      </Suspense>
      <OrbitControls
        enablePan={false}
        minDistance={6}
        maxDistance={17}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.3}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}

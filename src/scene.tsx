import { PerspectiveCamera,OrbitControls } from '@react-three/drei'
import React from 'react'

export default function Scene() {
    return (
        <>
            <OrbitControls />
            <PerspectiveCamera makeDefault fov={75} position={[0, 0, 20]} />
            <ambientLight />
            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        </>
    )
}
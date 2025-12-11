import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls, Stats, useGLTF } from "@react-three/drei";
import Modal from "../components/3d/Modal";
import Model from "../components/3d/Model";

const equipmentAnimations = {};
for (let i = 7; i <= 34; i++) {
  const num = String(i).padStart(3, "0");
  equipmentAnimations[`sol_Cylinder${num}`] = "/models/animation.glb";
}

useGLTF.preload("models/sol.glb");
useGLTF.preload("models/animation.glb");

export default function ThreeDPage() {
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border bg-white p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            3D Visualization
          </h1>

          <div className="w-full h-[600px] bg-gray-900 rounded">
            <Canvas camera={{ position: [-49.48, 18.58, 19.42], fov: 50 }}>
              {/* 성능 모니터 */}
              <Stats showPanel={0} className="stats" />

              {/* 조명 */}
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 5]} intensity={1} />

              {/* 3D 모델  */}
              <Suspense fallback={null}>
                <Model
                  modelPath="/models/sol.glb"
                  pattern={/^sol_Cylinder\d{3}$/}
                  onSelect={(name) => {
                    setSelectedEquipment(name);
                    setIsModalOpen(true);
                  }}
                  selectedName={selectedEquipment}
                />
              </Suspense>

              {/* 마우스 컨트롤  */}
              <OrbitControls target={[-25.46, -6.02, -0.67]} />
            </Canvas>
          </div>
        </div>
      </div>

      {/* 모달 */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        equipmentName={selectedEquipment}
        animationPath={equipmentAnimations[selectedEquipment]}
      />
    </div>
  );
}

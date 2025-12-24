import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useRef } from "react";
import { OrbitControls, Stats, useGLTF } from "@react-three/drei";
import Modal from "../components/3d/Modal";
import Model from "../components/3d/Model";
import ChartPanel from "../components/3d/ChartPanel";
import { createPieOption } from "../components/charts/pieOption";
import { barOption } from "../components/charts/barOption";
import { createPieReferOption } from "../components/charts/pieReferOption";
import { SwitchCamera } from "lucide-react";

// 카메라 초기값 (페이지 로드 시와 동일)
const INITIAL_CAMERA_POSITION = [-49.48, 18.58, 19.42];
const INITIAL_TARGET = [-25.46, -6.02, -0.67];

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

  // 카메라 컨트롤 ref 생성
  const controlsRef = useRef();
  const cameraRef = useRef();

  // 카메라 초기화 함수
  const resetCamera = () => {
    if (cameraRef.current && controlsRef.current) {
      // Camera position 초기화
      cameraRef.current.position.set(...INITIAL_CAMERA_POSITION);
      // OrbitControls target 초기화
      controlsRef.current.target.set(...INITIAL_TARGET);
      // OrbitControls 업데이트
      controlsRef.current.update();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border bg-white p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            3D Visualization
          </h1>

          <div className="relative w-full h-[600px] bg-gray-900 rounded">
            <Canvas
              camera={{ position: INITIAL_CAMERA_POSITION, fov: 50 }}
              onCreated={({ camera }) => (cameraRef.current = camera)}
              frameloop="demand"
            >
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
              <OrbitControls target={INITIAL_TARGET} ref={controlsRef} />
            </Canvas>

            {/* 카메라 초기화 버튼 */}
            <button
              onClick={resetCamera}
              className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm hover:bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
              title="카메라 초기화"
            >
              <SwitchCamera className="w-5 h-5 text-gray-700" />
            </button>

            {/* 왼쪽 통계 패널 */}
            <div className="absolute left-4 top-4 flex flex-col gap-3">
              <ChartPanel
                title="설비가동률"
                chartOption={createPieOption({
                  showTitle: false, // 제목 숨김 (ChartPanel 제목 사용)
                  labelFontSize: 16, // 40px → 16px (작은 패널용)
                  labelText: "70%",
                  radius: ["50%", "90%"], // 크기 증가 (기본: ["40%", "70%"])
                })}
              />
              <ChartPanel title="층별 설비 현황" chartOption={barOption} />
              <ChartPanel
                title="설비 Loss 시간"
                chartOption={createPieReferOption({
                  showTitle: false, // 제목 숨김 (ChartPanel 제목 사용)
                  radius: "90%", // 작은 패널에 맞게 크게
                })}
              />
            </div>
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

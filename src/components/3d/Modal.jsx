import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import AnimatedModel from "./AnimatedModel";

export default function Modal({
  isOpen,
  onClose,
  equipmentName,
  animationPath,
}) {
  if (!isOpen) return null;

  // 오버레이 클릭 시 모달 닫기
  const handleOverlayClick = (e) => {
    // e.target : 실제 클릭된 요소
    // e.currentTarget : 이벤트 리스너가 달린 요소
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    // 1. 오버레이 (전체 화면 덮기 + 어두운 배경 )
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      {/* 모달 컨텐츠 */}
      <div className="bg-white rounded-lg shadow-xl w-[800px] h-[600px] p-6">
        {/* 헤더(제목 + 닫기 버튼) */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">{equipmentName}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          ></button>
        </div>
        {/* 3D Canvas */}
        <div className="w-full h-[500px] bg-gray-900 rounded">
          <Canvas camera={{ position: [0, 0.1, 2], fov: 40 }}>
            {/* 조명 */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            {/* 애니메이션 모델 */}
            <Suspense fallback={null}>
              <AnimatedModel modelPath={animationPath} />
            </Suspense>

            {/* 카메라 컨트롤 */}
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";

function Model({ onEquipmentClick, selectedName }) {
  // GLB 파일 로드
  const gltf = useGLTF("/models/sol.glb");

  // 찾은 설비 목록
  const [equipments, setEquipments] = useState([]);

  // GLB에서 설비 객체 추출
  useEffect(() => {
    if (!gltf?.scene) {
      return;
    }

    const found = [];
    let totalCount = 0;

    gltf.scene.traverse((child) => {
      totalCount++;
      if (child.name && child.name.match(/^sol_Cylinder\d{3}$/)) {
        found.push(child);
      }
    });

    // 완전히 로드된 씬인지 확인 (최소 100개 이상의 객체가 있어야 함)
    if (totalCount < 100) {
      return;
    }

    console.log(`✅ 발견된 설비: ${found.length}개`);
    setEquipments(found);
  }, [gltf]);

  // 설비 객체에 커스텀 데이터(이름표 및 원본 재질) 초기화 및 저장
  useEffect(() => {
    equipments.forEach((equipment) => {
      equipment.traverse((child) => {
        if (child.isMesh) {
          // 설비 이름 저장 (클릭 감지용)
          child.userData.equipmentName = equipment.name;

          // 원본 재질 저장 (한 번만)
          if (!child.userData.originalMaterial) {
            child.userData.originalMaterial = child.material.clone();
          }
        }
      });
    });
  }, [equipments]);

  // 선택 상태에 따른 색상 변경
  useEffect(() => {
    equipments.forEach((equipment) => {
      const isSelected = selectedName === equipment.name;

      equipment.traverse((child) => {
        if (child.isMesh) {
          const originalMaterial = child.userData.originalMaterial;

          if (isSelected) {
            // 선택됨: 오렌지색으로 변경
            if (!child.userData.isHighlighted) {
              child.material = child.material.clone();
              child.material.color.setHex(0xff6b00);
              child.material.emissive.setHex(0xff3300);
              child.material.emissiveIntensity = 0.5;
              child.userData.isHighlighted = true;
            }
          } else {
            // 선택 안 됨: 원본 재질로 복원
            if (child.userData.isHighlighted) {
              child.material = originalMaterial.clone();
              child.userData.isHighlighted = false;
            }
          }
        }
      });
    });
  }, [selectedName, equipments]);

  // 클릭 핸들러
  const handleClick = (event) => {
    event.stopPropagation();
    const equipmentName = event.object.userData.equipmentName;
    if (equipmentName) {
      console.log("클릭된 설비:", equipmentName);
      onEquipmentClick(equipmentName);
    }
  };

  return <primitive object={gltf.scene} onClick={handleClick} />;
}

export default function ThreeDPage() {
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border bg-white p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            3D Visualization
          </h1>

          <div className="w-full h-[600px] bg-gray-900 rounded">
            <Canvas camera={{ position: [-49.48, 18.58, 19.42], fov: 50 }}>
              {/* 조명 */}
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 5]} intensity={1} />

              {/* 3D 모델  */}
              <Suspense fallback={null}>
                <Model
                  onEquipmentClick={setSelectedEquipment}
                  selectedName={selectedEquipment}
                />
              </Suspense>

              {/* 마우스 컨트롤  */}
              <OrbitControls target={[-25.46, -6.02, -0.67]} />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

useGLTF.preload("/models/sol.glb");

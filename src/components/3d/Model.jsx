import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import useSelectableObjects from "../../hooks/useSelectableObjects";
import useHighlightMaterial from "../../hooks/useHighlightMaterial";

// 클릭 가능하고 선택 효과가 있는 3D 모델 컴포넌트
export default function Model({
  modelPath,
  pattern,
  onSelect,
  selectedName,
  highlightConfig = {
    color: 0xff6b00,
    emissive: 0xff3300,
    emissiveIntensity: 0.5,
  },
}) {
  // 1.GLB 파일 로드
  const gltf = useGLTF(modelPath);

  // 2. 선택 가능한 객체들 추출 (커스텀 훅)
  const objects = useSelectableObjects(gltf, pattern, 100);

  // 3. 클릭 이벤트용 이름표 추가
  useEffect(() => {
    objects.forEach((obj) => {
      obj.traverse((child) => {
        if (child.isMesh) {
          // Mesh에 객체 이름 저장 (클릭 감지용)
          child.userData.objectName = obj.name;
        }
      });
    });
  }, [objects]);

  // 4. 선택 시 하이라이트 효과 (커스텀 훅)
  useHighlightMaterial(objects, selectedName, highlightConfig);

  // 5. 클릭 핸들러
  const handleClick = (event) => {
    event.stopPropagation();
    const objectName = event.object.userData.objectName;

    if (objectName) {
      console.log("클릭된 객체 :", objectName);
      onSelect(objectName);
    }
  };

  // 6. 마우스 커서 변경
  const handlePointerOver = (event) => {
    event.stopPropagation(); // 이벤트 버블링 방지

    const objectName = event.object.userData.objectName;

    if (objectName) {
      document.body.style.cursor = "pointer";
    }
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  // 7. 씬 렌더링
  return (
    <primitive
      object={gltf.scene}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    />
  );
}

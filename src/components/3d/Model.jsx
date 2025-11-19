import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import useSelectableObjects from "../../hooks/useSelectableObjects";
import useHighlightMaterial from "../../hooks/useHighlightMaterial";

/**
 * 클릭 가능하고 선택 효과가 있는 3D 모델 컴포넌트
 *
 * @param {string} modelPath - GLB 파일 경로
 * @param {RegExp} pattern - 선택 가능한 객체 이름 패턴
 * @param {Function} onSelect - 객체 선택 시 콜백 (객체 이름 전달)
 * @param {string|null} selectedName - 현재 선택된 객체 이름
 * @param {Object} highlightConfig - 하이라이트 색상 설정 (선택사항)
 */

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

  // 6. 씬 렌더링
  return <primitive object={gltf.scene} onClick={handleClick} />;
}

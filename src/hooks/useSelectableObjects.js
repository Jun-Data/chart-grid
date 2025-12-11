import { useState, useEffect } from "react";

//GLB 모델에서 특정 패턴의 객체를 추출
export default function useSelectableObjects(
  gltf,
  pattern,
  minObjectCount = 100
) {
  const [objects, setObjects] = useState([]);
  useEffect(() => {
    // GLB 씬이 없으면 종료
    if (!gltf?.scene) {
      return;
    }

    const found = [];
    let totalCount = 0;

    // 씬의 모든 객체 순회
    gltf.scene.traverse((child) => {
      totalCount++;

      // 패턴에 맞는 객체만 추출
      if (child.name && child.name.match(pattern)) {
        found.push(child);
      }
    });
    // HMR 대응 : 완전히 로드된 씬인지 확인
    if (totalCount < minObjectCount) {
      return;
    }

    console.log(`발견된 객체: ${found.length}개`);
    setObjects(found);
  }, [gltf, pattern, minObjectCount]);
  return objects;
}

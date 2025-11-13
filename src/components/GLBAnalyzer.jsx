import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

function GLBAnalyzer({ modelPath }) {
  const gltf = useGLTF(modelPath);

  useEffect(() => {
    if (gltf) {
      console.clear(); // 콘솔 클리어
      console.log("===== GLB 파일 분석 결과 =====");
      console.log("파일 경로:", modelPath);
      console.log("전체 GLTF 객체:", gltf);

      const scene = gltf.scene;
      console.log("\n씬 객체:", scene);

      // 최상위 children 확인
      console.log(`\n최상위 children 개수: ${scene.children.length}`);
      console.log("\n===== 최상위 레벨 오브젝트들 =====");
      scene.children.forEach((child, index) => {
        console.log(`${index + 1}. 이름: "${child.name || '(이름없음)'}", 타입: ${child.type}`);
      });

      // 모든 오브젝트 탐색
      let totalObjects = 0;
      let meshCount = 0;
      const allObjects = [];

      scene.traverse((child) => {
        totalObjects++;

        const info = {
          name: child.name || "(이름없음)",
          type: child.type,
          isMesh: child.isMesh || false,
          isGroup: child.isGroup || false,
          childrenCount: child.children ? child.children.length : 0,
        };

        allObjects.push(info);

        if (child.isMesh) {
          meshCount++;
        }
      });

      console.log(`\n총 오브젝트 개수: ${totalObjects}`);
      console.log(`Mesh 개수: ${meshCount}`);

      console.log("\n===== 모든 오브젝트 목록 =====");
      allObjects.forEach((obj, index) => {
        const meshTag = obj.isMesh ? " [MESH]" : "";
        const childTag = obj.childrenCount > 0 ? ` (자식: ${obj.childrenCount}개)` : "";
        console.log(`${index + 1}. "${obj.name}" - ${obj.type}${meshTag}${childTag}`);
      });

      // 이름 패턴 분석
      console.log("\n===== 설비 패턴 분석 =====");
      const namedObjects = allObjects.filter(obj => obj.name !== "(이름없음)");
      console.log(`이름이 있는 오브젝트: ${namedObjects.length}개`);

      // 이름 중복 확인
      const nameCount = {};
      namedObjects.forEach(obj => {
        nameCount[obj.name] = (nameCount[obj.name] || 0) + 1;
      });

      console.log("\n이름별 개수:");
      Object.entries(nameCount).forEach(([name, count]) => {
        if (count > 1) {
          console.log(`  "${name}": ${count}개`);
        }
      });

      // sol_Cylinder 패턴 찾기
      console.log("\n===== sol_Cylinder 패턴 검색 =====");
      const cylinders = allObjects.filter(obj =>
        obj.name.includes("sol_Cylinder") || obj.name.includes("Cylinder")
      );
      console.log(`sol_Cylinder 포함 오브젝트: ${cylinders.length}개`);
      cylinders.forEach((obj, index) => {
        const meshTag = obj.isMesh ? " [MESH]" : "";
        console.log(`  ${index + 1}. "${obj.name}" - ${obj.type}${meshTag}`);
      });

      // 모든 이름 출력 (sol_ 패턴)
      console.log("\n===== 'sol_' 로 시작하는 모든 오브젝트 =====");
      const solObjects = allObjects.filter(obj => obj.name.startsWith("sol_"));
      console.log(`'sol_' 로 시작하는 오브젝트: ${solObjects.length}개`);
      solObjects.forEach((obj, index) => {
        const meshTag = obj.isMesh ? " [MESH]" : "";
        console.log(`  ${index + 1}. "${obj.name}" - ${obj.type}${meshTag}`);
      });
    }
  }, [gltf]);

  return null; // 화면에는 아무것도 렌더링하지 않음
}

export default GLBAnalyzer;

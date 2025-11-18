import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

export default function AnimatedModel({ modelPath }) {
  // 1. useRef 로 그룹 참조 생성
  const group = useRef();

  // 2. GLB 파일 로드 (scene + animations)
  const { scene, animations } = useGLTF(modelPath);

  // 3. 애니메이션 훅 사용
  const { actions, names } = useAnimations(animations, group);

  // 4. useEffect로 애니메이션 자동 재생
  useEffect(() => {
    // 애니메이션이 있는지 확인
    if (names.length > 0) {
      // 첫 애니메이션 가져오기
      const firstAnimation = actions[names[0]];
      if (firstAnimation) {
        firstAnimation.reset().play();
      }
    }
    // cleanup : 컴포넌트 제거 시 애니메이션 정지
    return () => {
      Object.values(actions).forEach((action) => action?.stop());
    };
  }, [actions, names]);

  // 5. primitive로 scene 렌더링 (ref 연결)
  return (
    <primitive ref={group} object={scene} scale={15} position={[0, -0.3, 0]} />
  );
}

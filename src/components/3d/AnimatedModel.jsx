import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useMemo } from "react";
import { SkeletonUtils } from "three/examples/jsm/Addons.js";

export default function AnimatedModel({ modelPath }) {
  // 1. useRef 로 그룹 참조 생성
  const group = useRef();

  // 2. GLB 파일 로드 (scene + animations)
  const { scene, animations } = useGLTF(modelPath);

  // 3. SkeletonUtils.clone 을 사용해 씬을 복제 (독립적인 인스턴스 생성)
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  // 4. 복제된 씬에 애니메이션 훅 적용
  const { actions, names } = useAnimations(animations, group);

  // 5. useEffect로 애니메이션 자동 재생
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

  // 6. primitive로 scene 렌더링 (ref 연결)
  return (
    <primitive ref={group} object={clone} scale={15} position={[0, -0.3, 0]} />
  );
}

import { useEffect } from "react";

/**
 * 3D 객체의 재질을 저장하고 선택 시 하이라이트 효과를 적용하는 훅
 *
 * @param {Array} objects - 대상 객체 배열
 * @param {string|null} selectedId - 선택된 객체 ID (name)
 * @param {Object} highlightConfig - 하이라이트 색상 설정
 * @param {number} highlightConfig.color - 하이라이트 색상 (hex)
 * @param {number} highlightConfig.emissive - 발광 색상 (hex)
 * @param {number} highlightConfig.emissiveIntensity - 발광 강도
 */

export default function useHighlightMaterial(
  objects,
  selectedId,
  highlightConfig = {}
) {
  // 기본값 설정
  const {
    color = 0xff6b00,
    emissive = 0xff3300,
    emissiveIntensity = 0.5,
  } = highlightConfig;

  // 1. 초기 설정 : 원본 재질 저장
  useEffect(() => {
    objects.forEach((obj) => {
      obj.traverse((child) => {
        if (child.isMesh) {
          // 원본 재질 저장(한번만)
          if (!child.userData.originalMaterial) {
            child.userData.originalMaterial = child.material.clone();
          }
        }
      });
    });
  }, [objects]);

  // 2. 선택 상태에 따른 색상 변경
  useEffect(() => {
    objects.forEach((obj) => {
      const isSelected = selectedId === obj.name;

      obj.traverse((child) => {
        if (child.isMesh) {
          const originalMaterial = child.userData.originalMaterial;

          if (isSelected) {
            // 선택됨: 하이라이트 색상으로 변경
            if (!child.userData.isHighlighted) {
              child.material = child.material.clone();
              child.material.color.setHex(color);
              child.material.emissive.setHex(emissive);
              child.material.emissiveIntensity = emissiveIntensity;
              child.userData.isHighlighted = true;
            }
          } else {
            // 선택 안 됨: 원본 재질로 복원
            if (child.userData.isHighlighted) {
              child.material = originalMaterial;
              child.userData.isHighlighted = false;
            }
          }
        }
      });
    });
  }, [selectedId, objects, color, emissive, emissiveIntensity]);
}

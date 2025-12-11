import { useState } from "react";

// ✅ 1. 화면 상태 상수 (오타 방지용)
const VIEW = {
  MAIN: "MAIN", // 메인 (메뉴 선택)
  SOLUTION: "SOLUTION", // 원인/해결
  CONTROL: "CONTROL", // 원격 제어
};

// ✅ 2. 원격 제어 메뉴 목록 (배열로 관리)
const CONTROL_ITEMS = [
  "공정 파라미터",
  "원격 작업지시",
  "설비별 가동/비가동",
  "라인변경",
  "원격 시작/중지",
  "파라미터 조정",
  "긴급정지", // (특수 스타일 적용 예정)
  "제어권한 관리",
];

export default function MachinePopup({ machineName, onClose }) {
  // 현재 어떤 화면을 보여줄지 관리하는 상태 (기본값: MAIN)
  const [currentView, setCurrentView] = useState(VIEW.MAIN);

  // 메인으로 돌아가는 함수
  const goBack = () => setCurrentView(VIEW.MAIN);

  // ✅ 3. 상태에 따라 내용을 갈아 끼우는 함수
  const renderContent = () => {
    switch (currentView) {
      case VIEW.MAIN:
        return (
          <MainContent
            onGoSolution={() => setCurrentView(VIEW.SOLUTION)}
            onGoControl={() => setCurrentView(VIEW.CONTROL)}
          />
        );
      case VIEW.SOLUTION:
        return <SolutionContent onBack={goBack} />;
      case VIEW.CONTROL:
        return <ControlContent onBack={goBack} />;
      default:
        return null;
    }
  };

  return (
    // 팝업 전체 프레임
    <div className="w-72 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden animate-fade-in text-left">
      {/* 헤더 (공통) */}
      <div className="bg-gray-50 px-4 py-3 flex justify-between items-center border-b border-gray-100">
        <h3 className="font-bold text-gray-800 text-sm">{machineName} 오류</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-red-500 transition-colors text-lg leading-none"
        >
          &times;
        </button>
      </div>

      {/* 콘텐츠 영역 (가변) */}
      <div className="p-0">{renderContent()}</div>
    </div>
  );
}

// -------------------------------------------------------
// 👇 하위 컴포넌트 (내부에서만 사용)
// -------------------------------------------------------

// 1. 메인 메뉴 화면
function MainContent({ onGoSolution, onGoControl }) {
  return (
    <div className="p-2 space-y-1">
      <MenuButton onClick={onGoSolution} label="원인/해결" highlight />
      <MenuButton onClick={onGoControl} label="원격 제어" highlight />
    </div>
  );
}

// 2. 원인/해결 상세 화면
function SolutionContent({ onBack }) {
  return (
    <div className="p-4">
      <BackButton onClick={onBack} />

      <div className="mt-2 p-3 bg-red-50 border border-red-100 rounded text-sm text-gray-700">
        <p className="font-bold text-red-600 mb-1">⚠️ 원인 및 해결 메시지</p>
        <p className="text-gray-600 leading-relaxed">
          모터 과부하가 감지되었습니다.
          <br />
          3번 냉각 팬을 점검하고 재가동해주세요.
        </p>
      </div>
    </div>
  );
}

// 3. 원격 제어 상세 화면 (8개 항목)
function ControlContent({ onBack }) {
  return (
    <div>
      <div className="px-4 pt-3 pb-1">
        <BackButton onClick={onBack} />
      </div>

      <ul className="text-sm text-gray-700 max-h-[300px] overflow-y-auto">
        {CONTROL_ITEMS.map((item, index) => {
          // '긴급정지'는 빨간색으로 표시
          const isEmergency = item === "긴급정지";

          return (
            <li
              key={index}
              className={`
                px-4 py-3 border-b border-gray-50 cursor-pointer flex justify-between items-center transition-colors
                ${
                  isEmergency
                    ? "text-red-600 font-bold hover:bg-red-50"
                    : "hover:bg-blue-50 text-gray-700"
                }
              `}
              onClick={() => console.log(`${item} 클릭됨`)}
            >
              <span>{item}</span>
              <span className="text-gray-300 text-xs">&gt;</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// --- 공통 UI 요소 ---

// 메뉴 버튼 (화살표 포함)
function MenuButton({ onClick, label, highlight }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex justify-between items-center px-3 py-3 rounded
        text-sm font-medium transition-colors
        ${
          highlight
            ? "text-gray-700 hover:bg-blue-50"
            : "text-gray-600 hover:bg-gray-100"
        }
      `}
    >
      <div className="flex items-center gap-2">
        {/* 빨간 점선 박스 느낌을 위한 데코레이션 (선택사항) */}
        {highlight && (
          <div className="w-1 h-4 bg-red-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></div>
        )}
        <span>{label}</span>
      </div>
      <span className="text-gray-400">&gt;</span>
    </button>
  );
}

// 뒤로가기 버튼
function BackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-xs text-gray-500 hover:text-blue-600 flex items-center gap-1 font-medium"
    >
      &lt; 뒤로 가기
    </button>
  );
}

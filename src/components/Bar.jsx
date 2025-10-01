import { useState } from "react";
import Echart from "./Echart";

// 초기 차트 옵션을 컴포넌트 외부에 정의합니다.
const initialOption = {
  xAxis: {
    data: ["4층", "6층"],
  },
  yAxis: {},
  dataGroupId: "",
  animationDurationUpdate: 500,
  series: {
    type: "bar",
    id: "sales",
    data: [
      { value: 5, groupId: "4층" },
      { value: 2, groupId: "6층" },
    ],
    universalTransition: {
      enabled: true,
      divideShape: "clone",
    },
    graphic: null,
  },
};

const drilldownData = [
  // (기존과 동일한 drilldownData...)
  {
    dataGroupId: "4층",
    data: [
      ["Unwinder", 4],
      ["Heater", 2],
      ["Film Feed", 1],
      ["Leveler", 2],
      ["Vision", 1],
    ],
  },
  {
    dataGroupId: "6층",
    data: [
      ["EPC", 4],
      ["Film Welding", 2],
    ],
  },
];

export default function Bar() {
  const chartCss = {
    width: "900px",
    height: "600px",
  };

  // useState를 사용해 차트 옵션을 상태로 관리합니다.
  const [option, setOption] = useState(initialOption);

  // 차트 클릭 이벤트를 처리할 함수입니다.
  const handleChartClick = (event) => {
    if (event.data) {
      const subData = drilldownData.find(
        (data) => data.dataGroupId === event.data.groupId
      );
      if (!subData) {
        return;
      }

      // myChart.setOption 대신, 상태를 업데이트하여 리렌더링을 유도합니다.
      setOption({
        xAxis: {
          data: subData.data.map((item) => item[0]),
        },
        yAxis: {}, // yAxis를 명시적으로 추가
        series: {
          type: "bar",
          id: "sales",
          dataGroupId: subData.dataGroupId,
          data: subData.data.map((item) => item[1]),
          universalTransition: {
            enabled: true,
            divideShape: "clone",
          },
        },
        graphic: [
          // 뒤로가기 버튼
          {
            type: "text",
            left: 50,
            top: 20,
            style: {
              text: "뒤로가기",
              fontSize: 18,
            },
            onclick: () => {
              // 뒤로가기 버튼 클릭 시 초기 상태로 되돌립니다.
              setOption(initialOption);
            },
          },
        ],
      });
    }
  };

  return (
    <div>
      <Echart
        chartCss={chartCss}
        chartOption={option} // 상태값을 prop으로 전달
        onEvents={{ click: handleChartClick }} // 클릭 핸들러를 prop으로 전달
      />
    </div>
  );
}

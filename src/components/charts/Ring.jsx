import Echart from "./Echart";

export default function Ring() {
  const chartCss = {
    width: "900px",
    height: "600px",
  };

  const chartOption = {
    title: {
      text: "1호기 불량 원인",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "1%",
      left: "center",
    },

    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        labelLine: {
          show: false,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        data: [
          { value: 55, name: "원자재 불량" },
          { value: 20, name: "장비 오작동" },
          { value: 10, name: "작업자 실수" },
          { value: 9, name: "설정값 오류" },
          { value: 6, name: "기타" },
        ],
      },
    ],
  };
  return (
    <div>
      <Echart chartCss={chartCss} chartOption={chartOption} />
    </div>
  );
}

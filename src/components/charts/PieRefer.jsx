import ReactECharts from "echarts-for-react";

export default function PieRefer() {
  const option = {
    title: {
      text: "설비 Loss 시간",
      left: "center",
      top: "5%",
      textStyle: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#333",
      },
    },
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        type: "pie",
        radius: "50%",
        data: [
          { value: 6000, name: "정상" },
          { value: 735, name: "오류 1" },
          { value: 580, name: "오류 2" },
          { value: 484, name: "오류 3" },
          { value: 300, name: "오류 4" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  return (
    <ReactECharts
      option={option}
      style={{ width: "100%", height: "700px" }}
      opts={{ renderer: "svg" }}
    />
  );
}

import EChartsReact from "echarts-for-react";
import ReactECharts from "echarts-for-react";

export default function Pie() {
  const option = {
    title: {
      text: "설비 가동률",
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
    legend: {
      bottom: "5%",
      left: "center",
    },
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "center",
          formatter: "70 %",
          fontSize: 40,
          fontWeight: "bold",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 70, name: "가동", itemStyle: { color: "#ee6666" } },
          { value: 30, name: "비가동", itemStyle: { color: "#e0e0e0" } },
        ],
      },
    ],
  };
  return (
    <ReactECharts
      option={option}
      style={{ width: "100%", height: "600px" }}
      opts={{ renderer: "svg" }}
    />
  );
}

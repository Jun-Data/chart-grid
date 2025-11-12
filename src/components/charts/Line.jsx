import Echart from "./Echart";

export default function Line() {
  const chartCss = {
    width: "600px",
    height: "400px",
  };

  const chartOption = {
    title: {
      text: "시간대별 설비 가동률 ",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "1%",
      left: "center",
    },

    xAxis: {
      data: [
        "00시",
        "03시",
        "06시",
        "09시",
        "12시",
        "15시",
        "18시",
        "21시",
        "24시",
      ],
    },
    yAxis: {},
    series: [
      {
        name: "가동률",
        data: [99, 88, 92, 80, 70, 90, 93, 100, 99],
        type: "line",
        smooth: true,
      },
    ],
  };

  return (
    <div>
      <Echart chartCss={chartCss} chartOption={chartOption} />
    </div>
  );
}

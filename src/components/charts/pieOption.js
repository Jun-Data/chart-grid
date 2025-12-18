export const createPieOption = ({
  showTitle = true,
  titleText = "설비 가동률",
  titleFontSize = 40,
  labelText = "70 %",
  labelFontSize = 40,
  radius = ["40%", "70%"],
  data = [
    { value: 70, name: "가동", itemStyle: { color: "#ee6666" } },
    { value: 30, name: "비가동", itemStyle: { color: "#e0e0e0" } },
  ],
} = {}) => ({
  title: showTitle
    ? {
        text: titleText,
        left: "center",
        top: "5%",
        textStyle: {
          fontSize: titleFontSize,
          fontWeight: "bold",
          color: "#333",
        },
      }
    : undefined,
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      type: "pie",
      radius,
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: "center",
        formatter: labelText,
        fontSize: labelFontSize,
        fontWeight: "bold",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: labelFontSize,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data,
    },
  ],
});

// 기본 export (ChartsPage용 - 큰 차트)
export const pieOption = createPieOption();

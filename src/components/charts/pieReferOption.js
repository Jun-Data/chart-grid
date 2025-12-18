export const createPieReferOption = ({
  showTitle = true,
  titleText = "설비 Loss 시간",
  titleFontSize = 40,
  radius = "50%",
  data = [
    { value: 6000, name: "정상" },
    { value: 735, name: "오류 1" },
    { value: 580, name: "오류 2" },
    { value: 484, name: "오류 3" },
    { value: 300, name: "오류 4" },
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
      data,
      label: {
        show: false,  // 작은 패널에서는 라벨 숨김
      },
      labelLine: {
        show: false,  // 라벨 연결선 숨김
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
});

// 기본 export (ChartsPage용)
export const pieReferOption = createPieReferOption();

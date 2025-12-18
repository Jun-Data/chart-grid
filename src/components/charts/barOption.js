export const barOption = {
  grid: {
    left: 10, // 왼쪽 여백 (yAxis 공간)
    right: 30, // 오른쪽 여백 (대칭)
    top: 10, // 상단 여백 (증가)
    bottom: 0, // 하단 여백 (xAxis 공간)
    containLabel: true, // 라벨이 grid 안에 포함되도록
  },
  xAxis: {
    data: ["4층", "6층"],
    axisLabel: {
      fontSize: 10, // 작은 폰트
    },
  },
  yAxis: {
    axisLabel: {
      fontSize: 10,
    },
  },
  series: {
    type: "bar",
    data: [5, 2],
    barWidth: "60%", // 막대 두께
  },
};

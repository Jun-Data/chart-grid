import React, { useState, useEffect } from "react";
import Echart from "./Echart"; // 재사용 Echart 컴포넌트

// 기본 차트 옵션 (사용자가 제공한 옵션 기반)
const initialOption = {
  series: [
    {
      type: "gauge",
      progress: {
        show: true,
        width: 18,
      },
      axisLine: {
        lineStyle: {
          width: 18,
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        length: 15,
        lineStyle: {
          width: 2,
          color: "#999",
        },
      },
      axisLabel: {
        distance: 25,
        color: "#999",
        fontSize: 20,
      },
      anchor: {
        show: true,
        showAbove: true,
        size: 25,
        itemStyle: {
          borderWidth: 10,
        },
      },
      title: {
        show: false,
      },
      detail: {
        valueAnimation: true,
        fontSize: 80,
        offsetCenter: [0, "70%"],
      },
      data: [
        {
          value: 70, // 초기값
        },
      ],
    },
  ],
};

// React 컴포넌트
export default function Gauge() {
  const chartCss = {
    width: "600px",
    height: "600px",
  };

  const [option, setOption] = useState(initialOption);

  // 3초마다 랜덤 데이터로 게이지 값을 업데이트하는 로직
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newValue = Math.round(Math.random() * 100);
      setOption((prevOption) => ({
        ...prevOption,
        series: [
          {
            ...prevOption.series[0],
            data: [{ value: newValue }],
          },
        ],
      }));
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return <Echart chartCss={chartCss} chartOption={option} />;
}

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const Echart = ({ chartCss, chartOption, onEvents }) => {
  const chartRef = useRef(null);
  // 차트 인스턴스를 ref에 저장하여 컴포넌트가 리렌더링 되어도 유지되도록 합니다.
  const chartInstanceRef = useRef(null);

  // 1. 차트 초기화 (컴포넌트가 처음 마운트될 때 딱 한 번만 실행)
  useEffect(() => {
    if (chartRef.current) {
      chartInstanceRef.current = echarts.init(chartRef.current);
    }

    const resizeHandler = () => {
      chartInstanceRef.current?.resize();
    };
    window.addEventListener("resize", resizeHandler);

    // 컴포넌트가 언마운트될 때 정리
    return () => {
      window.removeEventListener("resize", resizeHandler);
      chartInstanceRef.current?.dispose();
    };
  }, []); // 의존성 배열을 비워서 최초 1회만 실행되도록 보장

  // 2. 차트 옵션 업데이트 (chartOption prop이 변경될 때마다 실행)
  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.setOption(chartOption);
    }
  }, [chartOption]);

  // 3. 이벤트 핸들러 등록 (onEvents prop이 변경될 때마다 실행)
  useEffect(() => {
    if (chartInstanceRef.current && onEvents) {
      for (const eventName in onEvents) {
        // 기존 이벤트를 제거하고 새로 등록하여 중복을 방지할 수 있습니다.
        chartInstanceRef.current.off(eventName);
        chartInstanceRef.current.on(eventName, (params) => {
          onEvents[eventName](params);
        });
      }
    }
  }, [onEvents]);

  return <div style={chartCss} ref={chartRef} />;
};

export default Echart;

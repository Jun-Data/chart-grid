import { useRef, useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import dummy from "../../dummy/data";

function DonutChart() {
  // 더미데이터를 가져옵니다.
  const data = dummy.donutData;

  // 차트를 그릴 div에 대한 참조(ref)를 생성합니다.
  const chartRef = useRef(null);

  // 컴포넌트가 렌더링된 후 차트를 생성하고, 사라질 때 정리하기 위해 사용합니다.
  useLayoutEffect(() => {
    // ID 문자열 대신 ref가 가리키는 실제 DOM 요소를 사용합니다.
    let root = am5.Root.new(chartRef.current);

    // 테마 설정
    root.setThemes([am5themes_Animated.new(root)]);

    // 차트 생성
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
        innerRadius: am5.percent(50),
      })
    );

    // 시리즈 설정
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        alignLabels: false,
      })
    );
    series.data.setAll(data);
    // 레전드 생성
    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 15,
        marginBottom: 15,
      })
    );

    legend.data.setAll(series.dataItems);

    series.appear(1000, 100);
    // 컴포넌트가 사라질 때 차트 리소스를 정리하는 클린업 함수
    return () => {
      root.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 빈 배열: 이 effect는 첫 렌더링 시 한 번만 실행됩니다.

  // 차트가 그려질 div를 렌더링하고 ref를 연결합니다.
  return <div ref={chartRef} style={{ width: "100%", height: "500px" }}></div>;
}

export default DonutChart;

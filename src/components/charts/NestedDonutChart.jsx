import { useRef, useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import dummy from "../dummy/data";

function NestedDonutChart() {
  // 더미데이터를 가져옵니다.
  const data = dummy.nestedData;

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
        startAngle: 160,
        endAngle: 380,
      })
    );

    // // 첫 번째 시리즈 (안쪽 도넛)
    // let series0 = chart.series.push(
    //   am5percent.PieSeries.new(root, {
    //     valueField: "value",
    //     categoryField: "category",
    //     startAngle: 160,
    //     endAngle: 380,
    //     radius: am5.percent(70),
    //     innerRadius: am5.percent(65),
    //   })
    // );

    // // 색상 설정
    // let colorSet = am5.ColorSet.new(root, {
    //   colors: [series0.get("colors").getIndex(0)],
    //   passOptions: { lightness: -0.05, hue: 0 },
    // });
    // series0.set("colors", colorSet);

    // series0.ticks.template.set("forceHidden", true);
    // series0.labels.template.set("forceHidden", true);
    // series0.data.setAll(data);

    // 두 번째 시리즈 (바깥 도넛)
    let series1 = chart.series.push(
      am5percent.PieSeries.new(root, {
        startAngle: 160,
        endAngle: 380,
        valueField: "value",
        innerRadius: am5.percent(80),
        categoryField: "category",
      })
    );

    series1.ticks.template.set("forceHidden", true);
    series1.labels.template.set("forceHidden", true);
    series1.data.setAll(data);

    // 중앙 레이블
    // eslint-disable-next-line no-unused-vars
    let label = chart.seriesContainer.children.push(
      am5.Label.new(root, {
        textAlign: "center",
        centerY: am5.percent(50), // 중앙 정렬을 위해 p100 대신 percent(50) 사용
        centerX: am5.percent(50),
        text: "[fontSize:18px]total[/]:\n[bold fontSize:30px]1647.9[/]",
      })
    );

    // 컴포넌트가 사라질 때 차트 리소스를 정리하는 클린업 함수
    return () => {
      root.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 빈 배열: 이 effect는 첫 렌더링 시 한 번만 실행됩니다.

  // 차트가 그려질 div를 렌더링하고 ref를 연결합니다.
  return <div ref={chartRef} style={{ width: "100%", height: "500px" }}></div>;
}

export default NestedDonutChart;

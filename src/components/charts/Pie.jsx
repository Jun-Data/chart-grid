import ReactECharts from "echarts-for-react";
import { pieOption } from "./pieOption";

export default function Pie() {
  return (
    <ReactECharts
      option={pieOption}
      style={{ width: "100%", height: "600px" }}
      opts={{ renderer: "svg" }}
    />
  );
}

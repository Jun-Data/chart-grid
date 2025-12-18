import Echart from "../charts/Echart";

export default function ChartPanel({ title, chartOption }) {
  return (
    <div className="w-[200px] h-[170px] bg-[#324972]/50 backdrop-blur-sm rounded-lg shadow-lg p-4 ">
      <h3 className="font-bold text-white ">{title}</h3>
      <div style={{ height: "118px", width: "168px" }}>
        <Echart
          chartOption={chartOption}
          chartCss={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}

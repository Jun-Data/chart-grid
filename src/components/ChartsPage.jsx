import Grid from "./Grid";
import NestedDonutChart from "./NestedDonutChart";
import DonutChart from "./DonutChart";
import Line from "./Line";
import Ring from "./Ring";
import Bar from "./Bar";
import Gauge from "./Gauge";

function ChartsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <section className="rounded-xl border bg-white p-4 shadow-sm">
          <h1 className="py-8 px-4 font-extrabold text-4xl">AG Grid Test</h1>
          <div className="mx-auto py-8 max-w-5xl">
            <Grid />
          </div>
        </section>

        <section className="rounded-xl border bg-white p-4 shadow-sm">
          <h1 className="py-8 px-4 font-extrabold text-4xl">amChart Test</h1>
          <NestedDonutChart />
          <DonutChart />
        </section>

        <section className="rounded-xl border bg-white p-4 shadow-sm">
          <h1 className="py-8 px-4 font-extrabold text-4xl">E-Chart Test</h1>
          <div className="flex flex-col items-center space-y-15">
            <Gauge />
            <Line />
            <Ring />
            <Bar />
          </div>
        </section>
      </div>
    </div>
  );
}

export default ChartsPage;

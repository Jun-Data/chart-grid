import Grid from "../components/Grid";
import NestedDonutChart from "../components/charts/NestedDonutChart";
import DonutChart from "../components/charts/DonutChart";
import Line from "../components/charts/Line";
import Ring from "../components/charts/Ring";
import Bar from "../components/charts/Bar";
import Gauge from "../components/charts/Gauge";

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

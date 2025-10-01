import Grid from "./components/Grid";
import NestedDonutChart from "./components/NestedDonutChart";
import DonutChart from "./components/DonutChart";
import Line from "./components/Line";
import Ring from "./components/Ring";
import Bar from "./components/Bar";
import Gauge from "./components/Gauge";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;

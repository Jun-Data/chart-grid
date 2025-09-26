import Grid from "./components/Grid";
import NestedDonutChart from "./components/NestedDonutChart";
import DonutChart from "./components/DonutChart";

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
      {/* <section className="rounded-xl border bg-white p-4 shadow-sm">
        <h1 className="py-8 px-4 font-extrabold text-4xl">E-Chart Test</h1>
        <Line />
      </section> */}
    </>
  );
}

export default App;

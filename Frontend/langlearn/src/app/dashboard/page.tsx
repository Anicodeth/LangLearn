import { Button } from "../../components/ui/button";
import astroLogo from "../../assets/astro.png";
import Image from "next/image";
import { BarChart } from "@mui/x-charts/BarChart";


export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col p-10">
      <div className="w-full h-fit mb-3">
        <Billboard />
      </div>
      <div>
        <Charts />
      </div>
    </div>
  );
}

function Billboard() {
  return (
    <div className="w-full h-64 flex flex-row justify-between items-start p-10 shadow-xl rounded-xmd bg-mainlighter">
      <div className="flex h-full flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold typewriter font-mono">
            Welcome to Lang Learn
          </h1>
          <p>- Epherata</p>
        </div>
        <div>
          <p>Learn a language now</p>
          <Button>Learn a language</Button>
        </div>
      </div>
      <div>
        <Image src={astroLogo} alt="LangLearn" width="140" height="140" />
      </div>   
    </div>

  );
}

function Charts(){
  return (
    <div>
      <BarChart
        series={[
          { data: [35, 44, 24, 34] },
          { data: [51, 6, 49, 30] },
          { data: [15, 25, 30, 50] },
          { data: [60, 50, 15, 25] },
        ]}
        height={290}
        xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      />
    </div>
  );

}

"use client"
import { Button } from "../../components/ui/button";
import astroLogo from "../../assets/astro.png";
import Image from "next/image";
import { BarChart } from "@mui/x-charts/BarChart";
import { ChartContainer, BarPlot } from "@mui/x-charts";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];


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
      <ChartContainer
        width={500}
        height={300}
        series={[{ data: uData, label: "uv", type: "bar" }]}
        xAxis={[{ scaleType: "band", data: xLabels }]}
      >
        <BarPlot />
      </ChartContainer>
    </div>
  );

}

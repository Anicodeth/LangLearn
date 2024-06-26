"use client"
import { Button } from "../../components/ui/button";
import astroLogo from "../../assets/astro.png";
import Image from "next/image";
import { ChartContainer, BarPlot } from "@mui/x-charts";
import { LineChart } from "@mui/x-charts/LineChart";
import manPng from "../../assets/man.png";

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
    <div className="w-full h-screen flex flex-col mt-5 sm:mt-0 p-8 sm:p-10 overflow-y-scroll">
      <div className="w-full justify-between h-fit mb-3">
        <Billboard />
      </div>
      <div className="flex flex-col sm:flex-row w-full justify-between mt-1">
        <Charts numbers={"3,345"} color={"red"} title={"Number of Users"} />
        <Charts numbers={"6"} color={"red"} title={"Number of languages"} />
        <Charts numbers={"12"} color={"red"} title={"Number of courses"} />
      </div>
      <div className="flex justify-between flex-col sm:flex-row items-center">
        <div className="p-10">
          <Image height={200} width={200} src={manPng} alt={""} />
        </div>
        <div className="w-full sm:w-2/3 flex justify-between flex-row items-center">
          <BasicLineChart />
        </div>
      </div>
    </div>
  );
}

function Billboard() {
  return (
    <div className="w-full h-64 flex flex-row justify-between items-start p-8 sm:p-10 shadow-xl rounded-xmd bg-mainlighter">
      <div className="flex h-full flex-col justify-between">
        <div>
          <h1 className="font-bold text-base typewriter font-mono sm:text-2xl">
            Welcome to Lang Learn
          </h1>
          <p>- Epherata</p>
        </div>
        <div>
          <p>Learn a language now</p>
          <Button>Learn a language</Button>
        </div>
      </div>
      <div className = "hidden sm:block">
        <Image src={astroLogo} alt="LangLearn" width="140" height="140" />
      </div>   
    </div>

  );
}

function Charts({title, numbers, color}:{title:string, numbers:string | number, color:string}){
  return (
    <div className="flex justify-between w-92 shadow-xl p-5 rounded-xmd">
      <div className="flex flex-col item-center justify-between ">
        <h1 className="text-black text-l">{title}</h1>
        <h1 className="text-6xl font-bold">{numbers}</h1>
      </div>

      <div className="flex  ">
        <ChartContainer
          width={160}
          height={130}
          series={[{ data: uData, label: "uv", type: "bar" }]}
          xAxis={[{ scaleType: "band", data: xLabels }]}
        >
          <BarPlot className="h-full" />
        </ChartContainer>
      </div>
    </div>
  );

}



 function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={600}
      height={300}
    />
  );
}
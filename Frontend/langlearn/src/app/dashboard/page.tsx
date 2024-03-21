import langLogo from "../../assets/langlearn2.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-start p-10">
      <div className = "w-full h-fit">
        <Billboard />
      </div>
      <div></div>
    </div>
  );
}

function Billboard() {
  return (
    <div className="w-full h-60 flex flex-row justify-between items-start p-10 shadow-xl rounded-xmd bg-mainlighter">
      <div>
        <h1 className = "text-2xl font-bold type-writer">Welcome to Lang Learn</h1>
        <p>- Epherata</p>
      </div>
      <div>
        <Image src={langLogo} alt="LangLearn" width="200" height="100" />
      </div>
    </div>
  );
}

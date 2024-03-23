import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
export default function Quiz() {
  const question = "How do you say 'hello' in Spanish?";
  const choiceA = "Adios";
  const choiceB = "Grasias";
  const choiceC = "Hola";
  const choiceD = "Amigos";
  return (
  <div>
<Carousel className="w-50">
  <CarouselContent>
    <CarouselItem>
      <div>
      <h1  className="flex justify-center items-center w-80 font-bold"> {question}</h1>
        <div  className="flex justify-center items-center w-50">
        <Button className="ml-4  w-20 h-10 p-4 mr-4 "> {choiceA}</Button>
        <Button className="mb-4 w-20  h-10 p-4 mt-4"> {choiceB}</Button>
          </div>
          <div  className="flex justify-center items-center w-50">
        <Button className="ml-4 mb-4 w-20 h-10 p-4 mr-4"> {choiceC}</Button>
        <Button className="mb-4 w-20 h-10 p-4"> {choiceD}</Button>
          </div>
        
      </div>
    </CarouselItem>
    <CarouselItem>
    <div>
      <h1  className="flex justify-center items-center w-80 font-bold"> How do you say "hello" in Spanish?</h1>
        <div  className="flex justify-center items-center w-50">
        <Button className="ml-4  w-20 h-10 p-4 mr-4 "> Adios</Button>
        <Button className="mb-4 w-20  h-10 p-4 mt-4"> Grasias</Button>
          </div>
          <div  className="flex justify-center items-center w-50">
        <Button className="ml-4 mb-4 w-20 h-10 p-4 mr-4"> Hola</Button>
        <Button className="mb-4 w-20 h-10 p-4"> Amigos</Button>
          </div>
          </div>
    </CarouselItem>
    <CarouselItem>
    <div>
      <h1  className="flex justify-center items-center w-50 font-bold"> How do you say "hello" in Spanish?</h1>
        <div  className="flex justify-center items-center w-50">
        <Button className="ml-4  w-20 h-10 p-4 mr-4 "> Adios</Button>
        <Button className="mb-4 w-20  h-10 p-4 mt-4"> Grasias</Button>
          </div>
          <div  className="flex justify-center items-center w-50">
        <Button className="ml-4 mb-4 w-20 h-10 p-4 mr-4"> Hola</Button>
        <Button className="mb-4 w-20 h-10 p-4"> Amigos</Button>
          </div>
          </div>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
<Button className="bg-[#0c5e76]">Submit</Button>
  </div>
    );
}

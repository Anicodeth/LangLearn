import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-1/5 h-fit">
        <CardHeader>
          <CardTitle>Lang Learn</CardTitle>
          <CardDescription>The AI language Teacher</CardDescription>
        </CardHeader>
        <CardFooter className="flex-col items-start">
          <p>Join us</p>
          <Button>Sign Up</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

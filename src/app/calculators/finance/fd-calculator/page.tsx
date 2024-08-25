import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { PieChartComponent } from "./pie-chart";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider"


export default function fdCalculator() {
  return (
    <main>
      <Card className="p-2 m-2">
        <CardHeader className="items-center">
          <CardTitle>FD Calculator</CardTitle>
          <CardDescription>
            Calculating the maturity amount of an FD can be a complicated and
            time-consuming process. An online FD calculator enables one to
            figure it without breaking a sweat.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row">
            <div className="basis-2/3 m-2">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <div className="flex flex-row mb-4">
                    <Label className="basis-1/2">Total Investment</Label>
                    <Input className="basis-1/2"/>
                  </div>
                  <div className="mb-4">
                  <Slider defaultValue={[33]} max={100} step={1} />
                  </div>
                </div>
                <div>
                <div className="flex flex-col">
                <div className="flex flex-row mb-4">
                  <Label className="basis-1/2">Rate of Interest(p.a)</Label>
                  <Input className="basis-1/2"/>
                  </div>
                  <div className="mb-4">
                  <Slider defaultValue={[33]} max={100} step={1} />
                  </div>
                  </div>
                </div>
                <div>
                <div className="flex flex-row">
                  <Label className="basis-1/2">Time Period</Label>
                  <Input className="basis-1/2"/>
                  </div>
                </div>
                <div>
                  <Label>Invested Amount</Label>
                </div>
                <div>
                  <Label>Gained Interest</Label>
                </div>
                <div>
                  <Label>Invested Amount</Label>
                </div>
              </div>
            </div>
            <div className="basis-1/3">
              <PieChartComponent />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </main>
  );
}

'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { PieChartComponent } from "@/components/custom/pie-chart";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import React from "react";

export default function fdCalculator() {
  const [totalInvestment, setTotalInvestment] = React.useState(500000);
  const [roi, setRoi] = React.useState(6);
  const [timePeriod, setTimePeriod] = React.useState(2);
  const gainedInterest = (totalInvestment*roi*timePeriod)/100;
  const totalValue = totalInvestment + gainedInterest;
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
          <div className="flex flex-wrap flex-row">
            <div className="grow m-2">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <div className="flex flex-row mb-4">
                    <Label className="basis-1/2">Total Investment</Label>
                    <Input className="basis-1/2" value={totalInvestment} onChange={(w)=>setTotalInvestment(Number(w.target.value))}/>
                  </div>
                  <div className="mb-4">
                    <Slider defaultValue={[totalInvestment]} value={[totalInvestment]} max={10000000} step={10000} onValueChange={(i) => setTotalInvestment(i[0])}/>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col">
                    <div className="flex flex-row mb-4">
                      <Label className="basis-1/2">Rate of Interest(p.a)</Label>
                      <Input className="basis-1/2" value={roi} onChange={(w)=>setRoi(Number(w.target.value))}/>
                    </div>
                    <div className="mb-4">
                      <Slider defaultValue={[roi]} value={[roi]} max={10} step={1} onValueChange={(i) => setRoi(i[0])}/>
                    </div>
                  </div>
                </div>
                <div>
                <div className="flex flex-col">
                  <div className="flex flex-row mb-4">
                    <Label className="basis-1/2">Time Period</Label>
                    <Input className="basis-1/2" value={timePeriod} onChange={(w)=>setTimePeriod(Number(w.target.value))} />
                  </div>
                  <div className="mb-4">
                      <Slider defaultValue={[timePeriod]} value={[timePeriod]} max={25} step={1} onValueChange={(i) => setTimePeriod(i[0])}/>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <Label>Invested Amount: {totalInvestment}</Label>
                </div>
                <div className="mb-4">
                  <Label>Gained Interest: {gainedInterest}</Label>
                </div>
                <div className="mb-4">
                  <Label>Total Value: {totalValue}</Label>
                </div>
              </div>
            </div>
            <div className="grow">
              <PieChartComponent propData={[{label:'totalInvestment', count:totalInvestment, fill: "red"},{label:'gainedInterest', count:gainedInterest, fill: "green"}]}/>
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

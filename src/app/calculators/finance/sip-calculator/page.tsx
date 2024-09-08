"use client";

import { PieChartComponent } from "@/components/custom/pie-chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import React from "react";

export default function SipCalculator() {
  const [totalInvestment, setTotalInvestment] = React.useState(5000);
  const [roi, setRoi] = React.useState(12);
  const [timePeriod, setTimePeriod] = React.useState(5);
  const [sipSwitch, setSipSwitch] = React.useState("sip");
//   const gainedInterest = (totalInvestment * roi * timePeriod) / 100;
//   const totalValue = totalInvestment + gainedInterest;
  const totalValue =  sipSwitch=='sip'?Math.round(totalInvestment * ((Math.pow((1+(roi/(12*100))),(timePeriod*12)) -1)/(roi/(12*100))) * (1+(roi/(12*100)))):Math.round(totalInvestment * Math.pow((1+ (roi/100)),timePeriod))
  const totalInvestment1 = sipSwitch=='sip'?totalInvestment*timePeriod*12:totalInvestment
  const gainedInterest = totalValue - totalInvestment1
  return (
    <main>
      <Card className="p-2 m-2">
        <CardHeader className="items-center">
          <CardTitle>
            SIP Calculator{" "}
            <ToggleGroup
              type="single"
              value={sipSwitch}
              onValueChange={(w) => setSipSwitch(w)}
            >
              <ToggleGroupItem value="sip">SIP</ToggleGroupItem>
              <ToggleGroupItem value="lumpsum">Lumpsum</ToggleGroupItem>
            </ToggleGroup>
          </CardTitle>
          <CardDescription>
            Calculating the maturity amount of an SIP can be a complicated and
            time-consuming process. An online SIP calculator enables one to
            figure it without breaking a sweat.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap flex-row">
            <div className="grow m-2">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <div className="flex flex-row mb-4">
                    <Label className="basis-1/2">{sipSwitch=='sip'?'SIP Amount':'Total Investment'}</Label>
                    <Input
                      className="basis-1/2"
                      value={totalInvestment}
                      onChange={(w) =>
                        setTotalInvestment(Number(w.target.value))
                      }
                    />
                  </div>
                  <div className="mb-4">
                    <Slider
                      defaultValue={[totalInvestment]}
                      value={[totalInvestment]}
                      max={10000000}
                      step={10000}
                      onValueChange={(i) => setTotalInvestment(i[0])}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col">
                    <div className="flex flex-row mb-4">
                      <Label className="basis-1/2">Expected rate of Interest(p.a)</Label>
                      <Input
                        className="basis-1/2"
                        value={roi}
                        onChange={(w) => setRoi(Number(w.target.value))}
                      />
                    </div>
                    <div className="mb-4">
                      <Slider
                        defaultValue={[roi]}
                        value={[roi]}
                        max={20}
                        min={12}
                        step={0.1}
                        onValueChange={(i) => setRoi(i[0])}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col">
                    <div className="flex flex-row mb-4">
                      <Label className="basis-1/2">Time Period (in Years)</Label>
                      <Input
                        className="basis-1/2"
                        value={timePeriod}
                        onChange={(w) => setTimePeriod(Number(w.target.value))}
                      />
                    </div>
                    <div className="mb-4">
                      <Slider
                        defaultValue={[timePeriod]}
                        value={[timePeriod]}
                        max={50}
                        step={1}
                        onValueChange={(i) => setTimePeriod(i[0])}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <Label>Invested Amount: {totalInvestment1}</Label>
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
              <PieChartComponent
                propData={[
                  {
                    label: "Total Investment",
                    count: totalInvestment1,
                    fill: "red",
                  },
                  {
                    label: "Gained Interest",
                    count: gainedInterest,
                    fill: "green",
                  },
                ]}
              />
            </div>
          </div>
        </CardContent>
        {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>
    </main>
  );
}

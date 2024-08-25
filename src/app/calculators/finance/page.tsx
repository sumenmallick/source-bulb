import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
const parentDir = "finance";
const financeCalculators: { name: string; desc: string; link: string }[] = [
  {
    name: "FD",
    desc: "Use FD calculator to calcute fixed deposite gains",
    link: parentDir+"/fd-calculator",
  },
  {
    name: "SIP",
    desc: "Calculate how much you will accumulate with you SIP",
    link: parentDir+"/sip-calculator",
  },
  {
    name: "Lumpsum",
    desc: "Calculate return on your lumpsum amount",
    link: parentDir+"/lumpsum-calculator",
  },
  {
    name: "Step up SIP",
    desc: "Use returns on incremental SIP",
    link: parentDir+"/stepup-calculator",
  },
  {
    name: "FD Calculator",
    desc: "Use FD calculator to calcute fixed deposite gains",
    link: parentDir+"/fd-calculator",
  },
];
export default function finance() {
  return (
    <div className="flex flex-wrap">
      {financeCalculators.map((item, i) => (
        <Card key={i} className="p-2 m-2">
            <Link href={item.link}>
          <CardHeader>
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>{item.desc}</CardDescription>
          </CardHeader>
          </Link>
        </Card>
        
      ))}
    </div>
  );
}

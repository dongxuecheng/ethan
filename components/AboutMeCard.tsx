


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function AboutMeCard() {
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>Front-end</CardTitle>
        <CardDescription>前端技术栈</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>HTML5</p>
        <p>CSS3</p>
        <p>JavaScript</p>
        <p>Next.js</p>
        <p>TailWind.css</p>
        <p>Shadcn/ui</p>
      </CardContent>
    </Card>
    
  )
}

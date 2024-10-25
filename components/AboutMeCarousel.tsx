import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Separator } from "@/components/ui/separator"




export function AboutMeCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-[300px]"
    >
      <CarouselContent>
          <CarouselItem>
              <Card>
              <CardHeader>
              <CardTitle>Front-end</CardTitle>
              <CardDescription>前端技术栈</CardDescription>
              </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid grid-cols-[1fr_auto_1fr] gap-4">
                    <ul className="space-y-2">
                      <li className="text-sm text-muted-foreground">基础</li>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>JavaScript</li>
                    </ul>
                    <Separator orientation="vertical" />
                    <ul className="space-y-2">
                      <li className="text-sm text-muted-foreground">框架</li>
                      <li>Next.js</li>
                      <li>TailWind css</li>
                      <li>Shadcn/ui</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
          </CarouselItem>
          <CarouselItem>
              <Card>
              <CardHeader>
              <CardTitle>Back-end</CardTitle>
              <CardDescription>后端技术栈</CardDescription>
              </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid grid-cols-[1fr_auto_1fr] gap-4">
                    <ul className="space-y-2">
                      <li className="text-sm text-muted-foreground">基础</li>
                      <li>Python</li>
                      <li>Java</li>
                      <li>C++</li>
                    </ul>
                    <Separator orientation="vertical" />
                    <ul className="space-y-2">
                      <li className="text-sm text-muted-foreground">框架</li>
                      <li>FastAPI</li>
                      <li>Flask</li>
                      <li>Spring</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
          </CarouselItem>
          <CarouselItem>
              <Card>
              <CardHeader>
              <CardTitle>Computer Vison</CardTitle>
              <CardDescription>图像技术栈</CardDescription>
              </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid grid-cols-[1fr_auto_1fr] gap-4">
                    <ul className="space-y-2">
                      <li className="text-sm text-muted-foreground">基础</li>
                      <li>CNN</li>
                      <li>Transformer</li>
                      <li>Python</li>
                    </ul>
                    <Separator orientation="vertical" />
                    <ul className="space-y-2">
                      <li className="text-sm text-muted-foreground">目标检测</li>
                      <li>YOLO</li>
                      <li>Ultralytics</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
          </CarouselItem>
          <CarouselItem>
              <Card>
              <CardHeader>
              <CardTitle>Development Tools</CardTitle>
              <CardDescription>开发工具</CardDescription>
              </CardHeader>
                <CardContent className="space-y-2">
                    <ul className="space-y-2">
                      <li>VS Code</li>
                      <li>Github</li>
                      <li>ChatGPT</li>
                      <li>Cloudflare</li>
                    </ul>
                </CardContent>
              </Card>
          </CarouselItem>
          <CarouselItem>
              <Card>
              <CardHeader>
              <CardTitle>Hobbies</CardTitle>
              <CardDescription>Things that keep me going</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                  <div className="grid grid-cols-[1fr_auto_1fr] gap-4">
                  <ul className="space-y-2">
                  
                    <li>🎬 Movie</li>

                    <li>🎮 Game</li>
                    <li>🎵 Music</li>
                      
                    </ul>
                    <Separator orientation="vertical" />
                    <ul className="space-y-2">
                    <li>🎹 pinao</li>
                    <li>🎸 guitar</li>
                    </ul>
                  </div>
                </CardContent>
                <CardContent className="space-y-2">

                </CardContent>
              </Card>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"


import { Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent, } from "@/components/ui/card"

import Link from "next/link"

export default function Slot({
    name,
    host,
    id
}:
{
    name: string,
    host: string,
    id: number
}) {
    return (
        <Card className="max-w-sm overflow-hidden p-0 font-mono">
        {/* Image at the top */}
        <div className="invert h-70 w-full overflow-hidden bg-muted">
        </div>
  
        {/* Vertical stacked content */}
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>Host: {host}</CardDescription>
        </CardHeader>
  
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This is the main body text for the vertical card layout.
          </p>
        </CardContent>
  
        <CardFooter className="flex justify-between">
          <CardAction className="flex justify-between items-center w-full p-0">
            <div className="flex items-center justify-between w-full rounded-lg">
                <Link
                href={`/match/${id}`}
                >
                    <Button className={"w-32 h-12 text-lg"}>Open</Button>
                </Link>
                
                <Button className="h-12 w-12 color bg-red-700 hover:bg-red-400">
                    <Trash className="size-large"/>
                </Button>
            </div>
            
          </CardAction>
        </CardFooter>
      </Card>
    )
}
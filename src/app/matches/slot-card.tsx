import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

import { Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent, } from "@/components/ui/card"

import { cn } from "cn"

export default function Slot({
    name,
    host,
}:
{
    name: string,
    host: string
}) {
    return (
        <Card className="max-w-sm overflow-hidden p-0">
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
          <CardAction>
            <Button className={"w-30 h-12 text-lg"}>Open</Button>
          </CardAction>
        </CardFooter>
      </Card>
    )
}

import { Button} from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import SlotCard from "../matches/slot-card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
export default function Index() {
    
    return (
        <div>
             <ScrollArea className="w-full min-h-screen flex items-center" >
                <div className="flex flex-nowraps w-max gap-10 p-40">
                    <SlotCard name="Pretziland WI" host="Owen" id={0}></SlotCard>

                    <ScrollBar orientation="horizontal"/>
                </div>
            
            </ScrollArea>
        </div>
       

        
    )
}
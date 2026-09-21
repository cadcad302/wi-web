
import { Button} from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import Page from "../matches/slot-card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
export default function Index() {
    
    return (
        <ScrollArea className="w-full min-h-screen flex items-center" >
            <div className="flex flex-nowraps w-max gap-4 p-4">
                <Page name="Pretziland WI" host="Owen"></Page>
                <Page name="Pretziland WI" host="Owen"></Page>
                <Page name="Pretziland WI" host="Owen"></Page>
                <Page name="Pretziland WI" host="Owen"></Page>
                <Page name="Pretziland WI" host="Owen"></Page>
                <Page name="Pretziland WI" host="Owen"></Page>
                <Page name="Pretziland WI" host="Owen"></Page>
                
            </div>
            <ScrollBar orientation="horizontal"/>
        </ScrollArea>

        
    )
}
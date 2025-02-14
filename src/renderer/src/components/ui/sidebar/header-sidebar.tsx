import { Grape } from "lucide-react";
import { SidebarHeader, useSidebar } from "../sidebar";

export function HeaderSidebar() {
    const { open } = useSidebar()
    return(
        <SidebarHeader className='flex flex-row justify-center items-center mt-5'>
            <Grape className=" text-primary " />
            {open && <span className="text-xl font-bold text-card-foreground">GrapeX Lab</span>}
        </SidebarHeader>
    )
}
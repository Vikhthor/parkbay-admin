"use client"

import { Button } from "@/components/ui//button"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ReservationsDataGrid } from "./reservation_list"
import { ReservationGantt } from "./reservation_gantt"
import { ReservationKanban } from "./reservation_kanban"
import { IconPlus } from "@tabler/icons-react"

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader 
            pageTitle="Reservations" 
        >
          {/* <Button 
            variant="outline" 
            size="sm" 
            className="hidden sm:flex"
            render={(<a href="/resources/facilities?new=1"/>)}
          >
              <IconPlus />
              New Reservation
          </Button> */}
        </SiteHeader>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <EmployeeTabs/>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export function EmployeeTabs() {
  return (
    <Tabs
      defaultValue="list"
      className="w-full flex-col justify-start gap-6 my-2"
    >
        <div className="items-center justify-between lg:px-6">
            {/* <Label htmlFor="view-selector" className="sr-only">
                View
            </Label>
            <Select defaultValue="list">
                <SelectTrigger
                    className="flex w-fit @4xl/main:hidden"
                    size="sm"
                    id="view-selector"
                >
                    <SelectValue placeholder="Select a view" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="list">Reservations</SelectItem>
                    <SelectItem value="kanban">Kanban</SelectItem>
                    <SelectItem value="gantt">Gantt</SelectItem>
                </SelectContent>
            </Select> */}
            {/* <TabsList className="hidden **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:bg-muted-foreground/30 **:data-[slot=badge]:px-1 @4xl/main:flex"> */}
            <TabsList className="**:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:bg-muted-foreground/30 **:data-[slot=badge]:px-1">
                <TabsTrigger value="list">Reservations</TabsTrigger>
                <TabsTrigger value="kanban">Kanban</TabsTrigger>
                <TabsTrigger value="gantt">Gantt</TabsTrigger>
            </TabsList>
            <TabsContent
                value="list"
                className="relative flex flex-col gap-4 overflow-auto my-10"
            >
              <ReservationsDataGrid/>
            </TabsContent>
            <TabsContent value="kanban" className="relative flex flex-col gap-4 overflow-auto my-10">
                <ReservationKanban/>
            </TabsContent>
            <TabsContent
                value="gantt"
                className="relative flex flex-col gap-4 overflow-auto my-10"
            >
                <ReservationGantt/>
            </TabsContent>
        </div>
    </Tabs>
  )
}
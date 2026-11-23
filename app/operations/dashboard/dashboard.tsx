"use client"

import { Button } from "@/components/ui//button"
import { AppSidebar } from "@/components/app-sidebar"
// import { ChartAreaInteractive } from "@/components/chart-area-interactive"
// import { DataTable } from "@/components/data-table"
// import { MapAreaInteractive } from "./map-area"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { IconPlus } from "@tabler/icons-react"
import { SquareLetterPIcon } from "lucide-react"
import { ParkingLevels } from "./parking-levels"
import { Reservations } from "./reservations"

export default function Dashboard() {
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
            pageTitle="Dashboard" 
        >
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden sm:flex"
            render={(<a href="/resources/facilities?new=1"/>)}
          >
              <IconPlus />
              New Reservation
          </Button>
        </SiteHeader>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <div className="px-6">
                    <div className="flex gap-2">
                        <SquareLetterPIcon/>
                        <h1 className="text-base font-medium">Parking Sessions</h1>
                    </div>
                    <p className="text-muted-foreground">64 of 108 spots occupied across 3 levels · ₦1,829 today</p>
                </div>
              <SectionCards />
              <ParkingLevels/>
              <Reservations/>
              {/* <div className="px-4 lg:px-6">
                <MapAreaInteractive/>
              </div> */}
              {/* <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable /> */}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

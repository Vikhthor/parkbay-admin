"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { CalendarHeatmap } from "./heatmap"
import { ReservationsChartArea } from "./reservations-chart"
import { RevenueCalendar } from "./revenue-calendar"
import { RevenueCards } from "./revenue-cards"

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
            pageTitle="Revenue" 
        >
        </SiteHeader>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 px-6 md:gap-6 md:py-6">
                <CalendarHeatmap/>
                <RevenueCards/>
                <div className="flex flex-col grid lg:grid-cols-2 xl:grid-cols-3 gap-2">
                  <div className="sm:col-span-1 xl:col-span-2">
                    <ReservationsChartArea/>
                  </div>
                  <div className="xl:col-span-1">
                    <RevenueCalendar/>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
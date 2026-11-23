"use client"

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
import ParkLayout from "./park-layout"
import { UsersDataGrid } from "./users"
import { ParkSettings } from "./settings-form"

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
            pageTitle="Park Settings" 
        >
        </SiteHeader>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <SettingsTabs/>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export function SettingsTabs() {
  return (
    <Tabs
      defaultValue="profile"
      className="w-full flex-col justify-start gap-6 my-2"
    >
        <div className="items-center justify-between px-4 lg:px-6">
            {/* <Label htmlFor="view-selector" className="sr-only">
                View
            </Label>
            <Select defaultValue="profile">
                <SelectTrigger
                    className="flex w-fit @4xl/main:hidden"
                    size="sm"
                    id="view-selector"
                >
                    <SelectValue placeholder="Select a view" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="profile">Profile</SelectItem>
                    <SelectItem value="users">Users</SelectItem>
                    <SelectItem value="roles">Roles</SelectItem>
                    <SelectItem value="sla">SLA</SelectItem>
                </SelectContent>
            </Select> */}
            {/* <TabsList className="hidden **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:bg-muted-foreground/30 **:data-[slot=badge]:px-1 @4xl/main:flex"> */}
            <TabsList className="**:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:bg-muted-foreground/30 **:data-[slot=badge]:px-1">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                {/* <TabsTrigger value="departments">Departments</TabsTrigger> */}
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="layout">Layout</TabsTrigger>
            </TabsList>
            <TabsContent
                value="profile"
                className="relative flex flex-col gap-4 overflow-auto my-10"
            >
              <ParkSettings/>
            </TabsContent>
            <TabsContent value="users" className="relative flex flex-col gap-4 overflow-auto my-10">
                <UsersDataGrid/>
            </TabsContent>
            <TabsContent
                value="layout"
                className="relative flex flex-col gap-4 overflow-auto my-10"
            >
                <ParkLayout/>
            </TabsContent>
        </div>
    </Tabs>
  )
}
"use client"

import * as React from "react"
import {
  AudioWaveform,
  WrenchIcon,
  ToolboxIcon,
  WalletIcon,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  ChartNoAxesColumnIcon,
  Settings2,
  IdCardLanyardIcon,
  MonitorCheckIcon,
  SquareTerminal,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { ParkSwitcher } from "@/components/park-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"
import { SettingsIcon } from 'lucide-react'
import { ThemeProvider, useTheme } from "next-themes"
import { useSessionStorage } from "@/hooks/use-storage"

const data = {
  navMain: [
    {
      title: "Operations",
      url: "/dashboard",
      icon: MonitorCheckIcon,
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "/operations/dashboard",
        },
        {
          title: "Reservations",
          url: "/operations/reservation",
        },
      ],
    },
    {
      title: "Wallet",
      url: "/wallet/transactions",
      icon: WalletIcon,
      items: [
        {
          title: "Transactions",
          url: "/wallet/transactions",
        },
        {
          title: "Settings",
          url: "/wallet/settings",
        },
      ],
    },
    {
      title: "Analytics",
      url: "/analytics/reports",
      icon: ChartNoAxesColumnIcon,
      items: [
        {
          title: "Reports",
          url: "/analytics/reports",
        },
        {
          title: "Revenue",
          url: "/analytics/revenue",
        },
        {
          title: "Reviews",
          url: "/analytics/reviews",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings/park",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Park",
          url: "/settings/park",
        },
      ],
    },
  ],
  // operations: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
  // resources: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
  // maintenance: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
  // analytics: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
  // settings: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
}

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  userType?: "system" | "technician" | "customer"
}

export function AppSidebar({ userType = "system", ...props }: AppSidebarProps) {
  const { resolvedTheme, setTheme } = useTheme()
  // const [ sessionUser, setSessionUser ] = useSessionStorage("session-user", {})
  // const [ userOrganizations, setUserOrganizations ] = useSessionStorage("user-organizations", [])

  const switchTheme = (darkMode: boolean)=>{
    if(darkMode && resolvedTheme != "dark"){
      setTheme("dark")
    }
    if(!darkMode && resolvedTheme != "light"){
      setTheme("light")
    }
  }

  let navData = data.navMain

  // const teams = userOrganizations.map((org: Record<string, string>) => {
  //   return {
  //     name: org.organization_name,
  //     logo: GalleryVerticalEnd,
  //     plan: org.subscription_plan || "Enterprise",
  //   }
  // })

  const teams = [{
    name: "Lagos City Park",
    logo: GalleryVerticalEnd
  }]

  const sessionUser = {
    id: "test_user",
    full_name: "John Doe",
    email: "jd@example.com",
    image: ""
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <ParkSwitcher teams={teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navData} />
        {/* <NavOperations items={data.operations} />
        <NavResources items={data.resources} />
        <NavMaintenance items={data.maintenance} />
        <NavAnalytics items={data.analytics} />
        <NavSettings items={data.settings} /> */}
      </SidebarContent>
      <SidebarFooter>
        <div className="top-0 right-0 left-0 flex flex-wrap gap-3 p-6">
          <div className="flex flex-col flex-2">
            {sessionUser.id && (
              <NavUser user={sessionUser} />
            )}
          </div>
          <span className="text-right">
            <Popover>
              <PopoverTrigger render={<Button variant="outline" size="icon" />}>
                <SettingsIcon  aria-hidden="true" />
              </PopoverTrigger>
              <PopoverContent className="w-72 gap-0 p-0" align="end">
                <div className="border-b p-3">
                  <h4 className="m-0 font-medium">Quick Settings</h4>
                  <p className="text-muted-foreground">Adjust your preferences.</p>
                </div>
                <div className="space-y-3 p-3 pb-4">
                  <div className="flex items-center justify-between">
                    <label htmlFor="qs-dark">Dark Mode</label>
                    <Switch id="qs-dark" defaultChecked={resolvedTheme==="dark"} onCheckedChange={(checked)=>switchTheme(checked)}/>
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="qs-notif">Notifications</label>
                    <Switch id="qs-notif" defaultChecked />
                  </div>
                  {/* <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label>Volume</label>
                      <span className="text-muted-foreground">{volume[0]}%</span>
                    </div>
                    <Slider
                      value={volume}
                      onValueChange={(v) => setVolume(v as number[])}
                      max={100}
                      step={1}
                    />
                  </div> */}
                </div>
              </PopoverContent>
            </Popover>
          </span>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

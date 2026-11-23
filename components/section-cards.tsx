"use client"

import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"
import { useState, useCallback, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { 
  Progress,
  ProgressLabel,
  ProgressValue
} from "@/components/ui/progress"
import { 
  CarIcon,
  EvChargerIcon,
  TriangleExclamationPointIcon,
  ReceiptIcon
} from "lucide-react"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import { useOrganization } from "@/hooks/use-organization"
// import request from "@/lib/requests"
import { useSessionStorage } from "@/hooks/use-storage"

type StatData = {
  type: string
  result: number
  rate: number
  rate_description: string
  rate_remark: string
}

export function OccupancyTrend(){
  return (
    <svg width="92" height="36" viewBox="0 0 92 36" className="shrink-0 overflow-visible">
      <defs>
        <linearGradient id="_r_1q_" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="currentColor" stop-opacity="0.35"></stop>
          <stop offset="100%" stop-color="currentColor" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
      <path d="M0.0,33.0 L18.4,32.1 L36.8,30.7 L55.2,9.6 L73.6,3.0 L92.0,3.0 L92,36 L0,36 Z" fill="url(#_r_1q_)"></path>
      <path d="M0.0,33.0 L18.4,32.1 L36.8,30.7 L55.2,9.6 L73.6,3.0 L92.0,3.0" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
      <circle cx="92" cy="3" r="2.25" fill="currentColor"></circle>
    </svg>
  )
}

export function EVBatteryLevel(){
  return (
    <svg 
      width="68" 
      height="40" 
      viewBox="0 0 68 40" 
      className="shrink-0 overflow-visible"
    >
      <path d="M 3 34 A 31 31 0 0 1 65 34" fill="none" stroke="currentColor" stroke-opacity="0.15" stroke-width="6" stroke-linecap="round"></path>
      <path d="M 3 34 A 31 31 0 0 1 65 34" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-dasharray="39.90259002372036 97.38937226128358"></path>
      <text x="34" y="36" text-anchor="middle" className="fill-current text-[11px] font-semibold">
        41%
      </text>
    </svg>
  )
}

export function RevenueTrends(){
  return (
    <svg width="92" height="36" viewBox="0 0 92 36" className="shrink-0 overflow-visible">
      <defs>
        <linearGradient id="_r_1r_" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="currentColor" stop-opacity="0.35"></stop>
          <stop offset="100%" stop-color="currentColor" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
      <path d="M0,33 L15.333333333333334,33 L15.333333333333334,32.16347731000547 L30.666666666666668,32.16347731000547 L30.666666666666668,31.35975943138327 L46,31.35975943138327 L46,7.789502460360854 L61.333333333333336,7.789502460360854 L61.333333333333336,3 L76.66666666666667,3 L76.66666666666667,3 L92,3 L92,36 L0,36 Z" fill="url(#_r_1r_)"></path>
      <path d="M0,33 L15.333333333333334,33 L15.333333333333334,32.16347731000547 L30.666666666666668,32.16347731000547 L30.666666666666668,31.35975943138327 L46,31.35975943138327 L46,7.789502460360854 L61.333333333333336,7.789502460360854 L61.333333333333336,3 L76.66666666666667,3 L76.66666666666667,3 L92,3" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
      <circle cx="7.666666666666667" cy="33" r="1.75" fill="currentColor"></circle><circle cx="23" cy="32.16347731000547" r="1.75" fill="currentColor"></circle>
      <circle cx="38.333333333333336" cy="31.35975943138327" r="1.75" fill="currentColor"></circle>
      <circle cx="53.666666666666664" cy="7.789502460360854" r="1.75" fill="currentColor"></circle>
      <circle cx="69" cy="3" r="1.75" fill="currentColor"></circle>
      <circle cx="84.33333333333334" cy="3" r="1.75" fill="currentColor"></circle>
    </svg>
  )
}

export function SectionCards({ 
    userType = "system"
}:{
    userType?: "system" | "technician" | "customer"
}) {
  const [isLoading, setIsLoading] = useState(false)
  const [dashboardData, setDashboardData] = useState<StatData[]>([
    {
      type: "capacity",
      result: 108,
      rate: 64,
      rate_description: "Occupied slots",
      rate_remark: "40 slots still vacant"
    },
    {
      type: "charging-slots",
      result: 18,
      rate: 41,
      rate_description: "Energy consumption",
      rate_remark: "295.0 kWh delivered"
    },
    {
      type: "overstayed",
      result: 9,
      rate: 14,
      rate_description: "Share of occupied slots",
      rate_remark: "Avg 95m past expected exit"
    },
    {
      type: "revenue-today",
      result: 1829,
      rate: 41,
      rate_description: "Collected",
      rate_remark: "$1,074 pending or failed"
    },
  ])
  // const [organizationData, getResource] = useOrganization("", userType)

  let authKey = "auth-token"
  if(userType == "technician"){
    authKey = "technician-auth-token"
  } else if(userType == "customer"){
    authKey = "customer-auth-token"
  }
  const [ authToken, setAuthToken ] = useSessionStorage(authKey, "")
  
  // const getDashboardStats = useCallback(() => {
  //   setIsLoading(true)
  //   const params = {
  //     organization_id: organizationData.id
  //   }
  //   const headers = {"Authorization": `Bearer ${authToken}`}
  //   request.get('/v1/analytics/dashboard-stats', params, headers).then((resp)=>{
  //     setIsLoading(false)
  //     setDashboardData(resp || [])
  //   }).catch((err)=>{})
  // }, []);

  // useEffect(()=>{
  //   getDashboardStats()
  // }, [])

  const defaultStatData = {
    "type": "N/A",
    "result": 0,
    "rate": 0,
    'rate_description': "N/A",
    'rate_remark': "N/A"
  }

  let occupancyStat: StatData = defaultStatData
  let evChargingStat: StatData = defaultStatData
  let overstayStat: StatData = defaultStatData
  let currrentRevenueStat: StatData = defaultStatData

  dashboardData.map((stat)=>{
    if(stat.type === "capacity"){
      occupancyStat = stat
    }
    if(stat.type === "charging-slots"){
      evChargingStat = stat
    }
    if(stat.type === "overstayed"){
      overstayStat = stat
    }
    if(stat.type === "revenue-today"){
      currrentRevenueStat = stat
    }
  })
  
  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      {userType === "system" && (
        <>
          <Card className="@container/card">
              <CardHeader>
              <CardDescription className="flex gap-2">
                <CarIcon size={20}/>
                Occupancy
              </CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  {occupancyStat.rate}/{occupancyStat.result}
              </CardTitle>
              <CardAction>
                <OccupancyTrend/>
              </CardAction>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="mx-auto w-full max-w-xs space-y-2">
                <Progress value={59} className="**:data-[slot=progress-track]:h-1">
                  <ProgressLabel>{occupancyStat.rate_description}</ProgressLabel>
                  <ProgressValue />
                </Progress>
                <div className="text-muted-foreground text-xs">
                  {occupancyStat.rate_remark}
                </div>
              </div>
              </CardFooter>
          </Card>

          <Card className="@container/card">
              <CardHeader>
              <CardDescription className="flex gap-2">
                <EvChargerIcon size={20}/>
                EV Charging
              </CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  {evChargingStat.result} active
              </CardTitle>
              <CardAction>
                <EVBatteryLevel/>
              </CardAction>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="mx-auto w-full max-w-xs space-y-2">
                <Progress value={evChargingStat.rate} className="**:data-[slot=progress-track]:h-1">
                  <ProgressLabel>{evChargingStat.rate_description}</ProgressLabel>
                  <ProgressValue />
                </Progress>
                <div className="text-muted-foreground text-xs">
                  {evChargingStat.rate_remark}
                </div>
              </div>
              </CardFooter>
          </Card>
        </>
      )}

      <Card className="@container/card">
          <CardHeader>
          <CardDescription className="flex gap-2 text-destructive">
            <TriangleExclamationPointIcon size={20}/>
            Overstayed
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {overstayStat.result}
          </CardTitle>
          <CardAction className="text-destructive">
            <div className="flex flex-col items-end leading-tight">
              <span className="text-sm font-semibold tabular-nums">
                ₦641
              </span>
              <span className="text-[10px] font-normal whitespace-nowrap opacity-70">
                est. penalty
              </span>
            </div>
          </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="mx-auto w-full max-w-xs space-y-2">
            <Progress value={overstayStat.rate} className="**:data-[slot=progress-track]:h-1">
              <ProgressLabel>{overstayStat.rate_description}</ProgressLabel>
              <ProgressValue />
            </Progress>
            <div className="text-muted-foreground text-xs">
              {overstayStat.rate_remark}
            </div>
          </div>
          </CardFooter>
      </Card>

      <Card className="@container/card">
          <CardHeader>
          <CardDescription className="flex gap-2">
            <ReceiptIcon size={20}/>
            Revenue Today
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              ₦{currrentRevenueStat.result}
          </CardTitle>
          <CardAction>
            <RevenueTrends/>
          </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="mx-auto w-full max-w-xs space-y-2">
            <Progress value={currrentRevenueStat.rate} className="**:data-[slot=progress-track]:h-1">
              <ProgressLabel>{currrentRevenueStat.rate_description}</ProgressLabel>
              <ProgressValue />
            </Progress>
            <div className="text-muted-foreground text-xs">
              {currrentRevenueStat.rate_remark}
            </div>
          </div>
          </CardFooter>
      </Card>
    </div>
  )
}

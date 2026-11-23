"use client"

import { useState } from "react"
import {
  addDays,
  addMinutes,
  differenceInMinutes,
  format,
  setHours,
  startOfDay,
  endOfDay,
  startOfWeek,
  startOfMonth,
  endOfMonth,
  endOfYear,
  startOfYear,
  addMonths
} from "date-fns"
import ReactECharts, {type EChartsOption} from "echarts-for-react";
import { useTheme } from "next-themes";

type HeatmapChartData = [string, number]

export function CalendarHeatmap() {
  const [isLoading, setIsLoading] = useState(false)
//   const [organizationData, getResource] = useOrganization()
  const [counts, setCounts] = useState<HeatmapChartData[]>()
  const [maxCount, setMaxCount] = useState(0)
  const { resolvedTheme, setTheme } = useTheme()

  const currentYear = new Date().getFullYear()

//   function buildEvents(start_date: Date, end_date: Date, attendance: Attendance[]): HeatmapChartData[] {
//     let dailyCount: Record<string, number> = {}
//     let currentDate = start_date
//     while (currentDate <= end_date){
//         const formattedDate = new Date(currentDate).toLocaleDateString('en-CA')
//         dailyCount[formattedDate] = 0
//         currentDate = addDays(currentDate, 1)
//     }

//     let maxAttendanceCount = 0
//     attendance.map((item)=>{
//         const formattedDate = new Date(item.attendance_date).toLocaleDateString('en-CA')
//         if(dailyCount[formattedDate]){
//             dailyCount[formattedDate] += 1
//         } else {
//             dailyCount[formattedDate] = 1
//         }
//         if(dailyCount[formattedDate] > maxAttendanceCount){
//             maxAttendanceCount = dailyCount[formattedDate]
//         }
//     })
//     const heatmapEvents: HeatmapChartData[] = Object.entries(dailyCount)
//     setMaxCount(maxAttendanceCount)
//     return heatmapEvents
//   }

//   const getAttendanceData = useCallback(() => {
//     const start_date = new Date(`${currentYear}-01-01`)
//     const end_date = new Date(`${currentYear + 1}-01-01`)
//     setIsLoading(true)
//     const params = {
//       from_date: start_date,
//       to_date: end_date,
//       status: "Present",
//       organization_id: organizationData.id
//     }
//     request.get('/v1/hr/attendance', params).then((resp)=>{
//       setCounts(buildEvents(start_date, end_date, resp))
//       setIsLoading(false)
//     }).catch((err)=>{})
//   }, []);

//     useEffect(()=>{
//         getAttendanceData()
//     }, [])

  const getVirtualData = (year: number) => {
    const date = new Date(`${year}-01-01`).getTime();
    const end = new Date(`${year + 1}-01-01`).getTime();
    const dayTime = 3600 * 24 * 1000;
    const data = [];
    for (let time = date; time < end; time += dayTime) {
      data.push([
        // echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
        new Date(time).toLocaleDateString('en-CA'),
        Math.floor(Math.random() * 10000)
      ]);
    }
    return data;
  }

  const option: EChartsOption = {
    title: {
      top: 30,
      left: 'center',
      text: `Daily Parking Reservation (${currentYear})`
    },
    tooltip: {
      z: 60,
      show: true,
      showContent: true,
      trigger: "item",
      triggerOn: "mousemove|click|mousewheel",
      alwaysShowContent: false,
      renderMode: "auto",
      confine: null,
      showDelay: 0,
      hideDelay: 100,
      transitionDuration: 0.4,
      displayTransition: true,
      enterable: false,
      backgroundColor: "#fff",
      shadowBlur: 10,
      shadowColor: "rgba(0, 0, 0, .2)",
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      borderRadius: 4,
      borderWidth: 1,
      defaultBorderColor: "#b7b9be",
      padding: null,
      extraCssText: "",
      axisPointer: {
        type: "line",
        axis: "auto",
        animation: "auto",
        animationDurationUpdate: 200,
        animationEasingUpdate: "exponentialOut",
        crossStyle: {
          color: "#9ea0a5",
          width: 1,
          type: "dashed",
          textStyle: {}
        }
      },
      textStyle: {
        color: "#6d6e73",
        fontSize: 14
      },
      formatter: (params: any) => {
        const [date, value] = params.value;
        const label = new Date(date).toLocaleDateString("en-US", {
          weekday: "long",
          month: "short",
          day: "numeric",
          year: "numeric",
        });
        return `
          <div style="font-weight:600">${label}</div>
          <div>${params.marker} Reservations: <b>${value}</b></div>
          <div>${params.marker} Estimated Revenue: <b>₦5000</b></div>
        `;
      },
    },
    visualMap: {
      min: 0,
      max: 10000, //maxCount,
      type: 'piecewise',
      orient: 'horizontal',
      left: 'center',
      top: 65,
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#cfd2d7",
      contentColor: "#fcad03",
      inactiveColor: "#cfd2d7"
    },
    calendar: {
      top: 120,
      left: 30,
      right: 30,
      cellSize: ['auto', 13],
      range: `${currentYear}`,
      itemStyle: {
        borderWidth: 0.5,
        // color: "#5070dd"
      },
      yearLabel: { show: false }
    },
    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: getVirtualData(currentYear),//counts,
      z: 2,
      geoIndex: 0,
      blurSize: 30,
      pointSize: 20,
      maxOpacity: 1,
      minOpacity: 0,
      select: {
        itemStyle: {borderColor: "#3c3c41"}
      }
    },
    color: [
      "#fcad03", "#b6d634", "#505372", "#ff994d", "#0ca8df", "#ffd10a", "#fb628b", "#785db0","#3fbe95"
    ],
    gradientColor: ["rgba(212,220,247,1)","#fcad03"],
    colorBy: "series"
  };
  return <ReactECharts option={option} style={{ height: 250 }} opts={{"renderer":"svg"}} theme={resolvedTheme} showLoading={isLoading}/>;
}
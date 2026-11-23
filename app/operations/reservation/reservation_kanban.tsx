"use client"

import { ComponentProps, useState } from "react"
import { Badge } from "@/components/reui/badge"
import {
  Frame,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"
import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnContent,
  KanbanItem,
  KanbanItemHandle,
  KanbanOverlay,
} from "@/components/reui/kanban"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  formatTimeValue,
  parseTimeValue,
  TimePicker,
} from "@/components/reui/time-picker"
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
  addMonths,
  addHours,
  addMilliseconds
} from "date-fns"
import { formatDateRange } from "little-date"
import { cn } from "cn"
import { Progress } from "@/components/ui/progress"
import { ArrowUpIcon } from 'lucide-react'

interface Feature {
  id: string
  title: string
  description: string
  progress: number
  start_time: string
  end_time: string
  assignee: string
  assigneeAvatar: string
}

const COLUMNS: Record<string, { title: string; color: string }> = {
  reserved: { title: "Reserved", color: "bg-blue-500" },
  active: { title: "Active", color: "bg-yellow-500" },
  completed: { title: "Completed", color: "bg-green-500" },
}

function ReservationCard({
  reservation,
  asHandle,
  ...props
}: { reservation: Feature; asHandle?: boolean } & Omit<
  ComponentProps<typeof KanbanItem>,
  "value" | "children"
>) {
  /* Minutes since midnight, both ways, through the picker's own value format. */
  function toMinutes(value: string) {
    const time = parseTimeValue(value)
    return time ? time.hour * 60 + time.minute : 0
  }

  function formatDuration(minutes: number) {
    const hours = Math.floor(minutes / 60)
    const rest = minutes % 60
    if (hours === 0) return `${rest} min`
    return rest === 0 ? `${hours} h` : `${hours} h ${rest} min`
  }

  const period = formatDateRange(new Date(reservation.start_time), new Date(reservation.end_time))
  const duration = formatDuration(differenceInMinutes(reservation.end_time, reservation.start_time))

  const content = (
    <Frame variant="ghost" spacing="sm" className="p-0">
      <FramePanel className="p-3">
        <div className="flex flex-col gap-2.5">
          <span className="text-sm font-medium">{reservation.title}</span>
          <p className="text-muted-foreground line-clamp-2 text-xs">
            {`${period} (${duration})`}
          </p>
          <Progress value={reservation.progress} className="h-1.5" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
                <Avatar className="size-5">
                <AvatarImage src={reservation.assigneeAvatar} alt={reservation.assignee} />
                <AvatarFallback className="text-[9px]">
                    {reservation.assignee.charAt(0)}
                </AvatarFallback>
                </Avatar>
                <span className="text-muted-foreground text-xs">
                {reservation.assignee}
                </span>
            </div>
            <span className="text-muted-foreground text-[10px] tabular-nums">
              {reservation.progress}% complete
            </span>
            {/* <div className="flex items-center gap-1">
              <ArrowUpIcon  className="text-muted-foreground size-3" />
              <span className="text-muted-foreground text-xs tabular-nums">
                {reservation.votes}
              </span>
            </div> */}
          </div>
        </div>
      </FramePanel>
    </Frame>
  )

  return (
    <KanbanItem value={reservation.id} {...props}>
      {asHandle ? <KanbanItemHandle>{content}</KanbanItemHandle> : content}
    </KanbanItem>
  )
}

export function ReservationKanban() {
  const [columns, setColumns] = useState<Record<string, Feature[]>>({
    reserved: [
      {
        id: "f1",
        title: "2HPV137",
        description: "Natural language search across all content",
        progress: 0,
        start_time: "2026-11-20T12:45:22",
        end_time: "2026-11-20T13:45:22",
        assignee: "Alex J.",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
      },
      {
        id: "f2",
        title: "2HPV138",
        description: "User-configurable webhook endpoints",
        progress: 0,
        start_time: "2026-11-20T12:45:22",
        end_time: "2026-11-20T13:45:22",
        assignee: "Sarah C.",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"
      },
    ],
    active: [
      {
        id: "f3",
        title: "LAGV137",
        description: "Multi-user editing with presence indicators",
        progress: 65,
        start_time: "2026-11-20T12:45:22",
        end_time: "2026-11-20T13:45:22",
        assignee: "David K.",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"
      },
      {
        id: "f4",
        title: "ABJV137",
        description: "RESTful API with OpenAPI 3.0 spec",
        progress: 40,
        start_time: "2026-11-20T12:45:22",
        end_time: "2026-11-20T13:45:22",
        assignee: "Emma W.",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"
      },
    ],
    completed: [
      {
        id: "f6",
        title: "PHCV137",
        description: "System-aware theme with manual override",
        progress: 100,
        start_time: "2026-11-20T12:45:22",
        end_time: "2026-11-20T13:45:22",
        assignee: "William C.",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"
      },
      {
        id: "f7",
        title: "IBDV137",
        description: "Bulk data export with custom fields",
        progress: 100,
        start_time: "2026-11-20T12:45:22",
        end_time: "2026-11-20T13:45:22",
        assignee: "Jane D.",
        assigneeAvatar:
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"
      },
    ],
  })

  return (
    <Kanban
      value={columns}
      onValueChange={setColumns}
      getItemValue={(item) => item.id}
    >
      <KanbanBoard className="grid grid-cols-3">
        {Object.entries(columns).map(([colId, reservations]) => {
          const col = COLUMNS[colId]
          return (
            <KanbanColumn key={colId} value={colId}>
              <Frame spacing="sm" className="h-full">
                <FrameHeader className="flex flex-row items-center gap-2">
                  <div className={cn("size-2 rounded-full", col.color)} />
                  <FrameTitle className="capitalize">{col.title}</FrameTitle>
                  <Badge variant="outline" size="sm" className="ml-auto">
                    {reservations.length}
                  </Badge>
                </FrameHeader>
                <KanbanColumnContent
                  value={colId}
                  className="flex flex-col gap-2 p-0.5"
                >
                  {reservations.map((reservation) => (
                    <ReservationCard key={reservation.id} reservation={reservation} asHandle />
                  ))}
                </KanbanColumnContent>
              </Frame>
            </KanbanColumn>
          )
        })}
      </KanbanBoard>
      <KanbanOverlay className="bg-muted/10 rounded-md border-2 border-dashed" />
    </Kanban>
  )
}

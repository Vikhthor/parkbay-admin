"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, CalendarDayButton } from "@/components/ui/calendar"

function getPriceForDate(date: Date) {
  const seed =
    date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate()

  const val = (seed * 9301 + 49297) % 233280

  // return Math.floor(50 + (val / 233280) * 200)
  return 40000
}

function formatCompact(value: number): string {
  if (!Number.isFinite(value)) return String(value);

  const abs = Math.abs(value);
  const sign = value < 0 ? "-" : "";

  // Fewer than 5 digits: regular thousands separators
  if (abs < 10_000) {
    return value.toLocaleString("en-US", { maximumFractionDigits: 2 });
  }

  const units: [number, string][] = [
    [1e12, "T"],
    [1e9, "B"],
    [1e6, "M"],
    [1e3, "k"],
  ];

  for (const [size, suffix] of units) {
    if (abs >= size) {
      // Truncate (not round) to 2 decimals using integer math to avoid float errors
      const truncated = Math.trunc((abs * 100) / size) / 100;
      return `${sign}${truncated}${suffix}`;
    }
  }

  return String(value); // unreachable, keeps TypeScript happy
}

export function RevenueCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Card className="@container/card">
        <CardContent>
            <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            showOutsideDays={false}
            className="[--cell-size:--spacing(12)]"
            components={{
                DayButton: ({ children, modifiers, day, ...props }) => {
                const price = getPriceForDate(day.date)
                const isGreen = price < 100

                return (
                    <CalendarDayButton day={day} modifiers={modifiers} {...props}>
                    {children}
                    {!modifiers.outside && (
                        <span
                        className={
                            isGreen ? "text-green-600 dark:text-green-400" : ""
                        }
                        >
                        ₦{formatCompact(price)}
                        </span>
                    )}
                    </CalendarDayButton>
                )
                },
            }}
            />
        </CardContent>
    </Card>
  )
}

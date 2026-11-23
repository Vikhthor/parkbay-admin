"use client"

import { useState } from "react"
import { 
  CarIcon,
  PlugIcon,
  CircleCheckIcon,
  RepeatIcon,
  Layers2Icon,
  SquareLetterPIcon
} from "lucide-react"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/reui/badge"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Slider } from "@/components/ui/slider"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { SparklesIcon } from 'lucide-react'


export function SlotPopover() {
  return (
    <div className="flex min-h-[100px] items-center justify-center">
      <Popover>
        <PopoverTrigger
          render={
            <Button variant="outline" className="h-auto justify-start py-1.5">
              <Avatar className="size-8">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=96&h=96&dpr=2&q=80"
                  alt="Marcus Chen"
                />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
              <div className="space-y-0.5 text-left">
                <p className="leading-none font-medium">Marcus Chen</p>
                <p className="text-muted-foreground">@mchen_design</p>
              </div>
            </Button>
          }
        />
        <PopoverContent className="w-64">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-start justify-between">
              <Avatar className="size-12">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=112&h=112&dpr=2&q=80"
                  alt="Marcus Chen"
                />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
              <Button size="sm" variant="outline">
                Follow
              </Button>
            </div>
            <div className="space-y-1">
              <h4 className="leading-none font-semibold">Marcus Chen</h4>
              <p className="text-muted-foreground">@mchen_design</p>
            </div>
            <p className="leading-relaxed">
              Product Designer specializing in design systems.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="font-semibold tabular-nums">1.2k</span>
                <span className="text-muted-foreground">Followers</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-semibold tabular-nums">482</span>
                <span className="text-muted-foreground">Following</span>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export function ParkLevel(){
    return (
        <div className="overflow-x-auto px-4 pb-4">
            <div className="flex flex-wrap gap-6">
                <div className="flex flex-col gap-1.5"><span className="text-xs font-medium text-sky-600 dark:text-sky-400">L1 · Bay 1</span>
                    <div className="flex gap-1">
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-muted-foreground/25 bg-muted/20 text-muted-foreground cursor-default"
                        id="base-ui-_r_od_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4 opacity-30" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>1A1</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/40 bg-primary/10 text-primary cursor-pointer hover:brightness-95"
                        id="base-ui-_r_of_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>1A2</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/40 bg-primary/10 text-primary cursor-pointer hover:brightness-95"
                        id="base-ui-_r_oh_" data-slot="hover-card-trigger">
                            <span className="absolute -top-1.5 -right-1.5 z-10 flex size-5 items-center justify-center rounded-full bg-emerald-600 text-white dark:bg-emerald-400 dark:text-emerald-950">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plug size-3" aria-hidden="true" lucide="PlugIcon" tabler="IconPlug" hugeicons="Plug01Icon" phosphor="PlugIcon" remixicon="RiPlug3Line">
                                <path d="M12 22v-5"></path>
                                <path d="M15 8V2"></path>
                                <path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z"></path>
                                <path d="M9 8V2"></path>
                                </svg> */}
                                <PlugIcon/>
                            </span>
                            {/* <svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                                </svg> */}
                            <CarIcon/>
                            <span>1A3</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-destructive/50 bg-destructive/10 text-destructive cursor-pointer hover:brightness-95"
                        id="base-ui-_r_oj_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>1A4</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/30 border-dashed bg-primary/5 text-primary/70 cursor-pointer hover:brightness-95"
                        id="base-ui-_r_ol_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>1A5</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-muted-foreground/25 bg-muted/20 text-muted-foreground cursor-default"
                        id="base-ui-_r_on_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4 opacity-30" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>1A6</span></button>
                    </div>
                    <div className="bg-muted/30 text-muted-foreground flex h-6 items-center justify-center gap-1 rounded border border-dashed text-[10px]">drive aisle</div>
                    <div className="flex gap-1">
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/40 bg-primary/10 text-primary cursor-pointer hover:brightness-95"
                        id="base-ui-_r_op_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>1B1</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/40 bg-primary/10 text-primary cursor-pointer hover:brightness-95"
                        id="base-ui-_r_or_" data-slot="hover-card-trigger">
                            <span className="absolute -top-1.5 -right-1.5 z-10 flex size-5 items-center justify-center rounded-full bg-emerald-600 text-white dark:bg-emerald-400 dark:text-emerald-950">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plug size-3" aria-hidden="true" lucide="PlugIcon" tabler="IconPlug" hugeicons="Plug01Icon" phosphor="PlugIcon" remixicon="RiPlug3Line">
                                <path d="M12 22v-5"></path>
                                <path d="M15 8V2"></path>
                                <path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z"></path>
                                <path d="M9 8V2"></path>
                                </svg> */}
                                <PlugIcon/>
                            </span>
                            {/* <svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                                </svg> */}
                            <CarIcon/>
                            <span>1B2</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/40 bg-primary/10 text-primary cursor-pointer hover:brightness-95"
                        id="base-ui-_r_ot_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>1B3</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/40 bg-primary/10 text-primary cursor-pointer hover:brightness-95"
                        id="base-ui-_r_ov_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>1B4</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/30 border-dashed bg-primary/5 text-primary/70 cursor-pointer hover:brightness-95"
                        id="base-ui-_r_p1_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>1B5</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-muted-foreground/25 bg-muted/20 text-muted-foreground cursor-default"
                        id="base-ui-_r_p3_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4 opacity-30" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>1B6</span></button>
                    </div>
                </div>
                <div className="flex flex-col gap-1.5"><span className="text-xs font-medium text-sky-600 dark:text-sky-400">L1 · Bay 2</span>
                    <div className="flex gap-1">
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-destructive/50 bg-destructive/10 text-destructive cursor-pointer hover:brightness-95"
                        id="base-ui-_r_p5_" data-slot="hover-card-trigger">
                            <span className="absolute -top-1.5 -right-1.5 z-10 flex size-5 items-center justify-center rounded-full bg-emerald-600 text-white dark:bg-emerald-400 dark:text-emerald-950">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plug size-3" aria-hidden="true" lucide="PlugIcon" tabler="IconPlug" hugeicons="Plug01Icon" phosphor="PlugIcon" remixicon="RiPlug3Line">
                                <path d="M12 22v-5"></path>
                                <path d="M15 8V2"></path>
                                <path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z"></path>
                                <path d="M9 8V2"></path>
                                </svg> */}
                                <PlugIcon/>
                            </span>
                            {/* <svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                                </svg> */}
                            <CarIcon/>
                            <span>2A1</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/40 bg-primary/10 text-primary cursor-pointer hover:brightness-95"
                        id="base-ui-_r_p7_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>2A2</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/40 bg-primary/10 text-primary cursor-pointer hover:brightness-95"
                        id="base-ui-_r_p9_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>2A3</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/40 bg-primary/10 text-primary cursor-pointer hover:brightness-95"
                        id="base-ui-_r_pb_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>2A4</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/30 border-dashed bg-primary/5 text-primary/70 cursor-pointer hover:brightness-95"
                        id="base-ui-_r_pd_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>2A5</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-muted-foreground/25 bg-muted/20 text-muted-foreground cursor-default"
                        id="base-ui-_r_pf_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4 opacity-30" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>2A6</span></button>
                    </div>
                    <div className="bg-muted/30 text-muted-foreground flex h-6 items-center justify-center gap-1 rounded border border-dashed text-[10px]">drive aisle</div>
                    <div className="flex gap-1">
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/40 bg-primary/10 text-primary cursor-pointer hover:brightness-95"
                        id="base-ui-_r_ph_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>2B1</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/40 bg-primary/10 text-primary cursor-pointer hover:brightness-95"
                        id="base-ui-_r_pj_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>2B2</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-destructive/50 bg-destructive/10 text-destructive cursor-pointer hover:brightness-95"
                        id="base-ui-_r_pl_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>2B3</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/40 bg-primary/10 text-primary cursor-pointer hover:brightness-95"
                        id="base-ui-_r_pn_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>2B4</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/30 border-dashed bg-primary/5 text-primary/70 cursor-pointer hover:brightness-95"
                        id="base-ui-_r_pp_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>2B5</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-muted-foreground/25 bg-muted/20 text-muted-foreground cursor-default"
                        id="base-ui-_r_pr_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4 opacity-30" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>2B6</span></button>
                    </div>
                </div>
                <div className="flex flex-col gap-1.5"><span className="text-xs font-medium text-sky-600 dark:text-sky-400">L1 · Bay 3</span>
                    <div className="flex gap-1">
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/40 bg-primary/10 text-primary cursor-pointer hover:brightness-95"
                        id="base-ui-_r_pt_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>3A1</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/40 bg-primary/10 text-primary cursor-pointer hover:brightness-95"
                        id="base-ui-_r_pv_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>3A2</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/40 bg-primary/10 text-primary cursor-pointer hover:brightness-95"
                        id="base-ui-_r_q1_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>3A3</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/40 bg-primary/10 text-primary cursor-pointer hover:brightness-95"
                        id="base-ui-_r_q3_" data-slot="hover-card-trigger">
                            <span className="absolute -top-1.5 -right-1.5 z-10 flex size-5 items-center justify-center rounded-full bg-emerald-600 text-white dark:bg-emerald-400 dark:text-emerald-950">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plug size-3" aria-hidden="true" lucide="PlugIcon" tabler="IconPlug" hugeicons="Plug01Icon" phosphor="PlugIcon" remixicon="RiPlug3Line">
                                <path d="M12 22v-5"></path>
                                <path d="M15 8V2"></path>
                                <path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z"></path>
                                <path d="M9 8V2"></path>
                                </svg> */}
                                <PlugIcon/>
                            </span>
                            {/* <svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                                </svg> */}
                            <CarIcon/>
                            <span>3A4</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-destructive/50 bg-destructive/10 text-destructive cursor-pointer hover:brightness-95"
                        id="base-ui-_r_q5_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>3A5</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-muted-foreground/25 bg-muted/20 text-muted-foreground cursor-default"
                        id="base-ui-_r_q7_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4 opacity-30" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>3A6</span></button>
                    </div>
                    <div className="bg-muted/30 text-muted-foreground flex h-6 items-center justify-center gap-1 rounded border border-dashed text-[10px]">drive aisle</div>
                    <div className="flex gap-1">
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/40 bg-primary/10 text-primary cursor-pointer hover:brightness-95"
                        id="base-ui-_r_q9_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>3B1</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/40 bg-primary/10 text-primary cursor-pointer hover:brightness-95"
                        id="base-ui-_r_qb_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>3B2</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/40 bg-primary/10 text-primary cursor-pointer hover:brightness-95"
                        id="base-ui-_r_qd_" data-slot="hover-card-trigger">
                            <span className="absolute -top-1.5 -right-1.5 z-10 flex size-5 items-center justify-center rounded-full bg-emerald-600 text-white dark:bg-emerald-400 dark:text-emerald-950">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plug size-3" aria-hidden="true" lucide="PlugIcon" tabler="IconPlug" hugeicons="Plug01Icon" phosphor="PlugIcon" remixicon="RiPlug3Line">
                                <path d="M12 22v-5"></path>
                                <path d="M15 8V2"></path>
                                <path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z"></path>
                                <path d="M9 8V2"></path>
                                </svg> */}
                                <PlugIcon/>
                            </span>
                            {/* <svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                                </svg> */}
                            <CarIcon/>
                            <span>3B3</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/40 bg-primary/10 text-primary cursor-pointer hover:brightness-95"
                        id="base-ui-_r_qf_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>3B4</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-primary/30 border-dashed bg-primary/5 text-primary/70 cursor-pointer hover:brightness-95"
                        id="base-ui-_r_qh_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car size-4" aria-hidden="true"
                            lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                <circle cx="7" cy="17" r="2"></circle>
                                <path d="M9 17h6"></path>
                                <circle cx="17" cy="17" r="2"></circle>
                            </svg> */}
                            <CarIcon/>
                            <span>3B5</span></button>
                        <button type="button" className="relative flex h-16 w-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border-2 text-[11px] font-medium transition-colors border-muted-foreground/20 bg-[repeating-linear-gradient(45deg,var(--color-muted)_0_6px,transparent_6px_12px)] text-muted-foreground/50 cursor-default"
                        id="base-ui-_r_qj_" data-slot="hover-card-trigger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ban size-4" aria-hidden="true"
                            lucide="BanIcon" tabler="IconBan" hugeicons="ShieldBanIcon" phosphor="ProhibitIcon" remixicon="RiProhibitedLine">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M4.929 4.929 19.07 19.071"></path>
                            </svg> */}
                            <CarIcon/>
                            <span>3B6</span></button>
                    </div>
                </div>
                <div className="w-4 shrink-0" aria-hidden="true"></div>
            </div>
        </div>
    )
}


export function SurgeSimulator() {
  const [value, setValue] = useState(0)

  return (
    <Popover>
        <PopoverTrigger
          render={
            <Button variant="outline" className="gap-2">
              <RepeatIcon />
              Surge simulator
            </Button>
          }
        />
        <PopoverContent
          className="w-80 gap-0 overflow-hidden p-0"
          align="center"
        >
          <div className="bg-primary/5 border-primary/10 border-b p-2">
            <div className="text-primary flex items-center gap-2 font-semibold">
              <SparklesIcon  className="size-4" />
              <span>Overflow reassignment simulator</span>
            </div>
          </div>
          <div className="space-y-3 p-2">
            <p className="text-muted-foreground leading-relaxed">
              Preview routing an incoming surge of vehicles across every level — nothing saves until you apply.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label>Incoming vehicles</label>
                <span className="text-muted-foreground">{value}%</span>
              </div>
              <Slider
                defaultValue={value}
                onValueChange={(value: number | readonly number[]) =>
                    setValue(value as number)
                }
                max={100}
                step={1}
              />
              </div>
              <Progress value={value} />
            <div className="grid grid-cols-2 items-center gap-2">
              <Button size="sm">Discard</Button>
              <Button size="sm" variant="outline">
                Apply
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
  )
}


export function ParkingLevels(){
    return (
        <div className="px-4 lg:px-6">
        <Card className="@container/card">
            <CardHeader>
                <CardTitle>
                    <div className="flex gap-2">
                        <Layers2Icon size={20}/>
                        Levels
                    </div>
                </CardTitle>
                {/* <CardDescription>
                <span className="hidden @[540px]/card:block">
                    Total for the last 3 months
                </span>
                <span className="@[540px]/card:hidden">Last 3 months</span>
                </CardDescription> */}
                <CardAction>
                    <SurgeSimulator/>
                </CardAction>
            </CardHeader>
            <CardContent className="">
                <ParkLevels/>
            </CardContent>
        </Card>
        </div>
    )
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronRightIcon } from 'lucide-react'

const items = [
  {
    value: "item-1",
    trigger: "Level 1",
    content:
      "Yes, you can use ReUI for any of your personal or commercial projects. The library is distributed under the MIT license.",
  },
  {
    value: "item-2",
    trigger: "Level 2",
    content:
      "We are currently working on a comprehensive Figma design system that will be released soon to all ReUI users.",
  },
  {
    value: "item-3",
    trigger: "Level 3",
    content:
      "You can contribute by reporting bugs, suggesting features, or submitting pull requests on our GitHub repository.",
  },
]

export function ParkLevels() {
  return (
    <div className="">
      <Accordion multiple={false} defaultValue={["item-1"]} className="border-0">
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger className="flex-row-reverse items-center justify-end gap-3 py-3 hover:no-underline *:data-[slot=accordion-trigger-icon]:hidden">
              <div className="flex w-full items-center justify-between pr-4">
                <div className="flex items-center justify-center gap-3">
                    <div className="flex gap-2">
                        <SquareLetterPIcon/>
                        <h1 className="text-base font-medium">{item.trigger}</h1>
                    </div>
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <Badge>15/36 available</Badge>
                    <Progress
                        value={39}
                        className="**:data-[slot=progress-track]:h-1"
                    />
                </div>
              </div>
              <ChevronRightIcon  className="text-muted-foreground size-4 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-90" />
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground ps-7 leading-relaxed">
              {/* {item.content} */}
              <ParkLevel/>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

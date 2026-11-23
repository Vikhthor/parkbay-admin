"use client"

import { useMemo, useState } from "react"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { Badge } from "@/components/reui/badge"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/components/reui/data-grid/data-grid"
import { DataGridColumnHeader } from "@/components/reui/data-grid/data-grid-column-header"
import { DataGridPagination } from "@/components/reui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/components/reui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableRowSelect,
  DataGridTableRowSelectAll,
} from "@/components/reui/data-grid/data-grid-table"
import {
  ColumnDef,
  PaginationState,
  Row,
  SortingState,
  useTable,
} from "@tanstack/react-table"
import { toast } from "sonner"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent
} from "@/components/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { 
    CarIcon, 
    ZapIcon, 
    CrownIcon, 
    ClockIcon,
    TriangleAlertIcon,
    ReceiptIcon,
    CopyIcon,
    UserCheckIcon,
    MonitorIcon,
    SmartphoneIcon,
    CircleCheckIcon,
    WalletIcon,
    CreditCardIcon,
    CircleXIcon,
    Trash2Icon,
    RepeatIcon,
    FunnelIcon, 
    MoreHorizontalIcon, 
    SearchIcon, 
    UserPlusIcon, 
    XIcon 
} from 'lucide-react'
import { IconPlus } from "@tabler/icons-react"

interface IData {
  id: string
  name: string
  check_in_method: "valet" | "mobile_app" | "kiosk"
  avatar: string
  status: "Parked" | "Inactive" | "Pending" | "Blocked"
  payment_status: "Paid" | "Pending" | "Failed"
  flag: string // Emoji flags
  email: string
  company: string
  role: string
  joined: string
  location: string
  balance: number
}

const demoData: IData[] = [
  {
    id: "1",
    name: "Alex Johnson",
    check_in_method: "valet",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
    status: "Parked",
    payment_status: "Paid",
    flag: "us",
    email: "alex@apple.com",
    company: "Apple",
    role: "CEO",
    joined: "Jan, 2024",
    location: "United States",
    balance: 5143.03,
  },
  {
    id: "1",
    name: "Sarah Chen",
    check_in_method: "kiosk",
    avatar:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80",
    status: "Parked",
    payment_status: "Pending",
    flag: "us",
    email: "alex@apple.com",
    company: "Apple",
    role: "CEO",
    joined: "Jan, 2024",
    location: "United States",
    balance: 5143.03,
  },
  {
    id: "1",
    name: "Michael Rodriguez",
    check_in_method: "mobile_app",
    avatar:
      "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80",
    status: "Parked",
    payment_status: "Failed",
    flag: "us",
    email: "alex@apple.com",
    company: "Apple",
    role: "CEO",
    joined: "Jan, 2024",
    location: "United States",
    balance: 5143.03,
  },
//   {
//     id: "3",
//     name: "Michael Rodriguez",
//     availability: "busy",
//     avatar:
//       "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80",
//     status: "Blocked",
//     flag: "ca",
//     email: "michael@meta.com",
//     company: "Meta",
//     role: "Designer",
//     joined: "Jun, 2022",
//     location: "Canada",
//     balance: 7654.98,
//   },
//   {
//     id: "4",
//     name: "Emma Wilson",
//     availability: "offline",
//     avatar:
//       "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80",
//     status: "Inactive",
//     flag: "au",
//     email: "emma@tesla.com",
//     company: "Tesla",
//     role: "Developer",
//     joined: "Sep, 2024",
//     location: "Australia",
//     balance: 3456.45,
//   },
//   {
//     id: "5",
//     name: "David Kim",
//     availability: "online",
//     avatar:
//       "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80",
//     status: "Active",
//     flag: "de",
//     email: "david@sap.com",
//     company: "SAP",
//     role: "Lawyer",
//     joined: "Nov, 2023",
//     location: "Germany",
//     balance: 9876.54,
//   },
//   {
//     id: "6",
//     name: "Aron Thompson",
//     availability: "away",
//     avatar:
//       "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80",
//     status: "Pending",
//     flag: "my",
//     email: "aron@keenthemes.com",
//     company: "Keenthemes",
//     role: "Director",
//     joined: "Feb, 2022",
//     location: "Malaysia",
//     balance: 6214.22,
//   },
//   {
//     id: "7",
//     name: "James Brown",
//     availability: "busy",
//     avatar:
//       "https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80",
//     status: "Inactive",
//     flag: "es",
//     email: "james@bbva.es",
//     company: "BBVA",
//     role: "Product Manager",
//     joined: "Aug, 2024",
//     location: "Spain",
//     balance: 5321.77,
//   },
//   {
//     id: "8",
//     name: "Maria Garcia",
//     availability: "offline",
//     avatar:
//       "https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80",
//     status: "Blocked",
//     flag: "jp",
//     email: "maria@sony.jp",
//     company: "Sony",
//     role: "Marketing Lead",
//     joined: "Dec, 2023",
//     location: "Japan",
//     balance: 8452.39,
//   },
//   {
//     id: "9",
//     name: "Nick Johnson",
//     availability: "online",
//     avatar:
//       "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80",
//     status: "Pending",
//     flag: "fr",
//     email: "nick@lvmh.fr",
//     company: "LVMH",
//     role: "Data Scientist",
//     joined: "Apr, 2022",
//     location: "France",
//     balance: 7345.1,
//   },
//   {
//     id: "10",
//     name: "Liam Thompson",
//     availability: "away",
//     avatar:
//       "https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80",
//     status: "Inactive",
//     flag: "it",
//     email: "liam@eni.it",
//     company: "ENI",
//     role: "Engineer",
//     joined: "Jul, 2024",
//     location: "Italy",
//     balance: 5214.88,
//   },
//   {
//     id: "11",
//     name: "Alex Johnson",
//     availability: "busy",
//     avatar:
//       "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80",
//     status: "Blocked",
//     flag: "br",
//     email: "alex@vale.br",
//     company: "Vale",
//     role: "Software Engineer",
//     joined: "May, 2023",
//     location: "Brazil",
//     balance: 9421.5,
//   },
//   {
//     id: "12",
//     name: "Sarah Chen",
//     availability: "offline",
//     avatar:
//       "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80",
//     status: "Active",
//     flag: "in",
//     email: "sarah@tata.in",
//     company: "Tata",
//     role: "Sales Manager",
//     joined: "Oct, 2024",
//     location: "India",
//     balance: 4521.67,
//   },
]

function ActionsCell({ row }: { row: Row<DataGridFeatures, IData> }) {
  const { copyToClipboard } = useCopyToClipboard()
  const handleCopyId = () => {
    copyToClipboard(row.original.id)

    toast.success("Employee ID successfully copied", {
      description: row.original.id,
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button className="size-7" size="icon" variant="ghost">
            <MoreHorizontalIcon />
          </Button>
        }
      />
      <DropdownMenuContent side="bottom" align="start" className="min-w-40">
        <DropdownMenuSub>
            <DropdownMenuSubTrigger>
                <RepeatIcon/>
                Reassign spot
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
            <DropdownMenuSubContent className="w-32">
                <DropdownMenuItem>L1-1A1</DropdownMenuItem>
                <DropdownMenuItem>L1-1A6</DropdownMenuItem>
                <DropdownMenuItem>L1-1B2</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More…</DropdownMenuItem>
            </DropdownMenuSubContent>
            </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem onClick={() => {}}>
            <CircleCheckIcon/>
            Mark exited
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {}}>
            <ReceiptIcon/>
            Resend receipt
        </DropdownMenuItem>
        {/* <DropdownMenuItem onClick={handleCopyId}>Copy ID</DropdownMenuItem> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={() => {}}>
          <Trash2Icon/>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function ReservationsDataGrid() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })
  const [sorting, setSorting] = useState<SortingState>([
    { id: "name", desc: true },
  ])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])

  const filteredData = useMemo(() => {
    return demoData.filter((item) => {
      // Filter by status
      const matchesStatus =
        !selectedStatuses?.length || selectedStatuses.includes(item.status)

      // Filter by search query (case-insensitive)
      const searchLower = searchQuery.toLowerCase()
      const matchesSearch =
        !searchQuery ||
        Object.values(item)
          .join(" ") // Combine all fields into a single string
          .toLowerCase()
          .includes(searchLower)

      return matchesStatus && matchesSearch
    })
  }, [searchQuery, selectedStatuses])

  const statusCounts = useMemo(() => {
    return demoData.reduce(
      (acc, item) => {
        acc[item.status] = (acc[item.status] || 0) + 1
        return acc
      },
      {} as Record<string, number>
    )
  }, [])

  const handleStatusChange = (checked: boolean, value: string) => {
    setSelectedStatuses(
      (
        prev = [] // Default to an empty array
      ) => (checked ? [...prev, value] : prev.filter((v) => v !== value))
    )
  }

  const columns = useMemo<ColumnDef<DataGridFeatures, IData>[]>(
    () => [
      {
        accessorKey: "id",
        id: "id",
        header: () => <DataGridTableRowSelectAll />,
        cell: ({ row }) => <DataGridTableRowSelect row={row} />,
        enableSorting: false,
        size: 35,
        meta: {
          headerClassName: "",
          cellClassName: "",
        },
        enableResizing: false,
      },
      {
        accessorKey: "vehicle",
        id: "vehicle",
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Vehicle"
            visibility={true}
            column={column}
          />
        ),
        cell: ({row})=>{
            return (
                <div className="flex items-center gap-2">
                    <span className="bg-muted relative flex size-7 shrink-0 items-center justify-center rounded-lg">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-car text-muted-foreground size-3.5" aria-hidden="true" lucide="CarIcon" tabler="IconCar" hugeicons="Car03Icon" phosphor="CarIcon" remixicon="RiCarLine">
                        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                        <circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path>
                        <circle cx="17" cy="17" r="2"></circle>
                        </svg> */}
                        <CarIcon size={20}/>
                        <span className="bg-primary text-primary-foreground absolute -top-1 -right-1 flex size-3 items-center justify-center rounded-full">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap size-2" aria-hidden="true" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine">
                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                            </svg> */}
                            <ZapIcon/>
                        </span>
                    </span>
                    <div className="min-w-0">
                        <p className="truncate font-medium">2HPV137</p>
                        <p className="text-muted-foreground text-xs">EV</p>
                    </div>
                </div>
            )
        },
        size: 150,
        meta: {
          autoSize: true,
        },
        enableSorting: true,
        enableHiding: false,
        enableResizing: true,
      },
      {
        accessorKey: "customer",
        id: "customer",
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Customer"
            visibility={true}
            column={column}
          />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-3">
              <Avatar className="size-8">
                <AvatarImage
                  src={row.original.avatar}
                  alt={row.original.name}
                />
                <AvatarFallback>
                  {row.original.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-px">
                <div className="text-foreground font-medium">
                  {row.original.name}
                </div>
                <p className="text-muted-foreground flex items-center gap-1 text-xs">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crown text-primary size-2.5" aria-hidden="true" lucide="CrownIcon" tabler="IconCrown" hugeicons="CrownIcon" phosphor="CrownIcon" remixicon="RiVipCrownLine">
                    <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                    <path d="M5 21h14"></path>
                    </svg> */}
                    <CrownIcon size={10}/>
                    VIP · 21 visits
                </p>
              </div>
            </div>
          )
        },
        size: 260,
        meta: {
          autoSize: true,
        },
        enableSorting: true,
        enableHiding: false,
        enableResizing: true,
      },
      {
        accessorKey: "spot",
        id: "spot",
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Spot"
            visibility={true}
            column={column}
          />
        ),
        cell: ({ row }) => {
          const status = row.original.status
          return <Badge>L3-2B3</Badge>
        },
        size: 100,
        enableSorting: true,
        enableHiding: true,
        enableResizing: true,
      },
      {
        accessorKey: "status",
        id: "status",
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Status"
            visibility={true}
            column={column}
          />
        ),
        cell: ({ row }) => {
          const status = row.original.status

          if (status == "Parked") {
            return <Badge variant="success-outline">Parked</Badge>
          } else if (status == "Blocked") {
            return <Badge variant="destructive-outline">Blocked</Badge>
          } else if (status == "Inactive") {
            return <Badge variant="info-outline">Inactive</Badge>
          } else {
            return <Badge variant="warning-outline">Pending</Badge>
          }
        },
        size: 100,
        enableSorting: true,
        enableHiding: true,
        enableResizing: true,
      },
      {
        accessorKey: "duration",
        id: "duration",
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Duration"
            visibility={true}
            column={column}
          />
        ),
        cell: ({ row }) => {
          return (
            <div className="relative flex h-9 w-36 items-stretch overflow-hidden rounded-md border border-amber-600/40 dark:border-amber-400/40" id="base-ui-_r_60_" data-slot="hover-card-trigger">
                <span 
                    className="absolute inset-y-0 left-0 bg-amber-600/15 dark:bg-amber-400/15" 
                    style={{"width": "100%"}} 
                    // Set progress level with style width, set color with bg- class
                >
                </span>
                <div className="relative z-10 flex w-7 shrink-0 items-center justify-center border-r border-dashed border-amber-600/40 dark:border-amber-400/40">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock size-3 text-amber-600 dark:text-amber-400" aria-hidden="true" lucide="ClockIcon" tabler="IconClock" hugeicons="Clock01Icon" phosphor="ClockIcon" remixicon="RiTimeLine">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                    </svg> */}
                    <ClockIcon size={15}/>
                </div>
                <span className="bg-background absolute -top-1.5 left-7 z-20 size-3 -translate-x-1/2 rounded-full border border-amber-600/40 dark:border-amber-400/40"></span>
                <span className="bg-background absolute -bottom-1.5 left-7 z-20 size-3 -translate-x-1/2 rounded-full border border-amber-600/40 dark:border-amber-400/40"></span>
                <div className="relative z-10 flex flex-1 flex-col justify-center gap-0.5 px-2.5">
                    <span className="text-[11px] font-medium tabular-nums">
                        8:01 AM
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-medium tabular-nums text-amber-600 dark:text-amber-400">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert size-2.5" aria-hidden="true" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path>
                        </svg> */}
                        <TriangleAlertIcon size={10}/>
                        0m left
                    </span>
                </div>
            </div>
          )
        },
        size: 200,
        meta: {
          headerClassName: "",
          cellClassName: "text-start",
        },
        enableSorting: true,
        enableHiding: true,
        enableResizing: true,
      },
      {
        accessorKey: "reference",
        id: "reference",
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Reference No."
            visibility={true}
            column={column}
          />
        ),
        cell: ({ row }) => {
          return (
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-muted group flex items-center gap-1.5 rounded-md px-1.5 py-1 font-mono text-xs">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt size-3.5 shrink-0" aria-hidden="true" lucide="ReceiptIcon" tabler="IconReceipt" hugeicons="ReceiptTextIcon" phosphor="ReceiptIcon" remixicon="RiReceiptLine">
                <path d="M12 17V7"></path>
                <path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"></path>
                <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"></path>
                </svg> */}
                <ReceiptIcon/>
                PK-P7H6M7
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy size-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" lucide="CopyIcon" tabler="IconCopy" hugeicons="CopyIcon" phosphor="CopyIcon" remixicon="RiFileCopyLine">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                </svg> */}
                <CopyIcon className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100"/>
            </Button>
          )
        },
        size: 150,
        enableSorting: true,
        enableHiding: true,
        enableResizing: true,
      },
      {
        accessorKey: "check_in_method",
        id: "check_in_method",
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Check In Method"
            visibility={true}
            column={column}
          />
        ),
        cell: ({ row }) => {
          if(row.original.check_in_method === "valet"){
            return (
                <div className="flex flex-col gap-0.5 text-sm">
                    <span className="flex items-center gap-1.5">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-check text-muted-foreground size-3.5" aria-hidden="true" lucide="UserCheckIcon" tabler="IconUserCheck" hugeicons="UserCheck01Icon" phosphor="UserCheckIcon" remixicon="RiUserFollowLine">
                        <path d="m16 11 2 2 4-4"></path>
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        </svg> */}
                        <UserCheckIcon size={15}/>
                        Valet
                    </span>
                    <span className="text-muted-foreground text-xs">
                        via Gate C
                    </span>
                </div>
            )
          } else if(row.original.check_in_method === "mobile_app"){
            return (
                <div className="flex flex-col gap-0.5 text-sm">
                    <span className="flex items-center gap-1.5">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone text-muted-foreground size-3.5" aria-hidden="true" lucide="SmartphoneIcon" tabler="IconDeviceMobile" hugeicons="SmartPhone01Icon" phosphor="DeviceMobileCameraIcon" remixicon="RiSmartphoneLine">
                        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                        <path d="M12 18h.01"></path>
                        </svg> */}
                        <SmartphoneIcon size={15}/>
                        Mobile app
                    </span>
                    <span className="text-muted-foreground text-xs">
                        via Gate B
                    </span>
                </div>
            )
          } else if(row.original.check_in_method === "kiosk"){
            return (
                <div className="flex flex-col gap-0.5 text-sm">
                    <span className="flex items-center gap-1.5">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor text-muted-foreground size-3.5" aria-hidden="true" lucide="MonitorIcon" tabler="IconDeviceDesktop" hugeicons="ComputerIcon" phosphor="MonitorIcon" remixicon="RiComputerLine">
                        <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                        <line x1="8" x2="16" y1="21" y2="21"></line>
                        <line x1="12" x2="12" y1="17" y2="21"></line>
                        </svg> */}
                        <MonitorIcon size={15}/>
                        Entry kiosk
                    </span>
                    <span className="text-muted-foreground text-xs">
                        via Gate A
                    </span>
                </div>
            )
          }
        },
        size: 150,
        enableSorting: true,
        enableHiding: true,
        enableResizing: true,
      },
      {
        accessorKey: "payment_status",
        id: "payment_status",
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Payment Status"
            visibility={true}
            column={column}
          />
        ),
        cell: ({ row }) => {
          if(row.original.payment_status === "Paid"){
            return (
                <div className="flex flex-col gap-0.5 text-sm">
                    <span className="flex items-center gap-1.5 text-green-600 dark:text-green-400">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check size-3.5" aria-hidden="true" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                        </svg> */}
                        <CircleCheckIcon size={15}/>
                        Paid
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1 text-xs">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet size-3" aria-hidden="true" lucide="WalletIcon" tabler="IconWallet" hugeicons="WalletIcon" phosphor="WalletIcon" remixicon="RiWalletLine">
                        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                        <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                        </svg> */}
                        <WalletIcon size={10}/>
                        Cash
                    </span>
                </div>
            )
          } else if(row.original.payment_status === "Pending"){
            return (
                <div className="flex flex-col gap-0.5 text-sm">
                    <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card size-3.5" aria-hidden="true" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine">
                        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                        <line x1="2" x2="22" y1="10" y2="10"></line>
                        </svg> */}
                        <CreditCardIcon size={15}/>
                        Pending
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1 text-xs">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet size-3" aria-hidden="true" lucide="WalletIcon" tabler="IconWallet" hugeicons="WalletIcon" phosphor="WalletIcon" remixicon="RiWalletLine">
                        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                        </svg> */}
                        <WalletIcon size={10}/>
                        Cash
                    </span>
                </div>
            )
          } else if(row.original.payment_status === "Failed"){
            return (
                <div className="flex flex-col gap-0.5 text-sm">
                    <span className="flex items-center gap-1.5 text-destructive">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x size-3.5" aria-hidden="true" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CircleX" phosphor="XCircleIcon" remixicon="RiCloseCircleLine">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m15 9-6 6"></path>
                        <path d="m9 9 6 6"></path>
                        </svg> */}
                        <CircleXIcon size={15}/>
                        Failed
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1 text-xs">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card size-3" aria-hidden="true" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine">
                        <rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line>
                        </svg> */}
                        <CreditCardIcon size={10}/>
                        Card
                    </span>
                </div>
            )
          }
        },
        size: 150,
        enableSorting: true,
        enableHiding: true,
        enableResizing: true,
      },
      {
        accessorKey: "revenue",
        id: "revenue",
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Revenue"
            visibility={true}
            column={column}
          />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-2">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-amber-600/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap size-3.5" aria-hidden="true" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                    </svg> */}
                    <ZapIcon size={15}/>
                </span>
                <div>
                    <p className="font-medium tabular-nums">
                        ₦21
                    </p>
                    <p className="text-muted-foreground text-xs">
                        EV Session
                    </p>
                </div>
            </div>
          )
        },
        size: 150,
        enableSorting: true,
        enableHiding: true,
        enableResizing: true,
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => <ActionsCell row={row} />,
        size: 60,
        enableSorting: false,
        enableHiding: false,
        enableResizing: false,
      },
    ],
    []
  )

  const [columnOrder, setColumnOrder] = useState<string[]>(
    columns.map((column) => column.id as string)
  )

  const table = useTable({
    features: dataGridFeatures,
    columns,
    data: filteredData,
    pageCount: Math.ceil((filteredData?.length || 0) / pagination.pageSize),
    getRowId: (row: IData) => row.id,
    state: {
      pagination,
      sorting,
      columnOrder,
      columnPinning: { start: ["id", "vehicle"], end: ["actions"] }
    },
    onColumnOrderChange: setColumnOrder,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
  })

  return (
    <div className="">
        <DataGrid
        table={table}
        recordCount={filteredData?.length || 0}
        tableLayout={{
            columnsPinnable: true,
            columnsResizable: true,
            columnsMovable: true,
            columnsVisibility: true,
        }}
        >
        <Card className="w-full gap-3 py-0">
            <CardHeader className="flex items-center justify-between px-3.5 py-2">
            <div className="flex items-center gap-2.5">
                <InputGroup className="w-48">
                <InputGroupAddon align="inline-start">
                    <SearchIcon />
                </InputGroupAddon>

                <InputGroupInput
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                {searchQuery.length > 0 && (
                    <InputGroupAddon align="inline-end">
                    <InputGroupButton
                        aria-label="Copy"
                        title="Copy"
                        size="icon-xs"
                        onClick={() => setSearchQuery("")}
                    >
                        <XIcon />
                    </InputGroupButton>
                    </InputGroupAddon>
                )}
                </InputGroup>
                <Popover>
                <PopoverTrigger
                    render={
                    <Button variant="outline">
                        <FunnelIcon />
                        Status
                        {selectedStatuses.length > 0 && (
                        <Badge size="sm" variant="info-outline">
                            {selectedStatuses.length}
                        </Badge>
                        )}
                    </Button>
                    }
                />
                <PopoverContent className="w-40" align="start">
                    <div className="space-y-3">
                    <div className="text-muted-foreground text-xs font-medium">
                        Filters
                    </div>
                    <div className="space-y-3">
                        {Object.keys(statusCounts).map((status) => (
                        <div key={status} className="flex items-center gap-2.5">
                            <Checkbox
                            id={status}
                            checked={selectedStatuses.includes(status)}
                            onCheckedChange={(checked) =>
                                handleStatusChange(checked === true, status)
                            }
                            />
                            <Label
                            htmlFor={status}
                            className="flex grow items-center justify-between gap-1.5 font-normal"
                            >
                            {status}
                            <span className="text-muted-foreground">
                                {statusCounts[status]}
                            </span>
                            </Label>
                        </div>
                        ))}
                    </div>
                    </div>
                </PopoverContent>
                </Popover>
            </div>
            <CardAction>
                <Button>
                <IconPlus />
                Add Reservation
                </Button>
            </CardAction>
            </CardHeader>
            <CardContent className="p-0">
            <Card className="p-0">
                <DataGridContainer>
                <DataGridScrollArea>
                    <DataGridTable />
                </DataGridScrollArea>
                </DataGridContainer>
            </Card>
            </CardContent>
            <CardFooter className="border-none bg-transparent! px-3.5 py-2">
            <DataGridPagination />
            </CardFooter>
        </Card>
        </DataGrid>
    </div>
  )
}

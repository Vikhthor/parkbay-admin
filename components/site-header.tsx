import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ReactNode } from "react"
import { LucideIcon } from "lucide-react"

type SiteHeaderProps = {
    pageTitle: string
    children?: ReactNode
}

export function SiteHeader({ ...props }: SiteHeaderProps) {
  return (
    <header className="flex h-(--header-height) bg-background/95 sticky top-0 z-40 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">{props.pageTitle}</h1>
        <div className="ml-auto flex items-center gap-2">
          {props.children}
          {/* <Button variant="ghost" size="sm" className="hidden sm:flex">
            <a
              href="https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/(examples)/dashboard"
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground"
            >
              GitHub
            </a>
          </Button> */}
        </div>
      </div>
    </header>
  )
}

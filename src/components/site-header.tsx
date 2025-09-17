import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-1">
        <SidebarTrigger className="-ml-1"  />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-3xl font-serif ml-7">Career and Degree Counselling</h1>
        <div className="ml-auto mr-6 ">
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex text-2xl">
            <a
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground"
            >
              Admin
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}

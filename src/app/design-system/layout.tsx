import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/src/components/organisms/app-sidebar"

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full flex flex-col">
                <div className="sticky top-0 z-50 border-b bg-background">
                    <div className="flex h-14 items-center px-4 gap-4">
                        <SidebarTrigger className="hover:bg-muted rounded-lg transition-colors" />
                        <div className="flex items-center gap-2">
                            <div className="h-6 w-px bg-border" />
                            <h1 className="text-sm font-semibold">Design System</h1>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    {children}
                </div>
            </main>
        </SidebarProvider>
    )
}
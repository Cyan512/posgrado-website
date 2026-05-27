import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/src/components/organisms/app-sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex w-full flex-col">
        <div className="bg-background sticky top-0 z-50 border-b">
          <div className="flex h-14 items-center gap-4 px-4">
            <SidebarTrigger className="hover:bg-muted rounded-lg transition-colors" />
            <div className="flex items-center gap-2">
              <div className="bg-border h-6 w-px" />
              <h1 className="text-sm font-semibold">Design System</h1>
            </div>
          </div>
        </div>
        <div className="flex-1">{children}</div>
      </main>
    </SidebarProvider>
  );
}

import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { LayoutDashboard, FilePlus, FileText, Settings, UserCircle, LogOut, ChevronRight, BarChart3, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <Sidebar className="border-r border-border bg-card/30 backdrop-blur-xl">
          <SidebarHeader className="p-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shadow-lg shadow-accent/20">
                <span className="text-white font-headline font-bold text-xl">R</span>
              </div>
              <span className="font-headline font-bold text-xl tracking-tight">REKH</span>
            </Link>
          </SidebarHeader>
          <SidebarContent className="px-3">
            <SidebarMenu>
              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Main</div>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Dashboard">
                  <Link href="/dashboard" className="flex items-center gap-3 py-6 px-4">
                    <LayoutDashboard className="w-5 h-5" />
                    <span className="font-medium">Overview</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Generate Plan">
                  <Link href="/dashboard/generate" className="flex items-center gap-3 py-6 px-4 text-accent">
                    <FilePlus className="w-5 h-5" />
                    <span className="font-medium">New Strategy</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="My Plans">
                  <Link href="/dashboard/plans" className="flex items-center gap-3 py-6 px-4">
                    <FileText className="w-5 h-5" />
                    <span className="font-medium">Strategic Archive</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-widest mt-8 mb-2">Audit Suite</div>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#" className="flex items-center gap-3 py-6 px-4">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="font-medium">Regulatory Logs</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#" className="flex items-center gap-3 py-6 px-4">
                    <BarChart3 className="w-5 h-5" />
                    <span className="font-medium">Risk Reports</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="p-4 border-t border-border mt-auto">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer group">
              <UserCircle className="w-10 h-10 text-muted-foreground group-hover:text-foreground transition-colors" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">Executive User</p>
                <p className="text-xs text-muted-foreground truncate">pro@rekh.ai</p>
              </div>
              <LogOut className="w-4 h-4 text-muted-foreground hover:text-destructive transition-colors" />
            </div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="flex flex-col flex-1 overflow-hidden">
          <header className="h-16 flex items-center justify-between px-6 border-b bg-card/20 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <div className="h-4 w-[1px] bg-border mx-2"></div>
              <div className="text-sm font-medium text-muted-foreground">
                <span className="hover:text-foreground cursor-pointer">Rekh</span>
                <ChevronRight className="inline w-3 h-3 mx-1" />
                <span className="text-foreground">Executive Dashboard</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-3 py-1.5 rounded-md bg-accent/10 border border-accent/20 text-accent text-xs font-semibold flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                Orchestration Engine: Online
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-8">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
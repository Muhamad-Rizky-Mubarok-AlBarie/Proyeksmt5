import type React from "react"
import { Building2, Users, TrendingUp, Award, Settings, BarChart3, FileText, User } from "lucide-react"

const navigation = [
  { name: "Overview", icon: BarChart3, current: true },
  { name: "Penilaian", icon: Award, current: false },
  { name: "Pegawai", icon: Users, current: false },
  { name: "Laporan", icon: FileText, current: false },
  { name: "Analisis", icon: TrendingUp, current: false },
]

const secondaryNavigation = [
  { name: "Pengaturan", icon: Settings },
  { name: "Profil", icon: User },
]

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="flex flex-col w-64 bg-sidebar border-r border-sidebar-border">
        {/* Logo */}
        <div className="flex items-center h-16 px-6 border-b border-sidebar-border">
          <Building2 className="h-8 w-8 text-sidebar-primary" />
          <span className="ml-2 text-lg font-semibold text-sidebar-foreground">SPK Pegawai</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          <div className="space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href="#"
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  item.current
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </a>
            ))}
          </div>

          <div className="pt-6 mt-6 border-t border-sidebar-border">
            <div className="space-y-1">
              {secondaryNavigation.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium text-sidebar-foreground rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">{children}</div>
    </div>
  )
}

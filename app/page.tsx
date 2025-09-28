import { DashboardLayout } from "@/components/dashboard-layout"
import { OverviewCards } from "@/components/overview-cards"
import { PerformanceCharts } from "@/components/performance-charts"
import { EmployeeTable } from "@/components/employee-table"
import { TopPerformers } from "@/components/top-performers"

export default function Dashboard() {
  return (
    <div className="dark">
      <DashboardLayout>
        <div className="flex-1 space-y-6 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-balance">Sistem Penilaian Kinerja Pegawai</h1>
              <p className="text-muted-foreground">Dashboard analisis dan evaluasi kinerja pegawai terbaik</p>
            </div>
            <div className="flex items-center space-x-2">
              <select className="bg-card border border-border rounded-md px-3 py-2 text-sm">
                <option>Periode: Q4 2024</option>
                <option>Q3 2024</option>
                <option>Q2 2024</option>
              </select>
            </div>
          </div>

          <OverviewCards />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <PerformanceCharts />
            </div>
            <div>
              <TopPerformers />
            </div>
          </div>

          <EmployeeTable />
        </div>
      </DashboardLayout>
    </div>
  )
}

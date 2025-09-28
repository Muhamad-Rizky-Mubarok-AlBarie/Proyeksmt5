import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, TrendingUp, Target } from "lucide-react"

const stats = [
  {
    title: "Total Pegawai",
    value: "248",
    change: "+12%",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    title: "Pegawai Terbaik",
    value: "24",
    change: "+8%",
    changeType: "positive" as const,
    icon: Award,
  },
  {
    title: "Rata-rata Skor",
    value: "87.5",
    change: "+5.2%",
    changeType: "positive" as const,
    icon: TrendingUp,
  },
  {
    title: "Target Tercapai",
    value: "92%",
    change: "+3%",
    changeType: "positive" as const,
    icon: Target,
  },
]

export function OverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-2">{stat.change}</span> dari bulan lalu
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

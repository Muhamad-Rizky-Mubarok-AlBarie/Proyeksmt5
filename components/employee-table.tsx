import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, MoreHorizontal } from "lucide-react"

const employees = [
  {
    id: "EMP001",
    name: "Ahmad Wijaya",
    department: "IT",
    position: "Senior Developer",
    score: 95,
    status: "Excellent",
    lastEvaluation: "2024-12-15",
  },
  {
    id: "EMP002",
    name: "Sari Indah",
    department: "Marketing",
    position: "Marketing Manager",
    score: 93,
    status: "Excellent",
    lastEvaluation: "2024-12-14",
  },
  {
    id: "EMP003",
    name: "Budi Santoso",
    department: "Finance",
    position: "Financial Analyst",
    score: 91,
    status: "Excellent",
    lastEvaluation: "2024-12-13",
  },
  {
    id: "EMP004",
    name: "Maya Putri",
    department: "HR",
    position: "HR Specialist",
    score: 90,
    status: "Very Good",
    lastEvaluation: "2024-12-12",
  },
  {
    id: "EMP005",
    name: "Rudi Hermawan",
    department: "Operations",
    position: "Operations Manager",
    score: 89,
    status: "Very Good",
    lastEvaluation: "2024-12-11",
  },
  {
    id: "EMP006",
    name: "Lisa Anggraini",
    department: "IT",
    position: "UI/UX Designer",
    score: 87,
    status: "Good",
    lastEvaluation: "2024-12-10",
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case "Excellent":
      return <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30">Excellent</Badge>
    case "Very Good":
      return <Badge className="bg-chart-3/20 text-chart-3 border-chart-3/30">Very Good</Badge>
    case "Good":
      return <Badge className="bg-chart-1/20 text-chart-1 border-chart-1/30">Good</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

export function EmployeeTable() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-card-foreground">Data Pegawai</CardTitle>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Cari pegawai..." className="pl-10 w-64 bg-background border-border" />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">ID</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Nama</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Departemen</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Posisi</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Skor</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Evaluasi Terakhir</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground"></th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="border-b border-border hover:bg-muted/50">
                  <td className="py-3 px-4 text-sm text-card-foreground font-mono">{employee.id}</td>
                  <td className="py-3 px-4 text-sm font-medium text-card-foreground">{employee.name}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{employee.department}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{employee.position}</td>
                  <td className="py-3 px-4 text-sm font-semibold text-chart-1">{employee.score}</td>
                  <td className="py-3 px-4">{getStatusBadge(employee.status)}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{employee.lastEvaluation}</td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

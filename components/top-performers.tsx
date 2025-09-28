import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const topPerformers = [
  {
    name: "Ahmad Wijaya",
    department: "IT",
    score: 95,
    rank: 1,
    initials: "AW",
  },
  {
    name: "Sari Indah",
    department: "Marketing",
    score: 93,
    rank: 2,
    initials: "SI",
  },
  {
    name: "Budi Santoso",
    department: "Finance",
    score: 91,
    rank: 3,
    initials: "BS",
  },
  {
    name: "Maya Putri",
    department: "HR",
    score: 90,
    rank: 4,
    initials: "MP",
  },
  {
    name: "Rudi Hermawan",
    department: "Operations",
    score: 89,
    rank: 5,
    initials: "RH",
  },
]

export function TopPerformers() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground">Top Performers</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {topPerformers.map((performer) => (
          <div key={performer.rank} className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <Badge
                variant={performer.rank <= 3 ? "default" : "secondary"}
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs"
              >
                {performer.rank}
              </Badge>
            </div>
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">{performer.initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-card-foreground truncate">{performer.name}</p>
              <p className="text-xs text-muted-foreground">{performer.department}</p>
            </div>
            <div className="text-sm font-semibold text-chart-1">{performer.score}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

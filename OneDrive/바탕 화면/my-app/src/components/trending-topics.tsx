import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const topics = [
  { name: "Machine Learning", posts: 234, color: "bg-green-100 text-green-800" },
  { name: "Climate Science", posts: 186, color: "bg-blue-100 text-blue-800" },
  { name: "Quantum Computing", posts: 170, color: "bg-purple-100 text-purple-800" },
  { name: "Bioinformatics", posts: 92, color: "bg-yellow-100 text-yellow-800" },
  { name: "Drug Discovery", posts: 50, color: "bg-pink-100 text-pink-800" },
  { name: "Protein Science", posts: 28, color: "bg-red-100 text-red-800" },
]

export function TrendingTopics() {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="pb-3">
        {" "}
        {/* Reduced bottom padding */}
        <CardTitle className="text-base font-bold text-brand-text-dark">
          {" "}
          {/* Reduced from text-lg to text-base */}
          Trending Topic
        </CardTitle>
      </CardHeader>
      <CardContent className="py-0">
        {" "}
        {/* Removed vertical padding */}
        <ul className="space-y-2">
          {" "}
          {/* Reduced from space-y-3 to space-y-2 */}
          {topics.map((topic) => (
            <li key={topic.name} className="flex justify-between items-center text-xs text-brand-text">
              {" "}
              {/* Reduced from text-sm to text-xs */}
              <span>{topic.name}</span>
              <Badge variant="secondary" className={`${topic.color} font-normal rounded-md text-xs`}>
                {" "}
                {/* Added text-xs */}
                {topic.posts} posts
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-3">
        {" "}
        {/* Reduced top padding */}
        <Button variant="outline" className="w-full text-xs text-brand-text-light bg-transparent rounded-lg h-8">
          {" "}
          {/* Reduced text size and height */}
          <Plus className="w-3 h-3 mr-2" /> {/* Reduced icon size */}
          View more
        </Button>
      </CardFooter>
    </Card>
  )
}

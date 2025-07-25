import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, FileText, Heart, MessageSquare, LinkIcon } from "lucide-react"

const papers = [
  {
    title: "Quantum Transformers for Molecular Property Prediction",
    description: "Fine-tuned quantum encoders outperform classical GNNs on the QM9 dataset.",
    likes: 125,
    comments: 18,
    link: "[arXiv:2403.08117]",
  },
  {
    title: "Quantum Transformers for Molecular Property Prediction",
    description: "Fine-tuned quantum encoders outperform classical GNNs on the QM9 dataset.",
    likes: 102,
    comments: 3,
    link: "[arXiv:2401.11138]",
  },
  {
    title: "Quantum Transformers for Molecular Property Prediction",
    description: "Fine-tuned quantum encoders outperform classical GNNs on the QM9 dataset.",
    likes: 80,
    comments: 5,
    link: "[arXiv:2201.09121]",
  },
]

export function TrendingPapers() {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="pb-3">
        {" "}
        {/* Reduced bottom padding */}
        <CardTitle className="text-base font-bold text-brand-text-dark">
          {" "}
          {/* Reduced from text-lg to text-base */}
          Trending in Machine Learning
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 py-0">
        {" "}
        {/* Reduced from space-y-5 to space-y-3 and removed vertical padding */}
        {papers.map((paper, index) => (
          <div key={index} className="border-l-2 border-brand-green-light pl-3">
            {" "}
            {/* Reduced from pl-4 to pl-3 */}
            <div className="flex items-start space-x-2">
              {" "}
              {/* Reduced from space-x-3 to space-x-2 */}
              <FileText className="w-4 h-4 text-brand-green mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-brand-green text-xs leading-tight">
                  {" "}
                  {/* Reduced from default size to text-xs */}
                  {paper.title}
                </h4>
                <p className="text-xs text-brand-text-light mt-1 leading-tight">
                  {" "}
                  {/* Reduced from text-sm to text-xs */}
                  {paper.description}
                </p>
                <div className="flex items-center space-x-3 text-xs text-brand-text-light mt-1">
                  {" "}
                  {/* Reduced from text-sm to text-xs and mt-2 to mt-1 */}
                  <span className="flex items-center">
                    <Heart className="w-3 h-3 mr-1 text-brand-green fill-current" /> {/* Reduced icon size */}
                    {paper.likes}
                  </span>
                  <span className="flex items-center">
                    <MessageSquare className="w-3 h-3 mr-1" /> {/* Reduced icon size */}
                    {paper.comments}
                  </span>
                  <span className="flex items-center">
                    <LinkIcon className="w-3 h-3 mr-1" /> {/* Reduced icon size */}
                    {paper.link}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
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

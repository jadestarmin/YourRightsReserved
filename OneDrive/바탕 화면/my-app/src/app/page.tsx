import { Header } from "@/components/header"
import { ProfileCard } from "@/components/profile-card"
import { Post } from "@/components/post"
import { TrendingTopics } from "@/components/trending-topics"
import { TrendingPapers } from "@/components/trending-papers"
import { FeedToggle } from "@/components/feed-toggle"
import { CreatePostPlaceholder } from "@/components/create-post-placeholder"
import { StickySidebar } from "@/components/sticky-sidebar"

export default function FeedPage() {
  return (
    <div className="min-h-screen bg-brand-background">
      <Header />
      <main className="flex justify-center py-8">
        <div className="flex gap-8">
          {/* Left Wing - 287.5px with sticky behavior */}
          <StickySidebar side="left">
            <ProfileCard />
            <CreatePostPlaceholder />
          </StickySidebar>

          {/* Center Column - 585px */}
          <div className="w-[585px] flex-shrink-0 space-y-6">
            <Post
              isRepost={true}
              reposter="Richard Phillips Feynman"
              author="Dr. Anna Martinez"
              authorTitle="Computer Science • Stanford University"
              title="Key Findings from Latest Nature Paper"
              summary="Sharing some exciting results from our quantum machine learning research:"
              quote='"Quantum-Enhanced Machine Learning for Climate Modeling" - Nature, 2024'
              quoteBody="Our hybrid quantum-classical approach demonstrates a 40% improvement in prediction accuracy compared to classical methods alone. The quantum feature mapping technique shows particular promise for high-dimensional climate data processing..."
              quoteSource="Page 3, Section 2.1 - Results"
              showChart={true}
              chartType="line"
              chartTitle="St. Thomas Aquinas Parish - Annual Pledged ($) versus Actual Receipts ($)"
              imageCaption="Figure 2: Performance comparison across different algorithms"
              tags={["Quantum Computing", "Machine Learning", "Climate Science"]}
              likes={89}
              comments={24}
              shares={15}
            />
            <Post
              author="Dr. Anna Martinez"
              authorTitle="Computer Science • Stanford University"
              title="Key Findings from Latest Nature Paper"
              summary="Sharing some exciting results from our quantum machine learning research:"
              showChart={true}
              chartType="bar"
              chartTitle="Algorithm Performance Comparison"
              tags={["Machine Learning"]}
              likes={89}
              comments={24}
              shares={15}
            />
            <Post
              author="Dr. Anna Martinez"
              authorTitle="Computer Science • Stanford University"
              title="Key Findings from Latest Nature Paper"
              summary="Sharing some exciting results from our quantum machine learning research:"
              showChart={true}
              chartType="pie"
              chartTitle="Research Distribution by Category"
              tags={["Machine Learning"]}
              likes={89}
              comments={24}
              shares={15}
            />
            <Post
              author="Dr. Anna Martinez"
              authorTitle="Computer Science • Stanford University"
              title="Additional Research Findings"
              summary="Continuing our exploration of quantum machine learning applications:"
              showChart={true}
              chartType="line"
              chartTitle="Model Accuracy Over Time"
              tags={["Machine Learning", "Research"]}
              likes={67}
              comments={12}
              shares={8}
            />
            <Post
              author="Dr. Anna Martinez"
              authorTitle="Computer Science • Stanford University"
              title="Future Directions in Quantum Computing"
              summary="Looking ahead at the next breakthroughs in quantum technology:"
              showChart={true}
              chartType="bar"
              chartTitle="Investment in Quantum Research"
              tags={["Quantum Computing", "Future Tech"]}
              likes={134}
              comments={28}
              shares={22}
            />
            <Post
              author="Dr. Anna Martinez"
              authorTitle="Computer Science • Stanford University"
              title="Collaborative Research Opportunities"
              summary="Exploring partnerships in advanced computing research:"
              showChart={true}
              chartType="pie"
              chartTitle="Research Collaboration Distribution"
              tags={["Collaboration", "Research"]}
              likes={98}
              comments={15}
              shares={11}
            />
          </div>

          {/* Right Wing - 287.5px with sticky behavior */}
          <StickySidebar side="right">
            <FeedToggle />
            <TrendingTopics />
            <TrendingPapers />
            <CreatePostPlaceholder />
          </StickySidebar>
        </div>
      </main>
    </div>
  )
}

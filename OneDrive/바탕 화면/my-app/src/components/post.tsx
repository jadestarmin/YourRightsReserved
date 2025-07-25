"use client"

import { useState } from "react"
import type { FC } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, MessageSquare, Send, Repeat, User, FileText } from "lucide-react"
import { ChartPlaceholder } from "./chart-placeholder"
import { CommentSection } from "./comment-section"

interface PostProps {
  isRepost?: boolean
  reposter?: string
  author: string
  authorTitle: string
  title: string
  summary: string
  quote?: string
  quoteBody?: string
  quoteSource?: string
  showChart?: boolean
  chartType?: "line" | "bar" | "pie" | "scatter"
  chartTitle?: string
  imageCaption?: string
  tags: string[]
  likes: number
  comments: number
  shares: number
}

export const Post: FC<PostProps> = ({
  isRepost,
  reposter,
  author,
  authorTitle,
  title,
  summary,
  quote,
  quoteBody,
  quoteSource,
  showChart = false,
  chartType = "line",
  chartTitle = "Performance Analysis",
  imageCaption,
  tags,
  likes,
  comments,
  shares,
}) => {
  const [showComments, setShowComments] = useState(false)
  const [commentCount, setCommentCount] = useState(comments)

  const handleAddComment = (content: string) => {
    // In a real app, this would make an API call
    console.log("Adding comment:", content)
    setCommentCount((prev) => prev + 1)
  }

  const toggleComments = () => {
    setShowComments(!showComments)
  }

  return (
    <Card className="overflow-hidden rounded-2xl">
      <CardContent className="p-6">
        {isRepost && (
          <div className="flex items-center text-sm text-brand-text-light mb-4">
            <Repeat className="w-4 h-4 mr-2" />
            <span className="font-semibold text-brand-text-dark">{reposter}</span>&nbsp;reposted this
          </div>
        )}
        <div className="flex items-start space-x-4">
          <Avatar className="w-12 h-12 bg-brand-green text-white flex-shrink-0">
            <AvatarImage src="/diverse-user-avatars.png" alt={author} />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="font-bold text-brand-text-dark">{author}</p>
            <p className="text-sm text-brand-text-light">{authorTitle}</p>
          </div>
        </div>
        {/* Content aligned with profile picture margin */}
        <div className="ml-16 mt-4 space-y-4">
          <h3 className="text-xl font-serif font-bold text-brand-text-dark">{title}</h3>
          <p className="text-brand-text">{summary}</p>
          {quote && (
            <blockquote className="border-l-2 border-brand-green pl-4 py-2 bg-brand-green-light text-brand-text">
              <p className="font-semibold text-brand-green-dark flex items-start">
                <FileText className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>{quote}</span>
              </p>
              {quoteBody && <p className="mt-2">{quoteBody}</p>}
              {quoteSource && <cite className="text-sm text-brand-text-light mt-2 block">{quoteSource}</cite>}
            </blockquote>
          )}
          {showChart && (
            <figure>
              <ChartPlaceholder width={600} height={350} type={chartType} title={chartTitle} />
              {imageCaption && <figcaption className="text-xs text-brand-text-light mt-2">{imageCaption}</figcaption>}
            </figure>
          )}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-gray-100 text-brand-text-light hover:bg-gray-200 font-normal rounded-md"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center space-x-1 text-brand-text-light pt-2">
            <Button variant="ghost" size="sm" className="space-x-2 px-2 hover:bg-red-50 hover:text-red-600">
              <Heart className="w-5 h-5" />
              <span className="font-semibold text-sm">{likes}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="space-x-2 px-2 hover:bg-blue-50 hover:text-blue-600"
              onClick={toggleComments}
            >
              <MessageSquare className="w-5 h-5" />
              <span className="font-semibold text-sm">{commentCount}</span>
            </Button>
            <Button variant="ghost" size="sm" className="space-x-2 px-2 hover:bg-green-50 hover:text-green-600">
              <Send className="w-5 h-5" />
              <span className="font-semibold text-sm">{shares}</span>
            </Button>
          </div>

          {/* Comment section */}
          {showComments && <CommentSection onAddComment={handleAddComment} />}
        </div>
      </CardContent>
    </Card>
  )
}

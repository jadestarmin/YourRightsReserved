"use client"

import type React from "react"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, MessageSquare, Smile, ImageIcon, User } from "lucide-react"

interface Comment {
  id: string
  author: string
  authorTitle: string
  content: string
  likes: number
  replies: number
  timeAgo: string
}

interface CommentSectionProps {
  comments: Comment[]
  onAddComment: (content: string) => void
}

const mockComments: Comment[] = [
  {
    id: "1",
    author: "Dr. Sarah Chen",
    authorTitle: "Quantum Physics • MIT",
    content: "This is a fascinating approach to quantum machine learning. The 40% improvement is remarkable!",
    likes: 12,
    replies: 3,
    timeAgo: "2h",
  },
  {
    id: "2",
    author: "Prof. Michael Rodriguez",
    authorTitle: "Computer Science • Stanford",
    content: "I'd love to see how this scales with larger datasets. Have you tested beyond the QM9 dataset?",
    likes: 8,
    replies: 1,
    timeAgo: "4h",
  },
  {
    id: "3",
    author: "Dr. Emily Watson",
    authorTitle: "Climate Science • Berkeley",
    content: "The implications for climate modeling are huge. This could revolutionize weather prediction accuracy.",
    likes: 15,
    replies: 2,
    timeAgo: "6h",
  },
]

export function CommentSection({ comments = mockComments, onAddComment }: CommentSectionProps) {
  const [newComment, setNewComment] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      onAddComment(newComment)
      setNewComment("")
    }
  }

  return (
    <div className="border-t border-brand-gray-light mt-4 pt-4 space-y-4">
      {/* Comment input */}
      <div className="flex items-start space-x-3">
        <Avatar className="w-10 h-10 bg-brand-green text-white flex-shrink-0">
          <AvatarImage src="/user-avatar.png" alt="Current user" />
          <AvatarFallback>
            <User className="w-5 h-5" />
          </AvatarFallback>
        </Avatar>
        <form onSubmit={handleSubmit} className="flex-1">
          <div className="relative">
            <Input
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="pr-20 rounded-full border-brand-gray-light focus:border-brand-green"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
              <Button type="button" variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-transparent">
                <div className="w-2 h-2 bg-brand-green rounded-full" />
              </Button>
              <Button type="button" variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-transparent">
                <Smile className="w-4 h-4 text-brand-gray-dark" />
              </Button>
              <Button type="button" variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-transparent">
                <ImageIcon className="w-4 h-4 text-brand-gray-dark" />
              </Button>
            </div>
          </div>
        </form>
      </div>

      {/* Comments list */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start space-x-3">
            <Avatar className="w-8 h-8 bg-brand-green text-white flex-shrink-0">
              <AvatarImage src="/user-avatar.png" alt={comment.author} />
              <AvatarFallback className="text-xs">
                <User className="w-4 h-4" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <p className="font-semibold text-sm text-brand-text-dark">{comment.author}</p>
                <p className="text-xs text-brand-text-light">{comment.authorTitle}</p>
                <p className="text-xs text-brand-text-light">•</p>
                <p className="text-xs text-brand-text-light">{comment.timeAgo}</p>
              </div>
              <p className="text-sm text-brand-text mt-1">{comment.content}</p>
              <div className="flex items-center space-x-4 mt-2">
                <Button variant="ghost" size="sm" className="h-6 px-2 text-xs hover:bg-red-50 hover:text-red-600">
                  <Heart className="w-3 h-3 mr-1" />
                  {comment.likes}
                </Button>
                <Button variant="ghost" size="sm" className="h-6 px-2 text-xs hover:bg-blue-50 hover:text-blue-600">
                  <MessageSquare className="w-3 h-3 mr-1" />
                  {comment.replies}
                </Button>
                <Button variant="ghost" size="sm" className="h-6 px-2 text-xs hover:bg-green-50 hover:text-green-600">
                  Reply
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

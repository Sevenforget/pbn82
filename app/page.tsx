"use client"

import { useState } from "react"
import PostCard from "@/components/post-card"
import { getPosts } from "@/lib/posts"

export default function Home() {
  const posts = getPosts()
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // 모든 태그 추출
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags || [])))

  // 태그 필터링
  const filteredPosts = selectedTag ? posts.filter((post) => post.tags?.includes(selectedTag)) : posts

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1 text-sm rounded-full ${!selectedTag ? "bg-slate-700 text-white" : "bg-slate-200"}`}
          >
            전체
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 text-sm rounded-full ${selectedTag === tag ? "bg-slate-700 text-white" : "bg-slate-200"}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {filteredPosts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

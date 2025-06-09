import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import type { Post } from "@/lib/posts"

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  // 슬러그 생성 (제목에서 공백을 하이픈으로 변환)
  const slug = post.title.toLowerCase().replace(/\s+/g, "-")

  // 내용 미리보기 (100자로 제한)
  const preview = post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content

  return (
    <Link href={`/${slug}`}>
      <div className="post-card glass-effect rounded-xl p-5 cursor-pointer">
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>

        <div className="flex flex-wrap gap-3 text-sm text-slate-600 mb-3">
          <div className="flex items-center gap-1">
            <User size={14} />
            <span>{post.author || "관리자"}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{new Date().toLocaleDateString()}</span>
          </div>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 bg-slate-100 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="text-slate-700 mb-4">{preview}</p>

        <div className="flex justify-end">
          <span className="text-sm font-medium text-slate-700 flex items-center gap-1">
            더 읽기
            <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  )
}

import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="w-80 border-r sidebar-bg overflow-y-auto">
      <div className="h-full flex flex-col p-6 sidebar-content">
        <div className="text-center mb-8">
          <p className="text-slate-600">개발과 기술에 관한 창의적 공간</p>
        </div>

        <div className="mb-8">
          <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
            <img src="/programmer-profile.png" alt="프로필 이미지" className="w-full h-full object-cover" />
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold">PBN</h2>
            <p className="text-sm text-slate-600">풀스택 개발자</p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3 border-b pb-2">카테고리</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-slate-800 text-slate-600">
                전체 글
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-slate-800 text-slate-600">
                프론트엔드
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-slate-800 text-slate-600">
                백엔드
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-slate-800 text-slate-600">
                데브옵스
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-slate-800 text-slate-600">
                알고리즘
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-auto">
          <h3 className="text-lg font-semibold mb-3 border-b pb-2">소셜 미디어</h3>
          <div className="flex justify-center gap-4">
            <a href="#" className="text-slate-600 hover:text-slate-900">
              <Github size={20} />
              <span className="sr-only">Github</span>
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}

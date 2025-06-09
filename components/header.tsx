import Link from "next/link"
import { Search, Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-[#a4b9e6] shadow-sm">
      <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-bold text-slate-800 pl-4">
              CodeCanvas
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="검색..."
                className="py-1 pl-8 pr-4 rounded-full text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
              <Search className="absolute left-2.5 top-1.5 h-4 w-4 text-slate-400" />
            </div>

            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

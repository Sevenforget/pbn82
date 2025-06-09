export default function Footer() {
  return (
    <footer className="bg-white border-t py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-slate-600">
          {/* 푸터의 저작권 정보를 변경합니다 */}
          <p>© {new Date().getFullYear()} CodeCanvas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

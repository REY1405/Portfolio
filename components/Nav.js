import Link from 'next/link'
export default function Nav(){ 
  return (
    <header className="fixed w-full z-40">
      <div className="max-w-6xl mx-auto px-6 py-3 nav-backdrop rounded-b-xl">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-400 text-white flex items-center justify-center font-bold">RK</div>
            <div>
              <div className="text-sm font-semibold">Rishi Kathal</div>
              <div className="text-xs text-slate-500">DevOps · SRE</div>
            </div>
          </div>
          <div className="flex gap-4 items-center text-sm">
            <Link href="#projects"><a className="hover:underline">Projects</a></Link>
            <Link href="#blog"><a className="hover:underline">Blog</a></Link>
            <Link href="#contact"><a className="hover:underline">Contact</a></Link>
            <a href="https://www.linkedin.com/in/rishi-kathal-40412814b" target="_blank" rel="noreferrer" className="px-3 py-1 bg-slate-100 rounded">LinkedIn</a>
          </div>
        </nav>
      </div>
    </header>
  )
}

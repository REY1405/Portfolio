export default function ProjectCard({title,desc,link,tags=[]}){
  return (
    <article className="p-6 bg-white rounded-2xl shadow hover:shadow-md border">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
      <div className="mt-4 flex gap-2 flex-wrap">
        {tags.map(t=> <span key={t} className="text-xs bg-slate-100 px-2 py-1 rounded">{t}</span>)}
      </div>
      <div className="mt-4">
        <a href={link} className="text-sm text-indigo-600 hover:underline">View repo</a>
      </div>
    </article>
  )
}

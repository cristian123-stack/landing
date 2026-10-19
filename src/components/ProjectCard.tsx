import type { Project } from "../data";
import Tags from "./Tags";

export default function ProjectCard({ p, featured = false }: { p: Project; featured?: boolean }) {
  return (
    <article className={featured ? "featured" : "card"}>
      <h3>{p.name}</h3>
      <p className="kind">{p.kind}</p>
      <p>{p.summary}</p>
      <ul className={featured ? "feat" : undefined} style={featured ? undefined : { paddingLeft: 20, margin: "0 0 16px" }}>
        {p.highlights.map(h => <li key={h}>{h}</li>)}
      </ul>
      <Tags items={p.stack} label="Tecnologías" />
      {p.note && <p className="note">{p.note}</p>}
      {p.slot && <div className="slot">{p.slot}</div>}
      {(p.demoUrl || p.codeUrl) && (
        <div className="btns">
          {p.demoUrl && <a className="btn primary" href={p.demoUrl} target="_blank" rel="noopener noreferrer">Visitar la demo</a>}
          {p.codeUrl && <a className="btn" href={p.codeUrl} target="_blank" rel="noopener noreferrer">Ver código</a>}
        </div>
      )}
    </article>
  );
}

import Navbar from "./components/Navbar";
import Photo from "./components/Photo";
import Tags from "./components/Tags";
import ProjectCard from "./components/ProjectCard";
import { about, education, featured, job, others, profile, skills } from "./data";

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Saltar al contenido</a>
      <Navbar name={profile.name} />
      <main id="main">
        <section className="hero" id="inicio">
          <div className="wrap hero-grid">
            <div>
              <h1>{profile.name}</h1>
              <p className="role">{profile.role}</p>
              <p>{profile.intro}</p>
              <div className="btns">
                <a className="btn primary" href="#proyectos">Ver proyectos</a>
                <a className="btn" href="#contacto">Contactarme</a>
                <a className="btn" href={profile.cvPath} download>Descargar CV (PDF)</a>
              </div>
            </div>
            <div className="right">
              <Photo src={profile.photoPath} />
              <div className="code" aria-label="Resumen en formato JSON">
{`"rol": "Full Stack Developer",
"backend": ["Node.js", "Express", "Django"],
"frontend": ["React", "Vite"],
"datos": ["PostgreSQL", "MySQL", "SQLite"],
"integraciones": ["Stripe", "WhatsApp API"]`}
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi"><div className="wrap">
          <h2>Sobre mí</h2>
          {about.map(t => <p key={t}>{t}</p>)}
        </div></section>

        <section id="habilidades"><div className="wrap">
          <h2>Habilidades técnicas</h2>
          <div className="skills">
            {skills.map(s => <div key={s.title}><h3>{s.title}</h3><Tags items={s.items} /></div>)}
          </div>
        </div></section>

        <section id="proyectos"><div className="wrap">
          <h2>Proyectos destacados</h2>
          <ProjectCard p={featured} featured />
          <div className="two">{others.map(p => <ProjectCard key={p.name} p={p} />)}</div>
        </div></section>

        <section id="experiencia"><div className="wrap">
          <h2>Experiencia profesional</h2>
          <div className="job">
            <h3>{job.title}</h3>
            <p className="meta">{job.meta}</p>
            <ul>{job.items.map(i => <li key={i}>{i}</li>)}</ul>
          </div>
        </div></section>

        <section id="formacion"><div className="wrap">
          <h2>Formación y certificaciones</h2>
          <ul className="edu">{education.map(e => <li key={e.title}>{e.title}<span>{e.where}</span></li>)}</ul>
        </div></section>

        <section id="contacto"><div className="wrap">
          <h2>Contacto</h2>
          <p>Si tienes una oportunidad en desarrollo Full Stack, backend o automatización, escríbeme.</p>
          <div className="btns">
            <a className="btn primary" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div></section>
      </main>
      <footer><div className="wrap">© 2026 {profile.name}</div></footer>
    </>
  );
}

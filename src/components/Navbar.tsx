import { useState } from "react";

const links = [
  ["sobre-mi", "Sobre mí"], ["habilidades", "Habilidades"], ["proyectos", "Proyectos"],
  ["experiencia", "Experiencia"], ["formacion", "Formación"],
] as const;

export default function Navbar({ name }: { name: string }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header>
      <div className="wrap">
        <nav aria-label="Principal">
          <a className="brand" href="#inicio">{name}</a>
          <button className="menu" aria-expanded={open} aria-controls="links" onClick={() => setOpen(o => !o)}>Menú</button>
          <div className={`links${open ? " open" : ""}`} id="links">
            {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={close}>{label}</a>)}
            <a className="cta" href="#contacto" onClick={close}>Contacto</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

import { useState } from "react";

export default function Photo({ src }: { src: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div className="photo" role="img" aria-label="Espacio reservado para fotografía profesional">Agrega tu foto en public/foto-perfil.jpg<br />(proporción 4:5)</div>;
  }
  return <div className="photo has"><img src={src} alt="Cristian Muñoz" onError={() => setFailed(true)} /></div>;
}

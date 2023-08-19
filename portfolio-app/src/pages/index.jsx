import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Realizar la solicitud a /api/hello
    fetch('/api/skills/allSkills')
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta de /api/hello:', data);
      })
      .catch(error => {
        console.error('Error al hacer la solicitud:', error);
      });
  }, []);

  return (
    <div>
      <h1>Holaa</h1>
    </div>
  );
}

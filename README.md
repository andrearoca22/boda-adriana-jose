# Boda de Adriana y José

Web estática preparada para GitHub Pages.

## Antes de publicar

1. Renombra el repositorio a `boda-adriana-jose` (el carácter `&` no es recomendable en URLs).
2. Coloca `logo_Adriana.jpeg` dentro de una carpeta `assets/`.
3. En `script.js`, sustituye `rsvpEndpoint` por la URL de la implementación de Google Apps Script.
4. Cambia en `index.html` los marcadores del hotel y de la fecha límite del RSVP.

## Google Sheets

1. Crea una hoja con una pestaña llamada `Respuestas`.
2. Añade como encabezados: Fecha, Nombre, Asistencia, Acompañantes, Alimentación, Embarazo, Comentarios.
3. En Google Sheets abre Extensiones → Apps Script y copia `apps-script/Code.gs`.
4. Implementa como aplicación web, ejecutando como tú y con acceso para cualquier usuario.
5. Copia la URL resultante en `script.js`.

## GitHub Pages

En el repositorio: Settings → Pages → Deploy from a branch → `main` → `/root`.

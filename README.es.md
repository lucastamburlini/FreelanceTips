# Freelance Tips

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Despliegue](#despliegue)
- [Funcionalidades Principales](#funcionalidades-principales)
- [Tareas asignadas y realizadas](#tareas-asignadas-y-realizadas)
- [Restricciones tecnológicas](#restricciones-tecnológicas)
- [Restricciones de trabajo](#restricciones-de-trabajo)
- [Instalación](#instalación)
- [Uso](#uso)
- [Variables de Entorno](#variables-de-entorno)
- [Pruebas con Playwright](#pruebas-con-playwright)

## Descripción del Proyecto

Freelance Tips es una aplicación web que representa una comunidad dedicada a compartir información sobre freelancing con el resto del mundo. La plataforma permite a los usuarios descubrir y compartir consejos prácticos, trucos y estrategias para tener éxito como freelancer en el competitivo mundo laboral actual.

## Despliegue
La aplicación está desplegada en Vercel y puedes acceder a ella en https://freelance-tips.vercel.app/.

## Funcionalidades Principales

- Página de inicio (Root) que describe la plataforma web.
- Navbar presente en todas las rutas con enlaces a al menos 3 diferentes rutas.
- Diseño estilístico coherente en toda la aplicación.
- Utilización de React (bootstrapped con Vite) como única tecnología.
- Uso de imágenes y recursos externos (con assets locales como último recurso).
- No se utilizan elementos `<a>` de HTML para el routing para proporcionar una experiencia de SPA al usuario.

## Tareas asignadas y realizadas

- [x] Crear una aplicacion web que represente una comunidad dedicada a compartir información con el resto del mundo (puede ser sobre cualquier topico que elija el estudiante)  
- [x] Tiene que tener una pagina Root que hable sobre la plataforma web
- [x] tiene que haber un Navbar que este presente en todas las rutas de la aplicación y que redirija como minimo a 3 rutas diferentes (Root incluida)
- [x] Tratar de traer imagenes y recursos desde el internet (hardcodearlo en el codigo y assets locales como ultima opción)
- [x] Tratar de proporcionarle un diseño estilístico coherente a la aplicación 
- [x] No utilizar elementos `<a>` de HTML para el routing puesto que no proporcionan una experiencia de SPA al usuario


Restricciones tecnológicas:

- [x] Si o si se debe utilizar React (bootstrapeado con Vite )
- [x] No crear un servidor externo a la aplicación

Restricciones de trabajo: 

- [x] Tiene que ser realizado individualmente

## Instalación
Para instalar las dependencias del proyecto, ejecuta:

```bash
npm install
``` 

## Uso
Para ejecutar la aplicación en un entorno local, utiliza el siguiente comando:

```bash
npm run dev
``` 

Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en http://localhost:5173 o tu puerto de preferencia.

## Variables de Entorno

El proyecto utiliza las siguientes variables de entorno para la configuración de EmailJS:

- `EMAILJS_USERID`: Tu ID de usuario de EmailJS.
- `EMAILJS_SERVICEID`: El ID de tu servicio de EmailJS.
- `EMAILJS_TEMPLATEID`: El ID de la plantilla de EmailJS que deseas utilizar.

Asegúrate de crear un archivo `.env.local` en la raíz del proyecto y agregar estas variables de entorno.

# Pruebas con Playwright

Este proyecto utiliza Playwright para realizar pruebas automatizadas, las mismas están divididas por vistas. Para ejecutar las pruebas con Playwright, sigue los siguientes pasos:

Primero, asegúrate de tener todas las dependencias necesarias instaladas. Puedes instalarlas utilizando npm:

```bash
npm install
```

Para ejecutar las pruebas con Playwright, utiliza el siguiente comando:

```bash
npx playwright test
```

Este comando ejecutará las pruebas automatizadas y abrirá un navegador para mostrar el proceso. También, puedes ver los resultados de las pruebas en la consola.

```bash
npx playwright show-report
```

Esto abrirá un navegador con el reporte detallado de las pruebas, donde podrás ver información sobre los casos de prueba, resultados y errores encontrados.
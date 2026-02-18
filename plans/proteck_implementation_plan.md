### **Plan de Implementación Completo**

Este plan se divide en fases para un desarrollo estructurado y ordenado.

**Fase 1: Configuración Inicial del Proyecto (Duración: 1 día)**

1.  **Inicializar Proyecto Astro:**
    *   Ejecutar el comando `npm create astro@latest speproteck-website` y seguir los pasos para un proyecto con TypeScript (Strict).
2.  **Añadir Integraciones:**
    *   Tailwind CSS: `npx astro add tailwind`
    *   Vercel Adapter: `npx astro add vercel`
    *   React (para interactividad del menú móvil): `npx astro add react`
3.  **Configurar `tailwind.config.mjs`:**
    *   Añadir la paleta de colores y la familia de fuentes 'Roboto' en la sección `theme.extend`.
4.  **Crear Estilos Globales:**
    *   En `src/styles/global.css`, definir los estilos base para `body`, como `font-family` y `color` (`text-body`).
5.  **Estructura de Carpetas:**
    *   Crear las carpetas: `src/components`, `src/layouts`, `src/assets/images`, `src/content` (para futuras colecciones).
    *   Colocar todos los recursos (imágenes, video) en `src/assets/images/`.

**Fase 2: Desarrollo de Componentes y Layouts Core (Duración: 2 días)**

1.  **Crear el Layout Principal (`src/layouts/Layout.astro`):**
    *   Definir la estructura HTML base (`html`, `head`, `body`).
    *   Importar `global.css`.
    *   Añadir un componente `<Header />` (que contendrá el Navbar) y un `<Footer />`.
    *   Incluir un `<slot />` para el contenido de las páginas.
2.  **Desarrollar el Componente `Navbar.astro` (`src/components/Navbar.astro`):**
    *   Implementar la estructura de escritorio con los enlaces de navegación y el dropdown.
    *   Crear la vista móvil con un botón "hamburguesa". Se puede usar un componente de React (`MobileMenu.jsx`) para gestionar el estado de apertura/cierre del menú, convirtiéndolo en una "Astro Island".
3.  **Desarrollar el Componente `Footer.astro` (`src/components/Footer.astro`):**
    *   Diseñar el pie de página con el fondo `dark-bg`, logo blanco y la información de contacto requerida.

**Fase 3: Construcción de Páginas (Duración: 4 días)**

1.  **Desarrollar la Página de Inicio (`src/pages/index.astro`):**
    *   Construir sección por sección, creando componentes reutilizables si es necesario (ej. `ServiceCard.astro`).
    *   Usar el componente `<Image />` de Astro para todas las imágenes y `<video>` para el fondo del hero.
    *   Instalar `lucide-react` para los iconos y usarlos como islas de Astro.
2.  **Desarrollar la Página de Contacto (`src/pages/contactos.astro`):**
    *   Crear un componente para el formulario: `ContactForm.jsx` (React) para manejar el estado de los campos.
    *   Para la gestión del envío, se utilizará **Resend** a través de un endpoint de API serverless (`src/pages/api/contact.ts`). Se deberá instalar el SDK de Resend y configurar la API Key como variable de entorno en Vercel.
3.  **Desarrollar Plantilla y Página "Quiénes Somos" (`src/pages/quienes-somos.astro`):**
    *   Crear un layout genérico para páginas internas (`src/layouts/PageLayout.astro`) que contenga un título y un área de contenido.
    *   Construir la página `quienes-somos.astro` usando este layout.
4.  **Crear Placeholders para Páginas Restantes (`/productos`, `/seguridad-electronica`, etc.):**
    *   Crear archivos básicos para estas rutas para que la navegación no se rompa.

**Fase 4: Optimización y Pruebas (Duración: 2 días)**

1.  **Pruebas de Responsividad:**
    *   Verificar que todas las páginas y componentes se visualicen correctamente en al menos 3 puntos de quiebre (móvil, tableta, escritorio).
2.  **Optimización de Imágenes y Activos:**
    *   Confirmar que todas las imágenes usan el componente `<Image />` de Astro y se cargan con los formatos y tamaños adecuados.
3.  **Revisión de Accesibilidad (a11y) y SEO:**
    *   Utilizar herramientas como Lighthouse para auditar las páginas.
    *   Asegurarse de que todas las imágenes tienen `alt` text y los enlaces tienen `aria-label` si es necesario.
4.  **Linting y Formateo:**
    *   Ejecutar `npm run lint` y `npm run format` (si se configura) para asegurar la calidad y consistencia del código.

**Fase 5: Despliegue (Duración: 1 día)**

1.  **Conectar Repositorio a Vercel:**
    *   Subir el código a un repositorio de GitHub/GitLab/Bitbucket.
    *   Crear un nuevo proyecto en Vercel e importarlo. Vercel detectará automáticamente que es un proyecto de Astro.
2.  **Configurar el Proyecto en Vercel:**
    *   Configurar la API Key de Resend como variable de entorno (ej. `RESEND_API_KEY`) en Vercel.
3.  **Despliegue y Pruebas Finales:**
    *   Realizar el primer despliegue a producción.
    *   Probar toda la funcionalidad en el entorno de producción, especialmente el formulario de contacto.
    *   Asignar el dominio final.
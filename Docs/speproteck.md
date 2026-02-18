# Prompt para Desarrollo Web: Migración de WordPress a Astro (Proyecto Proteck)

Actúa como un **Ingeniero de Software Senior y experto en UI/UX**, especializado en **Astro v5**, **Tailwind CSS**, **TypeScript** y despliegues en **Vercel**.

Tu objetivo es generar el código base para migrar el sitio web corporativo "Proteck" (Servicios de Protección Electrónica) desde una exportación de WordPress a una arquitectura moderna en Astro.

**Restricciones y Configuración del Proyecto:**
1.  **Framework:** Astro v5+ (con soporte para Islas/Componentes de React si es necesario para interactividad compleja).
2.  **Estilos:** Tailwind CSS.
3.  **Despliegue:** Configurado para Vercel (`@astrojs/vercel`).
4.  **Imágenes:** NO uses URLs externas. Asume que todas las imágenes existen localmente en `src/assets/images/`. Usa el componente nativo `<Image />` de Astro para optimización.
5.  **Idioma:** El contenido del sitio debe estar en Español.

---

## 1. Configuración de Diseño (Design Tokens)

Configura el archivo `tailwind.config.mjs` y `src/styles/global.css` con los siguientes valores extraídos del sitio original:

* **Paleta de Colores:**
    * `primary`: `#1E3A5F` (Azul corporativo oscuro - Headers/Nav)
    * `secondary`: `#2B4C8C` (Azul medio - Fondos de sección/Gradientes)
    * `accent`: `#2A9D8F` (Verde azulado - Botones, Iconos, CTAs)
    * `text-body`: `#7A7A7A`
    * `dark-bg`: `#0F1E2E` (Footer)
    * `light-bg`: `#F8F9FA` (Fondos alternativos)
* **Tipografía:**
    * Fuente Principal: 'Roboto', sans-serif.
    * Títulos: Font-weight 700.

## 2. Arquitectura de Navegación

Implementa un componente `Navbar.astro` responsivo.
* **Logo:** `src/assets/images/logo-proteck.png`.
* **Menú Principal:**
    1.  Inicio (`/`)
    2.  Quiénes Somos (`/quienes-somos`)
    3.  Soluciones (Dropdown):
        * Seguridad Electrónica (`/seguridad-electronica`)
        * Telecomunicaciones (`/telecomunicaciones`)
        * *Nota: Incluir enlaces a sub-servicios como CCTV, GPS, Alarmas.*
    4.  Productos (`/productos`)
    5.  Contacto (`/contactos`) - Botón destacado (CTA).

## 3. Requerimientos de Componentes y Páginas

Genera los siguientes archivos con código semántico y accesible:

### A. Configuración y Layouts
1.  **`package.json`**: Incluye dependencias para Astro, Tailwind, React (opcional para menú móvil), y Vercel adapter.
2.  **`astro.config.mjs`**: Configurado para Vercel (`output: 'static'` o `'server'` si se requiere SSR para el formulario).
3.  **`src/layouts/Layout.astro`**:
    * Debe incluir `<Navbar />` y `<Footer />`.
    * **Footer:** Logo en blanco (`logo-proteck-blanco.png`), redes sociales, enlaces rápidos, y datos de contacto (Tel: 2248-1071, Email: info@speproteck.com, Dirección: 400 este del Gimnasio Nacional).

### B. Página de Inicio (`src/pages/index.astro`)
Migra el contenido detectado en el XML:
* **Hero Section:** Video de fondo (`home-proteck-video-bg.mp4`) con overlay oscuro. Título: "SERVICIOS DE PROTECCIÓN ELECTRÓNICA - SIEMPRE SEGURO".
* **Grid de Servicios:** 4 Tarjetas (GPS, CCTV, ALARMA, CONTROL DE ACCESO). Usa iconos de una librería como `lucide-react`.
* **Soluciones por Industria:** Grid con imágenes (`placeholder-solution.jpg` como fallback) para Logística, Gestión de Activos, Alquiler, Gobierno.
* **Productos Destacados:** Sección con imágenes y títulos (R58L GPS, R12L GPS, V7 Cámara).
* **CTA Final:** "¿Listo para Proteger sus Activos?" con botón al contacto.

### C. Página de Contacto (`src/pages/contactos.astro`)
* Información de contacto visual.
* **Componente de Formulario:** Crea un formulario funcional (campos: Nombre, Email, Teléfono, Servicio de Interés [Select], Tipo de Inmueble, Mensaje).
* *Nota:* Sugiere cómo manejar el envío del formulario en Vercel (ej: Vercel Forms o un API endpoint simple).

### D. Páginas Internas (Plantilla Genérica)
Crea una estructura básica para `src/pages/quienes-somos.astro` que incluya la sección "Nuestra Historia" y "Nuestros Valores" (Innovación, Confiabilidad, Servicio, Seguridad, Experiencia).

---

## Entregables

Por favor, provee el código en bloques separados para:
1.  `tailwind.config.mjs`
2.  `src/layouts/Layout.astro`
3.  `src/components/Navbar.astro`
4.  `src/pages/index.astro`
5.  `src/pages/contactos.astro`

Asegúrate de que el código utilice las mejores prácticas de Astro v5 (Content Collections si aplica, optimización de imágenes, y tipado estricto con TypeScript).

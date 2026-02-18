### **Documento de Requisitos del Producto (PRD) - Migración del Sitio Web Proteck**

#### 1. Resumen Ejecutivo
El proyecto consiste en la migración del sitio web corporativo "Proteck" desde su plataforma actual (exportación de WordPress) a una arquitectura web moderna y de alto rendimiento. El nuevo sitio se construirá con **Astro v5**, se estilizará con **Tailwind CSS**, se escribirá en **TypeScript** y se desplegará en **Vercel**. El objetivo es mejorar la velocidad de carga, la seguridad, la experiencia de usuario (UX) y facilitar el mantenimiento futuro.

#### 2. Objetivos del Proyecto
*   **Mejora de Rendimiento:** Lograr tiempos de carga casi instantáneos gracias a la arquitectura de Astro (cero JavaScript por defecto).
*   **Modernización del Stack Tecnológico:** Adoptar herramientas modernas que mejoran la experiencia de desarrollo y la mantenibilidad.
*   **Optimización de Activos:** Utilizar las capacidades de Astro para optimizar imágenes y servir contenido estático de manera eficiente.
*   **Experiencia de Usuario (UX) Responsiva:** Garantizar una navegación fluida y coherente en dispositivos de escritorio, tabletas y móviles.
*   **Despliegue Simplificado:** Configurar un flujo de trabajo de Integración y Despliegue Continuo (CI/CD) a través de Vercel.

#### 3. Alcance del Proyecto

**En Alcance:**
*   Desarrollo de 5 páginas clave: Inicio, Quiénes Somos, Soluciones (con estructura para sub-páginas), Productos y Contacto.
*   Implementación de un diseño completamente responsivo (mobile-first).
*   Creación de componentes reutilizables como la barra de navegación y el pie de página.
*   Configuración del proyecto para despliegue en Vercel.
*   Implementación de un formulario de contacto funcional.
*   Uso exclusivo de imágenes locales optimizadas.
*   Todo el contenido del sitio estará en español.

**Fuera de Alcance:**
*   Migración de un blog o sistema de noticias.
*   Implementación de un panel de administración (CMS) para la edición de contenido.
*   Funcionalidades de comercio electrónico.
*   Sistemas de autenticación o cuentas de usuario.
*   Creación de contenido nuevo (se utilizará el contenido del `XML` y placeholders).

#### 4. Requisitos Funcionales y de Diseño

**4.1. Identidad Visual (Design System)**
*   **Paleta de Colores:**
    *   `primary`: `#1E3A5F`
    *   `secondary`: `#2B4C8C`
    *   `accent`: `#2A9D8F`
    *   `text-body`: `#7A7A7A`
    *   `dark-bg`: `#0F1E2E`
    *   `light-bg`: `#F8F9FA`
*   **Tipografía:**
    *   Fuente Principal: 'Roboto', sans-serif.
    *   Títulos: Font-weight 700.

**4.2. Arquitectura de Navegación (`Navbar.astro`)**
*   El logo (`logo-proteck.png`) debe enlazar a la página de inicio.
*   El menú debe ser responsivo (menú hamburguesa en móviles).
*   **Elementos del Menú:**
    1.  Inicio (`/`)
    2.  Quiénes Somos (`/quienes-somos`)
    3.  Soluciones (Menú desplegable):
        *   Seguridad Electrónica (`/seguridad-electronica`)
        *   Telecomunicaciones (`/telecomunicaciones`)
    4.  Productos (`/productos`)
    5.  Contacto (`/contactos`) (presentado como un botón CTA).

**4.3. Requisitos por Página**
*   **Layout Principal (`Layout.astro`):**
    *   Contendrá el `Navbar` y el `Footer`.
    *   **Footer:** incluirá el logo en blanco, iconos de redes sociales, enlaces de navegación y la información de contacto (Teléfono, Email, Dirección).
*   **Página de Inicio (`index.astro`):**
    *   **Sección Hero:** Video de fondo con superposición oscura y título principal.
    *   **Grid de Servicios:** 4 tarjetas destacando GPS, CCTV, Alarma, Control de Acceso.
    *   **Soluciones por Industria:** Grid con imágenes para Logística, Gobierno, etc.
    *   **Productos Destacados:** Sección para mostrar productos específicos como R58L GPS.
    *   **CTA Final:** Llamada a la acción que dirija a la página de contacto.
*   **Página de Contacto (`contactos.astro`):**
    *   Mostrar la información de contacto de forma visible.
    *   **Formulario de Contacto:** Debe ser funcional y contener los campos: Nombre, Email, Teléfono, Servicio de Interés, Tipo de Inmueble y Mensaje. El envío debe ser gestionado a través de una solución compatible con Vercel.
*   **Página Quiénes Somos (`quienes-somos.astro`):**
    *   Debe contener secciones para "Nuestra Historia" y "Nuestros Valores".

#### 5. Requisitos No Funcionales
*   **Rendimiento:** El sitio debe alcanzar una puntuación superior a 90 en Lighthouse en la categoría de Performance.
*   **Accesibilidad (a11y):** El código debe ser semántico (uso correcto de etiquetas HTML5) para garantizar la accesibilidad.
*   **SEO:** Las páginas deben tener títulos y meta descripciones únicas. Astro debe generar un `sitemap.xml`.
*   **Compatibilidad:** El sitio debe ser compatible con las últimas dos versiones de los principales navegadores (Chrome, Firefox, Safari, Edge).

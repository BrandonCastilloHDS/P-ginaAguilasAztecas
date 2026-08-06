# Águilas Aztecas 

---

## Estructura del proyecto

```
AguilasAztecas/
│
├── public/                        # Archivos estáticos (accesibles desde el navegador)
│   ├── img/
│   │   ├── aviones/               # Fotos y video de los aviones
│   │   │   └── 01 Texans (1).mp4  # Video de fondo del Hero
│   │   ├── galeria/               # Fotos adicionales para la galería
│   │   ├── pilotos/               # Fotos de los pilotos
│   │   └── logos/                 # Logos institucionales (FAMEX, etc.)
│   └── videos/                    # Videos adicionales
│
├── src/
│   ├── pages/                     # Una página por sección del sitio
│   │   ├── Home.jsx               # Página principal (/)
│   │   ├── HistoriaPage.jsx       # Página Historia (/historia)
│   │   ├── MisionPage.jsx         # Página Misión (/mision)
│   │   ├── ParticipacionesPage.jsx# Página Participaciones (/participaciones)
│   │   ├── GaleriaPage.jsx        # Página Galería (/galeria)
│   │   └── ContactoPage.jsx       # Página Contacto (/contacto)
│   │
│   ├── components/                # Componentes reutilizables
│   │   ├── Navbar.jsx             # Barra de navegación (aparece en todas las páginas)
│   │   ├── Hero.jsx               # Sección principal con video de fondo y título
│   │   ├── StatsBar.jsx           # Barra dorada con cifras clave (1915, 2017, etc.)
│   │   ├── Historia.jsx           # Sección de historia con timeline
│   │   ├── MisionVision.jsx       # Cards de Misión, Visión y Objetivo
│   │   ├── Participaciones.jsx    # Timeline de espectáculos aéreos
│   │   ├── Heraldica.jsx          # Descripción de la rodela heráldica
│   │   ├── Galeria.jsx            # Grid de fotos y videos
│   │   └── Footer.jsx             # Pie de página
│   │
│   ├── App.jsx                    # Router principal — define las rutas del sitio
│   ├── main.jsx                   # Punto de entrada de React
│   └── index.css                  # Estilos globales (Tailwind + scroll suave)
│
├── index.html                     # HTML base (aquí se cargan las fuentes de Google)
├── package.json                   # Dependencias del proyecto
└── vite.config.js                 # Configuración de Vite
```

---

## Paleta de colores

| Color | Hex | Uso |
|---|---|---|
| Navy oscuro | `#00296b` | Fondo principal, navbar, footer |
| Navy medio | `#003f87` | Sección Historia, cards |
| Azul medio | `#00519e` | Sección Heráldica, acentos |
| Azul cielo | `#0093d1` | Detalles, textos secundarios |
| Dorado | `#fdc400` | Acento principal, bordes, botones CTA |
| Dorado claro | `#ffe84f` | Hover, acentos secundarios |

---

## Rutas del sitio

| URL | Página | Archivo |
|---|---|---|
| `/` | Inicio | `pages/Home.jsx` |
| `/historia` | Historia | `pages/HistoriaPage.jsx` |
| `/mision` | Misión | `pages/MisionPage.jsx` |
| `/participaciones` | Participaciones | `pages/ParticipacionesPage.jsx` |
| `/galeria` | Galería | `pages/GaleriaPage.jsx` |
| `/contacto` | Contacto | `pages/ContactoPage.jsx` |

---

## Tecnologías

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router v7](https://reactrouter.com/)
- Fuentes: [Barlow Condensed](https://fonts.google.com/specimen/Barlow+Condensed) + [Rajdhani](https://fonts.google.com/specimen/Rajdhani)


---

# Link de la página final 

https://escuadrilla-aguilas-aztecas.famex-mex.com/

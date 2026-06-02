import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Escuela de Posgrado UNSAAC",
    short_name: "Posgrado UNSAAC",
    description: "Escuela de Posgrado de la Universidad Nacional de San Antonio Abad del Cusco",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1e3a5f",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  }
}

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Reglas Estrictas del Proyecto (Vesla Jobs)

1. **Uso Obligatorio de shadcn/ui**:
   - Todos los componentes de interfaz deben seguir los patrones y primitivas de **shadcn/ui** (tokens semánticos, variantes CVA, botones, dropdowns, selects, badges, separators, dialogs).
   - Prohibido crear barras de filtros invasivas con decenas de pills saturando la pantalla. Usar Selects/Dropdowns compactos, limpios y elegantes.

2. **Aprovechamiento Eficiente del Espacio (Widescreen App Layout)**:
   - La aplicación debe adaptarse de forma natural a pantallas anchas (`max-w-[1600px]` o fluido), evitando márgenes gigantescos vacíos.
   - En pantallas de escritorio, la vista dividida (Split-View) debe funcionar como una aplicación real: altura fijada al viewport (`h-[calc(100vh-...)]`), con scroll independiente en la lista izquierda y panel de detalle derecho sticky y estilizado.

3. **Separación Estricta de Código (SoC)**:
   - Prohibido mezclar lógica de negocio dentro de los archivos JSX/HTML. Toda la lógica de filtros, debouncing, selección y estado vive en custom hooks (`hooks/`).
   - Todos los estilos y variantes deben ser estructurados con Tailwind CSS y CVA/objetos de estilos dedicados (`styles.ts`), sin desorden ni concatenaciones ilegibles en el JSX.

4. **Tema Claro Corporativo y Minimalista**:
   - Paleta corporativa sobria, nítida y minimalista (estilo LinkedIn/Linear): fondo sutil `#f3f2ef` o `#f8fafc`, tarjetas blancas puras `#ffffff`, bordes finos `#e2e8f0`, azul corporativo `#0a66c2`, tipografía legible y jerarquía visual clara.


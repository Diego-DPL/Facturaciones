# Facturas y Presupuestos

Este proyecto es una aplicación web para la gestión de facturas y presupuestos. Está construido con React y utiliza Tailwind CSS para el diseño.

## Características

- Iniciar sesión
- Generar facturas
- Ver facturas
- Navegación entre diferentes secciones

## Tecnologías utilizadas

- React
- React Router
- Tailwind CSS

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona el repositorio:

   ```sh
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del proyecto:

   ```sh
   cd Facturas/Presupuestos
   ```

3. Instala las dependencias:

   ```sh
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```sh
   npm run dev
   ```

## Uso

Una vez que el servidor de desarrollo esté en funcionamiento, abre tu navegador y navega a [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## Estructura del proyecto

```plaintext
src/
├── components/          # Componentes reutilizables de la aplicación
│   ├── login.tsx        # Componente de inicio de sesión
│   ├── layout.tsx       # Componente de diseño
│   ├── generate-invoice.tsx # Componente para generar facturas
│   └── view-invoice.tsx # Componente para ver facturas
├── dashboard/           # Páginas del dashboard
│   └── page.tsx         # Página principal del dashboard
├── view-invoices/       # Página para ver facturas
│   └── page.tsx         # Página para ver facturas
├── App.tsx              # Componente principal de la aplicación
├── main.tsx             # Punto de entrada de la aplicación
└── index.css            # Archivo CSS principal
```

## Contribuir

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama:

   ```sh
   git checkout -b feature/nueva-caracteristica
   ```

3. Realiza tus cambios y haz commit:

   ```sh
   git commit -am 'Añade nueva característica'
   ```

4. Sube tus cambios a la rama:

   ```sh
   git push origin feature/nueva-caracteristica
   ```

5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

## Contacto

Para cualquier consulta o sugerencia, por favor contacta a [info@diegodpl.com](mailto:info@diegodpl.com).

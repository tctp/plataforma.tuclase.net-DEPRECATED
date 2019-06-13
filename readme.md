# Sitio de documentacion TCTP

## Como documentar
La aplicación web fue desarrollada con mdx y nextjs. Por lo cual para documentar se debe realizar a través del estandar Markdown, también se pueden agregar componentes React que hemos definido para la documetación.

Ademas el sitio esta preparado para trabajar con multilenguaje, por lo cual, tiene un sistema de localización con 'react-intl'.

Para agregar un nuevo contenido se debe agregar la ruta en el componente 'tctpMenuView' y en el titulo en defaultMessage, que luego se traducirá en config/mensajes.js, aquí están los términos para Español y Portugués los cuales están configurados por el momento.
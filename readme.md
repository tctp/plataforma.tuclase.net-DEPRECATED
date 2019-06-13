# Sitio de documentacion TCTP

## Como documentar
La aplicación web fue desarrollada con mdx y nextjs. 

Para arrancar la aplicación en desarrollo se debe ejecutar : 
```
npm run dev
```
Por lo cual para documentar se debe realizar a través del estandar Markdown, también se pueden agregar componentes React que hemos definido para la documentación, estos se encuentran bajo el directorio componentes/documentacion

- tctpVideo: 
    Este componente soporta un video en formato vimeo o youtube, solo agregando la Url.
    
    Ej:
```
    <TctpVideo video={'https://www.youtube.com/watch?v=rpn7cmT5kDQ'} />
```
- tctpVideoModal:
    Este componente soporta un video en formato vimeo o youtube, solo agregando la Url. Este componente se muestra como modal
    
    Ej:
```
    <TctpVideoModal video={'https://www.youtube.com/watch?v=rpn7cmT5kDQ'} />
```
- tctpTablaDocumentativa: este componente sirve para documentar tipos de elementos
    
    Ej:
```
    <TctpTablaDocumentativa header={['Tipos de preguntas','Descripción']} headerColor={'#FAFAFA'}>    
        <Fila 
            item="Pregunta de verdadero o falso (V/F)" 
            link="https://documentation.brightspace.com" 
            desc="Los estudiantes deben determinar si la afirmación que se presenta es correcta o incorrecta"/>
    </TctpTablaDocumentativa>
```
- tctpOuTipoTabla: Sirve para describir los roles en relación a la herramienta documentada, como también a los permisos de lectura y escritura.
    Se pueden agregar mas propiedades como lectura, escritura, mixto, etc. El componente creara una nueva fila con esta propiedad.

    Ej:
```
    <TctpOuTipoTabla 
        organizacion={{
            escritura:['AdminTuclase', 'AdminLocal'],
        }} 
        campus={{
            escritura:['AdminTuclase', 'AdminLocal', 'AdminUnidadNegocio'],        
        }} 
        plantillas={{
            lectura:['RevisorPlantilla', 'RevisorPlantillaS', 'RevPlantillaSOfertaS'], 
            escritura:['EditorPlantilla', 'EditorPlantillaS', 'EdPlantillaSOfertaS', 'JefeContenido']
        }} 
        ofertas={{
            lectura:['RevPlantillaSOfertaS', 'RevisorOferta', 'RevisorOfertaS', 'Tutor'], 
            escritura:['EdPlantillaSOfertaS', 'EditorOfertaS', 'EditorOferta', 'SupervisorTutor', 'Instructor', 'JefeContenido']        
        }} 
    />
```
- tctpPreguntas: Sive para mostrar preguntas que se despliegan como panel y además son anclables

Ej:
```
    <TctpPreguntas    
        titulo={'¿Cómo se desactivan los cuestionarios?'}
        html={'Si un cuestionario no requiere ser utilizado se puede desactivar desde "Restricciones" y esto no afecta al progreso, ya que, el progreso se ajusta al total de cuestionarios activos.'}
        imgPath={'/static/imagenes/cuestionarios/desactivar-cuestionario.png'}
    />
```

El sitio esta preparado para trabajar con multilenguaje, por lo cual, tiene un sistema de localización con 'react-intl'.

Para agregar un nuevo contenido se debe agregar la ruta en el componente 'tctpMenuView' y en el titulo en defaultMessage, que luego se traducirá en config/mensajes.js, aquí están los términos para Español y Portugués los cuales están configurados por el momento.
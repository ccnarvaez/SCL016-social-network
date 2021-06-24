# Creando una Red Social

## Índice

* [1. Selección del tema](#1-selección-de-tema)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. UX](#3-UX)



## 1. Selección del tema

La selección de la temática de la red social surge de una tormenta de ideas, en la que, como equipo, cada una planteo las ideas que podían ser un punto de partida para la red social.
Los temas que nos resultaron mas llamativos fueron sometidos a una encuesta para evaluar cual de ellos llamaría más la atención de las personas, de este proceso, la temática más votada fue una red social de reciclaje, para unir toda la información asociada a puntos de recolección (puntos limpios), información general sobre técnicas de reciclaje, conexión con otras personas para impulsar iniciativas.

## 2. Resumen del proyecto

Hoy en día como sociedad, hemos empezado a desarrollar una consciencia más estructurada respecto al impacto que las actividades humanas han ejercido sobre el medio ambiente.
Años atrás el tema de reciclaje no era tomado tan en cuenta, pero en la medida que enfrentamos las consecuencias de ciertas acciones desmedidas, nos hemos visto en la obligación de pensar en el impacto de nuestras actividades sobre el entorno.
Algo que llamó nuestra atención, y que nos hizo considerar este tema para el desarrollo de una app, es que en general no encontramos una aplicación de reciclaje que cubriera las funcionalidades de una red social, y pensamos que, dado el auge y la necesidad de implementación de un estilo de vida más consciente, el generar esta herramienta, podría ser un buen aporte, y facilitaría el impulso de las acciones ecologistas en forma efectiva.

## 3. UX

Una vez definido el tema de la red social, se procedió a hacer el diseño de la parte visual, haciendo uso de Figma, este diseño fue sometido a un proceso de testeo, donde el feedback recibido fue incluído en el diseño original, para que el resultado estuviera acorde con las expectivas y necesidades de los usuarios.

### 3.1 Historias de usuario

#### Historia de usuario 1
Usuario : Quiero saber cuales son las secciones de la página.
Solución: Crear barra de navegación que incluya secciones de la página.
Criterio mínimo de aceptación: Presentar links de acceso.
Product backlog: Crear header,añadir barra de navegación, colocar links de acceso.

#### Historia de usuario 2
Usuario : Necesito mantenerme enterado de las novedades de la red social.
Solución: Crear seccion de publicaciones destacadas.
Criterio mínimo de aceptación: Display con publicaciones añadidas por usuarios.
Product backlog: Crear display, crear contenedor para almacenar publicaciones.

#### Historia de usuario 3
Usuario : Quiero compartir contenido en la red
Solución: Crear sección para escribir publicaciones.
Criterio mínimo de aceptación: input para escribir, botón para enviar contenido.
Product backlog: Crear input, botón para almacenar info/ enviar a firebase, presentar listado de publicaciones. 

#### Historia de usuario 4
Usuario : Quiero poder editar mi publicación y/o eliminarla
Solución: implementar métodos de firestore "update" y "delete" para modificar contenido.
Criterio mínimo de aceptación: editar y eliminar una publicación
Product backlog: Añadir botones que activen acción de edición y eliminar, conectar con firestore para realizar en forma efectiva las acciones del CRUD.




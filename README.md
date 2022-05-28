<p align="center">
  <h1 align="center"><b>::cv-personal::</b></h1>
</p>

## Tabla de contenido

- [Comenzando](#comenzando)
- [Requerimientos del sistema](#requerimientos-del-sistema)
- [Configuración](#configuración)
- [Como Ejecutar](#como-ejecutar)
- [Imagenes](#imagenes)
- [Colaboradores](#colaboradores)

## Comenzando

Este manual permitirá continuar manejando el flujo de desarrollo en el mantenimiento de este proyecto, tanto en el procesamiento de los estilos como en el manejo optimo de las imágenes.

## Requerimientos del sistema

- [Node.js](https://nodejs.org/en/)

## Configuración

Confirmar instalación de los requerimientos del sistema.

    node -v
    npm -v

Instalar los siguientes paquetes para procesar los estilos con sus respectivos prefijos.

    npm i -D sass autoprefixer postcss postcss-cli onchange

Si ya ejecuto previamente esta instalación no es necesario volver a ejecutarla, se puede revisar que paquetes se tienen instalados localmente.

    npm list --depth=0

## Como Ejecutar

Abrir una terminal e ingresar a la carpeta raiz del theme del proyecto, en este caso la carpeta llamada *cv-personal*.

    cd  /cv-personal

Ejecutar la siguiente tarea transpilar los estilos - una vez se ejecuta queda en modo reactivo, escuchando los cambios que se generen en alguno de los archivos scss o sass.*

    npm run build

Para detener el anterior proceso solo se debe ejecutar **Ctrl + c**

## Imagenes

_En este ejemplo las imágenes fueron optimizadas para escritorio y para móvil. Con esto cumplimos con el uso adecuado de la etiqueta picture._

### Organización

- **slider:** Contenedor para las imagenes del slide principal.
- **events:** Contenedor para las imagenes de los "slides" de eventos.
- **misc:** Contenedor para los iconos.

## Colaboradores

- Duvan Alexis Valencia Munca <d.alexis.valencia@gmail.com>

# Práctica Nodepop.

## Descargar el repositorio o clonarlo.
> 

## Instalar las dependencias.

> npm install

## Inicializar la base de datos.

> npm run iniciarDB

## Para arrancar el proyecto podemos usar:

Para trabajar el producción:

> npm run start

Para trabajar en desarrollo (facilita ver los cambios en el momento):

> nodemon 
o
> npm run dev

## Rutas del proyecto:

### Ruta a la web:

> http://localhost:3000

En esta ruta obtendremos todos los anuncios existentes y podremos aplicar los filtros necesarios.

* Nombre
> http://localhost:3000/?nombre=mo
* Venta (un producto está a la venta si es True o está siendo buscado si es False)
> http://localhost:3000/?venta=true
* Tags
> http://localhost:3000/?tags=mobile,motor
* Precio (usando X-, -X o X-Y para los intervalos del precio)
> http://localhost:3000/?precio=50-400
* Se pueden mezclar diferentes filtros de búsqueda, para una mayor precisión:
> http://localhost:3000/?precio=50-400&tags=motor

### Ruta a la API:

> http://localhost:3000/api

Esta ruta devolverá un JSON con todos los anuncios existentes. Sobre esta URL podremos aplicar los filtros existentes para nuestra búsqueda al igual que en la ruta Web.

Además podemos utilizar el método POST para crear nuevos anuncios.




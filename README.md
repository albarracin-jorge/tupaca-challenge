# CHALLENGE TUPACA
 <!-- todo: indice, requerimientos, formas de correr el proyecto en docker, prod y dev, estructura de carpetas, observaciones -->
## Especificaciones Técnicas
Las especificaciones del challenge se pueden ver en [este enlace](./Challenge%20Técnico.pdf)

## Requisitos

- Node 20.4.0
- Mongo 6^

## Instrucciones

### Clonar repositorio
~~~
git clone https://github.com/albarracin-jorge/tupaca-challenge.git
~~~

### Instalar dependencias
~~~
cd tupaca-challenge
npm install && npm run i-client
~~~

### Ejecutar entorno de desarrollo
Servidor:
~~~
npm run server 
~~~
Cliente:
~~~
cd cliente
npm run dev
~~~

### Ejecutar servidor y cliente + build
~~~
npm run prod
~~~

#### Nota: El servidor se conecta a Mongo por medio de autenticación, en caso de que mongo no cuente con autenticación remover las opciones que se incluyen como parámetro en la función mongoose.connect()

## Estructura del proyecto
~~~
├── build                                >> outdir de tsc
|
├── client                               >> codigo de react
|   ├── dist                             >> build de vite
│   |
│   └── src
│       ├── components
|       |    └── ...
|       |
│       ├── fonts
│       |   
│       └── utils
|           ├── const.ts
|           ├── handler.ts             
│           └── fetch.ts 
|                                         >> codigo del servidor
├── src 
│   ├── controller
│   │   └── task.controller.ts             
│   │
│   ├── model
│   │   └── task.model.ts
│   │
│   ├── routes
│   │   └── task.route.ts
│   │
│   ├── services
│   │   └── schema.ts
│   │
│   ├── conn.ts                           >> configuracion a mongodb
│   ├── index.ts
│   └── types.d.ts                         
│
└── README.md
~~~

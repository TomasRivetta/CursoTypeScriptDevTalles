# Curso TypeScript DevTalles

## Introduccion a TypeScript

A javaScript le falta:

- Tipado de variables
- Errores en tiempo de escritura
- Auto completado dependiendo de las variables
- Clases y modulos
- Validacion de objetos dentro de objetos
- Tipado de respuestas HTTP

Problemas comunes:

- Errores porque una bariable no estaba definida
- Errores porque el objeto no tiene la propiedad
- Errores porque no se tiene idea como trabaja una funcion
- Errores porque se sobre escriben variables, clases o funciones
- Errores porque el codido colisiona con el de otro
- Errores porque colocamos una mayuscula o minuscula

Todos los problemas de arriba, son tratados de resolver por TypeScript

TypeScript:

No puede ejecugtarse de manera directa en el navegador, todo el codigo de TS se transpila a JS, ya que JS es soportado por el navegador web

Documentacion: https://www.typescriptlang.org/docs/handbook/intro.html

Para transpilar de TS a JS colocamos en la consola en la raiz del proyecto, ponemos
`tsc nombreArchivo.ts`

### TSConfig.json

Colocamos en consola: `tsc --init`

este archivo es un archivo json, es un archivo de configuracion de TS

ahora podemos colocar solo `tsc` en consola para que transpile usando la configuracion del archivo tsconfig

### Modo observador - Watch mode

Para no tener que andar poniendo el comando por cada archivo ts
`tsc --w`
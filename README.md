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

## Tipos Basicos

Tipos de datos

Primitivos:

- string
- Number
- Boolean
- SYMBOL

Compuestos:

- Objetos literales
- Funciones
- Clases
- Arreglos

Documentacion para ver tipo de datos: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

Realizamos una funcion auto invocada para que cuando haya mas archivos ts en el mismo directorio no choquen entre ellos

```typeScript
(() => {
    //Logica
})()
```

### Booleans

Al lado de la asignacion del nombre de variable :boolean para especificar que es un booleano

### Numbers - Numeros

al lado de cada nombreVariable :number

Any - cualquier tipo
undefined - no tiene valor

### Strings - Cadenas de caracteres

al lado de cada nombreVariable :string

### Tipo Any

Hay que usarlo lo menos posible, practicamente nunca, si lo especifico como tipo any es cualquier valor

Realizar casting, especificarle a typescript que trate de tal forma a una variable
Tratar a la variable avenger como un string
console.log((avenger as string).chartAt(0))
console.log(<number>avenger.toFixed(2));

### Arrays - Arreglos

### Tuples - Tuplas

designo despues del nombre de la variable : [ tipoValor1,tipoValor2,etc ]

### Enum - Enumeraciones

Son formas de manejar numeros

enum nombreEnum {
variable, // 0
variable2, // 1
variable3, // 3
}

### Void - Vacio

void significa literal vacio, que no hay nada
todo lo que no tenga return tal
devuelve un undefined

void es una manera de decirle a TS que no hay valor de retorno

```TS
  function nombreFuncion(): void // number,string,etc
  {}
  const callSuperMan = (): void => {}

  const a = nombreFuncion();
  console.log(a); // undefined
```

### Never - Nunca

No pueden tener un punto alcanzable, no debe terminar exitosamente

despues de usar una funcion con never no se ejecuta nada despues de eso

### Null y Undefined

undefined es nada

## TAREAS

| Seccion | Numero | Tipo     | Solucion                          |
| ------- | ------ | -------- | --------------------------------- |
| 3       | 1      | Practico | [Ver solución](./Tareas/01Practico.ts) |
| 3       | 1      | Teorico  | [Ver solución](./Tareas/01Teorico.txt)                  |

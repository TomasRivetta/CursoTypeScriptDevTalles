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

## Funciones y objetos

### Funciones basicas

```TS
  const hero: string = "Flash";

  function returnName():string //Especifico el tipo de dato que devuelve
  {
    return hero;
  }

  function returnName():void //Si es que no retorna nada
  {
   console.log('hola')
  };

  const activateBatisignal = (): string => {
    return "Batiseñal activada";
  };
```

### Parametros obligatorios de las funciones

```TS
  const fullName = (firstName:string, lastName:string): string => {
    return `${firstName} ${lastName}`;
  };

  const name = fullName("Tony", "Stark");

  console.log({ name });
```

### Parámetros opcionales de las funciones

```TS
  //                                Para que sea opcional
  const fullName = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName || "---"}`;
  };

  const name = fullName("Tony");

  console.log({ name });
```

Un parametro obligaotrio no puede ir despues de un parametro opcional, los parametros obligatorios van primero y al final de todo los opcionales

### Parámetros por defecto

```TS
  const fullName = (
    //Para que sea obligatorio
    firstName: string,
    //Para que sea opcional
    lastName?: string,
    //Parametro por defecto
    upper: boolean = false
  ): string => {
    if (upper) {
      return `${firstName} ${lastName || "---"}`.toUpperCase();
    } else {
      return `${firstName} ${lastName || "---"}`;
    }
  };

  const name = fullName("Tony", "Stark");

  console.log({ name });
```

### Parametros REST

Resto de argumentos

```TS
  const fullName = (firstName: string, ...restArgs: string[]) => {
    return `${firstName} ${restArgs.join(" ")}`;
  };

  const superman = fullName("Clark", "Joseph", "kent");

  console.log({ superman });
```

### Tipo Funcion

```TS
  const addNumbers = (a: number, b: number) => a + b;

  const greet = (name: string) => `Hola ${name}`;

  const saveTheWorld = () => `El mundo esta salvado`;

  //   myFunction = 10;
  //   console.log(myFunction);

  //   let myFunction: (y: number, z: number) => number;
  //   myFunction = addNumbers;
  //   console.log(myFunction(1, 2));

  let myFunction: (y: string) => string;
  myFunction = greet;
  console.log(myFunction("Toto"));

  myFunction = saveTheWorld;
  console.log(myFunction());
```

## Objetos y tipos personalizados en TypeScript

### Objetos basicos

```TS
  //Objeto literal
  let flash = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
  };
  //No permite agregar propiedades si no estan en la base del objeto creada
  flash = {
    name: "Clark Kent",
    age: 60,
    powers: ["Super Fuerza"],
    getNombre() {
      return this.name;
    },
  };
```

### ¿Cómo crear objetos con tipos específicos?

```TS
  //Defino el tipo de cada propiedad que va a tener el objeto
  let flash: { name: string; age: number; powers: string[] } = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
  };
```

### Métodos dentro de los objetos

```
  //Objeto literal
  let flash: {
    name: string;
    age?: number;
    powers: string[];
    //Creamos esta propiedad con el signo de pregunta ya que va a ser opcional y va a retornar un string
    getName?: () => string;
  } = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
  };

  flash = {
    name: "Clark Kent",
    //age: 60,
    powers: ["Super Fuerza"],
    getName() {
      return this.name;
    },
  };
```

### Problema con la definición en línea y Tipos personalizados

```TS
  //Obligar y poner reglas al objeto o variable que estemos definiendo
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  //Objeto literal
  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
  };

  let superman: Hero = {
    name: "Clark kent",
    age: 60,
    powers: ["Super velocidad"],
    getName() {
      return this.name;
    },
  };

  /*
   El error sugiere que TypeScript detecta la posibilidad de que la propiedad getName podría ser undefined. Para solucionarlo, puedes verificar si getName existe antes de intentar invocarlo. Puedes hacerlo de la siguiente manera:
   */
  superman.getName ? console.log(superman.getName()) : "Name not available";

  /*
  Esto verifica si getName existe en el objeto flash antes de intentar llamarlo y proporciona una respuesta de respaldo si la propiedad está ausente. Esto debería evitar el error y mostrar "Name not available" en caso de que getName no esté definido en el objeto flash.
   */
```

### Multiples tipos permitidos

```TS
  //Obligar y poner reglas al objeto o variable que estemos definiendo
  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = "Fernando";

  console.log(typeof myCustomVariable);

  myCustomVariable = 20;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: "Bruce",
    age: 43,
    powers: [1],
  };
  console.log(typeof myCustomVariable);
  console.log(myCustomVariable);
```

## Depuración de Errores y el archivo tsconfig.json



## TAREAS

| Seccion | Numero | Tipo     | Solucion                                   |
| ------- | ------ | -------- | ------------------------------------------ |
| 3       | 1      | Practico | [Ver solución](./Tareas/01Practico.ts)     |
| 3       | 1      | Teorico  | [Ver solución](./Tareas/01Teorico.txt)     |
| 4       | 2      | Practico | [Ver solución](./Tareas/02Practico.ts)     |
| 4       | 2      | Teorico  | [Ver solución](./Tareas/02Teorico.txt)     |
| 5       | 3      | Practico | [Ver solución](./Tareas/03Practico.ts.ts)  |
| 5       | 3      | Teorico  | [Ver solución](./Tareas/03Teorico.txt.txt) |

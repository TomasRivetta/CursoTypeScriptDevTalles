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

### ¿Qué es el archivo tsconfig y para qué nos puede servir?

tsconfig nos sirve para decirle a ts como queremos que funcione, es decirle como queremos que funcione en nuestro proyecto, tiene el valor por defecto recomendado, que nos ayuda a tener una idea

link para ver mas para tsconfig: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

### ¿Es posible la depuración del código de TypeScript?

no hace referencia a realizar console log
para depurar en TS tenemos que en el tsconfig.json buscar una propiedad que se llama sourceMap y descomentarla y volvemos a largar la terminal y podemos observar que ahora hay un tercer archivo .map es un mapa a la representacion propia de neustro codigo typeScript

### Remover los comentarios de los archivos de JavaScript

cuando se realiza la transpilaciona js van los comentarios tambien

en el TSCONFIG, hay una opcion que se llama
removeComments , la descomentamos
y no se van a subir los comentarios a la web

### Incluir y excluir carpetas y/o archivos

Va a haber carpertas o archivos que no queremos que se suban, el node_modules esta excluido automaticamente.
En el tsconfig colocamos al final de todo en un nuevo objeto
Por ejemplo:

```JSON
{
  "configs de ts": [],
  // Esto excluye de la carpeta objetos los archivos con el tipo .ts
 "exclude": ["objetos/*.ts"]
}
```

nunca hay que poner a compilar node modules

### outFile - Archivo de salida

No vamos a querer tener tanto desorden en nuestros archivos, vamos a combinar todos nuestros archivos de TS en un unico archivo de JS o varios

Si trabajamos con alguna libreria ya viene configurado
en el tsconfig descomentamos una opcion que se llama '"outFile": "./"' se le puede cambiar el nombre "outFile": "./main.js" y cambiamos de module: common a amd

cuando tengo el archivo de salida puedo borrar los archivos generados con el comando tsc -w
y ponemos en el index.html el main.js

## Características de ES6 o JavaScript2015 disponibles a través TypeScript

### Variables LET

VAR no existe

### Desestructuración de Objetos

```TS
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers: Avengers = {
    nick: "Samuel L. Jackson",
    ironman: "Robet Downey JR",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500,
  };

  //Desestructuracion
  //   const { poder, vision } = avengers;

  //   console.log(poder, vision.toUpperCase());

  //Desestructuracion y el resto
  const printAvenger = ({ vision, ...resto }: Avengers) => {
    console.log(vision, resto);
  };

  printAvenger(avengers);
```

### Desestructuración de Arreglos

```TS
  const avengersArr: [string, boolean, number] = ["Cap. America", true, 150];

  //QUIRO EL SEGUNDO
  //ignoro el primero
  //Nombro la const
  //ignoro el tercero
  const [capi, ironman] = avengersArr;

  // console.log(capi, ironman);
```

### Ciclo - For of

```TS
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironMan: Avenger = {
    name: "IronMan",
    weapon: "Armorsuit",
  };

  const capAmerica: Avenger = {
    name: "capAmerica",
    weapon: "Shield",
  };

  const thor: Avenger = {
    name: "Thor",
    weapon: "Mjolnir",
  };

  const avengers: Avenger[] = [ironMan, capAmerica, thor];

  for (const avenger of avengers) {
    console.log(avenger.name, " ", avenger.weapon);
  }
```

### Clases en ES6

```TS
  class Avenger {
    name;
    power;

    constructor(name = "No hay nombre", power = 0) {
      this.name = name;
      this.power = power;
    }
  }

  class FlyingAvenger extends Avenger {
    flying;

    //Los parametros para el constructor super
    constructor(name, power) {
      //Llamo al constructor del padre (Avenger)
      super(name, power);
      this.flying = true;
    }
  }

  const hulk = new Avenger("hULK", 9001);

  const falcon = new FlyingAvenger("Falcon", 50);

  console.log(hulk);
  console.log(falcon);
```

## Clases en TypeScript

### Definición de una clase básica en TypeScript

```TS
  class Avenger {
    private name: string;
    //Solo tengo acceso en getter y setter
    private team: string;

    //Vista afuera de la clase
    public realName: string;

    static avgAge: number = 35;

    constructor(name: string, team: string, realName?: string) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
  }

  const antman: Avenger = new Avenger("Antman", "Capitan");

  console.log(antman);
```

### Forma corta de asignar propiedades

```TS
  class Avenger {
    //Solo tengo acceso en getter y setter
    //Vista afuera de la clase

    //Como es static no la vamos a mandar por argunento
    static avgAge: number = 35;

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}
  }

  const antman: Avenger = new Avenger("Antman", "Capitan", "Scott Lang");

  console.log(antman);
```

### Métodos públicos y privados

```TS
  class Avenger {
    //Solo tengo acceso en getter y setter
    //Vista afuera de la clase

    //Como es static no la vamos a mandar por argunento
    static avgAge: number = 35;

    //Metodo static
    static getAvgAge() {
      return this.name;
    }

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}

    //Metodos publico
    bio() {
      return `${this.name} (${this.team})`;
    }

    //Metodo privado
    // private bio() {
    //   return `${this.name} (${this.team})`;
    // }
  }

  const antman: Avenger = new Avenger("Antman", "Capitan", "Scott Lang");

  console.log(antman);

  console.log(antman.bio());

  console.log(Avenger.getAvgAge());
```

### Herencia, super y extends

### Gets y Sets

Todos los getters deben de retornar algo

Los setters no retornan nada

### Clases Abstractas

Las clases abstractas sirve para crear otras clases o que otras clases sean extendidasd de ella
Para especificar que estoy esperando una clase un objeto o un argumento

### Constructores privados

vamos a controlar como vamos a ser llamado el constructor si le pongo private solo va a poder ser llamado dentro de la misma clase

## Interfaces

### Interfaz básica

una interfaz funciona casi lo mismo que un tipo

interfaz vs type : https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

### Estructuras complejas

```TS
  interface Client {
    name: string;
    age?: number;
    address: Address;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Toto",
    age: 25,
    address: {
      id: 125,
      zip: "KY2 SUD",
      city: "Ottawa",
    },
  };

  const client2: Client = {
    name: "Melissa",
    age: 30,
    address: {
      id: 126,
      zip: "5152A",
      city: "VCP",
    },
  };
```

### Métodos en la interfaz

```TS
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Toto",
    age: 25,
    address: {
      id: 125,
      zip: "KY2 SUD",
      city: "Ottawa",
    },
    getFullAddress(id: string) {
      return this.address.zip;
    },
  };

  const client2: Client = {
    name: "Melissa",
    age: 30,
    address: {
      id: 126,
      zip: "5152A",
      city: "VCP",
    },
    getFullAddress(id: string) {
      return this.address.zip;
    },
  };
```

### Interfaces en las clases

Forzamos que la clase tenga que implementar todo de la interfaz, mas si no sabemos si se va a extender o algo.
En cambio si sabemos que no se va a extender podemos usar un type

```TS
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number): string;
  }

  interface Human {
    age: number;
  }

  class Mutant implements Xmen, Human {
    public age: number;
    public name: string;
    public realName: string;

    mutantPower(id: number): string {
      return this.name + " " + this.realName;
    }
  }
```

### Interfaces para las funciones

```TS
  interface addTwoNumber {
    (a: number, b: number): number;
  }

  let addNumbersFunction: addTwoNumber;
  addNumbersFunction = (a: number, b: number) => {
    return 10;
  };
```

## NameSpaces

### Creando un Namespace

Es algo que se usa cada vez menos en desarrollo, pero SI en angular y demas
las funciones anonimas autoinvocadas se pueden considerar nameSpaces.

Nos sirve de agrupador para pdoer usarlo en otro lado

```TS
namespace Validations {
  export const validateText = (text: string): boolean => {
    return text.length > 3 ? true : false;
    // if (text.length > 3) {
    //   return true;
    // } else {
    //   return false;
    // }
  };

  export const validateDate = (fecha: Date): boolean => {
    return isNaN(fecha.valueOf()) ? false : true;
  };
}

console.log(Validations.validateText("Fer"));
```

### Inicio de proyecto - Módulos y Webpack

https://github.com/Klerith/curso-typescript/tree/codigo-inicial

### Imports y Exports

### Export default y exportación con alias

## Genéricos - Generics

### Introducción a los Genéricos

### Funciones Genericas

```TS
//
export const printObject = (argument: any) => {
  console.log(argument);
};
//                    define que es algo generico
export function genericFunction<T>(argument: T): T {
  return argument;
}

export const genericFunctionArrow = <T>(argument: T) => {
  return argument;
};
```

### Ejemplo de función genérica en acción

### Agrupar exportaciones

creo un archivo index.ts, es el primer archivo que se carga al crear la web

### Ejemplo aplicado de genéricos
Es un paquete que nos permitira hacer muchas cosas con HTTP
npm i axios

### Mapear respuestas http



## TAREAS

| Seccion | Numero | Tipo     | Solucion                               |
| ------- | ------ | -------- | -------------------------------------- |
| 3       | 1      | Practico | [Ver solución](./Tareas/01Practico.ts) |
| 3       | 1      | Teorico  | [Ver solución](./Tareas/01Teorico.txt) |
| 4       | 2      | Practico | [Ver solución](./Tareas/02Practico.ts) |
| 4       | 2      | Teorico  | [Ver solución](./Tareas/02Teorico.txt) |
| 5       | 3      | Practico | [Ver solución](./Tareas/03Practico.ts) |
| 5       | 3      | Teorico  | [Ver solución](./Tareas/03Teorico.txt) |
| 7       | 4      | Teorico  | [Ver solución](./Tareas/04Teorico.txt) |
| 8       | 5      | Teorico  | [Ver solución](./Tareas/05Teorico.txt) |
| 8       | 5      | Practico | [Ver solución](./Tareas/05Practico.ts) |

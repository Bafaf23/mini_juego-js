/**
 * Mini Proyecto
 *
 * Crear un juego en JS que se ejecute completamente en consola y
 * que cumpla con las siguientes características:
 *
 * El juego debe simular una auto batalla entre múltiples personajes.
 *
 * Para la creación de los personajes, se deberá crear una clase
 * padre la cual cuente con las siguientes propiedades:
 * - hp: Valor numérico que representa la vida de los personajes.
 * - atk: Valor numérico que representa el poder de ataque.
 * - def: Valor numérico que representa el poder de defensa.
 * - spd: Valor numérico que representa la velocidad del personaje.
 *
 * Nota: Todos los valores (salvo hp) deberán ser un valor
 * aleatorio entre 1 y un valor máximo definido por el desarrollador.
 *
 * Además de una serie de clases hijas (mínimo 3) que representen
 * a cada tipo de personaje (Ej.: Guerrero, Mago, Arquero, etc.).
 *
 * Cada clase hija deberá heredar las propiedades del padre y poseer
 * habilidades (mínimo 3) únicas que puedan ser utilizadas durante
 * la batalla.
 *
 * El flujo del juego debe ser el siguiente:
 * 1. Crear múltiples personajes de diferentes clases y almacenarlos
 *    en un array.
 * 2. Iniciar la batalla donde los personajes se enfrenten entre sí
 *    de forma automática. El orden de ataque debe basarse en la
 *    propiedad spd (velocidad) de cada personaje.
 * 3. Durante cada turno, un personaje debe atacar a otro
 *    seleccionado al azar. El daño infligido debe calcularse usando
 *    las propiedades atk y def de los personajes involucrados;
 *    así como una de las habilidades disponibles del atacante
 *    seleccionada al azar.
 * 4. Si un personaje pierde toda su hp, debe ser eliminado del
 *    juego.
 * 5. La batalla continúa hasta que solo quede un personaje en pie,
 *    quien será declarado el ganador.
 *
 * El juego debe mostrar en consola el progreso de la batalla,
 * incluyendo los ataques realizados, el daño infligido, los hp
 * restantes de cada personaje y finalmente el ganador.
 *
 * Fecha: 26/11/2025;
 */

// Función para generar un valor aleatorio entre un mínimo y un máximo
function valorAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Clase padre para los personajes
class Personaje {
  constructor(nombre) {
    this.hp = 100;
    this.atk = valorAleatorio(1, 20);
    this.def = valorAleatorio(1, 20);
    this.spd = valorAleatorio(1, 20);
    this.nombre = nombre;
  }
}

// Clase hija para los guerreros
class Guerrero extends Personaje {
  constructor(hp, atk, def, spd, nombre) {
    super(hp, atk, def, spd, nombre);
    this.habilidades = [
      {
        nombre: "Corte",
        descripcion: "Corta a su objetivo con su espada",
        daño: this.atk,
      },
      {
        nombre: "Golpe de espada",
        descripcion: "Golpea a su objetivo con su espada",
        daño: this.atk,
      },
      {
        nombre: "Ataque triple",
        descripcion: "Ataque triple a su objetivo",
        daño: this.atk * 3,
      },
    ];
  }
  atacar(objetivo) {
    const habilidad =
      this.habilidades[Math.floor(Math.random() * this.habilidades.length)];
    objetivo.hp -= habilidad.daño;
    console.log(
      `${this.nombre} ataca a ${objetivo.nombre} con ${habilidad.nombre} y le inflige ${habilidad.daño} de daño. HP restante: ${objetivo.hp}`
    );
  }
}

// Clase hija para los magos
class Mago extends Personaje {
  constructor(hp, atk, def, spd, nombre) {
    super(hp, atk, def, spd, nombre);
    this.habilidades = [
      {
        nombre: "Bola de fuego",
        descripcion: "Crea una bola de fuego que explota al impactar",
        daño: this.atk,
      },
      {
        nombre: "Bola de hielo",
        descripcion: "Crea una bola de hielo que explota al impactar",
        daño: this.atk,
      },
      {
        nombre: "Bola de terremoto",
        descripcion: "Crea una bola de terremoto que explota al impactar",
        daño: this.atk * 3,
      },
    ];
  }
  atacar(objetivo) {
    const habilidad =
      this.habilidades[Math.floor(Math.random() * this.habilidades.length)];
    objetivo.hp -= habilidad.daño;
    console.log(
      `${this.nombre} ataca a ${objetivo.nombre} con ${habilidad.nombre} y le inflige ${habilidad.daño} de daño. HP restante: ${objetivo.hp}`
    );
  }
}

// Clase hija para los arqueros
class Arquero extends Personaje {
  constructor(hp, atk, def, spd, nombre) {
    super(hp, atk, def, spd, nombre);
    this.habilidades = [
      {
        nombre: "Flecha",
        descripcion: "Dispara una flecha a su objetivo",
        daño: this.atk,
      },
      {
        nombre: "Flecha triple",
        descripcion: "Dispara tres flechas a su objetivo",
        daño: this.atk * 3,
      },
      {
        nombre: "Flecha de fuego",
        descripcion: "Dispara una flecha de fuego a su objetivo",
        daño: this.atk * 3,
      },
    ];
  }
  atacar(objetivo) {
    const habilidad =
      this.habilidades[Math.floor(Math.random() * this.habilidades.length)];
    objetivo.hp -= habilidad.daño;
    console.log(
      `${this.nombre} ataca a ${objetivo.nombre} con ${habilidad.nombre} y le inflige ${habilidad.daño} de daño. HP restante: ${objetivo.hp}`
    );
  }
}

// Crear un array de personajes
const personajes = [
  new Guerrero("Conan"),
  new Mago("Gandalf el Gris"),
  new Arquero("Legolas"),
];

console.log(personajes[0].habilidades);

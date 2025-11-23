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
    this.hp = 35;
    this.atk = valorAleatorio(1, 20);
    this.def = valorAleatorio(1, 20);
    this.spd = valorAleatorio(1, 20);
    this.nombre = nombre;
  }
}

// Clase hija para los guerreros
class Guerrero extends Personaje {
  constructor(nombre) {
    super(nombre);
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
  atacar() {
    const habilidad =
      this.habilidades[Math.floor(Math.random() * this.habilidades.length)];
    return habilidad;
  }
}

// Clase hija para los magos
class Mago extends Personaje {
  constructor(nombre) {
    super(nombre);
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
  atacar() {
    const habilidad =
      this.habilidades[Math.floor(Math.random() * this.habilidades.length)];
    return habilidad;
  }
}

// Clase hija para los arqueros
class Arquero extends Personaje {
  constructor(nombre) {
    super(nombre);
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
  atacar() {
    const habilidad =
      this.habilidades[Math.floor(Math.random() * this.habilidades.length)];
    return habilidad;
  }
}

// Array de personajes
const personajes = [
  new Guerrero("Conan"),
  new Mago("Gandalf el Gris"),
  new Arquero("Legolas"),
];

// Array de objetivos (enemigos)
const enemigos = [
  new Guerrero("Orco"),
  new Mago("Saruman el Blanco"),
  (() => {
    const sauron = new Mago("Sauron");
    sauron.atk *= 2.5;
    sauron.def *= 2;
    return sauron;
  })(),
];

// Función para iniciar la batalla
function iniciarBatalla() {
  let turno = 0;

  console.log("========================================");
  console.log("...Iniciando batalla...");
  console.log("========================================");

  // cargabdo a todos los personajes
  let todosLosPersonajes = [...personajes, ...enemigos];

  // ordenandolos por orden de velocidad
  todosLosPersonajes.sort((a, b) => b.spd - a.spd);

  // bluque principal
  while (todosLosPersonajes.filter((p) => p.hp > 0).length > 1) {
    turno++;
    for (let i = 0; i < todosLosPersonajes.length; i++) {
      if (todosLosPersonajes[i].hp <= 0) continue;

      let atacante = todosLosPersonajes[i];

      let enemigos = todosLosPersonajes.filter(
        (p) => p.hp > 0 && p !== atacante
      );

      if (enemigos.length === 0) continue;

      let enemigo = enemigos[Math.floor(Math.random() * enemigos.length)];

      let habilidad = atacante.atacar();

      //calculando dano real y confimando que el valor no sea negativo
      let danoReal = habilidad.daño - enemigo.def;
      if (danoReal < 1) danoReal = 1;

      // aplicando dano al enemigo
      enemigo.hp -= danoReal;

      // Asegurar que el HP no sea negativo
      if (enemigo.hp < 0) {
        enemigo.hp = 0;
      }

      console.log(
        `Turno ${turno} ${atacante.nombre} ataco a ${enemigo.nombre} con ${habilidad.nombre} y le infringio ${danoReal} de daño. HP ${enemigo.hp}`
      );

      if (enemigo.hp <= 0) {
        console.log(
          `${enemigo.nombre} ha sido eliminado por ${atacante.nombre} con ${habilidad.nombre}`
        );
      }
    }

    // Eliminar personajes muertos después de cada ronda
    todosLosPersonajes = todosLosPersonajes.filter((p) => p.hp > 0);
  }

  // Declarar ganador
  let ganador = todosLosPersonajes.find((p) => p.hp > 0);
  if (ganador) {
    console.log("========================================");
    console.log(`¡El ganador es: ${ganador.nombre}!`);
    console.log("========================================");
  }
}

iniciarBatalla();

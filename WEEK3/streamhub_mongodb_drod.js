
/* ======================================================
    TASK 2: INSERCIÓN DE DATOS
   ======================================================= */

db.usuarios.drop();
db.contenidos.drop();
db.valoraciones.drop();
db.listas.drop();


db.contenidos.insertMany([
  {
    titulo: "Sumas y restas",
    tipo: "pelicula",
    genero: ["Drama", "Crimen"],
    año: 2004,
    duracionMinutos: 108,
    temporadas: null,
    director: "Víctor Gaviria",
    actores: ["Fabio Restrepo", "Juan Uribe", "María Isabel Gaviria"],
    calificacionPromedio: 3.75,
    pais: "Colombia",
    sinopsis: "Un ingeniero cívico se introduce al negocio del tráfico de sustancias ilícitas.",
    reseñas: [
      { usuario: "valep", comentario: "Un metraje aberrante pero realista", puntuacion: 3.5 },
      { usuario: "drod", comentario: "Un poco larga pero buena.", puntuacion: 4 }
    ]
  },
  {
    titulo: "Chiquito pero peligroso",
    tipo: "pelicula",
    genero: ["Comedia", "Cine policíaco", "Humor negro"],
    año: 2006,
    duracionMinutos: 98,
    temporadas: null,
    director: "Keenen Ivory Wayans",
    actores: ["Marlon Wayans", "Kerry Washington", "Shawn Wayans"],
    calificacionPromedio: 4,
    pais: "Estados Unidos",
    sinopsis: "Un ladrón de joyas se infiltra en un hogar de una pareja sentimental.",
    reseñas: [
      { usuario: "mariamg", comentario: "Me reí mucho", puntuacion: 4 }
    ]
  },
  {
    titulo: "Samurai Jack",
    tipo: "serie",
    genero: ["Acción", "Ciencia Ficción"],
    año: 2001,
    duracionMinutos: null,
    temporadas: 5,
    director: "Genndy Tartakovsky",
    actores: ["Phil LaMarr", "Makoto Iwamatsu", "Tara Strong"],
    calificacionPromedio: 4.4,
    pais: "Estados Unidos",
    sinopsis: "Un joven príncipe que recorre el mundo para vengar a su pueblo y derrotar a Aku",
    reseñas: []
  },
  {
    titulo: "El señor de la Casa",
    tipo: "serie",
    genero: ["Drama", "Thriller"],
    año: 2024,
    duracionMinutos: null,
    temporadas: 1,
    director: "Sivaroj Kongsakul",
    actores: ["Narilya Gulmongkolpech", "Thanavate Siriwattanakul", "Nuttanan Kunpat"],
    calificacionPromedio: 2.25,
    pais: "Tailandia",
    sinopsis: "Una poderosa familia entabla una lucha por el poder vacío tras la muerte de su patriarca",
    reseñas: [
      { usuario: "dayanal", comentario: "Tratan a las mujeres como objeto", puntuacion: 2 },
      { usuario: "sebasr", comentario: "No me gustó el final", puntuacion: 2.5 }
    ]
  },
  {
    titulo: "Santo contra las Momias de Guanajuato",
    tipo: "pelicula",
    genero: ["Acción", "Cine de Luchadores"],
    año: 1972,
    duracionMinutos: 85,
    temporadas: null,
    director: "Federico Curiel",
    actores: ["El Santo", "Blue Demon", "Elsa Cárdenas"],
    calificacionPromedio: 4.0,
    pais: "México",
    sinopsis: "Las Momias de Guanajuato cobran vida por Satán, un luchador que fue vencido por un ancestro del Santo.",
    reseñas: [
      { usuario: "davidq", comentario: "Aparece Mil Mascaras, FORMIDABLE", puntuacion: 4 }
    ]
  },
  {
    titulo: "Un Poeta",
    tipo: "pelicula",
    genero: ["Drama","Comedia"],
    año: 2025,
    duracionMinutos: 120,
    temporadas: null,
    director: "Simón Mesa Soto",
    actores: ["Ubeimar Ríos", "Rebeca Andrade"],
    calificacionPromedio: 3.8,
    pais: "Colombia",
    sinopsis: "Un hombre de 50 años encuentra un nuevo propósito en la vida.",
    reseñas: []
  },
  {
    titulo: "Dr House",
    tipo: "serie",
    genero: ["Acción", "Aventura"],
    año: 2004,
    duracionMinutos: null,
    temporadas: 8,
    director: "David Shore",
    actores: ["Hugh Laurie", "Lisa Edelstein", "Jennifer Morrison"],
    calificacionPromedio: 4.3,
    pais: "Estados Unidos",
    sinopsis: "Dr House, un brillante pero sarcastico médico que resuelve casos misteriosos en un hospital de Nueva Jersey",
    reseñas: [
      { usuario: "davidq", comentario: "Una serie muy reflexiva", puntuacion: 4 }
    ]
  },
   {
        titulo: "Juguemos en el Mundo",
    tipo: "pelicula",
    genero: ["Comedia"],
    año: 1971,
    duracionMinutos: 105,
    temporadas: null,
    director: "María Herminia Avellaneda",
    actores: ["Maria Elena Walsh", "Perla Santalla", "Hugo Caprera"],
    calificacionPromedio: 3.6,
    pais: "Argentina",
    sinopsis: "Doña Disparate y Bambuco llegan a un pueblo de Argentina con constantes problemas políticos y económicos.",
    reseñas: []
  }
]);

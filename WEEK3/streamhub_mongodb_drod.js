/* 
============================================================================
   TASK 1-5 - GESTIÓN DE CONTENIDOS Y USUARIOS EN MONGODB
   NOSQL WEEK 3
   ============================================================================
*/

/*  TASK 1 

 Los usuarios tienen la información de la cuenta, plan de suscripción 
 e historial de contenidos vistos (Historial, fecha y progreso).

 Contenidos: Unificamos peliculas y series por el tipo "tipo" : "pelicula" | "tipo" | "serie".

 // 3) valoraciones
// Colección independiente donde los usuarios guardan calificaciones y comentarios sobre los contenidos.

// 4) listas
// Colección con listas personalizadas de cada usuario (ej. Favoritos o Ver más tarde) que referencian contenidos.

*/

use("streamhub");
/* ======================================================
    TASK 2: INSERCIÓN DE DATOS
   ======================================================= */

/* ---- 2.1 Limpieza previa (opcional, útil para reejecutar el script) ------ */
db.usuarios.drop();
db.contenidos.drop();
db.valoraciones.drop();
db.listas.drop();

/* ---- 2.2 Inserción de contenidos (insertMany) ----------------------------- */
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
      { usuario: "sebasr", comentario: "Un poco larga pero buena.", puntuacion: 4 }
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
    genero: ["Acción", "Drama"],
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

/* ---- 2.3 Inserción de usuarios (insertMany), con historial embebido ------- */
db.usuarios.insertMany([
  {
    nombre: "Valentina Parra",
    email: "valep@correo.com",
    edad: 23,
    pais: "Colombia",
    plan: "premium",
    fechaRegistro: new Date("2024-01-25"),
    activo: true,
    historial: [
      { tituloVisto: "Samurai Jack", fecha: new Date("2024-02-01"), progreso: 100 },
      { tituloVisto: "Dr House", fecha: new Date("2024-03-10"), progreso: 80 },
      { tituloVisto: "Sumas y restas", fecha: new Date("2024-04-05"), progreso: 100 },
      { tituloVisto: "Chiquito pero peligroso", fecha: new Date("2024-05-20"), progreso: 60 },
      { tituloVisto: "El señor de la Casa", fecha: new Date("2024-06-01"), progreso: 100 },
      { tituloVisto: "Santo contra las Momias de Guanajuato", fecha: new Date("2024-06-15"), progreso: 45 }
    ]
  },
  {
    nombre: "Mariana González",
    email: "mariamg@correo.com",
    edad: 40,
    pais: "México",
    plan: "estandar",
    fechaRegistro: new Date("2021-08-22"),
    activo: true,
    historial: [
      { tituloVisto: "Santo contra las Momias de Guanajuato", fecha: new Date("2024-01-10"), progreso: 100 },
      { tituloVisto: "Juguemos en el Mundo", fecha: new Date("2024-02-14"), progreso: 90 }
    ]
  },
  {
    nombre: "David Quint",
    email: "davidq@correo.com",
    edad: 23,
    pais: "Argentina",
    plan: "premium",
    fechaRegistro: new Date("2023-05-02"),
    activo: false,
    historial: [
      { tituloVisto: "Juguemos en el Mundo", fecha: new Date("2023-06-01"), progreso: 100 },
      { tituloVisto: "Santo contra las momias de Guanajuato", fecha: new Date("2024-06-26"), progreso: 40}
    ]
  },
  {
    nombre: "Sebastian Romero",
    email: "sebasr@correo.com",
    edad: 18,
    pais: "Colombia",
    plan: "basico",
    fechaRegistro: new Date("2020-11-30"),
    activo: true,
    historial: [
      { tituloVisto: "Samurai Jack", fecha: new Date("2024-01-05"), progreso: 100 },
      { tituloVisto: "Juguemos en el Mundo", fecha: new Date("2024-01-06"), progreso: 100 },
      { tituloVisto: "Dr House", fecha: new Date("2024-02-11"), progreso: 100 },
      { tituloVisto: "Sumas y restas", fecha: new Date("2024-03-19"), progreso: 100 },
      { tituloVisto: "El señor de la Casa", fecha: new Date("2024-04-22"), progreso: 70 },
      { tituloVisto: "Un Poeta", fecha: new Date("2026-05-30"), progreso: 100 }
    ]
  },
  {
    nombre: "Dayana Leones",
    email: "dayanal@correo.com",
    edad: 24,
    pais: "Colombia",
    plan: "estandar",
    fechaRegistro: new Date("2022-09-18"),
    activo: true,
    historial: [
      { tituloVisto: "Un Poeta", fecha: new Date("2026-02-01"), progreso: 100 },
      { tituloVisto: "Chiquito pero peligroso", fecha: new Date("2024-02-20"), progreso: 100 }
    ]
  }
]);

/* ---- 2.4 Inserción de una valoración individual (insertOne) --------------- */
db.valoraciones.insertOne({
  usuarioId: db.usuario.findOne({email: "valep@correo.com"})._id,
  usuarioNombre: "Valentina Parra",
  contenidoId: db.contenido.findOne({titulo: "Samurai Jack"})._id,
  contenidoTitulo: "Samurai Jack",
  puntuacion: 5,
  comentario: "La mejor caricatura de Tartakovsky",
  fecha: new Date("2023-10-31")
});
/* ---- 2.5 Inserción masiva de valoraciones (insertMany) -------------------- */
db.valoraciones.insertMany([
  {
    usuarioId: db.usuarios.findOne({ email: "mariamg@correo.com" })._id,
    usuarioNombre: "Mariana González",
    contenidoId: db.contenidos.findOne({ titulo: "Santo contra las Momias de Guanajuato" })._id,
    contenidoTitulo: "Santo contra las Momias de Guanajuato",
    puntuacion: 4,
    comentario: "Muy entretenida para su época.",
    fecha: new Date("2024-01-11")
  },
  {
    usuarioId: db.usuarios.findOne({ email: "sebasr@correo.com" })._id,
    usuarioNombre: "Sebastian Romero",
    contenidoId: db.contenidos.findOne({ titulo: "Chiquito pero peligroso" })._id,
    contenidoTitulo: "Chiquito pero peligroso",
    puntuacion: 4,
    comentario: "Muy divertida, la volvería a ver.",
    fecha: new Date("2024-01-07")
  },
  {
    usuarioId: db.usuarios.findOne({ email: "dayanal@correo.com" })._id,
    usuarioNombre: "Dayana Leones",
    contenidoId: db.contenidos.findOne({ titulo: "El señor de la Casa" })._id,
    contenidoTitulo: "El señor de la Casa",
    puntuacion: 2,
    comentario: "No me convenció la historia.",
    fecha: new Date("2024-02-21")
  },
  {
    usuarioId: db.usuarios.findOne({ email: "davidq@correo.com" })._id,
    usuarioNombre: "David Quint",
    contenidoId: db.contenidos.findOne({ titulo: "Dr House" })._id,
    contenidoTitulo: "Dr House",
    puntuacion: 4,
    comentario: "Una serie excelente y muy inteligente.",
    fecha: new Date("2024-03-11")
  },
  {
    usuarioId: db.usuarios.findOne({ email: "valep@correo.com" })._id,
    usuarioNombre: "Valentina Parra",
    contenidoId: db.contenidos.findOne({ titulo: "Un Poeta" })._id,
    contenidoTitulo: "Un Poeta",
    puntuacion: 4,
    comentario: "Una película muy humana y emotiva.",
    fecha: new Date("2024-04-23")
  },
  {
    usuarioId: db.usuarios.findOne({ email: "mariamg@correo.com" })._id,
    usuarioNombre: "Mariana González",
    contenidoId: db.contenidos.findOne({ titulo: "Juguemos en el Mundo" })._id,
    contenidoTitulo: "Juguemos en el Mundo",
    puntuacion: 4,
    comentario: "Una comedia clásica bastante entretenida.",
    fecha: new Date("2023-06-02")
  }
]);

db.listas.insertMany([
  {
    usuarioId: db.usuarios.findOne ({email: "valep@correo.com"})._id,
    nombreLista: "Favoritos",
    contenidos: [
      db.contenidos.findOne({titulo: "Un Poeta"})._id,
      db.contenidos.findOne({titulo: "Samurai Jack"})._id
    ],
    fechaCreacion: new Date("2026-02-04")
  },
  {
    usuarioId: db.usuarios.findOne({email: "mariamg@correo.com"})._id,
    nombreLista: "Ver más tarde",
    contenidos: [
      db.contenidos.findOne({titulo: "El señor de la Casa"})._id,
      db.contenidos.findOne({titulo: "Sumas y restas"})._id,
    ],
    fechaCreacion: new Date("2025-09-04")
  },
  {
    usuarioId: db.usuario.findOne({email: "sebasr@correo.com"})._id,
    nombreLista: "Favoritos",
    contenidos: [
      db.contenidos.findOne({titulo: "Chiquito pero peligroso"})._id,
      db.contenidos.findOne({titulo: "Samurai Jack"})._id,
      db.contenidos.findOne({titulo: "Dr House"})._id
    ], 
    fechaCreacion: new Date("2023-04-11")
  }
]);

/* ============================================================================
   TASK 3 — CONSULTAS (LECTURA) CON OPERADORES
   ============================================================================ */

/* ---- 3.1 $gt:  Peliculas con duración > 100 minutos ------------------------ */
db.contenidos.find({
  tipo: "pelicula", 
  duracionMinutos: {$gt: 100}
});

/* ---- 3.2 $lt: Peliculas con duración < 100 minutos / Contenidos estrenados antes del año 2023 -------------------- */
db.contenidos.find({
  tipo: "pelicula", 
  duracionMinutos: {$lt: 100}
});
db.contenidos.find({
  año: {$lt: 2023}
});

/* ---- 3.3 $eq: Contenidos cuyo país de origen es exactamente "Estados Unidos" ---- */
db.contenidos.find({
  pais: { $eq: "Estados Unidos"}
});

/* ---- 3.4 $in: Contenidos cuyo género incluye Acción o Comedia ------------- */
db.contenidos.find({
  genero: { $in: ["Drama", "Comedia"]}
});

/* ---- 3.6 $or: Contenidos de Colombia o de Estados Unidps --------------------------*/
db.contenidos.find({
  $or: [
    { pais: "Colombia" },
    { pais: "Estados Unidos" }
  ]
});

/* ---- 3.7 $regex: Contenidos cuyo título contiene la palabra "Mundo" ------ */
db.contenidos.find({
  titulo: { $regex: "Mundo", $options: "i" }
});
/* ---- 3.8 $regex: Usuarios cuyo email termina en "@correo.com" ------------- */
db.usuarios.find({
  email: { $regex: "@correo\\.com$" }
});

/* ---- 3.9 Usuarios que vieron más de 5 contenidos (uso de $expr + $size) --- */
db.usuarios.find({
  $expr: { $gt: [{ $size: "$historial" }, 5] }
});

/* ---- 3.10 Combinación $and + $or: Películas de acción con calificación
             mayor a 2O producidas en España ------------------------------- */
db.contenidos.find({
  $and: [
    { tipo: "pelicula" },
    {
      $or: [
        { $and: [{ genero: "Crimen" }, { calificacionPromedio: { $gt: 2 } }] },
        { pais: "Colombia"}
      ]
    }
  ]
});

/* ============================================================================
   TASK 4 — ACTUALIZACIONES Y ELIMINACIONES
   ============================================================================ */

/* ---- 4.1 updateOne: Actualizar la calificación promedio de un contenido --- */
db.contenidos.updateOne(
  { titulo: "Un Poeta" },
  { $set: { calificacionPromedio: 4.6 } }
);

/* ---- 4.2 updateOne: Agregar una nueva reseña embebida a un contenido ------ */
db.contenidos.updateOne(
  { titulo: "Santo contra las Momias de Guanajuato" },
  { $push: { reseñas: { usuario: "franklinm", comentario: "Acción Luchistica de principio a fin", puntuacion: 4 } } 
});

/* ---- 4.3 updateMany: Marcar como "premium" a todos los usuarios de
            Colombia con plan "estandar" (ejemplo de campaña de fidelización) */
db.usuarios.updateMany(
  { pais: "Colombia", plan: "estandar" },
  { $set: { plan: "premium" } }
);

/* ---- 4.4 updateMany: Incrementar en 1 la puntuación de valoraciones
            con comentarios de menos de 20 caracteres (ajuste de sesgo) ----- */
db.valoraciones.updateMany(
  { $expr: { $lt: [{ $strLenCP: "$comentario" }, 20] } },
  { $inc: { puntuacion: 1 } }
);

/* ---- 4.5 deleteOne: Eliminar una valoración específica -------------------- */
db.valoraciones.deleteOne({
  usuarioNombre: "Sebastian Romero",
  contenidoTitulo: "Sumas y Restas"
});

/* ---- 4.6 deleteMany: Eliminar contenidos sin ninguna reseña --------------- */
db.contenidos.deleteMany({
  reseñas: { $size: 0 }
});

/* Nota: 4.6 elimina Juguemos en el Mundo, Un Poeta y Samurai Jack */

/* ============================================================================
   TASK 5 — ÍNDICES PARA PERFORMANCE
   ============================================================================ */

/* ---- 5.1 Índice simple sobre "titulo" en contenidos -----------------------
   Justificación: el título es el campo más consultado por los usuarios al
   buscar contenido (búsquedas por nombre y $regex), por lo que un índice
   acelera drásticamente estas consultas frente a un COLLSCAN. */
db.contenidos.createIndex({ titulo: 1 });

/* ---- 5.2 Índice sobre "genero" (arreglo) -----------------------------------
   Justificación: las consultas por género ($in) son muy frecuentes en
   plataformas de streaming (filtros de catálogo); al ser un arreglo,
   MongoDB crea automáticamente un índice multikey. */
db.contenidos.createIndex({ genero: 1 });

/* ---- 5.3 Índice compuesto sobre "tipo" y "anio" ----------------------------
   Justificación: muchas consultas combinan tipo de contenido (película/serie)
   con rango de año (recientes vs. clásicos); un índice compuesto evita
   escanear toda la colección para esos filtros combinados. */
db.contenidos.createIndex({ tipo: 1, anio: -1 });

/* ---- 5.4 Índice único sobre "email" en usuarios ----------------------------
   Justificación: el email identifica de forma única a cada usuario y se usa
   en el login; un índice único garantiza integridad y acelera la búsqueda. */
db.usuarios.createIndex({ email: 1 }, { unique: true });

/* ---- 5.5 Índice sobre "contenidoId" en valoraciones ------------------------
   Justificación: las agregaciones de calificación promedio por contenido
   (Task 6) filtran/agrupan constantemente por este campo. */
db.valoraciones.createIndex({ contenidoId: 1 });

/* ---- 5.6 Índice de texto sobre "sinopsis" para búsquedas de texto libre --- */
db.contenidos.createIndex({ sinopsis: "text" });

/* ---- 5.7 Verificación de índices existentes -------------------------------- */
db.contenidos.getIndexes();
db.usuarios.getIndexes();
db.valoraciones.getIndexes();
db.listas.getIndexes();


/* ============================================================================
   TASK EXTRA — PIPELINES DE AGREGACIÓN (eran mínimo 2, pero decidí entregar 4)
   ============================================================================ */

/* ---- 6.1 Pipeline 1: Calificación promedio y número de valoraciones
            por contenido, ordenado de mayor a menor calificación ---------- */
db.valoraciones.aggregate([
  {
    $group: {
      _id: "$contenidoTitulo",
      calificacionPromedio: { $avg: "$puntuacion" },
      totalValoraciones: { $sum: 1 }
    }
  },
  { $sort: { calificacionPromedio: -1 } },
  {
    $project: {
      _id: 0,
      contenido: "$_id",
      calificacionPromedio: { $round: ["$calificacionPromedio", 2] },
      totalValoraciones: 1
    }
  }
]);

/* ---- 6.2 Pipeline 2: Cantidad de contenidos por género
            (usa $unwind porque "genero" es un arreglo) --------------------- */
db.contenidos.aggregate([
  { $unwind: "$genero" },
  {
    $group: {
      _id: "$genero",
      totalContenidos: { $sum: 1 },
      calificacionPromedioGenero: { $avg: "$calificacionPromedio" }
    }
  },
  { $sort: { totalContenidos: -1 } },
  {
    $project: {
      _id: 0,
      genero: "$_id",
      totalContenidos: 1,
      calificacionPromedioGenero: { $round: ["$calificacionPromedioGenero", 2] }
    }
  }
]);

/* ---- 6.3 Pipeline 3: Usuarios con su cantidad de contenidos vistos,
            filtrando solo usuarios activos con más de 1 contenido visto --- */
db.usuarios.aggregate([
  { $match: { activo: true } },
  { $unwind: "$historial" },
  {
    $group: {
      _id: { usuario: "$nombre", pais: "$pais" },
      contenidosVistos: { $sum: 1 },
      progresoPromedio: { $avg: "$historial.progreso" }
    }
  },
  { $match: { contenidosVistos: { $gt: 1 } } },
  { $sort: { contenidosVistos: -1 } },
  {
    $project: {
      _id: 0,
      usuario: "$_id.usuario",
      pais: "$_id.pais",
      contenidosVistos: 1,
      progresoPromedio: { $round: ["$progresoPromedio", 1] }
    }
  }
]);

/* ---- 6.4 Pipeline 4: Top 3 países con más contenido producido y su
            duración promedio (solo películas) ------------------------------ */
db.contenidos.aggregate([
  { $match: { tipo: "pelicula" } },
  {
    $group: {
      _id: "$pais",
      totalPeliculas: { $sum: 1 },
      duracionPromedio: { $avg: "$duracionMinutos" }
    }
  },
  { $sort: { totalPeliculas: -1 } },
  { $limit: 3 },
  {
    $project: {
      _id: 0,
      pais: "$_id",
      totalPeliculas: 1,
      duracionPromedioMin: { $round: ["$duracionPromedio", 0] }
    }
  }
]);



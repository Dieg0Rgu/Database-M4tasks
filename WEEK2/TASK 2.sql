INSERT INTO estudiantes
(Id, nombre_completo, correo_electronico, genero, identificacion, carrera, fecha_nacimiento, fecha_ingreso)
VALUES
(1, 'Isabella Rizzo Daza', 'tacita91218@gmail.com', 'Female', 949149735, 'Comunicación Social', '2008-11-09', '2026-02-15');

INSERT INTO estudiantes
(Id, nombre_completo, correo_electronico, genero, identificacion, carrera, fecha_nacimiento, fecha_ingreso)
VALUES
(2, 'Brandon Stiven Martinez Martin', 'bxzzz2007@shutterfly.com', 'Male', 900794569, 'Marketing Digital', '2006-06-06', '2026-09-03');

INSERT INTO estudiantes
(Id, nombre_completo, correo_electronico, genero, identificacion, carrera, fecha_nacimiento, fecha_ingreso)
VALUES
(3, 'Dania Mariana Gomez Ortiz', 'marimari78@outlook.es', 'Female', 226849998, 'Marketing Digital', '2008-01-14', '2026-01-23');

INSERT INTO estudiantes
(Id, nombre_completo, correo_electronico, genero, identificacion, carrera, fecha_nacimiento, fecha_ingreso)
VALUES
(4, 'Santiago Jassid Gonzalez Ballesteros', 'santijota@google.com.br', 'Male', 24262875, 'Ingenieria de Software', '2009-08-08', '2026-05-11');

INSERT INTO estudiantes
(Id, nombre_completo, correo_electronico, genero, identificacion, carrera, fecha_nacimiento, fecha_ingreso)
VALUES
(5, 'Yeray Andrea Lopez Quintero', 'mollyvega@gmail.com', 'Female', 100679926, 'Comunicación Social', '2006-07-03', '2026-12-22');

insert into docentes (Id, nombre_completo, correo_institucional, departamento_academico, experiencia) values (1, 'Marinella Olivo García', 'marinellaolivo@docente.colegioinca.edu.co', 'Marketing Digital', 13);
insert into docentes (Id, nombre_completo, correo_institucional, departamento_academico, experiencia) values (2, 'Petter Christopher', 'tecnologia.petter@gmail.com', 'Ingeniera de Software', 24);
insert into docentes (Id, nombre_completo, correo_institucional, departamento_academico, experiencia) values (3, 'Dina Luz Laurens', 'dinalaurens@docente.colegioinca.edu.co', 'Comunicacion Social', 12);


INSERT INTO cursos (Id, nombre, codigo, creditos, semestre, id_docente)
VALUES
(1, 'Fundamentos de Marketing Digital', 101, 3, 1, 1);

INSERT INTO cursos (Id, nombre, codigo, creditos, semestre, id_docente)
VALUES
(2, 'Publicidad en Redes Sociales', 102, 4, 2, 1);

INSERT INTO cursos (Id, nombre, codigo, creditos, semestre, id_docente)
VALUES
(3, 'Desarrollo de Software I', 201, 4, 1, 2);

INSERT INTO cursos (Id, nombre, codigo, creditos, semestre, id_docente)
VALUES
(4, 'Comunicación Organizacional', 301, 3, 1, 3);

-- INSCRIPCIONES
INSERT INTO inscripciones
(Id, id_estudiante, id_curso, fecha_inscripcion, calificacion_final)
VALUES
(1, 1, 4, '2026-02-16', 4.8);

INSERT INTO inscripciones
(Id, id_estudiante, id_curso, fecha_inscripcion, calificacion_final)
VALUES
(2, 1, 1, '2026-02-16', 4.3);

INSERT INTO inscripciones
(Id, id_estudiante, id_curso, fecha_inscripcion, calificacion_final)
VALUES
(3, 2, 1, '2026-09-04', 4.7);

INSERT INTO inscripciones
(Id, id_estudiante, id_curso, fecha_inscripcion, calificacion_final)
VALUES
(4, 2, 2, '2026-09-05', 3.9);

INSERT INTO inscripciones
(Id, id_estudiante, id_curso, fecha_inscripcion, calificacion_final)
VALUES
(5, 3, 1, '2026-01-24', 5.0);

INSERT INTO inscripciones
(Id, id_estudiante, id_curso, fecha_inscripcion, calificacion_final)
VALUES
(6, 3, 2, '2026-01-24', 4.1);

INSERT INTO inscripciones
(Id, id_estudiante, id_curso, fecha_inscripcion, calificacion_final)
VALUES
(7, 4, 3, '2026-05-12', 3.8);

INSERT INTO inscripciones
(Id, id_estudiante, id_curso, fecha_inscripcion, calificacion_final)
VALUES
(8, 5, 4, '2026-12-23', 4.5);

SELECT * FROM estudiantes
SELECT * FROM docentes
SELECT * FROM cursos 
SELECT * FROM inscripciones
CREATE TABLE estudiantes(
	Id SERIAL PRIMARY KEY, 
	nombre_completo VARCHAR(100) NOT NULL,
	correo_electronico TEXT UNIQUE NOT NULL CHECK (correo_electronico LIKE '%@%.%'),
	genero TEXT NOT NULL,
	identificacion INT UNIQUE NOT NULL,
	carrera VARCHAR(37) NOT NULL,
	fecha_nacimiento DATE NOT NULL,
	fecha_ingreso DATE NOT NULL CHECK (fecha_ingreso >= fecha_nacimiento)
);

CREATE TABLE docentes (
	Id SERIAL PRIMARY KEY,
	nombre_completo VARCHAR(100) NOT NULL,
	correo_institucional VARCHAR(100) NOT NULL CHECK (correo_institucional LIKE '%@%.%'),
	departamento_academico VARCHAR(100) NOT NULL,
	experiencia INT NOT NULL
);

CREATE TABLE cursos (
	Id SERIAL PRIMARY KEY, 
	nombre VARCHAR(100) NOT NULL,
	codigo INT UNIQUE NOT NULL,
	creditos INT NOT NULL CHECK (creditos > 0),
	semestre INT CHECK (semestre > 0),
	id_docente INT,
	FOREIGN KEY (id_docente) REFERENCES docentes(id)
);

-- Se decidió calificar a los estudiantes del 0 al 10 

CREATE TABLE inscripciones (
	Id SERIAL PRIMARY KEY,
	id_estudiantes INT,
	id_curso INT,
	fecha_inscripcion DATE,
	calificacion_final DECIMAL CHECK (calificacion_final >= 0 AND calificacion_final <= 10),
	FOREIGN KEY (id_estudiantes) REFERENCES estudiantes(id),
	FOREIGN KEY (id_curso) REFERENCES cursos(id)
);



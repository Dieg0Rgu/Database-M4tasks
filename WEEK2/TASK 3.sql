
/* TASK 3
*/
--Listar todos los estudiantes con inscripciones y cursos (JOIN)
SELECT
	e.nombre_completo AS estudiante,
	c.codigo,
	c.nombre AS curso,
	i.fecha_inscripcion,
	i.calificacion_final
FROM inscripciones as i
JOIN estudiantes as e ON i.id_estudiante = e.id
JOIN cursos as c ON i.id_curso = c.id
ORDER BY e.nombre_completo ASC;

-- Listar cursos dictados por docentes con > 5 años de experiencia
SELECT 
	c.codigo, 
	c.nombre AS curso, 
	d.nombre_completo as docente, 
	d.experiencia as experiencia
FROM docentes d
JOIN cursos c ON c.id_docente = d.id
WHERE experiencia > 5;

-- Obtener promedio de calificaciones por curso (GROUP BY + AVG)
SELECT
	c.codigo, 
	c.nombre as curso,
	ROUND(AVG(i.calificacion_final), 2) as promedio
FROM inscripciones as i 
JOIN cursos as c ON c.id = i.id_curso
GROUP BY c.codigo, c.nombre
ORDER BY promedio DESC;
	

-- Mostrar estudiantes inscritos en más de un curso (HAVING COUNT(*) > 1)
SELECT 
	e.nombre_completo AS Estudiante,
	COUNT(*) AS cantidad_cursos
FROM estudiantes e
JOIN inscripciones i ON i.id_estudiante = e.id
JOIN cursos c ON i.id_curso = c.id
GROUP BY e.id, e.nombre_completo
HAVING COUNT(*) > 1;


-- ALTER TABLE: agregar columna estado_academico a estudiantes
ALTER TABLE estudiantes
ADD COLUMN estado_academico TEXT
CHECK (estado_academico IN ('Activo', 'Inactivo', 'Suspendido'));

--ELiminar un docente y observar el efecto en cursos (revisar ON DELETE en la FK)


-- Reconfigurar la relación entre Cursos y Docentes
ALTER TABLE cursos DROP CONSTRAINT IF EXISTS cursos_id_docente_fkey;

ALTER TABLE cursos
ADD CONSTRAINT cursos_id_docente_fkey
FOREIGN KEY (id_docente) REFERENCES docentes(id) ON DELETE CASCADE;

-- Reconfigurar la relación entre Inscripciones y Cursos
ALTER TABLE inscripciones DROP CONSTRAINT IF EXISTS inscripciones_id_curso_fkey;

ALTER TABLE inscripciones
ADD CONSTRAINT inscripciones_id_curso_fkey
FOREIGN KEY (id_curso) REFERENCES cursos(id) ON DELETE CASCADE;


DELETE FROM docentes WHERE id = 2;

SELECT * FROM docentes
SELECT * FROM cursos

--6. Consultar cursos con más de 2 estudiantes inscritos (GROUP BY + COUNT + HAVING).
SELECT 
	c.codigo,
	c.nombre as nombre_curso,
	COUNT(*) as estudiantes_inscritos
FROM inscripciones as i
JOIN cursos as c ON i.id_curso = c.id
GROUP BY c.id, c.nombre, c.codigo
HAVING COUNT(*) > 1
ORDER BY estudiantes_inscritos DESC;


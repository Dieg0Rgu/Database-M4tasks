/* 
 TASK 5:

 CREACIÓN DE UNA VISTA

*/

CREATE VIEW vista_historial_academico AS
SELECT 
	e.nombre_completo as Estudiante,
	c.nombre as Curso,
	d.nombre_completo as Docente,
	c.semestre,
	i.calificacion_final
	FROM inscripciones as i
	JOIN cursos as c ON c.id = i.id_curso
	JOIN docentes as d ON d.id = c.id_docente
	JOIN estudiantes as e ON e.id = i.id_estudiante

	SELECT * FROM vista_historial_academico


/* TASK 6 

Control de acceso y transacciones:

Otorga permisos de solo lectura a un rol revisor_academico sobre la vista (GRANT SELECT).
Revoca permisos de modificación de datos en inscripciones para ese rol (REVOKE).
Simula actualización de calificaciones usando BEGIN, SAVEPOINT, ROLLBACK y COMMIT.
*/

-- STEP 1 puede hacer pero no editar
CREATE ROLE revisor_academico;
GRANT SELECT ON 
vista_historial_academico 
TO revisor_academico;
SELECT * FROM vista_historial_academico;

--STEP 2
REVOKE INSERT, UPDATE, DELETE ON inscripciones FROM revisor_academico;

--STEP 3

BEGIN;
UPDATE inscripciones
SET calificacion_final = 5.0
WHERE id_estudiante = 3 and id_curso = 1;

SAVEPOINT antes_actualizacion_critica

UPDATE inscripciones 
SET calificacion_final = 4.8
WHERE id_estudiante = 1 and id_curso = 4;

-- hacer rollback en el caso de que se rompa la actualizacion
ROLLBACK TO SAVEPOINT antes_actualizacion_critica;
--confirmar cambios
COMMIT

SELECT * FROM inscripciones

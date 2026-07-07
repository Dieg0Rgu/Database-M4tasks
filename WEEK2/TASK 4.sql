/* TASK 4 Subconsultas

1. Estudiantes cuya calificación promedia sea  > promedio general (AVG() + subconsulta)
2. Nombres de carrearas con estudiantes inscritos en cursos del semestre ≥ 2 (IN o EXISTS)
3. ROUND, SUM, MAX, MIN, COUNT para obtener indicadores 
*/

-- STEP ONE
SELECT 
	e.nombre_completo, 
	ROUND(AVG(i.calificacion_final),2) AS promedio
	FROM estudiantes e
	JOIN inscripciones i ON e.id = i.id_estudiante
	GROUP BY e.id, e.nombre_completo
	HAVING AVG(i.calificacion_final) >(
		SELECT AVG(calificacion_final)
		FROM inscripciones
	)
	ORDER BY promedio DESC;

-- WHERE
	SELECT 
		nombre_completo, 
		promedio
	FROM(
	SELECT
		e.nombre_completo,
		AVG(i.calificacion_final) AS promedio
	FROM estudiantes e
	JOIN inscripciones i ON i.id_estudiante = e.id 
	GROUP BY e.id, e.nombre_completo) as promedios_estudiantes, (

		SELECT AVG(calificacion_final) AS promedio_general
		FROM inscripciones
	) AS promedio_total
--Usamos Where 
WHERE promedios_estudiantes.promedio > promedio_total.promedio_general;

	
-- STEP TWO 
SELECT DISTINCT carrera 
FROM estudiantes
WHERE estudiantes.id IN (
	SELECT i.id_estudiante
	FROM inscripciones i 
	JOIN cursos c ON i.id_curso = c.id 
	WHERE c.semestre >= 2
);

SELECT e.carrera AS Carrera, COUNT(*) AS cantidad_estudiantes
FROM cursos c
JOIN inscripciones i ON i.id_curso = c.id
JOIN estudiantes e ON i.id_estudiante = e.id
GROUP BY c.id, c.nombre, e.carrera
HAVING COUNT(c.semestre) >= 2

--STEP THREE 
SELECT 
	COUNT(*) AS total_inscripciones,
	ROUND(AVG(calificacion_final), 2) AS promedio_general,
	MAX(calificacion_final) AS nota_maxima, 
	MIN(calificacion_final) AS nota_minima,
	SUM(calificacion_final) AS suma_calificaciones
FROM inscripciones;
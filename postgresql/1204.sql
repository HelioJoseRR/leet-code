-- Write your PostgreSQL query statement below
WITH PesoAcumulado AS (
    SELECT 
        person_name,
        SUM(weight) OVER (ORDER BY turn) AS peso_acumulado
    FROM Queue
)
SELECT person_name
FROM PesoAcumulado
WHERE peso_acumulado <= 1000
ORDER BY peso_acumulado DESC
LIMIT 1;
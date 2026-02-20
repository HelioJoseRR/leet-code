
SELECT e.name AS Employee
FROM Employee AS e
INNER JOIN Employee AS g
    ON e.managerId = g.id
WHERE e.salary > g.salary;
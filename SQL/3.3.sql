SELECT
    u.firstname,
    u.lastname
FROM
    user u
    INNER JOIN groupMembership gm ON gm.userID = u.id
WHERE
    u.firstname = 'Victor'
    AND gm.groupID NOT IN (
        SELECT
            id
        FROM
            [group]
        WHERE
            name LIKE 'TEST-%'
    );
SELECT
    u.firstname,
    g.name
FROM
    user u
    INNER JOIN groupMembership gm ON gm.userID = u.id
    INNER JOIN [group] g ON g.id = gm.groupID
WHERE
    u.created < gm.created
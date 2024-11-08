SELECT
    name
FROM
    [group]
WHERE
    id NOT IN (
        SELECT
            groupID
        FROM
            groupMembership
    );
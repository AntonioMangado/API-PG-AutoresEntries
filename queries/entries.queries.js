const queries = {
    getEntriesByEmail: `
                SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
                FROM entries AS e
                INNER JOIN authors AS a
                ON e.id_author=a.id_author
                WHERE a.email=$1
                ORDER BY e.title;`,

    getAllEntries: `
                SELECT e.title, e.content, e.date, e.category, au.name, au.surname, au.image
                FROM entries AS e
                INNER JOIN authors AS au ON e.id_author = au.id_author;`,

    createEntry: `
                INSERT INTO entries(title,content,id_author,category) 
                VALUES ($1,$2,
                (SELECT id_author FROM authors WHERE email=$3),$4)`,

    updateEntry: `
                UPDATE entries as e
                SET title=$1, content=$2, category=$3
                WHERE title=$4;`,

    deleteEntry: `
                DELETE from entries
                WHERE title=$1;`,
}

module.exports = queries;
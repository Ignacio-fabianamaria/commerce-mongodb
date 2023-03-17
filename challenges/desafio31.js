db.produtos.find(
    { $expr: { $gt: ["$curtidas", "$vendidos"] } },
    { nome: 1, _id: 0 },
    );

// <$expr>
// - possibilita criar expressões de consulta que comparam campos do mesmo documento 
// -é usado para comparar os valores dos campos "curtidas" e "vendidos"  
// https://www.mongodb.com/docs/v6.0/reference/operator/query/expr/   
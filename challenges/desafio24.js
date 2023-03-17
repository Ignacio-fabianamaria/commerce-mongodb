db.produtos.updateMany(
    {},
    {
        $push: {
            valoresNutricionais: { $each: [], $sort: { percentual: -1 } },
        },
    },
);

db.produtos.find({}, { nome: 1, valoresNutricionais: 1, _id: 0 });

// <$each: []> é utilizado com um array vazio para especificar
// que nenhum valor será adicionado , apenas será realizado uma ordenação.
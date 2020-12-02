exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('product_sales')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('product_sales').insert([
        { product_id: 1, starting_quantity: 0, num_sales: 0 },
        { product_id: 2, starting_quantity: 8, num_sales: 4 },

        { product_id: 3, starting_quantity: 0, num_sales: 2 },
      ]);
    });
};
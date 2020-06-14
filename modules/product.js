const products = [];

module.exports = {
    insert: (t) => {
        products.push({
            title: t
        });
    },
    pull: () => {
        return products;
    }
}
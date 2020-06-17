const products = [];

const EPid = [];


module.exports = {
    insert: p => {
        p.prodId = (products.length).toString();
        products[(products.length).toString()] = p;
        console.log(products[p.prodId]);
    },
    pull: () => {
        return products;
    },
    edit: {
        setId: id => {
            lastEditPid.push(id);
        },
        getObj: () => {
            let rt = products[(EPid.length - 1).toString];
            console.log(rt);
        }
    }
}
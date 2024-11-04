// Création de produits
const product1 = new Product(1, "Produit A", 10);
const product2 = new Product(2, "Produit B", 15);

// Création d'un panier d'achat
const cart = new ShoppingCart();

// Ajout d'éléments au panier
cart.addItem(product1, 2);
cart.addItem(product2, 1);

// Affichage des éléments du panier
console.log(cart.displayItems());

// Affichage du total des éléments dans le panier
console.log("Total items:", cart.getTotalItems());

// Affichage du prix total du panier
console.log("Total price:", cart.getTotalPrice());

// Suppression d'un élément du panier
cart.removeItem(1);

// Affichage du panier après suppression
console.log(cart.displayItems());
console.log("Total items after removal:", cart.getTotalItems());
console.log("Total price after removal:", cart.getTotalPrice());

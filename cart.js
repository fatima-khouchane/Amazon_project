export let cartArray = JSON.parse(localStorage.getItem("cart")) || [];

export function addCart(productId) {
  let selectElement = document.querySelector(`select[data-id="${productId}"]`);
  let selectedQte = selectElement ? selectElement.value : 1; // Vérifie si selectElement existe

  let itemRepete = cartArray.find((item) => productId === item.id);

  if (itemRepete) {
    itemRepete.qte = parseInt(itemRepete.qte) + parseInt(selectedQte);
    console.log("Quantité mise à jour :", itemRepete.qte);
  } else {
    let product = {
      id: productId,
      qte: selectedQte,
    };
    cartArray.push(product);
  }

  // Sauvegarde du panier dans localStorage
  localStorage.setItem("cart", JSON.stringify(cartArray));

  let confirmMessage = document.querySelector(
    `.confirm[data-id="${productId}"]`
  );
  if (confirmMessage) {
    confirmMessage.innerHTML = "Product added";
    setTimeout(() => (confirmMessage.innerHTML = ""), 2000);
  }

  let totalQte =
    cartArray.reduce((sum, item) => sum + parseInt(item.qte), 0) || 0;
  document.querySelector(".numOreders").innerHTML = `${totalQte}`;

  console.log(`Nombre des pièces du panier est : ${totalQte}`);
  console.log("Panier mis à jour :", cartArray);
}

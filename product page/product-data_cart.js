// ✅ 加入購物車的處理函數（唯一版本）
function handleAddToCart() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  if (!productId) {
    alert("找不到商品資料");
    return;
  }

  // ✅ 支援兩種資料來源：
// 1) productData（陣列，含 {id,name,price,image,spec}）
// 2) products（物件，含 {name,price,img,desc}）
  let product = null;

  if (Array.isArray(window.productData)) {
    product = window.productData.find(p => p.id === productId) || null;
  } else if (typeof products === "object" && products) {
  const p = products[productId];
  if (p) {
    product = {
      id: productId,
      name: p.name,
      price: p.price,
      image: p.img,   // 不動圖片連結
      spec: ""
    };
  }
}

  const qty = parseInt(document.getElementById("qty-num").textContent) || 1;

  // ✅ 直接把 qty 丟進去，交給 addToCart 處理加總
  addToCart({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    spec: product.spec,
    quantity: qty
  });

  // ✅ 你要的「彈跳視窗」
  alert("已加入購物車！");
}

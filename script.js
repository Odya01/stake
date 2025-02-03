const burgerBtn = document.querySelector(".burger");
const burgerMenu = document.querySelector(".nav__burger");
const navLink = document.querySelectorAll(".nav__list");

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  document.body.classList.toggle("overflow");
});

// close link click
navLink.forEach((e) => {
  e.addEventListener("click", () => {
    if (burgerMenu.classList.contains("active")) {
      burgerMenu.classList.remove("active");
      document.body.classList.remove("overflow");
      document.getElementById("burger-checkbox").checked = false;
    }
  });
});

// close out nav list
document.querySelector("main").addEventListener("click", () => {
  if (burgerMenu.classList.contains("active")) {
    burgerMenu.classList.remove("active");
    document.body.classList.remove("overflow");
    document.getElementById("burger-checkbox").checked = false;
  }
});

// scroll animation
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
  });
});

// card page with slider
document.addEventListener("DOMContentLoaded", () => {
  const products = {
    "giftcards.html": {
      brand: "Stake F1 Team",
      name: "Gift Card",
      discountPrice: "€0.00",
      oldPrice: "0",
      discountPercent: "0",
      images: ["images/gift-card-racing1.jpg"],
    },
    // teamwear
    "card-items/teamwear/teamwear1/index.html": {
      brand: "Stake F1 Teamwear",
      name: "Polo Shirt Men Kick",
      discountPrice: "€29.95",
      oldPrice: "€85.00",
      discountPercent: "-65%",
      images: ["images/teamwear1.jpg"],
    },
    "card-items/teamwear/teamwear2/index.html": {
      brand: "Stake F1 Teamwear",
      name: "Team Cap",
      discountPrice: "€24.95",
      oldPrice: "€47.50",
      discountPercent: "-47%",
      images: ["images/teamwear1.jpg"],
    },
    "card-items/teamwear/teamwear3/index.html": {
      brand: "Stake F1 Teamwear",
      name: "Rain Jacket Men",
      discountPrice: "€49.95",
      oldPrice: "€190.00",
      discountPercent: "-74%",
      images: ["images/teamwear1.jpg"],
    },
    "card-items/teamwear/teamwear4/index.html": {
      brand: "Stake F1 Teamwear",
      name: "Sweat Jacket Men",
      discountPrice: "€29.95",
      oldPrice: "€100.00",
      discountPercent: "-70%",
      images: ["images/teamwear1.jpg"],
    },
    "card-items/teamwear/teamwear5/index.html": {
      brand: "Stake F1 Teamwear",
      name: "T-Shirt Men",
      discountPrice: "€24.95",
      oldPrice: "€60.00",
      discountPercent: "-58%",
      images: ["images/teamwear1.jpg"],
    },
    "card-items/teamwear/teamwear6/index.html": {
      brand: "Stake F1 Teamwear",
      name: "Polo Shirt Men",
      discountPrice: "€29.95",
      oldPrice: "€85.00",
      discountPercent: "-65%",
      images: ["images/teamwear1.jpg"],
    },
    "card-items/teamwear/teamwear7/index.html": {
      brand: "Stake F1 Teamwear",
      name: "Trans-Seasonal Jacket",
      discountPrice: "€39.95",
      oldPrice: "€140.00",
      discountPercent: "-71%",
      images: ["images/teamwear1.jpg"],
    },
    "card-items/teamwear/teamwear8/index.html": {
      brand: "Valtteri Bottas",
      name: "Cap 77",
      discountPrice: "€19.95",
      oldPrice: "€47.50",
      discountPercent: "-58%",
      images: ["images/teamwear1.jpg"],
    },
    "card-items/teamwear/teamwear9/index.html": {
      brand: "Zhou Guanyu",
      name: "Cap 24",
      discountPrice: "€19.95",
      oldPrice: "€47.50",
      discountPercent: "-58%",
      images: ["images/teamwear1.jpg"],
    },
    "card-items/teamwear/teamwear10/index.html": {
      brand: "Théo Pourchaire",
      name: "Cap 98",
      discountPrice: "€24.95",
      oldPrice: "€47.50",
      discountPercent: "-47%",
      images: ["images/teamwear1.jpg"],
    },
    "card-items/teamwear/teamwear11/index.html": {
      brand: "Stake F1 Teamwear",
      name: "Bucket Hat",
      discountPrice: "€19.95",
      oldPrice: "€40.00",
      discountPercent: "-50%",
      images: ["images/teamwear1.jpg"],
    },
    "card-items/teamwear/teamwear12/index.html": {
      brand: "Stake F1 Teamwear",
      name: "Sweat Jacket Women",
      discountPrice: "€29.95",
      oldPrice: "€100.00",
      discountPercent: "-70%",
      images: ["images/teamwear1.jpg"],
    },
    "card-items/teamwear/teamwear13/index.html": {
      brand: "Stake F1 Teamwear",
      name: "Rain Jacket Women",
      discountPrice: "€39.95",
      oldPrice: "€190.00",
      discountPercent: "-79%",
      images: ["images/teamwear1.jpg"],
    },
    "card-items/teamwear/teamwear14/index.html": {
      brand: "Stake F1 Teamwear",
      name: "Polo Shirt Women",
      discountPrice: "€29.95",
      oldPrice: "€85.00",
      discountPercent: "-65%",
      images: ["images/teamwear1.jpg"],
    },
    "card-items/teamwear/teamwear15/index.html": {
      brand: "Stake F1 Teamwear",
      name: "T-Shirt Women",
      discountPrice: "€19.95",
      oldPrice: "€60.00",
      discountPercent: "-67%",
      images: ["images/teamwear1.jpg"],
    },
    "card-items/teamwear/teamwear16/index.html": {
      brand: "Stake F1 Teamwear",
      name: "Beanie",
      discountPrice: "€15.00",
      oldPrice: "€40.00",
      discountPercent: "-63%",
      images: ["images/teamwear1.jpg"],
    },

    // fanwear
    "card-items/fanwear/fanwear1/index.html": {
      brand: "Valtteri Bottas",
      name: "T-Shirt Men Keep It Weird",
      discountPrice: "€19.95",
      oldPrice: "€50.00",
      discountPercent: "-60%",
      images: ["images/card__img1.jpg"],
    },
    "card-items/fanwear/fanwear2/index.html": {
      brand: "Valtteri Bottas",
      name: "T-Shirt Men Keep It Weird",
      discountPrice: "€19.95",
      oldPrice: "€50.00",
      discountPercent: "-60%",
      images: ["images/card__img1.jpg"],
    },
    "card-items/fanwear/fanwear3/index.html": {
      brand: "Valtteri Bottas",
      name: "T-Shirt Women Keep It Weird",
      discountPrice: "€19.95",
      oldPrice: "€50.00",
      discountPercent: "-60%",
      images: ["images/card__img1.jpg"],
    },
    "card-items/fanwear/fanwear4/index.html": {
      brand: "Valtteri Bottas",
      name: "T-Shirt Women Keep It Weird",
      discountPrice: "€19.95",
      oldPrice: "€50.00",
      discountPercent: "-60%",
      images: ["images/card__img1.jpg"],
    },
    "card-items/fanwear/fanwear5/index.html": {
      brand: "Valtteri Bottas",
      name: "Cap Keep It Weird",
      discountPrice: "€19.95",
      oldPrice: "€47.50",
      discountPercent: "-58%",
      images: ["images/card__img1.jpg"],
    },
    "card-items/fanwear/fanwear6/index.html": {
      brand: "Valtteri Bottas",
      name: "Bucket Hat Keep It Weird",
      discountPrice: "€19.95",
      oldPrice: "€40.00",
      discountPercent: "-50%",
      images: ["images/card__img1.jpg"],
    },
    "card-items/fanwear/fanwear7/index.html": {
      brand: "Valtteri Bottas",
      name: "Tote Bag Keep It Weird",
      discountPrice: "€19.95",
      oldPrice: "€50.00",
      discountPercent: "-60%",
      images: ["images/card__img1.jpg"],
    },
    "card-items/fanwear/fanwear8/index.html": {
      brand: "Stake F1 Fanwear",
      name: "Bucket Hat Miami",
      discountPrice: "€19.95",
      oldPrice: "€40.00",
      discountPercent: "-50%",
      images: ["images/card__img1.jpg"],
    },
    "card-items/fanwear/fanwear9/index.html": {
      brand: "Stake F1 Fanwear",
      name: "T-Shirt Men Miami",
      discountPrice: "€19.95",
      oldPrice: "€55.00",
      discountPercent: "-64%",
      images: ["images/card__img1.jpg"],
    },
    "card-items/fanwear/fanwear10/index.html": {
      brand: "Stake F1 Team",
      name: "Drawstring Bag Miami",
      discountPrice: "€10.00",
      oldPrice: "€19.95",
      discountPercent: "-50%",
      images: ["images/card__img1.jpg"],
    },
    "card-items/fanwear/fanwear11/index.html": {
      brand: "Stake F1 Fanwear",
      name: "Cap Miami",
      discountPrice: "€19.95",
      oldPrice: "€47.50",
      discountPercent: "-58%",
      images: ["images/card__img1.jpg"],
    },
    "card-items/fanwear/fanwear12/index.html": {
      brand: "Stake F1 Team",
      name: "Lanyard",
      discountPrice: "€12.50",
      oldPrice: "",
      discountPercent: "",
      images: ["images/card__img1.jpg"],
    },

    // merch
    "card-items/merchandise/merchandise1/index.html": {
      brand: "Valtteri Bottas",
      name: "Tote Bag Keep It Weird",
      discountPrice: "€19.95",
      oldPrice: "€50.00",
      discountPercent: "-60%",
      images: ["images/card__img1.jpg"],
    },
    "card-items/merchandise/merchandise2/index.html": {
      brand: "Stake F1 Team",
      name: "Metal Water Bottle",
      discountPrice: "€15.00",
      oldPrice: "€29.95",
      discountPercent: "-50%",
      images: ["images/card__img1.jpg"],
    },
    "card-items/merchandise/merchandise3/index.html": {
      brand: "Stake F1 Team",
      name: "Drawstring Bag",
      discountPrice: "€10.00",
      oldPrice: "€19.95",
      discountPercent: "-50%",
      images: ["images/card__img1.jpg"],
    },
    "card-items/merchandise/merchandise4/index.html": {
      brand: "Stake F1 Team",
      name: "Coffee Travel Mug",
      discountPrice: "€15.00",
      oldPrice: "€34.95",
      discountPercent: "-57%",
      images: ["images/card__img1.jpg"],
    },
    "card-items/merchandise/merchandise5/index.html": {
      brand: "Stake F1 Team",
      name: "Drawstring Bag Miami",
      discountPrice: "€10.00",
      oldPrice: "€19.95",
      discountPercent: "-50%",
      images: ["images/card__img1.jpg"],
    },
    "card-items/merchandise/merchandise6/index.html": {
      brand: "Stake F1 Team",
      name: "Compact Umbrella",
      discountPrice: "€20.00",
      oldPrice: "€55.00",
      discountPercent: "-64%",
      images: ["images/card__img1.jpg"],
    },
    "card-items/merchandise/merchandise7/index.html": {
      brand: "Stake F1 Team",
      name: "Lanyard",
      discountPrice: "€12.50",
      oldPrice: "",
      discountPercent: "",
      images: ["images/card__img1.jpg"],
    },
  };

  const path = window.location.pathname.replace(/\\/g, "/").slice(1);
  const product =
    products[path] || products["card-items/teamwear/teamwear1/index.html"];

  const brandEl = document.querySelector("[data-product-brand]");
  const nameEl = document.querySelector("[data-product-name]");
  const discountEl = document.querySelector("[data-product-discount]");
  const oldEl = document.querySelector("[data-product-oldprice]");
  const discountPercentEl = document.querySelector(
    "[data-product-discount-percent]"
  );
  const prevBtn = document.querySelector("[data-prev]");
  const nextBtn = document.querySelector("[data-next]");
  const sizeElems = document.querySelectorAll(".card-slider__size");
  const addBtn = document.querySelector("[data-add-to-cart]");
  const sliderImgs = document.querySelectorAll("[data-slider-img]");

  if (brandEl && nameEl && discountEl && oldEl && discountPercentEl) {
    brandEl.textContent = product.brand;
    nameEl.textContent = product.name;
    discountEl.textContent = product.discountPrice;
    oldEl.textContent = product.oldPrice;
    discountPercentEl.textContent = product.discountPercent;
  }

  let currentImageIndex = 0;

  if (sliderImgs.length > 0) {
    sliderImgs.forEach((img, index) => {
      if (index === currentImageIndex) {
        img.classList.add("card-slider__img_active");
      } else {
        img.classList.remove("card-slider__img_active");
      }
    });
  }

  if (prevBtn && nextBtn && sliderImgs.length > 1) {
    prevBtn.addEventListener("click", () => {
      sliderImgs[currentImageIndex].classList.remove("card-slider__img_active");
      currentImageIndex =
        (currentImageIndex - 1 + sliderImgs.length) % sliderImgs.length;
      sliderImgs[currentImageIndex].classList.add("card-slider__img_active");
    });

    nextBtn.addEventListener("click", () => {
      sliderImgs[currentImageIndex].classList.remove("card-slider__img_active");
      currentImageIndex = (currentImageIndex + 1) % sliderImgs.length;
      sliderImgs[currentImageIndex].classList.add("card-slider__img_active");
    });
  }

  if (sizeElems) {
    sizeElems.forEach((size) => {
      size.addEventListener("click", () => {
        sizeElems.forEach((s) =>
          s.classList.remove("card-slider__size_active")
        );
        size.classList.add("card-slider__size_active");
      });
    });
  }

  // add to cart
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      if (typeof addToCart === "function") {
        addToCart(product, sliderImgs, currentImageIndex);
      } else {
        console.warn("addToCart is not defined. Check js order!");
      }
    });
  }

  // gift card logic
  function updatePrice(selectedValue) {
    if (product.name.toLowerCase().includes("gift card")) {
      discountEl.textContent = `€${selectedValue}.00`;
      product.discountPrice = `€${selectedValue}`;
    }
  }

  if (sizeElems && sizeElems.length > 0) {
    sizeElems.forEach((size) => {
      size.addEventListener("click", () => {
        sizeElems.forEach((s) =>
          s.classList.remove("card-slider__size_active")
        );
        size.classList.add("card-slider__size_active");

        // Если это подарочная карта, обновляем цену
        if (product.name.toLowerCase().includes("gift card")) {
          const selectedAmount = size.dataset.size;
          updatePrice(selectedAmount);
        }
      });
    });
  }

  if (product.name.toLowerCase().includes("gift card")) {
    const activeSizeEl = document.querySelector(".card-slider__size_active");
    if (activeSizeEl) {
      const selectedAmount = activeSizeEl.dataset.size;
      updatePrice(selectedAmount);
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {});

//
// cart logic - cart js
document.addEventListener("DOMContentLoaded", () => {
  // 1) СОЗДАЁМ КОРЗИНУ И ОВЕРЛЕЙ
  const cartOverlay = document.createElement("div");
  cartOverlay.classList.add("cart__overlay");
  cartOverlay.setAttribute("data-cart-overlay", "");

  const cartSidebar = document.createElement("aside");
  cartSidebar.classList.add("cart");
  cartSidebar.setAttribute("data-cart", "");

  // Заголовок
  const cartHeader = document.createElement("div");
  cartHeader.classList.add("cart__header");

  const cartTitle = document.createElement("h2");
  cartTitle.classList.add("heading", "cart__title");
  cartTitle.textContent = "Shopping cart";

  const cartClose = document.createElement("span");
  cartClose.classList.add("cart__close");
  cartClose.setAttribute("data-cart-close", "");
  cartClose.textContent = "×";

  cartHeader.appendChild(cartTitle);
  cartHeader.appendChild(cartClose);

  // Тело
  const cartBody = document.createElement("div");
  cartBody.classList.add("cart__body");
  cartBody.setAttribute("data-cart-items", "");

  // Футер
  const cartFooter = document.createElement("div");
  cartFooter.classList.add("cart__footer");

  const totalLabel = document.createElement("span");
  totalLabel.classList.add("cart__total-label");
  totalLabel.textContent = "Total:";

  const cartTotalEl = document.createElement("span");
  cartTotalEl.classList.add("cart__total-price");
  cartTotalEl.setAttribute("data-cart-total", "");
  cartTotalEl.textContent = "€0.00"; // Изначально

  cartFooter.appendChild(totalLabel);
  cartFooter.appendChild(cartTotalEl);

  cartSidebar.appendChild(cartHeader);
  cartSidebar.appendChild(cartBody);
  cartSidebar.appendChild(cartFooter);

  // Кнопка "Order Now"
  const checkoutBtn = document.createElement("button");
  checkoutBtn.classList.add("cart__checkout-btn");
  checkoutBtn.textContent = "Order Now";
  cartSidebar.appendChild(checkoutBtn);

  // Добавляем в body
  document.body.appendChild(cartOverlay);
  document.body.appendChild(cartSidebar);

  // 2) ЛОГИКА ОТКРЫТИЯ/ЗАКРЫТИЯ
  function openCart() {
    cartOverlay.classList.add("cart__overlay_active");
    cartSidebar.classList.add("cart_active");
    document.body.classList.add("body-lock");
    updateCartTotal();
  }
  function closeCart() {
    cartOverlay.classList.remove("cart__overlay_active");
    cartSidebar.classList.remove("cart_active");
    document.body.classList.remove("body-lock");
  }

  cartOverlay.addEventListener("click", (e) => {
    if (e.target === cartOverlay) {
      closeCart();
    }
  });
  cartClose.addEventListener("click", closeCart);

  checkoutBtn.addEventListener("click", () => {
    alert("Items selected. Redirecting to the checkout form...");
    window.location.href = "../../../contact.html";
  });

  // Если есть кнопка .header__cart, привяжем к ней открытие
  const cartBtn = document.querySelector(".header__cart");
  if (cartBtn) {
    cartBtn.addEventListener("click", openCart);
  }

  // 3) УВЕДОМЛЕНИЕ
  function showNotification(message, type = "info") {
    const notif = document.createElement("div");
    notif.classList.add("custom-notif", `notif-${type}`);
    notif.textContent = message;

    notif.style.position = "fixed";
    notif.style.right = "10px";
    notif.style.top = "10px";
    notif.style.zIndex = "9999";
    notif.style.padding = "10px 20px";
    notif.style.borderRadius = "5px";
    notif.style.backgroundColor = type === "error" ? "#e74c3c" : "#27ae60";
    notif.style.color = "#fff";
    notif.style.fontSize = "14px";
    notif.style.boxShadow = "0 2px 6px rgba(0,0,0,.2)";
    notif.style.opacity = "0";
    notif.style.transition = "opacity 0.3s ease";

    document.body.appendChild(notif);

    requestAnimationFrame(() => {
      notif.style.opacity = "1";
    });

    setTimeout(() => {
      notif.style.opacity = "0";
      setTimeout(() => {
        notif.remove();
      }, 300);
    }, 2500);
  }

  // 4) LOCALSTORAGE
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const headerPriceEl = document.querySelector(".header__price");

  function renderCartItems() {
    const cartBodyEl = cartBody;
    cartBodyEl.innerHTML = "";

    cartItems.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart__item");

      const img = document.createElement("img");
      img.classList.add("cart__item-img");
      img.src = item.image || "";
      img.alt = `${item.brand} ${item.name}`;

      const infoWrap = document.createElement("div");
      infoWrap.classList.add("cart__item-info");

      const itemName = document.createElement("h3");
      itemName.classList.add("cart__item-name");
      itemName.textContent = item.name;

      const itemDesc = document.createElement("p");
      itemDesc.classList.add("cart__item-desc");
      itemDesc.textContent = item.brand;

      const itemSize = document.createElement("p");
      itemSize.classList.add("cart__item-size");
      itemSize.textContent = `Size: ${item.size}`;

      // Цена * кол-во
      const singlePrice = parseFloat(item.price.replace("€", "")) || 0;
      const itemTotal = singlePrice * item.quantity;

      const itemPrice = document.createElement("p");
      itemPrice.classList.add("cart__item-price");
      itemPrice.textContent = `€${itemTotal.toFixed(2)}`;

      infoWrap.appendChild(itemName);
      infoWrap.appendChild(itemDesc);
      infoWrap.appendChild(itemSize);
      infoWrap.appendChild(itemPrice);

      // Блок количества
      const qtyWrap = document.createElement("div");
      qtyWrap.classList.add("cart__item-qty");

      const minusBtn = document.createElement("button");
      minusBtn.classList.add("cart__qty-btn");
      minusBtn.textContent = "-";

      const qtyNumber = document.createElement("span");
      qtyNumber.classList.add("cart__qty-number");
      qtyNumber.textContent = item.quantity;

      const plusBtn = document.createElement("button");
      plusBtn.classList.add("cart__qty-btn");
      plusBtn.textContent = "+";

      qtyWrap.appendChild(minusBtn);
      qtyWrap.appendChild(qtyNumber);
      qtyWrap.appendChild(plusBtn);

      // Удаление
      const removeBtn = document.createElement("span");
      removeBtn.classList.add("cart__remove");
      removeBtn.textContent = "×";

      // Минус
      minusBtn.addEventListener("click", () => {
        if (item.quantity > 1) {
          item.quantity--;
        }
        localStorage.setItem("cart", JSON.stringify(cartItems));
        renderCartItems();
        updateCartTotal();
      });
      // Плюс
      plusBtn.addEventListener("click", () => {
        item.quantity++;
        localStorage.setItem("cart", JSON.stringify(cartItems));
        renderCartItems();
        updateCartTotal();
      });
      // Удаление
      removeBtn.addEventListener("click", () => {
        cartItems.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        renderCartItems();
        updateCartTotal();
      });

      cartItem.appendChild(img);
      cartItem.appendChild(infoWrap);
      cartItem.appendChild(qtyWrap);
      cartItem.appendChild(removeBtn);

      cartBodyEl.appendChild(cartItem);
    });
  }

  function updateCartTotal() {
    let total = 0;
    cartItems.forEach((item) => {
      const priceNum = parseFloat(item.price.replace("€", "")) || 0;
      total += priceNum * item.quantity;
    });
    total = Math.round(total * 100) / 100;

    // Меняем внутри корзины
    cartTotalEl.textContent = `€${total.toFixed(2)}`;

    // Меняем также в шапке, если есть отдельный элемент
    if (headerPriceEl) {
      headerPriceEl.textContent = `€${total.toFixed(2)}`;
    }
  }

  // Начальный рендер при загрузке
  renderCartItems();
  updateCartTotal();

  /***** 5) addToCart *****/
  window.addToCart = function (product, sliderImgs, currentIndex) {
    let selectedSize = "OneSz";
    const sizeBlock = document.querySelector(".card-slider__sizes");
    if (sizeBlock) {
      const activeSize = document.querySelector(".card-slider__size_active");
      if (!activeSize) {
        showNotification("Please select a size first", "error");
        return;
      }
      selectedSize = activeSize.dataset.size;
    }

    let currentImage = "";
    if (sliderImgs && sliderImgs.length > 0) {
      currentImage = sliderImgs[currentIndex]
        ? sliderImgs[currentIndex].src
        : "";
    }

    const cartItem = {
      brand: product.brand,
      name: product.name,
      price: product.discountPrice,
      size: selectedSize,
      image: currentImage,
      quantity: 1,
    };

    const existing = cartItems.find(
      (el) => el.name === cartItem.name && el.size === cartItem.size
    );
    if (existing) {
      existing.quantity++;
    } else {
      cartItems.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    renderCartItems();
    updateCartTotal();

    showNotification("Item added to cart!", "success");
    // console.log("Current cart:", cartItems);
  };
});

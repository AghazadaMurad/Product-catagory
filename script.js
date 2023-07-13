const boxesEl = document.querySelector(".boxes");
const sectionsEl = document.querySelectorAll(".sections");

const cap1 = {
  name: "Nike",
  image: "/img/Cap1.jpeg",
  catagory: "Cap",
  description:
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo alias aliquam, id quis distinctio voluptatum inventore molestias sed animi explicabo voluptatem, quisquam magni optio.",
};
const cap2 = {
  name: "Adidas",
  image: "/img/Cap2.jpeg",
  catagory: "Cap",
  description:
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo alias aliquam, id quis distinctio voluptatum inventore molestias sed animi explicabo voluptatem, quisquam magni optio.",
};
const cap3 = {
  name: "Puma",
  image: "/img/Cap3.jpeg",
  catagory: "Cap",
  description:
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo alias aliquam, id quis distinctio voluptatum inventore molestias sed animi explicabo voluptatem, quisquam magni optio.",
};
const cap4 = {
  name: "Luis Vuiton",
  image: "/img/Cap4.jpeg",
  catagory: "Cap",
  description:
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo alias aliquam, id quis distinctio voluptatum inventore molestias sed animi explicabo voluptatem, quisquam magni optio.",
};
const cap5 = {
  name: "Prada",
  image: "/img/Cap5.webp",
  catagory: "Cap",
  description:
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo alias aliquam, id quis distinctio voluptatum inventore molestias sed animi explicabo voluptatem, quisquam magni optio.",
};
const pants1 = {
  name: "Nike",
  image: "/img/Pants1.webp",
  catagory: "Pants",
  description:
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo alias aliquam, id quis distinctio voluptatum inventore molestias sed animi explicabo voluptatem, quisquam magni optio.",
};
const pants2 = {
  name: "Adidas",
  image: "/img/Pants2.jpeg",
  catagory: "Pants",
  description:
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo alias aliquam, id quis distinctio voluptatum inventore molestias sed animi explicabo voluptatem, quisquam magni optio.",
};
const pants3 = {
  name: "Puma",
  image: "/img/Pants3.webp",
  catagory: "Pants",
  description:
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo alias aliquam, id quis distinctio voluptatum inventore molestias sed animi explicabo voluptatem, quisquam magni optio.",
};
const pants4 = {
  name: "Luis Vuiton",
  image: "/img/Pants4.avif",
  catagory: "Pants",
  description:
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo alias aliquam, id quis distinctio voluptatum inventore molestias sed animi explicabo voluptatem, quisquam magni optio.",
};
const pants5 = {
  name: "Prada",
  image: "/img/Pants5.jpeg",
  catagory: "Pants",
  description:
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo alias aliquam, id quis distinctio voluptatum inventore molestias sed animi explicabo voluptatem, quisquam magni optio.",
};
const shoes1 = {
  name: "Nike",
  image: "/img/Shoes1.jpeg",
  catagory: "Shoes",
  description:
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo alias aliquam, id quis distinctio voluptatum inventore molestias sed animi explicabo voluptatem, quisquam magni optio.",
};
const shoes2 = {
  name: "Adidas",
  image: "/img/Shoes2.webp",
  catagory: "Shoes",
  description:
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo alias aliquam, id quis distinctio voluptatum inventore molestias sed animi explicabo voluptatem, quisquam magni optio.",
};
const shoes3 = {
  name: "Puma",
  image: "/img/Shoes3.jpeg",
  catagory: "Shoes",
  description:
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo alias aliquam, id quis distinctio voluptatum inventore molestias sed animi explicabo voluptatem, quisquam magni optio.",
};
const shoes4 = {
  name: "Luis Vuiton",
  image: "/img/Shoes4.webp",
  catagory: "Shoes",
  description:
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo alias aliquam, id quis distinctio voluptatum inventore molestias sed animi explicabo voluptatem, quisquam magni optio.",
};
const shoes5 = {
  name: "Prada",
  image: "/img/Shoes5.jpeg",
  catagory: "Shoes",
  description:
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo alias aliquam, id quis distinctio voluptatum inventore molestias sed animi explicabo voluptatem, quisquam magni optio.",
};
const tshirt1 = {
  name: "Nike",
  image: "/img/t-shirt1.avif",
  catagory: "T-shirt",
  description:
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo alias aliquam, id quis distinctio voluptatum inventore molestias sed animi explicabo voluptatem, quisquam magni optio.",
};
const tshirt2 = {
  name: "Adidas",
  image: "/img/t-shirt2.jpeg",
  catagory: "T-shirt",
  description:
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo alias aliquam, id quis distinctio voluptatum inventore molestias sed animi explicabo voluptatem, quisquam magni optio.",
};
const tshirt3 = {
  name: "Puma",
  image: "/img/t-shirt3.jpeg",
  catagory: "T-shirt",
  description:
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo alias aliquam, id quis distinctio voluptatum inventore molestias sed animi explicabo voluptatem, quisquam magni optio.",
};
const tshirt4 = {
  name: "Luis Vuiton",
  image: "/img/t-shirt4.webp",
  catagory: "T-shirt",
  description:
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo alias aliquam, id quis distinctio voluptatum inventore molestias sed animi explicabo voluptatem, quisquam magni optio.",
};
const tshirt5 = {
  name: "Prada",
  image: "/img/t-shirt5.webp",
  catagory: "T-shirt",
  description:
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo alias aliquam, id quis distinctio voluptatum inventore molestias sed animi explicabo voluptatem, quisquam magni optio.",
};

const allProducts = [
  cap1,
  cap2,
  cap3,
  cap4,
  cap5,
  pants1,
  pants2,
  pants3,
  pants4,
  pants5,
  shoes1,
  shoes2,
  shoes3,
  shoes4,
  shoes5,
  tshirt1,
  tshirt2,
  tshirt3,
  tshirt4,
  tshirt5,
];

for (let i = 0; i < sectionsEl.length; i++) {
  sectionsEl[i].addEventListener("click", (e) => {
    e.preventDefault();
    boxesEl.innerHTML = "";
    boxesEl.classList.remove("hidden");
    for (let i = 0; i < allProducts.length; i++) {
      if (allProducts[i].catagory === e.target.innerHTML) {
        let boxEl = `
          <div class="box">
          <div class="box-img">
            <img src="${allProducts[i].image}" alt="" />
          </div>
          <div class="about">
            <p class="name">${allProducts[i].name}</p>
            <p class="desc">
            ${allProducts[i].description}
            </p>
          </div>
        </div>`;

        boxesEl.innerHTML += boxEl;
      }
    }
  });
}

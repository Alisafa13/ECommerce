export const components: { title: string; href: string; description: string }[] = [
  {
    title: "Men's Clothing",
    href: "/shop/mens-clothing",
    description:
      "Discover our collection of stylish and comfortable clothing for men, including shirts, pants, jackets and more.",
  },
  {
    title: "Women's Clothing",
    href: "/shop/womens-clothing",
    description:
      "Shop the latest trends in women's fashion — dresses, blouses, skirts, and everyday essentials.",
  },
  {
    title: "Kids' Clothing",
    href: "/shop/kids-clothing",
    description:
      "Fun and durable clothes for kids of all ages, perfect for playtime or special occasions.",
  },
  {
    title: "Shoes & Footwear",
    href: "/shop/shoes",
    description:
      "Find the perfect pair — sneakers, boots, heels, and more for every outfit and occasion.",
  },
  {
    title: "Accessories",
    href: "/shop/accessories",
    description:
      "Complete your look with hats, belts, bags, and other accessories to match your style.",
  },
  {
    title: "Sportswear",
    href: "/shop/sportswear",
    description:
      "Stay active in our high-quality sportswear for gym, running, yoga, and outdoor adventures.",
  },
]

export interface SssType{
    id:string;
    title:string;
    description:string;
}

export const Sss:SssType[]=[
    {
    id: "1",
    title: "Title 1",
    description:
      "Shop the latest trends in women's fashion — dresses, blouses, skirts, and everyday essentials."
    },
    {
    id: "2",
    title: "Title 2",
    description:
      "Shop the latest trends in women's fashion — dresses, blouses, skirts, and everyday essentials."
    },
    {
    id: "3",
    title: "Title 3",
    description:
      "Shop the latest trends in women's fashion — dresses, blouses, skirts, and everyday essentials."
    },
]
export interface CarouselType{
  id:number;
  image:string;
}
export const CarouselList:CarouselType[]=[
  {
    id:1,
    image:"/carousel/image1.jpg"
  },
  {
    id:2,
    image:"/carousel/image2.jpg"
  },
  {
    id:3,
    image:"/carousel/image3.webp"
  },
  {
    id:4,
    image:"/carousel/image4.jpg"
  },
]
export interface ProductType{
    id:number;
    title:string;
    price:number;
    mrp:number;
    description:string;
    image:string;
}
export const Products:ProductType[]=[
    {
        id:1,
        title:"Product One",
        price:100,
        mrp:120,
        description:"Description for product one",
        image:"/products/sneaker1.jpg"
    },
     {
        id:2,
        title:"Product Two",
        price:100,
        mrp:120,
        description:"Description for product two",
        image:"/products/sneaker2.jpg"
    },
     {
        id:3,
        title:"Product Three",
        price:100,
        mrp:120,
        description:"Description for product three",
        image:"/products/sneaker3.jpg"
    },
     {
        id:4,
        title:"Product Four",
        price:100,
        mrp:120,
        description:"Description for product four",
        image:"/products/sneaker4.webp"
    },
     {
        id:5,
        title:"Product Five",
        price:100,
        mrp:120,
        description:"Description for product five",
        image:"/products/sneaker5.avif"
    },
     {
        id:6,
        title:"Product Six",
        price:100,
        mrp:120,
        description:"Description for product six",
        image:"/products/sneaker6.jpg"
    },
     {
        id:7,
        title:"Product Seven",
        price:100,
        mrp:120,
        description:"Description for product seven",
        image:"/products/sneaker7.webp"
    },
     {
        id:8,
        title:"Product Eight",
        price:100,
        mrp:120,
        description:"Description for product eight",
        image:"/products/sneaker8.jpg"
    },
     {
        id:9,
        title:"Product Nine",
        price:100,
        mrp:120,
        description:"Description for product nine",
        image:"/products/sneaker9.webp"
    },
]
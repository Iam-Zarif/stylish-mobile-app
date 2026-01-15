import { useState } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  stock: string;
  image: string;
  
}

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Red Sneakers",
      price: 120,
      qty: 1,
      stock: "In Stock",
      image:
        "https://cdn.prod.website-files.com/66f937b4438ff4d8d9069565/6735ebbc0a7dec8625bf45ff_8_Creative_Product_Photography_Ideas_You_Need_to_Try.webp",
    },
    {
      id: "2",
      name: "Leather Bag",
      price: 250,
      qty: 1,
      stock: "Only 3 left",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjb7qiPTxbhmkePtf40yKn2rgZk1XX6_EcDg&s",
    },
    {
      id: "3",
      name: "Smart Watch",
      price: 199,
      qty: 2,
      stock: "In Stock",
      image:
        "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?fm=jpg&q=60&w=3000",
    },
    {
      id: "4",
      name: "Sunglasses",
      price: 89,
      qty: 1,
      stock: "In Stock",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPipmiOkIHVxOBWEbYlFxZHjJR6bnV2hllYA&s",
    },
    {
      id: "5",
      name: "Running Shoes",
      price: 140,
      qty: 1,
      stock: "Only 2 left",
      image:
        "https://cdn.prod.website-files.com/66f937b4438ff4d8d9069565/6735ebbc0a7dec8625bf45ff_8_Creative_Product_Photography_Ideas_You_Need_to_Try.webp",
    },
    {
      id: "6",
      name: "Casual Backpack",
      price: 180,
      qty: 1,
      stock: "In Stock",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjb7qiPTxbhmkePtf40yKn2rgZk1XX6_EcDg&s",
    },
    {
      id: "7",
      name: "Running Shoes",
      price: 140,
      qty: 1,
      stock: "Only 2 left",
      image:
        "https://cdn.prod.website-files.com/66f937b4438ff4d8d9069565/6735ebbc0a7dec8625bf45ff_8_Creative_Product_Photography_Ideas_You_Need_to_Try.webp",
    },
    {
      id: "8",
      name: "Casual Backpack",
      price: 180,
      qty: 1,
      stock: "In Stock",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjb7qiPTxbhmkePtf40yKn2rgZk1XX6_EcDg&s",
    },
  ]);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const updateQty = (id: string, type: "inc" | "dec") => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return { cartItems, subtotal, updateQty, removeItem };
};

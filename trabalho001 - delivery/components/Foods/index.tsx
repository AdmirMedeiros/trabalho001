import React from "react";
import { FoodItem } from "..";
import Styles from "./styles.module.css";

export function Foods() {
  const foods = [
    {
      id: "1",
      name: "Gigantic Burger",
      imageUrl: "/foods/burger.jpg",
      deliveryFee: "Entrega grátis",
      rating: 4.6,
      reviews: 77,
      category: "Hambúrguer",
      deliveryTime: "20 min - 30 min",
    },
    {
      id: "2",
      name: "Pizza de Queijo ",
      imageUrl: "/foods/pizza.jpg",
      deliveryFee: "R$ 6,00 de entrega",
      rating: 4.5,
      reviews: 35,
      category: "Pizza",
      deliveryTime: "30 min - 35 min",
    },
    {
      id: "3",
      name: "Espetos Leguminosos",
      imageUrl: "/foods/vegan.jpg",
      deliveryFee: "R$ 8,00 de entrega",
      rating: 4.8,
      reviews: 57,
      category: "Espetos",
      deliveryTime: "16 min - 22 min",
    },
    {
      id: "4",
      name: "Pizza de Pepperoni",
      imageUrl: "/foods/pizza-peperoni.jpg",
      deliveryFee: "R$ 6,00 de entrega",
      rating: 4.7,
      reviews: 136,
      category: "Pizza",
      deliveryTime: "45 min - 56 min",
    },
    {
      id: "5",
      name: "Chef’s Burger ",
      imageUrl: "/foods/chef-burger.jpg",
      deliveryFee: "Entrega grátis",
      rating: 4.5,
      reviews: 121,
      category: "Hambúrguer",
      deliveryTime: "22 min - 45 min",
    },
    {
      id: "6",
      name: "Arroz Natural",
      imageUrl: "/foods/vegetable.jpg",
      deliveryFee: "R$ 5,00 de entrega",
      rating: 5,
      reviews: 20,
      category: "Vegano",
      deliveryTime: "30 min - 55 min",
    },
  ];

  return (
    <div>
      <div className={Styles.header}>
        <h2>Pedidos populares</h2>
        <div>
          <p>Hoje</p>
        </div>
      </div>
      <div className="flex gap-6 justify-between flex-wrap">
        {foods.map((food, index) => (
          <FoodItem key={index} {...food} />
        ))}
      </div>
    </div>
  );
}

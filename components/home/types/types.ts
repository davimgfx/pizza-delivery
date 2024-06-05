export interface PizzaProps {
    id: string;
    name: string;
    priceSmall: number;
    priceMedium: number;
    priceLarge: number;
    description: string;
    image: string;
    createdAt: string;
    updatedAt: string;
}

export interface PizzaCardProps {
    pizza: PizzaProps;
  }
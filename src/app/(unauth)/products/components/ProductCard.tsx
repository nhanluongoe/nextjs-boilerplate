interface ProductCardProps {
  name: string;
  description: string;
  price: number;
}
export default function ProductCard(props: ProductCardProps) {
  const { name, description, price } = props;
  return (
    <div className="flex flex-col rounded-lg bg-white text-dark gap-2 p-4">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price} $</p>
    </div>
  );
}

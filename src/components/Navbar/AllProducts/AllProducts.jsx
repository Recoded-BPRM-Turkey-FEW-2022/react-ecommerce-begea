import CardView from "../../Product/CardView/CardView";
import { useContext } from "react";
import { ThemeProduct } from "../../../App";

export default function AllProducts() {
  const single = useContext(ThemeProduct);
  console.log(single);
  return (
    <div class="flex flex-wrap gap-8 m-auto w-3/4 mt-8">
      {single.map((product, index) => {
        return (
          <CardView
            key={index}
            title={product.title}
            categories={product.category}
            price={product.price}
            image={product.image}
          />
        );
      })}
    </div>
  );
}

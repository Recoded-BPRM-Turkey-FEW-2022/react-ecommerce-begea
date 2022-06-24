import { useLayoutEffect, useState } from "react";

export default function productCategories() {
  const [categories, setCategories] = useState([]);

  useLayoutEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return categories;
}

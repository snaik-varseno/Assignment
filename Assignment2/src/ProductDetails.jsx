import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{width: "100%", margin: "auto"}}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <button onClick={() => navigate(-1)}> Back </button>
    </div>
  );
};

export default ProductDetails;
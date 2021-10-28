import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title,  price,poster_path, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/movieInfo/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;

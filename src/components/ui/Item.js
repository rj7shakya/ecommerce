import React from "react";

const Item = () => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="https://cdn.shopify.com/s/files/1/1132/3440/products/FA7BD0EF-340D-491A-B069-9E6AA949CACC_large.jpg?v=1584063685"
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Item;

import React from "react";

const Item = () => {
  return (
    <div>
      <div class="card w-25 ">
        <img
          class="card-img-top"
          src="https://cdn.shopify.com/s/files/1/1132/3440/products/FA7BD0EF-340D-491A-B069-9E6AA949CACC_large.jpg?v=1584063685"
          alt="Card image cap"
        ></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;

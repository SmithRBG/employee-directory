import React from "react";

function Card() {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">
         
        </p>
      </div>
    </div>
  );
}

export default Card;

/* Why won't the following code run?
return (
    <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  );
   */
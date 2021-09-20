import React from "react";

//Use these links/buttons to sort information...
function Navbar() {
  return (
    <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/">Employee Directory</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Contact Me </a>
  </li>
</ul>
   
  );
}

export default Navbar;

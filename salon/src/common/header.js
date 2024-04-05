import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <div class="container">
          <nav class="py-md-4 py-3 d-lg-flex">
            <div id="logo">
              <h1>
                {" "}
                <a href="index.html">
                  <span class="fa fa-scissors"></span> Men's Salon
                </a>
              </h1>
            </div>
            <label for="drop" class="toggle">
              <span class="fa fa-bars"></span>
            </label>
            <input type="checkbox" id="drop" />
            <ul class="menu mt-lg-4 ml-auto">
              <li class="active">
                <a href="index.html">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li class="">
                <a href="about.html">
                  <Link to="/about">About Us</Link>
                </a>
              </li>
              <li class="">
                <a href="services.html">
                  <Link to="/services">service</Link>
                </a>
              </li>
              <li class="">
                <a href="gallery.html">
                  <Link to="/Gallary">Gallery</Link>
                </a>
              </li>
              <li class="mr-2">
                <a href="contact.html">
                  <Link to="/Book">Booking</Link>
                </a>
              </li>
              <li class="">
                <span>
                  <span class="fa fa-phone"></span> +91 9099674767
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

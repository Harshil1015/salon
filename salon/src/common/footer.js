export default function Footer() {
  return (
    <>
      <footer class="py-sm-5 py-4">
        <div class="container py-md-3">
          <div class="footer-logo text-center">
            <a class="navbar-brand" href="index.html">
              <span class="fa fa-scissors"></span>Men's Salon
            </a>
          </div>
          <div class="row my-4 footer-middle">
            <div class="col-md-5 text-md-right address">
              <p>
                <span class="fa fa-map-marker"></span>Location : 123 Street W,
                Seattle WA 99999 Paris, France.
              </p>
            </div>
            <div class="col-md-2 text-md-center my-md-0 my-sm-4 my-2 footer-icon">
              <span class="fa fa-scissors"></span>
            </div>
            <div class="col-md-5 text-md-left phone">
              <p>
                <span class="fa fa-phone"></span>Phone : +121 568 789 901
              </p>
              <p>
                <span class="fa fa-envelope-open"></span>Email :{" "}
                <a href="mailto:example@mail.com">example@mail.com</a>
              </p>
            </div>
          </div>
          <div class="footer-grid">
            <div class="social text-center">
              <ul class="d-flex justify-content-center">
                <li class="mx-2">
                  <a href="#">
                    <span class="fa fa-facebook"></span>
                  </a>
                </li>
                <li class="mx-2">
                  <a href="#">
                    <span class="fa fa-twitter"></span>
                  </a>
                </li>
                <li class="mx-2">
                  <a href="#">
                    <span class="fa fa-rss"></span>
                  </a>
                </li>
                <li class="mx-2">
                  <a href="#">
                    <span class="fa fa-linkedin"></span>
                  </a>
                </li>
                <li class="mx-2">
                  <a href="#">
                    <span class="fa fa-google-plus"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

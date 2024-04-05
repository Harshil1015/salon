export default function Gallaryphoto() {
  return (
    <>
      <div class="gallery py-sm-5 py-4 position-relative" id="gallery">
        <div class="container py-lg-3">
          <h2 class="heading text-center mb-lg-5 mb-sm-4 mb-3 editContent">
            Our Gallery
          </h2>
          <div class="news-grids gal">
            <div class="row">
              {Gallaryphotoobj.map((a, i) => {
                return (
                  <Gallaryphotoprops
                    image={a["image"]}
                    hairstyle={a["hairstyle"]}
                    body={a["body"]}
                  />
                );
              })}
            </div>
          </div>
          <div class="news-grids gal">
            <div class="row">
              <div class="col-lg-3 col-md-4 col-sm-6 gal-img">
                <a href="#gal1">
                  <img
                    src="images/g1.jpg"
                    alt="projects image"
                    class="img-fluid"
                  />
                </a>
                <h5>Hairstyle 1</h5>
                <p>Nullam dui mi, vulputater act metus dolor sit amet.</p>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6 gal-img my-md-0">
                <a href="#gal2">
                  <img
                    src="images/g2.jpg"
                    alt="projects image"
                    class="img-fluid"
                  />
                </a>
                <h5>Hairstyle 2</h5>
                <p>Nullam dui mi, vulputater act metus dolor sit amet.</p>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6 gal-img">
                <a href="#gal3">
                  <img
                    src="images/g3.jpg"
                    alt="projects image"
                    class="img-fluid"
                  />
                </a>
                <h5>Hairstyle 3</h5>
                <p>Nullam dui mi, vulputater act metus dolor sit amet.</p>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6 gal-img">
                <a href="#gal4">
                  <img
                    src="images/g4.jpg"
                    alt="projects image"
                    class="img-fluid"
                  />
                </a>
                <h5>Hairstyle 4</h5>
                <p>Nullam dui mi, vulputater act metus dolor sit amet.</p>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6 gal-img">
                <a href="#gal5">
                  <img
                    src="images/g5.jpg"
                    alt="projects image"
                    class="img-fluid"
                  />
                </a>
                <h5>Hairstyle 5</h5>
                <p>Nullam dui mi, vulputater act metus dolor sit amet.</p>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6 gal-img my-md-0">
                <a href="#gal6">
                  <img
                    src="images/g6.jpg"
                    alt="projects image"
                    class="img-fluid"
                  />
                </a>
                <h5>Hairstyle 6</h5>
                <p>Nullam dui mi, vulputater act metus dolor sit amet.</p>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6 gal-img">
                <a href="#gal1">
                  <img
                    src="images/g1.jpg"
                    alt="projects image"
                    class="img-fluid"
                  />
                </a>
                <h5>Hairstyle 7</h5>
                <p>Nullam dui mi, vulputater act metus dolor sit amet.</p>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6 gal-img">
                <a href="#gal2">
                  <img
                    src="images/g2.jpg"
                    alt="projects image"
                    class="img-fluid"
                  />
                </a>
                <h5>Hairstyle 8</h5>
                <p>Nullam dui mi, vulputater act metus dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>

        <div id="gal1" class="popup-effect">
          <div class="popup">
            <img src="images/g1.jpg" alt="Popup Image" class="img-fluid" />
            <p>
              Nullam dui mi, vulputater act metus dolor sit amet, onec consequat
              sapien utleo dolor rhoncus.
            </p>
            <a class="close" href="#gallery">
              &times;
            </a>
          </div>
        </div>

        <div id="gal2" class="popup-effect">
          <div class="popup">
            <img src="images/g2.jpg" alt="Popup Image" class="img-fluid" />
            <p>
              Nullam dui mi, vulputater act metus dolor sit amet, onec consequat
              sapien utleo dolor rhoncus.
            </p>
            <a class="close" href="#gallery">
              &times;
            </a>
          </div>
        </div>

        <div id="gal3" class="popup-effect">
          <div class="popup">
            <img src="images/g3.jpg" alt="Popup Image" class="img-fluid" />
            <p>
              Nullam dui mi, vulputater act metus dolor sit amet, onec consequat
              sapien utleo dolor rhoncus.
            </p>
            <a class="close" href="#gallery">
              &times;
            </a>
          </div>
        </div>

        <div id="gal4" class="popup-effect">
          <div class="popup">
            <img src="images/g4.jpg" alt="Popup Image" class="img-fluid" />
            <p>
              Nullam dui mi, vulputater act metus dolor sit amet, onec consequat
              sapien utleo dolor rhoncus.
            </p>
            <a class="close" href="#gallery">
              &times;
            </a>
          </div>
        </div>

        <div id="gal5" class="popup-effect">
          <div class="popup">
            <img src="images/g5.jpg" alt="Popup Image" class="img-fluid" />
            <p>
              Nullam dui mi, vulputater act metus dolor sit amet, onec consequat
              sapien utleo dolor rhoncus.
            </p>
            <a class="close" href="#gallery">
              &times;
            </a>
          </div>
        </div>

        <div id="gal6" class="popup-effect">
          <div class="popup">
            <img src="images/g6.jpg" alt="Popup Image" class="img-fluid" />
            <p>
              Nullam dui mi, vulputater act metus dolor sit amet, onec consequat
              sapien utleo dolor rhoncus.
            </p>
            <a class="close" href="#gallery">
              &times;
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
let Gallaryphotoobj = [
  {
    image: "images/g1.jpg",
    hairstyle: "Hairstyle 1",
    body: "Nullam dui mi, vulputater act metus dolor sit amet",
  },
  {
    image: "images/g2.jpg",
    hairstyle: "Hairstyle 2",
    body: "Nullam dui mi, vulputater act metus dolor sit amet",
  },
  {
    image: "images/g3.jpg",
    hairstyle: "Hairstyle 3",
    body: "Nullam dui mi, vulputater act metus dolor sit amet",
  },
  {
    image: "images/g4.jpg",
    hairstyle: "Hairstyle 4",
    body: "Nullam dui mi, vulputater act metus dolor sit amet",
  },
  {
    image: "images/g5.jpg",
    hairstyle: "Hairstyle 5",
    body: "Nullam dui mi, vulputater act metus dolor sit amet",
  },
  {
    image: "images/g6.jpg",
    hairstyle: "Hairstyle 6",
    body: "Nullam dui mi, vulputater act metus dolor sit amet",
  },
  {
    image: "images/g1.jpg",
    hairstyle: "Hairstyle 7",
    body: "Nullam dui mi, vulputater act metus dolor sit amet",
  },
  {
    image: "images/g2.jpg",
    hairstyle: "Hairstyle 8",
    body: "Nullam dui mi, vulputater act metus dolor sit amet",
  },
];

function Gallaryphotoprops(props) {
  return (
    <>
      <div class="col-lg-3 col-md-4 col-sm-6 gal-img">
        <a>
          <img src={props.image} alt="projects image" class="img-fluid" />
        </a>
        <h5>{props.hairstyle}</h5>
        <p>{props.body}</p>
      </div>
    </>
  );
}

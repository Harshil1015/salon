export default function Testimonials() {
  return (
    <>
      <section class="testi py-5" id="testi">
        <div class="container pb-xl-5 py-lg-3">
          <h3 class="text-center heading mb-5">What our customers say</h3>
          <div class="row">
            {testimonialsobj.map((a, i) => {
              return (
                <Testimonialsprops
                  photo={a["photo"]}
                  detail={a["detail"]}
                  customername={a["customername"]}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
let testimonialsobj = [
  {
    detail:
      "Onec consequat sapien utleo dolor rhoncus. Nullam dui mi, vulputater act metussemper. Vestibulum sed dolor.",
    customername: "Johnson",
    photo: <img src="images/te1.jpg" alt="" class="img-fluid" />,
  },
  {
    detail:
      "Onec consequat sapienutleo dolor rhoncus. Nullam dui mi, vulputater act metussemper. Vestibulum sed dolor.",
    customername: "walkner",
    photo: <img src="images/te2.png" alt="" class="img-fluid" />,
  },
];

function Testimonialsprops(props) {
  return (
    <>
      <div class="col-lg-6 mt-lg-0 mt-sm-5 mt-4">
        <div class="row testi-cgrid border-right-grid">
          <div class="col-sm-4 testi-icon mb-sm-0 mb-3">{props.photo}</div>
          <div class="col-sm-8">
            <p class="mx-auto">
              <span class="fa fa-quote-left"></span> {props.detail}
            </p>
            <h6 class="b-w3ltxt mt-3">
              {props.customername} - <span>customer</span>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

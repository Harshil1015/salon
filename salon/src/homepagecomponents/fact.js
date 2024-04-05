export default function Fact() {
  return (
    <>
      <section class="facts" id="facts">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 py-5">
              <div class="row inner-heading">
                <h2 class="heading text-capitalize my-md-4"> Why Choose Us</h2>
                <p class="mt-md-0 mt-2">
                  Donec cursus congue risus, quis varius velit accumsan aliquam.
                  Morbi semper nunc. Perspiciatis unde omnis iste natus doloret
                  ipsum volupte ut accusal ntium dolor remque laudantium, totam
                  dolor
                </p>
              </div>
              <div class="row mt-5 fact-grid-main">
                {factobj.map((a, i) => {
                  return (
                    <Factprops
                      icon={a["icon"]}
                      number={a["number"]}
                      description={a["description"]}
                    />
                  );
                })}
              </div>
            </div>
            <div class="col-lg-5 p-lg-0 text-lg-right text-center">
              <img src="images/facts.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

let factobj = [
  {
    icon: "trophy",
    number: "250",
    description: "Experienced Barbers",
  },
  {
    icon: "scissors",
    number: "50+",
    description: "Amazing Hairstyles",
  },
  {
    icon: "smile-o",
    number: "2000+",
    description: "Satisfied clients",
  },
];
function Factprops(props) {
  return (
    <>
      <div class="col-sm-4 stats-grid">
        <span class={`fa fa-${props.icon}`}></span>
        <span>{props.number}</span>
        <h4>{props.description}</h4>
      </div>
    </>
  );
}

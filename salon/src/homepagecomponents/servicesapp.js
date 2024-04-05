export default function Servicespage() {
  return (
    <>
      <section class="services py-5" id="services">
        <div class="container py-lg-5 py-3">
          <div class="row service-grid-grids text-center">
            {serviceappObj.map((a, i) => {
              return (
                <Serviceappprops
                  logo={a["logo"]}
                  title={a["title"]}
                  body={a["body"]}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

let serviceappObj = [
  {
    logo: "puzzle-piece",
    title: "Skilled Barbers",
    body: "Perspiciatis unde omnis iste natus doloret ipsumvolupte utaccusal ntium dolor remque laudantium, totam dolor.",
  },
  {
    logo: "scissors",
    title: "Hair Stylists",
    body: "Perspiciatis unde omnis iste natus doloret ipsumvolupte utaccusal ntium dolor remque laudantium, totam dolor.",
  },
  {
    logo: "sliders",
    title: "Beard Grooming",
    body: "Perspiciatis unde omnis iste natus doloret ipsumvolupte utaccusal ntium dolor remque laudantium, totam dolor.",
  },
];
function Serviceappprops(props) {
  return (
    <>
      <div class="col-lg-4 col-md-6 service-grid service-grid1">
        <div class="service-icon">
          <span class={`fa fa-${props.logo}`}></span>
        </div>
        <h4 class="mt-3">{props.title}</h4>
        <p class="mt-3">{props.body}</p>
      </div>
    </>
  );
}

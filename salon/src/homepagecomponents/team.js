export default function Team() {
  return (
    <>
      <section class="team py-5" id="team">
        <div class="container py-md-4">
          <div class="title-desc text-center">
            <h3 class="heading text-capitalize mb-md-5 mb-4">
              our expert stylists
            </h3>
          </div>
          <div class="row team-grid">
            {teamObj.map((a, i) => {
              return (
                <Expert img={a["img"]} name={a["name"]} role={a["role"]} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
let teamObj = [
  { img: "team1.jpg", name: "Williamson", role: "role in detail" },
  { img: "team2.jpg", name: "Kristiana", role: "role in detail" },
  { img: "team3.jpg", name: "Thomson", role: "role in detail" },
  { img: "team4.jpg", name: "Watson", role: "role in detail" },
];
function Expert(props) {
  return (
    <>
      <div class="col-lg-3 col-sm-6">
        <div class="box13">
          <img
            src={`images/${props.img}`}
            class="img-fluid img-thumbnail"
            alt=""
          />
          <div class="box-content">
            <h3 class="title">{props.name}</h3>
            <span class="post">{props.role}</span>
            <ul class="social">
              <li>
                <a href="#">
                  <span class="fa fa-facebook"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="fa fa-twitter"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

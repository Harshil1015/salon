export default function About() {
  return (
    <>
      <section class="about py-5" id="about">
        <div class="container py-lg-5">
          <div class="row about-grids">
            <div class="col-lg-8">
              <h2 class="mt-lg-3">Welcome to our Hair salon</h2>
              <h5 class="plane mt-md-4 mt-3">
                We make your hair <span>look Great, perfect!</span>
              </h5>
              <p class="">
                Sed ut perspiciatis unde omnis iste natus error ipsum voluptatem
                ut accusa ntium dolor remque laudantium, totam rem aperiam,
                eaque ipsa quae abse illo quasi sed architecto beatae vitae
                dicta sut dolor etr explicabo. Morbi a luctus magna, eut rutrum
                turpis. Sed perspiciatis unde omnis iste natus error ipsum
                voluptatem ut accusantium dolor.
              </p>
              <p class="mt-3">
                Eaque ipsa quae abse illo quasi sed architecto beatae vitae
                dicta sut dolor etr explicabo. Morbi a luctus magna, eu rutrum
                turpis. Sed perspiciatis unde omnis iste natus error et ipsum
                voluptatem ut accusantium dolor voluptatem ut accusa ntium
                dolor.
              </p>
            </div>
            <div class="col-lg-4 col-md-8 mt-lg-0 mt-5">
              <div class="padding">
                <img src="images/mustache.png" class="img-fluid" alt="" />
                <form action="#" method="post">
                  <div class="form-style-agile">
                    <input
                      placeholder="Your Name"
                      name="name"
                      type="text"
                      required=""
                    />
                    <input
                      placeholder="Contact Number"
                      name="number"
                      type="text"
                      required=""
                    />
                    <input placeholder="Address" type="text" required="" />
                    <input placeholder="Timing" type="text" required="" />
                    <button class="book-btn btn">Quick Appointment </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

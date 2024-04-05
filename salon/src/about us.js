import Header from "./common/header";
import Allbanner from "./homepagecomponents/allbanner";
import Pagedetails from "./homepagecomponents/pagedetails";
import Aboutabout from "./homepagecomponents/aboutabout";
import Discount from "./homepagecomponents/discount";
import Team from "./homepagecomponents/team";
import Testimonials from "./homepagecomponents/testimonials";
import Footertop from "./common/footertop";
import Footer from "./common/footer";
import Copyright from "./common/copyright";
export default function Aboutus() {
  return (
    <>
      <Header />
      <Allbanner />
      <Pagedetails linked="About us" />
      <Aboutabout />
      <Discount />
      <Team />
      <Testimonials />
      <Footertop />
      <Footer />
      <Copyright />
    </>
  );
}

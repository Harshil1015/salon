import Header from "./common/header";
import Allbanner from "./homepagecomponents/allbanner";
import Pagedetails from "./homepagecomponents/pagedetails";
import Servicespage from "./homepagecomponents/servicesapp";
import Fact from "./homepagecomponents/fact";
import Pricing from "./homepagecomponents/pricing";
import Footertop from "./common/footertop";
import Footer from "./common/footer";
import Copyright from "./common/copyright";

export default function Services() {
  return (
    <>
      <Header />
      <Allbanner />
      <Pagedetails linked="Services" />
      <Servicespage />
      <Fact />
      <Pricing />
      <Footertop />
      <Footer />
      <Copyright />
    </>
  );
}

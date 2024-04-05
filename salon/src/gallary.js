import Header from "./common/header";
import Allbanner from "./homepagecomponents/allbanner";
import Pagedetails from "./homepagecomponents/pagedetails";
import Gallaryphoto from "./homepagecomponents/gallaryphoto";
import Footertop from "./common/footertop";
import Footer from "./common/footer";
import Copyright from "./common/copyright";

export default function Gallery() {
  return (
    <>
      <Header />
      <Allbanner />
      <Pagedetails linked="Gallery" />
      <Gallaryphoto />
      <Footertop />
      <Footer />
      <Copyright />
    </>
  );
}

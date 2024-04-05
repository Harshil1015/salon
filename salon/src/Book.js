import Header from "./common/header";
import Allbanner from "./homepagecomponents/allbanner";
import Pagedetails from "./homepagecomponents/pagedetails";
import Booking from "./homepagecomponents/booking";
import Map from "./homepagecomponents/map";
import Footertop from "./common/footertop";
import Footer from "./common/footer";
import Copyright from "./common/copyright";

export default function Book() {
  return (
    <>
      <Header />
      <Allbanner />
      <Pagedetails linked="Booking" />
      <Booking />
      <Map />
      <Footertop />
      <Footer />
      <Copyright />
    </>
  );
}

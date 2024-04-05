import Header from "./common/header";
import Footertop from "./common/footertop";
import Footer from "./common/footer";
import Copyright from "./common/copyright";
import Banner from "./homepagecomponents/banner";
import About from "./homepagecomponents/about";
import Aboutbotoom from "./homepagecomponents/aboutbottom";
import Servicesapp from "./homepagecomponents/servicesapp";
import Fact from "./homepagecomponents/fact";
import Team from "./homepagecomponents/team";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Aboutbotoom />
      <Servicesapp />
      <Fact />
      <Team />
      <Footertop />
      <Footer />
      <Copyright />
    </>
  );
}

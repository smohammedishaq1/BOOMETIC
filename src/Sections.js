import AboutUs from "./sections/AboutUs";
import Client from "./sections/Client";
import ContactUs from "./sections/ContactUs";
import Packages from "./sections/Packages";
import Services from "./sections/Services";
import Testimonial from "./sections/Testimonial";

function Sections(){
    return (
        <div className="Sections">
            <Client/>
            <Services/>
            <Packages/>
            <AboutUs/>
            <Testimonial/>
            <ContactUs/>
            

        </div>
    )
}
export default Sections;
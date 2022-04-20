import Feedback_details from './Feedback_details';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './feedback.css';

const Feedback = () => {
  
    const testiMonials = [
        {
            user : "Vikas" ,
            message : "It is so helpful. I was in need of an old laptop for my preparation and I came on this portal where I got it. Now,it helps me in my preparation. Thanks to DoNation team." 
        },
        {
            user : "Manish" ,
            message : "My clothes were in good condition but I didn't want to wear those so I donated it on this portal and it went in good hands. Thanks to DoNation team."
        },
        {
            user : "Akash" ,
            message : "I was in need of a bike so that I can start my delivery job. I posted that in requirement feed and after 3 days, someone posted that and after talking to that person, I got that and now I can do my job. Thanks DoNation." 
        },
        {
            user : "Vaibhav" ,
            message : "DoNation is such a helpful platform for all the person who want to contribute for social welfare as well as the person who are in need. It provides a lot of functionality which helps to solve common problems of people."
        },
    ]

    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="testimonial" className="testimonials">
            <div className="container12">
                <h1 style={{paddingTop:"1rem",fontFamily:"cursive"}}>A Message From Our Users</h1>
                <div className="row12">
                    <div className="col12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                            testiMonials.map(feedbackDetail => {
                                return (
                                    <Feedback_details feedbackDetail={feedbackDetail} key={feedbackDetail._key} />
                                )
                            })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;
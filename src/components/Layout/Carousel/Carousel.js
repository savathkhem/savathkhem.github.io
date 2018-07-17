import React, { Fragment } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "./Carousel.css";

const CarouselContent = (props)=> (
    <Fragment>
        <Carousel autoplay={'true'} emulateTouch={'true'} showThumbs={'false'} infiniteLoop={'true'} width={"95vh"} showArrows={'true'} dynamicHeight={'true'}>
            <div>
            <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
            <p className="legend">"I believe in the pursuit of knowledge.  The moment of discovering something new.  The understanding of how it works and why it works.  To me there is nothing more satisfying!"</p>
            </div>
            <div>
            <img src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
            <p className="legend">"To me design is about beauty.  It's about art.  It's about what you are passionate about.  When I design something.  I want my audience to feel the same energy that I felt at that very moment!"</p>
            </div>
            <div>
            <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
            <p className="legend">"Keeping an open mind is important to me because that means I am without limits."</p>
            </div>
            <div>
            <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
            <p className="legend">"I love working with people.  There is no better way to grow.  It's always interesting sharing ideas and different ways of thinking."</p>
            </div>
            <div>
            <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
            <p className="legend">"Never be afraid to fail.  Failure is a valuable lesson towards a path of success."</p>
            </div>
            <div>
            <img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
            <p className="legend">How I learn: "1) Break it apart.  2) Put it back together again.  3) Repeat steps 1 and 2.  4) Make it better then before!"</p>
            </div>
            <div>
            <img src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
            <p className="legend">"Have many goals, but always priotize them.  Have goals for your goals.  Sometimes the path to your goal has multiple steps.  Route it out and take one step at a time."</p>
            </div>
            <div>
            <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
            <p className="legend">"It has always been my belief.  If someone has done it before, then why can't I do it?  My logic is, if its been done before that means there is a way to do it.  So I just have to figure out how.  Challenge ACCEPTED!"</p>
            </div>
        </Carousel>
    </Fragment>
);

export default CarouselContent; 



        //     <Paper className={props.classes.paper}>
        //         
        //     </Paper>
        //     <Paper className={props.classes.paper}>
        //         
        //     </Paper>
        //     <Paper className={props.classes.paper}>
        //         
        //     </Paper>
        //     <Paper className={props.classes.paper}>
        //         
        //     </Paper>
        //     <Paper className={props.classes.paper}>
        //         
        //     </Paper>
        //     <Paper className={props.classes.paper}>
        //         
        //     </Paper>
import React from 'react'
import target from "../images/target.png"
import goal from "../images/goal.png"

export default function About() {
    return (
        <>
            <div className="container-fluid red-background mb-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h1 className="text-center">About Us</h1>
                    </div>
                </div>
            </div>
            <div className="container-fluid size">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6"><img src={goal} alt="Our Vission" className="rounded float-left img-fluid" /></div>
                        <div className="col-md-6">
                            <h2 className="text-center">Our Vision</h2>
                            <hr className="red-bar" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, iusto, possimus sit quasi ipsam dolores sapiente libero cumque esse consequuntur at error consequatur rerum harum veritatis dignissimos nostrum recusandae dolor? Corporis, minima! Dolor ab perspiciatis, neque quos aliquam voluptates cum rem impedit nemo. Iste, cum ducimus perspiciatis suscipit ab quo.
                            </p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint labore autem quisquam dignissimos esse eum eligendi maiores rerum explicabo iure quaerat qui, quasi molestias exercitationem sit facere dicta officiis fuga velit accusantium. Dolore quam porro esse asperiores deleniti, odit quod commodi officia debitis reiciendis enim ad aspernatur minima tempora quos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid white size">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6">
                            <h2 className="text-center">Our Goal</h2>
                            <hr className="red-bar" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus error sunt tempore, temporibus fugiat consequatur, doloremque veniam a dolor in fuga vero sit impedit! Tempora sunt quae excepturi dicta ullam quidem! Recusandae natus itaque suscipit totam sed libero! Enim, assumenda quod! Tempora, deserunt explicabo totam quaerat vel id dolore doloremque?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod exercitationem, eum nesciunt aliquid explicabo delectus repellendus quisquam iure? Aliquid quia nulla provident, est vitae minima deserunt ratione voluptatem distinctio voluptate quasi necessitatibus officiis molestias nisi porro aperiam deleniti harum cupiditate modi voluptatibus! Voluptatem perspiciatis quis minima deleniti aliquam. Quo, explicabo.
                            </p>
                        </div>
                        <div className='col-md-6' ><img src={target} alt="Our Vission" className="rounded img-fluid float-end" /></div>
                    </div>
                </div>
            </div>


            <div className="container-fluid size">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6"><img src={goal} alt="Our Vission" className="rounded float-left img-fluid" /></div>
                        <div className="col-md-6">
                            <h2 className="text-center">Our Mission</h2>
                            <hr className="red-bar" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia inventore, sit modi asperiores iure commodi officia accusamus illum dignissimos temporibus culpa illo ab voluptatibus non quisquam alias ratione natus, cupiditate iusto distinctio deleniti! Omnis dolorem similique accusamus rerum, eveniet autem quis hic quae, inventore minus mollitia. Illo, repudiandae exercitationem. Accusantium?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas modi possimus, hic provident nihil quasi animi velit, culpa tenetur iure aliquam qui, deleniti itaque unde. In, vitae odit amet nesciunt, sed ducimus tempora hic officia asperiores doloremque facere eveniet ea laudantium nostrum reprehenderit veniam et commodi iure! Fugiat, repellendus voluptates.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

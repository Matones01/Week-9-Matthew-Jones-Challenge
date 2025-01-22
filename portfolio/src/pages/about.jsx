import React from "react";

function About(){
    return(
    <>
        <div className="about-title">
            <h2> About</h2>
        </div>
        <div className="about-content">
            <div className="about-content-title">
                About me
            </div>
            <div className="about-content-writing">
                <p>Hi, I'm Matt. I am a 23 year old currently living in Basingstoke, Hampshire. I studied Ancient History at the University of Bristol and finished my degree in 2023. I recently recieved my driving license and am currently enrolled in a programming course. I enjoy travelling, my last trip was last October when I went to Japan. </p>
            </div>
        </div>
        <div className="about">
            <div className="about-contact">
                <h5>Contact links</h5>
            </div>
        <p>Contact me at one of these links or use the form below.</p>
        <a href="https://github.com/Matones01">GitHub</a>
        </div>
        <div className="form">
            <h2 className="underline">
                Contact Form
            </h2>
            <form action="https://formcarry.com/s/8x5zRvdjX7_" method="POST" className="formcarry-form">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="fullName" required />

                <label htmlFor="email">Your Email Address</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Your Message</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>

                <button type="submit">Send</button>
            </form>
        </div>

    </>
    )
}

export default About
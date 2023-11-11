import aboutMe from "../images/aboutme.jpg"
function AboutMe() {
    return <>
        <div className="container">
            <div className="row mb-5">
                <div className="col-5">
                    <img className="img-fluid rounded" src={aboutMe} />
                </div>
                <div className="col-7">
                    <h3 className="">Who am I?</h3>
                    <p> Welcome to my portfolio! I'm a Full-Stack Software Engineer with a two-year track record in the Banking sector. My expertise lies in React, Typescript, and Java, where I've improved the account origination process for customers and bankers. I also specialize in UI and service automation, utilizing Selenium, Testng, and Cucumber.
With a background in Industrial and Systems Engineering, I approach software development holistically, valuing collaboration and teamwork. I'm passionate about learning and growth, always ready to embrace new challenges.
Outside of work, I enjoy basketball, meditation, reading, experimenting with ChatGPT, listening to podcasts, and exploring local coffee shops. This mix of professional dedication and personal interests shapes my unique perspective.
 </p>
                </div>

            </div>

        </div>
    </>
}
export default AboutMe;
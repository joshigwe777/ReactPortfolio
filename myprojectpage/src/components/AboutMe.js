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
                    <p>As a former Industrial and Systems Engineering major, I developed a passion for programming during my senior year of college. 
                        After honing my skills in the non-profit sector, I smoothly transitioned into software development. 
                        I bring experience in both backend and test engineering, utilizing technologies such as Java, Spring, Oracle, MySql, Docker, AWS, and more. 
                        Additionally, I am familiar with front-end technologies including Javascript, React, HTML, and CSS. 
                        To continue my growth as an engineer, I am participating in the Formation Fellowship, where I am honing my computer science and systems design fundamentals, and receiving mentorship from engineers at top tech companies. 
                        When I am not absorbed in software, I enjoy playing and watching basketball, meditating, reading, listening to podcasts, and sipping coffee at local coffee shops.  </p>
                </div>

            </div>

        </div>
    </>
}
export default AboutMe;
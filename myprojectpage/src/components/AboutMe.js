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
                    <p>I am a former Industrial and Systems Engineering major who fell in love with
                        programming my senior year of college. After working for a few years in the non-profit space I made my transition into software development.
                        I love the creative and engineering process and have a passion for creating beaitoful applications that improve the lives of others. I am looking forward to a long career of unending opportunities to learn and apply new skills to the world's most important problems. </p>
                </div>

            </div>

        </div>
    </>
}
export default AboutMe;
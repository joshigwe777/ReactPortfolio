function LandingPage() {
    return <>
        <div className="mx-auto container topSection">
            <div className="row">
                <div className="col-6">
                    <div className="container">
                        <div className="row my-3">
                            <h1 className="text-center">Hello my name is Joshua and I like making cool stuff!</h1>
                            <h3 className="my-3">Full Stack Software Engineer</h3>
                            <p>I am a professional software engineer with full stack experience with the latest tech!</p>
                            <i className="fa-brands fa-2xl fa-aws"></i>
                            <i className="fa-brands fa-2xl fa-docker"></i>
                            <i className="fa-brands fa-2xl fa-java"></i>
                            <i className="fa-brands fa-2xl fa-react"></i>
                            <i className="fa-brands fa-2xl fa-bootstrap"></i>
                            <i className="fa-brands fa-2xl fa-js"></i>

                        </div>
                        <div className="row">
                            <a class="btn contactMe btn-danger mt-3" href="#" role="button">Contact me</a>
                        </div>

                    </div>

                </div>
                <div className="col-6">
                    <img className="mx-auto rounded d-block" src="images/profile.jpg" alt="profile picture of Joshua" />
                </div>
            </div>
        </div>
    </>

}
export default LandingPage;
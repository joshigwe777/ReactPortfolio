function LandingPage() {
    return <>
        <div className="mx-auto container topSection">
            <div className="row">
                <div className="col-6">
                    <div className="container">
                        <div className="row mx-auto my-3">
                            <h1 className="text-center">Hello, my name is Joshua and I like making cool stuff!</h1>
                            <h3 className="my-3">Full Stack Software Engineer</h3>
                            <p className="">I am a professional software engineer with full stack experience with the latest tech!</p>
                            <div className="row my-3 mx-auto">
                                <i className="fa-brands fa-2xl mx-1 fa-aws"></i>
                                <i className="fa-brands fa-2xl mx-1 fa-docker"></i>
                                <i className="fa-brands fa-2xl mx-1 fa-java"></i>
                                <i className="fa-brands fa-2xl mx-1 fa-react"></i>
                                <i className="fa-brands fa-2xl mx-1 fa-bootstrap"></i>
                                <i className="fa-brands fa-2xl mx-1 fa-js"></i>
                            </div>
                        </div>
                        <div className="row mx-auto">
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
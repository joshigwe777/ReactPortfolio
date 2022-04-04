function ContactForm() {
    return <>
        <div className="container mx-auto my-5">
            <div className="row">
                <div className="col-6 mx-auto">
                    <h4>Say Hello</h4>
                    <p>I would love to collaborate and connect with you!</p>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <i className="fa fa-map-marker contactIcon" aria-hidden="true"></i>
                    <p>Cleveland, Ohio</p>

                    <i className="fa fa-envelope contactIcon" aria-hidden="true"></i>
                    <p>joshuaigwe1995@gmail.com</p>

                    <i className="fa fa-phone contactIcon" aria-hidden="true"></i>
                    <div>+16143078345</div>
                </div>

                <div className="col-sm">
                    <form>
                        <div className="form-row">
                            <div className="col-8 my-4">
                                <input type="text" className="form-control" placeholder="full name" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-4">
                                <input type="text" className="form-control" placeholder="Email" />
                            </div>
                            <div className="col-4">
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>
                        </div>
                        <div class="form-row">
                            <div className="col-8 my-4">
                                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="message"></textarea>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}
export default ContactForm;
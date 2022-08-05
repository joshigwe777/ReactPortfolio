import lyricNinja from "../images/lyricNinja.png"
function Project() {
    return <>
        <div className="container mx-8 my-5">
            <div className="row">
                <div className="col-sm-6">
                    <a href="http://lyricninja-env.eba-hq4sm8mv.us-east-2.elasticbeanstalk.com/" target="_blank">
                        <img className="lyricNinjaPicture img-fluid rounded" src={lyricNinja} /></a>
                </div>
                <div className="col-sm-4">
                    <p>This is Lyric Ninja. Test how well you know your favorite songs and compete with friends from around the world.</p>
                    <i className="fa-brands fa-2xl mx-1 fa-aws"></i>
                    <i className="fa-brands fa-2xl mx-1 fa-docker"></i>
                    <i className="fa-brands fa-2xl mx-1 fa-java"></i>
                    <i className="fa-brands fa-2xl mx-1 fa-react"></i>
                    <a href="https://github.com/joshigwe777/lyric-ninja" target="_blank"><i className="fa-brands mx-3 fa-2xl fa-github"></i></a>
                </div>

            </div>
        </div>

    </>

}
export default Project;
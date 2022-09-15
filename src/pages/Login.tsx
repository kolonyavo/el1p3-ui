import { Link } from "react-router-dom";

export default function LogIn(){
    return(
    <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">

                    <div className="md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                    <div className="form-outline form-white mb-4">
                        <label className="form-label" >Email</label>
                        <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                    </div>

                    <div className="form-outline form-white mb-4">
                        <label className="form-label">Password</label>
                        <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                    </div>

                    <Link to="/home" className="col-sm-6 m-2">
                        <button className="btn btn-outline-light btn-lg px-5 mt-5" type="submit">Login</button>
                    </Link>
                    </div>

                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    );
}
import CreateEvent from "../component/CreateEvent";
import Navbar from "../component/Navbar";
import '../App.css';

export default function Events(){
    return(
        <>
            <Navbar/>
            <div className="container py-5 h-100 d-flex justify-content-center">
            <div className="row d-flex justify-content-center h-100 p-3 bg-dark w-75 forms">
                <CreateEvent/>
            </div>
            </div>
            <div className="bg-light text-dark w-100 p-5">
                <h4 className="text-center pt-3">List of Events</h4>
                <div className="m-4 text-start text-light">
                <div className="card bg-dark p-3">
                    <ul>
                        {}
                    </ul>
                    </div>
                </div>
            </div>     
            <div className="list"></div>       
        </>
    );
}

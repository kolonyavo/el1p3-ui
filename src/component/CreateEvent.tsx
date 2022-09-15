import React, { ChangeEvent, useState } from 'react';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateEvent() {

    const [selectedDate, setSelectedDate] = useState(new Date())
    const [eventList, setEventList] = useState<string>("");
    const [type, setType] = useState("");

    function types(event: any) {
        if (event.target.name === "type") {
            setType(event.target.value);
        }
    }

    function name() {
        const types = (event: any) => {
            if (event.target.name === "type") {
                setType(event.target.value);
            }
        }

        if (type === "Cours") {
            return (
                <select id="disabledSelectName" className="form-select">
                    <option>Cours1</option>
                    <option>Cours2</option>
                    <option>Cours3</option>
                </select>
            );
        }
        else{
            return(
                <input type="text" className='ml-5 w-100'/>
            );
        }

        console.log()
    }

    function addEvent(){
        
    }

    return (
        <form className="m-4 text-center">
            <h5>Event</h5>
            <hr />
            <div className="mb-3">
                <label className="form-label">Type :</label>
                <select id="disabledSelect" className="form-select" name='type' onChange={name} >
                    <option value="Cours">Cours</option>
                    <option value="Exam">Exam</option>
                    <option value="Conference">Conference</option>
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Name :</label>
                {name()}

            </div>
            <div className='d-flex my-4 row'>
                <div className='d-flex column my-3'>
                    <label className="form-label date">Start:</label>
                    <ReactDatePicker
                        selected={selectedDate}
                        onChange={(date: Date) => setSelectedDate(date)}
                        showTimeSelect
                        dateFormat="Pp"
                        minDate={new Date()}
                    >
                    </ReactDatePicker>
                </div>
                <div className='d-flex column'>

                    <label className="form-label date">End:</label>
                    <ReactDatePicker
                        selected={selectedDate}
                        onChange={(date: Date) => setSelectedDate(date)}
                        showTimeSelect
                        dateFormat="Pp"
                    >
                    </ReactDatePicker>
                </div>
            </div>
            <hr />
            <div className="form-check d-flex column my-3 ">
                <p>Participants:</p>
                <div className="col-3 mx-1">
                    <input type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label mx-2">
                        G1
                    </label>
                </div>
                <div className="col-3 mx-1">
                    <input type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label mx-2">
                        G2
                    </label>
                </div>
                <div className="col-3 mx-1">
                    <input type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label mx-2">
                        G3
                    </label>
                </div>
            </div>
            <hr />
            <button type="submit" className="btn btn-primary" onClick={addEvent}>Create Event</button>
        </form>
    );
}
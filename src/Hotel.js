import './App.css';
import React from "react";
import { useState, useEffect } from "react";

export default function Hotel() {

    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(1);
    const [state, setState] = useState({});

    const [childrenValues, setChildrenValues] = useState([]);
    const [childrenArr, setChildrenArr] = useState([]);

    const [roomValues, setRoomValues] = useState([]);
    const [roomArr, setRoomArr] = useState([]);

    const [setGuestNumber, setRoomNumber] = useState([]);


    //Adult Number

    const handleAdultsChange = (e) => {
        setAdults(e.target.value);
    };

    const handleAdultsAdd = () => {
        setAdults(Number(adults) + 1);
    };

    const handleAdultsReduce = () => {
        setAdults(Number(adults) - 1);
    };

    //Children Number

    const handleChildrenChange = (e) => {
        setChildren(e.target.value);
        setChildrenArr(new Array(children + 1).fill(0));
    };
    const handleChildrenAdd = () => {
        setChildren(Number(children) + 1);
        setChildrenArr(new Array(children + 1).fill(0));
    };
    const handleChildrenReduce = () => {
        setChildren(Number(children) - 1);
        setChildrenArr(new Array(children - 1).fill(0));
    };

    //Rooms Number

    const handleRoomsChange = (e) => {
        setRooms(e.target.value);
        setRoomArr(new Array(rooms + 1).fill(0));
    };
    const handleRoomsAdd = () => {
        setRooms(Number(rooms) + 1);
        setRoomArr(new Array(rooms + 1).fill(0));
    };
    const handleRoomsReduce = () => {
        setRooms(Number(rooms) - 1);
        setRoomArr(new Array(rooms - 1).fill(0));
    };

    //Reset 

    const handleReset = () => {
        setAdults(1);
        setRooms(1);
        setChildren(0);


        setChildrenArr(new Array(0).fill(0));
        setRoomArr(new Array(0).fill(0));
    };

    //Children Age

    const handleChildrenAge = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
        console.log(state);
        setChildrenValues([...childrenValues, state]);
    };
    useEffect(() => {
        console.log(state);
    }, [state]);

    // Rooms Number

    const handleRooms = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
        console.log(state);
        setRoomValues([...roomValues, state]);
    };

    useEffect(() => {
        console.log(state);
    }, [state]);

    console.log(childrenValues)
    console.log(childrenArr)
    console.log(roomArr)

    const handleApply = () => {
        setGuestNumber(children + adults);
        setRoomNumber(rooms);
    };

    return (
        <div className="main">
            <h1 className='heading'>Hotel Reservation</h1>
            <div className="card">
                <h1 className="names">Rooms <span className='span'>{rooms}</span> & Guests <span>{children + adults}</span></h1>
            </div>
            <div className='room-card'>
                <h1 className='naming'>Rooms {rooms}</h1>
                <div className="row">
                    <div>
                        <button className="button" disabled={rooms === 0} onClick={handleRoomsReduce}>Remove</button>
                    </div>

                    <div>
                        <button className="button" disabled={rooms === 10} onClick={handleRoomsAdd}>Add </button>
                    </div>
                </div>
            </div>

            <div room={rooms}>
                {roomArr.map((el, index) => {
                    console.log(index);
                    return (

                        <div className='room-card'>
                            <h1>Room: {index + 1}</h1>
                            <div className="row">
                                <div className='col'>
                                    <h3 className='head'>Adults</h3>
                                    <div className="row">
                                        <div>
                                            <button className="button1" disabled={adults === 1} onClick={handleAdultsReduce}>-</button>
                                        </div>
                                        <div>
                                            <input className='text1' onChange={handleAdultsChange} value={adults.toString()} type="text" />
                                        </div>
                                        <div>
                                            <button className="button1" disabled={adults === 12} onClick={handleAdultsAdd}>+</button>
                                        </div>
                                        <div>
                                            {adults >= 10 && (
                                                <div adults={adults}>
                                                    <p className='text1'>Maximum Members</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <h3 className='head'>Children</h3>
                                    <div className="row">
                                        <div>
                                            <button className="button1" disabled={children === 0} onClick={handleChildrenReduce}>-</button>
                                        </div>
                                        <div>
                                            <input className='text1' onChange={handleChildrenChange} value={children.toString()} type="text" />
                                        </div>
                                        <div>
                                            <button className="button1" disabled={children === 5} onClick={handleChildrenAdd}>+</button>
                                        </div>
                                    </div>
                                    <div children={children}>
                                        {childrenArr.map((el, index) => {
                                            console.log(index);
                                            return (
                                                <select className='select'
                                                    onChange={handleChildrenAge}
                                                    defaultValue={0}
                                                    name={`${index + 1}select`}

                                                >
                                                    <option value={0}>0</option>
                                                    <option value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                    <option value={6}>6</option>
                                                    <option value={7}>7</option>
                                                    <option value={8}>8</option>
                                                    <option value={9}>9</option>
                                                    <option value={10}>10</option>
                                                    <option value={11}>11</option>
                                                    <option value={12}>12</option>
                                                </select>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div>
                    <button onClick={handleReset} className="reset">
                        Reset
                    </button>
                </div>
                <div>
                    <button onClick={handleApply} className="apply">
                        Apply
                    </button>
                    <h1 className='total'>Rooms  <span>{rooms} </span>&  Guests <span>{adults + children}</span></h1>
                </div>
            </div>
        </div>
    )
}

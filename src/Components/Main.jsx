import { useState } from "react"
import Reviews from "./Reviews"
import SpecialsCard from "./SpecialsCard"


const Main = () => {
    const [reserveTable, setReserveTable] = useState(false)
    const [reserved, setReserved] = useState(false)
    const [availableTime, setAvailableTime] = useState(['17:00', '18:00', '19:00', '20:00'])
    const [selectedTime, setSelectedTime] = useState([])
    const [ocation, setOcation] = useState('')
    const [guets, setGuests] = useState('')
    const [date, setDate] = useState('')
    const handleReserved = () => {
        if (selectedTime) {
            setAvailableTime((prevTime) => prevTime.filter((time) => time !== selectedTime))
        }
        setReserveTable(false)
        setReserved(true)
    }
    const handleAnotherTable = () => {
        setReserveTable(true)
        setReserved(false)
    }
    const handleOcation = (e) => {
        e.preventDefault()
        setOcation(e.target.value);
    }
    const handleGuests = (e) => {
        e.preventDefault()
        setGuests(e.target.value);
    }
    const handleDate = (e) => {
        e.preventDefault()
        setDate(e.target.value);
    }
    return (
        <div>
            <div className="first_section_area">
                <div className="first_section">
                    {reserveTable ? (<div>
                        <>
                            <h2 style={{ display: 'flex', justifyContent: 'center', color: '#f4CE14' }}>Table Reservation</h2>
                            <form style={{ paddingTop: '2vh' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr', gap: '1vw' }}>
                                    <div className="booking_layout">
                                        <label className="label_text" htmlFor='res-date'>Date</label>
                                        <input className="input_date" type="date" id="res-date" onChange={handleDate} />
                                    </div>
                                    <div className="booking_layout">
                                        <label className="label_text" htmlFor='res-time'>Time</label>
                                        <select className="input_date" id="res-time " onChange={(e) => setSelectedTime(e.target.value)}>
                                            {availableTime.map((item, index) => <option key={index}>{item}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr', gap: '1vw', paddingTop: '2vh' }}>
                                    <div className="booking_layout">
                                        <label className="label_text" htmlFor='guests'>Guests</label>
                                        <input className="input_date" type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleGuests} />
                                    </div>
                                    <div className="booking_layout">
                                        <label className="label_text" htmlFor='ocation'>Occasion</label>
                                        <select className="input_date" id="occasion" onChange={handleOcation}>
                                            <option>Birthday</option>
                                            <option>Anniversary</option>
                                        </select>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '4vh' }}>
                                    <div id="book_a_table" className="book_table_button" onClick={handleReserved} >Book a table</div>
                                </div>
                            </form>
                        </>
                    </div>) : reserved === false ? (<div>
                        <h1 style={{ color: '#f4CE14' }}>Little Lemon</h1>
                        <h3 style={{ color: 'white' }}>Chicago</h3>
                        <h4 style={{ fontWeight: '200', color: 'white' }}>Welcome to Little Lemon a charming family-owned restaurant nestled in the heart of Chicago, where the rich culinary traditions of Italy and Greece come together to create a delightful dining experience. Our warm and inviting ambiance reflects the essence of family, making every guest feel like they are stepping into our home.</h4>
                        <div className="book_table_button" onClick={() => setReserveTable(true)}>Book a table</div>
                    </div>) : (<div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <h2 style={{ color: '#f4CE14' }}>Reservation confirmed!</h2>
                        <div>
                            <h3 style={{ color: 'white' }}>Booking information</h3>
                            <h5 style={{ color: 'white' }}>Date: {date}</h5>
                            <h5 style={{ color: 'white' }}>Time: {selectedTime}</h5>
                            <h5 style={{ color: 'white' }}>Ocation: {ocation}</h5>
                            <h5 style={{ color: 'white' }}>Guests: {guets}</h5>

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="book_table_button_another" onClick={handleAnotherTable}>Book another table</div>
                        </div>
                    </div>)}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src="../src/assets/book_table.png" style={{ height: '320px', width: '100%', borderRadius: '16px' }} />
                    </div>
                </div>
            </div>
            <div className="second_section_area">

                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', paddingBottom: '2vh' }}>
                    <h2>This Weeks Specials</h2>
                    <div className="book_table_button">Menu</div>
                </div>
                <div className="second_section">
                    <div style={{ display: "grid", gap: '2vw', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))' }}>
                        <SpecialsCard />
                        <SpecialsCard />
                        <SpecialsCard />
                    </div>
                </div>
            </div>
            <div className="thrid_section_area">
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '3vh' }}>
                    <h2>Testimonials</h2>
                </div>
                <div className="third_section">
                    <div style={{ display: "grid", gap: '2vw', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                        <Reviews />
                        <Reviews />
                        <Reviews />
                        <Reviews />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Main
import Reviews from "./Reviews"
import SpecialsCard from "./SpecialsCard"


const Main = () => {
    return (
        <div style={{ border: '1px solid blue' }}>
            <div className="first_section">
                <div style={{ border: 'solid 1px green', margin: '2vw' }}>
                    <h1>Little Lemon</h1>
                    <h4><strong>Chicago</strong></h4>
                    <h4 style={{ fontWeight: '100' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, rerum ea laborum dolorum sequi, sit provident nulla, deleniti quibusdam suscipit cumque accusantium ab eum praesentium fugit nesciunt qui dignissimos odit.</h4>
                    <button>Book a table</button>
                </div>
                <div style={{ border: 'solid 1px green', margin: '2vw' }}>image</div>
            </div>
            <div className="second_section">
                <div style={{ border: 'solid 1px green', margin: '2vw', display: 'flex', justifyContent: 'space-around' }}>
                    <h2>Specials</h2>
                    <button>Online Menu</button>
                </div>
                <div style={{ border: 'solid 1px green', margin: '2vw', display: "grid", gap: '2vw', padding: '2vw', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                    <SpecialsCard />
                    <SpecialsCard />
                    <SpecialsCard />
                </div>
            </div>
            <div className="thrid_section">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h2>Testimonials</h2>
                </div>
                <div style={{ border: 'solid 1px green', margin: '2vw', display: "grid", gap: '2vw', padding: '2vw', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                    <Reviews />
                    <Reviews />
                    <Reviews />
                    <Reviews />
                </div>
            </div>
            <div className="fourth_section">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h2>Testimonials</h2>
                </div>
                <div style={{ border: 'solid 1px green', margin: '2vw', display: "grid", gap: '2vw', padding: '2vw', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                    <Reviews />
                    <Reviews />
                    <Reviews />
                    <Reviews />
                </div>
            </div>
        </div>
    )
}

export default Main
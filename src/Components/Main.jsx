import Reviews from "./Reviews"
import SpecialsCard from "./SpecialsCard"


const Main = () => {
    return (
        <div>
            <div className="first_section_area">
                <div className="first_section">
                    <div>
                        <h1 style={{ color: '#f4CE14' }}>Little Lemon</h1>
                        <h3 style={{ color: 'white' }}>Chicago</h3>
                        <h4 style={{ fontWeight: '200', color: 'white' }}>Welcome to Little Lemon a charming family-owned restaurant nestled in the heart of Chicago, where the rich culinary traditions of Italy and Greece come together to create a delightful dining experience. Our warm and inviting ambiance reflects the essence of family, making every guest feel like they are stepping into our home.</h4>
                        <div className="book_table_button">Book a table</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src="../src/assets/book_table.png" style={{ height: '320px', width: '500px', borderRadius: '16px', }} />
                    </div>
                </div>
            </div>
            <div className="second_section_area">
                <div className="second_section">
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', paddingBottom: '2vh' }}>
                        <h2>This Weeks Specials</h2>
                        <div className="book_table_button">Menu</div>
                    </div>
                    <div style={{ display: "grid", gap: '2vw', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
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
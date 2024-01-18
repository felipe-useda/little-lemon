
const Nav = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', margin: '0vw 7.5vw 0vw 7.5vw' }}>
                <img style={{ height: '50px', width: '160px' }} src="../src/assets/littlejourney.jpg"></img>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '3vw' }}>
                    <h4 className="navbar_items">Home</h4>
                    <h4 className="navbar_items">Reservations</h4>
                    <h4 className="navbar_items">Menu</h4>
                    <h4 className="navbar_items">Reviews</h4>
                </div>
                <div className="order_online_button">Order Online</div>
            </div>
        </>
    )
}

export default Nav
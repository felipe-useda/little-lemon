const SpecialsCard = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', width: '350px', backgroundColor: '#DCDCDC', borderRadius: '16px' }}>
                <img style={{ height: '300px', width: '350px', borderRadius: '16px' }} src="../../src/assets/book_table.png" />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <h4>Greek Salad</h4>
                    <h5 style={{ color: "#D2691E" }}>$12.45</h5>
                </div>
                <div style={{ padding: '2vh', fontWeight: '200' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, velit doloremque esse sequi sunt eum obcaecati, id iure quos mollitia voluptatum impedit porro, autem atque delectus suscipit corporis est aliquid!</div>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '2vh' }}>
                    <div className="book_table_button">Order</div>
                </div>
            </div>
        </>
    )
}

export default SpecialsCard

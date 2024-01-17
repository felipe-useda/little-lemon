const SpecialsCard = () => {
    return (
        <>
            <div style={{ display: 'grid', border: 'solid red 1px' }}>
                <div style={{ height: '200px', width: 'auto' }}>image</div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <h5>Greek Salad</h5>
                    <h5>$12.45</h5>
                </div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, velit doloremque esse sequi sunt eum obcaecati, id iure quos mollitia voluptatum impedit porro, autem atque delectus suscipit corporis est aliquid!</div>
                <button>Order a Delivery</button>
            </div>
        </>
    )
}

export default SpecialsCard

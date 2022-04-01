import ShopItemClass from './components/ShopItemClass.js';

const item = {
    brand: 'Tiger of sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length. ',
    price: 399,
    currency: '£'
};

function App() {

    return (
        <div className='container'>
            <div className='background-element'>
            </div>
            <div className='highlight-window'>
            <div className='highlight-overlay'> </div>
            </div>
            <div className='window'>
            <ShopItemClass item={item} title={item.title} brand={item.brand} description={item.description} descriptionFull={item.descriptionFull} price={item.price} currency={item.currency}/> 
            </div>
        </div>
    )

}


export default App;
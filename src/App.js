// import logo from './logo.svg';
import Header from './Header';
import Item from './Item';
import './App.css';
import Coffee from './Coffee';

const coffees = [
	{
		coffee: 'French Vanilla',
		price: '3.00'
	},
	{
		coffee: 'Caramel Macchiato',
		price: '3.75'
	},
	{
		coffee: 'Pumpkin Spice',
		price: '3.50'
	},
	{
		coffee: 'Hazelnut',
		price: '4.00'
	},
	{
		coffee: 'Mocha',
		price: '4.50'
	}
];

function App() {
	return (
		<div className="menu">
			<Header />
			<main>
				<Coffee>
        {coffees.map(coffee => {
          return <Item {...coffee}/>
        })}
        </Coffee>
			</main>
		</div>
	);
}

export default App;

import { useEffect } from 'react';
import { useState } from 'react';
import MyNestedList from './components/MyNestedList';

function App() {
	const [services, setServices] = useState([]);

	function createNestedItems(myServices) {
		return myServices.map((data) => {
			//if we have nested items we add this to items of service
			if (data.items) {
				data.items = services
					.filter((service) => {
						if (service.node === 1 && service.head === data.id) {
							service.items = [];
							return service;
						} else if (service.head === data.id) {
							return service;
						}
					})
					.sort((item1, item2) => item1.sorthead - item2.sorthead);
				data.items = createNestedItems(data.items);
				return data;
			}
			//if we dont have nested items just return object
			return data;
		});
	}

	let myData = services
		.filter((service) => {
			if (service.head === null && service.node === 1) {
				service.items = [];
				return service;
			} else if (service.head === null) {
				return service;
			}
		})
		.sort((item1, item2) => item1.sorthead - item2.sorthead);

	myData = createNestedItems(myData);

	useEffect(() => {
		async function getAllData() {
			const response = await fetch('/tz-nestedlist/data.json');
			const result = await response.json();

			setServices(result.services);
		}

		getAllData();
	}, []);

	return (
		<>
			<MyNestedList list={myData} />
		</>
	);
}

export default App;

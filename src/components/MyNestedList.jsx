/* eslint-disable react/prop-types */
import classes from './MyNestedList.module.css';
import ItemWithList from './ItemWithList';

const MyNestedList = ({ list }) => {
	return (
		<ul className={classes.list}>
			{list.map((item) => {
				if (item.items) {
					return <ItemWithList item={item} key={item.id} />;
				} else {
					return <li key={item.id}>{`${item.name}(${item.price})`}</li>;
				}
			})}
		</ul>
	);
};

export default MyNestedList;

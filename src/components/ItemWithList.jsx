/* eslint-disable react/prop-types */
import { useState } from 'react';
import classes from './ItemWithList.module.css';
import MyNestedList from './MyNestedList';
import { Icon } from '@iconify/react';

const ItemWithList = ({ item }) => {
	const [listIsOpen, setListIsOpen] = useState(false);

	return (
		<li className={classes.itemWithList}>
			<span
				className={`${listIsOpen ? classes.active : ''}`}
				onClick={() => setListIsOpen((prev) => !prev)}>
				<Icon
					icon='ep:arrow-up-bold'
					width={10}
					color={listIsOpen ? 'black' : '#a8a8a8'}
				/>
				{`${item.name}`}
			</span>
			{listIsOpen && <MyNestedList list={item.items} />}
		</li>
	);
};

export default ItemWithList;

import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Table from '../components/Table'

function Godowns() {
	const columns = ["id", "location", "capacity", "manager", "start date"]
	const [data, setData] = useState(null);

	useEffect(() => {
		const getGodowns = async () => {
			try {
				const url = 'http://10.25.240.191:8085/api/godowns';
				const res = await fetch(url);
				const resData = await res.json();
				setData(resData);
			} catch (error) {
				console.log(error);
			}
		}
		getGodowns();
	}, [])


	return (
		<Layout>
			<section class="py-3 sm:py-5">
				<Table name="Godowns" columns={columns} data={data} />
			</section>
		</Layout>
	)
}

export default Godowns
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Modal from '../components/Modal'
import { toast } from 'react-hot-toast';

function Godowns() {
	const [data, setData] = useState([]);
	const [modal, setModal] = useState(false);
	const [modalData, setModalData] = useState(null);
	const columns = ["name", "location", "capacity", "manager", "start date"]

	const modal_data = {
		name: "Godown",
		fields: [
			{
				label: "location",
				type: "text",
				placeholder: "Gurugram",
				req: true,
			},
			{
				label: "capacity",
				type: "text",
				placeholder: "102",
				req: true,
			},
			{
				label: "manager",
				type: "text",
				placeholder: "John",
				req: true,
			},
			{
				label: "start_date",
				type: "date",
				req: true,
			},
		]
	}

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

	useEffect(() => {
		getGodowns();
	}, [modal])

	const handleDelete = async (id) => {
		try {
			const url = `http://10.25.240.191:8085/api/godowns/${id}`;
			const res = await fetch(url, {
				method: 'DELETE'
			})
			console.log(res);
      toast.success("Deleted successfully");
			getGodowns();
			//const resData = await res.json();
			//console.log(resData);
		} catch (error) {
      toast.error("Unable to delete");
			console.log(error);
		}
	}

	const openEditModal = (id) => {
		const edit_obj = data.filter(item => item.godown_Id === id);
		setModalData(edit_obj[0]);
		console.log(modalData);
		setModal(!modal);
	}

	return (
		<Layout>
			<section className="py-3 sm:py-5">
				<div className="sm:mt-2 px-4 mx-auto max-w-screen-2xl font-Inter lg:px-12">
					<Modal modal={modal} setModal={setModal} modal_data={modal_data} modalData={modalData} setModalData={setModalData} />
					<div className="relative overflow-hidden bg-white border border-gray-200 shadow-sm sm:rounded-md">
						<div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
							<div className="flex items-center flex-1 space-x-4">
								<h5 className="text-gray-500 font-bold mb-0">Godowns</h5>
							</div>
							<div className="w-full md:w-1/2">
								<form className="flex items-center">
									<label htmlFor="simple-search" className="sr-only">Search</label>
									<div className="relative w-full">
										<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
											<svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
											</svg>
										</div>
										<input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2" placeholder="Search" required="" />
									</div>
								</form>
							</div>
							<div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
								<button onClick={() => setModal(true)} type="button" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-md bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
										<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
									</svg>
									Add
								</button>
							</div>
						</div>
						<div className="overflow-x-auto">
							<table className="w-full text-sm text-left text-gray-500">
								<thead className="text-xs text-gray-700 uppercase bg-gray-100">
									<tr>
										{/* <th scope="col" className="py-2 px-4">
											<div class="flex items-center">
												<input id="checkbox-all" type="checkbox" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
												<label for="checkbox-all" class="sr-only">checkbox</label>
											</div>
										</th> */}
										{columns.map(column => {
											return (
												<th key={column} scope="col" className="px-4 py-3">{column}</th>
											)
										})}
										<th scope="col" className="px-2 py-3"></th>
										<th scope="col" className="px-2 py-3"></th>
									</tr>
								</thead>
								<tbody>
									{data?.map(row => {
										return (
											<tr key={row.godown_Id} className="border-b hover:bg-gray-100">
												{/* <td class="w-4 px-4 py-3">
													<div class="flex items-center">
														<input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 focus:ring-2" />
														<label for="checkbox-table-search-1" class="sr-only">checkbox</label>
													</div>
												</td> */}
												<th scope='row' className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
													{row.godownName}
												</th>
												<td className="px-4 py-2">
													<span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">{row.location}</span>
												</td>
												<td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap ">{row.capacity}</td>
												<td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{row.manager}</td>
												<td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{row.start_date}</td>
												<td onClick={() => openEditModal(row.godown_Id)} className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap cursor-pointer">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-gray-700">
														<path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
													</svg>
												</td>
												<td onClick={() => handleDelete(row.godown_Id)} className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap cursor-pointer">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-red-600">
														<path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
													</svg>
												</td>
											</tr>
										)
									})}
								</tbody>
							</table>
						</div>
						{/* <nav class="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0" aria-label="Table navigation">
							<span class="text-sm font-normal text-gray-500 dark:text-gray-400">
								Showing
								<span class="font-semibold text-gray-900 dark:text-white">1-10</span>
								of
								<span class="font-semibold text-gray-900 dark:text-white">1000</span>
							</span>
							<ul class="inline-flex items-stretch -space-x-px">
								<li>
									<a href="#" class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
										<span class="sr-only">Previous</span>
										<svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
										</svg>
									</a>
								</li>
								<li>
									<a href="#" class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
								</li>
								<li>
									<a href="#" class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
								</li>
								<li>
									<a href="#" aria-current="page" class="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
								</li>
								<li>
									<a href="#" class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
								</li>
								<li>
									<a href="#" class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
								</li>
								<li>
									<a href="#" class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
										<span class="sr-only">Next</span>
										<svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
										</svg>
									</a>
								</li>
							</ul>
						</nav> */}
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Godowns
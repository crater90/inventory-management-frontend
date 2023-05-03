import React from 'react'
import { useForm } from "react-hook-form";


function Modal({ modal, setModal, modal_data, editData }) {

	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = async (data) => {
		console.log(data);
		const url = 'http://10.25.240.191:8085/api/godowns';
		const res = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(data)
		});
	};

	return (
		<div className={`${modal ? 'block' : 'hidden'} overflow-y-auto bg-gray-300/90 overflow-x-hidden fixed z-50 justify-center items-center w-full h-full md:inset-0 md:h-full`}>
			<div className="relative p-4 w-full max-w-2xl mx-auto h-full md:h-auto">
				{/* <!-- Modal content --> */}
				<div className="relative p-4 bg-white rounded-md border border-gray-200 shadow-sm sm:p-5">
					{/* <!-- Modal header --> */}
					{editData ? (
						<div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								Edit {modal_data.name}
							</h3>
							<button onClick={() => setModal(!modal)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
								<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
								<span className="sr-only">Close modal</span>
							</button>
						</div>
					) : (
						<div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								Add {modal_data.name}
							</h3>
							<button onClick={() => setModal(!modal)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
								<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
								<span className="sr-only">Close modal</span>
							</button>
						</div>
					)}

					{/* <!-- Modal body --> */}
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="grid gap-4 mb-4 sm:grid-cols-2">
							{modal_data?.fields?.map(field => {
								return (
									<div>
										<label for={field.label} className="block mb-2 text-sm font-medium text-gray-900 capitalize">{field.label}</label>
										<input type={field.type} name={field.label} value={editData && editData[field.label]} {...register(field.label, field.req && { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder={field.placeholder} />
									</div>
								)
							})}
							{/*<div>
								<label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
								<input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="" />
							</div>
							<div>
								<label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
								<select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
									<option selected="">Select category</option>
									<option value="TV">TV/Monitors</option>
									<option value="PC">PC</option>
									<option value="GA">Gaming/Console</option>
									<option value="PH">Phones</option>
								</select>
							</div>*/}
							{/* {Object.keys(errors).length > 0 && <span>Please fill all the fields to proceed further.</span>} */}
						</div>
						{editData ? (
							<button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center">
								<svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
								Edit {modal_data.name}
							</button>
						) : (
							<button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center">
								<svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
								Add {modal_data.name}
							</button>
						)}
					</form>
				</div>
			</div>
		</div>
	)
}

export default Modal
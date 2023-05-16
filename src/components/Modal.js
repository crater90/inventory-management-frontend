import React from 'react'
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { startCase } from 'lodash';

function Modal({ modal, setModal, modal_data, modalData, setModalData }) {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmitAdd = async (data) => {
    const toastId = toast.loading(`Adding ${modal_data?.name}..`);
    try {
      let url = "";
      switch (modal_data?.name) {
        case "Employee":
          url = `${process.env.REACT_APP_API_URL}/api/employees`
          break;
        case "Godown":
          url = `${process.env.REACT_APP_API_URL}/api/godowns`
          break;
        case "Inward":
          url = `${process.env.REACT_APP_API_URL}/api/transactions`
          break;
        case "Outward":
          url = `${process.env.REACT_APP_API_URL}/api/transactions`
          break;
        case "Return":
          url = `${process.env.REACT_APP_API_URL}/api/transactions`
          break;
        default:
          break;
      }
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      });
      toast.success("Added data Successfully !", {
        id: toastId
      });
      reset();
      setModalData(null);
      setModal(!modal);
    } catch (error) {
      toast.error("Something went wrong...", {
        id: toastId
      })
      console.log(error);
    }
  };

  const onSubmitEdit = async (data) => {
    const toastId = toast.loading(`Editing ${modal_data?.name}..`);
    try {
      let url = "";
      switch (modal_data?.name) {
        case "Employee":
          url = `${process.env.REACT_APP_API_URL}/api/employees/${modalData?.id}`
          break;
        case "Godown":
          url = `${process.env.REACT_APP_API_URL}/api/godowns/${modalData?.godown_Id}`
          break;
        case "Inward":
          url = `${process.env.REACT_APP_API_URL}/api/transactions/${modalData?.transactionId}`
          break;
        case "Outward":
          url = `${process.env.REACT_APP_API_URL}/api/transactions/${modalData?.transactionId}`
          break;
        case "Return":
          url = `${process.env.REACT_APP_API_URL}/api/transactions/${modalData?.transactionId}`
          break;

        default:
          break;
      }
      const res = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      });
      toast.success("Edited data Successfully !", {
        id: toastId
      });
      reset();
      setModalData(null);
      setModal(!modal);
    } catch (error) {
      toast.error("Something went wrong...", {
        id: toastId
      });
      console.log(error);
    }
  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    setModal(!modal);
    setModalData(null);
  }

  const formatCase = (str) => {
    return str.split("_").join(" ");
  }

  return (
    <div className={`${modal ? 'block' : 'hidden'} overflow-y-auto bg-gray-300/90 overflow-x-hidden fixed z-50 justify-center items-center w-full h-full md:inset-0 md:h-full`}>
      <div className="relative p-4 w-full max-w-2xl mx-auto h-full md:h-auto">
        {/* <!-- Modal content --> */}
        <div className="relative p-4 bg-white rounded-md border border-gray-200 shadow-sm sm:p-5">
          {/* <!-- Modal header --> */}
          {modalData ? (
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Edit {modal_data.name}
              </h3>
              <button onClick={handleCloseModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
          ) : (
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Add {modal_data.name}
              </h3>
              <button onClick={handleCloseModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
          )}

          {/* <!-- Modal body --> */}
          {modalData ? (
            <form onSubmit={handleSubmit(onSubmitEdit)}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                {modal_data?.fields?.map(field => {
                  return (
                    <div key={field.label}>
                      <label htmlFor={field.label} className="block mb-2 text-sm font-medium text-gray-900 capitalize">{startCase(field.label)}</label>
                      {field.select ? (
                        <select id={field.label} {...register(field.label, { required: `${field.label} is required` })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                          <option value="">Select category</option>
                          <option value={2}>Employee</option>
                          <option value={1}>Admin</option>
                          <option value={0}>Super Admin</option>
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          name={field.label}
                          defaultValue={modalData[field.label]}
                          {...register(field.label, field.req && {
                            required: `${field.label} is required`,
                          })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder={field.placeholder} />
                      )}
                      {errors[field.label] && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors[field.label].message}
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>
              <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center">
                <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                Edit {modal_data.name}
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit(onSubmitAdd)}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                {modal_data?.fields?.map(field => {
                  return (
                    <div key={field.label}>
                      <label htmlFor={field.label} className="block mb-2 text-sm font-medium text-gray-900 capitalize">{startCase(field.label)}</label>
                      {field.select ? (
                        <select id={field.label} {...register(field.label, { required: `${field.label} is required` })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                          <option value="">Select category</option>
                          <option value={2}>Employee</option>
                          <option value={1}>Admin</option>
                          <option value={0}>Super Admin</option>
                        </select>
                      ) : (
                        field.readOnly ? (
                          <input
                            type={field.type}
                            name={field.label}
                            readOnly={true}
                            value={field.value}
                            {...register(field.label, field.req && {
                              required: `${field.label} is required`,
                            })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder={field.placeholder}
                          />
                        ) : (
                          <input
                            type={field.type}
                            name={field.label}
                            {...register(field.label, field.req && {
                              required: `${field.label} is required`,
                            })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder={field.placeholder} />
                        )
                      )}
                      {errors[field.label] && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors[field.label].message}
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>
              <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center">
                <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                Add {modal_data.name}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
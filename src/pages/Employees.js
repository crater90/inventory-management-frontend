import React, {useEffect, useState} from 'react'
import Table from '../components/Table'
import Layout from '../components/Layout'

function Employees() {
    const columns_name = ["id", "username", "type", "email", "phone", "godown id" ];
    const [data, setData] = useState(null);

    useEffect(() => {
      const getEmployees = async () => {
        try {
          const url = 'http://10.25.240.191:8085/api/employees';
          const res = await fetch(url);
          const resData = await res.json();
          setData(resData);
        } catch (error) {
          console.log(error);
        }
      }
      getEmployees();
    }, [])
    
  return (
    <Layout>
    <main className="bg-gray-50 py-3 sm:py-5">
        <Table name="Employees" columns={columns_name} data={data}/>
    </main>
    </Layout>
  )
}

export default Employees
import React from "react";
import Layout from "../components/Layout";

function Updates() {
    // dummy data
    const updates = [
        { id: 1, year: "JAN 2019", Version: "1.0.1" },
        { id: 2, year: "APR 2019", Version: "1.2.1" },
        { id: 3, year: "DEC 2019", Version: "2.1.1" },
        { id: 4, year: "JAN 2020", Version: "2.3.1" },
        { id: 5, year: "MAR 2020", Version: "3.1.1" },
        { id: 6, year: "JAN 2021", Version: "3.1.2" },
        { id: 7, year: "OCT 2021", Version: "3.1.3" },
        { id: 8, year: "JAN 2022", Version: "3.1.4" },
        { id: 9, year: "JAN 2023", Version: "3.1.5" },
        { id: 10, year: "FEB 2023", Version: "3.1.6" },
    ];

    return (
        <>
            <Layout>
                <div className="font-Inter p-4">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Dev Updates</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg shadow overflow-hidden">
                            <h2 className="text-xl font-bold bg-gray-100 p-3">Updates</h2>
                            <table className="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">ID</th>
                                        <th className="px-4 py-2">Year and Month</th>
                                        <th className="px-4 py-2">Updates</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {updates.map((updates) => (
                                        <tr key={updates.id}>
                                            <td className="border px-4 py-2">{updates.id}</td>
                                            <td className="border px-4 py-2">{updates.year}</td>
                                            <td className="border px-4 py-2">{updates.Version}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default Updates;
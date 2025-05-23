import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import AdminPages from "../../components/admin/AdminPages";

const Services = ({ services }) => {
    // const serviceings = useLoaderData();
    return (
        <AdminPages title="Services">
            <div className="services  h-full bg-green-100 pb-8 ">
                <div className="flex flex-col lg:flex-row justify-between items-center px-2 lg:px-4">
                    <h1 className="text-center text-4xl my-2 py-4 font-bold">
                        Services
                    </h1>
                    {/* <Link to="/mechanic_register">
                        <button className="bg-blue-500 text-white rounded-lg px-4 py-2 font-bold m-3 w-40">
                            Add mechanic
                        </button>{" "}
                    </Link> */}
                </div>
                <div className="overflow-x-auto">
                    <table className=" min-w-full w-full border-2 border-blue-500">
                        <thead className="bg-fuchsia-500 text-gray-950">
                            <tr className="text-center">
                                <th className="p-2 border-x border-white">
                                    License plate
                                </th>
                                <th className="p-2 border-x border-white">
                                    Vehicle name
                                </th>
                                <th className="p-2 border-x border-white">
                                    Vehicle Owner
                                </th>
                                <th className="p-2 border-x border-white">
                                    Request Date
                                </th>
                                <th className="p-2 border-x border-white">
                                    Mechanic name
                                </th>
                                <th className="p-2 border-x border-white">
                                    status
                                </th>
                                <th className="p-2 border-x border-white">
                                    More Info
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service) => (
                                <tr
                                    key={service.id}
                                    className="border-b-2 border-gray-300 bg-gray-100 pl-2 text-center"
                                >
                                    <td className="p-2 border-x border-gray-300">
                                        {service.licensePlate}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {service.vehicleName}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {service.vehicleOwner}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {service.date}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {service.mechanicName}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {service.status}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        <Link
                                            to={`/admin_dashboard/services/${service.id}`}
                                        >
                                            <button className="bg-red-500 p-2 rounded-sm">
                                                Details
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminPages>
    );
};

export default Services;

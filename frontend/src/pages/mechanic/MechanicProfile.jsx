import React from "react";
import { useParams } from "react-router-dom";
import { useAdminContext } from "../../contexts/AdminContext";
import MechanicPages from "../../components/mechanic/MechanicPages";

const MechanicProfile = () => {
    const { mechanics, services } = useAdminContext();

    const { id } = useParams(); // Get the id from the URL
    const mechanic = mechanics.find((item) => item.id === parseInt(id));

    //number of services in the last 6 months
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    const jobOrder = services.filter(
        (service) =>
            service.mechanicLicense === mechanic.certificationNumber &&
            new Date(service.date) >= sixMonthsAgo
    ).length;

    //total services completed
    const completedServices = services.filter(
        (service) =>
            service.mechanicLicense === mechanic.certificationNumber &&
            service.status === "completed"
    ).length;

    return (
        <>
            <MechanicPages title={mechanic.name}>
                <div className="Phone grid grid-cols-1 lg:grid-cols-2 py-8 bg-blue-100">
                    <div className="profile-details">
                        <div className="image">
                            <h2 className=" text-4xl font-bold text-center justify-center w-full ">
                                {mechanic.name}
                            </h2>
                            <h3 className="text-center text-md font-bold m-2">
                                The details on the card below will be shown to
                                mechanic's clients too
                            </h3>
                            <div className="card bg-gray-50 flex flex-row m-4  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-2 relative">
                                <img
                                    src={mechanic.img}
                                    alt=""
                                    className="img h-32 w-32 p-s3 rounded-full "
                                />
                                <div>
                                    <h2 className=" font-bold text-start my-2 mx-1">
                                        <span>Name:</span> {mechanic.name}
                                    </h2>
                                    <p className="text-start my-2 mx-1">
                                        <span className="font-bold">
                                            Email:
                                        </span>{" "}
                                        {mechanic.email}
                                    </p>
                                    <p className="text-start my-2 mx-1">
                                        <span className="font-bold">
                                            Phone:
                                        </span>{" "}
                                        {mechanic.phone}
                                    </p>
                                    <p className="text-start my-2 mx-1">
                                        <span className="font-bold">
                                            Location:
                                        </span>{" "}
                                        {mechanic.city}
                                    </p>
                                    <p className="text-start my-2 mx-1">
                                        <span className="font-bold">
                                            Specialization:
                                        </span>{" "}
                                        {mechanic.specialization}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="buttons text-center items-center ">
                        <h4 className="text-4xl font-bold  ">
                            Perfomance statistics:
                        </h4>
                        <h3 className="text-center text-md font-bold m-2">
                            The details of the performance statistics is tracked
                            and displayed here
                        </h3>
                        <div className="performance-stats grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
                            <div className="service-status h-40 lg:h-48 bg-gradient-to-r from-slate-950 to-slate-700 text-white flex flex-col m-4  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-2  items-center justify-center">
                                <h3 className="font-bold text-sm text-center">
                                    Current service status
                                </h3>
                                <button className="bg-blue-500 text-white text-xl p-2 rounded-lg w-40">
                                    in progress
                                </button>
                                <p className="text-gray-400">
                                    requested date: 02/18/2024
                                </p>
                            </div>
                            <div className="job-order h-40 lg:h-48 bg-gradient-to-r from-slate-950 to-slate-700 text-white flex flex-col m-4  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-2  items-center justify-center">
                                <h3 className="font-bold text-sm text-center">
                                    Job Order
                                </h3>
                                <div>
                                    <h3 className="font-bold text-white text-4xl">
                                        {jobOrder}
                                    </h3>{" "}
                                    <p className="text-gray-400">
                                        service requests
                                    </p>
                                </div>
                                <p className="text-gray-400">
                                    from the last 6 months
                                </p>
                            </div>
                            <div className="services-completed h-40 lg:h-48 bg-gradient-to-r from-slate-950 to-slate-700 text-white flex flex-col m-4  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-2  items-center justify-center">
                                <h3 className="font-bold text-sm text-center">
                                    Total services completed
                                </h3>
                                <div>
                                    <h3 className="font-bold text-white text-4xl">
                                        {completedServices}
                                    </h3>
                                    <p className="text-gray-400">
                                        services completed
                                    </p>
                                </div>
                                <p className="text-gray-400">
                                    so far from the assigned services
                                </p>
                            </div>
                            <div className="customer-feedback h-40 lg:h-48 bg-gradient-to-r from-slate-950 to-slate-700 text-white flex flex-col m-4  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-2  items-center justify-center">
                                <h3 className="font-bold text-sm text-center">
                                    Last service customer feedback
                                </h3>

                                <p className="text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Repellendus nisi in alias
                                    dolore saepe, quia ullam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </MechanicPages>
        </>
    );
};

export default MechanicProfile;

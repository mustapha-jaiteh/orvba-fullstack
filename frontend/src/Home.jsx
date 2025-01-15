import { useState } from "react";
import userImage1 from "/images/user-home-1.jpg";
import userImage2 from "/images/user-home-2.jpg";
import mechanicImage1 from "/images/mechanic-home-1.jpg";
import mechanicImage2 from "/images/mechanic-home-2.jpg";
// import About from "./pages/About";
// import logo from "/images/car-2.png";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePageService from "./pages/HomePageService";
// import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MechanicRegister from "./components/mechanic/MechanicRegister";

function Home() {
    const [count, setCount] = useState(0);
    const [isMechanicRegisterVisible, setIsMechanicRegisterVisible] =
        useState(false);
    const [isUserRegisterVisible, setIsUserRegisterVisible] = useState(false);
    const [user, setUser] = useState(null);

    const handleMechanicRegisterPopup = () => {
        setIsMechanicRegisterVisible(true);
    };
    const handleMechanicRegisterClose = () => {
        setIsMechanicRegisterVisible(false);
    };

    const handleUserRegisterPopup = () => {
        setIsUserRegisterVisible(true);
    };
    const handleUserRegisterClose = () => {
        setIsUserRegisterVisible(false);
    };

    return (
        <>
            <div class="w-full min-h-screen">
                <Navbar />

                <header className="App-header bg-[url('./images/car-3.jpg')] lg:bg-[url('./images/car-1.jpg')] bg-cover bg-center w-full h-[500px]   ">
                    <div className=" bg-gray-200 bg-opacity-60 text-slate-950 lg:absolute mx-2 lg:mx-12 my-2 lg:my-4 justify-center items-center text-center lg:text-left lg:justify-start lg:items-start w-auto lg:w-[40%] px-8 py-4 ">
                        <h5 className=" text-sm text-slate-950 tracking-widest mb-4 font-semibold">
                            QUALITY SERVICE
                        </h5>
                        <h1 className="text-4xl mb-4 font-bold tracking-wide">
                            ON ROAD VEHICLE BREAKDOWN ASSISTANCE
                        </h1>
                        <p className="mb-4 text-xl font-semibold">
                            Our service is designed to provide you with the best
                            possible solutions for your vehicle maintenance
                            needs. It aims to reduce time and cost for our users
                            to find mechanics during breakdowns.
                        </p>
                        <NavLink to={"/admin_dashboard"}>
                            <button
                                className=" bg-blue-600 rounded-md border-gray-300  py-2 px-2 w-60  lg:w-60 font-bold text-gray-100 hover:bg-blue-400"
                                // onClick={handleLoginPopup}
                            >
                                Admin dashboard
                            </button>
                        </NavLink>
                    </div>
                </header>
                <main className="  flex flex-col py-8  my-2  lg:my-4 bg-cover bg-center border-t-8 border-slate-950 w-full ">
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-4 lg:mb-6  lg:gap-4 items-center  justify-center h-full  lg:mx-8 rounded-md ">
                        <>
                            <div className="bg-slate-950 mx-4 lg:mx-0 rounded-lg rounded-b-none lg:rounded-b-lg  lg:w-full lg:h-full p-4  flex flex-col justify-center lg:justify-start items-center lg:items-left text-center lg:text-left lg:top-48 lg:left-32 text-gray-100 ">
                                <h3 className="text-3xl mb-4 font-bold tracking-wide ">
                                    Register as a user
                                </h3>
                                <p className="mb-4 text-lg">
                                    Our service is designed to provide you with
                                    the best possible solutions for your vehicle
                                    maintenance needs. It aims to reduce time
                                    and cost for our users to find mechanics
                                    during breakdowns. <br />
                                </p>

                                <Link to="/user_register">
                                    <button
                                        className=" bg-red-700 hover:bg-red-400 text-white font-bold py-2 px-4 rounded mt-4 left-0 "
                                        // onClick={handleUserRegisterPopup}
                                    >
                                        Register as a user
                                    </button>
                                </Link>
                            </div>
                            <div className=" h-full w-ful rounded-lg rounded-t-none">
                                <picture>
                                    {/* source for larger screen */}
                                    <source
                                        srcSet={userImage1}
                                        media="(min-width: 1024px)"
                                        className="w-full h-full"
                                    />
                                    {/* source for medium screen */}
                                    <source
                                        srcSet={userImage1}
                                        media="(min-width: 768px)"
                                        className="w-full h-full"
                                    />
                                    {/* source for smaller screen */}
                                    <source
                                        srcSet={userImage2}
                                        media="(min-width: 767px)"
                                        className="w-full h-full"
                                    />
                                    {/* default source */}
                                    <img
                                        src={userImage2}
                                        alt=""
                                        className=" w-[90%] lg:w-full h-full rounded-md rounded-t-none lg:rounded-t-md mx-4 lg:mx-0"
                                    />
                                </picture>
                            </div>
                        </>
                    </div>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  my-4 lg:mb-8 lg:gap-4 items-center  justify-center h-full lg:h-[300px] lg:mx-8 rounded-md  ">
                        <>
                            <div className=" bg-slate-950 mx-4 lg:mx-0 lg:w-full lg:h-full rounded-lg rounded-b-none lg:rounded-b-lg p-4 flex flex-col  items-center lg:items-left text-center lg:text-left lg:top-48 lg:left-32 text-gray-100 ">
                                <h3 className="text-3xl mb-4 font-bold tracking-wide ">
                                    Register as a mechanic
                                </h3>
                                <p className="mb-4 text-lg">
                                    Level up your business with multiple
                                    customers around your area. <br />
                                    Create an account with us and stay connected
                                    with vehicle owners nationwide.
                                </p>

                                <Link to="/admin">
                                    <button className=" bg-red-700 hover:bg-red-400 text-white font-bold p-2 rounded mt-4 left-0 ">
                                        Register as a mechanic
                                    </button>
                                </Link>
                            </div>
                            <div className=" h-full w-full rounded-lg rounded-t-none lg:rounded-t-md">
                                <picture>
                                    {/* source for larger screen */}
                                    <source
                                        srcSet={mechanicImage1}
                                        media="(min-width: 1024px)"
                                        className="w-full h-full"
                                    />
                                    {/* source for medium screen */}
                                    <source
                                        srcSet={mechanicImage1}
                                        media="(min-width: 768px)"
                                        className="w-full h-full"
                                    />
                                    {/* source for smaller screen */}
                                    <source
                                        srcSet={mechanicImage2}
                                        media="(min-width: 767px)"
                                        className="w-full h-full"
                                    />
                                    {/* default source */}
                                    <img
                                        src={mechanicImage2}
                                        alt=""
                                        className=" w-[90%] lg:w-full h-full rounded-md rounded-t-none lg:rounded-t-md mx-4 lg:mx-0"
                                    />
                                </picture>
                            </div>
                        </>
                    </div>
                </main>

                {/* <Services /> */}
                {/* <Element name="services" className="element"> */}
                <section>
                    <HomePageService />
                </section>
                {/* </Element> */}
                <Footer />
            </div>
        </>
    );
}

export default Home;

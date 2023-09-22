import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    // console.log(error);
    const goBack = () => navigate(-1)

    return (
        <div className="flex h-screen font-bold justify-center items-center flex-col space-y-6">
            <h1 className="text-4xl">Oooops!!!</h1>
            <h1 className=" text-6xl ">{error.status}</h1>
            <h2 className="text-4xl">{error.error.message}</h2>
            <button className="btn " onClick={goBack}>Go Back</button>
        </div>
    );
};

export default ErrorPage;
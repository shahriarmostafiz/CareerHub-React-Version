import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../../Utility/localstorage";
const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()// kon job e apply kortesi tar id ta nilam
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === parseInt(id))
    const handleJobApply = () => {
        saveJobApplication(idInt)
        toast.success('You applied successfully!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }
    // console.log(job, id);
    const { salary, phone, email, address, job_title, job_description, job_responsibility, educational_requirements, experiences } = job

    return (
        <div className="grid grid-cols-4 gap-4 ">

            <div className="col-span-3 border">
                <h1>
                    <span className="font-bold">
                        Job Description
                    </span> : {job_description}
                </h1>
                <h2>
                    <span className="font-bold">
                        Job Responsibility
                    </span>
                    : {job_responsibility}
                </h2>
                <h2><span className="font-bold"> Education Requirement</span> : {educational_requirements}</h2>
                <h2><span className="font-bold">Experience: </span> {experiences}</h2>
            </div>
            <div className="col-span-1 border">
                <h1>
                    Side
                </h1>
                <button
                    onClick={handleJobApply}
                    className="btn btn-primary w-full">Apply Now</button>
            </div>
            <ToastContainer />
        </div>

    );
};

export default JobDetails;
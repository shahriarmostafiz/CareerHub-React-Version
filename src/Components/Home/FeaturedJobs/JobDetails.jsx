import { Link, useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()// kon job e apply kortesi tar id ta nilam
    const job = jobs.find(job => job.id === parseInt(id))

    console.log(job, id);
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
                <Link><button className="btn btn-primary">Apply Now</button></Link>
            </div>
        </div>

    );
};

export default JobDetails;
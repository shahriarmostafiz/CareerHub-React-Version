import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getSavedJobApplication } from "../../Utility/localstorage";
import AppliedJobcard from "./ApliedJobcard";
import { AiOutlineDown } from "react-icons/ai";


const AppliedJobs = () => {
    const jobs = useLoaderData()

    const [jobsApplied, setJobsApplied] = useState([])
    const [filter, setFilter] = useState('')
    useEffect(() => {
        const storedJobApplications = getSavedJobApplication()
        const appliedJobs = jobs.filter(job => storedJobApplications.includes(job.id))
        setJobsApplied(appliedJobs)
    }, [])
    console.log(jobsApplied);
    return (
        <div>
            <h1 className="text-2xl"> Jobs Applied:  {jobsApplied.length}</h1>
            <details className="dropdown mb-32">
                <summary className="m-1 btn normal-case"> <span className="flex items-center text-lg gap-2">
                    Filter by <AiOutlineDown> </AiOutlineDown>
                </span></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>All </a></li>
                    <li><a >Remote</a></li>
                    <li><a>On Site</a></li>
                </ul>
            </details>
            {
                jobsApplied.map(job => <AppliedJobcard key={job.id} job={job}></AppliedJobcard>)
            }
            {/* {
                jobsApplied.map(job => <AppliedJobcard key={job.id} job={job}></AppliedJobcard>)
            } */}
        </div>
    );
};

export default AppliedJobs;
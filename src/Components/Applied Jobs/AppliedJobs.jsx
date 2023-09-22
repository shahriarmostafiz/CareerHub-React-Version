import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getSavedJobApplication } from "../../Utility/localstorage";
import AppliedJobcard from "./ApliedJobcard";
import { AiOutlineDown } from "react-icons/ai";


const AppliedJobs = () => {
    const jobs = useLoaderData()

    const [jobsApplied, setJobsApplied] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])
    const handleFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(jobsApplied)
        }
        // "remote_or_onsite": "Remote"
        else if (filter === 'remote') {
            const remoteJobs = jobsApplied.filter(job => job.remote_or_onsite === "Remote")
            setDisplayJobs(remoteJobs)
        }
        else if (filter === 'onsite') {
            const onSiteJobs = jobsApplied.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onSiteJobs)
        }
    }
    useEffect(() => {
        const storedJobApplications = getSavedJobApplication()
        const appliedJobs = jobs.filter(job => storedJobApplications.includes(job.id))
        setJobsApplied(appliedJobs)
        setDisplayJobs(appliedJobs)
    }, [jobs])
    console.log(jobsApplied);
    return (
        <div>
            <h1 className="text-2xl"> Jobs Applied:  {jobsApplied.length}</h1>
            <details className="dropdown mb-32">
                <summary className="m-1 btn normal-case"> <span className="flex items-center text-lg gap-2">
                    Filter by <AiOutlineDown> </AiOutlineDown>
                </span></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleFilter('all')}><a>All </a></li>
                    <li onClick={() => handleFilter('remote')}><a >Remote</a></li>
                    <li onClick={() => handleFilter('onsite')}><a>On Site</a></li>
                </ul>
            </details>
            {
                displayJobs.map(job => <AppliedJobcard key={job.id} job={job}></AppliedJobcard>)
            }
            {/* {
                jobsApplied.map(job => <AppliedJobcard key={job.id} job={job}></AppliedJobcard>)
            } */}
        </div>
    );
};

export default AppliedJobs;
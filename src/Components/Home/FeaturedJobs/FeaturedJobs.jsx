// 
import { useEffect, useState } from "react";
import Featuredjob from "./Featuredjob";
const FeaturedJobs = () => {
    const [jobs, setjobs] = useState([])
    const [length, setLength] = useState(4)
    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => setjobs(data))
    }, [])
    // console.log(jobs);
    return (
        <div>
            <div className="text-center my-4">
                <h2 className="text-6xl text-center my-4 font-semibold">Featured Job List ({jobs.length})</h2>
                <p className="text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, length).map(job => <Featuredjob key={job.id} job={job}></Featuredjob>)
                }

            </div>
            {/* button part */}
            <div className="my-4">
                <div className={length === jobs.length ? "hidden" : 'text-center'}>
                    <button
                        onClick={() => { setLength(jobs.length) }}
                        className="btn btn-primary">Show All</button>
                </div>
                <div className={length === jobs.length ? "text-center" : 'hidden'}>
                    <button
                        onClick={() => setLength(2)}
                        className="btn btn-primary px-8">Hide </button>
                </div>

            </div>
        </div>
    );
};

export default FeaturedJobs;
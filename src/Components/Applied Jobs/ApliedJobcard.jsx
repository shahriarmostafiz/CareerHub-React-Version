import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

import { RiMoneyDollarCircleLine } from "react-icons/ri";
const AppliedJobcard = ({ job }) => {
    const { id, logo, company_name, job_title, job_type, salary, location, remote_or_onsite } = job

    return (
        <div className="card card-compact border p-2 border-purple-600 bg-base-100 shadow-xl">
            <div className="w-full text-start p-4 pt-8">
                <img src={logo} className="" alt={company_name} />
            </div>
            <div className="card-body">
                <h2 className="card-title text-3xl ">{job_title}</h2>
                <p className="text-xl mb-2">{company_name}</p>
                <div className='flex gap-4'>
                    <div className='border px-4 py-2 rounded border-purple-600 text-purple-600'>{remote_or_onsite}</div>
                    <div className='border px-4 py-2 rounded border-purple-600 text-purple-600'>{job_type}</div>
                </div>
                <div className="flex justify-start gap-4">
                    <div className="flex items-center text-2xl gap-1">
                        <CiLocationOn></CiLocationOn>

                        <span>{location}</span>

                    </div>
                    <div className="flex items-center text-2xl gap-1">
                        <RiMoneyDollarCircleLine></RiMoneyDollarCircleLine>
                        <span>{salary}</span>
                    </div>
                </div>
                <div className="card-actions justify-start">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>

                    </Link>
                </div>
            </div>
        </div>
    );
};
AppliedJobcard.propTypes = {
    job: PropTypes.object
}

export default AppliedJobcard;
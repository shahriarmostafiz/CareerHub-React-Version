import { useEffect, useState } from "react";
import JobCategory from "./JobCategory";

const JobCategories = () => {
    const [categories, setCategory] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    // console.log(category);


    return (

        <div className="">
            <div className="text-center my-4">
                <h2 className="text-6xl font-semibold text-center my-4">Job Categories List </h2>
                <p className="text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="flex justify-between max-w-6xl mx-auto my-6">
                    {
                        categories.map(category => <JobCategory key={category.id} category={category}></JobCategory>)
                    }
                </div>
            </div>

        </div>
    );
};

export default JobCategories;
import PropTypes from "prop-types"

const JobCategory = ({ category }) => {
    const { logo, category_name, availability } = category
    return (
        <div className="p-6 space-y-2 bg-slate-200 shadow text-left rounded-md">
            <img src={logo} alt="" />
            <h1 className="text-2xl">{category_name}</h1>
            <h2>{availability}</h2>
        </div>
    );
};
JobCategory.propTypes = {
    category: PropTypes.object
}

export default JobCategory;
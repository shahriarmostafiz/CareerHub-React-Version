const getSavedJobApplication = () => {
  const savedJobApplication = localStorage.getItem("job-application");
  if (savedJobApplication) {
    return JSON.parse(savedJobApplication);
  }
  return [];
};
const saveJobApplication = (id) => {
  const savedJobApplications = getSavedJobApplication();
  const exist = savedJobApplications.find((jobId) => jobId === id);
  if (!exist) {
    savedJobApplications.push(id);
    localStorage.setItem(
      "job-application",
      JSON.stringify(savedJobApplications)
    );
  }
};
export { getSavedJobApplication, saveJobApplication };

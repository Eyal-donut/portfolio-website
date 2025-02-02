import { jobInfos } from "../../../../../constants/constants";
import Job from "../Job/Job";

const WorkExperience = () => {
  return (
    <>
      <h4>key work experience</h4>
      {jobInfos.map((job) => {
        return (
          <Job
            key={job.jobTitle + job.company}
            iconName={job.iconName}
            size={job.size}
            company={job.company}
            JobDescription={job.jobDescription}
            JobTitle={job.jobTitle}
          />
        );
      })}
    </>
  );
};

export default WorkExperience;

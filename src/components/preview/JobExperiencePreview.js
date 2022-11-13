import React from "react";

const JobExperiencePreview = (props) => {
        const { jobName, personalTitle, jobDate, jobDescription } = props;

        return(
            <div className="job-card">
                <h3>{personalTitle}</h3>
                <p>{jobDate}</p>
                <p>{jobName}</p>
                <p>{jobDescription}</p>
            </div>
        )
    
}

export default JobExperiencePreview;
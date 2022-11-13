import React, { useState } from "react";
import uniqid from "uniqid";
import JobExperiencePreview from "./preview/JobExperiencePreview";

const JobExperience = (props) => {
    
    const [jobs, setJobs] = useState([{
          companyName: "",
          title: "",
          date: "",
          description: "",
          id: uniqid(),
      }])

      
    const onAddJob = (e) => {
        setJobs(jobs.concat({
            companyName: "",
            title: "",
            date: "",
            description: "",
            id: uniqid(),
        }))
    }

    const handleJobChange = (jobId) => {
        const jobToEdit = jobs.filter(job => job.id === jobId);
        return jobToEdit[0];
    }

    const handleCompanyNameChange = (e, jobId) => {
        let objectToEdit = handleJobChange(jobId);
        objectToEdit[e.target.name] = e.target.value;
        handleObjectChange(jobId, objectToEdit);
    }

    const handleObjectChange = (jobId, updatedObject) => {
        const updatedInfo = jobs.map((job) => {
            return job.id === jobId ? updatedObject : job; 
        })
        setJobs(updatedInfo);
    }

    const handleJobDeletion = (jobId) => {
        const newJobsArray = jobs.filter(job => job.id !== jobId);
        setJobs(newJobsArray);
    }

    //Map the objects in jobs array
    //Every time a job gets added it creates a new form
        const { isPreviewing } = props;
        return (
            <div className="job-container">
                {!isPreviewing && <h1 className="job-header">Job Experience</h1>}
                {isPreviewing && <h1 className="job-preview-header">Job Experience</h1>}
                {isPreviewing ? 
                (
                    jobs.map((job) => (
                        <JobExperiencePreview
                          jobName={job.companyName}
                          personalTitle={job.title}
                          jobDate={job.date}
                          jobDescription={job.description}
                        />
                    ))
                ) 
                : 
                (jobs.map((job) => (
                    <div className="job-form-container" key={job.id}>
                        <form key={job.id}>
                          <input
                            placeholder="Company Name"
                            name="companyName"
                            onChange={e => handleCompanyNameChange(e, job.id)}
                            value={job.companyName}
                          />
                          <input
                            placeholder="Job Title"
                            name="title"
                            onChange={e => handleCompanyNameChange(e, job.id)}
                            value={job.title}
                          />
                          <input
                            placeholder="Date"
                            name="date"
                            onChange={e => handleCompanyNameChange(e, job.id)}
                            value={job.date}
                          />
                          <textarea
                            className="desc-box"
                            placeholder="Job Description"
                            name="description"
                            onChange={e => handleCompanyNameChange(e, job.id)}
                            value={job.description}
                          />
                        </form>
                        <button className="job-delete" onClick={() => handleJobDeletion(job.id)}>Delete</button>
                    </div>)))}
                    {isPreviewing === false && <button className="job-add" onClick={onAddJob}>Add Job</button>}
            </div>
        );
    
}

export default JobExperience;
import React, { useState } from "react";
import uniqid from "uniqid";
import EducationPreview from "./preview/EducationPreview";

const Education = (props) => {
        const [educations, setEducations] = useState([{
            schoolName: "",
            degree: "",
            date: "",
            desc: "",
            id: uniqid(),
        }]);
    
    const onAddEducation = () => {
        setEducations( 
            educations.concat(
            {
              schoolName: "",
              degree: "",
              date: "",
              desc: "",
              id: uniqid(),
            }
        ))
    }

    const handleEducationChange = (eduId) => {
        const educationToEdit = educations.filter(education => education.id === eduId);
        return educationToEdit[0];
    }

    const handleInputChange = (e, eduId) =>{
        let objectToEdit = handleEducationChange(eduId);
        objectToEdit[e.target.name] = e.target.value;
        handleObjectEduChange(eduId, objectToEdit);
    }

    const handleObjectEduChange = (eduId, updatedObj) =>{
        const updatedInfo = educations.map((education) => {
            return education.id === eduId ? updatedObj : education;
        })
        setEducations(updatedInfo)
    }

    const handleEduDeletion = (eduId) => {
        const newEducationArray = educations.filter(education => education.id !== eduId);
        setEducations(newEducationArray)
    }


        const { isPreviewing } = props;
        return (
            <div className="education-container">
                {!isPreviewing && <h1 className="education-header">Education</h1>}
                {isPreviewing && <h1 className="education-preview-header">Education</h1>}

                {isPreviewing ? 
                (
                    educations.map((edu) => (
                        <EducationPreview
                        eduDegree={edu.degree}
                        eduSchoolName={edu.schoolName}
                        eduDate={edu.date}
                        eduDesc={edu.desc}
                      />
                    ))
                ) 
                : 
                (
                    educations.map((edu) => (
                        <div className="edu-form-container" key={edu.id}>
                            <form key={edu.id}>
                                <input
                                  placeholder="School/University"
                                  name="schoolName"
                                  onChange={e => handleInputChange(e, edu.id)}
                                  value={edu.schoolName}
                                />
                                <input
                                  placeholder="Degree"
                                  name="degree"
                                  onChange={e => handleInputChange(e, edu.id)}
                                  value={edu.degree}
                                />
                                <input
                                  placeholder="Date (Ex: 2017 - 2021)"
                                  name="date"
                                  onChange={e => handleInputChange(e, edu.id)}
                                  value={edu.date}
                                />
                                <textarea
                                    placeholder="Achievements/description"
                                    name="desc"
                                    onChange={e => handleInputChange(e, edu.id)}
                                    value={edu.desc}
                                />
                            </form>
                            
                            <button onClick={() => handleEduDeletion(edu.id)} className="edu-delete">Delete</button>
                        </div>
                    ))
                )}
                {!isPreviewing && <button className="edu-add" onClick={onAddEducation}>Add Education</button>}
            </div>
        )
}

export default Education;
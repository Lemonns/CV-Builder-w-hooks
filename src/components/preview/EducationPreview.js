import React from "react";

const EducationPreview = (props) => {

        const { eduDegree, eduSchoolName, eduDate, eduDesc} = props;
        return (
            <div className="education-card">
                <h3>{eduSchoolName}</h3>
                <h4>{eduDegree}</h4>
                <p>{eduDate}</p>
                <p>{eduDesc}</p>
            </div>
        )
}

export default EducationPreview;
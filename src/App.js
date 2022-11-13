import './styles/App.css';
import './styles/style.css'
import React, { useState } from "react";
import PersonalInfo from './components/PersonalInfo'
import JobExperience from './components/JobExperience';
import Education from './components/Education';

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  
  //changes isSubmitted to true or false
  const handleSubmit = () => {
    let bool = isSubmitted ? false : true;
    setIsSubmitted(bool);
  }

  //conditional classname
    return (
      <div className="preview-container">
        <div className='cv-comp-container'>
          <PersonalInfo
            isPreviewing={isSubmitted}
          />
          <JobExperience
            isPreviewing={isSubmitted}
          />
          <Education
            isPreviewing={isSubmitted}
          />
        </div>
        <div className="edit-add-btn-container">
          <button className={isSubmitted ? 'edit-btn' : 'submit-btn'} onClick={handleSubmit}>
            {isSubmitted ? 'Edit' : 'Submit'}
          </button>
        </div>
      </div>
    )
}

export default App;

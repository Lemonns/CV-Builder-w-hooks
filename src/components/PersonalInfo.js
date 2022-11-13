import React, { useState } from "react";
import PersonalInfoPreview from "./preview/PersonalInfoPreview";

const PersonalInfo = (props) => {

    const [info, setInfo] = useState({fullName: "", phoneNumber: "", email: "", address: "", link: ""})

    const updateInfo = (e) => {
        setInfo(prevInfo => ({...prevInfo, [e.target.name]: e.target.value}))
    }

        const { isPreviewing } = props;
        return (
            <div className= {isPreviewing ? "personal-info-container-preview" : "personal-info-container"}>
                {!isPreviewing && 
                <h1 className="personal-header">Personal Details</h1>
                }

                {isPreviewing ? 
                (
                <PersonalInfoPreview
                    name={info.fullName}
                    address={info.address}
                    email={info.email}
                    number={info.phoneNumber}
                    personalLink={info.link}
                />
                ) 
                :(
                <form>
                   <input
                     placeholder="Name"
                     onChange={updateInfo}
                     value={info.fullName}
                     name="fullName"
                   />
                   <input
                     placeholder="Phone Number"
                     onChange={updateInfo}
                     value={info.phoneNumber}
                     name="phoneNumber"
                   />
                   <input
                     placeholder="Address"
                     onChange={updateInfo}
                     value={info.address}
                     name="address"
                   />
                   <input
                     placeholder="Email"
                     onChange={updateInfo}
                     value={info.email}
                     name="email"
                   />
                   <input
                     placeholder="Link"
                     onChange={updateInfo}
                     value={info.link}
                     name="link"
                   />
                </form>
                )
                }
                
            </div>
        )
}

export default PersonalInfo;

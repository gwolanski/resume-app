import { useState } from 'react'
import InfoInput from './components/Info'
import './styles/App.css'

function App() {
  // const [fullName, setFullName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [city, setCity] = useState('');
  // const [state, setState] = useState('');

  const [inputValues, setInputValues] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    city: '',
    state: '',
    linkedInURL: '',
    gitHubURL: '',
    school: '',
    major: '',
    graduationYear: '',
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    projectName: '',
    projectURL: '',
    projectDescription: ''
  })

  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <div className="pageLayout">
        <div className="input-container">
          <div className="inputSection">
            <h2>General Info</h2>
            <InfoInput
              inputLabel="Full Name: "
              name="fullName"
              value={inputValues.fullName}
              onChange={handleInputChange}
            />
            <InfoInput
              inputLabel="Email: "
              name="email"
              value={inputValues.email}
              onChange={handleInputChange}
            />
            <InfoInput
              inputLabel="Phone Number: "
              name="phoneNumber"
              value={inputValues.phoneNumber}
              onChange={handleInputChange}
            />
            <InfoInput
              inputLabel="City: "
              name="city"
              value={inputValues.city}
              onChange={handleInputChange}
            />
            <InfoInput
              inputLabel="State: "
              name="state"
              value={inputValues.state}
              onChange={handleInputChange}
            />
            <InfoInput
              inputLabel="LinkedIn URL: "
              name="linkedInURL"
              value={inputValues.linkedInURL}
              onChange={handleInputChange}
            />
            <InfoInput
              inputLabel="GitHub URL: "
              name="gitHubURL"
              value={inputValues.gitHubURL}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputSection">
            <h2>Work Experience</h2>
            <InfoInput
              inputLabel="Company: "
              name="compant"
              value={inputValues.company}
              onChange={handleInputChange}
            />
            <InfoInput
              inputLabel="Position: "
              name="position"
              value={inputValues.position}
              onChange={handleInputChange}
            />
            <InfoInput
              inputLabel="Start Date: "
              name="startDate"
              value={inputValues.startDate}
              onChange={handleInputChange}
            />
            <InfoInput
              inputLabel="End Date: "
              name="endDate"
              value={inputValues.endDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputSection">
            <h2>Education</h2>
            <InfoInput
              inputLabel="School/University: "
              name="school"
              value={inputValues.school}
              onChange={handleInputChange}
            />
            <InfoInput
              inputLabel="Major: "
              name="major"
              value={inputValues.major}
              onChange={handleInputChange}
            />
            <InfoInput
              inputLabel="Graduation Year: "
              name="graduationYear"
              value={inputValues.graduationYear}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputSection">
            <h2>Projects</h2>
            <InfoInput
              inputLabel="Project Name: "
              name="projectName"
              value={inputValues.projectName}
              onChange={handleInputChange}
            />
            <InfoInput
              inputLabel="Project URL: "
              name="projectURL"
              value={inputValues.projectURL}
              onChange={handleInputChange}
            />
            <InfoInput
              inputLabel="Project Description: "
              name="projectDescription"
              value={inputValues.projectDescription}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="resultsContainer">
          <div className="resumeName">{inputValues.fullName}</div>
          <div className="resumeLocation">{inputValues.city}, {inputValues.state}</div>
          <div className="resumeContactInfo">
            <div className="links">
              <div>{inputValues.linkedInURL}</div>
              <div>{inputValues.gitHubURL}</div>
            </div>
            <div className="contactInfo">
              <div>{inputValues.email}</div>
              <div>{inputValues.phoneNumber}</div>
            </div>
          </div>
          <div className="resumeWork">
            <h2 className="sectionHeading">Work Experience</h2>
          </div>
          <div className="resumeEducation">
            <h2 className="sectionHeading">Education</h2>
          </div>

        </div>
      </div>

    </>
  )
}

export default App

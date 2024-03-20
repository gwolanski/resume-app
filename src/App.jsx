/* eslint-disable react/jsx-key */
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import InfoInput from './components/Info'
import EducationWorkInfoInput from './components/EducationWorkInfo';
import AddButton from './components/AddButton'
import './styles/App.css'

function App() {
  const [inputValues, setInputValues] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    city: '',
    state: '',
    linkedInURL: '',
    gitHubURL: '',
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    projectName: '',
    projectURL: '',
    projectDescription: ''
  });

  const [educationInputValues, setEducationInputValues] = useState([{
    id: uuidv4(),
    school: '',
    major: '',
    graduationYear: ''
  }
  ]);

  const [workInputValues, setWorkInputValues] = useState([{
    id: uuidv4(),
    company: '',
    position: '',
    startDate: '',
    endDate: ''
  }]);

  const handleAddEducation = () => {
    setEducationInputValues([...educationInputValues, {
      id: uuidv4(),
      school: '',
      major: '',
      graduationYear: ''
    }])
  }

  const handleAddWork = () => {
    setWorkInputValues([...workInputValues, {
      id: uuidv4(),
      company: '',
      position: '',
      startDate: '',
      endDate: ''
    }])
  }

  const handleGeneralInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    });
  }


  const handleEducationInputChange = (id, event) => {
    const newEducationInputValues = educationInputValues.map(item => {
      if (id === item.id) {
        item[event.target.name] = event.target.value
      }
      return item;
    })
    setEducationInputValues(newEducationInputValues);
  }

  const handleWorkInputChange = (id, event) => {
    const newWorkInputValues = educationInputValues.map(item => {
      if (id === item.id) {
        item[event.target.name] = event.target.value
      }
      return item;
    })
    setWorkInputValues(newWorkInputValues);
  }

  const listEducationInputs = educationInputValues.map(item =>
    <div className="container workEducationContainer" key={item.id}>
      <button className="deleteBtn">X</button>
      <EducationWorkInfoInput
        inputLabel="School/University: "
        id={item.id}
        name="school"
        value={item.school}
        onChange={event => handleEducationInputChange(item.id, event)}
      />
      <EducationWorkInfoInput
        inputLabel="Major: "
        id={item.id}
        name="major"
        value={item.major}
        onChange={event => handleEducationInputChange(item.id, event)}
      />
      <EducationWorkInfoInput
        inputLabel="Graduation Year: "
        id={item.id}
        name="graduationYear"
        value={item.graduationYear}
        onChange={event => handleEducationInputChange(item.id, event)}
      />
    </div>
  );

  const listWorkInputs = workInputValues.map(item =>
    <div className="container workEducationContainer" key={item.id}>
      <button className="deleteBtn">X</button>
      <EducationWorkInfoInput
        inputLabel="Company: "
        id={item.id}
        name="company"
        value={item.company}
        onChange={event => handleWorkInputChange(item.id, event)}
      />
      <EducationWorkInfoInput
        inputLabel="Position: "
        id={item.id}
        name="position"
        value={item.position}
        onChange={event => handleWorkInputChange(item.id, event)}
      />
      <EducationWorkInfoInput
        inputLabel="Start Date: "
        id={item.id}
        name="startDate"
        value={item.startDate}
        onChange={event => handleWorkInputChange(item.id, event)}
      />
      <EducationWorkInfoInput
        inputLabel="End Date: "
        id={item.id}
        name="endDate"
        value={item.endDate}
        onChange={event => handleWorkInputChange(item.id, event)}
      />
    </div>
  )

  return (
    <>
      <div className="pageLayout">
        <div className="input-container">
          <div className="inputSection">
            <h2 className="sectionHeading">General Info</h2>
            <div className="container">
              <InfoInput
                inputLabel="Full Name: "
                name="fullName"
                value={inputValues.fullName}
                onChange={handleGeneralInputChange}
              />
              <InfoInput
                inputLabel="Email: "
                name="email"
                value={inputValues.email}
                onChange={handleGeneralInputChange}
              />
              <InfoInput
                inputLabel="Phone Number: "
                name="phoneNumber"
                value={inputValues.phoneNumber}
                onChange={handleGeneralInputChange}
              />
              <InfoInput
                inputLabel="City: "
                name="city"
                value={inputValues.city}
                onChange={handleGeneralInputChange}
              />
              <InfoInput
                inputLabel="State: "
                name="state"
                value={inputValues.state}
                onChange={handleGeneralInputChange}
              />
              <InfoInput
                inputLabel="LinkedIn URL: "
                name="linkedInURL"
                value={inputValues.linkedInURL}
                onChange={handleGeneralInputChange}
              />
              <InfoInput
                inputLabel="GitHub URL: "
                name="gitHubURL"
                value={inputValues.gitHubURL}
                onChange={handleGeneralInputChange}
              />
            </div>
          </div>
          <div className="inputSection">
            <h2 className="sectionHeading">Work Experience</h2>
            {listWorkInputs}
            <AddButton onClick={handleAddWork} />
          </div>
          <div className="inputSection">
            <h2 className="sectionHeading">Education</h2>
            {listEducationInputs}
            <AddButton onClick={handleAddEducation} />
          </div>
          <div className="inputSection">
            <h2>Projects</h2>
            <InfoInput
              inputLabel="Project Name: "
              name="projectName"
              value={inputValues.projectName}
              onChange={handleGeneralInputChange}
            />
            <InfoInput
              inputLabel="Project URL: "
              name="projectURL"
              value={inputValues.projectURL}
              onChange={handleGeneralInputChange}
            />
            <InfoInput
              inputLabel="Project Description: "
              name="projectDescription"
              value={inputValues.projectDescription}
              onChange={handleGeneralInputChange}
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

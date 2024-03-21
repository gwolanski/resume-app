/* eslint-disable react/jsx-key */
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import InfoInput from './components/Info'
import EducationWorkInfoInput from './components/EducationWorkInfo';
import AddButton from './components/AddButton'
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
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
    identifier: uuidv4(),
    school: '',
    major: '',
    graduationYear: ''
  }
  ]);

  const [workInputValues, setWorkInputValues] = useState([{
    identifier: uuidv4(),
    company: '',
    position: '',
    startDate: '',
    endDate: ''
  }]);

  const handleAddEducation = () => {
    setEducationInputValues([...educationInputValues, {
      identifier: uuidv4(),
      school: '',
      major: '',
      graduationYear: ''
    }])
  }

  const handleAddWork = () => {
    setWorkInputValues([...workInputValues, {
      identifier: uuidv4(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      responsibilities: ''
    }])
  }

  const handleRemoveEducation = id => {
    const values = [...educationInputValues];
    values.splice(values.findIndex(value => value.identifier === id), 1);
    setEducationInputValues(values);
  }

  const handleRemoveWork = id => {
    const values = [...workInputValues];
    values.splice(values.findIndex(value => value.identifier === id), 1);
    setWorkInputValues(values);
  }

  const handleGeneralInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    });
  }


  const handleEducationInputChange = (id, event) => {
    const newEducationInputValues = educationInputValues.map(item => {
      if (id === item.identifier) {
        item[event.target.name] = event.target.value
      }
      return item;
    })
    setEducationInputValues(newEducationInputValues);
  }

  const handleWorkInputChange = (id, event) => {
    const newWorkInputValues = workInputValues.map(item => {
      if (id === item.identifier) {
        item[event.target.name] = event.target.value
      }
      return item;
    })
    setWorkInputValues(newWorkInputValues);
  }

  const listEducationInputs = educationInputValues.map(item =>
    <div className="container workEducationContainer" key={item.identifier}>
      <EducationWorkInfoInput
        id={item.id}
        inputLabel="School/University"
        identifier={item.identifier}
        name="school"
        value={item.school}
        onChange={event => handleEducationInputChange(item.identifier, event)}
      />
      <EducationWorkInfoInput
        id={item.id}
        inputLabel="Major"
        identifier={item.identifier}
        name="major"
        value={item.major}
        onChange={event => handleEducationInputChange(item.identifier, event)}
      />
      <EducationWorkInfoInput
        id={item.id}
        inputLabel="Graduation Year"
        identifier={item.identifier}
        name="graduationYear"
        value={item.graduationYear}
        onChange={event => handleEducationInputChange(item.identifier, event)}
      />
      <DeleteForeverTwoToneIcon sx={{ fontSize: 27 }} className="deleteButton" onClick={() =>
        handleRemoveEducation(item.identifier)} />
    </div>
  );

  const listWorkInputs = workInputValues.map(item =>
    <div className="container workEducationContainer" key={item.identifier}>
      <EducationWorkInfoInput
        id={item.id}
        inputLabel="Company"
        identifier={item.identifier}
        name="company"
        value={item.company}
        onChange={event => handleWorkInputChange(item.identifier, event)}
      />
      <EducationWorkInfoInput
        id={item.id}
        inputLabel="Position"
        identifier={item.identifier}
        name="position"
        value={item.position}
        onChange={event => handleWorkInputChange(item.identifier, event)}
      />
      <EducationWorkInfoInput
        id={item.id}
        inputLabel="Start Date"
        identifier={item.identifier}
        name="startDate"
        value={item.startDate}
        onChange={event => handleWorkInputChange(item.identifier, event)}
      />
      <EducationWorkInfoInput
        id={item.id}
        inputLabel="End Date"
        identifier={item.identifier}
        name="endDate"
        value={item.endDate}
        onChange={event => handleWorkInputChange(item.identifier, event)}
      />
      <EducationWorkInfoInput
        id={item.id}
        inputLabel="Responsibilities"
        identifier={item.identifier}
        name="responsibilities"
        value={item.responsibilities}
        onChange={event => handleWorkInputChange(item.identifier, event)}
      />
      <DeleteForeverTwoToneIcon sx={{ fontSize: 27 }} className="deleteButton" onClick={() =>
        handleRemoveWork(item.identifier)} />
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
                inputLabel="Full Name "
                name="fullName"
                value={inputValues.fullName}
                onChange={handleGeneralInputChange}
              />
              <InfoInput
                inputLabel="Email "
                name="email"
                value={inputValues.email}
                onChange={handleGeneralInputChange}
              />
              <InfoInput
                inputLabel="Phone Number "
                name="phoneNumber"
                value={inputValues.phoneNumber}
                onChange={handleGeneralInputChange}
              />
              <InfoInput
                inputLabel="City "
                name="city"
                value={inputValues.city}
                onChange={handleGeneralInputChange}
              />
              <InfoInput
                inputLabel="State "
                name="state"
                value={inputValues.state}
                onChange={handleGeneralInputChange}
              />
              <InfoInput
                inputLabel="LinkedIn URL "
                name="linkedInURL"
                value={inputValues.linkedInURL}
                onChange={handleGeneralInputChange}
              />
              <InfoInput
                inputLabel="GitHub URL "
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
              inputLabel="Project Name"
              name="projectName"
              value={inputValues.projectName}
              onChange={handleGeneralInputChange}
            />
            <InfoInput
              inputLabel="Project URL"
              name="projectURL"
              value={inputValues.projectURL}
              onChange={handleGeneralInputChange}
            />
            <InfoInput
              inputLabel="Project Description"
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
            {workInputValues.map(item => (
              <div className="workExperienceContainer">
                <div className="workExperienceHeading">
                  <div className="workLeft">
                    <div key={item.id} className="position"> {item.position}</div>
                    <div className="symbol">|</div>
                    <div key={item.id} className="company"> {item.company}</div>
                  </div>
                  <div className="workRight">
                    <div key={item.id} > {item.startDate}</div>
                    <div className="symbol">-</div>
                    <div key={item.id} > {item.endDate}</div>
                  </div>
                </div>
                <div key={item.id} > {item.responsibilities}</div>
              </div>
            ))}
          </div>
          <div className="resumeEducation">
            <h2 className="sectionHeading">Education</h2>
            {educationInputValues.map(item => (
              <div className="educationContainer">
                <div key={item.id} className="major">{item.major}</div>
                <div className="symbol">|</div>
                <div key={item.id} className="school">{item.school}</div>
                <div key={item.id}>{item.graduationYear}</div>
              </div>

            ))}
          </div>

        </div>
      </div >

    </>
  )
}

export default App

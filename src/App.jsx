/* eslint-disable react/jsx-key */
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import InfoInput from './components/Info'
import EducationWorkInfoInput from './components/EducationWorkInfo';
import AddButton from './components/AddButton'
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
  });

  const [educationInputValues, setEducationInputValues] = useState([{
    identifier: uuidv4(),
    school: '',
    degree: '',
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
      degree: '',
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
        inputLabel="Degree"
        identifier={item.identifier}
        name="degree"
        value={item.degree}
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
          <Accordion className="inputSection">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ maxHeight: "30px" }}
            >
              <h2 className="sectionHeading">General Info</h2>
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
          </Accordion>
          <Accordion className="inputSection" sx={{ margin: "10px 0" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ maxHeight: "30px" }}
            >
              <h2 className="sectionHeading">Work Experience</h2>
            </AccordionSummary>
            <AccordionDetails>
              {listWorkInputs}
              <AddButton onClick={handleAddWork} />
            </AccordionDetails>
          </Accordion>
          <Accordion className="inputSection" sx={{ margin: "10px 0" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ maxHeight: "30px" }}
            >
              <h2 className="sectionHeading">Education</h2>
            </AccordionSummary>
            <AccordionDetails>
              {listEducationInputs}
              <AddButton onClick={handleAddEducation} />
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="resultsContainer">
          <div className="resumeName">{inputValues.fullName}</div>
          <div className="resumeLocation resumeText">{inputValues.city}, {inputValues.state}</div>
          <div className="resumeContactInfo resumeText">
            <div className="links resumeText">
              <div>{inputValues.linkedInURL}</div>
              <div>{inputValues.gitHubURL}</div>
            </div>
            <div className="contactInfo resumeText">
              <div>{inputValues.email}</div>
              <div>{inputValues.phoneNumber}</div>
            </div>
          </div>
          <div className="resumeWork">
            <h2 className="sectionHeading">Work Experience</h2>
            {workInputValues.map(item => (
              <div className="workExperienceContainer resumeText">
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
                <div key={item.id} className="responsibilities"> {item.responsibilities}</div>
              </div>
            ))}
          </div>
          <div className="resumeEducation">
            <h2 className="sectionHeading">Education</h2>
            {educationInputValues.map(item => (
              <div className="educationContainer resumeText">
                <div className="educationLeft">
                  <div key={item.id} className="degree">{item.degree}</div>
                  <div className="symbol">|</div>
                  <div key={item.id} className="school">{item.school}</div>
                </div>
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

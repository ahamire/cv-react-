import React, { useState } from 'react';
import './App.css';
import Title_of_resume from './title';
import Education from './education';
import Work_exp from './Work_exp';
import Skills from './Skills';
import EducationChange from './EducationChange';
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [University_name, setUniversity_name] = useState('');
  const [Description, setDescription_name] = useState('');
  const [date, setDate_name] = useState('');
  const [storageUniv, setStorageUniv] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (University_name !== '' && Description !== '' && date !== '') {
      const newUniv = {
        University: University_name,
        description: Description,
        Date: date,
      };
      setStorageUniv([...storageUniv, newUniv]);
      setUniversity_name('');
      setDescription_name('');
      setDate_name('');
    }
  };

  return (
    <>
      <div className='edit'>
        <section className='edit_title'>
          <p>Resume Editor</p>
          <section
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <form
              method='dialog'
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '250px',
                justifyContent: 'center',
              }}
            >
              <input
                type='text'
                placeholder='enter name'
                className='name_inp'
                value={name}
                onChange={e => handleNameChange(e)}
              />
              <input
                type='email'
                className='email_inp'
                value={email}
                onChange={e => handleEmailChange(e)}
              />
              <input
                type='tel'
                maxLength={9}
                placeholder='phone number ex.(+3803278329)'
                className='phone_inp'
                value={Phone}
                onChange={e => handlePhoneChange(e)}
              />
            </form>
          </section>
          <button onClick={() => setIsOpen(!isOpen)}>Education</button>
          <div className={isOpen ? 'visible_div' : 'hidden_div'}>
            <div style={{"display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center"}}>
          {storageUniv.map((edu, index) => (
              <EducationChange
                key={index}
                University_name={edu.University}
                Description={edu.description}
                date={edu.Date}
              />
            ))}
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '250px',
                justifyContent: 'center',
              }}
              className='get_submit'
            >
              <input
                type='text'
                placeholder=''
                value={University_name}
                onChange={(e) => setUniversity_name(e.target.value)}
                required
              />
              <input
                type='text'
                value={Description}
                onChange={(e) => setDescription_name(e.target.value)}
                required
              />
              <input
                type='date'
                value={date}
                onChange={(e) => setDate_name(e.target.value)}
                required
              />
              <button type='submit'>+</button>
            </form>
            </div>
          </div>
          <button onClick={() => setIsOpen1(!isOpen1)}>Skills</button>
          <div className={isOpen1 ? 'visible_div' : 'hidden_div'}>
            <form >
              <input type="range" />
            </form>
          </div>
        </section>
      </div>
      <div className='cv'>
        <div className='resume'>
          <Title_of_resume name={name} email={email} Phone={Phone} />
          <section className='education'>
          <section className='title2'>
          <p className="main_text">Education</p>  
            {storageUniv.map((edu, index) => (
              <Education
                key={index}
                University_name={edu.University}
                Description={edu.description}
                date={edu.Date}
              />
            ))}
          </section>
          </section>
          <section className='work_exp'>
            <Work_exp />
          </section>
          {/* <section className='skills'>
            <Skills />
          </section> */}
        </div>
      </div>
    </>
  );
}

export default App;

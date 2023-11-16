import { useState } from 'react'
import './App.css'
import Title_of_resume from './title'
import Education from './education'
import Work_exp from './Work_exp'
import Skills from './Skills'
function App() {
  const [name, setName] = useState("");
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const [email, setEmail] = useState("");
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const [Phone, setPhone] = useState("");
  
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  return (
    <>
    <div className='edit'>
      <section className="edit_title"><p>Resume Editor</p>
      <section style={{"display":'flex',"justify-content":"center"}}>
        <form method="dialog" style={{"display":'flex',"flex-direction":"column","width":"250px","justify-content":"center"}}>
          <input type="text" placeholder='enter name' className='name_inp' value={name}  onChange={handleNameChange}/>
          <input type="email" name="" id="" className='email_inp' value={email} onChange={handleEmailChange}/>
          <input type="tel" name="" id="" maxLength={9} placeholder='phone number ex.(+3803278329)' className='phone_inp' value={Phone} onChange={handlePhoneChange}/>
        </form>
        </section>
      <button onClick={() => setIsOpen(!isOpen)}>Education</button>
      <div className={isOpen ? "visible_div" : "hiden_div"}>s</div>
      <button onClick={() => setIsOpen1(!isOpen1)}>Work Expirience</button>
      <div className={isOpen1 ? "visible_div" : "hiden_div"}>s</div>
      </section>
    </div>
    <div className='cv'>
      <div className='resume'>
      <Title_of_resume name={name} email={email} Phone={Phone}/>{/*looks like function title_of_resume(name) */}
      <section className="education">
        <Education />
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
  )
}

export default App

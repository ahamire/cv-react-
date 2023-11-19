function EducationChange({University_name,Description,date}){
    return(
            <div className="contact2">
              <section>
                <h3 className="name">{University_name}
                </h3>
                <h4 className="description">{Description}</h4>
                </section>
              <h3 className="years">{date}
              </h3>
              <button onClick={University_name}></button>
            </div>
        )
  }
  export default EducationChange;
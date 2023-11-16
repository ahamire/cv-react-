function Education({University_name,Description,date}){
    return(
        <section className='title2'>
            <p className="main_text">Education</p>
            <div className="contact">
              <section>
                <h3 className="name">{University_name}
                </h3>
                <h4 className="description">{Description}</h4>
                </section>
              <h3 className="years">{date}
              </h3>
            </div>
          </section>
        )
}
export default Education;
function Education({University_name,Description,date}){
  return(
          <div className="contact" >
            <section>
              <h3 className="name">{University_name}
              </h3>
              <h4 className="description">{Description}</h4>
              </section>
            <h3 className="years">{date}
            </h3>
          </div>
      )
}
export default Education;
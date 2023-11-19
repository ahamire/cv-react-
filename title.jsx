function Title_of_resume({name,email,Phone}){
    return(
    <section className='title'>
        <p style={{"font-size":"50px"}}>{name}</p>
        <div className="contact">
          <h3 className="e-mail">{email}</h3>
          <h3 className="phone">{Phone}</h3>
        </div>
      </section>
    )
}
export default Title_of_resume;
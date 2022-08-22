import './FaqCard.css'

const FaqCard = ({ question, answer })=>{
    return(
        <div className='faq-container'>
            <h3 className='title'> {question} </h3>
            <p className='content'> { answer } </p>
        </div>

    )
    
}
export default FaqCard
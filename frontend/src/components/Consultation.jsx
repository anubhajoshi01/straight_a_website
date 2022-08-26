import Form from "./Form"
import './Consultation.css'

const Consultation = ({lang}) => {

    if(lang === 'zh'){
        return(
            <>
                 <div className='seperate-container'>
                                <div className='purple-background'>
                                    <h1>
                                        Contact:
                                    </h1>
                                    <h3>
                                       New York Office
                                    </h3>
                                    <p>
                                    500 7th Ave, New York, NY 10018
                                    </p>
                                    <h3>
                                       California Office
                                    </h3>
                                    <p>
                                    670 Spectrum Center Dr, Irvine, CA 92618
                                    </p>
                                    <h3>More</h3>
                                    <p>info@straightaprep.com</p>
                                    <p>+1 (646)-982-2428</p>
                                    
                                </div>
                                
                                <div className='white-background'>
                                    
                                    <div className='form'>
                                    <Form lang={'zh'}/>
                                    </div>
                                </div>
        
                            </div>
            </>
        )
    }
    return(
        <>
             <div className='seperate-container'>
                            <div className='purple-background'>
                                <h1>
                                    Contact:
                                </h1>
                                <h3>
                                   New York Office
                                </h3>
                                <p>
                                500 7th Ave, New York, NY 10018
                                </p>
                                <h3>
                                   California Office
                                </h3>
                                <p>
                                670 Spectrum Center Dr, Irvine, CA 92618
                                </p>
                                <h3>More</h3>
                                <p>info@straightaprep.com</p>
                                <p>+1 (646)-982-2428</p>
                                
                            </div>
                            
                            <div className='white-background'>
                               
                                <div className='form'>
                                <Form lang={'en'}/>
                                </div>
                            </div>
    
                        </div>
        </>
    )
}

export default Consultation
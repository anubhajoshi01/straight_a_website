import { useNavigate } from 'react-router-dom'
import icon from '../../res/blogicon.png'
import './Dashboard.css'

function Dashboard(){

    const navigate = useNavigate()

    const navToForm = () => {
        navigate('view-forms')
    }

    const navToBlog = () => {
        navigate('/blog')
    }

    return(
        <>
            <div className="dashboard-container">
                <ul className="dashboard-ul-h">
                    <li>
                        <div onClick={navToForm} className="dashboard-form-box">
                            <div className='dashboard-category'>
                                See Form Responses
                            </div>
                            <img src={icon}/>
                        </div>
                    </li>
                    <li>
                        <div onClick={navToBlog} className="dashboard-form-box">
                            <div className='dashboard-category'>
                                Blog Control
                            </div>
                            <img src={icon}/>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Dashboard
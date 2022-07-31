import CategoryViewCard from "../../../components/CategoryViewCard"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import '../Categories.css'

function ResourceCategory() {

    return (
        <>
            <Header/>
            <div className="category-container">
                <h1>Resources</h1>
                <div className="single-category">
                <CategoryViewCard imgUrl={'https://static.wixstatic.com/media/fadc828f3819492293734e9444605b5a.jpg/v1/crop/x_869,y_0,w_3624,h_3587/fill/w_668,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/In%20the%20Classroom.jpg'} title={'FAQ'} content={'Have a look at what questions students ask the most'}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ResourceCategory
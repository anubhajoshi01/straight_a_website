import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './LangSwitch.css'

const LangSwitch = ({lang}) => {

  console.log(lang)

  const navigate = useNavigate()

  const langMap = {'en':'https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-500.png', 'zh':'https://cdn.countryflags.com/thumbs/china/flag-square-500.png'}
 

  const [selectedLang, setSelectedLang] = useState(lang)
  const [otherLang, setOtherLang] = useState(lang === 'en' ? 'zh' : 'en')

  console.log(`selected lang ${selectedLang}`)
  console.log(`other lang ${otherLang}`)

  const switchLang = () => {
    const newSelected = otherLang
    setOtherLang(selectedLang)
    setSelectedLang(newSelected)
    navigate(`/${otherLang}`)
  }

  return (
    

    <div className='lang-menu'>
    
        <div className='selected-lang'>
          <img className='left' src={langMap[selectedLang]}/>
          <h6> {selectedLang}</h6>
        </div>
      
        <ul>
            <li>
              <div className='other-lang' onClick={switchLang}>
                <img className='left' src={langMap[otherLang]}/>
                <h6> {otherLang}</h6>
              </div>
            </li>
        </ul>
    </div>
  )
}

export default LangSwitch
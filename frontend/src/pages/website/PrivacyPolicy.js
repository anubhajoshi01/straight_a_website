import './TermsPolicies.css'

import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

import Header from '../../components/Header'
import Footer from '../../components/Footer'

function PrivacyPolicy() {

    const location = useLocation()
  //  console.log(location.pathname)
    const navigate = useNavigate()

    let {lang} = useParams()
   // console.log(`lang ${lang}`)


    //console.log(lang)

    useEffect(() => {
      if(lang == null) {
        navigate('en')
        
      }
    }, [])

    if(lang === 'zh') {
        return(
            <>
                <Header lang={'zh'} currPath={location.pathname}/>
                <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
                <div className="terms-page">
                    <div className='terms-margin'>
                        <h1>隱私政策</h1>
                        <p>Straight A Prep Consulting Inc. 制定了以下隱私政策，讓您了解我們在您訪問我們的網站時收集哪些信息、我們收集這些信息的原因以及如何使用這些信息。本隱私政策解釋了 Straight A Prep.com 網站和移動應用程序的數據收集和使用做法；它不適用於其他在線或離線 Straight A Prep Consulting Inc. 網站、產品或服務。術語“您”、“您的”和“您的”是指使用我們網站的客戶/購買者。術語“Straight A Prep Consulting Inc.”、“Straight A Prep”、“我們”、“我們的”和“我們的”是指 Straight A Prep Consulting Inc.。使用本網站即表示您同意本協議中規定的數據慣例陳述。我們可能會定期在此頁面上發布對本隱私政策的更改，您有責任經常查看本隱私政策，我們鼓勵您經常訪問此頁面。當法律要求時，我們會通知您對本隱私政策的任何更改。</p>
                        <p><br/></p>
                        <p>我們如何收集有關您的信息</p>
                        <p>當您訪問 Straight A Prep 網站、使用 Straight A Prep 服務或使用使用 Straight A Prep 應用程序編程接口（“API”）的第三方服務時，我們會收集通過您的計算機、手機或其他接入設備。此信息可能包括您的 IP 地址、設備信息，包括但不限於標識符、設備名稱和類型、操作系統、位置、移動網絡信息和標準網絡日誌信息，例如您的瀏覽器類型、進出我們網站的流量以及您在我們網站上訪問的頁面。您必須年滿 18 歲或達到適用的成年年齡，才能使用 Straight A Prep 服務。 Straight A Prep 不會故意收集來自或關於任何 13 歲以下個人的信息。</p>
                        <p>如果您創建帳戶或使用 Straight A Prep 服務，我們或代表我們行事的附屬供應商可能會收集以下類型的信息：</p>
                        <ul className='terms-dotted-list'>
                            <li>聯繫信息 - 您的姓名、地址、電話、電子郵件、在線 ID 和其他類似信息。</li>
                            <li>財務信息 - 您鏈接到您的 Straight A Prep 賬戶或在您使用付費的 Straight A Prep 服務時輸入的完整銀行賬戶和路由號碼和/或信用卡號碼。</li>
                        </ul>
                        <p>對於某些 Straight A Prep 功能和產品，我們可能會要求您提供額外信息，我們可能會與代表我們行事的服務提供商合作使用這些信息來驗證您的身份或地址，和/或管理風險。此信息可能包括您的出生日期、納稅人或政府身份證號碼、政府簽發的身份證件副本或其他個人信息。我們還可能從第三方獲取您的信息，例如信用局和身份驗證服務。我們只會根據需要要求提供此信息。</p>
                        <p>當您使用 Straight A Prep 服務時，我們會收集有關您在我們網站上的交易和/或其他活動的信息，並且我們可能會持續收集有關您的計算機、移動設備或其他訪問設備的信息以防止欺詐，以監控可能的違規行為您的 Straight A Prep 帳戶，並識別可能損害 Straight A Prep 或其用戶的任何惡意軟件或其他活動。</p>
                        <p>您可以選擇讓我們訪問第三方存儲的某些個人信息，例如社交媒體網站（例如 Facebook 和 Twitter）。我們有權訪問的信息因站點而異，並受您在該站點上的隱私設置和您的授權控制。通過將第三方管理的帳戶與您的 Straight A Prep 帳戶相關聯並授權 Straight A Prep 訪問此信息，您同意 Straight A Prep 可以根據本隱私政策收集、存儲和使用此信息。</p>
                        <p>我們可能會使用“cookies”收集信息。 Cookie 是網站存儲在您的計算機或移動設備硬盤上的小型數據文件。我們可能會同時使用會話 cookie（一旦您關閉網絡瀏覽器就會過期）和持久 cookie（在您刪除它們之前會一直保留在您的計算機或移動設備上）為您在我們的網站上提供更加個性化和互動的體驗。</p>
                        <p>您通常可以通過瀏覽器設置刪除或拒絕 cookie。為此，請遵循瀏覽器提供的說明（通常位於“設置”、“幫助”、“工具”或“編輯”工具中）。許多瀏覽器都設置為接受 cookie，直到您更改設置。</p>
                        <p>有關 cookie 的更多信息，包括如何查看您的計算機或移動設備上設置了哪些 cookie 以及如何管理和刪除它們，請訪問 <a href='www.allaboutcookies.org'>www.allaboutcookies.org</a>.</p>
                        <p>如果您不接受我們的 cookie，您在使用我們的網站時可能會遇到一些不便。例如，我們可能無法識別您的計算機或移動設備，您可能需要在每次訪問我們的網站時登錄。</p>
                        <p>我們還可能在我們的網站上使用像素標籤（也稱為網絡信標和清晰的 GIF）來跟踪用戶在我們網站上的行為。與由網站存儲在您的計算機或移動設備的硬盤驅動器上的 cookie 不同，像素標籤隱藏在網頁上。像素標籤衡量我們營銷活動的成功，並編制有關網站使用情況的統計數據，以便我們可以更有效地管理我們的內容。我們使用像素標籤收集的信息與我們用戶的個人信息無關。</p>
                        <p>某些 Internet 瀏覽器可能被配置為向您訪問的在線服務發送“請勿跟踪”信號。我們目前不響應不跟踪信號。要了解有關“請勿跟踪”的更多信息，請訪問<a href='http://www.allaboutdnt.com'>http://www.allaboutdnt.com</a>.</p>
                        <p>最後，我們可能會收集您可能向我們的客戶支持團隊披露的其他信息。</p>
                        <p><br/></p>
                        <p>我們如何使用我們收集的個人信息</p>
                        <p>我們收集個人信息的主要目的是為您提供安全、流暢、高效和定制的體驗。我們可能會將您的個人信息用於：</p>
                        <ul className='terms-dotted-list'>
                            <li>提供您要求的直接準備服務和客戶支持；</li>
                            <li>處理交易並發送有關您的交易的通知；</li>
                            <li>解決糾紛，收取費用，排查問題；</li>
                            <li>預防和調查可能被禁止或非法的活動，和/或違反我們發布的用戶條款的行為；</li>
                            <li>定制、衡量和改進 Straight A Prep 服務以及我們網站和應用程序的內容和佈局；</li>
                            <li>根據您的通信偏好提供有針對性的營銷、服務更新通知和促銷優惠；和</li>
                            <li>比較信息的準確性並與第三方核實。</li>
                        </ul>
                        <p>未經您的許可，我們不會將您的個人信息用於我們向您披露的目的以外的目的。我們可能會不時請求您的許可，以允許我們與第三方共享您的個人信息。您可以選擇不與第三方共享您的個人信息，或允許我們將您的個人信息用於與我們最初收集信息或隨後獲得您授權的目的不符的任何目的。如果您選擇限制使用您的個人信息，您可能無法使用某些功能或直接準備服務。</p>
                        <p><br/></p>
                        <p>營銷</p>
                        <p>未經您的明確同意，我們不會出於營銷目的將您的個人信息出售或出租給第三方。我們可能會將您的信息與我們從其他公司收集的信息結合起來，並使用它來改進和個性化 Straight A Prep 服務、內容和廣告。</p>
                        <p><br/></p>
                        <p>我們如何與其他方共享個人信息</p>
                        <p>我們可能會與以下人員共享您的個人信息：</p>
                        <ul className='terms-dotted-list'>
                            <li>簽訂合同的服務提供商幫助我們開展部分業務運營，例如欺詐預防、賬單收集、營銷和技術服務。我們的合同規定，這些服務提供商僅將您的信息用於他們為我們提供的服務，而不是為了他們自己的利益。</li>
                            <li>我們合作的金融機構。</li>
                            <li>我們計劃合併或被收購的公司。 （如果發生這種合併，我們將要求新合併的實體就您的個人信息遵守本隱私政策。您將收到適用政策的任何更改的事先通知。）</li>
                            <li>執法部門、政府官員或其他第三方在以下情況下：</li>
                            <li>傳票、法院命令或類似的法律程序迫使我們這樣做；或者</li>
                            <li>我們真誠地相信，披露個人信息對於防止人身傷害或經濟損失、報告可疑的非法活動或調查違反我們用戶協議的行為是必要的。</li>
                            <li>經您同意或指示的其他第三方。</li>
                        </ul>
                        <p>Straight A Prep 不會出於營銷目的將您的任何個人信息出售或出租給第三方，並且只會與本政策中所述的第三方共享您的個人信息</p>
                        <p>如果您在第三方網站上或通過第三方應用程序間接建立 Straight A Prep 帳戶，則您在該網站或應用程序上（而不是直接在 Straight A Prep 網站上）輸入的任何信息將與該網站的所有者共享第三方網站或應用程序以及您的信息可能受其隱私政策的約束。</p>
                        <p>一般而言，我們會通過更新本頁頂部的最後更新日期來通知您本政策的重大變更，並且我們將根據法律要求向您提供重大變更的明確通知。我們建議您經常訪問此頁面以檢查更改。</p>
                        <p><br/></p>
                        <p>您如何更改訪問權限或更改您的個人信息</p>
                        <p>您有權查看、更正或修改您的個人信息，或者刪除不准確的信息，您可以隨時登錄您的帳戶並單擊“個人資料”或“我的帳戶”選項卡來執行此操作。僅當提供訪問的負擔或費用與相關案例中您的隱私風險不成比例，或者您以外的其他人的權利會受到侵犯時，此權利才會受到限制。如果您關閉您的 Straight A Prep 帳戶，我們會將您在我們數據庫中的帳戶標記為“已關閉”，但會將您的帳戶信息保留在我們的數據庫中一段上述時間。這對於阻止欺詐是必要的，通過確保試圖進行欺詐的人無法通過關閉他們的賬戶並開設新賬戶來避免被發現。但是，如果您關閉您的帳戶，我們將不會將您的個人身份信息用於任何其他目的，也不會出售或與第三方共享，除非有必要防止欺詐和協助執法、法律要求或依照與本隱私政策。</p>
                        <p><br/></p>
                        <p>未成年人</p>
                        <p>未經父母許可和監督，本服務不得供 13 歲以下兒童使用。 Straight A Prep 不會有意收集 13 歲以下兒童的個人身份信息。如果您未滿 13 歲，請不要向 Straight A Prep 提供您的聯繫信息或任何其他個人身份信息。如果您是 13 歲以下人士的父母或法定監護人，他們可能在您不知情或未經您同意的情況下向我們提供了信息，請聯繫我們以刪除此信息。</p>
                        <p><br/></p>
                        <p>隱私政策的變更</p>
                        <p>由於對網站特性和功能的修改，Straight A Prep 保留不時更改本隱私政策的權利。我們將在此處發布任何更改，並在文檔頂部註明隱私政策的新生效日期。當您是本網站的活躍用戶時，我們鼓勵您查看隱私政策以獲取任何更新。</p>
                        <p><br/></p>
                        <p>美國以外的用戶</p>
                        <p>本網站在美國託管並受美國法律管轄。如果您在美國境外使用本網站，請注意您的信息可能會被傳輸到我們的服務器所在的美國並在美國進行存儲和處理，並在那裡運營我們的數據庫。美國和其他國家/地區的數據保護和其他法律可能與您所在國家/地區的不同。通過使用本網站，您同意將您的信息傳輸到我們的設施以及我們與我們共享信息的第三方設施，如我們的隱私政策所述。</p>
                    </div>
                </div>
                <Footer lang={lang}/>
            </>
        )
    }

    return(
        <>
            <Header lang={'en'} currPath={location.pathname}/>
            <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
            <div className="terms-page">
                <div className='terms-margin'>
                    <h1>Privacy Policy</h1>
                    <p>Straight A Prep Consulting Inc. has created the following Privacy Policy to let you know what information we collect when you visit our site, why we collect it, and how it is used. This Privacy Policy explains the data collection and use practices of the Straight A Prep.com website and mobile apps; it does not apply to other online or offline Straight A Prep Consulting Inc. sites, products or services. The terms "you," "your," and "yours" refer to the customer/purchaser utilizing our Site. The terms "Straight A Prep Consulting Inc.," "Straight A Prep" "we," "us," and "our" refer to Straight A Prep Consulting Inc. By using this website, you consent to the data practices prescribed in this statement. We may periodically post changes to this Privacy Policy on this page, and it is your responsibility to review this Privacy Policy frequently and we encourage you to visit this page often. When required by law, we will notify you of any changes to this Privacy Policy.</p>
                    <p><br/></p>
                    <p>How We Collect Information About You</p>
                    <p>When you visit the Straight A Prep website, use Straight A Prep Services, or use third-party services which use the Straight A Prep application programming interface ("API"), we collect information sent to us through your computer, mobile phone, or other access device. This information may include your IP address, device information including, but not limited to, identifier, device name and type, operating system, location, mobile network information and standard web log information, such as your browser type, traffic to and from our site and the pages you accessed on our website. You must be at least 18 years old, or of the applicable age of majority, in order to use Straight A Prep Services. Straight A Prep does not intentionally collect information from or about any individual who is under 13 years old.</p>
                    <p>If you create an account or use Straight A Prep Services, we, or our affiliates vendors acting on our behalf may collect the following types of information:</p>
                    <ul className='terms-dotted-list'>
                        <li>Contact information - your name, address, phone, email, online ID and other similar information.</li>
                        <li>Financial information - the full bank account and routing numbers and/or credit card numbers that you link to your Straight A Prep Account or input when you use paid Straight A Prep Services.</li>
                    </ul>
                    <p>For some Straight A Prep features and products, we may require you to provide additional information which we may use in collaboration with service providers acting on our behalf to verify your identity or address, and/or to manage risk. This information may include your date of birth, taxpayer or government identification number, a copy of your government-issued identification, or other personal information. We may also obtain information about you from third parties such as credit bureaus and identity verification services. We will only ask for this information on an as-needed basis.</p>
                    <p>When you use Straight A Prep Services, we collect information about your transactions and/or your other activities on our website and we may continuously collect information about your computer, mobile device, or other access device for fraud prevention purposes, to monitor for possible breach of your Straight A Prep Account, and to identify any malicious software or other activity that may harm Straight A Prep or its users.</p>
                    <p>You may choose to provide us with access to certain personal information stored by third parties such as social media sites (such as Facebook and Twitter). The information we have access to varies by site and is controlled by your privacy settings on that site and your authorization. By associating an account managed by a third party with your Straight A Prep account and authorizing Straight A Prep to have access to this information, you agree that Straight A Prep may collect, store and use this information in accordance with this Privacy Policy.</p>
                    <p>We may collect information using “cookies.” Cookies are small data files stored on the hard drive of your computer or mobile device by a website. We may use both session cookies (which expire once you close your web browser) and persistent cookies (which stay on your computer or mobile device until you delete them) to provide you with a more personal and interactive experience on our Site.</p>
                    <p>You can typically remove or reject cookies via your browser settings. In order to do this, follow the instructions provided by your browser (usually located within the “settings,” “help” “tools” or “edit” facility).  Many browsers are set to accept cookies until you change your settings.</p>
                    <p>Further information about cookies, including how to see what cookies have been set on your computer or mobile device and how to manage and delete them, visit <a href='www.allaboutcookies.org'>www.allaboutcookies.org</a>.</p>
                    <p>If you do not accept our cookies, you may experience some inconvenience in your use of our Site. For example, we may not be able to recognize your computer or mobile device and you may need to log in every time you visit our Site.</p>
                    <p>We may also use pixel tags (which are also known as web beacons and clear GIFs) on our Site to track the actions of users on our Site. Unlike cookies, which are stored on the hard drive of your computer or mobile device by a website, pixel tags are embedded invisibly on webpages. Pixel tags measure the success of our marketing campaigns and compile statistics about usage of the Site, so that we can manage our content more effectively. The information we collect using pixel tags is not linked to our users’ personal information.</p>
                    <p>Some Internet browsers may be configured to send “Do Not Track” signals to the online services that you visit. We currently do not respond to do not track signals. To find out more about “Do Not Track,” please visit <a href='http://www.allaboutdnt.com'>http://www.allaboutdnt.com</a>.</p>
                    <p>Finally, we may collect additional information you may disclose to our customer support team.</p>
                    <p><br/></p>
                    <p>How We Use the Personal Information We Collect</p>
                    <p>Our primary purpose in collecting personal information is to provide you with a secure, smooth, efficient, and customized experience. We may use your personal information to:</p>
                    <ul className='terms-dotted-list'>
                        <li>Provide Straight A Prep Services and customer support you request;</li>
                        <li>Process transactions and send notices about your transactions;</li>
                        <li>Resolve disputes, collect fees, and troubleshoot problems;</li>
                        <li>Prevent and investigate potentially prohibited or illegal activities, and/or violations of our posted user terms;</li>
                        <li>Customize, measure, and improve Straight A Prep Services and the content and layout of our website and applications;</li>
                        <li>Deliver targeted marketing, service update notices, and promotional offers based on your communication preferences;</li>
                        <li>Compare information for accuracy and verify it with third parties.</li>
                    </ul>
                    <p>We will not use your personal information for purposes other than those purposes we have disclosed to you, without your permission. From time to time we may request your permission to allow us to share your personal information with third parties. You may opt out of having your personal information shared with third parties, or from allowing us to use your personal information for any purpose that is incompatible with the purposes for which we originally collected it or subsequently obtained your authorization. If you choose to so limit the use of your personal information, certain features or Straight A Prep Services may not be available to you.</p>
                    <p><br/></p>
                    <p>Marketing</p>
                    <p>We will not sell or rent your personal information to third parties for their marketing purposes without your explicit consent. We may combine your information with information we collect from other companies and use it to improve and personalize Straight A Prep Services, content and advertising.</p>
                    <p><br/></p>
                    <p>How We Share Personal Information with Other Parties</p>
                    <p>We may share your personal information with:</p>
                    <ul className='terms-dotted-list'>
                        <li>Service providers under contract who help with parts of our business operations such as fraud prevention, bill collection, marketing and technology services. Our contracts dictate that these service providers only use your information in connection with the services they perform for us and not for their own benefit.</li>
                        <li>Financial institutions with which we partner.</li>
                        <li>Companies that we plan to merge with or be acquired by. (Should such a combination occur, we will require that the new combined entity follow this Privacy Policy with respect to your personal information. You will receive prior notice of any change in applicable policy).</li>
                        <li>Law enforcement, government officials, or other third parties when:</li>
                        <li>We are compelled to do so by a subpoena, court order or similar legal procedure;</li>
                        <li>We believe in good faith that the disclosure of personal information is necessary to prevent physical harm or financial loss, to report suspected illegal activity or to investigate violations of our User Agreement.</li>
                        <li>Other third parties with your consent or direction to do so.</li>
                    </ul>
                    <p>Straight A Prep will not sell or rent any of your personal information to third parties for their marketing purposes and only shares your personal information with third parties as described in this policy.</p>
                    <p>If you establish a Straight A Prep account indirectly on a third party website or via a third party application, any information that you enter on that website or application (and not directly on a Straight A Prep website) will be shared with the owner of the third party website or application and your information may be subject to their privacy policies.</p>
                    <p>In general, we will notify you of material changes to this policy by updating the last updated date at the top of this page, and we will provide you with explicit notice of material changes as required by law. We recommend that you visit this page frequently to check for changes.</p>
                    <p><br/></p>
                    <p>How You Can Change Access or Change Your Personal Information</p>
                    <p>You are entitled to review, correct, or amend your personal information, or to delete that information where it is inaccurate, and you may do so at any time by logging in to your account and clicking the Profile or My Account tab. This right shall only be limited where the burden or expense of providing access would be disproportionate to the risks to your privacy in the case in question, or where the rights of persons other than you would be violated. If you close your Straight A Prep account, we will mark your account in our database as "Closed," but will keep your account information in our database for a period of time described above. This is necessary in order to deter fraud, by ensuring that persons who try to commit fraud will not be able to avoid detection simply by closing their account and opening a new account. However, if you close your account, your personally identifiable information will not be used by us for any further purposes, nor sold or shared with third parties, except as necessary to prevent fraud and assist law enforcement, as required by law, or in accordance with this Privacy Policy.</p>
                    <p><br/></p>
                    <p>Minors</p>
                    <p>This Service is not intended for use by children under 13 years of age without parent permission and oversight. Straight A Prep does not knowingly collect personally identifiable information from children under the age of 13. If you are under the age of 13, please do not provide your contact information or any other personally identifiable information to Straight A Prep. If you are the parent or legal guardian of someone under the age of 13 who may have provided us with information without your knowledge or consent, please contact us to have this information removed.</p>
                    <p><br/></p>
                    <p>Changes to the Privacy Policy</p>
                    <p>Straight A Prep reserves the right to change this Privacy Policy, from time to time, due to modifications to the Site’s features and functionality. We will post any changes here and indicate the new effective date of the Privacy Policy at the top of the document. We encourage you to review the Privacy Policy for any updates while you are an active User of the Site.</p>
                    <p><br/></p>
                    <p>Users Outside of the United States</p>
                    <p>The Site is hosted in the United States and is governed by United States law. If you are using the Site from outside the United States, please be aware that your information may be transferred to, stored and processed in the United States where our servers are located and our databases are operated. The data protection and other laws of the United States and other countries may be different from those in your country. By using the Site, you consent to your information being transferred to our facilities and to the facilities of those third parties with whom we share it as described in our Privacy Policy.</p>
                </div>
            </div>
            <Footer lang={lang}/>
        </>
    )
}

export default PrivacyPolicy
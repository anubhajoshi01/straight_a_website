
import './TermsPolicies.css'

import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

import Header from '../../components/Header'
import Footer from '../../components/Footer'

function TermsOfService() {

    const location = useLocation()
    console.log(location.pathname)
    const navigate = useNavigate()

    let {lang} = useParams()
    console.log(`lang ${lang}`)


    console.log(lang)

    useEffect(() => {
      if(lang == null) {
        navigate('en')
        
      }
    }, [])

    if(lang === 'zh') {
        return(
            <>
                <Header lang={'zh'} currPath={location.pathname}/>
                <div className="terms-page">
                    <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
                    <div className="terms-margin">
                        <h1>服務條款</h1>
                        <p>歡迎來到 Straight A Prep 網站。當您在 Straight A Prep.com 上查看或使用我們的網站時，以下服務條款適用。請仔細閱讀以下條款。訪問或使用本網站，即表示您同意這些服務條款。如果您不同意這些服務條款，則不得訪問或使用我們的網站。</p>
                        <p>定義</p>
                        <p>在本文檔中:</p>
                        <ul className="numbered">
                            <li>1. “網站”、“Straight A Prep Sites”或“站點”是指www.straightaprep.com</li>
                            <li>2. “客戶”、“客戶”、“您”或“您的”是指您和/或代表您訪問網站或與網站互動的任何其他人。</li>
                            <li>3. “”、“公司”、“我們”或“我們的”是指 Straight A Prep Consulting Inc.</li>
                            <li>4. “服務”是指通過 Straight A Prep 網站免費提供或購買的任何服務、產品、功能或內容</li>
                            <li>5. “用戶內容”是指用戶在網站上提供的任何內容，包括但不限於您或第三方提交給網站的評論、論文、調查回复或會議記錄。</li>
                        </ul>
                        <p>隱私政策</p>
                        <p>Straight A Prep 尊重網站用戶的隱私。請參閱我們的隱私政策，其中解釋了我們如何收集、使用和披露與您的隱私相關的信息。當您訪問或使用本網站時，即表示您同意本隱私政策。如果您不同意隱私政策的條款，則不得訪問或使用 Straight A Prep 網站。</p>
    
                        <p><br/></p>
    
                        <p>賬戶註冊和終止</p>
                        <p>Straight A Prep 提供各種在線和離線服務，旨在改善我們用戶的整體學術體驗。訪問其中一些服務可能需要您擁有一個帳戶。購買需要帳戶的服務的用戶將由 Straight A Prep 創建其帳戶。您可能只有一個 Empowerly 帳戶來使用服務；您不得使用多個帳戶，並且不得與他人共享您的帳戶或任何服務。您提供給 Empowerly 的所有信息都必須準確和完整，以便我們創建帳戶。您不得冒充任何其他人或使用不屬於您的姓名。您有責任更新您的帳戶信息以使其保持最新和準確。</p>
                        <p>創建帳戶後，您將收到一封確認電子郵件，提示您設置密碼。您全權負責維護您的密碼的機密性，以及對您帳戶的任何和所有使用。您同意在任何時候都不會使用其他用戶的帳戶、用戶名或密碼，也不會將您的密碼透露給任何第三方。您同意不會出售或共享或以其他方式轉讓您的會員資格或任何會員權利。如果您懷疑有人未經授權使用您的帳戶或訪問您的密碼，您同意立即通知 Straight A Prep。</p>
                        <p>Straight A Prep 有權以任何理由自行決定終止您的帳戶，無論是否通知您。如果您帳戶的終止限制了您訪問任何已購買服務的能力，則將根據這些服務合同中的條款進行退款，前提是您的帳戶並未因違反這些條款而被終止。您可以在此處通過書面請求關閉您的帳戶。除非在這些服務的合同中另有規定，否則不會因此類請求而對未使用或無法訪問的服務進行退款。</p>
                        <p><br/></p>
                        <p>年齡和居住要求；美國司法管轄區</p>
                        <p>這些服務適用於 13 歲及以上的個人。如果您年齡在 13 歲到您居住地的成年年齡之間，您必須與您的父母或監護人一起閱讀這些服務條款，以確認您和您的父母或監護人理解並同意它。所有金融交易將以美元處理。服務不打算在此類分發或使用會違反法律或法規或會使 Straight A Prep 遵守此類司法管轄區或國家/地區內的任何註冊要求的任何司法管轄區或國家/地區分發或使用。通過使用本網站，您證明您不在任何與美國公司開展業務是非法的限制人員名單上。 Straight A Prep 在美國運營其大部分服務。 Straight A Prep 對服務適合在其他地方使用或訪問不作任何陳述或保證。從其他地方使用或訪問服務的任何人都是主動這樣做的，並且有責任遵守美國和當地有關在線行為和可接受內容的法律（如果此類法律適用且在此類法律適用的範圍內）。我們保留隨時自行決定限制服務的可用性和/或向任何人、地理區域或司法管轄區提供任何內容、程序、產品、服務或其他功能的權利，並限制我們提供的任何此類內容、程序、產品、服務或其他功能的數量。</p>
                        <p><br/></p>
                        <p>使用限制</p>
                        <p>您使用本網站的許可取決於以下僅用於非商業用途的使用限制和行為限制。您同意在任何情況下您都不會：</p>
                        <ul className="terms-dotted-list">
                            <li>發布任何辱罵、威脅、淫穢、誹謗、誹謗或種族、性、宗教或其他令人反感和攻擊性的信息；</li>
                            <li>將本網站用於任何非法目的或宣傳非法活動；</li>
                            <li>騷擾、虐待或傷害他人或團體，或試圖這樣做；</li>
                            <li>干擾或試圖干擾網站的正常運行；</li>
                            <li>對網站進行任何自動化使用，或採取我們認為會或可能會在我們的服務器或網絡基礎設施上施加不合理或不成比例的大量負載的任何行動；</li>
                            <li>繞過我們為限制對網站的訪問而採取的任何措施，或使用任何軟件、技術或設備來抓取、抓取或抓取網站或收集或操縱數據；或者</li>
                            <li>在破壞或乾擾其他用戶的瀏覽器或計算機的惡意內容。</li>
                            <li>發布、鏈接、共享或以其他方式分發會侵犯任何一方的隱私權、公開權、版權、合同權、知識產權或任何其他權利的材料</li>
                        </ul>
                        <p><br/></p>
                        <p>其他網站和/或材料的鏈接</p>
                        <p>在網站上，Straight A Prep 可能會向您提供第三方網站的鏈接以及屬於或源自第三方的內容或項目（統稱為“第三方內容”）。 Straight A Prep 無法控制第三方內容或通過此類第三方內容提供的促銷、材料、信息、商品或服務。公司不會調查、監控或檢查此類第三方內容的準確性、適當性或完整性，並且公司不對通過網站訪問的任何第三方內容或在其上發布、可通過或安裝的任何第三方內容負責。網站，包括第三方內容的內容、準確性、攻擊性、意見、可靠性、隱私慣例或其他政策或包含在第三方內容中。包含、鏈接到或允許使用或安裝任何第三方內容並不意味著 Straight A Prep 對其的批准或認可。如果您決定離開本網站並訪問第三方內容，您需自行承擔風險，並且您應該知道我們的條款和政策不管轄此類使用。</p>
                        <p><br/></p>
                        <p>知識產權</p>
                        <p>該網站和相關服務由 Straight A Prep 擁有和運營。除非 Empowerly 另有明確規定，否則包含在網站中或作為網站一部分的所有材料，包括過去、現在和未來的版本、域名、源代碼和目標代碼、文本、網站設計、徽標、圖形和指南，以及其選擇、組裝和安排以及服務的“外觀和感覺”（統稱為“Empowerly 內容”），均由 Straight A Prep 或 Straight A Prep 的第三方合作夥伴擁有、控製或許可。 Straight A Prep 內容受版權、商標、專利和其他法律、規則、法規和條約的保護，不得未經授權使用、複製和傳播。禁止未經授權使用 Straight A Prep 內容。任何未經授權使用出現在服務上的材料都可能違反版權、商標、專利和其他適用的法律、規則、法規和條約，並可能導致刑事或民事處罰。</p>
                        <p><br/></p>
                        <p>學術誠信</p>
                        <p>我們不容忍或故意參與剽竊或任何其他欺詐行為。公司及其員工/承包商均不對任何非法、不道德或以其他方式錯誤使用我們網站上的文章或其他內容負責。這包括拒絕、撤銷、延期、學術試用、失去獎學金/頭銜/獎項/獎品/助學金/職位、訴訟、停學或任何其他紀律處分或法律行動。您同意不不當、不道德、不適當和/或非法使用該材料，並對因您使用本網站和服務而引起的任何和所有紀律處分承擔全部責任。</p>
                        <p><br/></p>
                        <p>免責聲明</p>
                        <p>在適用法律允許的最大範圍內，EMPOWERLY 網站和服務按“原樣”、“可用”和“有任何缺陷”提供，不提供任何形式的明示或暗示保證。在適用法律允許的最大範圍內，EMPOWERLY 及其子公司、董事、員工、經理、高級職員、代理人、代表、供應商和第三方許可人，“EMPOWERLY”關於 (A) Empowerly 網站或服務的任何形式的保證或背書，無論是明示的還是暗示的； (B) 授權內容； (C) 用戶內容；和/或 (D) 與直接準備或通過服務傳輸信息相關的安全性。此外，在適用法律允許的最大範圍內，授權方不提供所有明示、暗示或法定的保證，包括但不限於適用於特定用途的適用性的保證，特別是定制、交易、安靜的享受和系統。</p>
                        <p>在適用法律允許的最大範圍內，EMPOWERLY 各方特別不保證服務將無錯誤、缺陷將得到糾正或服務或服務器、網絡或其他軟件軟件免費病毒或其他有害成分。在適用法律允許的最大範圍內，EMPOWERLY 不就其產品、網站或服務的內容，或對使用服務的結果的任何陳述或保證有用性或其他，除非在服務中特別說明。您承認使用服務的風險由您自行承擔。在適用法律允許的最大範圍內，Empowerly 各方不保證您在任何特定司法管轄區使用服務是合法的，並且 Empowerly 各方明確否認此類保證。</p>
                        <p>通過訪問或使用服務，您聲明並保證您的活動在您訪問或使用服務的每個司法管轄區都是合法的。本“免責聲明”部分應在您與 EMPOWERLY 的關係到期或終止後繼續有效。</p>
                        <p><br/></p>
                        <p>責任限制、豁免</p>
                        <p>在任何情況下，Empowerly 各方均不對與以下各項相關的任何間接、經濟、特殊、附帶或後果性損失或損害負責：(A) 服務； (B) 授權內容； (C) 用戶內容； (D) 您對本網站的使用、無法使用或性能； (E) 與授權方或執法當局就您使用本網站有關的調查所採取的行動； (F) 與版權或其他知識產權所有者有關的行動； (G) 服務技術操作中的任何錯誤或遺漏；或 (H) 因超出我們合理控制範圍的事件而導致的任何損壞，例如對任何用戶的計算機、移動設備或其他設備或技術的損壞，包括但不限於來自任何安全漏洞的損壞欺詐、錯誤、遺漏、中斷、缺陷、操作或傳輸延遲、計算機線路或網絡故障或任何其他技術或其他故障，包括但不限於利潤損失、損壞、工作停止、數據丟失結果的準確性，或計算機故障或故障，即使可以預見，或者即使授權方已被告知或應該知道此類損害的可能性。在任何情況下，EMPOWERLY 各方對您的所有損害、損失或原因或訴訟的全部責任都不會超過您在過去六個月內支付的直接準備費用（如果有）或 250 美元，以較高者為準。對損害賠償的事先限制並非旨在限制授權方在根據適用法律可收回的情況下支付勝訴方費用或費用的義務。本節中規定的限制不會限製或排除 Empowerly 各方對 Empowerly 各方造成的人身傷害或財產損失的責任，或對 Empowerly 各方的過失、過失、欺詐或故意疏忽的責任。本部分應在您與 EMPOWERLY 的關係到期或終止後繼續有效。</p>
                        <p>您同意，如果您因授權方的行為或疏忽而遭受任何損害、損失或傷害，則對您造成的損害（如果有）並非不可彌補或不足以使您有權獲得賠償授權方擁有或控制的任何網站、財產、產品、服務或其他授權內容，您將無權禁止或限製網站的開發、生產、分發、廣告、展示或利用、產品、服務或其他由 Empowerly 各方擁有或控制的 Empowerly 內容。</p>
                        <p>通過訪問服務，您了解您可能放棄對此時未知或未懷疑的索賠的權利，並且根據此類棄權，您承認您已閱讀並理解，並且明示加利福尼亞州民法典第 1542 條以及任何州或領地的任何類似法律規定如下：“一般性免責聲明不擴展到債權人不知道或懷疑其存在的索賠執行免責令，如果他知道的話，肯定會對他與債務人的和解產生重大影響。”</p>
                        <p><br/></p>
                        <p>賠款</p>
                        <p>在適用法律允許的最大範圍內，您同意保護 Empowerly 各方免受任何和所有損失、責任、損害、判決、索賠、要求、成本、調查、和解和費用（包括，由 (a) 您的用戶內容引起或直接或間接相關的合理律師費； (b) 您對服務的使用或與服務相關的活動； (c) 您違反或預期違反這些服務條款； (d) 您違反任何政府和準政府機構（包括但不限於所有監管、行政和立法機構）的任何法律、規則、法規、守則、法令、條例或命令； (e) 通過您的計算機傳輸的信息或材料（即使不是您提交的）侵犯、違反或盜用任何人的任何版權、商標、商業秘密、商業外觀、專利、宣傳、隱私或其他權利或誹謗任何人; (f) 您做出的任何虛假陳述； (g) Empowerly 各方在這些服務條款、隱私政策或您與 Empowerly 之間的任何其他書面協議允許的情況下使用您的信息或用戶內容。您將按照 Empowerly 各方的充分要求進行合作，為任何索賠辯護。 Straight A Prep 方保留對任何需由您賠償的事項進行獨家辯護和控制的權利，並且在任何情況下，未經 Empowerly 正式授權員工的事先書面同意，您不得解決任何索賠。派對。這些賠償義務在您與 Straight A Prep 的關係到期或終止後繼續有效。</p>
                        <p><br/></p>
                        <p>法律糾紛</p>
                        <p>如果您與 Straight A Prep 之間發生爭議，我們的目標是為您提供一種中立且經濟高效的方式來快速解決爭議。因此，您同意我們將根據以下小節解決與服務條款或網站或您對網站的使用有關或由此產生的任何法律或衡平法索賠或爭議（“索賠”）。</p>
                        <p><br/></p>
                        <p>一般的</p>
                        <p>您和 Straight A Prep 同意，由本服務條款或其違約、終止、執行、解釋或有效性引起或與之相關的任何爭議、索賠或爭議（統稱為“爭議”）將通過具有約束力的仲裁解決。您承認並同意，您和 Empowerly 均放棄陪審團審判或作為原告或集體成員參與任何聲稱的集體訴訟或代表訴訟的權利。此外，除非您和 Straight A Prep 另有協議，否則仲裁員不得合併超過一個人的索賠，並且不得以其他方式主持任何形式的任何類別或代表程序。</p>
                        <p><br/></p>
                        <p>仲裁程序</p>
                        <p>希望啟動仲裁的一方必須向另一方提供 AAA 規則中規定的書面仲裁要求。仲裁員將是退休法官或獲得加利福尼亞州執業律師執照的律師，並將由各方從 AAA 的消費者爭議仲裁員名冊中選出。如果雙方無法在提交仲裁請求後的十四 (14) 天內就仲裁員達成一致，則 AAA 將根據 AAA 規則指定仲裁員。</p>
                        <p><br/></p>
                        <p>仲裁員的決定</p>
                        <p>仲裁員將在 AAA 規則規定的時間範圍內作出裁決。仲裁員的決定將包括仲裁員作出裁決所依據的基本調查結果和結論。對仲裁裁決的判決可以在任何有管轄權的法院進行。仲裁員裁決的損害賠償必須與本服務條款的責任限制部分關於一方可能需要承擔的損害賠償的類型和金額一致。在適用法律規定的範圍內，勝訴方有權獲得律師費和開支的裁決。根據 AAA 規則的規定，您有責任支付任何 AAA 申請費、管理費和仲裁費。本“法律糾紛”部分在您與 Straight A Prep 的關係到期或終止後繼續有效</p>
                        <p><br/></p>
                        <p>修改</p>
                        <p>我們可以隨時修改這些服務條款，並會在發生任何此類修改時更新這些服務條款。這些條款的最新版本可在 <a href="https://my.empowerly.com/terms">https://my.empowerly.com/terms</a>上找到。您有責任不時檢查網站以查看條款中的任何此類更改。如果您繼續使用本網站，即表示您同意我們對這些服務條款的修訂。我們將通過在我們的主頁上張貼顯眼的通知來通知您條款的重大變更，具體由我們自行決定。對這些條款的任何更改（本段規定的除外）或對公司在本協議項下權利的放棄均無效或有效，除非有公司官員親筆簽名的書面協議。公司通過電話或電子郵件通訊聲稱放棄或修改本協議的行為均無效。</p>
                        <p><br/></p>
                        <p>各種各樣的</p>
                        <p>如果本協議的任何部分被認定為無效或不可執行，則本協議的該部分將按照適用法律進行解釋。其餘部分將保持全部效力。公司一方未能執行本協議的任何條款，將不被視為我們放棄執行此類條款的權利。我們在本協議下的權利將在本協議終止後繼續有效。</p>
                        <p>您同意，與您與公司的關係有關或由您與公司的關係引起的任何訴訟因由必須在訴訟因由產生後一年內開始。否則，此類訴訟因由將被永久禁止。</p>
                        <p>這些服務條款和您對網站的使用受美利堅合眾國聯邦法律和加利福尼亞州法律的管轄，不考慮法律規定的衝突。</p>
                        <p><br/></p>
                        <p>您承認您已閱讀這些服務條款，理解服務條款，並將受這些條款和條件的約束。您進一步承認，這些服務條款與隱私政策一起代表您與公司之間協議的完整且唯一的聲明，並取代任何提議或先前的口頭或書面協議，並且您對本網站的使用。</p>
                    </div>
                </div>
                <Footer lang={lang}/>
            </>
        )
    }

    return(
        <>
            <Header lang={'en'} currPath={location.pathname}/>
            <div className="terms-page">
                <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
                <div className="terms-margin">
                    <h1>Terms of Services</h1>
                    <p>Welcome to the Straight A Prep website. The following Terms of Service apply when you view or use our websites at Straight A Prep.com. Please review the following terms carefully. By accessing or using the website, you signify your agreement to these Terms of Service. If you do not agree to these Terms of Service, you may not access or use our website.</p>
                    <p>Defintions</p>
                    <p>In this document:</p>
                    <ul className="numbered">
                        <li>1. "Website", "Straight A Prep Sites", or "Site" means www.straightaprep.com</li>
                        <li>2. "Customer", "Client", "You", or "Yours" means and refers to you and/or any other person accessing or interacting with the website on your behalf.</li>
                        <li>3. "", "Company", "We" or "Our" means and refers to Straight A Prep Consulting Inc.</li>
                        <li>4. "Services" refers to any services, products, features, or content offered for free or for purchase through the Straight A Prep Sites</li>
                        <li>5. "User Content" means any user-supplied content on the Website including but not limited to comments, essays, survey responses, or meeting notes submitted to the website by you or a third party.</li>
                    </ul>
                    <p>Privacy Policy</p>
                    <p>Straight A Prep respects the privacy of website users. Please refer to our Privacy Policy which explains how we collect, use, and disclose information that pertains to your privacy. When you access or use the website, you signify your agreement to this Privacy Policy. If you do not consent to the terms of the Privacy Policy, you may not access or use the Straight A Prep Sites.</p>

                    <p><br/></p>

                    <p>Account Registration and Termination</p>
                    <p>Straight A Prep provides a variety of services, both online and offline, designed to improve the overall academic experience of our users. Access to some of these services may require you to have an account. Users purchasing services requiring an account will have their account created by Straight A Prep. You may only have one Empowerly account for use of the Services; you may not use more than one account, and you may not share your account or any of the Services with others. All information you provide to Empowerly must be accurate and complete in order for us to create an account. You may not impersonate any other person or use a name that is not your own. It is your responsibility to update your account information to keep it current and accurate.</p>
                    <p>When your account is created, you will receive a confirmation email prompting you to set your password. You are solely responsible for maintaining the confidentiality of your password, and for any and all use of your account. You agree not to use the account, username, or password of another User at any time, nor to disclose your password to any third party. You agree you will not sell or share or otherwise transfer your membership or any membership rights. You agree to notify Straight A Prep immediately if you suspect any unauthorized use of your account or access to your password.</p>
                    <p>Straight A Prep has the right to terminate your account for any reason at our sole discretion with or without notice to you. If termination of your account limits your ability to access any purchased Services, refunds will be issued according to the terms in the contract for those Services, provided that your account was not terminated for a violation of these Terms. You may close your account via written request here. Unless otherwise laid out in the contract for those services, refunds will not be issued for unused or inaccessible Services due to such a request.</p>
                    <p><br/></p>
                    <p>Age and Residence Requirements; U.S. Jurisdiction</p>
                    <p>The Services are available to individuals age 13 and over. If you are between the ages of 13 and the age of majority where you live, you must review these Terms of Service with your parent or guardian to confirm that you and your parent or guardian understand and agree to it. All financial transactions will be processed in U.S. dollars. The Services are not intended for distribution or use in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject Straight A Prep to any registration requirement within such jurisdiction or country. By using this site, you certify that you are not on any list of restricted persons with whom it is unlawful for a U.S. company to do business. Straight A Prep operates the majority of its Services in the United States. Straight A Prep makes no representations or warranties that the Services are appropriate for use or access in other locations. Anyone using or accessing the Services from other locations does so on their own initiative and is responsible for compliance with the United States and local laws regarding online conduct and acceptable content, if and to the extent such laws are applicable. We reserve the right to limit the availability of the Services and/or the provision of any content, program, product, service or other feature to any person, geographic area, or jurisdiction, at any time and in our sole discretion, and to limit the quantities of any such content, program, product, service or other feature that we provide.</p>
                    <p><br/></p>
                    <p>Use Restrictions</p>
                    <p>Your permission to use the website is conditioned upon the following Use Restrictions and Conduct Restrictions for noncommercial use only. You agree that you will not under any circumstances:</p>
                    <ul className="terms-dotted-list">
                        <li>Post any information that is abusive, threatening, obscene, defamatory, libelous, or racially, sexually, religiously, or otherwise objectionable and offensive;</li>
                        <li>Use the website for any unlawful purpose or for the promotion of illegal activities;</li>
                        <li>Harass, abuse or harm another person or group, or attempt to do so;</li>
                        <li>Interfere or attempt to interfere with the proper functioning of the website;</li>
                        <li>Make any automated use of the website, or take any action that we deem to impose or to potentially impose an unreasonable or disproportionately large load on our servers or network infrastructure;</li>
                        <li>Bypass any measures we take to restrict access to the website or use any software, technology, or device to scrape, spider, or crawl the website or harvest or manipulate data;</li>
                        <li>Publish or link to malicious content intended to damage or disrupt another user’s browser or computer.</li>
                        <li>Publish, link, share, or otherwise distribute material that would violate the privacy rights, publicity rights, copyrights, contract rights, intellectual property rights or any other rights of any party.</li>
                    </ul>
                    <p><br/></p>
                    <p>Links to Other Sites and/or Materials</p>
                    <p>On the website, Straight A Prep may provide you with links to a third-party website(s) as well as content or items belonging to or originating from third parties (collectively "Third Party Content"). Straight A Prep has no control over Third Party Content or the promotions, materials, information, goods or services available through such Third Party Content. Such Third Party Content is not investigated, monitored or checked for accuracy, appropriateness, or completeness by the Company, and the Company is not responsible for any Third Party Content accessed through the website or any Third Party Content posted on, available through or installed from the Site, including the content, accuracy, offensiveness, opinions, reliability, privacy practices or other policies of or contained in the Third Party Content. Inclusion of, linking to or permitting the use or installation of any Third Party Content does not imply approval or endorsement thereof by Straight A Prep. If you decide to leave the website and access the Third Party Content, you do so at your own risk and you should be aware that our terms and policies do not govern such use.</p>
                    <p><br/></p>
                    <p>Intellectual Property</p>
                    <p>The website and associated services are owned and operated by Straight A Prep. Unless otherwise explicitly specified by Empowerly, all materials that are included in or otherwise a part of the website, including past, present, and future versions, domain names, source and object code, the text, site design, logos, graphics, and guides, as well as the selection, assembly and arrangement thereof and the "look and feel" of the Services (collectively, "Empowerly Content"), are owned, controlled, or licensed by Straight A Prep or Straight A Prep’s third-party partners. Straight A Prep Content is protected from unauthorized use, copying and dissemination by copyright, trademark, patent, and other laws, rules, regulations, and treaties. Any unauthorized use of Straight A Prep Content is prohibited. Any unauthorized use of the materials appearing on the Services may violate copyright, trademark, patent, and other applicable laws, rules, regulations, and treaties, and could result in criminal or civil penalties.</p>
                    <p><br/></p>
                    <p>Academic Integrity</p>
                    <p>We do not condone or knowingly take part in plagiarism or any other acts of fraud. Neither the company nor its employees/contractors shall be liable for any illegal, unethical, or otherwise wrongful use of the Essays or other content from our website. This includes rejection, rescindment, deferral, academic probation, loss of scholarships/titles/awards/prizes/grants/positions, lawsuits, suspension, or any other disciplinary or legal actions. You agree to abstain from improper, unethical, inappropriate and / or illegal use of the material and are solely responsible for any and all disciplinary actions arising from your use of the Website and Services.</p>
                    <p><br/></p>
                    <p>DISCLAIMER OF WARRANTIES</p>
                    <p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE EMPOWERLY WEBSITES AND SERVICES ARE PROVIDED ON AN "AS IS," "AS AVAILABLE," AND "WITH ALL FAULTS" BASIS AND WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, EMPOWERLY AND ITS SUBSIDIARIES, DIRECTORS, EMPLOYEES, MANAGERS, OFFICERS, AGENTS, REPRESENTATIVES, VENDORS AND THIRD-PARTY LICENSORS OF CONTENT SOLD THROUGH EMPOWERLY (COLLECTIVELY THE "EMPOWERLY PARTIES") SPECIFICALLY MAKE NO REPRESENTATIONS, WARRANTIES, OR ENDORSEMENTS OF ANY KIND, WHETHER EXPRESS OR IMPLIED, AS TO (A) THE EMPOWERLY WEBSITES OR THE SERVICES; (B) THE EMPOWERLY CONTENT; (C) USER CONTENT; AND/OR (D) SECURITY ASSOCIATED WITH THE TRANSMISSION OF INFORMATION TO Straight A Prep OR VIA THE SERVICES. IN ADDITION, TO THE FULLEST EXTENT PERMISSIBLE BY APPLICABLE LAW, THE EMPOWERLY PARTIES DISCLAIM ALL WARRANTIES, EXPRESS, IMPLIED, OR STATUTORY, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, OF MERCHANTABILITY, NON-INFRINGEMENT, TITLE, CUSTOM, TRADE, QUIET ENJOYMENT, AND SYSTEM.</p>
                    <p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE EMPOWERLY PARTIES SPECIFICALLY DO NOT WARRANT THAT THE SERVICES WILL BE ERROR-FREE, THAT DEFECTS WILL BE CORRECTED OR THAT THE SERVICES OR THE SERVER, NETWORK OR OTHER SOFTWARE AND EQUIPMENT THAT MAKES THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, EMPOWERLY DOES NOT MAKE ANY REPRESENTATIONS OR WARRANTIES REGARDING THE CONTENT OF ITS PRODUCTS, WEBSITES OR SERVICES, OR REGARDING THE RESULTS OF THE USE OF THE SERVICES IN TERMS OF THEIR COMPLETENESS, CORRECTNESS, ACCURACY, RELIABILITY, USEFULNESS OR OTHERWISE, UNLESS SPECIFICALLY SET OUT ON THE SERVICES. YOU ACKNOWLEDGE THAT YOUR USE OF THE SERVICES IS AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE EMPOWERLY PARTIES DO NOT WARRANT THAT YOUR USE OF THE SERVICES IS LAWFUL IN ANY PARTICULAR JURISDICTION, AND THE EMPOWERLY PARTIES SPECIFICALLY DISCLAIM SUCH WARRANTIES.</p>
                    <p>BY ACCESSING OR USING THE SERVICES YOU REPRESENT AND WARRANT THAT YOUR ACTIVITIES ARE LAWFUL IN EVERY JURISDICTION WHERE YOU ACCESS OR USE THE SERVICES. THIS "DISCLAIMERS" SECTION SHALL SURVIVE ANY EXPIRATION OR TERMINATION OF YOUR RELATIONSHIP WITH EMPOWERLY.</p>
                    <p><br/></p>
                    <p>LIMITATIONS OF LIABILITY, WAIVER</p>
                    <p>IN NO EVENT SHALL THE EMPOWERLY PARTIES BE LIABLE FOR ANY INDIRECT, ECONOMIC, SPECIAL, INCIDENTAL OR CONSEQUENTIAL LOSSES OR DAMAGES RELATED TO: (A) THE SERVICES; (B) THE EMPOWERLY CONTENT; (C) USER CONTENT; (D) YOUR USE OF, INABILITY TO USE, OR THE PERFORMANCE OF THE SITE; (E) ACTION TAKEN IN CONNECTION WITH AN INVESTIGATION BY THE EMPOWERLY PARTIES OR LAW ENFORCEMENT AUTHORITIES REGARDING YOUR USE OF THE SITE; (F) ACTION TAKEN IN CONNECTION WITH COPYRIGHT OR OTHER INTELLECTUAL PROPERTY OWNERS; (G) ANY ERRORS OR OMISSIONS IN THE SERVICES' TECHNICAL OPERATION; OR (H) ANY DAMAGE THAT RESULTS FROM EVENTS BEYOND OUR REASONABLE CONTROL, SUCH AS DAMAGES TO ANY USER'S COMPUTER, MOBILE DEVICE, OR OTHER EQUIPMENT OR TECHNOLOGY INCLUDING, WITHOUT LIMITATION, DAMAGE FROM ANY SECURITY BREACH OR FROM ANY VIRUS, BUGS, TAMPERING, FRAUD, ERROR, OMISSION, INTERRUPTION, DEFECT, DELAY IN OPERATION OR TRANSMISSION, COMPUTER LINE OR NETWORK FAILURE OR ANY OTHER TECHNICAL OR OTHER MALFUNCTION, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOST PROFITS, LOSS OF GOODWILL, LOSS OF DATA, WORK STOPPAGE, ACCURACY OF RESULTS, OR COMPUTER FAILURE OR MALFUNCTION, EVEN IF FORESEEABLE OR EVEN IF THE EMPOWERLY PARTIES HAVE BEEN ADVISED OF OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT WILL THE EMPOWERLY PARTIES TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES OR CAUSES OR ACTION EXCEED THE AMOUNTS PAID BY YOU, IF ANY, TO STRAIGHT A PREP IN THE PAST SIX MONTHS, OR $250, WHICHEVER IS GREATER. THE PRIOR LIMITATION ON DAMAGES IS NOT INTENDED TO LIMIT THE EMPOWERLY PARTIES’ OBLIGATION TO PAY PREVAILING PARTY COSTS OR FEES IF RECOVERABLE PURSUANT TO APPLICABLE LAW. THE LIMITATIONS SET FORTH IN THIS SECTION WILL NOT LIMIT OR EXCLUDE THE EMPOWERLY PARTIES’ LIABILITY FOR PERSONAL INJURY OR PROPERTY DAMAGE CAUSED BY THE EMPOWERLY PARTIES, OR FOR THE EMPOWERLY PARTIES’ GROSS NEGLIGENCE, FRAUD OR INTENTIONAL, WILLFUL, MALICIOUS OR RECKLESS MISCONDUCT. THIS SECTION SHALL SURVIVE ANY EXPIRATION OR TERMINATION OF YOUR RELATIONSHIP WITH EMPOWERLY.</p>
                    <p>YOU AGREE THAT IN THE EVENT YOU INCUR ANY DAMAGES, LOSSES OR INJURIES THAT ARISE OUT OF THE EMPOWERLY PARTIES' ACTS OR OMISSIONS, THE DAMAGES, IF ANY, CAUSED TO YOU ARE NOT IRREPARABLE OR SUFFICIENT TO ENTITLE YOU TO AN INJUNCTION PREVENTING ANY EXPLOITATION OF ANY WEB SITE, PROPERTY, PRODUCT, SERVICE, OR OTHER EMPOWERLY CONTENT OWNED OR CONTROLLED BY THE EMPOWERLY PARTIES, AND YOU WILL HAVE NO RIGHTS TO ENJOIN OR RESTRAIN THE DEVELOPMENT, PRODUCTION, DISTRIBUTION, ADVERTISING, EXHIBITION OR EXPLOITATION OF ANY WEB SITE, PROPERTY, PRODUCT, SERVICE, OR OTHER EMPOWERLY CONTENT OWNED OR CONTROLLED BY THE EMPOWERLY PARTIES.</p>
                    <p>BY ACCESSING THE SERVICES, YOU UNDERSTAND THAT YOU MAY BE WAIVING RIGHTS WITH RESPECT TO CLAIMS THAT ARE AT THIS TIME UNKNOWN OR UNSUSPECTED, AND IN ACCORDANCE WITH SUCH WAIVER, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND, AND HEREBY EXPRESSLY WAIVE, THE BENEFITS OF SECTION 1542 OF THE CIVIL CODE OF CALIFORNIA, AND ANY SIMILAR LAW OF ANY STATE OR TERRITORY, WHICH PROVIDES AS FOLLOWS: "A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM MUST HAVE MATERIALLY AFFECTED HIS SETTLEMENT WITH THE DEBTOR."</p>
                    <p><br/></p>
                    <p>Indemnity</p>
                    <p>To the fullest extent permitted by applicable law, you agree to defend, indemnify and hold harmless the Empowerly Parties from and against any and all loss, liability, damages, judgments, claims, demands, costs, investigations, settlements, and expenses (including, without limitation, reasonable attorneys' fees) arising out of or directly or indirectly relating to (a) your User Content; (b) your use of the Services or activities in connection with the Services; (c) your breach or anticipatory breach of these Terms of Service; (d) your violation of any laws, rules, regulations, codes, statutes, ordinances or orders of any governmental and quasi-governmental authorities, including, without limitation, all regulatory, administrative and legislative authorities; (e) information or material transmitted through your computer, even if not submitted by you, that infringes, violates or misappropriates any copyright, trademark, trade secret, trade dress, patent, publicity, privacy or other right of any person or defames any person; (f) any misrepresentation made by you; or (g) the Empowerly Parties' use of your information or User Content as permitted under these Terms of Service, the Privacy Policy, or any other written agreement between you and Empowerly. You will cooperate as fully required by the Empowerly Parties in the defense of any claim. The Straight A Prep Parties reserve the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, and you will not, in any event, settle any claim without the prior written consent of a duly authorized employee of the Empowerly Parties. These indemnity obligations shall survive any expiration or termination of your relationship with Straight A Prep.</p>
                    <p><br/></p>
                    <p>Legal Disputes</p>
                    <p>If a dispute arises between you and Straight A Prep, our goal is to provide you with a neutral and cost-effective means of resolving the dispute quickly. Accordingly, you agree that we will resolve any claim or controversy at law or equity that relates to or arises out of the Terms of Service or the Website or your use of the Website (a "Claim") in accordance with the subsections below.</p>
                    <p><br/></p>
                    <p>General</p>
                    <p>You and Straight A Prep agree that any dispute, claim or controversy arising out of or relating to these Terms of Service or the breach, termination, enforcement, interpretation or validity thereof (collectively, "Disputes") will be settled by binding arbitration. You acknowledge and agree that you and Empowerly are each waiving the right to a trial by jury or to participate as a plaintiff or class member in any purported class action or representative proceeding. Further, unless both you and Straight A Prep otherwise agree, the arbitrator may not consolidate more than one person's claims, and may not otherwise preside over any form of any class or representative proceeding
                    </p>
                    <p><br/></p>
                    <p>Arbitration Process</p>
                    <p>A party who desires to initiate arbitration must provide the other party with a written Demand for Arbitration as specified in the AAA Rules. The arbitrator will be either a retired judge or an attorney licensed to practice law in the state of California and will be selected by the parties from the AAA's roster of consumer dispute arbitrators. If the parties are unable to agree upon an arbitrator within fourteen (14) days of delivery of the Demand for Arbitration, then the AAA will appoint the arbitrator in accordance with the AAA Rules.</p>
                    <p><br/></p>
                    <p>Arbitrator's Decision</p>
                    <p>The arbitrator will render an award within the time frame specified in the AAA Rules. The arbitrator's decision will include the essential findings and conclusions upon which the arbitrator based the award. Judgment on the arbitration award may be entered in any court having jurisdiction thereof. The arbitrator's award damages must be consistent with the terms of Limitation of Liability section of these Terms of Service as to the types and the amounts of damages for which a party may be held liable. The prevailing party shall be entitled to an award of attorneys' fees and expenses, to the extent provided under applicable law. Your responsibility to pay any AAA filing, administrative and arbitrator fees will be sole as set forth in the AAA Rules. This "Legal Disputes" section shall survive any expiration or termination of your relationship with Straight A Prep.</p>
                    <p><br/></p>
                    <p>Modification</p>
                    <p>We can amend these Terms of Service at any time and will update these Terms of Service in the event of any such amendments. The most recent version of these Terms may be found at <a href="https://my.empowerly.com/terms">https://my.empowerly.com/terms</a>. It is your sole responsibility to check the website from time to time to view any such changes in the Terms. If you continue to use the website, you signify your agreement to our revisions to these Terms of Service. We will notify you of material changes to the terms, as determined at our sole discretion, by posting a prominent notice on our homepage. Any changes to these Terms (other than as set forth in this paragraph) or waiver of the Company’s rights hereunder shall not be valid or effective except in a written agreement bearing the physical signature of an officer of the Company. No purported waiver or modification of this Agreement by the Company via telephonic or email communications shall be valid.</p>
                    <p><br/></p>
                    <p>Miscellaneous</p>
                    <p>If any part of this Agreement is held invalid or unenforceable, that portion of the Agreement will be construed consistent with applicable law. The remaining portions will remain in full force and effect. Any failure on the part of the Company to enforce any provision of this Agreement will not be considered a waiver of our right to enforce such provision. Our rights under this Agreement will survive any termination of this Agreement.</p>
                    <p>You agree that any cause of action related to or arising out of your relationship with the Company must commence within ONE year after the cause of action accrues. Otherwise, such a cause of action is permanently barred.</p>
                    <p>These Terms of Service and your use of the website are governed by the federal laws of the United States of America and the laws of the State of California, without regard to conflict of law provisions.</p>
                    <p><br/></p>
                    <p>YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE, UNDERSTAND THE TERMS OF SERVICE, AND WILL BE BOUND BY THESE TERMS AND CONDITIONS. YOU FURTHER ACKNOWLEDGE THAT THESE TERMS OF SERVICE TOGETHER WITH THE PRIVACY POLICY REPRESENT THE COMPLETE AND EXCLUSIVE STATEMENT OF THE AGREEMENT BETWEEN YOU AND THE COMPANY AND THAT IT SUPERSEDES ANY PROPOSAL OR PRIOR AGREEMENT ORAL OR WRITTEN, AND ANY OTHER COMMUNICATIONS BETWEEN YOU AND THE COMPANY RELATING TO YOUR USE OF THE SITE.</p>
                </div>
            </div>
            <Footer lang={lang}/>
        </>
    )
}

export default TermsOfService
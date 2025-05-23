import { useEffect, useState } from 'react';
import '../styles/index.css';

const Goto_Top = () => {
    const [isVisible, setVisible] = useState(false)
    function gotoBtn() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    const listenToScroll = () => {
        let heightToHidden = 280;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > heightToHidden) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll)
    }, [])
    return (
        <section>
            {isVisible && (
                <div className="top_div">
                    <img className="top_btn" onClick={gotoBtn}
                        src="/assets/images/icons/icon-up.svg"
                    />
                </div>
            )}
        </section>
    )
}

export default Goto_Top;
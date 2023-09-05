import "./style.css"

export const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Andrew</em></strong><br/>
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <a download href="https://drive.google.com/file/d/1rQf6kOPv4uwKureNpx2hv9EQZH3LFDhP/view?usp=drive_link"
                   className="btn">Download CV</a>
            </div>
        </header>
    )
}
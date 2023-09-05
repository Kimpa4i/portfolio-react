export const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Moscow, Russia</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="https://t.me/kim_rew">@kim_rew </a></p>
                        <p>/</p>
                        <p><a href="tel:+79777237756">+7 (977) 723-77-56</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:mr.kimpa4i@gmail.com">mr.kimpa4i@gmail.com</a></p>
                    </li>
                </ul>
            </div>
        </main>

    )
}
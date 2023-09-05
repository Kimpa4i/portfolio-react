import git from "./gitHub-black.svg";

export const BtnGitHub = ({link}) => {
    return (
        <a className="btn-outline" href={link} target="_blank" rel="noreferrer">
            <img src={git} alt="jhij"/>
            GitHub repo
        </a>
    )
}
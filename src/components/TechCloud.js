import git from "../static/images/tech-cloud/git.svg";
import postgres from "../static/images/tech-cloud/postgres.svg";
import mssql from "../static/images/tech-cloud/mssql.svg";
import csharp from "../static/images/tech-cloud/csharp.svg";
import blazor from "../static/images/tech-cloud/blazor.svg";
import netcore from "../static/images/tech-cloud/netcore.svg";
import javascript from "../static/images/tech-cloud/javascript.svg";
import react from "../static/images/tech-cloud/react.svg";
// import svelte from "../static/images/tech-cloud/svelte.svg";
import go from "../static/images/tech-cloud/go.svg";
// import docker from "../static/images/tech-cloud/docker.svg";
import html from "../static/images/tech-cloud/html.svg";
// import css from "../static/images/tech-cloud/css.svg";

var techArr = [
    <li><img src={git}></img></li>,
    <li><img src={postgres}></img></li>,
    <li><img src={mssql}></img></li>,
    <li><img src={csharp}></img></li>,
    <li><img src={blazor}></img></li>,
    <li><img src={netcore}></img></li>,
    <li><img src={javascript}></img></li>,
    <li><img src={react}></img></li>,
    // <li><img src={svelte}></img></li>,
    <li><img src={go}></img></li>,
    // <li><img src={docker}></img></li>,
    <li><img src={html}></img></li>,
    // <li><img src={css}></img></li>
];

techArr = techArr
    .map(value => ({value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({value}) => value);

const TechCloud = () => {
    return(
        <ul id="cloud">
            {techArr.map(el => {
                return el;
            })}
        </ul>
    );
}

export default TechCloud;

/* 
git
postgres
mssql
c#
blazor
.net core
javascript
react
svelte x
go
docker x
html
css x
*/
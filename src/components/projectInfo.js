import resumatorLong from '../static/images/project-images/resumator-long.PNG'
import resumatorSquare from '../static/images/project-images/resumator-square.PNG'
import memoryLong from '../static/images/project-images/memory-long.PNG'
import memorySquare from '../static/images/project-images/memory-square.PNG'
import wlLong from '../static/images/project-images/wl-long.PNG'
import wlSquare from '../static/images/project-images/wl-square.PNG'
import weatherLong from '../static/images/project-images/weather-long.PNG'
import weatherSquare from '../static/images/project-images/weather-square.PNG'
import dostuffLong from '../static/images/project-images/dostuff-long.PNG'
import dostuffSquare from '../static/images/project-images/dostuff-square.PNG'
import colorverseLong from '../static/images/project-images/colorverse-long.png'
import colorverseSquare from '../static/images/project-images/colorverse-square.png'
import sunbearsOnlyLong from '../static/images/project-images/sunbears-only-long.PNG'
import sunbearsOnlySquare from '../static/images/project-images/sunbears-only-square.PNG'
import hnReaderSquare from '../static/images/project-images/hnreader-square.png'
import hnReaderLong from '../static/images/project-images/hnreader-long.png'

const projectInfo = [
    {
        title: 'colorverse',
        repoLink: 'https://github.com/harrisonBarnett/colorverse',
        liveLink: 'https://pedantic-jackson-d957bc.netlify.app/',
        headerImg: colorverseLong,
        accentImg: colorverseSquare,
        stack: [
            'javascript',
            'svelte',
            'html',
            'css'
        ],
        skills: [
            'global stores',
            'reactivity',
            'UX/UI development'
        ],
        description: 'ColorVerse is an implementation of the populare ColorSpace web application' +
        ' built using the Svelte Javascript framework. Enter a color hex to generate a set of palettes' +
        ' to get your creative juices flowing!'
    },
    {
        title: 'members only',
        repoLink: 'https://github.com/harrisonBarnett/members-only',
        liveLink: 'https://sunbears-only.herokuapp.com/dashboard',
        headerImg: sunbearsOnlyLong,
        accentImg: sunbearsOnlySquare,
        stack: [
            'node.js',
            'express.js',
            'mongoDB'
        ],
        skills: [
            'noSQL queries',
            'authentication',
            'CRUD operations'
        ],
        description: 'members_only is a simple private messaging application demonstrating dynamic content' +
        ' rendered depending on authentication. Users can register, log in and post messages. Unauthorized' +
        ' visitors can only view message content. Further, users can enter a secret admin password to grant' +
        ' privileges to delete posts.'
    },
    {
        title: 'HNReader',
        repoLink: 'https://github.com/harrisonBarnett/HNReader',
        liveLink: 'https://github.com/harrisonBarnett/HNReader',
        headerImg: hnReaderLong,
        accentImg: hnReaderSquare,
        stack: [
            'C#',
            '.NET Core'
        ],
        skills: [
            'NuGet',
            '3rd party API',
            'console development'
        ],
        description: 'HNReader is a terminal-based application for reading the latest stories on the popular' +
        ' Hacker News website. The application communicates with their free and open API to display top stories.' +
        ' Use commands in your console to page through stories and read comments.' 
    },
    {
        title: 'res-u-mator',
        repoLink: 'https://github.com/harrisonBarnett/resumator',
        liveLink: 'https://harrisonbarnett.github.io/resumator/',
        headerImg: resumatorLong,
        accentImg: resumatorSquare,
        stack: [
            'javascript',
            'react',
            'HTML',
            'CSS'
        ],
        skills: [
            'modals',
            'state handling',
            '3rd party library'
        ],
        description: "Res-U-Mator is a browser-based CV generation app." +
        " Add your contact information, upload an avatar and edit 'til the cows come home." +
        " Convert your app to a .PNG for easy saving and sharing!"
    },
    {
        title: 'memory time',
        repoLink: 'https://github.com/harrisonBarnett/reactMemory',
        liveLink: 'https://harrisonbarnett.github.io/reactMemory/',
        headerImg: memoryLong,
        accentImg: memorySquare,
        stack: [
            'javascript',
            'react',
            'HTML',
            'CSS'
        ],
        skills: [
            'hooks',
            'functional components',
            'lifecycle methods'
        ],
        description: "Test your memory against the characters from Cartoon Network's" + 
        " 'Adventure Time.' See if you can beat your own high score in this exploration" +
        " of React functional components and hooks."
    },
    // {
    //     title: 'apogee athletic',
    //     repoLink: '#',
    //     liveLink: 'https://apogeeathletic.com/',
    //     headerImg: '',
    //     accentImg: '',
    //     stack: [
    //         'vanilla javascript',
    //         'HTML',
    //         'CSS'
    //     ],
    //     skills: [
    //         'e-commerce',
    //         '3rd party API',
    //         '3rd party library'
    //     ],
    //     description: 'The landing page and storefront for Apogee Athletic LLC, an athletic apparel company.'
    // },
    {
        title: 'wl_',
        repoLink: 'https://github.com/harrisonBarnett/wl_',
        liveLink: 'https://github.com/harrisonBarnett/wl_',
        headerImg: wlLong,
        accentImg: wlSquare,
        stack: [
            'python',
            'flask',
            'HTML',
            'CSS',
            'mySQL'
        ],
        skills: [
            'CMV',
            'auth',
            'CRUD'
        ],
        description: 'An olympic weightlifting CRUD application for novices ' +
        'that provides progressive overload based on one-rep-maxes established in ' +
        'your settings. Incorporates 5/3/1 squat programming.'
    },
    {
        title: 'theWeather',
        repoLink: 'https://github.com/harrisonBarnett/weather',
        liveLink: 'https://harrisonbarnett.github.io/weather/',
        headerImg: weatherLong,
        accentImg: weatherSquare,
        stack: [
            'javascript',
            'react',
            'HTML',
            'CSS'
        ],
        skills: [
            'async',
            '3rd party API'
        ],
        description: 'A simple, minimalistically-styled weather application utilizing ' +
        'the OpenWeatherMap API. Returns a pleasant background image depending on the ' +
        'weather type and time of day.'
    },
    {
        title: 'doStuff',
        repoLink: 'https://github.com/harrisonBarnett/to-do',
        liveLink: 'https://harrisonbarnett.github.io/to-do/',
        headerImg: dostuffLong,
        accentImg: dostuffSquare,
        stack: [
            'javascript',
            'react',
            'HTML',
            'CSS'
        ],
        skills: [
            'modals',
            'state handling'
        ],
        description: 'A note-taking app. Add a group to organize your notes as you see ' +
        'fit. Notes are deletable and editable, though there is sadly no persistence.'
    },
]
export default projectInfo
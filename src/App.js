import './App.css';
import Logo from './Components/Logo/Logo';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Section/footer';
import {useState, useEffect} from 'react';
import CrossfadeImage from 'react-crossfade-image';
import TitleParahraph from './Components/TitleParagraph/TitleParagraph';

const aboutData = [
    {
        title: "Providing Professional Excavation Services since 1954", 
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus. Id semper risus in hendrerit gravida. Fames ac turpis egestas integer eget aliquet nibh. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. In fermentum et sollicitudin ac. Nulla malesuada pellentesque elit eget. Neque egestas congue quisque egestas diam in arcu cursus euismod. Sagittis eu volutpat odio facilisis mauris sit amet. Vitae auctor eu augue ut lectus. "
    },
    {
        title: "We’ll Tackle any Project", 
        paragraph: "Massa enim nec dui nunc mattis. Tortor at risus viverra adipiscing. Ac tortor dignissim convallis aenean et. Sed faucibus turpis in eu mi bibendum neque egestas congue. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Feugiat in ante metus dictum at. Dis parturient montes nascetur ridiculus mus mauris vitae."
    },
];

const servicesData = [
    {
        title: "Gardens", 
        paragraph: "Malesuada proin libero nunc consequat interdum. Porta nibh venenatis cras sed. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. Amet purus gravida quis blandit turpis. Diam sollicitudin tempor id eu nisl nunc mi ipsum. A diam maecenas sed enim ut."
    },
    {
        title: "Foundations", 
        paragraph: "Nec ultrices dui sapien eget mi proin sed. Ullamcorper malesuada proin libero nunc consequat interdum. Tortor at risus viverra adipiscing at in tellus integer feugiat. Gravida neque convallis a cras semper auctor neque. Iaculis at erat pellentesque adipiscing commodo elit. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Sed elementum tempus egestas sed sed risus pretium quam. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Placerat duis ultricies lacus sed. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. "
    },
    {
        title: "Sewer", 
        paragraph: "Viverra adipiscing at in tellus integer. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Nisl nunc mi ipsum faucibus vitae. Urna condimentum mattis pellentesque id nibh tortor id. Mattis rhoncus urna neque viverra. Ultricies leo integer malesuada nunc vel risus commodo viverra."
    },
    {
        title: "Basements", 
        paragraph: "Dictum at tempor commodo ullamcorper. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Nisl nunc mi ipsum faucibus vitae. Urna condimentum mattis pellentesque id nibh tortor id. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Amet commodo nulla facilisi nullam vehicula ipsum a arcu."
    },
    {
        title: "Earthmoving Contractors", 
        paragraph: "Pretium quam vulputate dignissim suspendisse in est ante in. In hac habitasse platea dictumst quisque. Malesuada proin libero nunc consequat interdum varius sit amet. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Nisl nunc mi ipsum faucibus vitae. Urna condimentum mattis pellentesque id nibh tortor id. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Ultricies integer quis auctor elit sed vulputate mi sit. Eget mauris pharetra et ultrices neque ornare aenean euismod. At quis risus sed vulputate odio ut enim."
    },
]


function App() {
    

    let imgIndex = 0;
    const imgList = [
        "https://wolfe.sfo3.cdn.digitaloceanspaces.com/front_digger_compressed.jpg",
        "https://wolfe.sfo3.cdn.digitaloceanspaces.com/frontloader_compressed.jpg"
    ];

    const [url, setUrl] = useState(imgList[0]);
    const [opact, setOpact] = useState(100);
    const [flipped, setFlipped] = useState(false);

    const flip = () => {
        setOpact((prev) => {
            const newOpact = prev - 1;
            if (newOpact <= 0) {
                return 0;
            } else {
                setTimeout(flip, 50);
                return newOpact;
            }
        });
    }

    const unFlip = () => {
        setOpact((prev) => {
            const newOpact = prev + 1;
            if (newOpact >= 100) {
                return 100;
            } else {
                setTimeout(unFlip, 50);
                return newOpact;
            }
        });
    }

    useEffect(() => {
        const interval = setInterval(() => {
            let call;
            setFlipped((prev) => {
                call = prev ? unFlip : flip;
                return !prev
            })
            if (call) {
                call();
            } else {
                flip();
            }
        }, 11000)
        return () => clearInterval(interval)
    }, [])


    const NavClickHander = (div_id) => {
        document.querySelector('#'+div_id).scrollIntoView({
            behavior: 'smooth'
          });
    }

    return (
    <div className="App">
        <div className="logo-bar"><Logo /><h1>EXCAVATION COMPANY NAME</h1></div>
        <Navbar onNavClick={NavClickHander} />
        <div className="display-text"><button onClick={() => {
            NavClickHander("get-quote")
        }}>GET A FREE QUOTE</button></div>
        <div className="display-one" style={{opacity: `${opact}%`}}></div>
        <div className="display-two"></div>
        {/* TODO id is used as quick hack for last minute add of scroll, remove */}
        <div id="about" className="section about">
            <section>
                {aboutData.map((data) => <TitleParahraph {...data} />)}
            </section>
        </div>
        <div id="services" className="section services">
            <img src={require("./img/exc_left.jpg")}/>
            <section>
                {servicesData.map((data) => <TitleParahraph {...data} />)}
            </section>
            <img src={require("./img/exc_right.jpg")}/>
        </div>
        <div id="get-quote" className="section get-quote">
            <h1>GET A FREE QUOTE NOW</h1>
            <section>
                <form id="get-quote">
                    <input placeholder="Enter your name"></input>
                    <input placeholder="Enter your email"></input>
                    <input placeholder="What service did you want?"></input>
                    <textarea placeholder="Tell us more about it!"></textarea>
                    <button>SUBMIT</button>
                </form>
            </section>
        </div>
        <Footer id="footer" />
    </div>
        /*
        <div className="App">
        <div className="logo-bar"><Logo /><h1>EXCAVATION COMPANY NAME</h1></div>
        <Navbar onNavClick={NavClickHander} />
        <div className="display">
            <CrossfadeImageDisplay />
            
        </div>

        <Footer />
    </div>
    */
    );
}

export default App;


import CrossfadeImage from 'react-crossfade-image';
import {useState, useEffect} from 'react';

const CrossfadeImageDisplay = () => {
    let imgIndex = 0;
    const imgList = [
        "https://wolfe.sfo3.cdn.digitaloceanspaces.com/front_digger_compressed.jpg",
        "https://wolfe.sfo3.cdn.digitaloceanspaces.com/blue_coffee_compressed.jpg"
    ];

    const [url, setUrl] = useState(imgList[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            imgIndex++;
            imgIndex = imgIndex % imgList.length;
            console.log(imgIndex)
            console.log("shwah?")
            setUrl(imgList[imgIndex]);
        }, 4000)
        return () => clearInterval(interval)
    }, [])


    return <CrossfadeImage src={url} />
}

export default CrossfadeImageDisplay;



// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=

// AIzaSyBGbpsUX7FeADCAtLSByVqu-w0_XaEDg4o

// const url= `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=AIzaSyBGbpsUX7FeADCAtLSByVqu-w0_XaEDg4o`

const searchvideos = async ()=> {
    try{
        const q= document.getElementById("query").value
        const res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}&key=AIzaSyBGbpsUX7FeADCAtLSByVqu-w0_XaEDg4o`)

        // console.log(res)
        const data= await res.json();

        // console.log(data.items)
        append(data.items)
    }
    catch(err){
        console.log(err)
    }
}

const append= (videos) => {
    let show_videos= document.getElementById("show_videos");

    show_videos.innerHTML= null;

    videos.forEach(({id: {videoId},snippet: {title}})=> {

        let div=  document.createElement("div");
        let iframe =  document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`;

        iframe.width= "100%";
        iframe.height= "100%";
        iframe.allow= "fullscreen";

        let name = document.createElement("h4");
        name.innerText= title;

        div.append(iframe,name);


        let data= {
            title,
            videoId
        }

        div.onclick= ()=>{
            showvideo(data)
        }

        show_videos.append(div);

    })

    const showvideo = (x)=> {
        // window.localStorage.href= "videos.html";

        console.log('hi')

        localStorage.setItem("video", JSON.stringify(x));
    }
}
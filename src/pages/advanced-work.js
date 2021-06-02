import React from 'react';

const AdvancedWork = () => {
  return (
    <div style={{ textAlign: 'center', padding: '80px 24%' }}>
      <div>
        <h1>ADVANCED WORK</h1>
      </div>
      <div style={{ marginTop: '50px' }}>
        <iframe
            width="100%"
            height="415"
            src="https://www.youtube-nocookie.com/embed/2P1pP670UZg?rel=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
      </div>
      <div style={{ marginTop: '20px', textAlign: 'left' }}>
        <p><span style={{ fontWeight: '700' }}>ARTIST STATEMENT</span> by Ako Shergazy:</p>
        <p>id="myID"
          I couldn’t come up with the most appropriate title for my project just yet, because it is still a work-in-progress and still an amusing mystery for me. But overall, this project highlights the interdisciplinary work I have done during my time at Bennington. 
	        This is a sound-only release of my work which will be an installation (virtual and physical) that holds a virtual world I am creating to present the compositions I wrote over the past four years. My interest in game development led me to this concept of presenting my work, the aspect of user interactivity has played a large part in the development of this idea as well. I am creating an immersive world where the audience can physically be a part of my virtual world and experience musical performances. With the entire world shifting to a remote online lifestyle I thought it would be an interesting delivery of my work to the outside world, which also aligned with my academic focus in computer science.</p>
        <p>Allen Shawn on piano, Nathaniel Parke on Cello.</p>
        <script>
         function display() {
            document.getElementById("myID").style.fontFamily = "verdana,sans-serif"
         }
      </script>
      </div>
    </div>
  )
}

export default AdvancedWork;

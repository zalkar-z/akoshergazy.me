import React from 'react';

const AdvancedWork = () => {
  return (
    <div style={{ textAlign: 'center', padding: '80px 24%' }}>
      <div>
        <h1>Dyscovering Your Other Digital Self (VR/Installation)</h1>
      </div>
      <div style={{ marginTop: '50px' }}>
        <iframe
            width="100%"
            height="415"
            src="https://drive.google.com/file/d/1X7g8XcQczu6ovjntnyVoScR0aK0424zp/view?usp=sharing"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
      </div>
      <div style={{ marginTop: '20px', textAlign: 'left'}}>
        <p><span style={{ fontWeight: '500' }}>ARTIST STATEMENT</span> by Ako Shergazy:</p>
        <p>
        How is data being collected? And how much of it is collected through our daily used devices? How much of it is captured through sound? 
        In this piece, <em>Discovering Your Other Digital Self</em> I am creating an alter-ego by putting together endless pieces of information that my electronic devices are capturing through sound. 
        Since phones are an irreplaceable part of our everyday life, I decided to use mine as a foundation for this piece. How is it like being inside your phone’s ‘head’ 
        and recording all of these arbitrary things and making sense out of them? I have decided to create a semi-virtual reality to experience my phone’s point of view as close as I can.
        All of the sounds here are processed field recordings from my everyday life. You can hear conversations, whispers, space ambiances, and different daily activities. 
        The sounds are being separately fed to an algorithm that generates random combinations of four sound stems. I think computerizing the sound output through a random algorithm 
        gives a better sense of having your phone’s POV. That creates a sense of chaos and ambiguity as the algorithm is searching through a huge pool of data while capturing 
        more and more information. The visual patterns are the representations of how a single ‘drop’ of new data falling into the ocean of information triggers the algorithm 
        to find infinite possibilities of different connections and meanings. You get into your phone’s head and hear yourself from its point of view. 

        <em>Discovering Your Other Digital Self</em> debuted as an installation piece in Bennington College, VT in November 2021. The online VR version of the piece will be available in late 2022.
        </p>
        <script>
        function myFunction() {
          alert(document.getElementById("demo").style.fontFamily)
        }
        </script>
      </div>
    </div>
  )
}

export default AdvancedWork;

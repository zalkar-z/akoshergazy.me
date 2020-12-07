import React from 'react';
import Layout from '../components/layout'

const Prism = () => {
  return (
    <div style={{ textAlign: 'center', padding: '80px 24%' }}>
      <div>
        <h1>PRISM</h1>
      </div>
      <div style={{ marginTop: '50px' }}>
        <iframe
            width="100%"
            height="415"
            src="https://www.youtube-nocookie.com/embed/jTxfl3nJ3jA?rel=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
      </div>
      <div style={{ marginTop: '20px', textAlign: 'left' }}>
        <p><span style={{ fontWeight: '700' }}>ARTIST STATEMENT</span> by Ako Shergazy:</p>
        <p>I have always been inspired by sound as an independent physical phenomenon. However what fascinates me most is the importance of sound in world construction, both virtual and physical. When I first encountered the rough draft of “Prism” I saw an opportunity to challenge myself in a way I hadn’t before. In this piece, I explore how I can construct a soundscape that evokes and connects the basic senses of the human body.  The film is about the light/color spectrum and its relationship to the human sensation that I have worked on in collaboration with Emma Blaise Doty from Pratt Institute. Through this film, I am representing my understanding of basic color theory and its spatiality. In the production of sound design, I have focused on creating distinct themes for each color shown in the film. To blend out the perplexity of the moving images themes also serve as the storytellers for the viewer. Most of the material used are simple captured sounds such as singing, the jingling of keys, and brushing, which are digitally manipulated to complement the soundscape. </p>
        <p>“Prism” is designed to be watched with any type of head- or earphones to experience the full range of 3D sound. The sound design was deeply inspired by sound designers and composers Haley Shaw and Hildur Guðnadóttir</p>
      </div>
    </div>
  )
}

export default Prism;

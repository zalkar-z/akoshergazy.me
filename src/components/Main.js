import PropTypes from 'prop-types'
import React from 'react'
import JSONData from "../content/mycontent.json"

import Video from '../components/Video'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    // let closeStyle = {"display":"inline-block","position":"absolute", "top":"0px", "right":"0px", "margin-right":"3%","margin-top":"3%", "cursor":"pointer"};

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major" style={{ marginBottom: 0 }}>About Me</h2>
          {/* <p> */}
          {JSONData.AboutContent.map((item) => {
            return (<div><br/>{item}</div>)
          })}
          {/* </p> */}
          {/* not visible in gatsby build */}
          {close}
          {/* <div style={closeStyle} onClick={() => this.props.onCloseArticle()}>
            ← Back
          </div> */}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
            {JSONData.InternshipsStartLine}
            <ul>
              {JSONData.InternShips.map((item) => {
              return (<li><a href={item.link} target="_blank">{item.name}</a><br/></li>)
            })}
            </ul>
            {JSONData.ProjectsStartLine}
            <ul>
              {JSONData.Projects.map((item) => {
              return (<li><Video item={item}></Video></li>)
            })}
            </ul>
            {JSONData.MixingStartLine}
            <ul>
              {JSONData.Mixing.map((item) => {
              return (<li><a href={item.link} target="_blank">{item.name}</a><br/></li>)
            })}
            </ul>
          
          {/* not visible in gatsby build */}
          {close}
          {/* <div style={closeStyle} onClick={() => this.props.onCloseArticle()}>
            ← Back
          </div> */}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major"> Resume </h2>
          {/* <span className="image main">
            <img  />
          </span> */}
          {/* <p> */}
            {JSONData.CVStartLine}
            <br/><br/>
            <div style={{"display":"flex", "justifyContent":"space-around"}}>
              <a href={JSONData.Resume} target="_blank">View Ako Shergazy's Resume</a>
            </div>
          {/* </p> */}
          {/* not visible in gatsby build */}
          {close}
          {/* <div style={closeStyle} onClick={() => this.props.onCloseArticle()}>
            ← Back
          </div> */}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          {JSONData.ContactStartLine}
          <br/>
          {JSONData.ContactSocialText}
          <br/><br/>
          <ul className="icons">
            <li>
              <a href={JSONData.linkedin} className="icon fa-linkedin" target="_blank">
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a href={JSONData.youtube} className="icon fa-youtube" target="_blank">
                <span className="label">YouTube</span>
              </a>
            </li>
            <li>
              <a href={JSONData.facebook} className="icon fa-facebook" target="_blank">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href={JSONData.soundcloud} className="icon fa-soundcloud" target="_blank">
                <span className="label">SoundCloud</span>
              </a>
            </li>
          </ul>
          {/* not visible in gatsby build */}
          {close}
          {/* <div style={closeStyle} onClick={() => this.props.onCloseArticle()}>
            ← Back
          </div> */}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

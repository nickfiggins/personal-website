import React, { Component } from 'react';
import './Portfolio.css';
class Portfolio extends Component {
  render() {

    if(this.props.data){
      var main_project = this.props.data.projects.slice(0,1);
      var presenter = main_project.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage}/>
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
      console.log(presenter);
      var projects = this.props.data.projects.slice(1,).map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>
            <div id="presenter-wrapper" className="bgrid-quarters s-bgrid-thirds cf" style={{paddingBottom: '50px'}}>
            {presenter} <p> <b>Spotipie.com</b><p>
            Website created by myself and <a href="http://github.com/willyptrain/">Will Peterson</a> using React.js and Flask. This application leverages the Spotify
            Web API to provide graphs, recommendations, and various other information about a user's music listening history. 
            </p> </p>
            </div>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;

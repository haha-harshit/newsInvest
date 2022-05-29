import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
        <>
        <div className="container my-5">
          <h2 className="my-5">News Invest | Top Trending News</h2>
          <div className="row">
            <div className="col-md-4">
              <NewsItem title="Shane Warne memorial - watch & follow updates" description="Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground." newsLink="http://www.bbc.co.uk/sport/live/cricket/60916236" newsImg="https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png"/>
            </div>
            <div className="col-md-4">
              <NewsItem title="Shane Warn retired from cricket." description="On Monday evening announcement came that he'll not be able to play cricket from now as going through a serious medical condition."/>
            </div>  
            <div className="col-md-4">
              <NewsItem title="Shane Warn retired from cricket." description="On Monday evening announcement came that he'll not be able to play cricket from now as going through a serious medical condition."/>
            </div>
          </div>
        </div>
        </>
    )
  }
}

export default News
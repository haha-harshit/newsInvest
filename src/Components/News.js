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
              <NewsItem title="Shane Warn retired from cricket." description="On Monday evening announcement came that he'll not be able to play cricket from now as going through a serious medical condition."/>
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
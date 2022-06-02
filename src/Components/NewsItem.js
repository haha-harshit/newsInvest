import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, newsURL, ImgURL, publishedAt, newsAuthor} = this.props;
    let date = new Date(publishedAt)
    console.log(date.toISOString().substring(0, 10));
    console.log(date.getMinutes());

    // console.log(date);
    return (
      <div>
        <div className="card" style={{width: '18rem'}}>
          <img src={ImgURL} className="card-img-top" alt="..."/>
          <div className="card-body">
            <span><code>{date.getMinutes()} mins</code> ago, </span>
            <span>Author: {newsAuthor}</span>
            {/* <h5 className="card-title">{title}</h5> */}
            <h5 className="card-title"><strong>{title}...</strong></h5>
            <p className="card-text">{description}...</p>
            <a href={newsURL} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
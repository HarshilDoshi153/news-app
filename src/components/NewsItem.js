import React, { Component } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
export default class NewsItem extends Component {

  render() {
    let imageUrls = ["https://tse1.mm.bing.net/th?id=OIP.1VGbIetElQMXely9uXdROwHaE7&pid=Api&P=0&h=220",
      "https://tse4.mm.bing.net/th?id=OIP.c1uD1MYRWe-qDmB7iZNjBgHaE9&pid=Api&P=0&h=220",
      "http://thestatetimes.com/wp-content/uploads/2018/02/infotech.jpg",
      "https://tse4.mm.bing.net/th?id=OIP.V1vPzjQcc_hegrssHXAWvAHaEo&pid=Api&P=0&h=220",
      "https://tse3.mm.bing.net/th?id=OIP.b7pX53-YGRddIVqSE8qDAAHaEK&pid=Api&P=0&h=220",
      "https://tse2.mm.bing.net/th?id=OIP.NrYbs9hurY9_2X3bSyAaZgAAAA&pid=Api&P=0&h=220"
    ];
    const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card mb-3">
          <img src={!imageUrl ? randomImage : imageUrl} className="card-img-top" alt="..." />
          {/* <span className="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
          </span> */}
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text m-0"><small className='text-muted'>By {author ? author : "Unknown"} on {new Date(date).toDateString()}</small></p>
            <p className="card-text"><small className='text-muted'>{source ? source : "Unknown Source"}</small></p>

            <a href={newsUrl} target="_blank" className="icon-link icon-link-hover" rel="noreferrer">
              Read More
              <i className="bi bi-arrow-right" aria-hidden="true">
              </i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

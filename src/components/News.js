import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    category: 'general',
    pageSize: 15,
    title: "General"
  }
  
  static propTypes = {
    category: PropTypes.string,
    pageSize: PropTypes.number,
    title: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    this.fetchMoreData = this.fetchMoreData.bind(this); // Bind the method here
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News 24/7`;
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async fetchMoreData() {
    this.setState((prevState) => ({
      page: prevState.page + 1
    }));
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=e0214fe573a3442fa7939deb3efb09a7&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState((prevState) => ({
      articles: prevState.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    }));
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=e0214fe573a3442fa7939deb3efb09a7&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=e0214fe573a3442fa7939deb3efb09a7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    });
  }

  handleNextClick = async () => {
    console.log("Next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=e0214fe573a3442fa7939deb3efb09a7&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      });
    }
  }

  render() {
    return (
      <>
        <h2 className='text-center my-4'>News 24/7 - {this.props.title} Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className='container my-4'>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={this.state.loading && <Spinner />}>
            <div className='container'>
              <div className='row'>
                {this.state.articles.map((element) => {
                  return <div className='col-md-4' key={element.url}>
                    <NewsItem title={element.title ? element.title.slice(0, 35) : ""} description={element.description ? element.description.slice(0, 85) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                  </div>
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    )
  }
}

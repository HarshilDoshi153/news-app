import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';

export default class News extends Component {
  static defaultProps = {
    category: 'general',
    pageSize: 15,
    title: 'General',
  };

  static propTypes = {
    category: PropTypes.string,
    pageSize: PropTypes.number,
    title: PropTypes.string,
    searchTerm: PropTypes.string, // Add prop type for searchTerm
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    // Fetch news on initial load
    this.fetchNews();
  }

  async componentDidUpdate(prevProps) {
    // If the searchTerm or category changes, fetch the updated news
    if (prevProps.searchTerm !== this.props.searchTerm || prevProps.category !== this.props.category) {
      this.setState({ page: 1, articles: [] }, () => {
        this.fetchNews();
      });
    }
  }

  fetchNews = async () => {
    this.setState({ loading: true });
    let url;
    if (this.props.searchTerm) {
      // If there's a search term, use the everything API
      url = `https://newsapi.org/v2/everything?q=${this.props.searchTerm}&apiKey=e0214fe573a3442fa7939deb3efb09a7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      console.log(url);
    } else {
      // Else use the category-based top headlines API
      url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=e0214fe573a3442fa7939deb3efb09a7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      console.log(url);
    }
    
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.page === 1 ? parsedData.articles : this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 }, () => this.fetchNews());
  };

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
            loader={<Spinner />}>
            <div className='container'>
              <div className='row'>
                {this.state.articles.map((element) => {
                  return (
                    <div className='col-md-4' key={element.url}>
                      <NewsItem
                        title={element.title ? element.title.slice(0, 35) : ''}
                        description={element.description ? element.description.slice(0, 85) : ''}
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}

import React, { useEffect, useState, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export default function App() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();

    // eslint-disable-next-line
  }, [page]);

  const getImages = useCallback(() => {
    let apiUrl = `https://api.unsplash.com/photos?client_id=${accessKey}&page=${page}`;

    if (query)
      apiUrl = `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=${page}&query=${query}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const imagesFromApi = data.results ?? data;

        if (page === 1) setImages(imagesFromApi);

        setImages((images) => [...images, ...imagesFromApi]);
      });
  }, [page, query])

  function searchPhoto(e) {
    e.preventDefault();
    setPage(1);
    getImages();
  }

  if (!accessKey) {
    return (
      <a href="https://api.unsplash.com" className="error">
        Required: Get you Unplash API Key First
      </a>
    );
  }

  return (
    <div className="app">
      <h1>Unsplash Image Gallery!</h1>

      <form onSubmit={searchPhoto}>
        <input
          type="text"
          placeholder="Search Unsplash..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>

      <InfiniteScroll
        dataLength={images.length}
        next={() => setPage(page + 1)}
        hasMore={true}
        loader={<h4>...Loading...</h4>}
      >
        <div className="image-grid">
          {images.map((image, index) => (
            <a
              className="image"
              key={index}
              href={image.links.html}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image.urls.regular} alt="Sample" />
            </a>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

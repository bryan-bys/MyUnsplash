import React from "react";
import Masonry from "react-masonry-css";
import Nav from "./Nav";
import Loader from "./Loader";

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

const GalleryContainer = ({ photos, loadMoreImages, loader, searchBox }) => {
  return (
    <>
      <div className="gallery-container">
        <Nav />
        <div className="grid-container">
          {loader && <Loader />}
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {photos
              ? photos.map((photo) => (
                  <div key={photo.id} className="gallery-item">
                    <img src={photo.urls.small} />
                  </div>
                ))
              : null}
            {/* {naturePhotos
              ? naturePhotos.map((photo) => (
                  <div key={photo.id} className="gallery-item">
                    <img src={photo.urls.small} />
                  </div>
                ))
              : null} */}
          </Masonry>
          {photos.length > 11 && (
            <button
              className="load-more"
              onClick={() => {
                loadMoreImages();
              }}
            >
              LOAD MORE...
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default GalleryContainer;

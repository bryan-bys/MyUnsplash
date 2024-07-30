import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import AppBackground from "../components/AppBackground";
import GalleryContainer from "../components/GalleryContainer";
import { getPhotos } from "../api/api";

const SearchResults = () => {
  const { query } = useParams();
  const { location } = useLocation();

  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getQueryPhotos = async () => {
      setPhotos([]);
      setLoader(true);
      try {
        const newPhotos = await getPhotos(`${query}`, page);
        setPhotos((photos) => [...photos, ...newPhotos]);
      } catch (err) {
        console.log(err);
      } finally {
        setLoader(false);
      }
    };
    setPage(2);
    console.log("soy de results");

    getQueryPhotos();
  }, [useParams()]);

  const loadMoreImages = async () => {
    setLoader(true);
    try {
      const newPhotos = await getPhotos(`${query}`, page);
      setPhotos((photos) => [...photos, ...newPhotos]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false);
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <AppBackground />
      <GalleryContainer
        loader={loader}
        photos={photos}
        loadMoreImages={loadMoreImages}
      />
    </>
  );
};

export default SearchResults;

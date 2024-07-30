import React, { useState, useEffect } from "react";
import AppBackground from "../components/AppBackground";
import GalleryContainer from "../components/GalleryContainer";
import { getPhotos } from "../api/api";

const Abstract = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getAbstractPhotos = async () => {
      setLoader(true);
      try {
        const newPhotos = await getPhotos("abstract", page);
        setPhotos((photos) => [...photos, ...newPhotos]);
      } catch (err) {
        console.log(err);
      } finally {
        setLoader(false);
      }
    };
    setPage(2);

    getAbstractPhotos();
  }, []);

  const loadMoreImages = async () => {
    setLoader(true);
    try {
      const newPhotos = await getPhotos("abstract", page);
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

export default Abstract;

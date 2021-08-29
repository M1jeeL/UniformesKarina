import React, { useCallback, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import gallery1 from "../../img/gallery1.jpg";
import gallery2 from "../../img/gallery2.jpg";
import gallery3 from "../../img/gallery3.jpg";
import gallery4 from "../../img/gallery4.jpg";
import gallery5 from "../../img/gallery5.jpg";
import gallery6 from "../../img/gallery6.jpg";
import Gallery from "react-photo-gallery";
import "./Gallery.scss";

const MyGallery = () => {
  const data = [
    {
      src: gallery1,
      width: 1,
      height: 1,
    },
    {
      src: gallery2,
      width: 1,
      height: 1,
    },
    {
      src: gallery3,
      width: 4,
      height: 5,
    },
    {
      src: gallery4,
      width: 1,
      height: 1,
    },
    {
      src: gallery5,
      width: 3,
      height: 4,
    },
    {
      src: gallery6,
      width: 3,
      height: 4,
    },
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div id="gallery">
      <Gallery photos={data} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={data.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      {/* <div className={model ? "model open" : "model"}>
        <img src={tempSrc} alt="Uniformes Karina" />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery-container">
        {data.map((item) => {
          return (
            <div
              className="gallery-pics"
              key={item.id}
              onClick={() => getImg(item.src)}
            >
              <img
                src={item.src}
                alt="Uniformes Karina"
                style={{ width: "100%" }}
              />
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default MyGallery;

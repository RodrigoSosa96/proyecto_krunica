import { useRef, useEffect, useId } from "react";
import { PhotoModal } from "./styled";
import ReactPlayer from 'react-player'
import {getRemoteUrl} from "../../assets/getImageUrl";

function Modal({ selectedItems, setSelectedItems }) {

    const handleClickModal = (e) => {
        e.preventDefault();
        if(e.target === e.currentTarget) {
            setSelectedItems(null);
        }
    }

    const ModalRef = useRef(null);

    //! URL de la imagen
    const url = getRemoteUrl("https://ik.imagekit.io/akxdmkcb7g5u/Krunica/")

    useEffect(() => {

        const ele = ModalRef.current;
        ele.cursor = 'grab';

         // Get the current mouse position
        let pos = {top: 0, left: 0, x: 0, y: 0};

        const mouseMoveHandler = function (e) {
            // How far the mouse has been moved
            const dx = e.clientX - pos.x;
            const dy = e.clientY - pos.y;

            // Scroll the element
            ele.scrollTop = pos.top - dy;
            ele.scrollLeft = pos.left - dx;
        };
        const mouseUpHandler = function () {
            ele.style.cursor = 'grab';
            ele.style.removeProperty('user-select');

            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        };
        const  mouseDownHandler = function (e) {
          if(e.buttons !== 1) return
            ele.style.cursor = 'grabbing';
            ele.style.userSelect = 'none';
            pos.x = e.clientX;
            pos.y = e.clientY;
            pos.left = ele.scrollLeft;
            pos.top = ele.scrollTop;
            //pos.top = ele.offsetTop;

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        }
        
         // Attach the handler
        ele.addEventListener('mousedown', mouseDownHandler);


    }, [])
  
  function createItems(item) {
    // if(!item.img) return null;
    const ItemsArray = [];
    if (item.video) {
      item.video.forEach((src) => {
        ItemsArray.push(<ReactPlayer className="react-player" height="100%" controls  volume={0.2} key={useId()} url={`${url(src, "f-webm")}`}  />);
      });
    }
    if (item.iframe) {
      ItemsArray.push(
        <iframe
          key={useId()}
          src={item.iframe} 
          frameBorder="0"
          allowFullScreen={true}
        />
      );
    }
    
    
    if(!item.img) return ItemsArray;
    item.img.forEach((img, i) => {
      if(i === 0 && item.portada) return 
      ItemsArray.push(<img
        src={url(img, "w-1200")}
        srcSet={`${url(img, "w-700")} 500w,
                ${url(img, "w-800")} 600w,
                ${url(img, "w-900")} 700w,
                ${url(img, "w-1000")} 800w,
                ${url(img, "w-1200")} 1000w,
                ${url(img, "w-1400")} 1200w`}
        alt=""
        // key={i}
        key={useId()}
      />)
    });
    return ItemsArray;
  }
  return (
    <PhotoModal onClick={handleClickModal} $nogap={selectedItems.gap === false}>
      <div>
        <div ref={ModalRef} >
          {createItems(selectedItems)}
        </div>
      </div>
    </PhotoModal>
  );
}

export default Modal;

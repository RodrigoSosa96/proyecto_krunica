import { useRef, useEffect } from "react";
import { PhotoModal } from "./styled";

function Modal({ selectedItems, setSelectedItems }) {

    const handleClickModal = (e) => {
        e.preventDefault();
        if(e.target === e.currentTarget) {
            setSelectedItems(null);
        }
    }

    const ModalRef = useRef(null);

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
    if (item.video || item.iframe) {
      if (item.video) {
        ItemsArray.push(<video src={`https://ik.imagekit.io/akxdmkcb7g5u/tr:w-1200/Krunica/${item.video}?tr=f-webm`} controls />);
      }
      if (item.iframe) {
        ItemsArray.push(<iframe src={item.iframe} />);
      }
    }
    if(!item.img) return ItemsArray;
    item.img.forEach((img, i) => {
      ItemsArray.push(<img
        src={`https://ik.imagekit.io/akxdmkcb7g5u/tr:w-1200/Krunica/${img}`}
        srcSet={`https://ik.imagekit.io/akxdmkcb7g5u/tr:w-500/Krunica/${img} 400w,
									https://ik.imagekit.io/akxdmkcb7g5u/tr:w-600/Krunica/${img} 600w,
									https://ik.imagekit.io/akxdmkcb7g5u/tr:w-700/Krunica/${img} 700w,
									https://ik.imagekit.io/akxdmkcb7g5u/tr:w-900/Krunica/${img} 900w,
									https://ik.imagekit.io/akxdmkcb7g5u/tr:w-1400/Krunica/${img} 1400w
									`}
        alt=""
        key={i}
      />)
    });
    return ItemsArray;
  }
  return (
    <PhotoModal onClick={handleClickModal}>
      <div>
        <div ref={ModalRef} >
          {createItems(selectedItems)}
        </div>
      </div>
    </PhotoModal>
  );
}

export default Modal;

import { useEffect, useState } from 'preact/hooks';
import { useParams } from 'react-router-dom';

import {Masonry, PhotoModal, SectionTitle} from "./styled"
import { trabajos as dataTrabajos } from "../../data.json" 
// import getImageUrl from '../../assets/getImageUrl';



const breakpointColumnsObj = {
    default: 3,
    992: 2,
    576: 1
};



function Trabajos(props) {
    const { category } = useParams()
    const [trabajos, setTrabajos] = useState(dataTrabajos[category])
    const [selectedItem, setSelectedItem] = useState(null);




    const test = (url, height) => {
        return (
            <img 
            src={`https://ik.imagekit.io/akxdmkcb7g5u/${url}?tr=w-600,c-mfit,f-jpg`}
            srcSet={`https://ik.imagekit.io/akxdmkcb7g5u/tr:w-500/${url} 600w,
                    https://ik.imagekit.io/akxdmkcb7g5u/tr:w-600/${url} 600w,
                    https://ik.imagekit.io/akxdmkcb7g5u/tr:w-900/${url} 900w`}
            sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, (max-width: 1200px) 33.3vw"
            alt=""/>
        )
    }


    

    useEffect(() => {
        setTrabajos(dataTrabajos[category])
    }, [category])

    useEffect(() => {
        if (selectedItem) {
            document.body.style.overflow = 'hidden';     
            document.onkeydown = function(evt) {
                console.log(evt.key);
                evt = evt || window.event;
                if (evt.key === "Escape") {
                    setSelectedItem(null)
                }
            }
        }
        else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.onkeydown = null;

        }

    }, [selectedItem])


    const handleClickModal = (e) => {
        e.preventDefault();
        if(e.target === e.currentTarget) {
            setSelectedItem(null);
        }
    }
    const handleClickArticle = (id) => {
        const filterData =trabajos.tarjetas.filter(item => item.id === id)
        setSelectedItem(filterData[0]);
    }
    // const link = getImageUrl("trabajos/") // para no llamar en cada tarjeta
    return (
        <>
            <SectionTitle>{trabajos.titulo}</SectionTitle>
            <Masonry
            breakpointCols={breakpointColumnsObj}
            columnClassName="my-masonry-grid_column">
                {trabajos.tarjetas.map(({ id, img, titulo, descripcion, size, video }) => {
                    return (
                        <article onClick={() => handleClickArticle(id)} key={id}
                            style={{
                                height: size ?? "330px",
                            }}
                        >
                            {img ? <img
                            src={`https://ik.imagekit.io/akxdmkcb7g5u/tr:w-1200/Krunica/${img[0]}`}
                            srcSet={`https://ik.imagekit.io/akxdmkcb7g5u/tr:w-500/Krunica/${img[0]} 600w,
                                    https://ik.imagekit.io/akxdmkcb7g5u/tr:w-600/Krunica/${img[0]} 600w,
                                    https://ik.imagekit.io/akxdmkcb7g5u/tr:w-900/Krunica/${img[0]} 900w`}

                            sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, (max-width: 1200px) 33.3vw"
                            loading='lazy'
                            alt=""/> : video ? <img src='https://ik.imagekit.io/akxdmkcb7g5u/Krunica/taller/video-krunica.mp4/ik-thumbnail.jpg'/> : null}
                            <div>
                                <h4>{titulo}</h4>
                                <p>{descripcion}</p>
                            </div>
                        </article>
                    );
                })}          
            </Masonry>
            {selectedItem && (
                <>
                    <PhotoModal onClick={handleClickModal}>
                        {/* <img src={selectedImg} alt="" /> */}
                        <div >
                            <div>
                                {/* <img src={selectedItem.img[0]} alt="" /> */}
                                <img src="https://source.unsplash.com/random/500x1000/?nature" alt="" srcset="" />
                            </div>
                        </div>
                    </PhotoModal>
                </>
            )}
        </>
    )
}

export default Trabajos;
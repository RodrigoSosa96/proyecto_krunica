import { useEffect, useState } from 'preact/hooks';
import { useParams } from 'react-router-dom';

import {Masonry, PhotoModal, SectionTitle} from "./styled"
import { trabajos as dataTrabajos } from "../../data.json" 
import getImageUrl from '../../assets/getImageUrl';



const breakpointColumnsObj = {
    default: 3,
    992: 2,
    576: 1
};



function Trabajos(props) {
    const { category } = useParams()
    const [trabajos, setTrabajos] = useState(dataTrabajos[category])
    const [selectedItem, setSelectedItem] = useState(null);

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
                {trabajos.tarjetas.map(({ id, img, titulo, descripcion, size }) => {
                    return (
                        <article onClick={() => handleClickArticle(id)} key={id}
                            style={{
                                height: size ?? "330px",
                            }}
                        >
                            {/* <img src={link+ img} loading="lazy" alt="" /> */}
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
                                <img src="https://source.unsplash.com/random/900×700/?nature  " alt="" srcset="" />
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
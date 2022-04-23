import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {Masonry, SectionTitle} from "./styled"
import { trabajos as dataTrabajos } from "../../data.json" 
// import getImageUrl from '../../assets/getImageUrl';
import Tarjetas from './Tarjetas';
import Modal from './Modal';



function Trabajos() {
    const { category } = useParams()
    const [trabajos, setTrabajos] = useState(dataTrabajos[category])
    const [selectedItems, setSelectedItems] = useState(null);
    const breakpointColumnsObj = {
        default: 3,
        992: 2,
        576: 1
    };

    useEffect(() => {
        setTrabajos(dataTrabajos[category])
    }, [category])

    useEffect(() => {
        if (selectedItems) {
            document.body.style.overflow = 'hidden';     
            document.onkeydown = function(evt) {
                evt = evt || window.event;
                if (evt.key === "Escape") {
                    setSelectedItems(null)
                }
            }
        }
        else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.onkeydown = null;

        }

    }, [selectedItems])



    const handleClickArticle = (id) => {
        const filterData =trabajos.tarjetas.filter(item => item.id === id)
        setSelectedItems(filterData[0]);
    }

    

	return (
        <>
            <SectionTitle>{trabajos.titulo}</SectionTitle>

            <Masonry
            breakpointCols={breakpointColumnsObj}
            columnClassName="my-masonry-grid_column" >
                {Tarjetas( {items: trabajos.tarjetas, handleClickArticle})}
            </Masonry>
            {selectedItems && (
				<Modal  selectedItems={selectedItems} setSelectedItems={setSelectedItems}/>
            )}
        </>
    )
}

export default Trabajos;
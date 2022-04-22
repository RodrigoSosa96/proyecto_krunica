import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {Masonry, SectionTitle} from "./styled"
import { trabajos as dataTrabajos } from "../../data.json" 
// import getImageUrl from '../../assets/getImageUrl';
import Tarjetas from './Tarjetas';
import Modal from './Modal';

import { Draggable } from "react-drag-reorder";




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

    
    const handlePositionChange = (curr, newpos) => {
        console.log(curr, newpos)
        const element = trabajos.tarjetas.splice(curr, 1)[0]
        const newTarjetas = trabajos.tarjetas.splice(newpos, 0, element)
        // setTrabajos({...trabajos, tarjetas: newTarjetas})
        // console.log(trabajos)
        

    }

    useEffect(() => {
        setTrabajos({...trabajos, tarjetas: trabajos.tarjetas})

    }, [handlePositionChange])

    

	return (
        <>
            <SectionTitle>{trabajos.titulo}</SectionTitle>
            <Draggable onPosChange={handlePositionChange}>
                {
                    trabajos.tarjetas.map((item, i) => {
                        return <li key={i}>{item.titulo}</li>
                    })
                }
            </Draggable>
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
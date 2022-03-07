import { useEffect, useState } from 'preact/hooks';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import getImageUrl from '../../assets/getImageUrl';

import { trabajos as dataTrabajos } from "../../data.json" 

function Trabajos(props) {
    const { category } = useParams()
    const [trabajos, setTrabajos] = useState(dataTrabajos[category])
    useEffect(() => {
        setTrabajos(dataTrabajos[category])
    }, [category])

    return (
        <>
    
        </>
    )
}

export default Trabajos;
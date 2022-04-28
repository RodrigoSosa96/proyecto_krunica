import { Article } from "./styled";
import {getRemoteUrl} from "../../assets/getImageUrl";
// import getImageUrl from "../../assets/getImageUrl";

function Tarjetas({items, handleClickArticle}) {
	// Tamaños estandar, pero se pueden agregar Customs
    const sizes = {
		"XS" : 0.52,
		"S" : 0.65,
		"M" : 0.88,
		"L" : 1,
		"XL" : 1.60,
		"XXL" : 2.00
	}

	const url = getRemoteUrl("https://res.cloudinary.com/dl0stx6ye/");
	const tarjetas = items.map(({ id, img, titulo, descripcion, size, video }) => {
		const sizeValue = sizes[size] ?? size;
		return (
			<Article onClick={() => handleClickArticle(id)} key={id}

				height= {sizeValue}
			>
				{img ? <img
				src={`${url(img[0])}`}
				// srcset for really good quality

				srcSet={`${url(img[0], "w_600")} 500w,
						${url(img[0], "w_800")} 700w,
						${url(img[0])} 900w`}
						//

				loading='lazy'
				alt=""/>  :
				video ? <img src={`${url(video)}/ik-thumbnail.jpg`}/> : <div />}
				<div>
					<h4>{titulo}</h4>
					<p>{descripcion}</p>
				</div>
			</Article>
		);
	})  
    return tarjetas
}

export default Tarjetas;

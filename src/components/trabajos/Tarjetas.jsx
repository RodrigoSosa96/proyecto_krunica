import { Article } from "./styled";
import {getRemoteUrl} from "../../assets/getImageUrl";

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
	// Modificar de a cuerdo al almacenamiento de las imágenes, "local" para imagenes locales ubicadas en assets
	// en caso de local images, no usar transformaciones, o mejor, comentar srcSet

	const url = getRemoteUrl("https://ik.imagekit.io/akxdmkcb7g5u/Krunica/");
	let imgTotal = 0
	const tarjetas = items.map(({ id, img, titulo, descripcion, size, video }) => {
		if (img)imgTotal += img.length
		const sizeValue = sizes[size] ?? size;
		return (
			<Article onClick={() => handleClickArticle(id)} key={id}

				height= {sizeValue}
			>
				{img ? <img
				src={`${url(img[0], "w-1200")}`}
				srcSet={`${url(img[0], "w-500")} 500w,
						${url(img[0], "w-600")} 600w,
						${url(img[0], "w-900")} 900w`}

				sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, (max-width: 1200px) 33.3vw"
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
	console.log(imgTotal)
    return tarjetas
}

export default Tarjetas;

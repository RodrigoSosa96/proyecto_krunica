import { Article } from "./styled";
import PlayButtonTest from '../../assets/img/play-button.svg'

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
	const tarjetas = items.map(({ id, img, titulo, descripcion, size, video }) => {
		const sizeValue = sizes[size] ?? size;
		return (
			<Article onClick={() => handleClickArticle(id)} key={id}

				height= {sizeValue}
			>
				{img ? <img
				src={`https://ik.imagekit.io/akxdmkcb7g5u/tr:w-1200/Krunica/${img[0]}`}
				srcSet={`https://ik.imagekit.io/akxdmkcb7g5u/tr:w-500/Krunica/${img[0]} 600w,
						https://ik.imagekit.io/akxdmkcb7g5u/tr:w-600/Krunica/${img[0]} 600w,
						https://ik.imagekit.io/akxdmkcb7g5u/tr:w-900/Krunica/${img[0]} 900w`}

				sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, (max-width: 1200px) 33.3vw"
				loading='lazy'
				alt=""/>  :
				video ? <img src={`https://ik.imagekit.io/akxdmkcb7g5u/Krunica/${video}/ik-thumbnail.jpg`}/> : <div />}
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

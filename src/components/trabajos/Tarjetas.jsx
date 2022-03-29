function Tarjetas({items, handleClickArticle}) {
    const sizes = {
		"XS" : 0.52,
		"S" : 0.65,
		"M" : 0.88,
		"L" : 1,
		"XL" : 1.60,
		"XXL" : 2.00
	}
	const tarjetas = items.map(({ id, img, titulo, descripcion, size, video }) => {
		return (
			<article onClick={() => handleClickArticle(id)} key={id}
				style={{
					height: `${sizes[size] * 33}vw`,					
				}}
			>
				{img ? <img
				src={`https://ik.imagekit.io/akxdmkcb7g5u/tr:w-1200/Krunica/${img[0]}`}
				srcSet={`https://ik.imagekit.io/akxdmkcb7g5u/tr:w-500/Krunica/${img[0]} 600w,
						https://ik.imagekit.io/akxdmkcb7g5u/tr:w-600/Krunica/${img[0]} 600w,
						https://ik.imagekit.io/akxdmkcb7g5u/tr:w-900/Krunica/${img[0]} 900w`}

				sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, (max-width: 1200px) 33.3vw"
				loading='lazy'
				alt=""/>  :
				video ? <img src={`https://ik.imagekit.io/akxdmkcb7g5u/Krunica/${video}/ik-thumbnail.jpg`}/> : null}
				<div>
					<h4>{titulo}</h4>
					<p>{descripcion}</p>
				</div>
			</article>
		);
	})  
    return tarjetas
}

export default Tarjetas;

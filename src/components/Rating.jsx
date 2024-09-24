import Icon from "@mdi/react"
import { mdiStar, mdiStarHalf, mdiStarOutline } from "@mdi/js"
export default function Rating(props) {
    const stars = [];

    // Arredondar a nota para o número inteiro mais próximo
    const fullStars = Math.floor(props.rating);
    const hasHalfStar = props.rating % 1 >= 0.5;
    // Adicionar estrelas cheias
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars.push(mdiStar); // Estrela cheia
        } else if (i === fullStars && hasHalfStar) {
            stars.push(mdiStarHalf); // Estrela na metade
        } else {
            stars.push(mdiStarOutline); // Estrela vazia
        }
    }

    return (
        <div className={"flex flex-row items-center "+props.className}>
            {
                stars.map((star, index) => (
                    <Icon key={index} path={star} size={0.8} color="#FFC107" />
                ))
            }
            <span className="text-sm mx-2 text-slate-500">{props.rating}</span>
        </div>
    )
}
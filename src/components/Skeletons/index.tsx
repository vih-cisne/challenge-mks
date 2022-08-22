import Skeleton from "react-loading-skeleton"
import { ButtonBuy} from "../ProductCard/style"
import { SkeletonCard } from "./style"
import bagIcon from "../../images/shopping-bag.svg"



const Skeletons = () => {

    const skeletons = []

    for(let i=0; i<=10;i++) { 

        skeletons.push(
        <SkeletonCard key={i}>
            <Skeleton height={'7rem'} width={'80%'}/>
            <div><Skeleton width={'6rem'} height={'2rem'}/><Skeleton width={'3rem'} height={'1.5rem'}/></div>
            <p><Skeleton height={'2rem'}/></p>

            <ButtonBuy><img src={bagIcon} alt="Ícone de sacola"/>Comprar</ButtonBuy>
        </SkeletonCard>)
    
    }

    return (
    <>{skeletons}</>
    )

}

export default Skeletons
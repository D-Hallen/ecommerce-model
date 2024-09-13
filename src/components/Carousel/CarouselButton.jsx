import Icon from '@mdi/react';
import {mdiArrowRight, mdiArrowLeft} from '@mdi/js'

export default function CarouselButton(props) {
    function moveSlide (){
        if (props.pos === 'left'){
            props.setSlideIndex(prev => {
                if (prev === 0) return props.size - 1
                return prev - 1
            })
        } else {
            props.setSlideIndex(prev => {
                if (prev === props.size - 1) return 0
                return prev + 1
            })
        }
        
    }
    return (
        <button onClick={moveSlide}
        className={`absolute top-52 ${props.pos}-2 hover:bg-white hover:bg-opacity-50
        p-2 border rounded-full`}>
            <Icon path={props.name === 'Prev' ? mdiArrowLeft : mdiArrowRight}
            size={1} color='white'/>
        </button>
    )
}
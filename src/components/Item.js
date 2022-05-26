import Title from './Heading3'
import Image from './Image'
import Paragraph from './Paragraph'
import List from './List'

export default function Item(props) {
    let classes = ''
    let { img, p, list, title } = props

    let id = 'inneritem' + title.split(' ').join('')


    if (img) {
        classes.length > 1 ? classes += ' img' : classes += 'img'
        img = <img src={img} alt={title} />
    }

    if (p) {
        classes.length > 1 ? classes += ' text' : classes += 'text'

    }


    if (list) {
        if (!classes.includes('text')) {
            classes.length > 1 ? classes += ' text' : classes += 'text'
        }
    }


    return (
        <figure className={classes} key={id} id={id}>
            <Image source={img} alt={title} />
            <Title heading={title} />
            <Paragraph content={p} />
            <List listObject={list} />
        </figure>
    )
}
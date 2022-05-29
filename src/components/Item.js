import Title from './Heading3'
import Paragraph from './Paragraph'
import List from './List'

export default function Item(props) {
    let container, classes = ''
    let { p, list, title, link, imgClass } = props
    // id & key
    let id = 'inneritem' + title.split(' ').join('')
    // classes
    if (imgClass) {
        classes.length > 1 ? classes += ' img' : classes += 'img'
    }
    if (p) {
        classes.length > 1 ? classes += ' text' : classes += 'text'

    }
    if (list) {
        if (!classes.includes('text')) {
            classes.length > 1 ? classes += ' text' : classes += 'text'
        }
    }
    // link & source determines how items are rendered
    if (link && imgClass) {
        container = (
            <a href={link} target='_blank' rel="noreferrer">
                <div className={`${imgClass} image`}>
                    <Title heading={title} />
                </div>
            </a>  
        )
    } else if (link && !imgClass) {
        container = (
            <a href={link} target='_blank' rel="noreferrer">
                <div>
                    <Title heading={title} />
                </div>
            </a> 
        )
    } else if (!link && imgClass) {
        container = (
            <div className={`${imgClass} image`}>
                <Title heading={title} />
            </div>
        )
    } else if (!link && !imgClass) {
        container = (
            <div>
                <Title heading={title} />
            </div>
        )
    }
    return (
        <figure className={classes} key={id} id={id}>
            {container}
            <Paragraph content={p} />
            <List listObject={list} />
        </figure>
    )
}
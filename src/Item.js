export default function Item(props) {
    let classes = ''
    let img, t, p, list
    let title = props.title ? props.title : 'Cordell Bonnieux'
    if (props.img) {
        classes.length > 1 ? classes += ' img' : classes += 'img'
        img = <img src={props.img} alt={title} />
    }
    if (props.title) {
        t = <h2>{props.title}</h2>
    }
    if (props.p) {
        classes.length > 1 ? classes += ' text' : classes += 'text'
        p = <p>{props.p}</p>
    }
    if (props.list) {
        if (!classes.includes('text')) {
            classes.length > 1 ? classes += ' text' : classes += 'text'
        }
        // THIS NEEDS TO BE BROKEN DOWN INTO A COMPONENT
        let listItems 
        props.items.forEach((item, index) => {
            listItems += <li>{item}</li> // CANT DO THIS
        })
        list = (
            <figure className={classes}>
                <h4>{props.list.title}</h4>
                <ul>
                    {listItems}
                </ul>
            </figure>
        )
    }
    return (
        {img}
        //{t}
        //{p}
        //{list}
    )
}
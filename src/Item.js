export default function Item(props) {
    let classes = ''
    let img, t, p, list
    let title = props.title ? props.title : 'Cordell Bonnieux'
    if (props.img) {
        classes.length > 1 ? classes += ' img' : classes += 'img'
        img = <img src={props.img} alt={title} />
    } else {
        img = <></>
    }
    if (props.title) {
        t = <h2>{props.title}</h2>
    } else {
        t = <></>
    }
    if (props.p) {
        classes.length > 1 ? classes += ' text' : classes += 'text'
        p = <p>{props.p}</p>
    } else {
        p = <></>
    }
    if (props.list) {
        if (!classes.includes('text')) {
            classes.length > 1 ? classes += ' text' : classes += 'text'
        }
        let listItems = []
        props.items.forEach((item, index) => {
            listItems.append(<li>{item}</li>)
        })
        list = (
            <div className="list">
                <h4>{props.list.title}</h4>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    } else {
        list = <></>
    }
    return (
        <figure className={classes}>
            {img}
            {t}
            {p}
            {list}
        </figure>
    )
}
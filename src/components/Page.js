import Item from './Item'

export default function Page(props) {
    let { page, images, projects } = props 
    let items = []
    let id = page.split(' ').join('')
    let key = 'section' + id
    projects.forEach(item => {
        let uid = item.title.split(' ').join('')
        if (images) {
            let source
            for (let i = 0; i < images.length; i ++) {
                if (images[i].title === item.title) {
                    source = images[i].path
                }
            }
            items.push(<Item img={item.image} src={source} title={item.title} p={item.text} link={item.link} list={item.list} key={uid} />)
        } else {
            items.push(<Item img={item.image} title={item.title} p={item.text} link={item.link} list={item.list} key={uid} />)
        }
        
    })
    return (
        <section key={key} id={id}>
            {items}
        </section>
    )
}
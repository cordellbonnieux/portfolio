import Item from './Item'

export default function Page(props) {
    let [ page ] = [ props ] 
    let items = []
    let key = 'section' + page.page.split(' ').join('')
    page.items.forEach(item => {
        let id = item.title.split(' ').join('')
        items.push(<Item img={item.image} title={item.title} p={item.text} list={item.list} key={id} />)
    });
    return (
        <section key={key}>
            {items}
        </section>
    )
}
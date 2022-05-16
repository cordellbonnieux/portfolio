import Item from './Item'

// EXAMPLE DATA
const kitty = 'https://getwallpapers.com/wallpaper/full/1/0/c/1344537-kitty-cat-wallpaper-1920x1280-meizu.jpg'
let list = {
    title: 'This is a list title',
    items: [
        'item 1',
        'item 2',
        'item 3',
        'item 4',
        'item 5'
    ]
}
//

export default function Page(props) {
    let content
    if (props.section == 'bio') {
        content = []
        content.push(<Item img={kitty} title='example' p='some text about things' list={list} />)
        content.push(<Item img={kitty} title='example' p='some text about things' list={list} />)
        content.push(<Item img={kitty} title='example' p='some text about things' list={list} />)
        content.push(<Item img={kitty} title='example' p='some text about things' list={list} />)
    } else if (props.section == 'projects') {

    } else if (props.section == 'contact') {

    }
    return (
        <section id={props.section}>
            {content}
        </section>
    )
}
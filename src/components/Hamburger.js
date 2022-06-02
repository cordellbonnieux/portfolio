export default function Hamburger() {
    function menu() {
        let element = document.getElementById('menu')
        if (element.className === 'hide') {
            element.className = 'show'
        } else {
            element.className = 'hide'
        }
    }
    return (
        <button id="hamburger" onClick={menu}>menu</button>
    )
}
import React from 'react'
import Bio from './Bio'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = { page: 'bio' }
    }
    render () {
        switch(this.state.page) {
            case 'bio': return <main><Bio /></main>
                break
            case 'projects': return <main></main>
                break
            case 'contact': return <main></main>
                break
            default: return <main></main>
        }
    }
}
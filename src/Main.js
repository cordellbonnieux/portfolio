import React from 'react'
import Page from './Page'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = { page: 'bio' }
    }
    render () {
        switch(this.state.page) {
            case 'bio': return <main><Page section="bio" /></main>
            case 'projects': return <main></main>
            case 'contact': return <main></main>
            default: return <main></main>
        }
    }
}
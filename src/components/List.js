import React ,{Component} from 'react'
class list extends Component {
state = {
    isVisible: false

}
    todos = [
        'Introduction to React state',
        'Class based Component',
        'functional component'
    ]

toggleVisibility = () => {
    this.setState({
        isVisible : this.state.isVisible
    })
}

    render() {
        return (
            <div>
                <button className="visibility-btn" onClick={this.toggleVisibility} > {this.state.isVisible ? 'Hide List' : 'show list'} </button>
                {this.state.isVisible ?
               ( <ul className="list">
               { this.todos.map((todo, i) =>(
                   <li key={i} >{todo}</li>
               ))}
           </ul>) : (<h4>Click on the button to show list</h4>)
                }
                
            </div>
        )
    }
}

export default list

import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  state = {
    text: '',
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    })
  }

  handleSubmit = (event) => {
    console.log(this.props)
    event.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='add todo'
            onChange={(event) => this.handleChange(event)}
            value={this.state.text}
          />
          <input type='submit' />
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (formData) =>
      dispatch({
        type: 'ADD_TODO',
        payload: formData,
      }),
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo)

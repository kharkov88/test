import React from 'react'
import {Button, Modal, Form, Dimmer, Loader} from 'semantic-ui-react'

class FormNewEmployer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: null,
      age: null
    }
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeAge = this.handleChangeAge.bind(this)
  }
  handleChangeName (e) {
    this.setState({
      name: e.target.value
    })
  }
  handleChangeAge (e) {
    this.setState({
      age: e.target.value
    })
  }

  render () {
    let { createItem, loading } = this.props
    let newObj = {
      name: this.state.name,
      age: this.state.age
    }
    return (
      <Modal trigger={<Button color='orange'>Create</Button>}>
        <Modal.Header>Create New Employer</Modal.Header>
        <Modal.Content>
              <Form onSubmit={() => createItem(newObj)}>
                <Form.Field>
                  <label>Name</label>
                  <input type='text' placeholder='First Name' onChange={this.handleChangeName} />
                </Form.Field>
                <Form.Field>
                  <label>Age</label>
                  <input placeholder='Last Name' name='age' onChange={this.handleChangeAge} />
                </Form.Field>
                <Button type='submit'>Submit</Button>
              </Form>
        </Modal.Content>
        <Dimmer active={loading} inverted>
          <Loader inverted content='Loading' />
        </Dimmer>
      </Modal>
    )
  }
}

export default FormNewEmployer

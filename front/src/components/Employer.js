import React from 'react'
import { Segment, Label, Button } from 'semantic-ui-react'

const Employer = (props) => (
  <Segment className='employer'>
    <Label>
      {props.name}, {props.age}
    </Label>
    <div>
      <Button size='mini'>edit</Button>
      <Button
        color='red'
        size='mini'
        onClick={() => props.deleteItem(props.id)}>del
      </Button>
    </div>
  </Segment>
)

export default Employer

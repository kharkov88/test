import React from 'react'
import { Dimmer, Loader, Segment, Container } from 'semantic-ui-react'
import Employer from './Employer'
import FormNewEmployer from './FormNewEmployer'

const Main = (props) => {
  let data = props.data || []
  return (
    <Container id='wrapper'>
      <Segment>
        <FormNewEmployer createItem={props.createItem} loading={props.loading}/>
      </Segment>
      {
        data.map((item, idx) => {
          return (
            <Employer
              key={idx}
              name={item.name}
              age={item.age}
              id={item._id}
              deleteItem={props.deleteItem}
            />)
        })
      }
      <Dimmer active={props.loading} inverted>
        <Loader inverted content='Loading' />
      </Dimmer>
    </Container>
  )
}

export default Main

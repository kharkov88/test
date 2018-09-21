import React from 'react'
import { Link } from 'react-router-dom'
import { Dimmer, Loader, Segment, Container } from 'semantic-ui-react'
import Employer from './Employer'
import FormNewEmployer from './FormNewEmployer'

const HomePage = (props) => {
  let data = props.data || []
  return (
    <Container id='wrapper'>
      <Link to="/login">login</Link>
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
      <FormNewEmployer createItem={props.createItem} loading={props.loading}/>
      <Dimmer active={props.loading} inverted>
        <Loader inverted content='Loading' />
      </Dimmer>
    </Container>
  )
}

export default HomePage

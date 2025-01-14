import React from 'react';
import {Container,Dimmer,Loader,Segment} from 'semantic-ui-react';
const LoadDiv = () => {
  return(
    <Container>
        <Segment>
        <Dimmer active inverted>
          <Loader inverted content='Loading'/>
        </Dimmer>
        </Segment>
      </Container>
  )
}
export default LoadDiv;
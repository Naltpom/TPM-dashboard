import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'

const Invite = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Invite members</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>Please enter an email or import a csv</CardText>
        </CardBody>
      </Card>

    </div>
  )
}

export default Invite

import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'

const MyTickets = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>My tickets</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>See all ticket that i created or where someone notifier me</CardText>
        </CardBody>
      </Card>

    </div>
  )
}

export default MyTickets

import { Row, Col, Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'
import TableMyTickets from '@src/views/ui-elements/tables/TableMyTickets'
import {
  tableHoverAnimation,
  tableResponsive
} from '@src/views/ui-elements/tables/TableSourceCode'


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
      <Row className='match-height'>
        <Col sm='12'>
          <Card title='Table Team' code={tableHoverAnimation, tableResponsive} >
          <CardHeader> <CardTitle>Table Team</CardTitle></CardHeader>
            <TableMyTickets />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default MyTickets


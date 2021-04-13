import { Row, Col, Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import TableTickets from '@src/views/ui-elements/tables/TableTickets'
import {
  tableBasic,
  tableDark,
  tableTheadOptions,
  tableStriped,
  tableStripedDark,
  tableBordered,
  tableBorderless,
  tableContextual,
  tableHover,
  tableSmall,
  tableHoverAnimation,
  tableResponsive
} from '@src/views/ui-elements/tables/TableSourceCode'

const AllTickets = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>All tickets</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>Have access to all ticket of all my teams</CardText>
        </CardBody>
      </Card>
      <Row className='match-height'>
        <Col sm='12'>
          <Card title='Table Team' code={tableHoverAnimation, tableResponsive} >
          <CardHeader> <CardTitle>Table Team</CardTitle></CardHeader>
            <TableTickets />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default AllTickets

import { Row, Col, Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import TableTeam from '@src/views/ui-elements/tables/TableTeam'
import {
  tableHoverAnimation,
  tableResponsive
} from '@src/views/ui-elements/tables/TableSourceCode'

const Members = () => {
  return (

      <Row className='match-height'>
        <Col sm='12'>
          <Card title='Table Team' code={tableHoverAnimation, tableResponsive} >
          <CardHeader> <CardTitle>All team members</CardTitle></CardHeader>
            <CardBody>
              <CardText>
                Use prop <code>responsive</code> to make your table responsive.
              </CardText>
            </CardBody>
            <TableTeam />
          </Card>
        </Col>
      </Row>

  )
}

export default Members

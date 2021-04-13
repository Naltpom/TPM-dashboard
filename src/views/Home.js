import { Row, Col, Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import { Fragment, useEffect } from 'react'
import prism from 'prismjs'
import StatsCard from '@src/views/ui-elements/cards/statistics/StatsCard'
import TableDashboard from './ui-elements/tables/TableDashboard'
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
} from './ui-elements/tables/TableSourceCode'
const Home = () => {
  useEffect(() => {
    prism.highlightAll()
  })
  return (
    <div>
      <Row className='match-height'>
        <Col xl='12'>
          <StatsCard cols={{ lg: '3', md: '4', sm: '6'}} />
        </Col>
      </Row>

      <Card>
        <CardHeader>
          <CardTitle>Want to integrate JWT? 🔒</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            We carefully crafted JWT flow so you can implement JWT with ease and with minimum efforts.
          </CardText>
          <CardText>
            Please read our{' '}
            <CardLink
              href='https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/development/auth'
              target='_blank'
            >
              JWT Documentation
            </CardLink>{' '}
            to get more out of JWT authentication.
          </CardText>
        </CardBody>
      </Card>

    </div>
  )
}

export default Home

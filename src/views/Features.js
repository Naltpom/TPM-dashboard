import { Row, Col, Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'
import CardAction from '@components/card-actions'
import Timeline from '@components/timeline'
import Avatar from '@components/avatar'
// ** Images
import ceo from '@src/assets/images/avatars/12-small.png'
import pdf from '@src/assets/images/icons/file-icons/pdf.png'

const data = [
    {
        title: <b className="text-primary">Ticketing</b>,
        meta: 'for 01 december 2021',
        color: 'info'
    },    
    {
        title: <b className="text-primary">Gestion de team</b>,
        meta: 'for 01 december 2021',
        color: 'info'
    },    
    {
        title: <b className="text-primary">Gestion de projets web</b>,
        meta: 'for 01 december 2021',
        color: 'info'
    },    
    {
        title: <b className="text-secondary">Calendar</b>,
        meta: '2022 +',
        color: 'warning'
    },    
    {
        title: <b className="text-secondary">Retrospective</b>,
        meta: '2022 +',
        color: 'warning'
    },
    {
        title: <b className="text-secondary">Chat messenger</b>,
        meta: '2022 +',
        color: 'warning'
    },    
    {
        title: <b className="text-secondary">Video conference</b>,
        meta: '2022 +',
        color: 'warning'
    }
]

const Features = () => {

  return (
    <div>
        <Row className='match-height'>
            <Col xl='4'>
                <CardAction actions='collapse' title={<b className="text-info">Ticketing</b>}>
                    <CardBody>
                        <CardText>
                            Permettre aux membres des teams de rapporté un incident ou des axes d'amelioration ou autre dans un outil de ticketing
                        </CardText>
                        <CardText>
                            Exemple : jira ...
                        </CardText>
                        <CardText className='text-muted text-right'>
                            <small>Updated 14/04/0221</small>
                        </CardText>
                    </CardBody>
                </CardAction>
            </Col>
            <Col xl='8'>
                <CardAction actions='collapse' title={<b className="text-info">Gestion de team</b>}>
                    <CardBody>
                        <CardText>
                            Permettre la creation de team pour les projets, le leader doit pouvoir invité des email a rejoindre, ses email pourrons accepté de rejoindre la team, le leader pourras choisir les roles de chaque membre, entre membre, visiteur, client
                            etat lors de l'invitation : wating, quand l'utiisateur a accepter de rejoindre il passe en invited
                        </CardText>
                        <CardText className='text-muted text-right'>
                            <small>Updated 14/04/0221</small>
                        </CardText>
                    </CardBody>
                </CardAction>
            </Col>
            <Col xl='12'>
                <CardAction actions='collapse' title={<b className="text-info">Gestion de projets web</b>}>
                    <CardBody>
                        <CardText>
                            Permettre aux membres des teams de crée un projet et d'ajouter des features a developper, un product owner devras indiqué les spécificité, mes membre de la team devrons fournir des diagram uml pour confirmé que le cahier des charge correspond bien au attentes, puis les designer devrons proposé des maquette qui doivent etre validé par les dev et le product owner, puis les dev developpe, mettre en pre prod, le product owner, et les testeur test l'application, font leurs retour, si il y a des modifications a faire, les dev refont les changement remettent en pre production et quand tout les groupes sont satisfait, cloture de la feature en passage en production
                        </CardText>
                        <CardText className='text-muted text-right'>
                            <small>Updated 14/04/0221</small>
                        </CardText>
                    </CardBody>
                </CardAction>
            </Col>
            <Col xl='4'>
                <Row>
                    <Col xl='12'>
                        <CardAction actions='collapse' title={<b className="">Features Timeline</b>}>
                            <CardBody>
                                <Timeline data={data} />
                            </CardBody>
                        </CardAction>
                    </Col>
                </Row>
            </Col>
            <Col xl='8'>
                <Row>


                    <Col xl='6'>
                        <CardAction actions='collapse' title={<b className="text-warning">Calendar</b>}>
                            <CardBody>
                                <CardText>
                                    Calendar de developpement et de relolution de ticket avec les deadlines
                                </CardText>
                                <CardText>
                                    Exemple : retrometro...
                                </CardText>
                                <CardText className='text-muted text-right'>
                                    <small>Updated 14/04/0221</small>
                                </CardText>
                            </CardBody>
                        </CardAction>

                    </Col>
                    <Col xl='6'>
                        <CardAction actions='collapse' title={<b className="text-warning">Chat messenger</b>}>
                            <CardBody>
                                <CardText>
                                    Permettre au utilisateur de crée, envoyé des messages a d'autre utilisateur
                                </CardText>
                                <CardText>
                                    Exemple : facebook, discord, instagram ...
                                </CardText>
                                <CardText className='text-muted text-right'>
                                    <small>Updated 14/04/0221</small>
                                </CardText>
                            </CardBody>
                        </CardAction>

                    </Col>
                    <Col xl='6'>
                        <CardAction actions='collapse' title={<b className="text-warning">Video conference</b>}>
                            <CardBody>
                                <CardText>
                                    Permettre au utilisateur de crée, et rejoindre des call voix avec/sans video et partage d'ecran
                                </CardText>
                                <CardText>
                                    Exemple : discord, google meet...
                                </CardText>
                                <CardText className='text-muted text-right'>
                                    <small>Updated 14/04/0221</small>
                                </CardText>
                            </CardBody>
                        </CardAction>

                    </Col>
                    <Col xl='6'>
                        <CardAction actions='collapse' title={<b className="text-warning">Retrospective</b>}>
                            <CardBody>
                                <CardText>
                                    Creation de retrospective pour les teams 
                                </CardText>
                                <CardText>
                                    Exemple : retrometro...
                                </CardText>
                                <CardText className='text-muted text-right'>
                                    <small>Updated 14/04/0221</small>
                                </CardText>
                            </CardBody>
                        </CardAction>

                    </Col>
                </Row>
            </Col>
        </Row>

    </div>
  )
}

export default Features

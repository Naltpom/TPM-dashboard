import { Row, Col, Card, CardHeader, CardBody, CardTitle, CardText, Badge } from 'reactstrap'
import CardAction from '@components/card-actions'
import Timeline from '@components/timeline'
import Avatar from '@components/avatar'

import { Star } from 'react-feather'

const data = [
    {
        title: <b className="text-primary">Equipes</b>,
        meta: 'for 01 december 2021',
        color: 'info'
    }, 
    {
        title: <b className="text-primary">Label et Super Label</b>,
        meta: 'for 01 december 2021',
        color: 'info'
    },
    {
        title: <b className="text-primary">Ticketing</b>,
        meta: 'for 01 december 2021',
        color: 'info'
    },    
    {
        title: <b className="text-primary">Projets web et fonctionnalités</b>,
        meta: 'for 01 december 2021',
        color: 'info'
    },    
    {
        title: <b className="text-secondary">Compte rendu</b>,
        meta: '2022 +',
        color: 'warning'
    },   
    {
        title: <b className="text-secondary">Calendrier</b>,
        meta: '2022 +',
        color: 'warning'
    },    
    {
        title: <b className="text-secondary">Rétrospective</b>,
        meta: '2022 +',
        color: 'warning'
    },
    {
        title: <b className="text-secondary">Chat messenger</b>,
        meta: '2022 +',
        color: 'warning'
    },    
    {
        title: <b className="text-secondary">Visioconférence</b>,
        meta: '2022 +',
        color: 'warning'
    }
]

const Features = () => {

  return (
    <div>
        <Row className='match-height'>
            <Col lg='6' xl='5'>
                {/* <Row className='match-height'>
                    <Col xs='12'> */}
                        <CardAction actions='collapse' title={<b className="text-info">Projets web et fonctionnalités</b>}>
                            <CardBody>
                                <CardText>
                                    Permettre aux membres des équipes de créer un projet et d'ajouter des fonctionnalités à développer.
                                </CardText>
                                <CardText>
                                    Un Product Owner devra indiquer les spécificités, les membres de l’équipe devrons alors fournir des diagrammes UML pour confirmer que le cahier des charges correspond bien aux attentes.
                                </CardText>
                                <CardText>
                                    Les designers devront ainsi proposer des maquettes qui doivent être validé par les devs et le Product Owner, par la suite les devs développe, mettre en préprod.
                                </CardText>
                                <CardText>
                                    Le Product Owner, et les testeur test l'application, font leurs retours, s’il y a des modifications à faire, les devs refont les changements remettent en préprod.
                                </CardText>
                                <CardText>
                                    Quand tous les groupes sont satisfait, clôture de la fonctionnalité en passage en production.

                                </CardText>
                                <CardText>
                                    <h4>1. Création d'un projet</h4>
                                    <ul>
                                        <li>Product Owner défini le projet avec le leader de l’équipe</li>
                                        <li>Le leader attribut les membres au projet</li>
                                    </ul>
                                </CardText>
                                <CardText>
                                    <h4>2. Création d'une fonctionnalité</h4>
                                    <ul>
                                        <li>Product Owner défini la fonctionnalité</li>
                                        <li>Le leader peut ajouter des membres hors du projet à la fonctionnalité</li>
                                        <li>Création de diagrammes et leurs validations par tous les groupes</li>
                                        <li>Le designer produise les maquettes et validation par le Product Owner</li>
                                        <li>Les dev code et propose une préprod</li>
                                        <li>Les groupes test la fonctionnalité</li>
                                        <li>S’il y a des incidents on crée des tickets pour corriger et retester</li>
                                        <li>Quand tout est satisfait on passe la fonctionnalité en prod</li>
                                    </ul>
                                </CardText>
                                <CardText className='text-muted text-right'>
                                    <small>Updated 14/04/0221</small>
                                </CardText>
                            </CardBody>
                        </CardAction>
                    {/* </Col>
                </Row> */}
            </Col>
            <Col lg='6' xl='7'>
                <Row className='match-height'>
                    <Col xs='12'>
                        <CardAction actions='collapse' title={<b className="text-info">Ticketing</b>}>
                            <CardBody>
                                <CardText>
                                    Permettre aux membres des équipes de rapporter un incident, des axes d'amelioration ou autres dans un outil de ticket.
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
                    <Col xs='12'>
                        <CardAction actions='collapse' title={<b className="text-info">Equipes</b>}>
                            <CardBody>
                                <CardText>
                                    Permettre la creation d’équipe pour les projets, le leader doit pouvoir inviter des emails à rejoindre, ses emails pourrons accepter de rejoindre l’équipe, le leader pourras choisir les roles de chaque membre, entre <b>|membre|</b>, <b>|visiteur|</b>, <b>|client|</b>.
                                </CardText>
                                <CardText>
                                    Etat lors de l'invitation : <b>|waiting|</b>, quand l'utilisateur à accepter de rejoindre il passe en <b>|invited|</b>
                                </CardText>
                                <CardText className='text-muted text-right'>
                                    <small>Updated 14/04/0221</small>
                                </CardText>
                            </CardBody>
                        </CardAction>
                    </Col>
                    <Col xl='12'>
                        <CardAction actions='collapse' title={<b className="text-info">Label et Super Label</b>}>
                            <CardBody>
                                <CardText>
                                    Permettre au leader des équipes de créer des <br/>- <b>|label|</b> pour regrouper ces membres <br/>- <b>|<Star size={12} className='align-middle' />super label|</b> pour regrouper les <b>|label|</b> ou <b>|<Star size={12} className='align-middle' />super label|</b>.
                                </CardText>
                                <CardText>
                                    <ul>
                                        <li>
                                            <Badge color='primary' className='badge-glow mr-1 mb-1'>
                                                <Star size={12} className='align-middle' />
                                                <span className='align-middle ml-25'>DEV</span>
                                            </Badge>
                                            <Badge color='primary' className='mr-1 mb-1'>
                                                dev-app01
                                            </Badge>
                                            <Badge color='primary' className='mr-1 mb-1'>
                                                dev-app02
                                            </Badge>
                                        </li>
                                        <li>
                                            <Badge color='info' className='badge-glow mr-1 mb-1'>
                                                <Star size={12} className='align-middle' />
                                                <span className='align-middle ml-25'>Design</span>
                                            </Badge>
                                            <Badge color='info' className='mr-1 mb-1'>
                                                Design-app01
                                            </Badge>
                                        </li>
                                        <li>
                                            <Badge color='dark' className='mr-1 mb-1'>
                                                Stage
                                            </Badge>
                                            <Badge color='dark' className='mr-1 mb-1'>
                                                Alternance
                                            </Badge>
                                            <Badge color='dark' className='mr-1 mb-1'>
                                                CDD
                                            </Badge>
                                            <Badge color='dark' className='mr-1 mb-1'>
                                                CDI
                                            </Badge>                                        
                                        </li>
                                        <li>
                                            <Badge color='warning' className='badge-glow mr-1 mb-1'>
                                                <Star size={12} className='align-middle' />
                                                <span className='align-middle ml-25'>WORKERS</span>
                                            </Badge>
                                            <Badge color='warning' className='mr-1 mb-1'>
                                                <Star size={12} className='align-middle text-primary' />
                                                <span className='align-middle ml-25'>DEV</span>
                                            </Badge>
                                            <Badge color='warning' className='mr-1 mb-1'>
                                                <Star size={12} className='align-middle text-info' />
                                                <span className='align-middle ml-25'>Design</span>
                                            </Badge>                                    
                                        </li>
                                    </ul>

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
        <Row className='match-height'>
            <Col xl='4' className="order-12 order-xl-1">
                <Row className='match-height'>
                    <Col xl='12'>
                        <CardAction actions='collapse' title={<b className="">Fonctionnalités Timeline de gestion</b>}>
                            <CardBody>
                                <Timeline data={data} />
                            </CardBody>
                        </CardAction>
                    </Col>
                </Row>
            </Col>
            <Col xl='8' className="order-1 order-xl-12">
                <Row className='match-height'>
                    <Col  xl='6'>
                        <CardAction actions='collapse' title={<b className="text-warning">Compte rendu</b>}>
                            <CardBody>
                                <CardText>
                                    Programmer un rappel et effectuer un compte rendu d'activité.
                                </CardText>
                                <CardText>
                                    Le leader d'équipe peut détermine la fréquence de compte rendu pour :
                                    <ul>
                                        <li>Chaque rôle séparément</li>
                                        <li>Chaque membre séparément</li>
                                        <li>Chaque label séparément</li>
                                    </ul>
                                </CardText>
                                <CardText className='text-muted text-right'>
                                    <small>Updated 14/04/0221</small>
                                </CardText>
                            </CardBody>
                        </CardAction>
                    </Col>

                    <Col  xl='6'>
                        <CardAction actions='collapse' title={<b className="text-warning">Calendrier</b>}>
                            <CardBody>
                                <CardText>
                                    Calendrier de developpement et de rélolution de tickets avec les deadlines.
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
                    <Col  xl='6'>
                        <CardAction actions='collapse' title={<b className="text-warning">Chat messenger</b>}>
                            <CardBody>
                                <CardText>
                                    Permettre à l’utilisateur de créer, envoyer des messages a d'autre utilisateur ou groupe d’utilisateurs.
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
                    <Col  xl='6'>
                        <CardAction actions='collapse' title={<b className="text-warning">Visioconférence</b>}>
                            <CardBody>
                                <CardText>
                                    Permettre à l’utilisateur de créer, et rejoindre des call voix avec/sans video et partage d'ecran.
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
                    <Col  xl='6'>
                        <CardAction actions='collapse' title={<b className="text-warning">Rétrospective</b>}>
                            <CardBody>
                                <CardText>
                                    Création de rétrospective pour les équipes. 
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

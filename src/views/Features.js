import { Row, Col, Card, CardHeader, CardBody, CardTitle, CardText, Badge } from 'reactstrap'
import CardAction from '@components/card-actions'
import Timeline from '@components/timeline'
import Avatar from '@components/avatar'

import { Star } from 'react-feather'

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
        title: <b className="text-primary">Gestion de labels</b>,
        meta: 'for 01 december 2021',
        color: 'info'
    },   
    {
        title: <b className="text-secondary">Contre rendu</b>,
        meta: '2022 +',
        color: 'warning'
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
            <Col xl='6'>
                <CardAction actions='collapse' title={<b className="text-info">Gestion de projets web</b>}>
                    <CardBody>
                        <CardText>
                            Permettre aux membres des teams de crée un projet et d'ajouter des features a developper, un product owner devras indiqué les spécificité, mes membre de la team devrons fournir des diagram uml pour confirmé que le cahier des charge correspond bien au attentes, puis les designer devrons proposé des maquette qui doivent etre validé par les dev et le product owner, puis les dev developpe, mettre en pre prod, le product owner, et les testeur test l'application, font leurs retour, si il y a des modifications a faire, les dev refont les changement remettent en pre production et quand tout les groupes sont satisfait, cloture de la feature en passage en production
                        </CardText>
                        <CardText>
                            <h4>1. creation d'un projet</h4>
                            <ul>
                                <li>Product owner defini le projet avec le leader de la team</li>
                                <li>le leader attribut au projet les membre</li>
                                <li>Les designer produise les maquettes et validation par le product owner</li>
                                <li>Les dev code et propose un pre-prod</li>
                                <li>Les groupes test la feature</li>
                                <li>Si il y a des incident on crée des tickets pour corrigé et retester</li>
                                <li>Quand tout est satisfait on passe la feature en prod</li>
                            </ul>
                        </CardText>
                        <CardText>
                            <h4>2. creation d'une feature</h4>
                            <ul>
                                <li>Product owner defini la feature</li>
                                <li>le leader peut attribut a la feature de nouveau membre plus precisement</li>
                                <li>créeation de diagram et leurs validation par tout les groupes</li>
                                <li>Les designer produise les maquettes et validation par le product owner</li>
                                <li>Les dev code et propose un pre-prod</li>
                                <li>Les groupes test la feature</li>
                                <li>Si il y a des incident on crée des tickets pour corrigé et retester</li>
                                <li>Quand tout est satisfait on passe la feature en prod</li>
                            </ul>
                        </CardText>
                        <CardText className='text-muted text-right'>
                            <small>Updated 14/04/0221</small>
                        </CardText>
                    </CardBody>
                </CardAction>
            </Col>
            <Col xl='6'>
                <Row className='match-height'>
                    <Col xs='12'>
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
                    <Col xs='12'>
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
                        <CardAction actions='collapse' title={<b className="text-info">Gestion de label des membres</b>}>
                            <CardBody>
                                <CardText>
                                    Permettre au leader des teams de crée des <br/>- <b>label</b> pour regroupé ces membres <br/>- <b>super label</b> pour regrouper les label.
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
                        <CardAction actions='collapse' title={<b className="">Features Timeline</b>}>
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
                                    Programer un rappel et effectuer un comte rendu d'activité.
                                </CardText>
                                <CardText>
                                    Le leader de team peut determine la frequence de cr pour: 
                                    <ul>
                                        <li>chaque rôle separement</li>
                                        <li>chaque membre separement</li>
                                        <li>chaque label separement</li>
                                    </ul>
                                </CardText>
                                <CardText className='text-muted text-right'>
                                    <small>Updated 14/04/0221</small>
                                </CardText>
                            </CardBody>
                        </CardAction>
                    </Col>

                    <Col  xl='6'>
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
                    <Col  xl='6'>
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
                    <Col  xl='6'>
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
                    <Col  xl='6'>
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

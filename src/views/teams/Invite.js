import { Fragment, useState } from 'react'
import Repeater from '@components/repeater'
import { Row, Col, Card, CardHeader, CardTitle, CardText, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { X, Plus, Check } from 'react-feather'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import Uppy from '@uppy/core'
import { DragDrop } from '@uppy/react'
import thumbnailGenerator from '@uppy/thumbnail-generator'

import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'

const Invite = () => {
  const roleOptions = [
    { value: 'leader', label: 'Leader' },
    { value: 'customer', label: 'Customer' },
    { value: 'member', label: 'Member' },
    { value: 'invited', label: 'Invited' },
    { value: 'wainting', label: 'Wainting' }
  ]

  const [count, setCount] = useState(1)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const deleteForm = e => {
    e.preventDefault()
    e.target.closest('form').remove()
  }

  const [previewArr, setPreviewArr] = useState([])

  const uppy = new Uppy({
    meta: { type: 'avatar' },
    autoProceed: true,
    restrictions: { maxNumberOfFiles: 1, allowedFileTypes: ['.csv'] }
  })

  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated', (file, preview) => {
    const arr = previewArr
    arr.push(preview)
    setPreviewArr([...arr])
  })

  const renderPreview = () => {
    if (previewArr.length) {
      return previewArr.map((src, index) => <img key={index} className='rounded mt-2 mr-1' src={src} alt='avatar' />)
    } else {
      return null
    }
  }

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <h4 className='card-title'>Repeating Forms</h4>
        </CardHeader>

        <CardBody>
        <div className="d-flex justify-content-between">
            <Button.Ripple className='btn-icon' color='success' outline>
              <Check  size={14} />
              <span className='align-middle ml-25'>Confirm</span>
            </Button.Ripple>
            <Button.Ripple className='btn-icon' color='primary' onClick={increaseCount} >
              <Plus size={14} />
              <span className='align-middle ml-25'>Add New</span>
            </Button.Ripple>
          </div>
          <Repeater count={count}>
            {i => (
              <Form key={i}>
                <Row className='justify-content-between align-items-center'>
                  <Col sm={12}>
                    <hr />
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for={`item-name-${i}`}>Email</Label>
                      <Input type='email' id={`item-name-${i}`} placeholder='exemple@corp.com' />
                    </FormGroup>
                  </Col>
                  <Col md={4} className="mb-1">
                    <Label>Role</Label>
                    <Select
                      theme={selectThemeColors}
                      className='react-select'
                      classNamePrefix='select'
                      defaultValue={roleOptions[3]}
                      name='disabled'
                      options={roleOptions}
                      isClearable={false}
                      isDisabled={true}
                    />
                  </Col>
                  <Col md={2}>
                    <Button.Ripple color='danger' className='text-nowrap px-1 float-right w-100' onClick={deleteForm} outline>
                      <X size={14} className='mr-50' />
                      <span>Delete</span>
                    </Button.Ripple>
                  </Col>
                </Row>
              </Form>
            )}
          </Repeater>

        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Invite with a CSV file</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="d-flex justify-content-between align-items-center mb-1">
            <CardText className="mb-0">
              Drop your <code>.csv</code> or clic to find it in your folder.
            </CardText>
            <Button.Ripple className='btn-icon' color='success' outline>
              <Check  size={14} />
              <span className='align-middle ml-25'>Confirm</span>
            </Button.Ripple>
          </div>
          <DragDrop uppy={uppy} />
          {renderPreview()}
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default Invite

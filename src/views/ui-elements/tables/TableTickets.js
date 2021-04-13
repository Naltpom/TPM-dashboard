
import AvatarGroup from '@components/avatar-group'
import Avatar from '@components/avatar'
import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import avatar3 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import avatar4 from '@src/assets/images/portrait/small/avatar-s-8.jpg'
import avatar5 from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import avatar6 from '@src/assets/images/portrait/small/avatar-s-10.jpg'
import { Edit, Trash, BookOpen } from 'react-feather'
import { Table, Badge } from 'reactstrap'

const avatarGroupData1 = [
  {
    title: 'Griffith',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Michael',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Lavinia',
    img: avatar4,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Lavinia',
    img: avatar6,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Lavinia',
    img: avatar5,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData2 = [
  {
    title: 'Patrick',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Lavinia',
    img: avatar6,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Lavinia',
    img: avatar4,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData3 = [
  {
    title: 'Michael',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Lavinia',
    img: avatar4,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Patrick',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Lavinia',
    img: avatar6,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData4 = [
  {
    title: 'Lavinia',
    img: avatar4,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData5 = [
  {
    title: 'Lavinia',
    img: avatar5,
    imgHeight: 26,
    imgWidth: 26
  },  
  {
    title: 'Lavinia',
    img: avatar6,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData6 = [
  {
    title: 'Lavinia',
    img: avatar6,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Lavinia',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Lavinia',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  }
]

const TableTeam = () => {
  return (
    <Table hover responsive>
      <thead>
        <tr>
          <th>Owner</th>
          <th>Members</th>
          <th>Roles</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Peter Charles</td>
          <td>
            <AvatarGroup data={avatarGroupData1} />
          </td>
          <td>
            <Badge pill color='light-danger' className='mr-1'>
              URGENT
            </Badge>
          </td>
          <td>
            <Avatar className="mx-1" color='light-success' icon={<BookOpen size={15} />} />
          </td>

        </tr>
        <tr>
          <td>Ronald Frest</td>
          <td>
            <AvatarGroup data={avatarGroupData2} />
          </td>
          <td>
            <Badge pill color='light-info' className='mr-1'>
              MEDIUM
            </Badge>
          </td>
          <td>
            <Avatar className="mx-1" color='light-success' icon={<BookOpen size={15} />} />
          </td>
        </tr>
        <tr>
          <td>Jack Obes</td>
          <td>
            <AvatarGroup data={avatarGroupData3} />
          </td>
          <td>
            <Badge pill color='light-warning' className='mr-1'>
              HIGHT
            </Badge>
          </td>
          <td>
            <Avatar className="mx-1" color='light-success' icon={<BookOpen size={15} />} />
          </td>
        </tr>
        <tr>
          <td>Jerry Milton</td>
          <td>
            <AvatarGroup data={avatarGroupData4} />
          </td>
          <td>
            <Badge pill color='light-danger' className='mr-1'>
              URGENT
            </Badge>
          </td>
          <td>
            <Avatar className="mx-1" color='light-success' icon={<BookOpen size={15} />} />
          </td>
        </tr>
        <tr>
          <td>Jerry Milton</td>
          <td>
            <AvatarGroup data={avatarGroupData5} />
          </td>
          <td>
            <Badge pill color='light-danger' className='mr-1'>
              URGENT
            </Badge>
          </td>
          <td>
            <Avatar className="mx-1" color='light-success' icon={<BookOpen size={15} />} />
          </td>
        </tr>
        <tr>
          <td>Jerry Milton</td>
          <td>
            <AvatarGroup data={avatarGroupData6} />
          </td>
          <td>
            <Badge pill color='light-success' className='mr-1'>
              LOW
            </Badge>
          </td>
          <td>
            <Avatar className="mx-1" color='light-success' icon={<BookOpen size={15} />} />
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TableTeam

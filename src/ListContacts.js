import React from 'react'
import PropTypes from 'prop-types'

class ListContacts extends React.Component {
  render () {
    return (
      <ol className='contact-list'>
        {this.props.contacts.map(contact =>
          <li key={contact.id} className='contact-list-item'>
            <div
              className='contact-avatar'
              style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}
            />
            <div className='contact-details'>
              <p>
                {contact.name}
              </p>
              <p>
                {contact.handle}
              </p>
            </div>
            <button
              onClick={() => this.props.onDeleteContact(contact)}
              className='contact-remove'
            >
              Remove
            </button>
          </li>
        )}
      </ol>
    )
  }
}

ListContacts.propTypes = {
  contacts: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired
}

export default ListContacts

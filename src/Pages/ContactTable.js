import React, { useState } from "react";

export const ContactTable = ({ contactList, setContactList }) => {
  console.log(contactList, "lista");

  const handleDelete = (e) => {
    const filteredContacts = contactList.filter(
      (contact) => contact.id !== e.target.id
    );
    setContactList(filteredContacts);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Date of birth</th>
            <th>Contact type</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => {
            return (
              <tr>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.dob}</td>
                <td>{contact.contactType}</td>
                <td>{contact.contact}</td>

                <td>
                  <button className="table-btn">Update</button>

                  <button
                    id={contact.id}
                    className="table-btn"
                    type="reset"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
          ;
        </tbody>
      </table>
    </div>
  );
};

import React from 'react';
import '../App.css';

function OfficeList() {
  const offices = [
    { Name: 'DBS', Rent: 50000, Address: 'Indore' },
    { Name: 'Chappan', Rent: 65000, Address: 'Indore' },
    { Name: 'Nexus', Rent: 55000, Address: 'Pune' },
    { Name: 'Hey', Rent: 70000, Address: 'Mumbai' }
  ];

  return (
    <div>
      {offices.map((office, index) => {
        let colors = [];
        if (office.Rent <= 60000) {
          colors.push('textRed');
        } else {
          colors.push('textGreen');
        }

        return (
          <div key={index} className="officeCard">
            <h2>Name: {office.Name}</h2>
            <h3 className={colors.join(' ')}>Rent Rs. {office.Rent}</h3>
            <h3>Address: {office.Address}</h3>
            {/* <hr /> */}
          </div>
        );
      })}
    </div>
  );
}

export default OfficeList;

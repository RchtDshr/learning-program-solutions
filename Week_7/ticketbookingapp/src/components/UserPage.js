function UserPage() {
  return (
    <div style={styles.container}>
      <h1>Welcome back</h1>
      <p>Flights Available:</p>
      <ul>
        <li>Indigo: Delhi → Mumbai | 10:00 AM</li>
        <li>SpiceJet: Bangalore → Goa | 2:30 PM</li>
        <li>Air India: Kolkata → Chennai | 5:15 PM</li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    
    padding: '20px',
    borderRadius: '10px'
  }
};

export default UserPage;

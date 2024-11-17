function UserProfile(props) {
    return (
        <div style={{
            border: '1px solid gray',
            padding: '20px',
            margin: '20px 0',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{ color: 'blue', fontSize: '24px' }}>{props.name}</h2>
            <p style={{ margin: '10px 0' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
            <p style={{ marginTop: '20px' }}>Bio: {props.bio}</p>
        </div>
    );
}

export default UserProfile;
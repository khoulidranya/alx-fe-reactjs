function Footer() {
    return (
        <footer style={{
            backgroundColor: '#333',
            color: 'white',
            textAlign: 'center',
            padding: '15px 0',
            position: 'fixed',
            bottom: '0',
            left: '0',
            right: '0',
            zIndex: '1000'
        }}>
            <p>&copy; 2023 City Lovers</p>
        </footer>
    );
}

export default Footer;
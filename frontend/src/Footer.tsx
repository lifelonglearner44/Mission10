function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        width: '100%',
        position: 'fixed',
        bottom: '0',
        left: '0',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginTop: '20px' }}>
          <p>
            &copy; {new Date().getFullYear()} BowlingFun | Created by McKay
            Boody | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

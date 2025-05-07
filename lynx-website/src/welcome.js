import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>سلام! به LYNX خوش آمدید</h1>
      <button style={styles.button} onClick={() => navigate('/signup')}>
        ثبت‌نام
      </button>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    background: 'linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontFamily: 'Tahoma',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  button: {
    padding: '10px 30px',
    fontSize: '1rem',
    borderRadius: '8px',
    backgroundColor: '#00c6ff',
    border: 'none',
    cursor: 'pointer',
    color: 'white',
  },
};

export default Welcome;

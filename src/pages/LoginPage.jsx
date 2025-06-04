import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    // Simulação de login bem-sucedido
    navigate('/shop');
  }

  return (
    <div style={{
      height: '100vh',
      background: '#f3f3f3',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <form onSubmit={handleLogin} style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>Login</h2>
        <input type="email" placeholder="Email" required style={{ display: 'block', marginBottom: '1rem', width: '100%' }} />
        <input type="password" placeholder="Senha" required style={{ display: 'block', marginBottom: '1rem', width: '100%' }} />
        <button type="submit" style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#4f6ef7',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}>Entrar</button>
      </form>
    </div>
  );
}

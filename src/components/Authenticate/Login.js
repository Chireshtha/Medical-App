import React, { useEffect } from 'react'
import { supabase } from '../../supabaseClient'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
    if (error) {
      console.error('Login error', error);
    }
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate('/home')
      }
    })
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        navigate('/home')
      }
    })
    return () => listener.subscription.unsubscribe()
  }, [navigate])

  return (
    <Container fluid className='d-flex text-center justify-content-center align-items-center vh-100 login-background'>
      <div className='login-card w-25 h-25 bg-light d-flex flex-column justify-content-center align-items-center rounded-3'>
      <h2 className='mb-4'>Login with GitHub</h2>
      <button onClick={handleLogin} className='bg-primary w-75 text-light px-4 py-2 rounded-3 border-0'>Sign In with GitHub</button>
      </div>
    </Container>
  )
}

export default Login

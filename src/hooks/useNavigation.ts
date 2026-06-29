import { useNavigate } from 'react-router-dom'

function useNavigation() {
  const navigate = useNavigate()

  return {
    goHome: () => navigate('/'),
    goToAbout: () => navigate('/about'),
    goBack: () => navigate(-1),
  }
}

export default useNavigation
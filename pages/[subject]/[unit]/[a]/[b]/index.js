import { useRouter } from 'next/router'
import { useEffect } from 'react';

function App() {
  const router = useRouter()
  const { subject, unit, a, b } = router.query

  useEffect(() => {
    if (b != null) {
        router?.replace("/" + subject + "/" + unit + "/" + a + "/" + b + "/blanks")
    }
  }, [router, subject, unit, a, b])
  

  return (
    <div>
        redirecting...
    </div>
  )
}

export default App;

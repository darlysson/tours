import { useEffect, useState } from 'react'

import './styles/global.module.scss'
import styles from './styles/global.module.scss'

import { data } from './data'

import { Title } from './components/Title'
import { Tour } from './components/Tour'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState(data)

  function handleRemoveTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return (
    <main>
      {tours.length !== 0 ? (
        <>
          {isLoading ? (
            <Title title='Loading...' hasBorderBottom={false} />
          ) : (
            <Title title='Our Tours' hasBorderBottom={true} />
          )}

          <section className={styles.cardGroup}>
            {tours.map((tour) => {
              return (
                <Tour key={tour.id} tour={tour} removeTour={handleRemoveTour} />
              )
            })}
          </section>
        </>
      ) : (
        <>
          <Title title='No tours left. 🤷‍♀️' hasBorderBottom={false} />
          <button
            className={styles.showallButton}
            type='button'
            onClick={() => setTours(data)}
          >
            See all tours
          </button>
        </>
      )}
    </main>
  )
}

export default App

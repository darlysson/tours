import { useState } from 'react'

import styles from './styles.module.scss'

export function Tour({ tour, removeTour }) {
  const [showAllContent, setShowAllContent] = useState(false)

  function handleShowAllContent() {
    setShowAllContent(!showAllContent)
  }

  return (
    <section className={styles.card}>
      <img src={tour.img} alt={tour.title} />

      <div className={styles.content}>
        <header className={styles.header}>
          <h2>{tour.title}</h2>

          <div className={styles.price}>
            <span>{tour.price}</span>
          </div>
        </header>

        <div className={styles.body}>
          {showAllContent ? (
            <>
              <p>{tour.body}</p>
              <button type='button' onClick={() => handleShowAllContent()}>
                Show less
              </button>
            </>
          ) : (
            <>
              <p>{tour.body.slice(0, 200)}...</p>
              <button type='button' onClick={() => handleShowAllContent()}>
                Read more
              </button>
            </>
          )}
        </div>

        <div className={styles.footer}>
          <button type='button' onClick={() => removeTour(tour.id)}>
            I'm not interested
          </button>
        </div>
      </div>
    </section>
  )
}

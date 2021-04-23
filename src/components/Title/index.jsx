import style from './style.module.scss'

export function Title({ title, hasBorderBottom }) {
  return (
    <div className={style.titleContainer}>
      <h1 className={style.title}>{title}</h1>
      {hasBorderBottom && <span></span>}
    </div>
  )
}

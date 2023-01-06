import styles from './CenterHero.module.scss'

export default function CenterHero({title, subtitle}) {
  return (
    <div className={styles.HeroWrapperText}>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
    </div>
  )
}

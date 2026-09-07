import { stats } from '@/content'
import { useCountUp } from '@/hooks/useCountUp'
import { useInView } from '@/hooks/useInView'
import { Container } from '@/components/ui'
import type { Stat } from '@/types/content'
import styles from './Impact.module.css'

function StatItem({ stat }: { stat: Stat }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 })
  const value = useCountUp(stat.value, inView)

  return (
    <div className={styles.stat} ref={ref}>
      <strong className={styles.value}>
        {stat.prefix}
        {value}
        {stat.suffix}
      </strong>
      <span className={styles.label}>{stat.label}</span>
    </div>
  )
}

export function Impact() {
  return (
    <section className={styles.band} aria-label="Impact by the numbers">
      <Container>
        <div className={styles.grid}>
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </Container>
    </section>
  )
}

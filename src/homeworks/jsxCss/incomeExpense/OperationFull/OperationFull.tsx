import React, { FC } from 'react'
import styles from './OperationFull.module.sass'

interface OperationFullProps {
  name: string,
  sum: number,
  desc: string,
  categoryName: string,
  date: string
}

const OperationFull: FC<OperationFullProps> = ({name, sum, desc, categoryName, date}) => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>{name} на {date}</div>
      <div>
          <table className={styles.table}>
          <thead>
              <th>Операция</th>
              <th>Сумма</th>
              <th>Категория</th>
              <th>Дата</th>
            </thead>
            <tr>
                <td>{name}</td>
                <td>{sum}  руб.</td>
                <td>{categoryName}</td>
                <td>{date}</td>
            </tr>
          </table>
        <div className={styles.desc}>
          <span>Описание</span>
          {desc}
        </div>
      </div>
    </div>
  )
}

export default OperationFull
import React, { FC } from 'react'
import styles from './OperationShort.module.sass'


interface OperationShortProps {
  name: string,
  sum: number,
  desc: string,
  categoryName: string
}

const OperationShort: FC<OperationShortProps> = ({name, sum, desc, categoryName}) => {
  return (
    <div >
        <table>
          <tr>
            <div className={styles.operation}>
              <td>
                <span className={styles.head}>Название операции</span>
                <span>{name}</span>
              </td>
              <td>
                <span className={styles.head}>Сумма</span>
                <span>{sum}  руб.</span>
              </td>
              <td>
                <span className={styles.head}>Категория</span>
                <span>{categoryName}</span>
              </td>
              <td>
                <span className={styles.head}>Описание</span>
                <span className={styles.desc}>{desc}</span>
              </td>
            </div>
          </tr>
        </table>
    </div>
  )
}

export default OperationShort
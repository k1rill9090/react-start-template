import React from 'react'
import styles from './InputAddToCart.module.sass'

const InputAddToCard = ({count}) => {

  return (
    <div className={styles.main}>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          className={styles.svg}
        >
          <path 
            fill="currentColor" 
            d="M5 11a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"
          />
        </svg>
      </button>
      <input type='number' className={styles.input} value={count}/>
      <button>
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        className={styles.svg}
        >
        <path 
          fill="currentColor" 
          d="M12 4a1 1 0 0 0-1 1v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 0 0-1-1"
        />
        </svg>
      </button>
    </div>
  )
}

export default InputAddToCard
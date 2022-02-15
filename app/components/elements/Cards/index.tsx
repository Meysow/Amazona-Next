import styles from './Cards.module.scss';
import data from '../../../utils/data';
import Image from 'next/image';
import Link from 'next/link';

const index = () => {
    return (
        <div className={styles.container}>
            {data.products.map((product) => (
                <div className={styles.card} key={product.name}>
                    <Link href={`/product/${product.slug}`} passHref>
                        <div className={styles['image-container']}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                height={10}
                                width={10}
                                layout='responsive'
                                objectFit='cover'
                                priority
                            />
                        </div>
                    </Link>

                    <div className={styles['card__content']}>
                        <h3 className={styles['card__content--title']}>
                            {product.name}
                        </h3>
                        <div className={styles['card__content--body']}>
                            <p>${product.price}</p>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default index;

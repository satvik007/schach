import styles from '../styles/404.module.css';
import Link from 'next/link';

export default function Page() {
  return (
    <section className={styles.page_404}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className="col-sm-12">
            <div className="styles.col-sm-10 col-sm-offset-1  text-center">
              <div className={styles.four_zero_four_bg}/>

              <div className={styles.contant_box_404}>
                <h3 className="text-4xl">
                  Looks like you're lost!
                </h3>

                <Link href="/">
                  <a className={styles.link_404}>
                    Go to Homepage
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


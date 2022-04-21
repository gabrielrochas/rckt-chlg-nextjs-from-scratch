import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { FiCalendar, FiUser } from 'react-icons/fi';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | spacetraveling</title>
      </Head>

      <main>
        <div className={commonStyles.container}>
          <div className={styles.posts}>
            <Link href="#">
              <a>
                <strong>Post title</strong>
                <p>Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                <div className={styles.info}>
                  <div>
                    <FiCalendar />
                    <time>30 Mar 2022</time>
                  </div>
                  <div>
                    <FiUser />
                    <span>Fulano de tal</span>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="#">
              <a>
                <strong>Post title</strong>
                <p>Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                <div className={styles.info}>
                  <div>
                    <FiCalendar />
                    <time>30 Mar 2022</time>
                  </div>
                  <div>
                    <FiUser />
                    <span>Fulano de tal</span>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="#">
              <a>
                <strong>Post title</strong>
                <p>Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                <div className={styles.info}>
                  <div>
                    <FiCalendar />
                    <time>30 Mar 2022</time>
                  </div>
                  <div>
                    <FiUser />
                    <span>Fulano de tal</span>
                  </div>
                </div>
              </a>
            </Link>
          <a href='#' className={styles.loadMore}>Load more</a>
          </div>
        </div>
      </main>
    </>
  );
}


import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '📋 100+ Interview Questions',
    description: (
      <>
        Curated questions covering Red Team, Web Security, Incident Response,
        and more. Perfect for interview preparation.
      </>
    ),
  },
  {
    title: '📚 Organized by Topic',
    description: (
      <>
        Easily browse categories like Computer Networks, Systems, Tools, and
        Security topics. Find what you need quickly.
      </>
    ),
  },
  {
    title: '🔄 Continuously Updated',
    description: (
      <>
        New questions and answers are added regularly. Stay ahead with the
        latest cybersecurity interview trends.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

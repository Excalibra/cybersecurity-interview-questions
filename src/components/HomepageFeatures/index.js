import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import image1 from '@site/static/img/6551222.png';
import image2 from '@site/static/img/6538657.png';
import image3 from '@site/static/img/6551298.png';

const FeatureList = [
  {
    title: '📋 100+ Interview Questions',
    image: image1,
    description: (
      <>
        Curated questions covering Red Team, Web Security, Incident Response,
        and more. Perfect for interview preparation.
      </>
    ),
  },
  {
    title: '📚 Organized by Topic',
    image: image2,
    description: (
      <>
        Easily browse categories like Computer Networks, Systems, Tools, and
        Security topics. Find what you need quickly.
      </>
    ),
  },
  {
    title: '🔄 Continuously Updated',
    image: image3,
    description: (
      <>
        New questions and answers are added regularly. Stay ahead with the
        latest cybersecurity interview trends.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt={title} className={styles.featureImage} />
      </div>
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

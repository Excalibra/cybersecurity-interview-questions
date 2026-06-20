import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '📋 100+ Interview Questions',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Curated questions covering Red Team, Web Security, Incident Response,
        and more. Perfect for interview preparation.
      </>
    ),
  },
  {
    title: '📚 Organized by Topic',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Easily browse categories like Computer Networks, Systems, Tools, and
        Security topics. Find what you need quickly.
      </>
    ),
  },
  {
    title: '🔄 Continuously Updated',
    Svg: require('@site/static/img/6551298.png').default,
    description: (
      <>
        New questions and answers are added regularly. Stay ahead with the
        latest cybersecurity interview trends.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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

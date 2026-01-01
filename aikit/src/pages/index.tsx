import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/features">
            Learn More
          </Link>
        </div>
      </div>
    </header>
  );
}

type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

function Feature({icon, title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className="card">
        <div className={clsx('card__header', styles.cardHeader)}>
          <span className={styles.iconBadge} aria-hidden="true">
            <span className={styles.materialIcon}>{icon}</span>
          </span>
          <h3 className="text--truncate card__title">{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

const FeatureList: FeatureItem[] = [
  {
    icon: 'auto_mode',
    title: '23 Built-in Skills',
    description:
      'Structured workflows for TDD, debugging, refactoring, and more. Enforce best practices in every task.',
  },
  {
    icon: 'smart_toy',
    title: '8 Specialized Agents',
    description:
      'Planner, Builder, Reviewer, Researcher, and more. Automatic delegation for optimal task handling.',
  },
  {
    icon: 'terminal',
    title: '27+ Slash Commands',
    description:
      'Quick shortcuts for core workflows, quick actions, research, and git operations.',
  },
  {
    icon: 'task_alt',
    title: 'Task Tracking',
    description:
      'Beads integration for tracking tasks, status management, and quality gates on completion.',
  },
  {
    icon: 'shield',
    title: 'Anti-Hallucination',
    description:
      '3-layer system to prevent AI errors: task validation, spec enforcement, and review gates.',
  },
  {
    icon: 'storage',
    title: 'Persistent Memory',
    description:
      'Cross-session context transfer with handoffs, observations, and research memory.',
  },
];

function HomepageFeatures() {
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

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Structure OpenCode with Skills, Agents, and Workflows">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

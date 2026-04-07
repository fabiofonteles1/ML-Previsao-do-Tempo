import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroBadge}>Projeto de Machine Learning · UnB · Agronegócio no DF</div>
        <h1 className={styles.heroTitle}>Previsão Climática para o Agronegócio no Distrito Federal</h1>
        <p className={styles.heroSubtitle}>
          Uma documentação com foco em produto para um projeto que integra dados meteorológicos,
          hidrológicos e ambientais para apoiar decisões agrícolas com base em aprendizado de máquina.
        </p>

        <div className={styles.ctaRow}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Explorar documentação
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/fontes-de-dados">
            Ver fontes de dados
          </Link>
        </div>

        <div className={styles.metricsGrid}>
          <div className={styles.metricCard}>
            <span className={styles.metricValue}>6</span>
            <span className={styles.metricLabel}>fontes principais de dados</span>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricValue}>3</span>
            <span className={styles.metricLabel}>variáveis-alvo do projeto</span>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricValue}>DF</span>
            <span className={styles.metricLabel}>foco regional e agrícola</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Início"
      description="Documentação profissional do projeto de Machine Learning aplicado ao agronegócio do Distrito Federal"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

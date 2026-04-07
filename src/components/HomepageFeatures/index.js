import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Foco regional e aplicado',
    description:
      'O projeto foi pensado para o contexto climático e agrícola do Distrito Federal, com atenção especial às culturas de soja e milho e à sazonalidade característica do Cerrado.',
  },
  {
    title: 'Base multifuente',
    description:
      'A documentação organiza fontes públicas e institucionais complementares para formar uma base de dados mais robusta, confiável e preparada para etapas futuras de modelagem.',
  },
  {
    title: 'Pronto para crescer',
    description:
      'A estrutura foi montada para evoluir com gráficos, resultados, dashboards e descrição de modelos no futuro, sem perder a aparência profissional do site.',
  },
];

function Feature({title, description}) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.kicker}>Visão do projeto</span>
          <h2>Uma documentação com aparência de produto, não de trabalho acadêmico comum</h2>
          <p>
            O objetivo desta página é apresentar o projeto de forma clara, elegante e escalável,
            permitindo que a documentação acompanhe a maturidade técnica do repositório.
          </p>
        </div>

        <div className={styles.grid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

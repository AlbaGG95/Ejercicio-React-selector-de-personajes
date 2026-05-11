function Tarjeta({ personaje }) {
  if (!personaje) {
    return (
      <section className="card card--empty">
        <p>Selecciona un personaje</p>
      </section>
    );
  }

  const energyClassName = getEnergyClassName(personaje.energia);

  return (
    <article className="card">
      <span className="card__emoji" aria-hidden="true">
        {personaje.emoji}
      </span>
      <h2 className="card__title">{personaje.nombre}</h2>

      <dl className="card__stats">
        <div className="card__stat">
          <dt>Arma</dt>
          <dd>{personaje.arma}</dd>
        </div>
        <div className="card__stat">
          <dt>Ataque más fuerte</dt>
          <dd>{personaje.ataque}</dd>
        </div>
        <div className="card__stat">
          <dt>Energía</dt>
          <dd>{personaje.energia}</dd>
        </div>
      </dl>

      <div className="energy" aria-label={`Energía ${personaje.energia} de 100`}>
        <span className={`energy__bar ${energyClassName}`} />
      </div>
    </article>
  );
}

function getEnergyClassName(energia) {
  if (energia >= 90) {
    return 'energy__bar--legendary';
  }

  if (energia >= 80) {
    return 'energy__bar--high';
  }

  if (energia >= 70) {
    return 'energy__bar--medium';
  }

  return 'energy__bar--low';
}

export default Tarjeta;

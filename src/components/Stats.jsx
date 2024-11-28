
export default function Stats({ numberOfCharacters, instagramCharactersLeft, facebookCharactersLeft }) {

  return (
    <section className="stats">
      <Stat number={0} label={"Words"} />
      <Stat number={numberOfCharacters} label={"Characters"} />
      <Stat number={instagramCharactersLeft} label={"Instagram"} />
      <Stat number={facebookCharactersLeft} label={"Facebook"} />
    </section>
  )
}

function Stat({number, label}) {
  return (
    <section className="stat">
        <span className="stat__number">{number}</span>
        <h2 className="second-heading">{label}</h2>
    </section>
  )
}
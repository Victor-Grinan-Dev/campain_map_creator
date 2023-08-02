import { unitsImages } from "../../images/units";

function Token({ formation, fn = null, tokenSize = 70 }) {
  let unitCount = formation?.composition?.length;
  const base = tokenSize * 0.857;

  let size;

  if (unitCount === 1) {
    size = base;
  } else if (unitCount === 2) {
    size = tokenSize * 0.5;
  } else if (unitCount === 3 || unitCount === 4) {
    size = tokenSize * 0.4;
  } else if (unitCount === 5 || unitCount === 6) {
    size = base / 2.7;
  } else if (unitCount === 7 || unitCount === 8 || unitCount === 9) {
    size = base / 3;
  }

  console.log("base:", base);
  console.log("size:", size);

  const isBeen = formation.isBeen ? "grayscale(1)" : "grayscale(0)";

  return (
    <div
      className="factionColor token"
      style={{
        backgroundColor: `${formation.color}`,
        width: `${tokenSize}px`,
        height: `${tokenSize}px`,
      }}
    >
      <div
        className="token"
        name="token"
        style={{
          backgroundColor: `${formation.subColor}`,
          width: `${base}px`,
          height: `${base}px`,
        }}
      >
        {formation.composition
          ? formation.composition.map((unit) => {
              return (
                <div
                  id={unit.id}
                  name={unit.name}
                  className="tokenIcon"
                  key={unit.id}
                  type={"tokenIcon"}
                  onClick={fn}
                  style={{
                    backgroundImage: `url(${unitsImages[unit.skills.type]})`,
                    backgroundSize: `${size}px ${size}px`,
                    width: `${size}px`,
                    height: `${size}px`,
                    filter: `${isBeen}`,
                  }}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Token;

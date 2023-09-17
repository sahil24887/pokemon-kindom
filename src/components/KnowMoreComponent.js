import React from "react";
import "./styles/KnowMoreComponent.css";

function KnowMoreComponent({ pokemon, setShowKnowMoreComponent }) {
  const { name, type, image, weight, height, stats } = pokemon;

  console.log("Pokemon -> ", pokemon);

  return (
    <>
      <div className="background-blur"></div>
      <div className={`know-more-container ${type}`}>
        <button
          className={`close-button ${type}`}
          onClick={() => setShowKnowMoreComponent(false)}
        >
          X
        </button>
        <div className="left-section">
          <img className="pokemon-image" src={image} alt={name} />
          <h4 className="pokemon-name">{name}</h4>
        </div>
        <div className={`right-section ${type}`}>
          <table className={`pokemon-details-table ${type}`}>
            <tbody>
              <tr>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td>Weight:</td>
                        <td>{weight}</td>
                      </tr>
                      <tr>
                        <td>Height:</td>
                        <td>{height}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td>Stat1:</td>
                        <td>{stats[0].stat.name}</td>
                      </tr>
                      <tr>
                        <td>Stat2:</td>
                        <td>{stats[1].stat.name}</td>
                      </tr>
                      <tr>
                        <td>Stat3:</td>
                        <td>{stats[2].stat.name}</td>
                      </tr>
                      <tr>
                        <td>Stat4:</td>
                        <td>{stats[3].stat.name}</td>
                      </tr>
                      <tr>
                        <td>Stat5:</td>
                        <td>{stats[4].stat.name}</td>
                      </tr>
                      <tr>
                        <td>Stat6:</td>
                        <td>{stats[5].stat.name}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td>Bs1:</td>
                        <td>{stats[0].base_stat}</td>
                      </tr>
                      <tr>
                        <td>Bs2:</td>
                        <td>{stats[1].base_stat}</td>
                      </tr>
                      <tr>
                        <td>Bs3:</td>
                        <td>{stats[2].base_stat}</td>
                      </tr>
                      <tr>
                        <td>Bs4:</td>
                        <td>{stats[3].base_stat}</td>
                      </tr>
                      <tr>
                        <td>Bs5:</td>
                        <td>{stats[4].base_stat}</td>
                      </tr>
                      <tr>
                        <td>Bs6:</td>
                        <td>{stats[5].base_stat}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default KnowMoreComponent;

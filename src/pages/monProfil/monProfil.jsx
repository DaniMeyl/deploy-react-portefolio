import "./monProfil.css";
import data from "../../assets/outils.json";


const profil = () => {
  return (
    <div className="profil-container">
      <div className="section-content-container">
        {data.outils?.map((rows) => (
          <div key={rows.title} className="section-content-box">
            <br />
            <h1>{rows.title}</h1>
            <div className="section-content-row">
            {rows.items.map((item) => (
              <div
                key={item.title}
                style={{ display: "inline-block" }}
                className="section-content"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                />
                <p>{item.title}</p>
              </div>
            ))}
            </div>
          </div>
        ))}
      </div>
      <a
        className="cv-lien"
        href="https://drive.google.com/file/d/1jKRxUjXmVoZ0h3p5ZtyZv8VwEl3MR9nF/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        Telecharger mon CV
      </a>
    </div>
  );
};

export default profil;

import { useState } from "react";

const Watches = () => {
  const [watchesParts, setWatchesParts] = useState({
    screws: 37,
    gears: 27,
    gems: 18,
  });

  const [orientRecipe, setOrientRecipe] = useState({
    ...watchesParts,
    label: "Orient",
  });

  const renderObj = {
    watchesParts: { get: watchesParts, set: setWatchesParts },
    orientRecipe: { get: orientRecipe, set: setOrientRecipe },
  };
  return (
    <div>
      {Object.keys(renderObj).map((key, i) => {
        return (
          <table key={i}>
            <thead>{key}</thead>
            {Object.keys(renderObj[key].get).map((p, j) => (
              <tr key={[i, j].join("")}>
                <td>{p}</td>
                <td>{renderObj[key].get[p]}</td>
                <td>
                  {typeof renderObj[key].get[p] === "number" ? (
                    <>
                      <button
                        onClick={() =>
                          renderObj[key].set((prev) => {
                            return { ...prev, [p]: prev[p] + 1 };
                          })
                        }
                      >
                        +
                      </button>
                      <button
                        onClick={() =>
                          renderObj[key].set((prev) => {
                            return { ...prev, [p]: prev[p] - 1 };
                          })
                        }
                      >
                        -
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() =>
                        renderObj[key].set((prev) => ({
                          ...prev,
                          [p]: prev[p].match(/[A-Z]{2,}/)
                            ? prev[p][0] + prev[p].slice(1).toLowerCase()
                            : prev[p].toUpperCase(),
                        }))
                      }
                    >
                      {renderObj[key].get[p].match(/[A-Z]{2,}/)
                        ? "lower"
                        : "upper"}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </table>
        );
      })}
    </div>
  );
};

export default Watches;

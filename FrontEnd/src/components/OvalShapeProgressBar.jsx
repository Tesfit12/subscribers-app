import React from "react";

export default function OvalShapeProgressBar() {
  React.useEffect(() => {
    const ProgressLouder = () => {
      var progressBarDiv = document.getElementsByClassName("progress-bar")[0];
      var width = 20;

      var result = setInterval(() => {
        if (width >= 100) clearInterval(result);
        width++;
        progressBarDiv.style.width = width + "%";
        progressBarDiv.innerHTML = width * 1 + "%";
      }, 100);
    };
    ProgressLouder();
  }, []);

  return (
    <>
      <div class="progress-bar" data-label="Loading..."></div>
    </>
  );
}

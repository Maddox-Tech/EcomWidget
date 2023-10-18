function loadWidget() {
  const widgetCss = document.createElement("link");
  widgetCss.rel = "stylesheet";
  widgetCss.href = "./widget.css";

  const cssLoadedPromise = new Promise((resolve, reject) => {
    widgetCss.onload = resolve;
    widgetCss.onerror = reject;
  });

  const fontFamilye = document.createElement("link");
  fontFamilye.rel = "stylesheet";
  fontFamilye.href =
    "https://api.fontshare.com/v2/css?f[]=satoshi@900,700,300,400&display=swap";

  document.head.appendChild(widgetCss);
  document.head.appendChild(fontFamilye);
  
  cssLoadedPromise
    .then(function () {
      console.log("HI");
      installWidget();
    })
    .catch(function (error) {
      console.error("Error loading CSS:", error);
    });
}

const installWidget = () => {
  const mainWidgetContainer = document.createElement("div");
  mainWidgetContainer.classList.add("widget_container");
  mainWidgetContainer.classList.add("hide");

  //   content conainte
  const widgetContentContainer = document.createElement("div");
  widgetContentContainer.classList.add("content_container");

  const leftSide = document.createElement("div");
  leftSide.classList.add("left_content_side");

  const rightSide = document.createElement("div");
  rightSide.classList.add("right_content_side");

  const leftSideImage = document.createElement("img");

  leftSideImage.classList.add("left_side_image");
  leftSideImage.src = "https://voyagescope.com/img/masthead/5/1.png";
  leftSideImage.alt = "image";

  const Heading = document.createElement("h2");
  Heading.classList.add("heading_1");
  Heading.innerText = "Wait";

  const paragraph = document.createElement("p");
  paragraph.innerHTML =
    "Sorry to see you leaving...<br/>Please visit us to receive discounts on your next trip";
  paragraph.classList.add("paragraph");

  const button = document.createElement("a");
  button.innerText = "Visit";
  button.classList.add("visit_cta");
  button.href = "https://voyagescope.com/";
  button.target = "_blank";
  button.referrerPolicy = "noreferrer";

  const closeButton = document.createElement("button");
  const svg = document.createElement("img");
  svg.src = "https://www.svgrepo.com/show/522083/cross-circle.svg";
  svg.classList.add("svg_image");
  closeButton.appendChild(svg);
  closeButton.classList.add("close_button");

  rightSide.appendChild(Heading);
  rightSide.appendChild(paragraph);
  rightSide.appendChild(button);
  rightSide.appendChild(closeButton);

  // APPENDING CHILDS

  leftSide.appendChild(leftSideImage);

  widgetContentContainer.appendChild(leftSide);
  widgetContentContainer.appendChild(rightSide);

  mainWidgetContainer.appendChild(widgetContentContainer);
  document.body.appendChild(mainWidgetContainer);

  mainWidgetContainer.classList.remove("hide");
  setTimeout(() => {
    mainWidgetContainer.classList.add("show");
  }, 500);

  closeButton.addEventListener("click", () => {
    removePopUp(mainWidgetContainer);
  });
};

const removePopUp = (container) => {
  container.classList.add("remove");
};

window.addEventListener("load", loadWidget);

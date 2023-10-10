document.addEventListener("DOMContentLoaded", function () {
  const quoteText1 = document.getElementById("quote1");
  const quoteAuthor1 = document.getElementById("cite1");

  const quoteText2 = document.getElementById("quote2");
  const quoteAuthor2 = document.getElementById("cite2");

  const quoteText3 = document.getElementById("quote3");
  const quoteAuthor3 = document.getElementById("cite3");

  const quoteText4 = document.getElementById("quote4");
  const quoteAuthor4 = document.getElementById("cite4");

  const quoteText5 = document.getElementById("quote5");
  const quoteAuthor5 = document.getElementById("cite5");

  // Función para cargar una nueva cita desde la Quotable API
  function getNewQuote(quoteText, quoteAuthor) {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        quoteText.textContent = `"${data.content}"`;
        quoteAuthor.textContent = `- ${data.author}`;
      })
      .catch((error) => {
        console.error("Error al obtener la cita:", error);
      });
  }

  getNewQuote(quoteText1, quoteAuthor1);
  getNewQuote(quoteText2, quoteAuthor2);
  getNewQuote(quoteText3, quoteAuthor3);
  getNewQuote(quoteText4, quoteAuthor4);
  getNewQuote(quoteText5, quoteAuthor5);
});
